---
id: Application launcher
section: components
subsection: menus
cssPrefix: pf-v5-c-app-launcher
---

import './application-launcher.css'

## Examples
### Collapsed
```hbs
{{#> app-launcher app-launcher--id="application-launcher-collapsed"}}
  {{#> app-launcher-menu}}
    <li>{{#> app-launcher-menu-item app-launcher-menu-item--attribute='href="#"'}}Link{{/app-launcher-menu-item}}</li>
    <li>{{#> app-launcher-menu-item app-launcher-menu-item--type="button"}}Action{{/app-launcher-menu-item}}</li>
    {{> divider divider--type="li"}}
    <li>{{#> app-launcher-menu-item app-launcher-menu-item--modifier="pf-m-disabled" app-launcher-menu-item--attribute='href="#" aria-disabled="true" tabindex="-1"'}}Disabled link{{/app-launcher-menu-item}}</li>
  {{/app-launcher-menu}}
{{/app-launcher}}
```

### Disabled
```hbs
{{#> app-launcher app-launcher--id="application-launcher-disabled" app-launcher--IsDisabled="true"}}
  {{#> app-launcher-menu}}
    <li>{{#> app-launcher-menu-item app-launcher-menu-item--attribute='href="#"'}}Link{{/app-launcher-menu-item}}</li>
    <li>{{#> app-launcher-menu-item app-launcher-menu-item--type="button"}}Action{{/app-launcher-menu-item}}</li>
    {{> divider divider--type="li"}}
    <li>{{#> app-launcher-menu-item app-launcher-menu-item--modifier="pf-m-disabled" app-launcher-menu-item--attribute='href="#" aria-disabled="true" tabindex="-1"'}}Disabled link{{/app-launcher-menu-item}}</li>
  {{/app-launcher-menu}}
{{/app-launcher}}
```

### Expanded
```hbs
{{#> app-launcher app-launcher--id="application-launcher-expanded" app-launcher--IsExpanded="true"}}
  {{#> app-launcher-menu}}
    <li>{{#> app-launcher-menu-item app-launcher-menu-item--attribute='href="#"'}}Link{{/app-launcher-menu-item}}</li>
    <li>{{#> app-launcher-menu-item app-launcher-menu-item--type="button"}}Action{{/app-launcher-menu-item}}</li>
    {{> divider divider--type="li"}}
    <li>{{#> app-launcher-menu-item app-launcher-menu-item--modifier="pf-m-disabled" app-launcher-menu-item--attribute='href="#" aria-disabled="true" tabindex="-1"'}}Disabled link{{/app-launcher-menu-item}}</li>
  {{/app-launcher-menu}}
{{/app-launcher}}
```

### Aligned right
```hbs
{{#> app-launcher app-launcher--id="application-launcher-aligned-right" app-launcher--IsExpanded="true"}}
  {{#> app-launcher-menu app-launcher-menu--modifier="pf-m-align-right"}}
    <li>{{#> app-launcher-menu-item app-launcher-menu-item--attribute='href="#"'}}Link{{/app-launcher-menu-item}}</li>
    <li>{{#> app-launcher-menu-item app-launcher-menu-item--type="button"}}Action{{/app-launcher-menu-item}}</li>
    {{> divider divider--type="li"}}
    <li>{{#> app-launcher-menu-item app-launcher-menu-item--modifier="pf-m-disabled" app-launcher-menu-item--attribute='href="#" aria-disabled="true" tabindex="-1"'}}Disabled link{{/app-launcher-menu-item}}</li>
  {{/app-launcher-menu}}
{{/app-launcher}}
```

### Aligned top
```hbs
{{#> app-launcher app-launcher--id="application-launcher-aligned-top" app-launcher--IsExpanded="true" app-launcher--modifier="pf-m-top"}}
  {{#> app-launcher-menu}}
    <li>{{#> app-launcher-menu-item app-launcher-menu-item--attribute='href="#"'}}Link{{/app-launcher-menu-item}}</li>
    <li>{{#> app-launcher-menu-item app-launcher-menu-item--type="button"}}Action{{/app-launcher-menu-item}}</li>
    {{> divider divider--type="li"}}
    <li>{{#> app-launcher-menu-item app-launcher-menu-item--modifier="pf-m-disabled" app-launcher-menu-item--attribute='href="#" aria-disabled="true" tabindex="-1"'}}Disabled link{{/app-launcher-menu-item}}</li>
  {{/app-launcher-menu}}
{{/app-launcher}}
```

