### Note

Whenever a `.pf-m-current` tab is scrolled beyond the width of the container, the appropriate scroll button should be highlighted using `.pf-m-start-current` or `.pf-m-end-current` to indicate that the current tab exists in that direction. The `hidden` attribute the appropriate button should also be removed to expose it to screen readers.

## Modifiers

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-m-start`          | `.pf-c-tabs` | Enables the first directional scroll button. |
| `.pf-m-start-current`  | `.pf-c-tabs` | Highlights the first directional scroll button. |
| `.pf-m-end`            | `.pf-c-tabs` | Enables the second directional scroll button. |
| `.pf-m-end-current`    | `.pf-c-tabs` | Highlights the second directional scroll button. |
| `hidden`               | `.pf-c-tabs__scroll-button` | Hides a scroll button from screen readers. **Required** |