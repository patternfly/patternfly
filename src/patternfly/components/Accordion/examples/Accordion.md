---
id: Accordion
section: components
cssPrefix: pf-v6-c-accordion
---

## Examples
### Fluid
```hbs
{{#> accordion}}
  {{#> accordion-item}}
    {{#> accordion-toggle}}
      {{#> accordion-toggle-text}}Item one{{/accordion-toggle-text}}
      {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
    {{/accordion-toggle}}
    {{#> accordion-expandable-content}}
      {{#> accordion-expandable-content-body}}
        This text is hidden
      {{/accordion-expandable-content-body}}
    {{/accordion-expandable-content}}
  {{/accordion-item}}

  {{#> accordion-item}}
    {{#> accordion-toggle}}
      {{#> accordion-toggle-text}}Item two{{/accordion-toggle-text}}
      {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
    {{/accordion-toggle}}
    {{#> accordion-expandable-content}}
      {{#> accordion-expandable-content-body}}
        This text is hidden
      {{/accordion-expandable-content-body}}
    {{/accordion-expandable-content}}
  {{/accordion-item}}

  {{#> accordion-item}}
    {{#> accordion-toggle}}
      {{#> accordion-toggle-text}}Item three{{/accordion-toggle-text}}
      {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
    {{/accordion-toggle}}
    {{#> accordion-expandable-content}}
      {{#> accordion-expandable-content-body}}
        This text is hidden
      {{/accordion-expandable-content-body}}
    {{/accordion-expandable-content}}
  {{/accordion-item}}

  {{#> accordion-item accordion-item--IsExpanded=true}}
    {{#> accordion-toggle}}
      {{#> accordion-toggle-text}}Item four{{/accordion-toggle-text}}
      {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
    {{/accordion-toggle}}
    {{#> accordion-expandable-content}}
      {{#> accordion-expandable-content-body}}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      {{/accordion-expandable-content-body}}
    {{/accordion-expandable-content}}
  {{/accordion-item}}

  {{#> accordion-item}}
    {{#> accordion-toggle}}
      {{#> accordion-toggle-text}}Item five{{/accordion-toggle-text}}
      {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
    {{/accordion-toggle}}
    {{#> accordion-expandable-content}}
      {{#> accordion-expandable-content-body}}
        This text is hidden
      {{/accordion-expandable-content-body}}
    {{/accordion-expandable-content}}
  {{/accordion-item}}
{{/accordion}}
```

### Fixed
```hbs
{{#> accordion}}
  {{#> accordion-item}}
    {{#> accordion-toggle}}
      {{#> accordion-toggle-text}}Item one{{/accordion-toggle-text}}
      {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
    {{/accordion-toggle}}
    {{#> accordion-expandable-content accordion-expandable-content--HasNoScrollbar=true}}
      {{#> accordion-expandable-content-body}}
        This text is hidden
      {{/accordion-expandable-content-body}}
    {{/accordion-expandable-content}}
  {{/accordion-item}}

  {{#> accordion-item accordion-item--IsExpanded=true}}
    {{#> accordion-toggle accordion-toggle--attribute="id='accordion-fixed-item-two-toggle'"}}
      {{#> accordion-toggle-text}}Item two{{/accordion-toggle-text}}
      {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
    {{/accordion-toggle}}
    {{#> accordion-expandable-content accordion-expandable-content--IsFixed=true accordion-expandable-content--attribute="aria-labelledby='accordion-fixed-item-two-toggle'"}}
      {{#> accordion-expandable-content-body}}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      {{/accordion-expandable-content-body}}
      {{#> accordion-expandable-content-body}}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      {{/accordion-expandable-content-body}}
      {{#> accordion-expandable-content-body}}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      {{/accordion-expandable-content-body}}
    {{/accordion-expandable-content}}
  {{/accordion-item}}

  {{#> accordion-item}}
    {{#> accordion-toggle}}
      {{#> accordion-toggle-text}}Item three{{/accordion-toggle-text}}
      {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
    {{/accordion-toggle}}
    {{#> accordion-expandable-content accordion-expandable-content--HasNoScrollbar=true}}
      {{#> accordion-expandable-content-body}}
        This text is hidden
      {{/accordion-expandable-content-body}}
    {{/accordion-expandable-content}}
  {{/accordion-item}}

  {{#> accordion-item}}
    {{#> accordion-toggle}}
      {{#> accordion-toggle-text}}Item four{{/accordion-toggle-text}}
      {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
    {{/accordion-toggle}}
    {{#> accordion-expandable-content accordion-expandable-content--HasNoScrollbar=true}}
      {{#> accordion-expandable-content-body}}
        This text is hidden
      {{/accordion-expandable-content-body}}
    {{/accordion-expandable-content}}
  {{/accordion-item}}

  {{#> accordion-item}}
    {{#> accordion-toggle}}
      {{#> accordion-toggle-text}}Item five{{/accordion-toggle-text}}
      {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
    {{/accordion-toggle}}
    {{#> accordion-expandable-content accordion-expandable-content--HasNoScrollbar=true}}
      {{#> accordion-expandable-content-body}}
        This text is hidden
      {{/accordion-expandable-content-body}}
    {{/accordion-expandable-content}}
  {{/accordion-item}}
{{/accordion}}
```

