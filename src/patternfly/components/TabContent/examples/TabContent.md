---
id: Tab content
section: components
cssPrefix: pf-c-tab-content
---

## Examples
### Basic
```hbs
{{#> tab-content tab-content--IsActive="true" tab-content--attribute='id="basic-tab1-panel"'}}
  Panel 1
{{/tab-content}}
{{#> tab-content tab-content--attribute='id="basic-tab2-panel"'}}
  Panel 2
{{/tab-content}}
{{#> tab-content tab-content--attribute='id="basic-tab3-panel"'}}
  Panel 3
{{/tab-content}}
{{#> tab-content tab-content--attribute='id="basic-tab4-panel"'}}
  Panel 4
{{/tab-content}}
```

### Padding
```hbs
{{#> tab-content tab-content-body--modifier="pf-m-padding" tab-content--IsActive="true" tab-content--attribute='id="tab1-panel-with-padding"'}}
  Panel 1
{{/tab-content}}
{{#> tab-content tab-content-body--modifier="pf-m-padding" tab-content--attribute='id="tab2-panel-with-padding"'}}
  Panel 2
{{/tab-content}}
{{#> tab-content tab-content-body--modifier="pf-m-padding" tab-content--attribute='id="tab3-panel-with-padding"'}}
  Panel 3
{{/tab-content}}
{{#> tab-content tab-content-body--modifier="pf-m-padding" tab-content--attribute='id="tab4-panel-with-padding"'}}
  Panel 4
{{/tab-content}}
```

### Light 300 background
```hbs
{{#> tab-content tab-content--modifier="pf-m-light-300" tab-content--IsActive="true" tab-content--attribute='id="light-300-tab1-panel"'}}
  Panel 1
{{/tab-content}}
{{#> tab-content tab-content--modifier="pf-m-light-300" tab-content--attribute='id="light-300-tab2-panel"'}}
  Panel 2
{{/tab-content}}
{{#> tab-content tab-content--modifier="pf-m-light-300" tab-content--attribute='id="light-300-tab3-panel"'}}
  Panel 3
{{/tab-content}}
{{#> tab-content tab-content--modifier="pf-m-light-300" tab-content--attribute='id="light-300-tab4-panel"'}}
  Panel 4
{{/tab-content}}
```

## Documentation
### Overview
Tab content should be used with the [tabs component](/components/tabs).

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role="tabpanel"` | `.pf-c-tab-content` | Indicates that the element serves as a container for a set of tabs. **Required** |
| `aria-labelledby=[ID of tab element]` | `.pf-c-tab-content` | Provides an accessible name for the tab panel by referring to the tab element that controls it. **Required**
| `id=[ID of tab panel]` | `.pf-c-tab-content` | Provides an ID for the tab panel, and should be used as the value of `aria-controls` on the tab element that controls the panel.  **Required**
| `hidden` | `.pf-c-tab-content` | Indicates that the tab panel is not visible. **Required on all but the active tab panel**
| `tabindex="0"` | `.pf-c-tab-content` | Puts the tab panel in the page tab sequence and facilitates movement to panel content for assistive technology users. **Required**

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-tab-content` | `<section>` |  Initiates the tab content component. **Required** |
| `.pf-c-tab-content__body` | `<div>` |  Initiates the tab content body component. |
| `.pf-m-padding` | `.pf-c-tab-content__body` | Modifies the tab content body component padding. |
| `.pf-m-light-300` | `.pf-c-tab-content` |  Modifies the tab content component background color. |
