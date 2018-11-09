### Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `aria-labelledby="tab1"` | `section` | Identifies which tab is associated with the panel. **Required**  |
| `hidden`                 | `section` | Indicates that a tab panel is not currently active. **Required** |

### Usage

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-tabs`                | `<div>`            | Creates a tab component. **Required**           |
| `.pf-c-tabs__scroll-button` | `<button>`         | Creates a scroll button component. **Required** |
| `.pf-c-tabs__list`          | `<ul>`             | Creates the tab list. **Required**              |
| `.pf-c-tabs__item`          | `<li>`             | Creates a tab item. **Required**                |
| `.pf-c-tabs__button`        | `<button>`         | Creates a tab item button. **Required**         |
| `id="tab1"`                 | `.pf-c-tabs__item` | Uniquely identifies the tab. **Required**       |
