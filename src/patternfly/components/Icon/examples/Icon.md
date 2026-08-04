---
id: 'Icon'
section: components
cssPrefix: pf-v6-c-icon
---

## Examples
### Basic
```hbs
{{#> icon}}
  {{#> icon-content}}
    {{pfIcon "rh-ui-long-arrow-down"}}
  {{/icon-content}}
{{/icon}}

{{#> icon}}
  {{#> icon-content}}
    {{pfIcon "rh-microns-caret-right"}}
  {{/icon-content}}
{{/icon}}

{{#> icon}}
  {{#> icon-content}}
    {{pfIcon "rh-microns-caret-down"}}
  {{/icon-content}}
{{/icon}}

{{#> icon}}
  {{#> icon-content}}
    {{pfIcon "rh-ui-settings-fill"}}
  {{/icon-content}}
{{/icon}}
```

### Standalone icon sizes
```hbs
{{#> icon icon--modifier="pf-m-sm"}}
  {{#> icon-content}}
    {{pfIcon "rh-ui-add-circle-fill"}}
  {{/icon-content}}
{{/icon}}
{{#> icon icon--modifier="pf-m-md"}}
  {{#> icon-content}}
    {{pfIcon "rh-ui-add-circle-fill"}}
  {{/icon-content}}
{{/icon}}
{{#> icon icon--modifier="pf-m-lg"}}
  {{#> icon-content}}
    {{pfIcon "rh-ui-add-circle-fill"}}
  {{/icon-content}}
{{/icon}}
{{#> icon icon--modifier="pf-m-xl"}}
  {{#> icon-content}}
    {{pfIcon "rh-ui-add-circle-fill"}}
  {{/icon-content}}
{{/icon}}
{{#> icon icon--modifier="pf-m-2xl"}}
  {{#> icon-content}}
    {{pfIcon "rh-ui-add-circle-fill"}}
  {{/icon-content}}
{{/icon}}
{{#> icon icon--modifier="pf-m-3xl"}}
  {{#> icon-content}}
    {{pfIcon "rh-ui-add-circle-fill"}}
  {{/icon-content}}
{{/icon}}
```

### Body sizes
```hbs
{{#> icon icon--modifier="pf-m-body-sm"}}
  {{#> icon-content}}
    {{pfIcon "rh-ui-add-circle-fill"}}
  {{/icon-content}}
{{/icon}}
{{#> icon icon--modifier="pf-m-body-default"}}
  {{#> icon-content}}
    {{pfIcon "rh-ui-add-circle-fill"}}
  {{/icon-content}}
{{/icon}}
{{#> icon icon--modifier="pf-m-body-lg"}}
  {{#> icon-content}}
    {{pfIcon "rh-ui-add-circle-fill"}}
  {{/icon-content}}
{{/icon}}
```

### Heading sizes
```hbs
{{#> icon icon--modifier="pf-m-heading-sm"}}
  {{#> icon-content}}
    {{pfIcon "rh-ui-add-circle-fill"}}
  {{/icon-content}}
{{/icon}}
{{#> icon icon--modifier="pf-m-heading-md"}}
  {{#> icon-content}}
    {{pfIcon "rh-ui-add-circle-fill"}}
  {{/icon-content}}
{{/icon}}
{{#> icon icon--modifier="pf-m-heading-lg"}}
  {{#> icon-content}}
    {{pfIcon "rh-ui-add-circle-fill"}}
  {{/icon-content}}
{{/icon}}
{{#> icon icon--modifier="pf-m-heading-xl"}}
  {{#> icon-content}}
    {{pfIcon "rh-ui-add-circle-fill"}}
  {{/icon-content}}
{{/icon}}
{{#> icon icon--modifier="pf-m-heading-2xl"}}
  {{#> icon-content}}
    {{pfIcon "rh-ui-add-circle-fill"}}
  {{/icon-content}}
{{/icon}}
{{#> icon icon--modifier="pf-m-heading-3xl"}}
  {{#> icon-content}}
    {{pfIcon "rh-ui-add-circle-fill"}}
  {{/icon-content}}
{{/icon}}
```

