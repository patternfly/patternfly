# Contribution Guidelines

## Naming Blocks

Components, layouts, patterns, and demos (blocks) should be in individual folders named using Pascal case (AaaBbb). This is the name that will appear in the navigation of the workspace.
Example: `Button`, `SecondaryNav`

### Component Example

Examples require a parent javascript class in the component/examples folder (PatternFly uses React for building the example application). These files should be named with Pascal case: ComponentExample.js

The example component will refer to example handlebars files. These should be named with kebab-case, including the block name plus the example name: `component-name-type-of-example.hbs`

Inside of the React component, we use JavaScript naming standards, naming the imports with Pascal case and properties or constants with camelCase.

For example:

```html
import BoxBasicExample from "./box-basic-example.hbs";
...
const boxBasicExample = BoxBasicExample();
...
<Example heading="Box with no footer">{boxNoHeaderExample}</Example>;
```

### Handlebars names

The main handlebars file for a block should be named using kebab case. For example, the secondary navigation would be made up of `secondary-nav.hbs` with elements defined in `secondary-nav-item.hbs` and `secondary-nav-link.hbs`.

### Modifier parameter

Every block and element should have a parameter allowing for modifier classes to be passed in. These should be named in kebab case with the block/element name plus `--modifier`.
For example:

```html
<!-- Component definition -->
<div class="pf-c-box {{ pf-c-box--modifier }}">
  {{> @partial-block}}
</div>
---
<!-- Using the component in handlebars -->
{{#> box pf-c-box--modifier="pf-m-xxxl pf-m-margin"}}
  {{> @partial-block}}
{{/box}}
```

When including a partial within a partial, by default, Handlebars will pass along the parent context to it's children. This would mean the value of any property specified by the parent is also used by the children.

If there is a possibility of a block nested inside another block of the same type and you want to isolate that nested block, add a new context. For example - see how the nested box is defined below with 'newcontext' added as an attribute:

```html
{{#> box pf-c-box--modifier="pf-m-xxxl pf-m-margin"}}
  {{> @partial-block}}
  {{#> box newcontext pf-c-box--modifier="pf-m-xxxl pf-m-margin"}}
    {{> @partial-block}}
  {{/box}}
{{/box}}
```

## Common Modifier Class Names

Modifier classes help us to create variations of blocks. Reuse names as much as possible to avoid confusion.

| Modifier Class Name | Outcome                                                             |
| ------------------- | ------------------------------------------------------------------- |
| `pf-m-gutter`   | Adds vertical (if applicable) and horizontal gutters to the element |
