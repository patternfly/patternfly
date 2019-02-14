## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `aria-expanded="true"` | `.pf-c-expandable__toggle` | Indicates that the expandable content is visible. **Required** |
| `aria-expanded="false"` | `.pf-c-expandable__toggle` | Indicates the the expandable content is hidden. **Required** |
| `hidden` | `.pf-c-expandable__content` | Indicates that the expandable content is hidden. **Required**. |
| `aria-hidden="true"` | `.pf-c-expandable__toggle-icon` | Hides the icon from screen readers. **Required** |

## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-expandable` | `<div>` | Initiates the expandable component. **Required** |
| `.pf-c-expandable__toggle` | `<button>` | Initiates the expandable toggle. **Required** |
| `.pf-c-expandable__toggle-icon` | `<i>` | Initiates the expandable toggle icon. **Required** |
| `.pf-c-expandable__content` | `<div>` | Initiates the expandable content section. **Required** |
| `.pf-m-expanded` | `.pf-c-expandable` | Modifies the component for the expanded state. |
