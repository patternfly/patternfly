### Table Expandable Notes

`** All simple table accessibility and usage requirements apply.`
<br>
`** All sortable table accessibility notes and usage requirements apply.`
<br>
`** All checkbox/action button accessibility notes and usage requirements apply.`

### Accessibility
| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `aria-expanded="true"` | `.pf-c-table__toggle > .pf-c-button` | Indicates that the row is visible. **Required**|
| `aria-label="[descriptive text]"` | `.pf-c-table__toggle > .pf-c-button` | Provides an accessible name for toggle button. **Required**|
| `aria-labelledby="{title_cell_id} {button_id}"` | `.pf-c-table__toggle > .pf-c-button` | Provides an accessible description for toggle button. **Required** |
| `id="{button_id}"` | `.pf-c-table__toggle > .pf-c-button` | Provides a reference for toggle button description. **Required** |


### Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-table__expandable-row`             | `<tr>`                                                | Initiates an expandable row |
| `.pf-c-table__expandable-row-content`     | `.pf-c-table__expandable-row > <td> > <div>`          | Modifies for expanded state. |
| `.pf-m-expanded`                          | `.pf-c-table__toggle > .pf-c-button`, `.pf-c-table__expandable-row`       | Modifies for expanded state. |
