### Note

Whenever a list of tabs is unique on the current page, it can be used in a `<nav>` element. Cases where the same set of tabs are duplicated in multiple regions on a page (e.g. cards on a dashboard) are less likely to benefit from using the `<nav>` element.

### Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `aria-label="Local"` | `nav.pf-c-tabs` | Gives the `<nav>` element an accessible name. **Required when `.pf-c-tabs` is used with `<nav>`**
| `aria-label="Local secondary"` | `nav.pf-c-tabs.pf-m-tabs-secondary` | Gives the `<nav>` element an accessible name. **Required when `.pf-c-tabs.pf-m-tabs-secondary` is used with `<nav>`**

### Usage

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-tabs__button` | `<a>`, `<button>` | Creates a tab link/button. **Required** |
