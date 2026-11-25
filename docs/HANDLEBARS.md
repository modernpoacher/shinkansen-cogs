# Proposal: Handlebars exports alongside React components

Status: proposed

## Objective

Add reusable Handlebars templates that shadow the static HTML output of `shinkansen-cogs` React components, while preserving the existing React classes, inheritance hierarchy, public exports, and Nunjucks and Mustache templates.

The implementation should be additive. Consumers should be able to choose React, Nunjucks, Mustache, or Handlebars without changing existing integrations.

The template files and APIs described here are proposed, rather than implemented.

## What the current architecture allows

The React components remain the reference implementation for markup and rendering behaviour. Their class hierarchy does not need to be flattened or rewritten.

For example, `CheckboxDescription` overrides its class-name method while inheriting the description rendering structure. A Handlebars companion can reproduce that final markup without reproducing JavaScript inheritance.

The current Mustache preparation code in `src/mustache/index.mjs` already resolves identifiers, classes, defaults, flags, error messages, and select options into plain data. It provides a useful starting point for Handlebars preparation, subject to preserving the existing Mustache API and behaviour.

Handlebars adds block helpers, subexpressions, and partial calls with explicit contexts and hash parameters. These features support composition, but component semantics can still be prepared before rendering. See [Handlebars expressions](https://handlebarsjs.com/guide/expressions.html) and [partials](https://handlebarsjs.com/guide/partials.html).

## Available approaches

| Desired output | Approach | React required at template runtime? |
| --- | --- | --- |
| HTML for a particular component and set of props | Generate frozen fragments at build time | No |
| Fresh React-rendered components inside Handlebars views | Register a server-side React rendering helper | Yes |
| Reusable Handlebars templates accepting new data independently of React | Create companion templates, prepare view data, and compare output against React | No |

### 1. Generate frozen instances at build time

Render existing components with explicit props through `renderToStaticMarkup()`, then export the resulting HTML strings or files.

This preserves one rendering implementation, but each fragment represents the props supplied at build time. It cannot accept new values or recover conditional branches that React has already evaluated.

If generated HTML is subsequently compiled as a Handlebars template, literal Handlebars delimiters in the fragment need a separate protection strategy. HTML escaping alone does not protect template syntax. This concern does not arise when ordinary strings are supplied as data to an existing companion template.

### 2. Render React through a Handlebars helper

Register a helper on an application-owned Handlebars environment that resolves an approved component name and renders it with `renderToStaticMarkup()`:

```handlebars
{{renderCog "CheckboxCog" props}}
```

The helper would return the renderer-produced HTML as a `Handlebars.SafeString`. Only that generated HTML would bypass Handlebars escaping; application prop values would still pass through React's escaping. Handlebars documents `SafeString` as a way to return helper output without escaping it. [HTML escaping and helpers](https://handlebarsjs.com/guide/expressions.html#html-escaping)

This accepts fresh props and retains React as the rendering implementation. It also requires React on the server and treats each component as an opaque HTML fragment within the surrounding template.

### 3. Create reusable companion templates

Add a parallel template tree mirroring useful public component paths:

```text
src/handlebars/
  index.mjs
  index.cjs
  prepare-view.mjs
  components/
    description.hbs
    title.hbs
    error-message.hbs
    input.hbs
    textarea.hbs
    select.hbs
    option.hbs
    optgroup.hbs
    common/
      text-content.hbs
      required.hbs
      disabled.hbs
      readonly.hbs
  cogs/
    checkbox/
      index.hbs
      description.hbs
      title.hbs
      error-message.hbs
      field.hbs
    ...
```

Cover all eight cogs: `checkbox`, `email`, `number`, `password`, `radio`, `select`, `text`, and `textarea`, plus their title, description, error-message, and field companions.

Use shared partials for markup and a React-free adapter for component semantics. The initial implementation should need only built-in Handlebars helpers, rather than a custom helper for every JavaScript operation.

## Prepare view data before rendering

Introduce a pure function with a proposed signature:

```js
prepareView(templateName, props)
```

It would return unescaped, JSON-serialisable data for the selected component. It would neither render HTML nor modify its input props.

Keep the established `hasTitle`, `hasDescription`, `hasErrorMessage`, and attribute-presence naming where the corresponding behaviour is shared with Mustache. For example, preparing `cogs/checkbox/description.hbs` could produce:

```json
{
  "hasDescription": true,
  "className": "description checkbox",
  "text": "Receive occasional updates"
}
```

The component template could delegate to a shared partial with an explicit context:

```handlebars
{{> "shinkansen-cogs/components/description" this}}
```

The shared partial would contain:

```handlebars
{{#if hasDescription}}<span class="{{className}}"><span class="text-content">{{text}}</span></span>{{/if}}
```

For a complete cog, prepare separate `field`, `title`, `description`, and `errorMessage` subviews, using `false` for absent optional components. A checkbox template would preserve field-before-title order:

```handlebars
<div class="{{className}}">{{> "shinkansen-cogs/components/input" field}}{{#if title}}{{> "shinkansen-cogs/components/title" title}}{{/if}}{{#if description}}{{> "shinkansen-cogs/components/description" description}}{{/if}}{{#if errorMessage}}{{> "shinkansen-cogs/components/error-message" errorMessage}}{{/if}}</div>
```

Handlebars supports passing a context directly to a partial. Use that facility instead of relying on implicit lookup across component boundaries. [Partial contexts](https://handlebarsjs.com/guide/partials.html#partial-contexts)

The adapter should resolve:

| Behaviour | Prepared data |
| --- | --- |
| Full-cog identifier fallback | `id || name`; standalone fields and titles use their supplied `id` |
| Wrapper and subcomponent classes | Complete class strings matching the existing component methods |
| Title and description visibility | Booleans matching the React conditions |
| Input values | Conversion matching `toInputValue()` and each field's default handling |
| Value-field defaults | Prefer `defaultValue` when it is not `undefined` |
| Checkbox and radio state | Prefer a boolean `checked`; otherwise use `defaultChecked` |
| Optional attributes | Presence flags and values, preserving empty strings and numeric zero |
| Required, disabled, and read-only markers | Booleans controlling the existing fixed marker partials |
| Error messages | Text from the existing React-free error transformer and its existing rejection behaviour |
| Select options | Option/group records with precomputed selection flags |

For example, use `{{#if hasTabIndex}} tabindex="{{tabIndex}}"{{/if}}`, rather than testing the value itself. Handlebars `#if` treats numeric zero as empty unless `includeZero=true` is specified; a presence flag also handles valid empty attribute strings. [Built-in conditionals](https://handlebarsjs.com/guide/builtin-helpers.html#if)

Fixed marker templates can retain their literal spans and asterisks. Do not add configurable marker fields that the templates do not consume. If marker text or classes later become configurable, introduce an explicit view contract and ensure callers pass that view to the marker partial.

## Share semantics without coupling template engines

Prefer an engine-neutral internal preparation module if extracting the existing logic can preserve Mustache behaviour and public types. Thin adapters would map supported `.mustache` and `.hbs` entry-point names onto the shared component identities.

Otherwise, begin with a dedicated Handlebars adapter that reuses the existing error transformer and verifies its other behaviours against React. A broad refactor is not a prerequisite for the new templates.

In either case, Handlebars consumers should not need Mustache or Nunjucks installed. Validate supported template names explicitly, and keep internal partials distinct from public component entry points. Return fresh plain objects and arrays so one render cannot mutate another render's data.

## Select-option data contract

Use the same plain-data input contract as the Mustache companions, replacing React `children` with `options`:

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

An option would accept `text`, optional `value`, optional `label`, and optional `disabled`. A group would accept `label`, optional `disabled`, and an options array. An omitted option value would use its text for selection.

The adapter would normalise single and multiple values, apply default-value precedence, and compute each option's `selected` flag. Use `#each` with `isOption` and `isGroup` flags to select fixed partials. Render labels and text through escaped interpolation; React elements and raw option HTML would not form part of the contract.

## Escaping and whitespace

Use ordinary escaped `{{value}}` interpolation for text and quoted attribute values. Keep values unescaped during preparation, and avoid `SafeString`, triple-brace output, or raw attribute fragments in the companion templates. Handlebars escapes ordinary expressions by default. [HTML escaping](https://handlebarsjs.com/guide/expressions.html#html-escaping)

Preserve meaningful whitespace independently of source-code formatting. In particular, a textarea needs to preserve a value's leading newlines without introducing a trailing newline. The literal leading-newline pattern currently used by the Mustache textarea is a suitable starting point:

```handlebars
<textarea{{> "shinkansen-cogs/components/attributes" this}}>
{{value}}</textarea>
```

Verify its parsed value for empty strings, normal text, and leading newlines. Do not apply Handlebars whitespace trimming indiscriminately around textarea content or inline text. Whitespace-control syntax affects rendered whitespace and needs output checks. [Whitespace control](https://handlebarsjs.com/guide/expressions.html#whitespace-control)

## Proposed consumer API

Expose a React-free Node entry point at `shinkansen-cogs/handlebars`, supporting ESM and CommonJS:

| Export | Purpose |
| --- | --- |
| `templatesPath` | Absolute directory containing the Handlebars assets |
| `templateNames` | All supported asset filenames relative to that directory |
| `viewTemplateNames` | Public component filenames accepted by `prepareView()` |
| `getTemplateSource(name)` | Read a supported template source string |
| `getPartials()` | Return namespaced partial names mapped to source strings |
| `prepareView(name, props)` | Produce plain component view data |

Example usage, once implemented:

```js
import Handlebars from 'handlebars'
import {
  getPartials,
  getTemplateSource,
  prepareView
} from 'shinkansen-cogs/handlebars'

const handlebars = Handlebars.create()
handlebars.registerPartial(getPartials())

const name = 'cogs/checkbox/index.hbs'
const template = handlebars.compile(getTemplateSource(name))
const html = template(prepareView(name, {
  name: 'updates',
  value: 'yes',
  title: 'Receive updates',
  defaultChecked: true
}))
```

`Handlebars.create()` provides an isolated environment, and `registerPartial()` accepts a map of partials. Consumers would own that environment; the package would not register partials or helpers globally. Cache compiled templates in the application when rendering repeatedly. [Handlebars runtime API](https://handlebarsjs.com/api-reference/runtime.html)

Keep preparation separate from filesystem access, through an export such as `shinkansen-cogs/handlebars/prepare-view`. Browser applications would obtain template sources through their bundler or asset loading.

## Precompiled browser use

Source compilation requires the full Handlebars package. A separate build path can precompile the templates and partials, allowing applications to render with the smaller Handlebars runtime. [Precompiling templates](https://handlebarsjs.com/guide/installation/precompilation.html)

Register executable partials created from the precompiled specifications with `Handlebars.template()`. Registering source strings alone is insufficient for a runtime-only environment. [Partial registration](https://handlebarsjs.com/api-reference/runtime.html#handlebars-registerpartial-name-partial)

Initially publish source assets and document application-owned precompilation. A package-provided precompiled entry point can follow if needed, with an explicit compiler/runtime compatibility policy and tests. Keep it separate from the Node source-loading helpers.

## Verification

Render each React component and its Handlebars companion from equivalent semantic fixtures. Compare parsed HTML structure, attributes, and text, preserving meaningful whitespace while allowing harmless serialization differences.

Cover:

- All eight full cogs and their standalone subcomponents.
- Missing, empty, and populated titles and descriptions.
- Escaping of text, attributes, and option labels, including literal template delimiters in prop values.
- Identifier fallback and the difference between full cogs and standalone components.
- Flag combinations, class strings, marker order, and component-specific child order.
- Omitted versus empty attributes, numeric input zero, and `tabIndex: 0`.
- Value/default-value and checked/default-checked precedence.
- Single and multiple selects, implicit option values, disabled options, groups, and empty selections.
- Existing error transformations and rejection of incompatible definitions.
- Textarea content, leading newlines, and absence of accidental trailing whitespace.
- Explicit partial contexts, complete partial registration, and isolated Handlebars environments.
- Input immutability, fresh view data, and JSON round trips.

Test both normal source compilation and application-style precompilation with the runtime. Add package checks for ESM/CommonJS resolution, declarations, asset subpaths, and rendering without React, React DOM, Babel, Mustache, or Nunjucks installed. The preparation-only entry point should require neither filesystem access nor a template engine.

Reuse semantic fixtures across engines where useful, while keeping engine-specific rendering adapters separate. Run the existing React checks to verify the additive change.

## Packaging

Add `./handlebars`, `./handlebars/prepare-view`, and `./handlebars/*.hbs` exports while preserving existing public entry points. Include declarations for the helper API, input props, option data, and prepared views.

Use Handlebars as a development dependency for compilation and parity checks. Consumers would install their chosen compatible Handlebars version; preparation and source-loading helpers would not import the engine.

Verify that the packed package includes all templates, shared partials, helper modules, and declarations. Document that resolving a `.hbs` asset gives its file location; importing that file directly as a JavaScript string requires a suitable loader.

## Recommended pathway

Implement option 3: reusable companion templates backed by prepared data, built-in Handlebars blocks, explicit partial contexts, and React output comparisons.

Pilot `CheckboxDescription`, then a complete `CheckboxCog`, to establish preparation, partial registration, escaping, defaults, and flags. Expand to the remaining cogs and select options. Verify browser precompilation before describing runtime-only integration as supported.

Reuse existing React-free semantics where practical, without requiring changes to the React classes or coupling one rendering engine to another.

## Static rendering boundary

The templates would reproduce initial HTML. React state updates, event handlers, refs, and hydration are outside their scope. Native HTML form controls would retain their normal browser behaviour; additional interaction would require a separate implementation.

## References

- [Nunjucks proposal](NUNJUCKS.md)
- [Mustache proposal](MUSTACHE.md)
- [Handlebars expressions](https://handlebarsjs.com/guide/expressions.html)
- [Handlebars partials](https://handlebarsjs.com/guide/partials.html)
- [Built-in helpers](https://handlebarsjs.com/guide/builtin-helpers.html)
- [Handlebars runtime API](https://handlebarsjs.com/api-reference/runtime.html)
- [Precompiling templates](https://handlebarsjs.com/guide/installation/precompilation.html)
