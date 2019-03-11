### Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `aria-controls=[ID of tab content element]` | `.pf-c-tabs__button` | Identifies the section controlled by the tab. **Required**       |
| `aria-label="Local"` | `<nav class="pf-c-tabs">` | Gives the `<nav>` element an accessible name. Note that using `<nav>` with this `aria-label` should only be used for a tab list that is unique on the current page. Cases where the same set of tabs are duplicated in multiple regions on a page (e.g. cards on a dashboard), are less likely to benefit from using the `<nav>` element. **Required when `.pf-c-tabs` is used with `<nav>`**

### Usage

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-tabs` | `<div>`, `<nav>` | Creates a tab component. **Required**     |
| `.pf-c-tabs__scroll-button` | `<button>` | Creates a scroll button. **Required**     |
| `.pf-c-tabs__list` | `<ul>` | Creates a tab list. **Required**          |
| `.pf-c-tabs__item` | `<li>` | Creates a tab item. **Required**          |
| `.pf-c-tabs__button` | `<button>` | Creates a tab button. **Required**        |
| `id="tab1"` | `.pf-c-tabs__button` | Uniquely identifies the tab. **Required** |

### Modifiers

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-m-current`| `.pf-c-tabs__item` | Highlights the current tab. |
