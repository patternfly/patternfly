---
id: Accordion
section: components
cssPrefix: pf-c-accordion
---

## Examples
### Fluid
```hbs
{{#> accordion}}
  {{#> accordion-toggle}}
    {{#> accordion-toggle-text}}Item one{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expanded-content}}
    {{#> accordion-expanded-content-body}}
      This text is hidden
    {{/accordion-expanded-content-body}}
  {{/accordion-expanded-content}}

  {{#> accordion-toggle}}
    {{#> accordion-toggle-text}}Item two{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expanded-content}}
    {{#> accordion-expanded-content-body}}
      This text is hidden
    {{/accordion-expanded-content-body}}
  {{/accordion-expanded-content}}

  {{#> accordion-toggle}}
    {{#> accordion-toggle-text}}Item three{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expanded-content}}
    {{#> accordion-expanded-content-body}}
      This text is hidden
    {{/accordion-expanded-content-body}}
  {{/accordion-expanded-content}}

  {{#> accordion-toggle accordion-toggle--IsExpanded="true"}}
    {{#> accordion-toggle-text}}Item four{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expanded-content accordion-expanded-content--IsExpanded="true"}}
    {{#> accordion-expanded-content-body}}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    {{/accordion-expanded-content-body}}
  {{/accordion-expanded-content}}

  {{#> accordion-toggle}}
    {{#> accordion-toggle-text}}Item five{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expanded-content}}
    {{#> accordion-expanded-content-body}}
      This text is hidden
    {{/accordion-expanded-content-body}}
  {{/accordion-expanded-content}}
{{/accordion}}
```

### Fixed
```hbs
{{#> accordion}}
  {{#> accordion-toggle}}
    {{#> accordion-toggle-text}}Item one{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expanded-content accordion-expanded-content--IsFixed="true"}}
    {{#> accordion-expanded-content-body}}
      This text is hidden
    {{/accordion-expanded-content-body}}
  {{/accordion-expanded-content}}

  {{#> accordion-toggle accordion-toggle--IsExpanded="true"}}
    {{#> accordion-toggle-text}}Item two{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expanded-content accordion-expanded-content--IsExpanded="true" accordion-expanded-content--IsFixed="true"}}
    {{#> accordion-expanded-content-body}}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    {{/accordion-expanded-content-body}}
    {{#> accordion-expanded-content-body}}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    {{/accordion-expanded-content-body}}
    {{#> accordion-expanded-content-body}}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    {{/accordion-expanded-content-body}}
  {{/accordion-expanded-content}}

  {{#> accordion-toggle}}
    {{#> accordion-toggle-text}}Item three{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expanded-content accordion-expanded-content--IsFixed="true"}}
    {{#> accordion-expanded-content-body}}
      This text is hidden
    {{/accordion-expanded-content-body}}
  {{/accordion-expanded-content}}

  {{#> accordion-toggle}}
    {{#> accordion-toggle-text}}Item four{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expanded-content accordion-expanded-content--IsFixed="true"}}
    {{#> accordion-expanded-content-body}}
      This text is hidden
    {{/accordion-expanded-content-body}}
  {{/accordion-expanded-content}}

  {{#> accordion-toggle}}
    {{#> accordion-toggle-text}}Item five{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expanded-content accordion-expanded-content--IsFixed="true"}}
    {{#> accordion-expanded-content-body}}
      This text is hidden
    {{/accordion-expanded-content-body}}
  {{/accordion-expanded-content}}
{{/accordion}}
```

### Definition list
```hbs
{{#> accordion accordion--IsDefinitionList="true"}}
  {{#> accordion-toggle}}
    {{#> accordion-toggle-text}}Item one{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expanded-content}}
    {{#> accordion-expanded-content-body}}
      This text is hidden
    {{/accordion-expanded-content-body}}
  {{/accordion-expanded-content}}

  {{#> accordion-toggle}}
    {{#> accordion-toggle-text}}Item two{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expanded-content}}
    {{#> accordion-expanded-content-body}}
      This text is hidden
    {{/accordion-expanded-content-body}}
  {{/accordion-expanded-content}}

  {{#> accordion-toggle}}
    {{#> accordion-toggle-text}}Item three{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expanded-content}}
    {{#> accordion-expanded-content-body}}
      This text is hidden
    {{/accordion-expanded-content-body}}
  {{/accordion-expanded-content}}

  {{#> accordion-toggle accordion-toggle--IsExpanded="true"}}
    {{#> accordion-toggle-text}}Item four{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expanded-content accordion-expanded-content--IsExpanded="true"}}
    {{#> accordion-expanded-content-body}}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    {{/accordion-expanded-content-body}}
  {{/accordion-expanded-content}}

  {{#> accordion-toggle}}
    {{#> accordion-toggle-text}}Item five{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expanded-content}}
    {{#> accordion-expanded-content-body}}
      This text is hidden
    {{/accordion-expanded-content-body}}
  {{/accordion-expanded-content}}
{{/accordion}}
```

