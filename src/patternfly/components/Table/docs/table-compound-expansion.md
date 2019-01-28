### Table Compound Expansion Notes

<mark>**All simple table accessibility and usage requirements apply.**</mark>
<br>
<mark>**All sortable table accessibility and usage requirements apply.**</mark>
<br>
<mark>**All checkbox/action button accessibility and usage requirements apply.**</mark>

### Accessibility
| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `hidden`                                        | `.pf-c-table__expandable-row` | Indicates that the expandable content is hidden. **Required** |
| `aria-expanded="true"`                          | `.pf-c-table__compound-expansion-toggle` > `.pf-c-button` | Indicates that the row is visible. **Required**|
| `aria-controls="[id of element the button controls]"` | `.pf-c-table__compound-expansion-toggle` > `.pf-c-button` | Identifies the expanded content controlled by the toggle button. **Required** |

### Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-m-expanded`                          | `<tbody>`, `.pf-c-table__compound-expansion-toggle` > `.pf-c-button` | Modifies a tbody with a row and an expandable row. |
| `.pf-c-table__compound-expansion-toggle`  | `<td>` | Modifies a `<td>` on active/focus. |
