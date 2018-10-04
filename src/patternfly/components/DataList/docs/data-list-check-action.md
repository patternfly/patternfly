### Data List Checkbox/Action Button Notes

<mark>**All simple data list accessibility and usage requirements apply.**</mark>

### Accessibility
| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `aria-labelledby="{title_cell_id}"` | `.pf-c-check__input`  | Provides an accessible name for `checkboxes`. **Required** |
| `aria-label="[descriptive text]"`  | `.pf-c-check__input`, `.pf-c-button`  | Provides an accessible name for `checkboxes` and `buttons`. **Required** |
| `id`  | title cell `.pf-c-data-list__cell` > `*`  | Provides an accessible description for special cells. **Required** |

### Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-data-list__check` | `<div>` | Initiates a data list check cell. **Required** |
| `.pf-c-data-list__action` | `<div>` | Initiates a data list action button cell. **Required** |
