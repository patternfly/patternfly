
<mark>**All simple table accessibility and usage requirements apply**</mark>
<br>
<mark>**All sortable table accessibility and usage requirements apply**</mark>
<br>

Note: When including interactive elements in a table, the primary, descriptive cell in the corresponding row is a `<th>`, rather than a `<td>`. In this example, 'Node 1' and 'Node 2 siemur/test-space' are `<th>`s. 

Note: When header cells are empty or they contain interactive elements, `<th>` should be replaced with `<td>`.


### Thead Accessibility
| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `aria-label="[descriptive text]"` | `.pf-c-table__check` | Provides an accessible name for checkbox header cells. **Required** |

### Tbody Accessibility
| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `aria-labelledby="{title_cell_id} {element_id}"` | `.pf-c-check__input`, `.pf-c-button`  | Provides an accessible name for special cells containing interactive elements. **Required** |
| `aria-label="[descriptive text]"`  | `.pf-c-check__input`, `.pf-c-button`  | Provides an accessible name for `checkboxes` and `buttons`. **Required** |
| `id`  | title cell `<th>`, `.pf-c-check__input`, `.pf-c-button`  | Provides an accessible description for special cells. **Required** |


### Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-table__check`  | `<th>`, `<td>` | Initiates a check table cell. |
| `.pf-c-table__action` | `<th>`, `<td>` | Initiates an action table cell. |
