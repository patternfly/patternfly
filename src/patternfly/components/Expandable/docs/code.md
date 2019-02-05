## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `aria-expanded="true"` | `.pf-c-expandable__toggle` | Indicated that the expandable content is visible. **Required** |
| `hidden` | `.pf-c-expandable__expanded` | Indicates that the expandable content is hidden. **Required**. |
| `aria-hidden="true"` | `.pf-c-expandable__toggle-icon` | Hides from screen readers. |
| `aria-controls="[id of element controlled]"` | `.pf-c-expandable__toggle-icon` | Identifies the section controlled by the toggle button. |


## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-expandable` | `<div>` | Initiates the expandable component. **Required** |
| `.pf-c-expandable__section` | `<div>` | Initiates the expandable component section. **Required** |
| `.pf-c-expandable__toggle` | `<button>` | Initiates the expandable toggle. **Required** |
| `.pf-c-expandable__toggle-icon` | `<i>` | Initiates the expandable toggle icon. **Required** |
| `.pf-c-expandable__expanded` | `<div>` | Initiates the expandable expanded section. **Required** |
| `.pf-c-expandable__footer` | `<div>` | Initiates the expandable footer. |
| `.pf-m-expanded` | `.pf-c-expandable` | Modifies the component for the expanded state. |
