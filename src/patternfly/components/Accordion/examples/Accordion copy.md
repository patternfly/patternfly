---
id: Accordion v diff
section: components
cssPrefix: pf-v5-c-accordion
---

## Examples
### Fluid
```hbs
{{#> split}}
{{#> accordion}}
  {{#> accordion-toggle}}
    {{#> accordion-toggle-text}}Item one{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expandable-content}}
    {{#> accordion-expandable-content-body}}
      This text is hidden
    {{/accordion-expandable-content-body}}
  {{/accordion-expandable-content}}

  {{#> accordion-toggle}}
    {{#> accordion-toggle-text}}Item two{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expandable-content}}
    {{#> accordion-expandable-content-body}}
      This text is hidden
    {{/accordion-expandable-content-body}}
  {{/accordion-expandable-content}}

  {{#> accordion-toggle}}
    {{#> accordion-toggle-text}}Item three{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expandable-content}}
    {{#> accordion-expandable-content-body}}
      This text is hidden
    {{/accordion-expandable-content-body}}
  {{/accordion-expandable-content}}

  {{#> accordion-toggle accordion-toggle--IsExpanded="true"}}
    {{#> accordion-toggle-text}}Item four{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expandable-content accordion-expandable-content--IsExpanded="true"}}
    {{#> accordion-expandable-content-body}}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    {{/accordion-expandable-content-body}}
  {{/accordion-expandable-content}}

  {{#> accordion-toggle}}
    {{#> accordion-toggle-text}}Item five{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expandable-content}}
    {{#> accordion-expandable-content-body}}
      This text is hidden
    {{/accordion-expandable-content-body}}
  {{/accordion-expandable-content}}
{{/accordion}}
{{#> accordion version=reset}}
  {{#> accordion-toggle}}
    {{#> accordion-toggle-text}}Item one{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expandable-content}}
    {{#> accordion-expandable-content-body}}
      This text is hidden
    {{/accordion-expandable-content-body}}
  {{/accordion-expandable-content}}

  {{#> accordion-toggle}}
    {{#> accordion-toggle-text}}Item two{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expandable-content}}
    {{#> accordion-expandable-content-body}}
      This text is hidden
    {{/accordion-expandable-content-body}}
  {{/accordion-expandable-content}}

  {{#> accordion-toggle}}
    {{#> accordion-toggle-text}}Item three{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expandable-content}}
    {{#> accordion-expandable-content-body}}
      This text is hidden
    {{/accordion-expandable-content-body}}
  {{/accordion-expandable-content}}

  {{#> accordion-toggle accordion-toggle--IsExpanded="true"}}
    {{#> accordion-toggle-text}}Item four{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expandable-content accordion-expandable-content--IsExpanded="true"}}
    {{#> accordion-expandable-content-body}}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    {{/accordion-expandable-content-body}}
  {{/accordion-expandable-content}}

  {{#> accordion-toggle}}
    {{#> accordion-toggle-text}}Item five{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expandable-content}}
    {{#> accordion-expandable-content-body}}
      This text is hidden
    {{/accordion-expandable-content-body}}
  {{/accordion-expandable-content}}
{{/accordion}}
{{/split}}

```

