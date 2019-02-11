## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `aria-expanded="true"` | `.pf-c-expandable__toggle` | Indicated that the expandable content is visible. **Required** |
| `hidden` | `.pf-c-expandable__content` | Indicates that the expandable content is hidden. **Required**. |
| `aria-hidden="true"` | `.pf-c-expandable__toggle-icon` | Hides from screen readers. |

## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-expandable` | `<div>` | Initiates the expandable component. **Required** |
| `.pf-c-expandable__toggle` | `<button>` | Initiates the expandable toggle. **Required** |
| `.pf-c-expandable__toggle-icon` | `<i>` | Initiates the expandable toggle icon. **Required** |
| `.pf-c-expandable__content` | `<div>` | Initiates the expandable content section. **Required** |
| `.pf-m-expanded` | `.pf-c-expandable` | Modifies the component for the expanded state. |
