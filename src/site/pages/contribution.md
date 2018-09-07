# Contribution Guidelines

[Component, Layout, Demo Creation](#component-layout-demo-creation)
| [Modifiers](#modifiers)
| [Pull Request Guidelines](#pull-request-guidelines)

## Component, Layout, Demo Creation
### Naming Blocks

Components, layouts, and demos (blocks) should be in individual folders named using Pascal case (AaaBbb). This is the name that will appear in the navigation of the workspace.
Example: `Button`, `SecondaryNav`

### Component Example

Examples require a parent javascript class in the component/examples folder (PatternFly uses React for building the example application). These files should be named index.js.

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

There are several properties available on the Example component to help with styling the previews.

| Property | Usage                                                             |
| ------------------- | ------------------------------------------------------------------- |
| `heading`   | Sets the text displayed above the example (required) |
| `minHeight`   | Sets the min-height of the preview box - useful for collapsed items that need space to expand or when a set minimum height would provide value (optional) |
| `docs`   | Sets a reference to an example specific markdown file instead of documentation for the entire component to describe specific functionality displayed (optional) |
| `fullPageOnly`   | Setting to true will only display the preview when full page mode is used (optional) |

```html
<Example heading="Heading" minHeight="20em" docs={docReference} fullPageOnly="">{example}</Example>;
```

### Handlebars names

The main handlebars file for a block should be named using kebab case. For example, the secondary navigation would be made up of `secondary-nav.hbs` with elements defined in `secondary-nav-item.hbs` and `secondary-nav-link.hbs`.

## Modifiers
### Modifier parameter

Every block and element should have a parameter allowing for modifier classes and attributes to be passed in. These should be named in kebab case with the block/element name plus `--modifier` and `--attribute` respectively.
For example:

```html
<!-- Component definition -->
<div class="pf-c-grid{{#if grid--modifier}} {{grid--modifier}}{{/if}}"
  {{#if grid--attribute}}
    {{{grid--attribute}}}
  {{/if}}>
  {{> @partial-block}}
</div>
---
<!-- Using the component in handlebars -->
{{#> grid grid--modifier="pf-m-gutter" grid--attribute='id="grid-id" aria-label="Grid usage example"'}}
  [content]
{{/grid}}
```

When including a partial within a partial, by default, Handlebars will pass along the parent context to it's children. This would mean the value of any property specified by the parent is also used by the children.

If there is a possibility of a block nested inside another block of the same type and you want to isolate that nested block, add a new context. For example - see how the nested box is defined below with 'newcontext' added as an attribute:

```html
{{#> grid grid--modifier="pf-m-gutter" grid--attribute='id="base-grid" aria-label="Base grid"'}}
  {{#> grid-item grid-item--modifier="pf-m-6-col" grid-item--attribute='id="base-grid-item" aria-label="Base grid item"'}}
    {{#> grid newcontext}}
      {{#> grid-item}}
        (nested grid and grid-item will not inherit --modifier or --attribute values)
      {{/grid-item}}
    {{/grid}}
  {{/grid-item}}
{{/grid}}
```

### Common Modifier Class Names

Modifier classes help us to create variations of blocks. Reuse names as much as possible to avoid confusion.

| Modifier Class Name | Outcome                                                             |
| ------------------- | ------------------------------------------------------------------- |
| `pf-m-gutter`   | Adds vertical (if applicable) and horizontal gutters to the element |


## Pull Request Guidelines

In order to streamline reviews and set expectations, the following should be expected when submitting a pull request:

 - All pull requests should have an issue that the work relates to.

 - A single reviewer should follow the PR through from start to finish after it has been submitted - if somebody else needs to follow it through to completion, please make that transition clear in the PR comments.

 - As much as possible, comments should be actionable. It should be clear to the contributor exactly what needs to change. If there are open questions that require in-depth conversation, consider meeting or using [slack](http://slack.patternfly.org) to quickly arrive at an actionable conclusion.

 - If the main issue has been addressed but there is still work that arises from the PR, please open an issue with the necessary information (and referencing this original PR) to follow up on afterwards.

 - The reviewer should consider the following as they review:
    1) Have all css naming conventions been followed?
    2) Have the classes been documented?
    3) Are all variables declared locally and referencing global defaults?
    4) Have you verified the examples match the design?
    5) Does the responsive behavior work correctly?
    6) Have the accessibility standards been followed?
    7) Is the example resilient - if you put more content in it, do things start to break?
