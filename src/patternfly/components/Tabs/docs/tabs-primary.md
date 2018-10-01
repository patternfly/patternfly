### Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `role="tablist"`      | `.pf-c-tabs__list` | Indicates that the element contains a set of tabs. **Required** |
| `role="presentation"` | `.pf-c-tabs__item` | Prevents the tab from being interpreted or announced as a list item. **Required** |
| `role="tab"` | `.pf-c-tabs__button`        | Indicates that the element is a tab. **Required** |
| `role="tabpanel"`       | `section`        | Indicates that the section is associated with a tab. **Required** |
| `aria-labelledby="tab1"` | `section`        | Identifies which tab is associated with the panel. **Required** |
| `hidden`                | `section`        | Indicates that a tab panel is not currently active. **Required** |

### Usage

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `id="tab1"` | `.pf-c-tabs__item` | Uniquely identifies the tab. **Required** |