### Fixed
```hbs
{{#> accordion}}
  {{#> accordion-toggle}}
    {{#> accordion-toggle-text}}Item one{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expandable-content accordion-expandable-content--IsFixed="true" accordion-expandable-content--HasNoScrollbar="true"}}
    {{#> accordion-expandable-content-body}}
      This text is hidden
    {{/accordion-expandable-content-body}}
  {{/accordion-expandable-content}}

  {{#> accordion-toggle accordion-toggle--IsExpanded="true" accordion-toggle--attribute="id='accordion-fixed-item-two-toggle'"}}
    {{#> accordion-toggle-text}}Item two{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expandable-content accordion-expandable-content--IsExpanded="true" accordion-expandable-content--IsFixed="true" accordion-expandable-content--attribute="aria-labelledby='accordion-fixed-item-two-toggle'"}}
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

  {{#> accordion-toggle}}
    {{#> accordion-toggle-text}}Item three{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expandable-content accordion-expandable-content--IsFixed="true" accordion-expandable-content--HasNoScrollbar="true"}}
    {{#> accordion-expandable-content-body}}
      This text is hidden
    {{/accordion-expandable-content-body}}
  {{/accordion-expandable-content}}

  {{#> accordion-toggle}}
    {{#> accordion-toggle-text}}Item four{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expandable-content accordion-expandable-content--IsFixed="true" accordion-expandable-content--HasNoScrollbar="true"}}
    {{#> accordion-expandable-content-body}}
      This text is hidden
    {{/accordion-expandable-content-body}}
  {{/accordion-expandable-content}}

  {{#> accordion-toggle}}
    {{#> accordion-toggle-text}}Item five{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expandable-content accordion-expandable-content--IsFixed="true" accordion-expandable-content--HasNoScrollbar="true"}}
    {{#> accordion-expandable-content-body}}
      This text is hidden
    {{/accordion-expandable-content-body}}
  {{/accordion-expandable-content}}
{{/accordion}}
```

### Definition list
```hbs
{{#> accordion accordion--IsDefinitionList="true"}}
  {{#> accordion-toggle}}
    {{#> accordion-toggle-text}}Item one{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expandable-content}}
    {{#> accordion-expandable-content-body}}
      This text is hidden
    {{/accordion-expandable-content-body}}
  {{/accordion-expandable-content}}

  {{#> accordion-toggle}}
    {{#> accordion-toggle-text}}Item two{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expandable-content}}
    {{#> accordion-expandable-content-body}}
      This text is hidden
    {{/accordion-expandable-content-body}}
  {{/accordion-expandable-content}}

  {{#> accordion-toggle}}
    {{#> accordion-toggle-text}}Item three{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expandable-content}}
    {{#> accordion-expandable-content-body}}
      This text is hidden
    {{/accordion-expandable-content-body}}
  {{/accordion-expandable-content}}

  {{#> accordion-toggle accordion-toggle--IsExpanded="true"}}
    {{#> accordion-toggle-text}}Item four{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expandable-content accordion-expandable-content--IsExpanded="true"}}
    {{#> accordion-expandable-content-body}}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    {{/accordion-expandable-content-body}}
  {{/accordion-expandable-content}}

  {{#> accordion-toggle}}
    {{#> accordion-toggle-text}}Item five{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expandable-content}}
    {{#> accordion-expandable-content-body}}
      This text is hidden
    {{/accordion-expandable-content-body}}
  {{/accordion-expandable-content}}
{{/accordion}}
```

### Bordered
```hbs
{{#> accordion accordion--modifier="pf-m-bordered"}}
  {{#> accordion-toggle}}
    {{#> accordion-toggle-text}}Item one{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expandable-content}}
    {{#> accordion-expandable-content-body}}
      This text is hidden
    {{/accordion-expandable-content-body}}
  {{/accordion-expandable-content}}

  {{#> accordion-toggle accordion-toggle--IsExpanded="true"}}
    {{#> accordion-toggle-text}}Item two{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expandable-content accordion-expandable-content--IsExpanded="true"}}
    {{#> accordion-expandable-content-body}}
      <a href="#">Lorem ipsum</a> dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    {{/accordion-expandable-content-body}}
  {{/accordion-expandable-content}}

  {{#> accordion-toggle}}
    {{#> accordion-toggle-text}}Item three{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expandable-content}}
    {{#> accordion-expandable-content-body}}
      This text is hidden
    {{/accordion-expandable-content-body}}
  {{/accordion-expandable-content}}

  {{#> accordion-toggle}}
    {{#> accordion-toggle-text}}Item four{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expandable-content}}
    {{#> accordion-expandable-content-body}}
      This text is hidden
    {{/accordion-expandable-content-body}}
  {{/accordion-expandable-content}}

  {{#> accordion-toggle}}
    {{#> accordion-toggle-text}}Item five{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expandable-content}}
    {{#> accordion-expandable-content-body}}
      This text is hidden
    {{/accordion-expandable-content-body}}
  {{/accordion-expandable-content}}
{{/accordion}}
```