### Definition list
```hbs
{{#> accordion accordion--IsDefinitionList="true"}}
  {{#> accordion-item}}
    {{#> accordion-toggle}}
      {{#> accordion-toggle-text}}Item one{{/accordion-toggle-text}}
      {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
    {{/accordion-toggle}}
    {{#> accordion-expandable-content}}
      {{#> accordion-expandable-content-body}}
        This text is hidden
      {{/accordion-expandable-content-body}}
    {{/accordion-expandable-content}}
  {{/accordion-item}}

  {{#> accordion-item}}
    {{#> accordion-toggle}}
      {{#> accordion-toggle-text}}Item two{{/accordion-toggle-text}}
      {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
    {{/accordion-toggle}}
    {{#> accordion-expandable-content}}
      {{#> accordion-expandable-content-body}}
        This text is hidden
      {{/accordion-expandable-content-body}}
    {{/accordion-expandable-content}}
  {{/accordion-item}}

  {{#> accordion-item}}
    {{#> accordion-toggle}}
      {{#> accordion-toggle-text}}Item three{{/accordion-toggle-text}}
      {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
    {{/accordion-toggle}}
    {{#> accordion-expandable-content}}
      {{#> accordion-expandable-content-body}}
        This text is hidden
      {{/accordion-expandable-content-body}}
    {{/accordion-expandable-content}}
  {{/accordion-item}}

  {{#> accordion-item accordion-item--IsExpanded=true}}
    {{#> accordion-toggle}}
      {{#> accordion-toggle-text}}Item four{{/accordion-toggle-text}}
      {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
    {{/accordion-toggle}}
    {{#> accordion-expandable-content}}
      {{#> accordion-expandable-content-body}}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      {{/accordion-expandable-content-body}}
    {{/accordion-expandable-content}}
  {{/accordion-item}}

  {{#> accordion-item}}
    {{#> accordion-toggle}}
      {{#> accordion-toggle-text}}Item five{{/accordion-toggle-text}}
      {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
    {{/accordion-toggle}}
    {{#> accordion-expandable-content}}
      {{#> accordion-expandable-content-body}}
        This text is hidden
      {{/accordion-expandable-content-body}}
    {{/accordion-expandable-content}}
  {{/accordion-item}}
{{/accordion}}
```

