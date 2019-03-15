Note: `<button>` or `<a>` elements can be used in `.pf-c-pagination__nav-page-select`.

## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `aria-label`  | `.pf-c-pagination__nav` |  Provides an accessible name for pagination navigation element. **Required** |

## Pagination nav input

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `type="number"` | `.pf-c-pagination` > `.pf-c-form-control` | Defines a field as a number. **Required** |
| `value` | `.pf-c-pagination__nav-page-select` > `.pf-c-form-control` | Provides initial integer value. **Required** |
| `min` | `.pf-c-pagination__nav-page-select` > `.pf-c-form-control` | Provides minimum integer value. **Required** |
| `max` | `.pf-c-pagination__nav-page-select` > `.pf-c-form-control` | Provides max integer value. **Required** |

## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-pagination` | `<div>` |  Initiates pagination. |
| `.pf-c-pagination__current` | `<div>` |  Initiates element to display currently displayed items for use in responsive view. Only needed for default pagination, not `.pf-m-footer`. |
| `.pf-c-pagination__total-items` | `<div>` | Initiates element to replace the options menu on mobile. |
| `.pf-c-pagination__nav` | `<nav>` |  Initiates pagination nav. |
| `.pf-c-pagination__nav-page-select` | `<div>` |  Initiates pagination nav page select. |
| `.pf-c-pagination__menu-text` | `<span>` | Indicates text in menu dropdown. |
| `.pf-m-footer` | `.pf-c-pagination` | Modifies for bottom/footer pagination component styles. |
