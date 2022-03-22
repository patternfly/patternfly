---
id: Pagination
section: components
cssPrefix: pf-c-pagination
---

import './Pagination.css'

## Examples
### Top
```hbs
{{#> pagination}}
  {{> pagination-total-items-content}}
  {{> pagination-options-menu id="pagination-options-menu-top-example"}}
  {{> pagination-nav-content}}
{{/pagination}}
```

### Top expanded
```hbs
{{#> pagination}}
  {{> pagination-total-items-content}}
  {{> pagination-options-menu options-menu--IsExpanded="true" id="pagination-options-menu-top-expanded-example"}}
  {{> pagination-nav-content}}
{{/pagination}}
```

### Top sticky
```hbs
{{#> pagination pagination--modifier="pf-m-sticky"}}
  {{> pagination-total-items-content}}
  {{> pagination-options-menu id="pagination-options-menu-top-example"}}
  {{> pagination-nav-content}}
{{/pagination}}
<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>
<br><br>
<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>
<br><br>
<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>
<br><br>
<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>
```

### Indeterminate (item count is not known)
```hbs
{{#> pagination pagination--IsIndeterminate="true"}}
  {{> pagination-total-items-content}}
  {{> pagination-options-menu id="pagination-options-menu-top-indeterminate-example"}}
  {{> pagination-nav-content}}
{{/pagination}}
```

### Bottom
```hbs
{{#> pagination pagination--modifier="pf-m-bottom"}}
  {{> pagination-options-menu id="pagination-options-menu-bottom-example" pagination-options-menu--modifier="pf-m-top"}}
  {{> pagination-nav-content}}
{{/pagination}}
```

### Bottom sticky
```hbs
<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>
<br><br>
<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>
<br><br>
<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>
<br><br>
<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>
{{#> pagination pagination--modifier="pf-m-bottom pf-m-sticky"}}
  {{> pagination-options-menu id="pagination-options-menu-bottom-sticky-example" pagination-options-menu--modifier="pf-m-top"}}
  {{> pagination-nav-content}}
{{/pagination}}
```

### Top disabled
```hbs
{{#> pagination}}
  {{> pagination-total-items-content}}
  {{> pagination-options-menu id="pagination-options-menu-top-disabled-example" options-menu-toggle--IsDisabled="true"}}
  {{> pagination-nav-content pagination-nav-content--IsDisabled="true"}}
{{/pagination}}
```

### Compact
```hbs
{{#> pagination pagination--IsCompact="true"}}
  {{> pagination-total-items-content}}
  {{> pagination-options-menu id="pagination-options-menu-compact-example"}}
  {{> pagination-nav-content}}
{{/pagination}}
```

### Top with display summary modifier
```hbs
{{#> pagination pagination--id="pagination-top-with-summary-modifier" pagination--modifier="pf-m-display-summary"}}
  {{> pagination-total-items-content}}
  {{> pagination-options-menu id=(concat pagination--id '-options-menu')}}
  {{> pagination-nav-content}}
{{/pagination}}
```

### Top with display full modifier
```hbs
{{#> pagination pagination--id="pagination-top-with-full-modifier" pagination--modifier="pf-m-display-full"}}
  {{> pagination-total-items-content}}
  {{> pagination-options-menu id=(concat pagination--id '-options-menu')}}
  {{> pagination-nav-content}}
{{/pagination}}
```

### Top with responsive display summary and display full modifiers
```hbs
{{#> pagination pagination--id="pagination-top-with-responsive-summary-navigation-modifiers" pagination--modifier="pf-m-display-summary pf-m-display-full-on-lg pf-m-display-summary-on-xl pf-m-display-full-on-2xl"}}
  {{> pagination-total-items-content}}
  {{> pagination-options-menu id=(concat pagination--id '-options-menu')}}
  {{> pagination-nav-content}}
{{/pagination}}
```

### Compact display full modifier
```hbs
{{#> pagination pagination--id="pagination-compact-with-full-modifier" pagination--IsCompact="true" pagination--modifier="pf-m-display-full"}}
  {{> pagination-total-items-content}}
  {{> pagination-options-menu id=(concat pagination--id '-options-menu')}}
  {{> pagination-nav-content}}
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
| `.pf-c-pagination__current` | `<div>` |  Initiates element to display currently displayed items for use in responsive view. Only needed for default pagination, not `.pf-m-bottom`. |
| `.pf-c-pagination__total-items` | `<div>` | Initiates element to replace the options menu on summary. |
| `.pf-c-pagination__nav` | `<nav>` |  Initiates pagination nav. |
| `.pf-c-pagination__nav-control` | `<div>` |  Initiates pagination nav control. |
| `.pf-c-pagination__nav-page-select` | `<div>` |  Initiates pagination nav page select. |
| `.pf-m-display-summary{-on-[breakpoint]}` | `.pf-c-pagination` | Modifies for summary display pagination component styles at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-display-full{-on-[breakpoint]}` | `.pf-c-pagination` | Modifies for full display pagination component styles at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-bottom` | `.pf-c-pagination` | Modifies for bottom pagination component styles. |
| `.pf-m-compact` | `.pf-c-pagination` | Modifies for compact pagination component styles. |
| `.pf-m-static` | `.pf-c-pagination.pf-m-bottom` | Modifies bottom pagination to not be positioned sticky on summary. |
| `.pf-m-sticky` | `.pf-c-pagination` | Modifies the pagination to be sticky to its container. It will be sticky to the top of the container by default, and sticky to the bottom of the container when applied to `.pf-c-pagination.pf-m-bottom`. |
| `.pf-m-first` | `.pf-c-pagination__nav-control` | Indicates the control is for the first page button. |
| `.pf-m-prev` | `.pf-c-pagination__nav-control` | Indicates the control is for the previous page button. |
| `.pf-m-next` | `.pf-c-pagination__nav-control` | Indicates the control is for the next page button. |
| `.pf-m-last` | `.pf-c-pagination__nav-control` | Indicates the control is for the last page button. |