### Status colors
```hbs
{{#> icon}}
  {{#> icon-content icon-content--modifier="pf-m-danger"}}
    {{pfIcon "rh-ui-error-fill"}}
  {{/icon-content}}
{{/icon}}
{{#> icon}}
  {{#> icon-content icon-content--modifier="pf-m-warning"}}
    {{pfIcon "rh-ui-warning-fill"}}
  {{/icon-content}}
{{/icon}}
{{#> icon}}
  {{#> icon-content icon-content--modifier="pf-m-success"}}
    {{pfIcon "rh-ui-check-circle-fill"}}
  {{/icon-content}}
{{/icon}}
{{#> icon}}
  {{#> icon-content icon-content--modifier="pf-m-info"}}
    {{pfIcon "rh-ui-information-fill"}}
  {{/icon-content}}
{{/icon}}
{{#> icon}}
  {{#> icon-content icon-content--modifier="pf-m-custom"}}
    {{pfIcon "rh-ui-notification-fill"}}
  {{/icon-content}}
{{/icon}}
```

### Sizing content within the icon container
Use a size modifier on the icon container to maintain a consistent size, even if the contents change in size.
```hbs
{{#> icon icon--modifier="pf-m-3xl pf-m-inline"}}
  {{#> icon-content icon-content--modifier="pf-m-lg"}}
    {{pfIcon "rh-ui-add-circle-fill"}}
  {{/icon-content}}
{{/icon}}
{{#> icon icon--modifier="pf-m-3xl pf-m-inline"}}
  {{#> icon-content icon-content--modifier="pf-m-xl"}}
    {{pfIcon "rh-ui-add-circle-fill"}}
  {{/icon-content}}
{{/icon}}
{{#> icon icon--modifier="pf-m-3xl pf-m-inline"}}
  {{#> icon-content icon-content--modifier="pf-m-2xl"}}
    {{pfIcon "rh-ui-add-circle-fill"}}
  {{/icon-content}}
{{/icon}}
{{#> icon icon--modifier="pf-m-3xl pf-m-inline"}}
  {{#> icon-content icon-content--modifier="pf-m-3xl"}}
    {{pfIcon "rh-ui-add-circle-fill"}}
  {{/icon-content}}
{{/icon}}
```

### Inline
```hbs
{{#> content}}
  <h1>Heading
    {{#> icon icon--modifier="pf-m-inline"}}
      {{#> icon-content}}
        {{pfIcon "rh-ui-add-circle-fill"}}
      {{/icon-content}}
    {{/icon}}
  </h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
  Sed hendrerit nisi in cursus maximus.</p>
  <h2>Second level
    {{#> icon icon--modifier="pf-m-inline"}}
      {{#> icon-content}}
        {{pfIcon "rh-ui-add-circle-fill"}}
      {{/icon-content}}
    {{/icon}}
  </h2>
  <p>
    {{#> icon icon--modifier="pf-m-inline"}}
      {{#> icon-content}}
        {{pfIcon "rh-ui-add-circle-fill"}}
      {{/icon-content}}
    {{/icon}}
    Curabitur accumsan turpis pharetra
    <strong>augue tincidunt
    {{#> icon icon--modifier="pf-m-inline"}}
      {{#> icon-content}}
        {{pfIcon "rh-ui-add-circle-fill"}}
      {{/icon-content}}
    {{/icon}}</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel
    cursus venenatis. Suspendisse potenti.
  </p>
  <small>Sometimes you need small text
    {{#> icon icon--modifier="pf-m-inline"}}
      {{#> icon-content}}
        {{pfIcon "rh-ui-add-circle-fill"}}
      {{/icon-content}}
    {{/icon}}
  </small>
{{/content}}

Inline with size specified: {{#> icon icon--modifier="pf-m-sm pf-m-inline"}}
  {{#> icon-content}}
    {{pfIcon "rh-ui-add-circle-fill"}}
  {{/icon-content}}
{{/icon}} small,
{{#> icon icon--modifier="pf-m-md pf-m-inline"}}
  {{#> icon-content}}
    {{pfIcon "rh-ui-add-circle-fill"}}
  {{/icon-content}}
{{/icon}} medium,
{{#> icon icon--modifier="pf-m-lg pf-m-inline"}}
  {{#> icon-content}}
    {{pfIcon "rh-ui-add-circle-fill"}}
  {{/icon-content}}
{{/icon}} large,
{{#> icon icon--modifier="pf-m-xl pf-m-inline"}}
  {{#> icon-content}}
    {{pfIcon "rh-ui-add-circle-fill"}}
  {{/icon-content}}
{{/icon}} extra large
```

