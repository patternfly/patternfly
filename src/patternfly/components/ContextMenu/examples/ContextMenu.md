---
id: Context menu
section: components
beta: true
cssPrefix: pf-c-context-menu
---

import './ContextMenu.css'

## Examples
### Basic
```hbs
{{#> context-menu}}
  {{#> context-menu-body}}
    {{#> context-menu-list-item}}
      {{#> context-menu-item}}
       {{#> context-menu-item-main}}
          {{#> context-menu-item-text}}
            Action
          {{/context-menu-item-text}}
        {{/context-menu-item-main}}
      {{/context-menu-item}}
    {{/context-menu-list-item}}
    {{#> context-menu-list-item}}
      {{#> context-menu-item context-menu-item--type="a"}}
        {{#> context-menu-item-main}}
          {{#> context-menu-item-text}}
            Link
          {{/context-menu-item-text}}
        {{/context-menu-item-main}}
      {{/context-menu-item}}
    {{/context-menu-list-item}}
    {{#> context-menu-list-item}}
      {{#> context-menu-item}}
        {{#> context-menu-item-main}}
          {{#> context-menu-item-text}}
           Disabled action
          {{/context-menu-item-text}}
        {{/context-menu-item-main}}
      {{/context-menu-item}}
    {{/context-menu-list-item}}
    {{#> context-menu-list-item}}
      {{#> context-menu-item context-menu-item--modifier="pf-m-disabled" context-menu-item--modifier='aria-disabled="true" tabindex="-1"'}}
        {{#> context-menu-item-main}}
          {{#> context-menu-item-text}}
           Disabled link
          {{/context-menu-item-text}}
        {{/context-menu-item-main}}
      {{/context-menu-item}}
    {{/context-menu-list-item}}
  {{/context-menu-body}}
{{/context-menu}}
```

  <!-- <li>
    {{#> dropdown-menu-item dropdown-menu-item--type="a" dropdown-menu-item--modifier="pf-m-disabled" dropdown-menu-item--attribute='href="#" aria-disabled="true" tabindex="-1"'}}
      Disabled link
    {{/dropdown-menu-item}}
  </li>
  <li>
    {{#> dropdown-menu-item dropdown-menu-item--attribute='disabled'}}
      Disabled action
    {{/dropdown-menu-item}}
  </li> -->

### With-icons
```hbs
{{#> context-menu}}
  {{#> context-menu-body}}
    {{#> context-menu-list-item}}
      {{#> context-menu-item}}
        {{#> context-menu-item-main}}
          {{#> context-menu-item-icon}}
            <i class="fas fa-code-branch" aria-hidden="true"></i>
          {{/context-menu-item-icon}}
          {{#> context-menu-item-text}}
            From Git
          {{/context-menu-item-text}}
        {{/context-menu-item-main}}
      {{/context-menu-item}}
    {{/context-menu-list-item}}
    {{#> context-menu-list-item}}
      {{#> context-menu-item}}
        {{#> context-menu-item-main}}
          {{#> context-menu-item-icon}}
            <i class="fas fa-layer-group" aria-hidden="true"></i>
          {{/context-menu-item-icon}}
          {{#> context-menu-item-text}}
            Container image
          {{/context-menu-item-text}}
        {{/context-menu-item-main}}
      {{/context-menu-item}}
    {{/context-menu-list-item}}
    {{#> context-menu-list-item}}
      {{#> context-menu-item}}
        {{#> context-menu-item-main}}
          {{#> context-menu-item-icon}}
          <i class="fas fa-cube" aria-hidden="true"></i>
          {{/context-menu-item-icon}}
          {{#> context-menu-item-text}}
            From DockerFile
          {{/context-menu-item-text}}
        {{/context-menu-item-main}}
      {{/context-menu-item}}
    {{/context-menu-list-item}}
  {{/context-menu-body}}
{{/context-menu}}
```

### With-toggle
```hbs
{{#> context-menu}}
  {{#> context-menu-body}}
    {{#> context-menu-list-item}}
      {{#> context-menu-item}}
        {{#> context-menu-item-main}}
          {{#> context-menu-item-text}}
            From Git
          {{/context-menu-item-text}}
          {{> context-menu-item-toggle-icon}}
        {{/context-menu-item-main}}
      {{/context-menu-item}}
    {{/context-menu-list-item}}
    {{#> context-menu-list-item}}
      {{#> context-menu-item}}
        {{#> context-menu-item-main}}
          {{#> context-menu-item-text}}
            Container image
          {{/context-menu-item-text}}
          {{> context-menu-item-toggle-icon}}
        {{/context-menu-item-main}}
      {{/context-menu-item}}
    {{/context-menu-list-item}}
    {{#> context-menu-list-item}}
      {{#> context-menu-item}}
        {{#> context-menu-item-main}}
          {{#> context-menu-item-icon}}
          <i class="fas fa-cube" aria-hidden="true"></i>
          {{/context-menu-item-icon}}
          {{#> context-menu-item-text}}
            From DockerFile
          {{/context-menu-item-text}}
          {{> context-menu-item-toggle-icon}}
        {{/context-menu-item-main}}
        {{#> context-menu-item-description}}
          Description
        {{/context-menu-item-description}}
      {{/context-menu-item}}
    {{/context-menu-list-item}}
  {{/context-menu-body}}
{{/context-menu}}
```

### With-fly-out
```hbs
{{#> context-menu}}
  {{#> context-menu-body}}
    {{#> context-menu-list-item}}
      {{#> context-menu-item}}
        {{#> context-menu-item-main}}
          {{#> context-menu-item-text}}
            Start rollout
          {{/context-menu-item-text}}
        {{/context-menu-item-main}}
      {{/context-menu-item}}
    {{/context-menu-list-item}}
    {{#> context-menu-list-item}}
      {{#> context-menu-item}}
        {{#> context-menu-item-main}}
          {{#> context-menu-item-text}}
            Pause rollouts
          {{/context-menu-item-text}}
        {{/context-menu-item-main}}
      {{/context-menu-item}}
    {{/context-menu-list-item}}
    {{#> context-menu-list-item}}
      {{#> context-menu-item}}
        {{#> context-menu-item-main}}
          {{#> context-menu-item-text}}
            Add storage
          {{/context-menu-item-text}}
        {{/context-menu-item-main}}
      {{/context-menu-item}}
    {{/context-menu-list-item}}
    {{#> context-menu-list-item}}
      {{#> context-menu-item}}
        {{#> context-menu-item-main}}
          {{#> context-menu-item-text}}
            Edit
          {{/context-menu-item-text}}
          {{> context-menu-item-toggle-icon}}
        {{/context-menu-item-main}}
      {{/context-menu-item}}
      {{#> context-menu context-menu--modifier="pf-m-submenu"}}
        {{#> context-menu-body}}
          {{#> context-menu-list-item}}
            {{#> context-menu-item}}
              {{#> context-menu-item-main}}
                {{#> context-menu-item-text}}
                  Application grouping
                {{/context-menu-item-text}}
              {{/context-menu-item-main}}
            {{/context-menu-item}}
          {{/context-menu-list-item}}
          {{#> context-menu-list-item}}
            {{#> context-menu-item}}
              {{#> context-menu-item-main}}
                {{#> context-menu-item-text}}
                  Count
                {{/context-menu-item-text}}
              {{/context-menu-item-main}}
            {{/context-menu-item}}
          {{/context-menu-list-item}}
          {{#> context-menu-list-item}}
            {{#> context-menu-item}}
              {{#> context-menu-item-main}}
                {{#> context-menu-item-text}}
                  Labels
                {{/context-menu-item-text}}
              {{/context-menu-item-main}}
            {{/context-menu-item}}
          {{/context-menu-list-item}}
          {{#> context-menu-list-item}}
            {{#> context-menu-item}}
              {{#> context-menu-item-main}}
                {{#> context-menu-item-text}}
                  Annotations
                {{/context-menu-item-text}}
              {{/context-menu-item-main}}
            {{/context-menu-item}}
          {{/context-menu-list-item}}
        {{/context-menu-body}}
      {{/context-menu}}
    {{/context-menu-list-item}}
    {{#> context-menu-list-item}}
      {{#> context-menu-item}}
        {{#> context-menu-item-main}}
          {{#> context-menu-item-text}}
            Delete deployment config
          {{/context-menu-item-text}}
        {{/context-menu-item-main}}
      {{/context-menu-item}}
    {{/context-menu-list-item}}
  {{/context-menu-body}}
{{/context-menu}}
```

### With-filtering
```hbs
{{#> context-menu}}
  {{#> context-menu-header}}
    {{> form-control controlType="input" input="true" form-control--modifier="pf-m-search" form-control--attribute=(concat 'type="search" id="' id '-search-input" name="' id '-search-input" aria-label="Search"')}}
  {{/context-menu-header}}
  {{> divider}}
  {{#> context-menu-body}}
    {{#> context-menu-list-item}}
      {{#> context-menu-item}}
        {{#> context-menu-item-main}}
          {{#> context-menu-item-text}}
            Action 1
          {{/context-menu-item-text}}
        {{/context-menu-item-main}}
      {{/context-menu-item}}
    {{/context-menu-list-item}}
    {{#> context-menu-list-item}}
      {{#> context-menu-item}}
        {{#> context-menu-item-main}}
          {{#> context-menu-item-text}}
            Action 2
          {{/context-menu-item-text}}
        {{/context-menu-item-main}}
      {{/context-menu-item}}
    {{/context-menu-list-item}}
    {{#> context-menu-list-item}}
      {{#> context-menu-item}}
        {{#> context-menu-item-main}}
          {{#> context-menu-item-text}}
            Action 3
          {{/context-menu-item-text}}
        {{/context-menu-item-main}}
      {{/context-menu-item}}
    {{/context-menu-list-item}}
  {{/context-menu-body}}
{{/context-menu}}
```

### With-links
```hbs
{{#> context-menu}}
  {{#> context-menu-body}}
    {{#> context-menu-list-item}}
      {{#> context-menu-item context-menu-item--type="a" context-menu-item--attribute='href="#"'}}
        {{#> context-menu-item-main}}
          {{#> context-menu-item-text}}
            Link 1
          {{/context-menu-item-text}}
          {{> context-menu-item-external-icon}}
        {{/context-menu-item-main}}
      {{/context-menu-item}}
    {{/context-menu-list-item}}
    {{#> context-menu-list-item}}
      {{#> context-menu-item context-menu-item--type="a" context-menu-item--attribute='href="#"'}}
        {{#> context-menu-item-main}}
          {{#> context-menu-item-text}}
            Link 2
          {{/context-menu-item-text}}
          {{> context-menu-item-external-icon}}
        {{/context-menu-item-main}}
      {{/context-menu-item}}
    {{/context-menu-list-item}}
    {{#> context-menu-list-item}}
      {{#> context-menu-item context-menu-item--type="a" context-menu-item--attribute='href="#"'}}
        {{#> context-menu-item-main}}
          {{#> context-menu-item-text}}
            Link 3
          {{/context-menu-item-text}}
          {{> context-menu-item-external-icon}}
        {{/context-menu-item-main}}
      {{/context-menu-item}}
    {{/context-menu-list-item}}
  {{/context-menu-body}}
{{/context-menu}}
```

### With-separator(s)
```hbs
{{#> context-menu}}
  {{#> context-menu-body}}
    {{#> context-menu-list-item}}
      {{#> context-menu-item}}
        {{#> context-menu-item-main}}
          {{#> context-menu-item-text}}
            Action 1
          {{/context-menu-item-text}}
        {{/context-menu-item-main}}
      {{/context-menu-item}}
    {{/context-menu-list-item}}
    {{#> context-menu-list-item}}
      {{#> context-menu-item}}
        {{#> context-menu-item-main}}
          {{#> context-menu-item-text}}
            Action 2
          {{/context-menu-item-text}}
        {{/context-menu-item-main}}
      {{/context-menu-item}}
    {{/context-menu-list-item}}
    {{> divider}}
    {{#> context-menu-list-item}}
      {{#> context-menu-item}}
        {{#> context-menu-item-main}}
          {{#> context-menu-item-text}}
            Action 3
          {{/context-menu-item-text}}
        {{/context-menu-item-main}}
      {{/context-menu-item}}
    {{/context-menu-list-item}}
  {{/context-menu-body}}
{{/context-menu}}
```

### With-titled-groups
```hbs
{{#> context-menu}}
  {{#> context-menu-body}}
    {{#> context-menu-list-item}}
      {{#> context-menu-item context-menu-item--type="a" context-menu-item--attribute='href="#"'}}
        {{#> context-menu-item-main}}
          {{#> context-menu-item-text}}
            Link not in group
          {{/context-menu-item-text}}
        {{/context-menu-item-main}}
      {{/context-menu-item}}
    {{/context-menu-list-item}}
    {{> divider}}
    {{#> context-menu-group}}
      {{#> context-menu-group-title}}
        Group 1
      {{/context-menu-group-title}}
      <ul>
        {{#> context-menu-list-item}}
          {{#> context-menu-item context-menu-item--type="a" context-menu-item--attribute='href="#"'}}
            {{#> context-menu-item-main}}
              {{#> context-menu-item-text}}
                Link 1
              {{/context-menu-item-text}}
            {{/context-menu-item-main}}
          {{/context-menu-item}}
        {{/context-menu-list-item}}
        {{#> context-menu-list-item}}
          {{#> context-menu-item context-menu-item--type="a" context-menu-item--attribute='href="#"'}}
            {{#> context-menu-item-main}}
              {{#> context-menu-item-text}}
                Link 2
              {{/context-menu-item-text}}
            {{/context-menu-item-main}}
          {{/context-menu-item}}
        {{/context-menu-list-item}}
      </ul>
    {{/context-menu-group}}
    {{> divider}}
    {{#> context-menu-group}}
      {{#> context-menu-group-title}}
        Group 2
      {{/context-menu-group-title}}
      <ul>
        {{#> context-menu-list-item}}
          {{#> context-menu-item context-menu-item--type="a" context-menu-item--attribute='href="#"'}}
            {{#> context-menu-item-main}}
              {{#> context-menu-item-text}}
                Link 1
              {{/context-menu-item-text}}
            {{/context-menu-item-main}}
          {{/context-menu-item}}
        {{/context-menu-list-item}}
        {{#> context-menu-list-item}}
          {{#> context-menu-item context-menu-item--type="a" context-menu-item--attribute='href="#"'}}
            {{#> context-menu-item-main}}
              {{#> context-menu-item-text}}
                Link 2
              {{/context-menu-item-text}}
            {{/context-menu-item-main}}
          {{/context-menu-item}}
        {{/context-menu-list-item}}
      </ul>
    {{/context-menu-group}}
  {{/context-menu-body}}
{{/context-menu}}
```

### With-description
```hbs
{{#> context-menu}}
  {{#> context-menu-body}}
    {{#> context-menu-list-item}}
      {{#> context-menu-item}}
        {{#> context-menu-item-main}}
          {{#> context-menu-item-icon}}
            <i class="fas fa-code-branch" aria-hidden="true"></i>
          {{/context-menu-item-icon}}
          {{#> context-menu-item-text}}
            Action 1
          {{/context-menu-item-text}}
        {{/context-menu-item-main}}
        {{#> context-menu-item-description}}
          Description
        {{/context-menu-item-description}}
      {{/context-menu-item}}
    {{/context-menu-list-item}}
    {{#> context-menu-list-item}}
      {{#> context-menu-item}}
        {{#> context-menu-item-main}}
          {{#> context-menu-item-icon}}
            <i class="fas fa-code-branch" aria-hidden="true"></i>
          {{/context-menu-item-icon}}
          {{#> context-menu-item-text}}
            Action 2
          {{/context-menu-item-text}}
        {{/context-menu-item-main}}
        {{#> context-menu-item-description}}
          Description
        {{/context-menu-item-description}}
      {{/context-menu-item}}
    {{/context-menu-list-item}}
    {{#> context-menu-list-item}}
      {{#> context-menu-item}}
        {{#> context-menu-item-main}}
          {{#> context-menu-item-icon}}
            <i class="fas fa-code-branch" aria-hidden="true"></i>
          {{/context-menu-item-icon}}
          {{#> context-menu-item-text}}
            Action 3
          {{/context-menu-item-text}}
        {{/context-menu-item-main}}
        {{#> context-menu-item-description}}
          Nunc non ornare ex, et pretium dui. Duis nec augue at urna elementum blandit tincidunt eget metus. Aenean sed metus id urna dignissim interdum. Aenean vel nisl vitae arcu vehicula pulvinar eget nec turpis. Cras sit amet est est. 
        {{/context-menu-item-description}}
      {{/context-menu-item}}
    {{/context-menu-list-item}}
  {{/context-menu-body}}
{{/context-menu}}
```

### With-favorites
```hbs
{{#> context-menu}}
  {{#> context-menu-body}}
    {{#> context-menu-group}}
      {{#> context-menu-group-title}}
        Favorites
      {{/context-menu-group-title}}
      <ul>
        {{#> context-menu-list-item}}
          {{#> context-menu-item}}
            {{#> context-menu-item-main}}
              {{#> context-menu-item-text}}
                Item 1 
              {{/context-menu-item-text}}
              {{> context-menu-item-external-icon}}
            {{/context-menu-item-main}}
            {{#> context-menu-item-description}}
              This is a description
            {{/context-menu-item-description}}
          {{/context-menu-item}}
          {{> context-menu-item-action context-menu-item-action--IsFavorite="true" context-menu-item-action--IsFavorited="true"}}
        {{/context-menu-list-item}}
        {{#> context-menu-list-item}}
          {{#> context-menu-item}}
            {{#> context-menu-item-main}}
              {{#> context-menu-item-text}}
                Item 3
              {{/context-menu-item-text}}
              {{> context-menu-item-external-icon}}
            {{/context-menu-item-main}}
          {{/context-menu-item}}
          {{> context-menu-item-action context-menu-item-action--IsFavorite="true"}}
        {{/context-menu-list-item}}
      </ul>
    {{/context-menu-group}}
    {{> divider}}
    {{#> context-menu-group}}
      {{#> context-menu-group-title}}
        All actions
      {{/context-menu-group-title}}
      <ul>
        {{#> context-menu-list-item}}
          {{#> context-menu-item}}
            {{#> context-menu-item-main}}
              {{#> context-menu-item-text}}
                Item 1
              {{/context-menu-item-text}}
              {{> context-menu-item-external-icon}}
            {{/context-menu-item-main}}
            {{#> context-menu-item-description}}
              This is a description
            {{/context-menu-item-description}}
          {{/context-menu-item}}
          {{> context-menu-item-action context-menu-item-action--IsFavorite="true"}}
        {{/context-menu-list-item}}
        {{#> context-menu-list-item}}
          {{#> context-menu-item}}
            {{#> context-menu-item-main}}
              {{#> context-menu-item-text}}
                Item 2
              {{/context-menu-item-text}}
              {{> context-menu-item-external-icon}}
              {{> context-menu-item-select-icon}}
            {{/context-menu-item-main}}
            {{#> context-menu-item-description}}
              This is a description
            {{/context-menu-item-description}}
          {{/context-menu-item}}
          {{> context-menu-item-action context-menu-item-action--IsFavorite="true"}}
        {{/context-menu-list-item}}
        {{#> context-menu-list-item}}
          {{#> context-menu-item}}
            {{#> context-menu-item-main}}
              {{#> context-menu-item-text}}
                Item 3
              {{/context-menu-item-text}}
              {{> context-menu-item-external-icon}}
            {{/context-menu-item-main}}
          {{/context-menu-item}}
          {{> context-menu-item-action context-menu-item-action--IsFavorite="true"}}
        {{/context-menu-list-item}}
      </ul>
    {{/context-menu-group}}
  {{/context-menu-body}}
{{/context-menu}}
```

### Option-single-select
```hbs
{{#> context-menu}}
  {{#> context-menu-body}}
    {{#> context-menu-list-item}}
      {{#> context-menu-item}}
        {{#> context-menu-item-main}}
          {{#> context-menu-item-text}}
            Option 1
          {{/context-menu-item-text}}
        {{/context-menu-item-main}}
      {{/context-menu-item}}
    {{/context-menu-list-item}}
    {{#> context-menu-list-item}}
      {{#> context-menu-item}}
        {{#> context-menu-item-main}}
          {{#> context-menu-item-text}}
            Option 2
          {{/context-menu-item-text}}
        {{/context-menu-item-main}}
      {{/context-menu-item}}
    {{/context-menu-list-item}}
    {{#> context-menu-list-item}}
      {{#> context-menu-item}}
        {{#> context-menu-item-main}}
          {{#> context-menu-item-icon}}
            <i class="fas fa-table" aria-hidden="true"></i>
          {{/context-menu-item-icon}}
          {{#> context-menu-item-text}}
            Option 3
          {{/context-menu-item-text}}
          {{> context-menu-item-select-icon}}
        {{/context-menu-item-main}}
        {{#> context-menu-item-description}}
          Description
        {{/context-menu-item-description}}
      {{/context-menu-item}}
    {{/context-menu-list-item}}
  {{/context-menu-body}}
{{/context-menu}}
```

### Responsive-drill-down
```hbs
{{#> context-menu}}
  {{#> context-menu-header}}
    {{#> context-menu-item context-menu-item--type="div"}}
      {{#> context-menu-item-main}}
        {{#> context-menu-item-action}}
          {{#> context-menu-item-action-icon}}
            <i class="fas fa-angle-left"></i>
          {{/context-menu-item-action-icon}}
        {{/context-menu-item-action}}
        {{#> context-menu-item-icon}}
          <i class="fas fa-cog" aria-hidden="true"></i>
        {{/context-menu-item-icon}}
        {{#> context-menu-item-text}}
          Edit
        {{/context-menu-item-text}}
      {{/context-menu-item-main}}
    {{/context-menu-item}}
  {{/context-menu-header}}
  {{> divider}}
  {{#> context-menu-body}}
    {{#> context-menu-list-item}}
      {{#> context-menu-item}}
        {{#> context-menu-item-main}}
          {{#> context-menu-item-text}}
            Start rollout
          {{/context-menu-item-text}}
        {{/context-menu-item-main}}
      {{/context-menu-item}}
    {{/context-menu-list-item}}
    {{#> context-menu-list-item}}
      {{#> context-menu-item}}
        {{#> context-menu-item-main}}
          {{#> context-menu-item-text}}
            Pause rollouts
          {{/context-menu-item-text}}
        {{/context-menu-item-main}}
      {{/context-menu-item}}
    {{/context-menu-list-item}}
    {{#> context-menu-list-item}}
      {{#> context-menu-item}}
        {{#> context-menu-item-main}}
          {{#> context-menu-item-text}}
            Add storage
          {{/context-menu-item-text}}
        {{/context-menu-item-main}}
      {{/context-menu-item}}
    {{/context-menu-list-item}}
  {{/context-menu-body}}
{{/context-menu}}
```

## Documentation
### Overview

### Accessibility

| Attribute | Applied | Outcome |
| -- | -- | -- |
| `disabled` | `button.pf-c-context-menu__item` | When the menu item uses a button element, indicates that it is unavailable and removes it from keyboard focus. |
| `aria-disabled="true"` | `a.pf-c-context-menu__item` | When the menu item uses a link element, removes it from keyboard focus. |
| `tabindex="-1"` | `a.pf-c-context-menu__item` | When the menu item uses a link element, removes it from keyboard focus. |
| `aria-hidden="true"` | `.pf-c-context-menu__item-icon`, `.pf-c-context-menu__item-action-icon`, `.pf-c-context-menu__item-external-icon`, `.pf-c-context-menu__item-toggle-icon`, `.pf-c-context-menu__item-select-icon` | Hides the icon from assistive technologies. |
| `aria-label="Not starred"` | `.pf-c-context-menu__item-action-icon.pf-m-favorite` | Provides an accessible label indicating that the favorite action is not selected. |
| `aria-label="Starred"` | `.pf-c-context-menu__item-action-icon.pf-m-favorite.pf-m-favorited` | Provides an accessible label indicating that the favorite action is selected. |


### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-context-menu` | `<div>` | Initiates the context menu. **Required** |
| `.pf-c-context-menu__header` | `<div>` | Initiates the context menu header. Use for filtering and navigation. |
| `.pf-c-context-menu__body` | `<ul>` | Initiates the context menu body. Use for list items. **Required** |
| `.pf-c-context-menu__list-item` | `<li>` | Initiates the context menu list item. **Required** |
| `.pf-c-context-menu__item` | `<button>`, `<a>`, `<div>` | Initiates the context menu item. **Required** |
| `.pf-c-context-menu__item-main` | `<div>` | Initiates the context menu item main container. **Required** |
| `.pf-c-context-menu__item-text` | `<span>` | Initiates the context menu item text. **Required** |
| `.pf-c-context-menu__item-description` | `<div>` | Initiates the context menu item description. |
| `.pf-c-context-menu__item-group` | `<section>` | Initiates the context menu item group. |
| `.pf-c-context-menu__item-group-title` | `<h1>` | Initiates the context menu item group title. |
| `.pf-c-context-menu__item-icon` | `<span>` | Initiates the context menu item icon. |
| `.pf-c-context-menu__item-toggle-icon` | `<span>` | Initiates the context menu item toggle icon. |
| `.pf-c-context-menu__item-select-icon` | `<span>` | Initiates the context menu item select icon. |
| `.pf-c-context-menu__item-action` | `<button>` | Initiates the context menu item action. |
| `.pf-c-context-menu__item-action-icon` | `<span>` | Initiates the context menu item action icon. |
| `.pf-c-context-menu__item-external-icon` | `<span>` | Initiates the context menu item external icon. |
| `.pf-m-submenu` | `.pf-c-context-menu` | Modifies the context menu to be the submenu. |
| `.pf-m-favorite` | `.pf-c-context-menu__item-action` | Modifies the context menu item action to handle the favorite icon. |
| `.pf-m-favorited` | `.pf-c-context-menu__item-action.pf-m-favorite` | Modifies the context menu item action icon to be favorited. |