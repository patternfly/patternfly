### Data List Expandable Notes

<mark>**All simple data list accessibility and usage requirements apply.**</mark>
<br>
<mark>**All data list checkbox/action button accessibility and usage requirements apply.**</mark>

### Accessibility
| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `aria-expanded="true"`                          | `.pf-c-data-list__toggle` > `.pf-c-button`    | Indicates that the expandable content is visible. **Required**|
| `hidden`                                        | `.pf-c-data-list__expandable-content`         | Indicates that the expandable content is hidden. **Required**|
| `aria-label="[descriptive text]"`               | `.pf-c-data-list__toggle` > `.pf-c-button`    | Provides an accessible name for toggle button. **Required**|
| `aria-labelledby="{title_cell_id} {button_id}"` | `.pf-c-data-list__toggle` > `.pf-c-button`    | Establishes relationship between aria-label text and toggle button. **Required**
| `id="{button_id}"`                              | `.pf-c-data-list__toggle` > `.pf-c-button`    | Provides a reference for toggle button description. **Required** |
| `aria-controls="[id of element controlled]"` | `.pf-c-data-list__toggle` > `.pf-c-button`    | Identifies the section controlled by the toggle button. **Required** |

### Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-data-list__toggle`         | `<div>`               | Initiates a toggle button. |
| `.pf-m-expanded`                  | `.pf-c-table__item`   | Modifies for expanded state. |
