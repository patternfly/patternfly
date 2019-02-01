### Table Expandable Notes

<mark>**All simple table accessibility and usage requirements apply.**</mark>
<br>
<mark>**All sortable table accessibility and usage requirements apply.**</mark>
<br>
<mark>**All checkbox/action button accessibility and usage requirements apply.**</mark>

### Accessibility
| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `hidden`                                        | `.pf-c-table__expandable-row` | Indicates that the expandable content is hidden. **Required** |
| `aria-expanded="true"`                          | `.pf-c-table__toggle` > `.pf-c-button` | Indicates that the row is visible. **Required**|
| `aria-label="[descriptive text]"`               | `.pf-c-table__toggle` > `.pf-c-button` | Provides an accessible name for toggle button. **Required**|
| `aria-labelledby="{title_cell_id} {button_id}"` | `.pf-c-table__toggle` > `.pf-c-button` | Provides an accessible description for toggle button. **Required** |
| `id="{button_id}"`                              | `.pf-c-table__toggle` > `.pf-c-button` | Provides a reference for toggle button description. **Required** |
| `aria-controls="[id of element the button controls]"` | `.pf-c-table__toggle` > `.pf-c-button` | Identifies the expanded content controlled by the toggle button. **Required** |


### Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-table__expandable-row`         | `<tr>`                                                                | Initiates an expandable row |
| `.pf-c-table__expandable-row-content` | `.pf-c-table__expandable-row` > `<td>` > `<div>`                      | Initiates an expandable row content wrapper. |
| `.pf-m-expanded`                      | `.pf-c-table__toggle` > `.pf-c-button`, `.pf-c-table__expandable-row` | Modifies for expanded state. |
