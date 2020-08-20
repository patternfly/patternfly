---
id: Menu
section: components
beta: true
cssPrefix: pf-c-menu
---

import './Menu.css'

## Examples
### Basic
```hbs
{{#> menu}}
  {{#> menu-content}}
    {{#> menu-list}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Action
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item menu-item--IsLink="true"}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Link
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item menu-list-item--modifier="pf-m-disabled"}}
        {{#> menu-item menu-item--attribute="disabled"}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
            Disabled action
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item menu-list-item--modifier="pf-m-disabled"}}
        {{#> menu-item menu-item--IsLink="true" menu-item--modifier='aria-disabled="true" tabindex="-1"'}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
            Disabled link
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
    {{/menu-list}}
  {{/menu-content}}
{{/menu}}
```

### With icons
```hbs
{{#> menu}}
  {{#> menu-content}}
    {{#> menu-list}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-icon}}
              <i class="fas fa-fw fa-code-branch" aria-hidden="true"></i>
            {{/menu-item-icon}}
            {{#> menu-item-text}}
              From Git
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-icon}}
              <i class="fas fa-fw fa-layer-group" aria-hidden="true"></i>
            {{/menu-item-icon}}
            {{#> menu-item-text}}
              Container image
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-icon}}
            <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
            {{/menu-item-icon}}
            {{#> menu-item-text}}
              From DockerFile
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
    {{/menu-list}}
  {{/menu-content}}
{{/menu}}
```

### With expanded toggle
```hbs
{{#> menu}}
  {{#> menu-content}}
    {{#> menu-list}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              From Git
            {{/menu-item-text}}
            {{> menu-item-toggle-icon}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Container image
            {{/menu-item-text}}
            {{> menu-item-toggle-icon}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-icon}}
            <i class="fas fa-fw fa-cube" aria-hidden="true"></i>
            {{/menu-item-icon}}
            {{#> menu-item-text}}
              From DockerFile
            {{/menu-item-text}}
            {{> menu-item-toggle-icon}}
          {{/menu-item-main}}
          {{#> menu-item-description}}
            Description
          {{/menu-item-description}}
        {{/menu-item}}
      {{/menu-list-item}}
    {{/menu-list}}
  {{/menu-content}}
{{/menu}}
```

### With flyout
```hbs
{{#> menu menu--modifier="pf-m-flyout"}}
  {{#> menu-content}}
    {{#> menu-list}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Start rollout
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Pause rollouts
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item menu-item--attribute='aria-expanded="false"'}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Add storage
            {{/menu-item-text}}
            {{> menu-item-toggle-icon}}
          {{/menu-item-main}}
        {{/menu-item}}
        {{#> menu newcontext menu--attribute="hidden"}}
          {{#> menu-content}}
            {{#> menu-list}}
              {{#> menu-list-item}}
                {{#> menu-item}}
                  {{#> menu-item-main}}
                    {{#> menu-item-text}}
                      Application grouping
                    {{/menu-item-text}}
                  {{/menu-item-main}}
                {{/menu-item}}
              {{/menu-list-item}}
              {{#> menu-list-item}}
                {{#> menu-item}}
                  {{#> menu-item-main}}
                    {{#> menu-item-text}}
                      Count
                    {{/menu-item-text}}
                  {{/menu-item-main}}
                {{/menu-item}}
              {{/menu-list-item}}
              {{#> menu-list-item}}
                {{#> menu-item}}
                  {{#> menu-item-main}}
                    {{#> menu-item-text}}
                      Labels
                    {{/menu-item-text}}
                  {{/menu-item-main}}
                {{/menu-item}}
              {{/menu-list-item}}
              {{#> menu-list-item}}
                {{#> menu-item}}
                  {{#> menu-item-main}}
                    {{#> menu-item-text}}
                      Annotations
                    {{/menu-item-text}}
                  {{/menu-item-main}}
                {{/menu-item}}
              {{/menu-list-item}}
            {{/menu-list}}
          {{/menu-content}}
        {{/menu}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item menu-item--attribute='aria-expanded="true"'}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Edit
            {{/menu-item-text}}
            {{> menu-item-toggle-icon}}
          {{/menu-item-main}}
          {{#> menu-item-description}}
            Description
          {{/menu-item-description}}
        {{/menu-item}}
        {{#> menu newcontext}}
          {{#> menu-content}}
            {{#> menu-list}}
              {{#> menu-list-item}}
                {{#> menu-item}}
                  {{#> menu-item-main}}
                    {{#> menu-item-text}}
                      Application grouping
                    {{/menu-item-text}}
                  {{/menu-item-main}}
                {{/menu-item}}
              {{/menu-list-item}}
              {{#> menu-list-item}}
                {{#> menu-item}}
                  {{#> menu-item-main}}
                    {{#> menu-item-text}}
                      Count
                    {{/menu-item-text}}
                  {{/menu-item-main}}
                {{/menu-item}}
              {{/menu-list-item}}
              {{#> menu-list-item}}
                {{#> menu-item}}
                  {{#> menu-item-main}}
                    {{#> menu-item-text}}
                      Labels
                    {{/menu-item-text}}
                  {{/menu-item-main}}
                {{/menu-item}}
              {{/menu-list-item}}
              {{#> menu-list-item}}
                {{#> menu-item}}
                  {{#> menu-item-main}}
                    {{#> menu-item-text}}
                      Annotations
                    {{/menu-item-text}}
                  {{/menu-item-main}}
                {{/menu-item}}
              {{/menu-list-item}}
            {{/menu-list}}
          {{/menu-content}}
        {{/menu}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Delete deployment config
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
    {{/menu-list}}
  {{/menu-content}}
{{/menu}}
```