### Bordered
```hbs
{{#> accordion accordion--modifier="pf-m-bordered"}}
  {{#> accordion-item}}
    {{#> accordion-toggle}}
      {{#> accordion-toggle-text}}Item one{{/accordion-toggle-text}}
      {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
    {{/accordion-toggle}}
    {{#> accordion-expandable-content}}
      {{#> accordion-expandable-content-body}}
        This text is hidden
      {{/accordion-expandable-content-body}}
    {{/accordion-expandable-content}}
  {{/accordion-item}}

  {{#> accordion-item}}
    {{#> accordion-toggle}}
      {{#> accordion-toggle-text}}Item two{{/accordion-toggle-text}}
      {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
    {{/accordion-toggle}}
    {{#> accordion-expandable-content}}
      {{#> accordion-expandable-content-body}}
        This text is hidden
      {{/accordion-expandable-content-body}}
    {{/accordion-expandable-content}}
  {{/accordion-item}}

  {{#> accordion-item}}
    {{#> accordion-toggle}}
      {{#> accordion-toggle-text}}Item three{{/accordion-toggle-text}}
      {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
    {{/accordion-toggle}}
    {{#> accordion-expandable-content}}
      {{#> accordion-expandable-content-body}}
        This text is hidden
      {{/accordion-expandable-content-body}}
    {{/accordion-expandable-content}}
  {{/accordion-item}}

  {{#> accordion-item accordion-item--IsExpanded=true}}
    {{#> accordion-toggle}}
      {{#> accordion-toggle-text}}Item four{{/accordion-toggle-text}}
      {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
    {{/accordion-toggle}}
    {{#> accordion-expandable-content}}
      {{#> accordion-expandable-content-body}}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      {{/accordion-expandable-content-body}}
    {{/accordion-expandable-content}}
  {{/accordion-item}}

  {{#> accordion-item}}
    {{#> accordion-toggle}}
      {{#> accordion-toggle-text}}Item five{{/accordion-toggle-text}}
      {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
    {{/accordion-toggle}}
    {{#> accordion-expandable-content}}
      {{#> accordion-expandable-content-body}}
        This text is hidden
      {{/accordion-expandable-content-body}}
    {{/accordion-expandable-content}}
  {{/accordion-item}}
{{/accordion}}
```

### Large bordered

```hbs
{{#> accordion accordion--modifier="pf-m-display-lg pf-m-bordered"}}
  {{#> accordion-item}}
    {{#> accordion-toggle}}
      {{#> accordion-toggle-text}}Item one{{/accordion-toggle-text}}
      {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
    {{/accordion-toggle}}
    {{#> accordion-expandable-content}}
      {{#> accordion-expandable-content-body}}
        This text is hidden
      {{/accordion-expandable-content-body}}
    {{/accordion-expandable-content}}
  {{/accordion-item}}

  {{#> accordion-item}}
    {{#> accordion-toggle}}
      {{#> accordion-toggle-text}}Item two{{/accordion-toggle-text}}
      {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
    {{/accordion-toggle}}
    {{#> accordion-expandable-content}}
      {{#> accordion-expandable-content-body}}
        This text is hidden
      {{/accordion-expandable-content-body}}
    {{/accordion-expandable-content}}
  {{/accordion-item}}

  {{#> accordion-item}}
    {{#> accordion-toggle}}
      {{#> accordion-toggle-text}}Item three{{/accordion-toggle-text}}
      {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
    {{/accordion-toggle}}
    {{#> accordion-expandable-content}}
      {{#> accordion-expandable-content-body}}
        This text is hidden
      {{/accordion-expandable-content-body}}
    {{/accordion-expandable-content}}
  {{/accordion-item}}

  {{#> accordion-item accordion-item--IsExpanded=true}}
    {{#> accordion-toggle}}
      {{#> accordion-toggle-text}}Item four{{/accordion-toggle-text}}
      {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
    {{/accordion-toggle}}
    {{#> accordion-expandable-content}}
      {{#> accordion-expandable-content-body}}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      {{/accordion-expandable-content-body}}
    {{/accordion-expandable-content}}
  {{/accordion-item}}

  {{#> accordion-item}}
    {{#> accordion-toggle}}
      {{#> accordion-toggle-text}}Item five{{/accordion-toggle-text}}
      {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
    {{/accordion-toggle}}
    {{#> accordion-expandable-content}}
      {{#> accordion-expandable-content-body}}
        This text is hidden
      {{/accordion-expandable-content-body}}
    {{/accordion-expandable-content}}
  {{/accordion-item}}
{{/accordion}}
```

### Toggle icon at start

