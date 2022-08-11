---
id: 'Icon'
beta: true
section: components
cssPrefix: pf-c-icon
---

## Examples
### Basic
```hbs
{{#> icon}}
  {{#> icon-content}}
    <i class="fas fa-long-arrow-alt-down" aria-hidden="true"></i>
  {{/icon-content}}
{{/icon}}

{{#> icon}}
  {{#> icon-content}}
    <i class="fas fa-angle-right" aria-hidden="true"></i>
  {{/icon-content}}
{{/icon}}

{{#> icon}}
  {{#> icon-content}}
    <i class="fas fa-angle-down" aria-hidden="true"></i>
  {{/icon-content}}
{{/icon}}

{{#> icon}}
  {{#> icon-content}}
    <i class="fas fa-cog" aria-hidden="true"></i>
  {{/icon-content}}
{{/icon}}
```
### Sizes
```hbs
{{#> icon icon--modifier="pf-m-sm"}}
  {{#> icon-content}}
    <i class="fas fa-plus-circle" aria-hidden="true"></i>
  {{/icon-content}}
{{/icon}}
{{#> icon icon--modifier="pf-m-md"}}
  {{#> icon-content}}
    <i class="fas fa-plus-circle" aria-hidden="true"></i>
  {{/icon-content}}
{{/icon}}
{{#> icon icon--modifier="pf-m-lg"}}
  {{#> icon-content}}
    <i class="fas fa-plus-circle" aria-hidden="true"></i>
  {{/icon-content}}
{{/icon}}
{{#> icon icon--modifier="pf-m-xl"}}
  {{#> icon-content}}
    <i class="fas fa-plus-circle" aria-hidden="true"></i>
  {{/icon-content}}
{{/icon}}
```

### Status colors
```hbs
{{#> icon}}
  {{#> icon-content icon-content--modifier="pf-m-danger"}}
    <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
  {{/icon-content}}
{{/icon}}
{{#> icon}}
  {{#> icon-content icon-content--modifier="pf-m-warning"}}
    <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
  {{/icon-content}}
{{/icon}}
{{#> icon}}
  {{#> icon-content icon-content--modifier="pf-m-success"}}
    <i class="fas fa-check-circle" aria-hidden="true"></i>
  {{/icon-content}}
{{/icon}}
{{#> icon}}
  {{#> icon-content icon-content--modifier="pf-m-info"}}
    <i class="fas fa-info-circle" aria-hidden="true"></i>
  {{/icon-content}}
{{/icon}}
{{#> icon}}
  {{#> icon-content icon-content--modifier="pf-m-default"}}
    <i class="fas fa-bell" aria-hidden="true"></i>
  {{/icon-content}}
{{/icon}}
```

### Sizing content within the icon container
```hbs
{{#> icon icon--modifier="pf-m-xl pf-m-inline"}}
  {{#> icon-content icon-content--modifier="pf-m-sm"}}
    <i class="fas fa-plus-circle" aria-hidden="true"></i>
  {{/icon-content}}
{{/icon}}
{{#> icon icon--modifier="pf-m-xl pf-m-inline"}}
  {{#> icon-content icon-content--modifier="pf-m-md"}}
    <i class="fas fa-plus-circle" aria-hidden="true"></i>
  {{/icon-content}}
{{/icon}}
{{#> icon icon--modifier="pf-m-xl pf-m-inline"}}
  {{#> icon-content icon-content--modifier="pf-m-lg"}}
    <i class="fas fa-plus-circle" aria-hidden="true"></i>
  {{/icon-content}}
{{/icon}}
{{#> icon icon--modifier="pf-m-xl pf-m-inline"}}
  {{#> icon-content icon-content--modifier="pf-m-xl"}}
    <i class="fas fa-plus-circle" aria-hidden="true"></i>
  {{/icon-content}}
{{/icon}}
```

### Inline
```hbs
{{#> icon icon--modifier="pf-m-sm pf-m-inline"}}
  {{#> icon-content}}
    <i class="fas fa-plus-circle" aria-hidden="true"></i>
  {{/icon-content}}
{{/icon}} small,
{{#> icon icon--modifier="pf-m-md pf-m-inline"}}
  {{#> icon-content}}
    <i class="fas fa-plus-circle" aria-hidden="true"></i>
  {{/icon-content}}
{{/icon}} medium,
{{#> icon icon--modifier="pf-m-lg pf-m-inline"}}
  {{#> icon-content}}
    <i class="fas fa-plus-circle" aria-hidden="true"></i>
  {{/icon-content}}
{{/icon}} large,
{{#> icon icon--modifier="pf-m-xl pf-m-inline"}}
  {{#> icon-content}}
    <i class="fas fa-plus-circle" aria-hidden="true"></i>
  {{/icon-content}}
{{/icon}} extra large
```

### In progress
```hbs
{{#> icon icon--modifier="pf-m-md pf-m-in-progress"}}
  {{#> icon-content}}
    <i class="fas fa-check-circle" aria-hidden="true"></i>
  {{/icon-content}}
  {{#> icon-progress}}
    {{#> spinner spinner--IsSvg="true" spinner--modifier="pf-m-md"}}Loading...{{/spinner}}
  {{/icon-progress}}
{{/icon}}

{{#> icon icon--modifier="pf-m-md"}}
  {{#> icon-content}}
    <i class="fas fa-check-circle" aria-hidden="true"></i>
  {{/icon-content}}
  {{#> icon-progress}}
    {{#> spinner spinner--IsSvg="true" spinner--modifier="pf-m-md"}}Loading...{{/spinner}}
  {{/icon-progress}}
{{/icon}}
```

## Documentation
### Overview
The icon element is a container used to maintain a stable space for an icon or spinner, regardless of size or aspect ratio of the contents.

Refer to the [Icons](/guidelines/icons) page for information about the Patternfly icon set and guidelines for use.

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-icon` | `<span>`, `<div>` | Initiates an icon component. **Required**  |
| `.pf-c-icon__content` | `<span>`, `<div>` | Initiates the icon content. **Required**  |
| `.pf-c-icon__progress` | `<span>`, `<div>` | Initiates a container for a progress spinner.  |
| `.pf-m-inline` | `.pf-c-icon` | Gives proper alignment for an icon inline with text. |
| `.pf-m-[sm,md,lg,xl]` | `.pf-c-icon` | Modifies the icon container to be small, medium, large, or extra large. |
| `.pf-m-[sm,md,lg,xl]` | `.pf-c-icon__content` | Modifies the icon content to be small, medium, large, or extra large. |
| `.pf-m-in-progress` | `.pf-c-icon` | Shows the progress element in place of the icon content.  |
| `.pf-m-danger`, `.pf-m-warning`, `.pf-m-success`, `.pf-m-info`, `.pf-m-default`  | `.pf-c-icon__content` | Modifies the icon content to use a status color.  |

