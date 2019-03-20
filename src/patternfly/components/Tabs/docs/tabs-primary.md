### Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `aria-controls=[ID of tab content element]` | `.pf-c-tabs__button` | Identifies the section controlled by the tab. **Required**       |

### Usage

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-tabs` | `<div>`, `<nav>` | Creates a tab component. **Required**     |
| `.pf-c-tabs__scroll-button` | `<button>` | Creates a scroll button. **Required**     |
| `.pf-c-tabs__list` | `<ul>` | Creates a tab list. **Required**          |
| `.pf-c-tabs__item` | `<li>` | Creates a tab item. **Required**          |
| `.pf-c-tabs__button` | `<button>` | Creates a tab button. **Required**        |
| `id="{id of tabs + id of tab button}"` | `.pf-c-tabs__button` | Uniquely identifies the tab button within the tab component. **Required** |

### Modifiers

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-m-current`| `.pf-c-tabs__item` | Highlights the current tab. |