### With sections and dividers between sections
```hbs
{{#> app-launcher app-launcher--id="application-launcher-divided-sections" app-launcher--IsExpanded="true" app-launcher--IsGrouped="true"}}
  {{#> app-launcher-menu}}
    {{#> app-launcher-group}}
      <ul role="list">
        <li>{{#> app-launcher-menu-item app-launcher-menu-item--attribute='href="#"'}}Link not in group{{/app-launcher-menu-item}}</li>
      </ul>
    {{/app-launcher-group}}
    {{> divider}}
    {{#> app-launcher-group}}
      {{#> app-launcher-group-title}}
        Group 1
      {{/app-launcher-group-title}}
      <ul role="list">
        <li>{{#> app-launcher-menu-item app-launcher-menu-item--attribute='href="#"'}}Group 1 link{{/app-launcher-menu-item}}</li>
        <li>{{#> app-launcher-menu-item app-launcher-menu-item--attribute='href="#"'}}Group 1 link{{/app-launcher-menu-item}}</li>
      </ul>
    {{/app-launcher-group}}
    {{> divider}}
    {{#> app-launcher-group}}
      {{#> app-launcher-group-title}}
        Group 2
      {{/app-launcher-group-title}}
      <ul role="list">
        <li>{{#> app-launcher-menu-item app-launcher-menu-item--attribute='href="#"'}}Group 2 link{{/app-launcher-menu-item}}</li>
        <li>{{#> app-launcher-menu-item app-launcher-menu-item--attribute='href="#"'}}Group 2 link{{/app-launcher-menu-item}}</li>
      </ul>
    {{/app-launcher-group}}
  {{/app-launcher-menu}}
{{/app-launcher}}
```

### With sections and dividers between items
```hbs
{{#> app-launcher app-launcher--id="application-launcher-divided-items" app-launcher--IsExpanded="true" app-launcher--IsGrouped="true"}}
  {{#> app-launcher-menu}}
    {{#> app-launcher-group}}
      <ul role="list">
        <li>{{#> app-launcher-menu-item app-launcher-menu-item--attribute='href="#"'}}Link not in group{{/app-launcher-menu-item}}</li>
        {{> divider divider--type="li"}}
      </ul>
    {{/app-launcher-group}}
    {{#> app-launcher-group}}
      {{#> app-launcher-group-title}}
        Group 1
      {{/app-launcher-group-title}}
      <ul role="list">
        <li>{{#> app-launcher-menu-item app-launcher-menu-item--attribute='href="#"'}}Group 1 link{{/app-launcher-menu-item}}</li>
        <li>{{#> app-launcher-menu-item app-launcher-menu-item--attribute='href="#"'}}Group 1 link{{/app-launcher-menu-item}}</li>
        {{> divider divider--type="li"}}
      </ul>
    {{/app-launcher-group}}
    {{#> app-launcher-group}}
      {{#> app-launcher-group-title}}
        Group 2
      {{/app-launcher-group-title}}
      <ul role="list">
        <li>{{#> app-launcher-menu-item app-launcher-menu-item--attribute='href="#"'}}Group 2 link{{/app-launcher-menu-item}}</li>
        <li>{{#> app-launcher-menu-item app-launcher-menu-item--attribute='href="#"'}}Group 2 link{{/app-launcher-menu-item}}</li>
      </ul>
    {{/app-launcher-group}}
  {{/app-launcher-menu}}
{{/app-launcher}}
```