### Large bordered
```hbs
{{#> accordion accordion--modifier="pf-m-display-lg pf-m-bordered"}}
  {{#> accordion-toggle}}
    {{#> accordion-toggle-text}}Item one{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expandable-content}}
    {{#> accordion-expandable-content-body}}
      This text is hidden
    {{/accordion-expandable-content-body}}
  {{/accordion-expandable-content}}

  {{#> accordion-toggle accordion-toggle--IsExpanded="true"}}
    {{#> accordion-toggle-text}}Item two{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expandable-content accordion-expandable-content--IsExpanded="true"}}
    {{#> accordion-expandable-content-body}}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    {{/accordion-expandable-content-body}}
  {{/accordion-expandable-content}}

  {{#> accordion-toggle}}
    {{#> accordion-toggle-text}}Item three{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expandable-content}}
    {{#> accordion-expandable-content-body}}
      This text is hidden
    {{/accordion-expandable-content-body}}
  {{/accordion-expandable-content}}

  {{#> accordion-toggle accordion-toggle--IsExpanded="true"}}
    {{#> accordion-toggle-text}}Item four{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expandable-content accordion-expandable-content--IsExpanded="true"}}
    {{#> accordion-expandable-content-body}}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    {{/accordion-expandable-content-body}}
    {{#> accordion-expandable-content-body}}
    {{#> button button--modifier="pf-m-link pf-m-inline pf-m-display-lg"}}
      Call to action
      {{#> button-icon button-icon--modifier="pf-m-end"}}
        <i class="fas fa-arrow-right" aria-hidden="true"></i>
      {{/button-icon}}
    {{/button}}
    {{/accordion-expandable-content-body}}
  {{/accordion-expandable-content}}

  {{#> accordion-toggle}}
    {{#> accordion-toggle-text}}Item five{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expandable-content}}
    {{#> accordion-expandable-content-body}}
      This text is hidden
    {{/accordion-expandable-content-body}}
  {{/accordion-expandable-content}}
{{/accordion}}
```

## Documentation
### Overview
There are two variations to build the accordion component:
One way uses `<div>` and `<h1 - h6>` tags to build the component.
In these examples `.pf-v5-c-accordion` uses `<div>`, `.pf-v5-c-accordion__toggle` uses `<h3><button>`, and `.pf-v5-c-accordion__expandable-content` uses `<div>`. The heading level that you use should fit within the rest of the headings outlined on your page.

Another variation is using the definition list:
In these examples `.pf-v5-c-accordion` uses `<dl>`, `.pf-v5-c-accordion__toggle` uses `<dt><button>`, and `.pf-v5-c-accordion__expandable-content` uses `<dd>`.

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-c-accordion` | `<div>`, `<dl>` | Initiates an accordion component. **Required**|
| `.pf-v5-c-accordion__toggle` | `<h1-h6><button>`, `<dt><button>` | Initiates a toggle in the accordion. **Required** |
| `.pf-v5-c-accordion__toggle-text` | `<span>` | Initiates the text inside the toggle. **Required** |
| `.pf-v5-c-accordion__toggle-icon` | `<span>` | Initiates the toggle icon wrapper. **Required** |
| `.pf-v5-c-accordion__expandable-content` | `<div>`, `<dd>` | Initiates expandable content. **Must be paired with a button** |
| `.pf-v5-c-accordion__expandable-content-body` | `<div>` | Initiates expandable content body. **Required** |
| `.pf-m-bordered` | `.pf-v5-c-accordion` | Modifies the accordion to add borders between items. |
| `.pf-m-display-lg` | `.pf-v5-c-accordion` | Modifies the accordion for large display styling. This variation is for marketing/web use cases. |
| `.pf-m-expanded` | `.pf-v5-c-accordion__toggle`, `.pf-v5-c-accordion__expandable-content` | Modifies the accordion button and expandable content for the expanded state. |
| `.pf-m-fixed` | `.pf-v5-c-accordion__expandable-content` | Modifies the expandable content for the fixed state. |
