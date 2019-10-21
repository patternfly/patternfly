---
title: Pagination
section: components
cssPrefix: pf-c-pagination
---

## Examples
```hbs title=Top isFullscreen
{{#> pagination}}
  {{#> pagination-total-items}}
    <b>1 - 10</b> of <b>37</b>
  {{/pagination-total-items}}
  {{> pagination-options-menu options-menu id="pagination-options-menu-top-example"  options-menu--IsText="true"}}
  {{#> pagination-nav}}
    {{#> button button--modifier="pf-m-plain" button--attribute='disabled aria-label="Go to first page"'}}
      <i class="fas fa-angle-double-left" aria-hidden="true"></i>
    {{/button}}
    {{#> button button--modifier="pf-m-plain" button--attribute='disabled aria-label="Go to previous page"'}}
      <i class="fas fa-angle-left" aria-hidden="true"></i>
    {{/button}}
    {{#> pagination-nav-page-select}}
      {{> form-control input="true" controlType="input" form-control--attribute='aria-label="Current page" type="number" min="1" max="4" value="1"'}}
      <span aria-hidden="true">of 4</span>
    {{/pagination-nav-page-select}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Go to next page"'}}
      <i class="fas fa-angle-right" aria-hidden="true"></i>
    {{/button}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Go to last page"'}}
      <i class="fas fa-angle-double-right" aria-hidden="true"></i>
    {{/button}}
  {{/pagination-nav}}
{{/pagination}}
```

```hbs title=Top-expanded isFullscreen
{{#> pagination}}
  {{#> pagination-total-items}}
    <b>1 - 10</b> of <b>37</b>
  {{/pagination-total-items}}
  {{> pagination-options-menu options-menu--IsExpanded="true" id="pagination-options-menu-top-expanded-example" options-menu--IsText="true"}}
  {{#> pagination-nav}}
    {{#> button button--modifier="pf-m-plain" button--attribute='disabled aria-label="Go to first page"'}}
      <i class="fas fa-angle-double-left" aria-hidden="true"></i>
    {{/button}}
    {{#> button button--modifier="pf-m-plain" button--attribute='disabled aria-label="Go to previous page"'}}
      <i class="fas fa-angle-left" aria-hidden="true"></i>
    {{/button}}
    {{#> pagination-nav-page-select}}
      {{> form-control input="true" controlType="input" form-control--attribute='aria-label="Current page" type="number" min="1" max="4" value="1"'}}
      <span aria-hidden="true">of 4</span>
    {{/pagination-nav-page-select}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Go to next page"'}}
      <i class="fas fa-angle-right" aria-hidden="true"></i>
    {{/button}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Go to last page"'}}
      <i class="fas fa-angle-double-right" aria-hidden="true"></i>
    {{/button}}
  {{/pagination-nav}}
{{/pagination}}
```

```hbs title=Bottom isFullscreen
{{#> pagination pagination--modifier="pf-m-footer"}}
  {{> pagination-options-menu id="pagination-options-menu-bottom-example" options-menu--IsText="true"}}
  {{#> pagination-nav}}
    {{#> button button--modifier="pf-m-plain" button--attribute='disabled aria-label="Go to first page"'}}
      <i class="fas fa-angle-double-left" aria-hidden="true"></i>
    {{/button}}
    {{#> button button--modifier="pf-m-plain" button--attribute='disabled aria-label="Go to previous page"'}}
      <i class="fas fa-angle-left" aria-hidden="true"></i>
    {{/button}}
    {{#> pagination-nav-page-select}}
      {{> form-control input="true" controlType="input" form-control--attribute='aria-label="Current page" type="number" min="1" max="4" value="1"'}}
      <span aria-hidden="true">of 4</span>
    {{/pagination-nav-page-select}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Go to next page"'}}
      <i class="fas fa-angle-right" aria-hidden="true"></i>
    {{/button}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Go to last page"'}}
      <i class="fas fa-angle-double-right" aria-hidden="true"></i>
    {{/button}}
  {{/pagination-nav}}
{{/pagination}}
```