### In progress
```hbs
{{#> icon icon--modifier="pf-m-md pf-m-in-progress"}}
  {{#> icon-content}}
    {{pfIcon "rh-ui-check-circle-fill"}}
  {{/icon-content}}
  {{#> icon-progress}}
    {{#> spinner spinner--modifier="pf-m-md"}}Loading...{{/spinner}}
  {{/icon-progress}}
{{/icon}}

{{#> icon icon--modifier="pf-m-md"}}
  {{#> icon-content}}
    {{pfIcon "rh-ui-check-circle-fill"}}
  {{/icon-content}}
{{/icon}}
```

## Documentation
### Overview
The icon element is a container used to maintain a stable space for an icon or spinner, regardless of size or aspect ratio of the contents.

Refer to the [icons](/foundations-and-styles/iconography) page for information about the PatternFly icon set and guidelines for use.

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-icon` | `<span>`, `<div>` | Initiates an icon component. **Required**  |
| `.pf-v6-c-icon__content` | `<span>`, `<div>` | Initiates the icon content. **Required**  |
| `.pf-v6-c-icon__progress` | `<span>`, `<div>` | Initiates a container for a progress spinner.  |
| `.pf-m-inline` | `.pf-v6-c-icon` | Displays the icon inline with text, and allows the icon to inherit the size and color of the parent. |
| `.pf-m-[sm,md,lg,xl,2xl,3xl]` | `.pf-v6-c-icon` | Modifies the icon container to be small, medium, large, extra large, double extra large, or triple extra large. |
| `.pf-m-body-[sm,default,lg]` | `.pf-v6-c-icon` | Modifies the icon container to be a size matching small, default, or large body text. |
| `.pf-m-heading-[sm,md,lg,xl,2xl,3xl]` | `.pf-v6-c-icon` | Modifies the icon container to be a size matching small, medium, large, extra large, double extra large, or triple extra large (h6-h1) heading text. |
| `.pf-m-[sm,md,lg,xl,2xl,3xl]` | `.pf-v6-c-icon__content`, `pf-v6-c-icon__progress` | Modifies the icon content or progress element to be small, medium, large, or extra large. |
| `.pf-m-body-[sm,default,lg]` | `.pf-v6-c-icon__content` | Modifies the icon content or progress element to be a size matching small, default, or large body text. |
| `.pf-m-heading-[sm,md,lg,xl,2xl,3xl]` | `.pf-v6-c-icon__content` | Modifies the icon content or progress element to be a size matching small, medium, large, extra large, double extra large, or triple extra large (h6-h1) heading text. |
| `.pf-m-in-progress` | `.pf-v6-c-icon` | Shows the progress element in place of the icon content.  |
| `.pf-m-danger`, `.pf-m-warning`, `.pf-m-success`, `.pf-m-info`, `.pf-m-custom`  | `.pf-v6-c-icon__content` | Modifies the icon content to use a status color.  |
