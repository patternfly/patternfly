### Data List Checkbox/Action Button Notes

<mark>**All simple data list accessibility and usage requirements apply.**</mark>

### Accessibility
| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `aria-label="[descriptive text]"`  | `.pf-c-data-list__action` > `.pf-c-button`  | Provides an accessible label buttons. **Required** |
| `aria-labelledby="{title_cell_id}"`  | `.pf-c-data-list__check` > `.pf-c-check__input`   | Creates an accessible label for the checkbox based on the title cell. **Required** |
| `aria-labelledby="{title_cell_id} {data_list_action_id}"`  | `.pf-c-data-list__action` > `.pf-c-button`   | Creates an accessible label for the action button using the title cell and button label **Required** |
| `id`  | `.pf-c-data-list__cell > *`, `.pf-c-data-list__check` > `.pf-c-check__input`, `.pf-c-data-list__action` > `.pf-c-button` | Provides a reference for interactive elements. **Required** |

### Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-data-list__item-control` | `<div>` | Initiates a container for data list controls. For example, add `.pf-c-data-list__check` here. **Required** |
| `.pf-c-data-list__item-action` | `<div>` | Initiates a container for the data list actions. For example, add `.pf-c-data-list__action` here. **Required** |
| `.pf-c-data-list__check`  | `<div>` | Initiates a data list check cell. **Required** |
| `.pf-c-data-list__action` | `<div>` | Initiates a data list action button cell. **Required** |
