### Data List Width Notes

<mark>**All simple data list accessibility and usage requirements apply.**</mark>
<br>
<mark>**All data list checkbox/action button accessibility and usage requirements apply.**</mark>
<br>
<mark>**All expandable data list accessibility and usage requirements apply.**</mark>

### Accessibility
| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `aria-controls="[id of element controlled]"` | `.pf-c-data-list__toggle` > `.pf-c-button`    | Identifies the section controlled by the toggle button. **Required** |

### Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-m-flex-{1, 2, 3, 4, 5}` | `.pf-c-data-list__cell` | Percentage based modifier for `.pf-c-data-list__cell` widths. |