### With filtering
```hbs
{{#> menu}}
  {{#> menu-search}}
    {{#> menu-search-input}}
      {{> form-control controlType="input" input="true" form-control--modifier="pf-m-search" form-control--attribute=(concat 'type="search" id="' id '-search-input" name="' id '-search-input" aria-label="Search"')}}
    {{/menu-search-input}}
  {{/menu-search}}
  {{> divider}}
  {{#> menu-content}}
    {{#> menu-list}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Action 1
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Action 2
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Action 3
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
    {{/menu-list}}
  {{/menu-content}}
{{/menu}}
```

### With links
```hbs
{{#> menu}}
  {{#> menu-content}}
    {{#> menu-list}}
      {{#> menu-list-item}}
        {{#> menu-item menu-item--IsLink="true" menu-item--attribute='target="_blank"'}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Link 1
            {{/menu-item-text}}
            {{> menu-item-external-icon}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item menu-item--IsLink="true" menu-item--attribute='target="_blank"'}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Link 2
            {{/menu-item-text}}
            {{> menu-item-external-icon}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item menu-item--IsLink="true"}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Link 3
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
    {{/menu-list}}
  {{/menu-content}}
{{/menu}}
```

### With separator(s)
```hbs
{{#> menu}}
  {{#> menu-content}}
    {{#> menu-list}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Action 1
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Action 2
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{> divider divider--type="li"}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Action 3
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
    {{/menu-list}}
  {{/menu-content}}
{{/menu}}
```

### With titled groups
```hbs
{{#> menu}}
  {{#> menu-content}}
    {{#> menu-list-item}}
      {{#> menu-item menu-item--IsLink="true"}}
        {{#> menu-item-main}}
          {{#> menu-item-text}}
            Link not in group
          {{/menu-item-text}}
        {{/menu-item-main}}
      {{/menu-item}}
    {{/menu-list-item}}
    {{> divider divider--type="li"}}
    {{#> menu-group}}
      {{#> menu-group-title}}
        Group 1
      {{/menu-group-title}}
      {{#> menu-list}}
        {{#> menu-list-item}}
          {{#> menu-item menu-item--IsLink="true"}}
            {{#> menu-item-main}}
              {{#> menu-item-text}}
                Link 1
              {{/menu-item-text}}
            {{/menu-item-main}}
          {{/menu-item}}
        {{/menu-list-item}}
        {{#> menu-list-item}}
          {{#> menu-item menu-item--IsLink="true"}}
            {{#> menu-item-main}}
              {{#> menu-item-text}}
                Link 2
              {{/menu-item-text}}
            {{/menu-item-main}}
          {{/menu-item}}
        {{/menu-list-item}}
      {{/menu-list}}
    {{/menu-group}}
    {{> divider}}
    {{#> menu-group}}
      {{#> menu-group-title}}
        Group 2
      {{/menu-group-title}}
      {{#> menu-list}}
        {{#> menu-list-item}}
          {{#> menu-item menu-item--IsLink="true"}}
            {{#> menu-item-main}}
              {{#> menu-item-text}}
                Link 1
              {{/menu-item-text}}
            {{/menu-item-main}}
          {{/menu-item}}
        {{/menu-list-item}}
        {{#> menu-list-item}}
          {{#> menu-item menu-item--IsLink="true"}}
            {{#> menu-item-main}}
              {{#> menu-item-text}}
                Link 2
              {{/menu-item-text}}
            {{/menu-item-main}}
          {{/menu-item}}
        {{/menu-list-item}}
      {{/menu-list}}
    {{/menu-group}}
  {{/menu-content}}
{{/menu}}
```

