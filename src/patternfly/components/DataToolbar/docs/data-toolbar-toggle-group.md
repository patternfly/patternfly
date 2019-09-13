

## Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `hidden` | `.pf-c-data-toolbar__item`, `.pf-c-data-toolbar__group`, `.pf-c-data-toolbar__toggle`, `.pf-c-data-toolbar__expandable-content` |  Indicates that the toggle group element is hidden. **Required** |
| `aria-expanded="true"` | `.pf-c-data-toolbar__toggle > .pf-c-button` |  Indicates that the expandable content is visible. **Required** |
| `aria-expanded="false"` | `.pf-c-data-toolbar__toggle > .pf-c-button` |  Indicates the the expandable content is hidden. **Required** |
| `aria-controls="[id of expandable content]"` | `.pf-c-data-toolbar__toggle > .pf-c-button` |  Identifies the expanded content controlled by the toggle button. **Required** |
| `id="[expandable-content_id]"` | `.pf-c-data-toolbar__expandable-content` | Provides a reference for toggle button description. **Required** |

## Responsive attributes

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-haspopup="true"` | `.pf-c-data-toolbar__toggle > .pf-c-button` | When expandable content appears above content (mobile viewport), `aria-haspopup="true"` should be applied to indicate that focus should be trapped. **Required** |


## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-m-reveal{-on-[breakpoint]}` | `.pf-c-data-toolbar__group.pf-m-toggle-group`, `.pf-c-data-toolbar__expandable-content` | Modifies toolbar element visibility at breakpoint. This selector must be applied consistently to toggle group and expandable content. |
| `.pf-m-shared-item` | `.pf-c-data-toolbar__item`, `.pf-c-data-toolbar__group` | Identifies a toolbar item or group that appear both within `pf-m-toggle-group` and `pf-c-data-toolbar__expandable-content`. At smaller viewports, filters within `.pf-m-toggle-group` are hidden in `.pf-c-toolbar__content` and visible in `.pf-c-toolbar__expandable-content`. As the viewport scales, filters are visible in `.pf-c-toolbar__content` and hidden in `.pf-c-toolbar__expandable-content`. |
| `.pf-m-expanded` | `.pf-c-data-toolbar__expandable-content` | Modifies the component for the expanded state. |