```hbs
{{#> accordion accordion--IsStartAligned=true}}
  {{#> accordion-item}}
    {{#> accordion-toggle}}
      {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
      {{#> accordion-toggle-text}}Item one{{/accordion-toggle-text}}
    {{/accordion-toggle}}
    {{#> accordion-expandable-content}}
      {{#> accordion-expandable-content-body}}
        This text is hidden
      {{/accordion-expandable-content-body}}
    {{/accordion-expandable-content}}
  {{/accordion-item}}

  {{#> accordion-item}}
    {{#> accordion-toggle}}
      {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
      {{#> accordion-toggle-text}}Item two{{/accordion-toggle-text}}
    {{/accordion-toggle}}
    {{#> accordion-expandable-content}}
      {{#> accordion-expandable-content-body}}
        This text is hidden
      {{/accordion-expandable-content-body}}
    {{/accordion-expandable-content}}
  {{/accordion-item}}

  {{#> accordion-item}}
    {{#> accordion-toggle}}
      {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
      {{#> accordion-toggle-text}}Item three{{/accordion-toggle-text}}
    {{/accordion-toggle}}
    {{#> accordion-expandable-content}}
      {{#> accordion-expandable-content-body}}
        This text is hidden
      {{/accordion-expandable-content-body}}
    {{/accordion-expandable-content}}
  {{/accordion-item}}

  {{#> accordion-item accordion-item--IsExpanded=true}}
    {{#> accordion-toggle}}
      {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
      {{#> accordion-toggle-text}}Item four{{/accordion-toggle-text}}
    {{/accordion-toggle}}
    {{#> accordion-expandable-content}}
      {{#> accordion-expandable-content-body}}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      {{/accordion-expandable-content-body}}
    {{/accordion-expandable-content}}
  {{/accordion-item}}

  {{#> accordion-item}}
    {{#> accordion-toggle}}
      {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
      {{#> accordion-toggle-text}}Item five{{/accordion-toggle-text}}
    {{/accordion-toggle}}
    {{#> accordion-expandable-content}}
      {{#> accordion-expandable-content-body}}
        This text is hidden
      {{/accordion-expandable-content-body}}
    {{/accordion-expandable-content}}
  {{/accordion-item}}
{{/accordion}}
```

## Documentation
### Overview
There are two variations to build the accordion component. The first is to use `<div>` and `<h1 - h6>` tags:

- `.pf-v6-c-accordion` is placed on a `<div>`,
- `.pf-v6-c-accordion__toggle` is placed on a `<button>` that is inside a `<h1-h6>`, and
- `.pf-v6-c-accordion__expandable-content` is placed on a `<div>`.

The heading level that you use should fit within the rest of the headings outlined on your page.

Another variation is using the definition list:

- `.pf-v6-c-accordion` is placed on a `<dl>`,
- `.pf-v6-c-accordion__toggle` is placed on a `<button>` that is inside a `<dt>`, and
- `.pf-v6-c-accordion__expandable-content` is placed on a `<dd>`.

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-accordion` | `<div>`, `<dl>` | Initiates an accordion component. **Required**|
| `.pf-v6-c-accordion__item` | `<div>` | Initiates an accordion item component. **Required**|
| `.pf-v6-c-accordion__toggle` | `<h1-h6><button>`, `<dt><button>` | Initiates a toggle in the accordion. **Required** |
| `.pf-v6-c-accordion__toggle-text` | `<span>` | Initiates the text inside the toggle. **Required** |
| `.pf-v6-c-accordion__toggle-icon` | `<span>` | Initiates the toggle icon wrapper. **Required** |
| `.pf-v6-c-accordion__expandable-content` | `<div>`, `<dd>` | Initiates expandable content. **Must be paired with a button** |
| `.pf-v6-c-accordion__expandable-content-body` | `<div>` | Initiates expandable content body. **Required** |
| `.pf-m-bordered` | `.pf-v6-c-accordion` | Modifies the accordion to add borders between items. |
| `.pf-m-display-lg` | `.pf-v6-c-accordion` | Modifies the accordion for large display styling. This variation is for marketing/web use cases. |
| `.pf-m-toggle-start` | `.pf-v6-c-accordion` | Modifies accordion styling when accordion toggle icons are rendered at the start of the toggle, before the toggle text. |
| `.pf-m-expanded` | `.pf-v6-c-accordion__item` | Modifies the accordion item for the expanded state. |
| `.pf-m-fixed` | `.pf-v6-c-accordion__expandable-content` | Modifies the expandable content for the fixed state. |