### With sections, dividers, icons, and external links
```hbs
{{#> app-launcher app-launcher--id="application-launcher-sections-dividers-icons-links" app-launcher--IsExpanded="true" app-launcher--IsGrouped="true"}}
  {{#> app-launcher-menu}}
    {{#> app-launcher-group}}
      <ul role="list">
        <li>
          {{#> app-launcher-menu-item app-launcher-menu-item--attribute='href="#"'}}
            {{#> app-launcher-menu-item-icon}}
              <img src="/assets/images/pf-logo-small.svg" alt="PatternFly logo">
            {{/app-launcher-menu-item-icon}}
            Link not in group
          {{/app-launcher-menu-item}}
        </li>
      </ul>
    {{/app-launcher-group}}
    {{> divider divider--type="li"}}
    {{#> app-launcher-group}}
      {{#> app-launcher-group-title}}
        Group 1
      {{/app-launcher-group-title}}
      <ul role="list">
        <li>
          {{#> app-launcher-menu-item app-launcher-menu-item--modifier="pf-m-external" app-launcher-menu-item--attribute='href="#" target="_blank"'}}
            {{#> app-launcher-menu-item-icon}}
              <img src="/assets/images/pf-logo-small.svg" alt="PatternFly logo">
            {{/app-launcher-menu-item-icon}}
            Group 1 link
            {{> app-launcher-menu-item-external-icon}}
          {{/app-launcher-menu-item}}
        </li>
        <li>
          {{#> app-launcher-menu-item app-launcher-menu-item--modifier="pf-m-external" app-launcher-menu-item--attribute='href="#" target="_blank"'}}
            {{#> app-launcher-menu-item-icon}}
              <img src="/assets/images/pf-logo-small.svg" alt="PatternFly logo">
            {{/app-launcher-menu-item-icon}}
            Group 1 link
            {{> app-launcher-menu-item-external-icon}}
          {{/app-launcher-menu-item}}
        </li>
        {{> divider divider--type="li"}}
      </ul>
    {{/app-launcher-group}}
    {{#> app-launcher-group}}
      {{#> app-launcher-group-title}}
        Group 2
      {{/app-launcher-group-title}}
      <ul role="list">
        <li>
          {{#> app-launcher-menu-item app-launcher-menu-item--modifier="pf-m-external" app-launcher-menu-item--attribute='href="#" target="_blank"'}}
            {{#> app-launcher-menu-item-icon}}
              <img src="/assets/images/pf-logo-small.svg" alt="PatternFly logo">
            {{/app-launcher-menu-item-icon}}
            Group 2 link
            {{> app-launcher-menu-item-external-icon}}
          {{/app-launcher-menu-item}}
        </li>
        <li>
          {{#> app-launcher-menu-item app-launcher-menu-item--modifier="pf-m-external" app-launcher-menu-item--attribute='href="#" target="_blank"'}}
            {{#> app-launcher-menu-item-icon}}
              <img src="/assets/images/pf-logo-small.svg" alt="PatternFly logo">
            {{/app-launcher-menu-item-icon}}
            Group 2 link
            {{> app-launcher-menu-item-external-icon}}
          {{/app-launcher-menu-item}}
        </li>
      </ul>
    {{/app-launcher-group}}
  {{/app-launcher-menu}}
{{/app-launcher}}
```

