# Proposal: Nunjucks exports alongside React components

Status: proposed

## Objective

Add Nunjucks exports that shadow the static HTML output of `shinkansen-cogs` React components, while preserving the existing React classes, inheritance hierarchy, and public exports.

The implementation should be additive. Consumers should be able to choose React components or Nunjucks output without changing existing React integrations.

## What the current architecture allows

React can resolve the existing class hierarchy when rendering components to HTML. There is no need to flatten or rewrite the classes first.

For example, `src/js/cogs/checkbox/description/index.jsx` defines `CheckboxDescription`, which overrides `getClassName()` and inherits its rendering implementation through `Description`. Rendering this component through React produces the final markup with the inherited structure and the checkbox class applied.

The main design decision is whether the new exports represent frozen component instances or reusable templates that accept new props.

## Available approaches

| Desired output | Approach | React required at template runtime? |
| --- | --- | --- |
| HTML for a particular component and set of props | Generate static template files or strings at build time | No |
| Templates accepting new props while retaining the React rendering implementation | Register a React rendering helper in Nunjucks | Yes |
| Reusable templates accepting new props independently of React | Create companion Nunjucks templates and verify their output against React | No |

### 1. Generate frozen instances at build time

Use `renderToStaticMarkup()` to render the existing components with explicit props:

```js
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import CheckboxDescription from
  'shinkansen-cogs/cogs/checkbox/description'

const html = renderToStaticMarkup(
  React.createElement(CheckboxDescription, {
    description: 'Receive occasional updates'
  })
)
```

The resulting HTML is:

```html
<span class="description checkbox"><span class="text-content">Receive occasional updates</span></span>
```

An additional build script could render a registry of components and props, then export the resulting strings or write `.njk` files.

This approach preserves one rendering implementation and requires no React dependency when consuming the generated output. Each generated result is tied to the props used at build time.

Generated HTML that becomes Nunjucks template source needs a strategy for preserving literal Nunjucks delimiters in text. HTML escaping alone does not prevent text such as `{{ example }}` from being interpreted as template syntax. Any use of raw blocks must also account for literal raw-block closing delimiters.

### 2. Render React through a Nunjucks helper

Register a Nunjucks global or extension that accepts a supported component name and props, renders the corresponding React component with `renderToStaticMarkup()`, and returns the HTML as safe markup.

Consumers could use a proposed API such as:

```njk
{{ renderCog("CheckboxCog", props) }}
```

The helper would resolve names through an explicit component registry. Only the HTML produced by the React renderer would be marked safe; prop values would continue to pass through React's escaping.

This approach accepts new props and retains React as the single rendering implementation. It requires React and React DOM in the server environment where Nunjucks runs, so it does not provide independently executable Nunjucks component implementations.

### 3. Create reusable companion templates

Add a parallel template tree that mirrors useful public component paths:

```text
src/nunjucks/
  components/description.njk
  cogs/checkbox/description.njk
  cogs/checkbox/index.njk
```

Use macros and includes to share markup. The template structure need not reproduce every JavaScript superclass.

For example, a companion checkbox description macro could be:

```njk
{% macro checkboxDescription(props) -%}
{% if props.description -%}
<span class="description checkbox"><span class="text-content">{{ props.description }}</span></span>
{%- endif %}
{%- endmacro %}
```

Configure Nunjucks with autoescaping enabled to preserve the escaping applied to text by the React implementation.

This approach produces reusable templates without React at runtime. It introduces a second rendering implementation, so automated output comparisons are needed to keep the templates aligned with the React components.

## Why static rendering cannot generate general templates

Rendering one component instance evaluates its conditions and produces only the selected output. It does not retain the component's decisions as Nunjucks syntax.

For example, after React evaluates `if (description)`, the rendered HTML contains either the description element or nothing. It no longer expresses how a future description value should affect the output.

Passing `{{ description }}` as a placeholder prop does not recover conditional branches, boolean attributes, default-value precedence, or select-option selection. Automatically translating those behaviours would require a separate compiler with explicitly supported JavaScript and React semantics, rather than a static rendering step.

## Verification for companion templates

Treat the existing React components as the reference implementation. For shared input fixtures:

1. Render the React component with `renderToStaticMarkup()`.
2. Render its Nunjucks companion with equivalent data.
3. Parse and compare the resulting HTML structure, attributes, and text.

Account for harmless serialization differences, such as attribute order or equivalent boolean-attribute syntax, while preserving meaningful text whitespace.

Fixtures should cover:

- Present, omitted, and empty descriptions and titles.
- Text and attribute escaping.
- The `id || name` fallback.
- Required, disabled, and read-only flags and their CSS classes.
- `checked` and `defaultChecked` precedence.
- Value and default-value behaviour, including single and multiple selects.
- Error-message transformation and rendering.
- Component-specific child order, including the checkbox field preceding its title.

Some React props need an explicit data contract in the companion API. In particular, React children used for select options should have a documented Nunjucks equivalent. Existing error-message transformer functions could be reused through an optional JavaScript adapter, or equivalent data could be prepared before rendering.

## Packaging

Add package subpaths for the chosen template exports while retaining all existing React entry points.

Possible additions include:

- Template files that consumers can load through a configured Nunjucks loader.
- A JavaScript entry point exporting template source strings.
- An optional registration helper for runtime integration.

Keep React-dependent helpers separate from React-free template assets. Verify that the published package includes the templates and that supported consumers can resolve them.

## Recommended pathway

For frozen component instances, start with build-time generation through `renderToStaticMarkup()`.

For reusable, React-free templates, start with companion templates and React output comparisons. Pilot `CheckboxDescription` first, then a complete `CheckboxCog`, to establish escaping, conditional rendering, flags, default handling, and composition before expanding across the library.

If retaining one rendering implementation is the overriding requirement and React is acceptable on the server, use the runtime Nunjucks helper instead.

All three approaches can be added without modifying the existing React classes. The choice determines when props are evaluated and whether consumers need React at runtime.

## Static rendering boundary

`renderToStaticMarkup()` produces non-interactive HTML that cannot be hydrated. React event handlers and refs do not provide browser behaviour in this output. Native HTML form controls retain their normal browser behaviour; any additional interaction requires a separate implementation.

## References

- [React: renderToStaticMarkup](https://react.dev/reference/react-dom/server/renderToStaticMarkup)
- [Nunjucks: macros](https://mozilla.github.io/nunjucks/templating.html#macro)
- [Nunjucks: autoescaping](https://mozilla.github.io/nunjucks/templating.html#autoescaping)
- [Nunjucks: raw blocks](https://mozilla.github.io/nunjucks/templating.html#raw)
- [Nunjucks: addGlobal](https://mozilla.github.io/nunjucks/api.html#addglobal)
