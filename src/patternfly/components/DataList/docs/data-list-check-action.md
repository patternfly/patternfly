### Data list checkbox/action button notes

**All simple data list accessibility and usage requirements apply.**

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-label="[descriptive text]"`  | `.pf-c-data-list__action` > `.pf-c-button`  | Provides an accessible label buttons. **Required** |
| `aria-labelledby="{title_cell_id}"`  | `.pf-c-data-list__check` > `.pf-c-check__input`   | Creates an accessible label for the checkbox based on the title cell. **Required** |
| `aria-labelledby="{title_cell_id} {data_list_action_id}"`  | `.pf-c-data-list__action` > `.pf-c-button`   | Creates an accessible label for the action button using the title cell and button label **Required** |
| `id`  | `.pf-c-data-list__cell > *`, `.pf-c-data-list__check` > `.pf-c-check__input`, `.pf-c-data-list__action` > `.pf-c-button` | Provides a reference for interactive elements. **Required** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-data-list__item-control` | `<div>` | Initiates a container for data list controls. For example, add `.pf-c-data-list__check` here. **Required** |
| `.pf-c-data-list__item-action` | `<div>` | Initiates a container for the data list actions. For example, add `.pf-c-data-list__action` here. **Required** |
| `.pf-c-data-list__check`  | `<div>` | Initiates a data list check cell. **Required** |
| `.pf-c-data-list__action` | `<div>` | Initiates a data list action button cell. **Required** |
| `.pf-m-hidden{-on-[breakpoint]}` | `.pf-c-data-list__item-action` | Hides an actions container at a given breakpoint, or hides it at all breakpoints with `.pf-m-hidden`. |
| `.pf-m-visible{-on-[breakpoint]}` | `.pf-c-data-list__item-action` | Shows an actions container at a given breakpoint. |