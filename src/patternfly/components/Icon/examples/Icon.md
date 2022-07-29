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
    <i class="fas fa-angle-left" aria-hidden="true"></i>
  {{/icon-content}}
{{/icon}}

{{#> icon}}
  {{#> icon-content}}
    <i class="fas fa-cog" aria-hidden="true"></i>
  {{/icon-content}}
{{/icon}}

{{#> icon}}
  {{#> icon-content}}
    {{#> spinner spinner--IsSvg="true" spinner--modifier="pf-m-md pf-c-icon__element"}}Loading...{{/spinner}}
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
<br/>
<br/>
<br/>
{{#> icon icon--modifier="pf-m-xl pf-m-inline"}}
  {{#> icon-content icon-content--modifier="pf-m-sm"}}
    {{#> spinner spinner--IsSvg="true" spinner--modifier="pf-m-sm pf-c-icon__element"}}Loading...{{/spinner}}
  {{/icon-content}}
{{/icon}}
{{#> icon icon--modifier="pf-m-xl pf-m-inline"}}
  {{#> icon-content icon-content--modifier="pf-m-md"}}
    {{#> spinner spinner--IsSvg="true" spinner--modifier="pf-m-md pf-c-icon__element"}}Loading...{{/spinner}}
  {{/icon-content}}
{{/icon}}
{{#> icon icon--modifier="pf-m-xl pf-m-inline"}}
  {{#> icon-content icon-content--modifier="pf-m-lg"}}
    {{#> spinner spinner--IsSvg="true" spinner--modifier="pf-m-lg pf-c-icon__element"}}Loading...{{/spinner}}
  {{/icon-content}}
{{/icon}}
{{#> icon icon--modifier="pf-m-xl pf-m-inline"}}
  {{#> icon-content icon-content--modifier="pf-m-xl"}}
    {{#> spinner spinner--IsSvg="true" spinner--modifier="pf-m-xl pf-c-icon__element"}}Loading...{{/spinner}}
  {{/icon-content}}
{{/icon}}

```

### Inline
Use the inline variation to correctly align the icon with inline text.
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
The icon element is a container used to hold a stable space for an icon or spinner, regardless of size or aspect ratio of the contents.

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-icon` | `<span>`, `<div>` | Initiates an icon container. **Required**  |
| `.pf-c-icon__content` | `<span>`, `<div>` | Initiates the icon content. **Required**  |
| `.pf-c-icon__progress` | `<span>`, `<div>` | Contains the spinner for showing progress.  |
| `.pf-m-inline` | `.pf-c-icon` | Gives proper alignment for a icon inline with text. |
| `.pf-m-[sm,md,lg,xl]` | `.pf-c-icon` | Modifies the icon container to be small, medium, large, or extra large. |
| `.pf-m-[sm,md,lg,xl]` | `.pf-c-icon__content` | Modifies the contents to be small, medium, large, or extra large. |
| `.pf-m-in-progress` | `.pf-c-icon` | Shows the progress element in place of the contents.  |

