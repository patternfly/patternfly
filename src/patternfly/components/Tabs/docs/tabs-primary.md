### Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `aria-controls="tabsection1"` | `.pf-c-tabs__button` | Identifies the section controlled by the tab. **Required**       |
| `aria-labelledby="tab1"`      | `section`            | Identifies the tab associated with the section. **Required**     |
| `hidden`                      | `section`            | Indicates that a tab panel is not currently active. **Required** |

### Usage

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-tabs`                | `<div>`              | Creates a tab component. **Required**     |
| `.pf-c-tabs__list`          | `<ul>`               | Creates a tab list. **Required**          |
| `.pf-c-tabs__scroll-button` | `<button>`           | Creates a scroll button. **Required**     |
| `.pf-c-tabs__item`          | `<li>`               | Creates a tab item. **Required**          |
| `.pf-c-tabs__button`        | `<button>`           | Creates a tab button. **Required**        |
| `id="tab1"`                 | `.pf-c-tabs__button` | Uniquely identifies the tab. **Required** |