### With description
```hbs
{{#> menu}}
  {{#> menu-content}}
    {{#> menu-list}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-icon}}
              <i class="fas fa-fw fa-code-branch" aria-hidden="true"></i>
            {{/menu-item-icon}}
            {{#> menu-item-text}}
              Action 1
            {{/menu-item-text}}
          {{/menu-item-main}}
          {{#> menu-item-description}}
            Description
          {{/menu-item-description}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item menu-list-item--modifier="pf-m-disabled"}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-icon}}
              <i class="fas fa-fw fa-code-branch" aria-hidden="true"></i>
            {{/menu-item-icon}}
            {{#> menu-item-text}}
              Action 2 disabled
            {{/menu-item-text}}
          {{/menu-item-main}}
          {{#> menu-item-description}}
            Description
          {{/menu-item-description}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-icon}}
              <i class="fas fa-fw fa-code-branch" aria-hidden="true"></i>
            {{/menu-item-icon}}
            {{#> menu-item-text}}
              Action 3
            {{/menu-item-text}}
          {{/menu-item-main}}
          {{#> menu-item-description}}
            Nunc non ornare ex, et pretium dui. Duis nec augue at urna elementum blandit tincidunt eget metus. Aenean sed metus id urna dignissim interdum. Aenean vel nisl vitae arcu vehicula pulvinar eget nec turpis. Cras sit amet est est. 
          {{/menu-item-description}}
        {{/menu-item}}
      {{/menu-list-item}}
    {{/menu-list}}
  {{/menu-content}}
{{/menu}}
```

### With actions
```hbs
{{#> menu}}
  {{#> menu-content}}
    {{#> menu-group}}
      {{#> menu-group-title}}
        Actions
      {{/menu-group-title}}
      {{#> menu-list}}
        {{#> menu-list-item}}
          {{#> menu-item menu-item--modifier="pf-m-selected"}}
            {{#> menu-item-main}}
              {{#> menu-item-text}}
                Item 1 
              {{/menu-item-text}}
              {{> menu-item-select-icon}}
            {{/menu-item-main}}
            {{#> menu-item-description}}
              This is a description
            {{/menu-item-description}}
          {{/menu-item}}
          {{#> menu-item-action}}
            <i class="fas fa-fw fa-ellipsis-v" aria-hidden="true"></i>
          {{/menu-item-action}}
        {{/menu-list-item}}
        {{#> menu-list-item}}
          {{#> menu-item menu-item--modifier="pf-m-select"}}
            {{#> menu-item-main}}
              {{#> menu-item-text}}
                Item 2
              {{/menu-item-text}}
              {{> menu-item-select-icon}}
            {{/menu-item-main}}
          {{/menu-item}}
          {{#> menu-item-action}}
            <i class="fas fa-fw fa-bell" aria-hidden="true"></i>
          {{/menu-item-action}}
        {{/menu-list-item}}
        {{#> menu-list-item}}
          {{#> menu-item menu-item--modifier="pf-m-selected"}}
            {{#> menu-item-main}}
              {{#> menu-item-text}}
                Item 3
              {{/menu-item-text}}
              {{> menu-item-select-icon}}
            {{/menu-item-main}}
            {{#> menu-item-description}}
              This is a description
            {{/menu-item-description}}
          {{/menu-item}}
          {{#> menu-item-action}}
            <i class="fas fa-fw fa-clipboard" aria-hidden="true"></i>
          {{/menu-item-action}}
        {{/menu-list-item}}
        {{#> menu-list-item}}
          {{#> menu-item menu-item--modifier="pf-m-selected"}}
            {{#> menu-item-main}}
              {{#> menu-item-text}}
                Item 4
              {{/menu-item-text}}
              {{> menu-item-select-icon}}
            {{/menu-item-main}}
            {{#> menu-item-description}}
              This is a description
            {{/menu-item-description}}
          {{/menu-item}}
          {{#> menu-item-action}}
            <i class="fas fa-fw fa-bars" aria-hidden="true"></i>
          {{/menu-item-action}}
        {{/menu-list-item}}
      {{/menu-list}}
    {{/menu-group}}
  {{/menu-content}}
{{/menu}}
```

