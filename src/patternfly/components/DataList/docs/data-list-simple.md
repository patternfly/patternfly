### Accessibility
| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `role="list"`       | `.pf-c-data-list` | Indicates that the data list is a list. **Required** |
| `aria-label`        | `.pf-c-data-list`       | Provides an accessible name for the data list. **Required** |
| `aria-labelledby`   | `.pf-c-data-list__item` | Provides an accessible description for data list item. **Required** |
| `id`                | `.pf-c-data-list__cell`, `.pf-c-data-list__cell *`  | Provides a reference for data list item description. **Required** |

### Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-data-list` | `<ul>` | Initiates a data list. **Required** |
| `.pf-c-data-list__item` | `<li>` | Initiates a data list item. **Required** |
| `.pf-c-data-list__item-row` | `<div>` | Initiates a data list item row. **Required** |
| `.pf-c-data-list__item-content` | `<div>` | Initiates a container for data list content. **Required**|
| `.pf-c-data-list__cell` | `*` | Initiates a data list content cell. **Required** |
| `.pf-m-align-left` | `.pf-c-data-list__cell` | Modifies a data list cell to not grow and align-left when its the first data-list__cell element. For example use `.pf-c-data-list__icon`. |
| `.pf-m-no-fill` | `.pf-c-data-list__cell` | Modifies a data list cell to not fill the available horizontal space. |
| `.pf-m-align-right` | `.pf-c-data-list__cell` | Modifies a data list cell to align-right. |