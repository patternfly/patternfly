### Data list width notes

**All simple data list accessibility and usage requirements apply.**
<br>
**All data list checkbox/action button accessibility and usage requirements apply.**
<br>
**All expandable data list accessibility and usage requirements apply.**

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-controls="[id of element controlled]"` | `.pf-c-data-list__toggle` > `.pf-c-button`    | Identifies the section controlled by the toggle button. **Required** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-flex-{1, 2, 3, 4, 5}` | `.pf-c-data-list__cell` | Percentage based modifier for `.pf-c-data-list__cell` widths. |