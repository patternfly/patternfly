---
id: contribution
title: Contribution guidelines
---

## Component, layout, demo creation
### Naming blocks

Components, layouts, and demos (blocks) should be in individual folders named using Pascal case (AaaBbb). This is the name that will appear in the navigation of the workspace.
Example: `Button`, `SecondaryNav`

### Handlebars names

The main handlebars file for a block should be named using kebab case. For example, the secondary navigation would be made up of `secondary-nav.hbs` with elements defined in `secondary-nav-item.hbs` and `secondary-nav-link.hbs`.

### Handlebars utilities
| Property | Usage                                                          | Example
| ------------ | --------------------------------------------------- | -------------
| `uniqueId`   | Creates a unique id | badge-&lbrace;&lbrace;uniqueId&rbrace;&rbrace;
| `concat`   | Join multiple strings or variables together |  &lbrace;&lbrace;concat 'Hello' ' world' '!!!'&rbrace;&rbrace; results in Hello world!!!
| `contains` | Tests to see if a string contains another string | &lbrace;&lbrace;#contains alert--modifier 'pf-m-amazingmodifier'&rbrace;&rbrace;<br />&nbsp;&nbsp;&lt;span&gt;Text&lt;/span&gt;<br />&lbrace;&lbrace;else&rbrace;&rbrace;<br />&nbsp;&nbsp;&lt;span&gt;Alternate text&lt;/span&gt;<br />&lbrace;&lbrace;/contains&rbrace;&rbrace;

## Documentation
For each example you should provide the relevant accessibility and usage guidance as well as any additional notes that could be helpful. Any information that is not specific to an example should be included at the bottom of the page.

A good example of this approach is the [table component](/documentation/core/components/table).

## Modifiers
### Modifier parameter

Every block and element should have a parameter allowing for modifier classes and attributes to be passed in. These should be named in kebab case with the block/element name plus `--modifier` and `--attribute` respectively.
For example:

```html noLive
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

When including a partial within a partial, by default, handlebars will pass along the parent context to it's children. This would mean the value of any property specified by the parent is also used by the children.

If there is a possibility of a block nested inside another block of the same type and you want to isolate that nested block, add a new context. For example - see how the nested box is defined below with 'newcontext' added as an attribute:

```html noLive
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

### Common modifier class names

Modifier classes help us to create variations of blocks. Reuse names as much as possible to avoid confusion.

| Modifier class name | Outcome                                                             |
| ------------------- | ------------------------------------------------------------------- |
| `pf-m-gutter`   | Adds vertical (if applicable) and horizontal gutters to the element |


## Pull request guidelines

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
