`** All simple table accessibility and usage requirements apply.`
`** All sortable table accessibility notes and usage requirements apply.`

Note: When including interactive elements in a table, the primary, descriptive cell in the corresponding row is a `<th>`, rather than a `<td>`. In this example, 'Node 1' and 'Node 2 siemur/test-space' are `<th>`s.


### Thead Accessibility
| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `aria-label="[descriptive text]"` | `.pf-c-table__check`, `.pf-c-table__action`, empty `<th>` | Provides an accessible name for `<th>` when cell does not contain textual content. **Required when th cell does not contain textual content** |
| `aria-label="[descriptive text]"` | `.pf-c-check__input`, `.pf-c-button` | Provides an accessible name for `checkboxes` and `buttons`. **Required** |


### Tbody Accessibility
| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `aria-labelledby="{title_cell_id}"` | `.pf-c-table__check`, `.pf-c-table__action` | Provides an accessible name for special cells containing interactive elements. **Required** |
| `aria-label="[descriptive text]"`   | `.pf-c-check__input`, `.pf-c-button`        | Provides an accessible name for `checkboxes` and `buttons`. **Required** |
| `id="{title_cell_id}"`              | title cell `<th>`                           | Provides an accessible description for special cells. **Required** |


### Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-table__check`  | `<th>`, `<td>` | Initiates a check table cell. |
| `.pf-c-table__action` | `<th>`, `<td>` | Initiates an action table cell. |