### Favorites
```hbs
{{#> app-launcher app-launcher--id="app-launcher-favorites" app-launcher--IsExpanded="true" app-launcher--IsGrouped="true"}}
  {{#> app-launcher-menu}}
    {{#> app-launcher-menu-search}}
      {{> text-input-group--search-input text-input-group-text-input--aria-label="Filter applications" text-input-group-text-input--placeholder="Search"}}
    {{/app-launcher-menu-search}}
    {{#> app-launcher-group}}
      {{#> app-launcher-group-title}}
        Favorites
      {{/app-launcher-group-title}}
      <ul role="list">
        {{#> app-launcher-menu-wrapper app-launcher-menu-wrapper--type="li" app-launcher-menu-wrapper--modifier="pf-m-external pf-m-favorite"}}
          {{#> app-launcher-menu-item app-launcher-menu-item--modifier="pf-m-link" app-launcher-menu-item--attribute='href="#" target="_blank"'}}
            {{#> app-launcher-menu-item-icon}}
              <img src="/assets/images/pf-logo-small.svg" alt="PatternFly logo">
            {{/app-launcher-menu-item-icon}}
            Link 2
          {{> app-launcher-menu-item-external-icon}}
          {{/app-launcher-menu-item}}
          {{#> app-launcher-menu-item app-launcher-menu-item--type="button" app-launcher-menu-item--modifier="pf-m-action" app-launcher-menu-item--IsFavorite="true"}}
            {{> app-launcher-favorite-icon}}
          {{/app-launcher-menu-item}}
        {{/app-launcher-menu-wrapper}}
        {{#> app-launcher-menu-wrapper app-launcher-menu-wrapper--type="li" app-launcher-menu-wrapper--modifier="pf-m-external pf-m-favorite"}}
          {{#> app-launcher-menu-item app-launcher-menu-item--modifier="pf-m-link" app-launcher-menu-item--attribute='href="#" target="_blank"'}}
            {{#> app-launcher-menu-item-icon}}
              <img src="/assets/images/pf-logo-small.svg" alt="PatternFly logo">
            {{/app-launcher-menu-item-icon}}
            Link 3
          {{> app-launcher-menu-item-external-icon}}
          {{/app-launcher-menu-item}}
          {{#> app-launcher-menu-item app-launcher-menu-item--type="button" app-launcher-menu-item--modifier="pf-m-action" app-launcher-menu-item--IsFavorite="true"}}
            {{> app-launcher-favorite-icon}}
          {{/app-launcher-menu-item}}
        {{/app-launcher-menu-wrapper}}
      </ul>
    {{/app-launcher-group}}
    {{> divider}}
    {{#> app-launcher-group}}
      {{#> app-launcher-group-title}}
        Group 1
      {{/app-launcher-group-title}}
      <ul role="list">
        {{#> app-launcher-menu-wrapper app-launcher-menu-wrapper--type="li" app-launcher-menu-wrapper--modifier="pf-m-external"}}
          {{#> app-launcher-menu-item app-launcher-menu-item--modifier="pf-m-link" app-launcher-menu-item--attribute='href="#" target="_blank"'}}
            {{#> app-launcher-menu-item-icon}}
              <img src="/assets/images/pf-logo-small.svg" alt="PatternFly logo">
            {{/app-launcher-menu-item-icon}}
            Link 1
          {{> app-launcher-menu-item-external-icon}}
          {{/app-launcher-menu-item}}
          {{#> app-launcher-menu-item app-launcher-menu-item--type="button" app-launcher-menu-item--modifier="pf-m-action" app-launcher-menu-item--IsFavorite="true"}}
            {{> app-launcher-favorite-icon}}
          {{/app-launcher-menu-item}}
        {{/app-launcher-menu-wrapper}}
        {{#> app-launcher-menu-wrapper app-launcher-menu-wrapper--type="li" app-launcher-menu-wrapper--modifier="pf-m-external pf-m-favorite"}}
          {{#> app-launcher-menu-item app-launcher-menu-item--modifier="pf-m-link" app-launcher-menu-item--attribute='href="#" target="_blank"'}}
            {{#> app-launcher-menu-item-icon}}
              <img src="/assets/images/pf-logo-small.svg" alt="PatternFly logo">
            {{/app-launcher-menu-item-icon}}
            Link 2
          {{> app-launcher-menu-item-external-icon}}
          {{/app-launcher-menu-item}}
          {{#> app-launcher-menu-item app-launcher-menu-item--type="button" app-launcher-menu-item--modifier="pf-m-action" app-launcher-menu-item--IsFavorite="true"}}
            {{> app-launcher-favorite-icon}}
          {{/app-launcher-menu-item}}
        {{/app-launcher-menu-wrapper}}
      </ul>
    {{/app-launcher-group}}
    {{> divider}}
    {{#> app-launcher-group}}
      {{#> app-launcher-group-title}}
        Group 2
      {{/app-launcher-group-title}}
      <ul role="list">
        {{#> app-launcher-menu-wrapper app-launcher-menu-wrapper--type="li" app-launcher-menu-wrapper--modifier="pf-m-external pf-m-favorite"}}
          {{#> app-launcher-menu-item app-launcher-menu-item--modifier="pf-m-link" app-launcher-menu-item--attribute='href="#" target="_blank"'}}
            {{#> app-launcher-menu-item-icon}}
              <img src="/assets/images/pf-logo-small.svg" alt="PatternFly logo">
            {{/app-launcher-menu-item-icon}}
            Link 3
            {{> app-launcher-menu-item-external-icon}}
          {{/app-launcher-menu-item}}
          {{#> app-launcher-menu-item app-launcher-menu-item--type="button" app-launcher-menu-item--modifier="pf-m-action" app-launcher-menu-item--IsFavorite="true"}}
            {{> app-launcher-favorite-icon}}
          {{/app-launcher-menu-item}}
        {{/app-launcher-menu-wrapper}}
        {{#> app-launcher-menu-wrapper app-launcher-menu-wrapper--type="li" app-launcher-menu-wrapper--modifier="pf-m-external"}}
          {{#> app-launcher-menu-item app-launcher-menu-item--modifier="pf-m-link" app-launcher-menu-item--attribute='href="#" target="_blank"'}}
            {{#> app-launcher-menu-item-icon}}
              <img src="/assets/images/pf-logo-small.svg" alt="PatternFly logo">
            {{/app-launcher-menu-item-icon}}
            Link 4
            {{> app-launcher-menu-item-external-icon}}
          {{/app-launcher-menu-item}}
          {{#> app-launcher-menu-item app-launcher-menu-item--type="button" app-launcher-menu-item--modifier="pf-m-action" app-launcher-menu-item--IsFavorite="true"}}
            {{> app-launcher-favorite-icon}}
          {{/app-launcher-menu-item}}
        {{/app-launcher-menu-wrapper}}
      </ul>
    {{/app-launcher-group}}
  {{/app-launcher-menu}}
{{/app-launcher}}
```

