## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `aria-label`                                          | `.pf-c-pagination`, `.pf-c-pagination__nav`, `.pf-c-pagination__nav-page`, `.pf-c-pagination__nav-page` > `.pf-c-form-control` |  Provides an accessible name for pagination elements. **Required** |

## Pagination nav input

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `type="number"`  | `.pf-c-pagination__nav-page` > `.pf-c-form-control` |  Defines a field as a number. **Required** |
| `value` | `.pf-c-pagination__nav-page` > `.pf-c-form-control` | Provides initial integer value. **Required** |
| `min`   | `.pf-c-pagination__nav-page` > `.pf-c-form-control` | Provides minimum integer value. **Required** |
| `max`   | `.pf-c-pagination__nav-page` > `.pf-c-form-control` | Provides max integer value. **Required** |

## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-pagination`            | `<div>` |  Initiates pagination. |
| `.pf-c-pagination__select`    | `<div>` |  Initiates pagination select. |
| `.pf-c-pagination__range`     | `<div>` |  Initiates pagination range. |
| `.pf-c-pagination__nav`       | `<div>` |  Initiates pagination nav. |