### With favorites
```hbs
{{#> menu}}
  {{#> menu-content}}
    {{#> menu-group}}
      {{#> menu-group-title}}
        Favorites
      {{/menu-group-title}}
      {{#> menu-list}}
        {{#> menu-list-item}}
          {{#> menu-item menu-item--IsLink="true"}}
            {{#> menu-item-main}}
              {{#> menu-item-text}}
                Item 1 
              {{/menu-item-text}}
            {{/menu-item-main}}
            {{#> menu-item-description}}
              This is a description
            {{/menu-item-description}}
          {{/menu-item}}
          {{> menu-item-action menu-item-action--IsFavorite="true" menu-item-action--IsFavorited="true"}}
        {{/menu-list-item}}
        {{#> menu-list-item}}
          {{#> menu-item menu-item--IsLink="true" menu-item--attribute='target="_blank"'}}
            {{#> menu-item-main}}
              {{#> menu-item-text}}
                Item 3
              {{/menu-item-text}}
              {{> menu-item-external-icon}}
            {{/menu-item-main}}
          {{/menu-item}}
          {{> menu-item-action menu-item-action--IsFavorite="true"}}
        {{/menu-list-item}}
      {{/menu-list}}
    {{/menu-group}}
    {{> divider}}
    {{#> menu-group}}
      {{#> menu-group-title}}
        All actions
      {{/menu-group-title}}
      {{#> menu-list}}
        {{#> menu-list-item}}
          {{#> menu-item menu-item--IsLink="true"}}
            {{#> menu-item-main}}
              {{#> menu-item-text}}
                Item 1
              {{/menu-item-text}}
            {{/menu-item-main}}
            {{#> menu-item-description}}
              This is a description
            {{/menu-item-description}}
          {{/menu-item}}
          {{> menu-item-action menu-item-action--IsFavorite="true"}}
        {{/menu-list-item}}
        {{#> menu-list-item}}
          {{#> menu-item menu-item--IsLink="true" menu-item--attribute='target="_blank"'}}
            {{#> menu-item-main}}
              {{#> menu-item-text}}
                Item 2
              {{/menu-item-text}}
              {{> menu-item-external-icon}}
            {{/menu-item-main}}
            {{#> menu-item-description}}
              This is a description
            {{/menu-item-description}}
          {{/menu-item}}
          {{> menu-item-action menu-item-action--IsFavorite="true"}}
        {{/menu-list-item}}
        {{#> menu-list-item}}
          {{#> menu-item menu-item--IsLink="true" menu-item--attribute='target="_blank"'}}
            {{#> menu-item-main}}
              {{#> menu-item-text}}
                Item 3
              {{/menu-item-text}}
              {{> menu-item-external-icon}}
            {{/menu-item-main}}
          {{/menu-item}}
          {{> menu-item-action menu-item-action--IsFavorite="true"}}
        {{/menu-list-item}}
      {{/menu-list}}
    {{/menu-group}}
  {{/menu-content}}
{{/menu}}
```

### Option single select
```hbs
{{#> menu}}
  {{#> menu-content}}
    {{#> menu-list}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Option 1
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Option 2
            {{/menu-item-text}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item menu-item--modifier="pf-m-selected"}}
          {{#> menu-item-main}}
            {{#> menu-item-icon}}
              <i class="fas fa-fw fa-table" aria-hidden="true"></i>
            {{/menu-item-icon}}
            {{#> menu-item-text}}
              Option 3
            {{/menu-item-text}}
            {{> menu-item-select-icon}}
          {{/menu-item-main}}
          {{#> menu-item-description}}
            Description
          {{/menu-item-description}}
        {{/menu-item}}
      {{/menu-list-item}}
    {{/menu-list}}
  {{/menu-content}}
{{/menu}}
```

