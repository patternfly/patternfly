### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role="grid"` | `.pf-c-table` | Identifies the element that serves as the grid widget container. **Required** |
| `aria-label` | `.pf-c-table` | Provides an accessible name for the table when a descriptive `<caption>` or `<h*>` is not available. **Required in the absence of `<caption>` or `<h*>`** |
| `data-label="[td description]"` | `<td>` | This attribute replaces table header in mobile viewport. It is rendered by `::before` pseudo element. |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-table` | `<table>` | Initiates a table element. **Required** |
| `.pf-c-table__caption` | `<caption>` | Initiates a table caption. |
| `.pf-m-height-auto` | `<tr>` | Modifies a `<tr>` to have `height: auto`, which undoes the `height` declaration currently on `<tr>` elements. |
| `.pf-m-center` | `<th>`, `<td>` | Modifies cell to center its contents. |
