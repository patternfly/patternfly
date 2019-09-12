## Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-hidden="true"` | `.pf-c-empty-state__icon` |  Hides icon for assistive technologies. **Required** |


## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-empty-state` | `<div>` |  Initiates an empty state component. **Required** |
| `.pf-c-empty-state__icon` | `<i>`, `<div>` |  Creates the empty state icon or icon container when used as a `<div>`. |
| `.pf-c-title` | `<h1>, <h2>, <h3>, <h4>, <h5>, <h6>` |  Creates the empty state title. **Required** |
| `.pf-c-empty-state__body` | `<div>` |  Creates the empty state body content. You can have more than one `.pf-c-empty-state__body` elements. |
| `.pf-c-button.pf-m-primary` | `<button>` |  Creates the primary action button. |
| `.pf-c-empty-state__primary` | `<div>` |  Container for primary actions. Can be used in lieu of using `.pf-c-button.pf-m-primary`. |
| `.pf-c-empty-state__secondary` | `<div>` |  Container secondary actions. |
| `.pf-m-sm` | `.pf-c-empty-state` | Modifies the empty state for a small max-width |
| `.pf-m-lg` | `.pf-c-empty-state` | Modifies the empty state for a large max-width |