### Option multi-select
```hbs
{{#> menu}}
  {{#> menu-content}}
    {{#> menu-list}}
      {{#> menu-list-item}}
        {{#> menu-item menu-item--modifier="pf-m-selected"}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Option 1
            {{/menu-item-text}}
            {{> menu-item-select-icon}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item menu-item--modifier="pf-m-selected"}}
          {{#> menu-item-main}}
            {{#> menu-item-text}}
              Option 2
            {{/menu-item-text}}
            {{> menu-item-select-icon}}
          {{/menu-item-main}}
        {{/menu-item}}
      {{/menu-list-item}}
      {{#> menu-list-item}}
        {{#> menu-item menu-item--modifier="pf-m-selected"}}
          {{#> menu-item-main}}
            {{#> menu-item-icon}}
              <i class="fas fa-fw fa-table" aria-hidden="true"></i>
            {{/menu-item-icon}}
            {{#> menu-item-text}}
              Option 3
            {{/menu-item-text}}
            {{> menu-item-select-icon}}
          {{/menu-item-main}}
          {{#> menu-item-description}}
            Description
          {{/menu-item-description}}
        {{/menu-item}}
      {{/menu-list-item}}
    {{/menu-list}}
  {{/menu-content}}
{{/menu}}
```

## Documentation
### Overview

### Accessibility

| Attribute | Applied | Outcome |
| -- | -- | -- |
| `disabled` | `button.pf-c-menu__item` | When the menu item uses a button element, indicates that it is unavailable and removes it from keyboard focus. |
| `aria-disabled="true"` | `a.pf-c-menu__item` | When the menu item uses a link element, removes it from keyboard focus. |
| `tabindex="-1"` | `a.pf-c-menu__item` | When the menu item uses a link element, removes it from keyboard focus. |
| `aria-hidden="true"` | `.pf-c-menu__item-icon`, `.pf-c-menu__item-action-icon`, `.pf-c-menu__item-external-icon`, `.pf-c-menu__item-toggle-icon`, `.pf-c-menu__item-select-icon` | Hides the icon from assistive technologies. |
| `aria-label="Not starred"` | `.pf-c-menu__item-action-icon.pf-m-favorite` | Provides an accessible label indicating that the favorite action is not selected. |
| `aria-label="Starred"` | `.pf-c-menu__item-action-icon.pf-m-favorite.pf-m-favorited` | Provides an accessible label indicating that the favorite action is selected. |


### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-menu` | `<div>` | Initiates the menu. **Required** |
| `.pf-c-menu__search` | `<div>` | Initiates the menu search container. Use for filtering. |
| `.pf-c-menu__search-input` | `<div>` | Initiates the menu search input container. |
| `.pf-c-menu__content` | `<div>` | Initiates the menu content. Use for lists. **Required** |
| `.pf-c-menu__list` | `<ul>` | Initiates the menu list. **Required** |
| `.pf-c-menu__list-item` | `<li>` | Initiates the menu list item. **Required** |
| `.pf-c-menu__item` | `<button>`, `<a>`, `<div>` | Initiates the menu item. **Required** |
| `.pf-c-menu__item-main` | `<div>` | Initiates the menu item main container. **Required** |
| `.pf-c-menu__item-text` | `<span>` | Initiates the menu item text. **Required** |
| `.pf-c-menu__item-description` | `<div>` | Initiates the menu item description. |
| `.pf-c-menu__item-group` | `<section>` | Initiates the menu item group. |
| `.pf-c-menu__item-group-title` | `<h1>` | Initiates the menu item group title. |
| `.pf-c-menu__item-icon` | `<span>` | Initiates the menu item icon. |
| `.pf-c-menu__item-toggle-icon` | `<span>` | Initiates the menu item toggle icon. |
| `.pf-c-menu__item-select-icon` | `<span>` | Initiates the menu item select icon. |
| `.pf-c-menu__item-action` | `<button>` | Initiates the menu item action. |
| `.pf-c-menu__item-action-icon` | `<span>` | Initiates the menu item action icon. |
| `.pf-c-menu__item-external-icon` | `<span>` | Initiates the menu item external icon. |
| `.pf-m-submenu` | `.pf-c-menu` | Modifies the menu to be the submenu. |
| `.pf-m-favorite` | `.pf-c-menu__item-action` | Modifies the menu item action to handle the favorite icon. |
| `.pf-m-favorited` | `.pf-c-menu__item-action.pf-m-favorite` | Modifies the menu item action icon to be favorited. |
| `.pf-m-selected` | `.pf-c-menu__item` | Modifies the menu item to be selected. |
| `.pf-m-flyout` | `.pf-c-menu` | Modifies the menu so that all nested `.pf-c-menu` elements "flyout" |
