<mark>**All simple table accessibility and usage requirements apply.**</mark>

### Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `aria-sort=[ascending or descending]` | `.pf-c-table__sort` | Indicates if columns in a table are sorted in ascending or descending order. For each table, authors __SHOULD__ apply aria-sort to only one header at a time. **Required** |

### Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-table__sort`           | `<th>`                                      | Initiates a sort table cell. **Required for sortable table columns** |
| `.pf-m-selected`             | `.pf-c-table__sort`                          | Modifies for sort selected state. **Required for sortable table columns** |
| `.pf-c-table__sort-indicator` | `.pf-c-table__sort > button > span`         | Initiates a sort indicator. **Required for sortable table columns** |
| `.fa-arrows-alt-v`                    | `.pf-c-table__sort > button > span > .fas`  | Initiates icon within unsorted, sortable table header. **Required for sortable table columns** |
| `.fa-long-arrow-alt-up`                | `.pf-c-table__sort > button > span > .fas`  | Initiates icon within ascending sorted and selected, sortable table header. **Required for sortable table columns** |
| `.fa-long-arrow-alt-down`                | `.pf-c-table__sort > button > span > .fas`  | Initiates icon within descending sorted and selected, sortable table header. **Required for sortable table columns** |
