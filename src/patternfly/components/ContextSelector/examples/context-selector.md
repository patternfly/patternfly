---
id: Context selector
section: components
cssPrefix: pf-c-context-selector
---
import './context-selector.css'

## Examples
### Basic
```hbs
{{#> context-selector context-selector--id="context-selector-collapsed-example" context-selector--label-text="Selected project"}}
  {{#> context-selector-toggle context-selector-toggle--attribute=(concat 'id="' context-selector--id '-toggle"' 'aria-labelledby="' context-selector--id '-label ' context-selector--id '-toggle"')}}
    {{#> context-selector-toggle-text}}
      My project
    {{/context-selector-toggle-text}}
    {{#> context-selector-toggle-icon}}
    {{/context-selector-toggle-icon}}
  {{/context-selector-toggle}}
  {{#> context-selector-menu}}
    {{#> context-selector-menu-search}}
      {{> search-input}}
    {{/context-selector-menu-search}}
    {{> __context-selector-menu-menu}}
  {{/context-selector-menu}}
{{/context-selector}}

{{#> context-selector context-selector--id="context-selector-expanded-example" context-selector--label-text="Selected Project" context-selector--IsExpanded="true"}}
  {{#> context-selector-toggle context-selector-toggle--attribute=(concat 'id="' context-selector--id '-toggle"' 'aria-labelledby="' context-selector--id '-label ' context-selector--id '-toggle"')}}
    {{#> context-selector-toggle-text}}
      My project
    {{/context-selector-toggle-text}}
    {{#> context-selector-toggle-icon}}
    {{/context-selector-toggle-icon}}
  {{/context-selector-toggle}}
  {{#> context-selector-menu}}
    {{#> context-selector-menu-search}}
      {{> search-input}}
    {{/context-selector-menu-search}}
    {{> __context-selector-menu-menu}}
  {{/context-selector-menu}}
{{/context-selector}}
```

### Plain with text
```hbs
{{#> context-selector context-selector--id="context-selector-plain-with-text-collapsed-example" context-selector--label-text="Selected project" context-selector-toggle--IsPlain="true" context-selector-toggle--IsText="true"}}
  {{#> context-selector-toggle context-selector-toggle--attribute=(concat 'id="' context-selector--id '-toggle"' 'aria-labelledby="' context-selector--id '-label ' context-selector--id '-toggle"')}}
    {{#> context-selector-toggle-text}}
      My project
    {{/context-selector-toggle-text}}
    {{#> context-selector-toggle-icon}}
    {{/context-selector-toggle-icon}}
  {{/context-selector-toggle}}
  {{#> context-selector-menu}}
    {{#> context-selector-menu-search}}
      {{> search-input}}
    {{/context-selector-menu-search}}
    {{> __context-selector-menu-menu}}
  {{/context-selector-menu}}
{{/context-selector}}

{{#> context-selector context-selector--id="context-selector-plain-with-text-expanded-example" context-selector--label-text="Selected Project" context-selector--IsExpanded="true" context-selector-toggle--IsPlain="true" context-selector-toggle--IsText="true"}}
  {{#> context-selector-toggle context-selector-toggle--attribute=(concat 'id="' context-selector--id '-toggle"' 'aria-labelledby="' context-selector--id '-label ' context-selector--id '-toggle"')}}
    {{#> context-selector-toggle-text}}
      My project
    {{/context-selector-toggle-text}}
    {{#> context-selector-toggle-icon}}
    {{/context-selector-toggle-icon}}
  {{/context-selector-toggle}}
  {{#> context-selector-menu}}
    {{#> context-selector-menu-search}}
      {{> search-input}}
    {{/context-selector-menu-search}}
    {{> __context-selector-menu-menu}}
  {{/context-selector-menu}}
{{/context-selector}}
```

