# Proposal: Mustache exports alongside React components

Status: proposed

## Objective

Add reusable Mustache templates that shadow the static HTML output of `shinkansen-cogs` React components, while preserving the existing React classes, inheritance hierarchy, public exports, and Nunjucks templates.

The implementation should be additive. Consumers should be able to choose React, Nunjucks, or Mustache without changing existing integrations.

This document proposes an implementation; the template files and APIs below do not yet exist.

## What the current architecture allows

The existing React components remain the reference implementation for markup and rendering behaviour. Their class hierarchy does not need to be flattened or rewritten.

For example, `CheckboxDescription` overrides `getClassName()` while inheriting the description rendering structure. A Mustache companion can reproduce the resulting markup without reproducing JavaScript inheritance.

The central difference from the [Nunjucks proposal](NUNJUCKS.md) is where rendering decisions belong. Mustache provides escaped interpolation, sections, and partials; it does not provide Nunjucks-style expressions, filters, or parameterised macros. Prepare those decisions as data before rendering. See the [Mustache manual](https://mustache.github.io/mustache.5.html) and [mustache.js documentation](https://github.com/janl/mustache.js#templates).

## Available approaches

| Desired output | Approach | React required at template runtime? |
| --- | --- | --- |
| HTML for a particular component and set of props | Generate static fragments at build time | No |
| Fresh React-rendered HTML embedded in a Mustache view | Render React on the server and supply a trusted HTML fragment | Yes |
| Reusable Mustache templates accepting new data independently of React | Create companion templates, prepare view models, and verify output against React | No |

### 1. Generate frozen instances at build time

Render the existing components with explicit props through `renderToStaticMarkup()`, then export the resulting HTML strings or files.

This preserves one rendering implementation, but each fragment represents the props supplied at build time. It cannot accept new values or recover rendering branches that React has already evaluated.

If generated HTML is subsequently parsed as Mustache template source, literal Mustache delimiters in the HTML need protection. One possible strategy is to select alternate delimiters absent from the generated fragment. HTML escaping alone does not protect template syntax.

### 2. Supply React-rendered fragments to Mustache

Render an approved React component on the server, then place the resulting HTML string in the Mustache view:

```mustache
{{{reactHtml}}}
```

Only HTML produced by the React renderer would be supplied through this unescaped slot. Ordinary application values would continue to pass through React's escaping.

This accepts fresh props and retains React as the rendering implementation, but requires React at runtime. It also makes the component an opaque HTML fragment from Mustache's perspective.

### 3. Create reusable companion templates

Add a parallel template tree mirroring useful public component paths:

```text
src/mustache/
  index.mjs
  index.cjs
  prepare-view.mjs
  components/
    description.mustache
    title.mustache
    error-message.mustache
    input.mustache
    textarea.mustache
    select.mustache
    option.mustache
    optgroup.mustache
    common/
      text-content.mustache
      required.mustache
      disabled.mustache
      readonly.mustache
  cogs/
    checkbox/
      index.mustache
      description.mustache
      title.mustache
      error-message.mustache
      field.mustache
    ...
```

Cover all eight cogs: `checkbox`, `email`, `number`, `password`, `radio`, `select`, `text`, and `textarea`, plus their title, description, error-message, and field companions.

Use shared partials for markup and a React-free adapter for component semantics. Avoid relying on optional inheritance extensions, dynamic partial names, or higher-order sections for the core implementation. Partials receive their calling context; pass component-specific data by entering a section around each partial. [Mustache partials](https://mustache.github.io/mustache.5.html#Partials)

## Prepare a view model before rendering

Introduce a pure function with a proposed signature:

```js
prepareView(templateName, props)
```

It would return a plain, JSON-serialisable object containing the values and booleans needed by that template. It would neither render HTML nor modify its input props.

For `cogs/checkbox/description.mustache`, an example prepared view is:

```json
{
  "showDescription": true,
  "className": "description checkbox",
  "text": "Receive occasional updates"
}
```

The template can then use a shared description partial:

```mustache
{{> shinkansen-cogs/components/description}}
```

That shared partial would contain:

```mustache
{{#showDescription}}<span class="{{className}}"><span class="text-content">{{text}}</span></span>{{/showDescription}}
```

For a complete cog, prepare separate `field`, `title`, `description`, and `errorMessage` subviews, using `false` when an optional subcomponent should not render. A checkbox template would compose the field before its title, matching React:

```mustache
<div class="{{className}}">{{#field}}{{> shinkansen-cogs/components/input}}{{/field}}{{#title}}{{> shinkansen-cogs/components/title}}{{/title}}{{#description}}{{> shinkansen-cogs/components/description}}{{/description}}{{#errorMessage}}{{> shinkansen-cogs/components/error-message}}{{/errorMessage}}</div>
```

The adapter should resolve the following behaviours explicitly:

| Behaviour | Prepared data |
| --- | --- |
| Full-cog identifier fallback | `id || name`; standalone fields and titles use their supplied `id` |
| Wrapper and subcomponent classes | Complete class strings matching the existing component methods |
| Title and description visibility | Explicit booleans matching React's conditions |
| Input values | String conversion matching `toInputValue()` and each field's default handling |
| Value-field defaults | Prefer `defaultValue` when it is not `undefined` |
| Checkbox and radio state | Prefer `checked` when it is a boolean; otherwise use `defaultChecked` |
| Optional attributes | Separate presence flags and values, preserving empty strings and numeric zero |
| Required, disabled, and read-only markers | Booleans and the existing marker text and classes |
| Error messages | Text from the existing React-free error transformer, including its error handling |
| Select options | Explicit option/group records with precomputed selection flags |

For example, use `hasTabIndex` to decide whether to emit `tabindex="{{tabIndex}}"`. Testing the numeric value directly as a section condition would incorrectly omit zero in mustache.js.

Give each subview its own declared fields and explicit absent values. Mustache can look up missing names in parent contexts, so an omitted child property must not accidentally inherit an unrelated parent value. [Mustache variable lookup](https://mustache.github.io/mustache.5.html#Variables)

Keep values unescaped during preparation. Escape them once through ordinary Mustache interpolation; do not construct raw attribute or option HTML strings.

## Select-option data contract

Use plain `options` data in place of React `children`, following the same intended contract as the Nunjucks companions:

```js
const props = {
  name: 'destinations',
  title: 'Destinations',
  multiple: true,
  value: ['tokyo', 'kyoto'],
  options: [
    { value: '', text: 'Choose a destination' },
    {
      label: 'Japan',
      options: [
        { value: 'tokyo', text: 'Tokyo' },
        { value: 'kyoto', text: 'Kyoto', disabled: true }
      ]
    }
  ]
}
```

Options would accept `text`, optional `value`, optional `label`, and optional `disabled`. Groups would accept `label`, optional `disabled`, and an options array. Omitting an option value uses its text for selection, matching the corresponding HTML behaviour.

The adapter would normalise single and multiple values, apply default-value precedence, and compute each option's `selected` flag. Explicit `isOption` and `isGroup` flags would select fixed partials. This avoids membership expressions or dynamic partial names in the templates.

React elements and arbitrary HTML would not be accepted as options.

## Proposed consumer API

Expose a React-free Node entry point at `shinkansen-cogs/mustache`, supporting ESM and CommonJS:

| Export | Purpose |
| --- | --- |
| `templatesPath` | Absolute directory containing the template assets |
| `templateNames` | Supported template filenames relative to that directory |
| `getTemplateSource(name)` | Read a supported template's source string |
| `getPartials()` | Return a registry mapping namespaced partial names to source strings |
| `prepareView(name, props)` | Produce the corresponding plain-data view model |

Example usage, once implemented:

```js
import Mustache from 'mustache'
import {
  getPartials,
  getTemplateSource,
  prepareView
} from 'shinkansen-cogs/mustache'

const name = 'cogs/checkbox/index.mustache'
const view = prepareView(name, {
  name: 'updates',
  value: 'yes',
  title: 'Receive updates',
  defaultChecked: true
})

const html = Mustache.render(getTemplateSource(name), view, getPartials())
```

mustache.js accepts partial source through the third argument to `render()`. It does not require a filesystem loader configured like Nunjucks. The proposed registry would use stable names such as `shinkansen-cogs/components/description`, independent of the process working directory. [mustache.js partials](https://github.com/janl/mustache.js#partials)

Keep `prepareView()` separate from filesystem access, with an export such as `shinkansen-cogs/mustache/prepare-view` for browser consumers. Browser applications would supply template and partial strings through their bundler or asset loading. Other Mustache implementations could consume the files with equivalent prepared JSON; they would need an adapter matching the documented view contract.

## Verification

Use shared semantic fixtures to render each React component and its Mustache companion, then compare parsed HTML structure, attributes, and text. Preserve meaningful whitespace while allowing harmless differences in attribute order, entity spelling, and equivalent boolean-attribute syntax.

Cover:

- Full cogs and standalone subcomponents for all eight types.
- Omitted, empty, and populated titles and descriptions.
- Escaping of text, attributes, and select labels, including literal Mustache delimiters in prop values.
- Identifier fallback, including the distinction between full cogs and standalone components.
- Flag combinations, class strings, marker order, and component-specific child order.
- Omitted attributes versus empty strings, `tabIndex: 0`, and numeric input zero.
- Value/default-value and checked/default-checked precedence.
- Single and multiple selects, empty selections, implicit values, disabled options, and groups.
- All supported error transformations and rejection of incompatible definitions.
- Textarea content and leading newlines as parsed by the browser.
- Parent-context lookup collisions between subviews.
- Repeated rendering, input immutability, and serialisation of prepared views.

Add package-level checks for ESM/CommonJS resolution, template subpaths, complete partial registration, and rendering without React, React DOM, Babel, or Nunjucks installed. Run the existing React checks to verify the additive change.

If fixtures can be reused with Nunjucks, keep engine-independent input cases shared and maintain engine-specific rendering adapters. Avoid importing the Nunjucks runtime into Mustache support.

## Packaging

Add `./mustache`, `./mustache/prepare-view`, and `./mustache/*.mustache` exports while retaining all existing entry points. Include declaration files for the helper API, select-option input, and prepared view models.

Keep the chosen Mustache engine and its types as development dependencies for parity checks, with consumers installing their preferred compatible engine. The package's preparation and source-loading helpers should not import a rendering engine.

Verify that the packed package includes all templates, partials, helper modules, and declarations. Document that resolving a `.mustache` asset gives a file location; importing it directly as a JavaScript string requires a suitable loader.

## Recommended pathway

Implement option 3: reusable companion templates backed by a pure view-preparation adapter and React output comparisons.

Start with `CheckboxDescription`, then a complete `CheckboxCog`, to establish the view schema, partial registry, escaping, optional attributes, flags, and default handling. Extend the same approach to the remaining cogs, finishing with select options and groups.

Share existing React-free transformers where useful. Only extract additional shared preparation logic if it can be done without changing the existing React classes or coupling Mustache support to Nunjucks.

## Static rendering boundary

The templates would reproduce initial HTML, rather than React state updates, event handlers, refs, or hydration behaviour. Native HTML form controls would retain their normal browser behaviour; additional interaction would require a separate implementation.

## References

- [Existing Nunjucks proposal](NUNJUCKS.md)
- [Mustache manual](https://mustache.github.io/mustache.5.html)
- [mustache.js documentation](https://github.com/janl/mustache.js)
- [Mustache specification](https://github.com/mustache/spec)