```hbs title=Top-disabled isFullscreen
{{#> pagination}}
  {{#> pagination-total-items}}
    <b>1 - 10</b> of <b>37</b>
  {{/pagination-total-items}}

  {{> pagination-options-menu id="pagination-options-menu-top-disabled-example"  options-menu--IsText="true" options-menu-toggle--IsDisabled="true"}}

  {{#> pagination-nav}}
    {{#> button button--modifier="pf-m-plain" button--attribute='disabled aria-label="Go to first page" aria-disabled="true"'}}
      <i class="fas fa-angle-double-left" aria-hidden="true"></i>
    {{/button}}
    {{#> button button--modifier="pf-m-plain" button--attribute='disabled aria-label="Go to previous page" aria-disabled="true"'}}
      <i class="fas fa-angle-left" aria-hidden="true"></i>
    {{/button}}

    {{#> pagination-nav-page-select}}
      {{> form-control input="true" controlType="input" form-control--attribute='disabled aria-label="Current page" type="number" min="1" max="4" value="1"'}}
      <span aria-hidden="true">of 4</span>
    {{/pagination-nav-page-select}}

    {{#> button button--modifier="pf-m-plain" button--attribute='disabled aria-label="Go to next page"'}}
      <i class="fas fa-angle-right" aria-hidden="true"></i>
    {{/button}}
    {{#> button button--modifier="pf-m-plain" button--attribute='disabled aria-label="Go to last page"'}}
      <i class="fas fa-angle-double-right" aria-hidden="true"></i>
    {{/button}}
  {{/pagination-nav}}
{{/pagination}}
```

```hbs title=Compact isFullscreen
{{#> pagination pagination--modifier="pf-m-compact"}}
  {{#> pagination-total-items}}
    <b>1 - 10</b> of <b>37</b>
  {{/pagination-total-items}}
  {{> pagination-options-menu options-menu id="pagination-options-menu-compact-example"  options-menu--IsText="true"}}
  {{#> pagination-nav}}
    {{#> button button--modifier="pf-m-plain" button--attribute='disabled aria-label="Go to previous page"'}}
      <i class="fas fa-angle-left" aria-hidden="true"></i>
    {{/button}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Go to next page"'}}
      <i class="fas fa-angle-right" aria-hidden="true"></i>
    {{/button}}
  {{/pagination-nav}}
{{/pagination}}
```

## Documentation
Note: `<button>` or `<a>` elements can be used in `.pf-c-pagination__nav-page-select`.

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-label`  | `.pf-c-pagination__nav` |  Provides an accessible name for pagination navigation element. **Required** |

## Pagination nav input

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `type="number"` | `.pf-c-pagination` > `.pf-c-form-control` | Defines a field as a number. **Required** |
| `value` | `.pf-c-pagination__nav-page-select` > `.pf-c-form-control` | Provides initial integer value. **Required** |
| `min` | `.pf-c-pagination__nav-page-select` > `.pf-c-form-control` | Provides minimum integer value. **Required** |
| `max` | `.pf-c-pagination__nav-page-select` > `.pf-c-form-control` | Provides max integer value. **Required** |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-pagination` | `<div>` |  Initiates pagination. |
| `.pf-c-pagination__current` | `<div>` |  Initiates element to display currently displayed items for use in responsive view. Only needed for default pagination, not `.pf-m-footer`. |
| `.pf-c-pagination__total-items` | `<div>` | Initiates element to replace the options menu on mobile. |
| `.pf-c-pagination__nav` | `<nav>` |  Initiates pagination nav. |
| `.pf-c-pagination__nav-page-select` | `<div>` |  Initiates pagination nav page select. |
| `.pf-c-pagination__menu-text` | `<span>` | Indicates text in menu dropdown. |
| `.pf-m-footer` | `.pf-c-pagination` | Modifies for bottom/footer pagination component styles. |
| `.pf-m-compact` | `.pf-c-pagination` | Modifies for compact pagination component styles. |