### With footer
```hbs
{{#> context-selector context-selector--id="context-selector-with-footer-example" context-selector--label-text="Selected Project" context-selector--IsExpanded="true"}}
  {{#> context-selector-toggle context-selector-toggle--attribute=(concat 'id="' context-selector--id '-toggle"' 'aria-labelledby="' context-selector--id '-label ' context-selector--id '-toggle"')}}
    {{#> context-selector-toggle-text}}
      My project
    {{/context-selector-toggle-text}}
    {{#> context-selector-toggle-icon}}
    {{/context-selector-toggle-icon}}
  {{/context-selector-toggle}}
  {{#> context-selector-menu}}
    {{#> context-selector-menu-search}}
      {{> search-input}}
    {{/context-selector-menu-search}}
    {{> __context-selector-menu-menu}}
    {{#> context-selector-menu-footer}}
      {{#> button button--modifier="pf-m-secondary"}}
        Manage projects
      {{/button}}
    {{/context-selector-menu-footer}}
  {{/context-selector-menu}}
{{/context-selector}}

{{#> context-selector context-selector--id="context-selector-with-footer-example-two" context-selector--label-text="Selected Project" context-selector--IsExpanded="true"}}
  {{#> context-selector-toggle context-selector-toggle--attribute=(concat 'id="' context-selector--id '-toggle"' 'aria-labelledby="' context-selector--id '-label ' context-selector--id '-toggle"')}}
    {{#> context-selector-toggle-text}}
      My project
    {{/context-selector-toggle-text}}
    {{#> context-selector-toggle-icon}}
    {{/context-selector-toggle-icon}}
  {{/context-selector-toggle}}
  {{#> context-selector-menu}}
    {{#> context-selector-menu-search}}
      {{> search-input}}
    {{/context-selector-menu-search}}
    {{> __context-selector-menu-menu}}
    {{#> context-selector-menu-footer}}
      {{#> button button--modifier="pf-m-link pf-m-inline"}}
        Manage projects
      {{/button}}
    {{/context-selector-menu-footer}}
  {{/context-selector-menu}}
{{/context-selector}}
```

## Documentation
### Accessibility
| Class | Applied to | Outcome |
| -- | -- | -- |
| `aria-expanded="false"` | `.pf-c-context-selector__toggle` |  Indicates that the menu is hidden. |
| `aria-expanded="true"` | `.pf-c-context-selector__toggle` |  Indicates that the menu is visible. |
| `aria-hidden="true"` | `.pf-c-context-selector__toggle-icon > *` | Hides the icon from assistive technologies. |
| `disabled` | `button.pf-c-context-selector__menu-item` | When the menu item uses a button element, indicates that it is unavailable and removes it from keyboard focus. |
| `aria-disabled="true"` | `a.pf-c-context-selector__menu-item` | When the menu item uses a link element, indicates that it is unavailable. |
| `tabindex="-1"` | `a.pf-c-context-selector__menu-item` | When the menu item uses a link element, removes it from keyboard focus. |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-context-selector` | `<div>` | Initiates a context selector.|
| `.pf-c-context-selector__toggle` | `<button>` | Initiates a toggle. |
| `.pf-c-context-selector__toggle-text` | `<span>` | Initiates text inside the toggle. |
| `.pf-c-context-selector__toggle-icon` | `<span>` | Inititiates the toggle icon wrapper. |
| `.pf-c-context-selector__menu` | `<div>` | Initiaties a menu. |
| `.pf-c-context-selector__menu-search` | `<div>` | Initiates a container for the search input group. |
| `.pf-c-context-selector__menu-list` | `<ul>` | Initiaties an unordered list of menu items that sits under the input container. |
| `.pf-c-context-selector__menu-footer` | `<div>` | Initiaties a menu footer. |
| `.pf-c-context-selector__menu-list-item` | `<li>` | Initiaties a menu item. |
| `.pf-m-expanded` | `.pf-c-context-selector` | Modifies for the expanded state. |
| `.pf-m-active` | `.pf-c-context-selector__toggle` | Forces display of the active state of the toggle. |
| `.pf-m-plain.pf-m-text` | `.pf-c-context-selector__toggle` | Modifies the context selector toggle for plain text styles. |
| `.pf-m-disabled` | `a.pf-c-context-selector__menu-list-item` | Modifies an item for the disabled state.|
| `.pf-m-full-height` | `.pf-c-context-selector` | Modifies a context selector to full height of parent. See masthead for use. |
| `.pf-m-large` | `.pf-c-context-selector` | Modifies toggle height to be large. |
| `.pf-m-page-insets` | `.pf-c-context-selector` | Modifies toggle and menu insets to match the responsive page chrome insets. |
