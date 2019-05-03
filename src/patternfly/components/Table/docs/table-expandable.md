### Table expandable notes

**All simple table accessibility and usage requirements apply.**
<br>
**All sortable table accessibility and usage requirements apply.**
<br>
**All checkbox/action button accessibility and usage requirements apply.**

Note: To apply padding to `.pf-c-table__expandable-row`, wrap the content in `.pf-c-table__expandable-row-content`. For no padding add `.pf-m-no-padding` to `.pf-c-table__expandable-row` > `<td>`

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `hidden` | `.pf-c-table__expandable-row` | Indicates that the expandable content is hidden. **Required** |
| `aria-expanded="true"` | `.pf-c-table__toggle` > `.pf-c-button` | Indicates that the row is visible. **Required**|
| `aria-label="[descriptive text]"` | `.pf-c-table__toggle` > `.pf-c-button` | Provides an accessible name for toggle button. **Required**|
| `aria-labelledby="[title_cell_id] [button_id]"` | `.pf-c-table__toggle` > `.pf-c-button` | Provides an accessible description for toggle button. **Required** |
| `id="[button_id]"` | `.pf-c-table__toggle` > `.pf-c-button` | Provides a reference for toggle button description. **Required** |
| `aria-controls="[id of element the button controls]"` | `.pf-c-table__toggle` > `.pf-c-button` | Identifies the expanded content controlled by the toggle button. **Required** |


### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-table__expandable-row` | `<tr>` | Initiates an expandable row. |
| `.pf-c-table__expandable-row-content` | `.pf-c-table__expandable-row` > `<td>` > `<div>` | Initiates an expandable row content wrapper. |
| `.pf-m-expanded` | `.pf-c-table__toggle` > `.pf-c-button`, `.pf-c-table__expandable-row` | Modifies for expanded state. |
| `.pf-m-no-padding` | `.pf-c-table__expandable-row` > `<td>` | Modifies the expandable row to have no padding.