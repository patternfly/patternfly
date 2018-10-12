### Data List Checkbox/Action Button Notes

<mark>**All simple data list accessibility and usage requirements apply.**</mark>

### Accessibility
| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `aria-label="[descriptive text]"`                                       | `.pf-c-data-list__check` > `.pf-c-check__input`, `.pf-c-data-list__action` > `.pf-c-button` | Provides an accessible label for `checkboxes` and `buttons`. **Required** |
| `aria-labelledby="{title_cell_id} {data_list_interactive_element_id}"`  | `.pf-c-data-list__check` > `.pf-c-check__input`, `.pf-c-data-list__action` > `.pf-c-button` | Establishes relationship between aria-label text and interactive element. **Required** |
| `id`                                                                    | `.pf-c-data-list__cell > *`, `.pf-c-data-list__action` > `.pf-c-button`                     | Provides a reference for `.pf-c-data-list__item`. **Required** |

### Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-data-list__check`  | `<div>` | Initiates a data list check cell. **Required** |
| `.pf-c-data-list__action` | `<div>` | Initiates a data list action button cell. **Required** |
