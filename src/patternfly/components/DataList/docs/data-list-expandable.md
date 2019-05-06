### Data list expandable notes

**All simple data list accessibility and usage requirements apply.**
<br>
**All data list checkbox/action button accessibility and usage requirements apply.**

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-expanded="true"` | `.pf-c-data-list__toggle` > `.pf-c-button` | Indicates that the expandable content is visible. **Required**|
| `hidden` | `.pf-c-data-list__expandable-content` | Indicates that the expandable content is hidden. **Required**|
| `aria-label="[descriptive text]"` | `.pf-c-data-list__toggle` > `.pf-c-button` | Provides an accessible name for toggle button. **Required**|
| `aria-labelledby="{title_cell_id} {button_id}"` | `.pf-c-data-list__toggle` > `.pf-c-button` | Establishes relationship between aria-label text and toggle button. **Required**
| `id="{button_id}"` | `.pf-c-data-list__toggle` > `.pf-c-button` | Provides a reference for toggle button description. **Required** |
| `aria-controls="[id of element controlled]"` | `.pf-c-data-list__toggle` > `.pf-c-button`    | Identifies the section controlled by the toggle button. **Required** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-data-list__item-control` | `<div>` | Initiates a container for data list controls. For example, add `.pf-c-data-list__toggle` here. **Required** |
| `.pf-c-data-list__toggle` | `<div>` | Initiates a toggle button. |
| `.pf-c-data-list__icon`  | `<i>` | Initiates a toggle icon. |
| `.pf-c-data-list__expandable-content` | `<div>` | Initiates an expandable content container. |
| `.pf-c-data-list__expandable-content-body` | `<div>` | Initiates an expandable content container body. **Required** when `.pf-c-data-list__expandable-content` is used. |
| `.pf-m-expanded` | `.pf-c-table__item` | Modifies for expanded state. |
| `.pf-m-no-padding` | `.pf-c-data-list__expandable-content-body` | Removes padding for the expandable content body. |
| `.pf-m-icon` | `.pf-c-data-list__cell` | Modifies a data list cell to not grow and align-left when its the first data-list__cell element. Use `.pf-c-data-list__icon`. |