## Documentation
### Accessibility
| Attribute | Applied | Outcome |
| -- | -- | -- |
| `aria-label="Application launcher"` | `.pf-v5-c-app-launcher` |  Gives the app launcher element an accessible name. **Required** |
| `aria-expanded="false"` | `.pf-v5-c-button` |  Indicates that the menu is hidden. |
| `aria-expanded="true"` | `.pf-v5-c-button` |  Indicates that the menu is visible. |
| `aria-label="Actions"` | `.pf-v5-c-button` | Provides an accessible name for the app launcher when an icon is used. **Required** |
| `hidden` | `.pf-v5-c-app-launcher__menu` | Indicates that the menu is hidden so that it isn't visible in the UI and isn't accessed by assistive technologies. |
| `disabled` | `.pf-v5-c-app-launcher__toggle` | Disables the app launcher toggle and removes it from keyboard focus. |
| `disabled` | `button.pf-v5-c-app-launcher__menu-item` | When the menu item uses a button element, indicates that it is unavailable and removes it from keyboard focus. |
| `aria-disabled="true"` | `a.pf-v5-c-app-launcher__menu-item` | When the menu item uses a link element, indicates that it is unavailable. |
| `tabindex="-1"` | `a.pf-v5-c-app-launcher__menu-item` | When the menu item uses a link element, removes it from keyboard focus. |
| `aria-hidden="true"` | `.pf-v5-c-app-launcher__menu-item-external-icon > *` | Hides the icon from assistive technologies. |

### Usage
| Class | Applied | Outcome |
| -- | -- | -- |
| `.pf-v5-c-app-launcher` | `<nav>` | Defines the parent wrapper of the app launcher. |
| `.pf-v5-c-app-launcher__toggle` | `<button>` | Defines the app launcher toggle. |
| `.pf-v5-c-app-launcher__menu` | `<ul>`, `<div>` | Defines the parent wrapper of the menu items. Use a `<div>` if your app launcher has groups. |
| `.pf-v5-c-app-launcher__menu-search` | `<div>` | Defines the wrapper for the search input. |
| `.pf-v5-c-app-launcher__group` | `<section>` | Defines a group of items. Required when there is more than one group. |
| `.pf-v5-c-app-launcher__group-title` | `<h1>` | Defines a title for a group of items. |
| `.pf-v5-c-app-launcher__menu-wrapper` | `<li>` | Defines a menu wrapper for use with multiple actionable items in a single item row. |
| `.pf-v5-c-app-launcher__menu-item` | `<a>`, `<button>` | Defines a menu item. |
| `.pf-v5-c-app-launcher__menu-item-icon` | `<span>` | Defines the wrapper for the menu item icon. |
| `.pf-v5-c-app-launcher__menu-item-external-icon` | `<span>` | Defines the wrapper for the external link icon that appears on hover/focus. Use with `.pf-m-external`. |
| `.pf-m-expanded` | `.pf-v5-c-app-launcher` | Modifies for the expanded state. |
| `.pf-m-top` | `.pf-v5-c-app-launcher` | Modifies to display the menu above the toggle. |
| `.pf-m-align-right` | `.pf-v5-c-app-launcher__menu` | Modifies to display the menu aligned to the right edge of the toggle. |
| `.pf-m-static` | `.pf-v5-c-app-launcher__menu` | Modifies to position the menu statically to support custom positioning. |
| `.pf-m-disabled` | `a.pf-v5-c-app-launcher__menu-item` | Modifies to display the menu item as disabled. |
| `.pf-m-external` | `.pf-v5-c-app-launcher__menu-item` | Modifies to display the menu item as having an external link icon on hover/focus. |
| `.pf-m-favorite` | `.pf-v5-c-app-launcher__menu-wrapper` | Modifies wrapper to indicate that the item row has been favorited. |
| `.pf-m-link` | `.pf-v5-c-app-launcher__menu-item.pf-m-wrapper > .pf-v5-c-app-launcher__menu-item` | Modifies item for link styles. |
| `.pf-m-action` | `.pf-v5-c-app-launcher__menu-item.pf-m-wrapper > .pf-v5-c-app-launcher__menu-item` | Modifies item to for action styles. |
| `.pf-m-active` | `.pf-v5-c-app-launcher__toggle` | Forces display of the active state of the toggle. |