### Bordered
```hbs
{{#> accordion accordion--modifier="pf-m-bordered"}}
  {{#> accordion-toggle}}
    {{#> accordion-toggle-text}}Item one{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expanded-content}}
    {{#> accordion-expanded-content-body}}
      This text is hidden
    {{/accordion-expanded-content-body}}
  {{/accordion-expanded-content}}

  {{#> accordion-toggle accordion-toggle--IsExpanded="true"}}
    {{#> accordion-toggle-text}}Item two{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expanded-content accordion-expanded-content--IsExpanded="true"}}
    {{#> accordion-expanded-content-body}}
      <a href="#">Lorem ipsum</a> dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    {{/accordion-expanded-content-body}}
  {{/accordion-expanded-content}}

  {{#> accordion-toggle}}
    {{#> accordion-toggle-text}}Item three{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expanded-content}}
    {{#> accordion-expanded-content-body}}
      This text is hidden
    {{/accordion-expanded-content-body}}
  {{/accordion-expanded-content}}

  {{#> accordion-toggle}}
    {{#> accordion-toggle-text}}Item four{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expanded-content}}
    {{#> accordion-expanded-content-body}}
      This text is hidden
    {{/accordion-expanded-content-body}}
  {{/accordion-expanded-content}}

  {{#> accordion-toggle}}
    {{#> accordion-toggle-text}}Item five{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expanded-content}}
    {{#> accordion-expanded-content-body}}
      This text is hidden
    {{/accordion-expanded-content-body}}
  {{/accordion-expanded-content}}
{{/accordion}}
```

### Large bordered
```hbs
{{#> accordion accordion--modifier="pf-m-display-lg pf-m-bordered"}}
  {{#> accordion-toggle}}
    {{#> accordion-toggle-text}}Item one{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expanded-content}}
    {{#> accordion-expanded-content-body}}
      This text is hidden
    {{/accordion-expanded-content-body}}
  {{/accordion-expanded-content}}

  {{#> accordion-toggle accordion-toggle--IsExpanded="true"}}
    {{#> accordion-toggle-text}}Item two{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expanded-content accordion-expanded-content--IsExpanded="true"}}
    {{#> accordion-expanded-content-body}}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    {{/accordion-expanded-content-body}}
  {{/accordion-expanded-content}}

  {{#> accordion-toggle}}
    {{#> accordion-toggle-text}}Item three{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expanded-content}}
    {{#> accordion-expanded-content-body}}
      This text is hidden
    {{/accordion-expanded-content-body}}
  {{/accordion-expanded-content}}

  {{#> accordion-toggle accordion-toggle--IsExpanded="true"}}
    {{#> accordion-toggle-text}}Item four{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expanded-content accordion-expanded-content--IsExpanded="true"}}
    {{#> accordion-expanded-content-body}}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    {{/accordion-expanded-content-body}}
    {{#> accordion-expanded-content-body}}
    {{#> button button--modifier="pf-m-link pf-m-inline pf-m-display-lg"}}
      Call to action
      {{#> button-icon button-icon--modifier="pf-m-end"}}
        <i class="fas fa-arrow-right" aria-hidden="true"></i>
      {{/button-icon}}
    {{/button}}
    {{/accordion-expanded-content-body}}
  {{/accordion-expanded-content}}

  {{#> accordion-toggle}}
    {{#> accordion-toggle-text}}Item five{{/accordion-toggle-text}}
    {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
  {{/accordion-toggle}}
  {{#> accordion-expanded-content}}
    {{#> accordion-expanded-content-body}}
      This text is hidden
    {{/accordion-expanded-content-body}}
  {{/accordion-expanded-content}}
{{/accordion}}
```

## Documentation
### Overview
There are two variations to build the accordion component:
One way uses `<div>` and `<h1 - h6>` tags to build the component.
In these examples `.pf-c-accordion` uses `<div>`, `.pf-c-accordion__toggle` uses `<h3><button>`, and `.pf-c-accordion__expanded-content` uses `<div>`. The heading level that you use should fit within the rest of the headings outlined on your page.

Another variation is using the definition list:
In these examples `.pf-c-accordion` uses `<dl>`, `.pf-c-accordion__toggle` uses `<dt><button>`, and `.pf-c-accordion__expanded-content` uses `<dd>`.

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-expanded="false"` | `.pf-c-accordion__toggle` | Indicates that the expanded content element is hidden. **Required**|
| `aria-expanded="true"` | `.pf-c-accordion__toggle` | Indicates that the expanded content element is visible. **Required**|
| `hidden` | `.pf-c-accordion__expanded-content` | Indicates that the expanded content element is hidden. Use with `aria-expanded="false"` **Required** |
| `aria-hidden="true"` | `.pf-c-accordion__toggle-icon` | Hides the icon from assistive technologies.**Required** |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-accordion` | `<div>`, `<dl>` | Initiates an accordion component. **Required**|
| `.pf-c-accordion__toggle` | `<h1-h6><button>`, `<dt><button>` | Initiates a toggle in the accordion. **Required** |
| `.pf-c-accordion__toggle-text` | `<span>` | Initiates the text inside the toggle. **Required** |
| `.pf-c-accordion__toggle-icon` | `<span>` | Initiates the toggle icon wrapper. **Required** |
| `.pf-c-accordion__expanded-content` | `<div>`, `<dd>` | Initiates expanded content. **Must be paired with a button** |
| `.pf-c-accordion__expanded-content-body` | `<div>` | Initiates expanded content body. **Required** |
| `.pf-m-bordered` | `.pf-c-accordion` | Modifies the accordion to add borders between items. |
| `.pf-m-display-lg` | `.pf-c-accordion` | Modifies the accordion for large display styling. This variation is for marketing/web use cases. |
| `.pf-m-expanded` | `.pf-c-accordion__toggle`, `.pf-c-accordion__expanded-content` | Modifies the accordion button and expanded content for the expanded state. |
| `.pf-m-fixed` | `.pf-c-accordion__expanded-content` | Modifies the expanded content for the fixed state. |
