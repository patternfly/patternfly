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
  {{#> context-menu-list-item}}
    {{#> context-menu-item}}
      {{#> context-menu-item-text}}
        Start rollout
      {{/context-menu-item-text}}
    {{/context-menu-item}}
  {{/context-menu-list-item}}
  {{#> context-menu-list-item}}
    {{#> context-menu-item}}
      {{#> context-menu-item-text}}
        Pause rollout
      {{/context-menu-item-text}}
    {{/context-menu-item}}
  {{/context-menu-list-item}}
  {{#> context-menu-list-item}}
    {{#> context-menu-item}}
      {{#> context-menu-item-text}}
        Delete deployment config
      {{/context-menu-item-text}}
    {{/context-menu-item}}
  {{/context-menu-list-item}}
{{/context-menu}}
```

### With-icons
```hbs
{{#> context-menu}}
  {{#> context-menu-list-item}}
    {{#> context-menu-item}}
      {{#> context-menu-item-icon}}
        <i class="fas fa-code-branch" aria-hidden="true"></i>
      {{/context-menu-item-icon}}
      {{#> context-menu-item-text}}
        From Git
      {{/context-menu-item-text}}
    {{/context-menu-item}}
  {{/context-menu-list-item}}
  {{#> context-menu-list-item}}
    {{#> context-menu-item}}
      {{#> context-menu-item-icon}}
        <i class="fas fa-layer-group" aria-hidden="true"></i>
      {{/context-menu-item-icon}}
      {{#> context-menu-item-text}}
        Container image
      {{/context-menu-item-text}}
    {{/context-menu-item}}
  {{/context-menu-list-item}}
  {{#> context-menu-list-item}}
    {{#> context-menu-item}}
      {{#> context-menu-item-icon}}
       <i class="fas fa-cube" aria-hidden="true"></i>
      {{/context-menu-item-icon}}
      {{#> context-menu-item-text}}
        From DockerFile
      {{/context-menu-item-text}}
    {{/context-menu-item}}
  {{/context-menu-list-item}}
{{/context-menu}}
```

### With-toggle
```hbs
{{#> context-menu}}
  {{#> context-menu-list-item}}
    {{#> context-menu-item}}
      {{#> context-menu-item-text}}
        From Git
      {{/context-menu-item-text}}
      {{> context-menu-item-toggle-icon}}
    {{/context-menu-item}}
  {{/context-menu-list-item}}
  {{#> context-menu-list-item}}
    {{#> context-menu-item}}
      {{#> context-menu-item-text}}
        Container image
      {{/context-menu-item-text}}
      {{> context-menu-item-toggle-icon}}
    {{/context-menu-item}}
  {{/context-menu-list-item}}
  {{#> context-menu-list-item}}
    {{#> context-menu-item}}
      {{#> context-menu-item-icon}}
       <i class="fas fa-cube" aria-hidden="true"></i>
      {{/context-menu-item-icon}}
      {{#> context-menu-item-text}}
        From DockerFile
      {{/context-menu-item-text}}
      {{> context-menu-item-toggle-icon}}
    {{/context-menu-item}}
  {{/context-menu-list-item}}
{{/context-menu}}
```

### With-fly-out
```hbs
{{#> context-menu}}
  {{#> context-menu-list-item}}
    {{#> context-menu-item}}
      {{#> context-menu-item-text}}
        Start rollout
      {{/context-menu-item-text}}
    {{/context-menu-item}}
  {{/context-menu-list-item}}
  {{#> context-menu-list-item}}
    {{#> context-menu-item}}
      {{#> context-menu-item-text}}
        Pause rollouts
      {{/context-menu-item-text}}
    {{/context-menu-item}}
  {{/context-menu-list-item}}
  {{#> context-menu-list-item}}
    {{#> context-menu-item}}
      {{#> context-menu-item-text}}
        Add storage
      {{/context-menu-item-text}}
    {{/context-menu-item}}
  {{/context-menu-list-item}}
  {{#> context-menu-list-item}}
    {{#> context-menu-item}}
      {{#> context-menu-item-text}}
        Edit
      {{/context-menu-item-text}}
      {{> context-menu-item-toggle-icon}}
    {{/context-menu-item}}
    {{#> context-menu context-menu--modifier="pf-m-submenu"}}
      {{#> context-menu-list-item}}
        {{#> context-menu-item}}
          {{#> context-menu-item-text}}
            Application grouping
          {{/context-menu-item-text}}
        {{/context-menu-item}}
      {{/context-menu-list-item}}
      {{#> context-menu-list-item}}
        {{#> context-menu-item}}
          {{#> context-menu-item-text}}
            Count
          {{/context-menu-item-text}}
        {{/context-menu-item}}
      {{/context-menu-list-item}}
      {{#> context-menu-list-item}}
        {{#> context-menu-item}}
          {{#> context-menu-item-text}}
            Labels
          {{/context-menu-item-text}}
        {{/context-menu-item}}
      {{/context-menu-list-item}}
      {{#> context-menu-list-item}}
        {{#> context-menu-item}}
          {{#> context-menu-item-text}}
            Annotations
          {{/context-menu-item-text}}
        {{/context-menu-item}}
      {{/context-menu-list-item}}
    {{/context-menu}}
  {{/context-menu-list-item}}
  {{#> context-menu-list-item}}
    {{#> context-menu-item}}
      {{#> context-menu-item-text}}
        Delete deployment config
      {{/context-menu-item-text}}
    {{/context-menu-item}}
  {{/context-menu-list-item}}
{{/context-menu}}
```

### With-filtering
```hbs
{{#> context-menu}}
  {{#> context-menu-control}}
    {{> form-control controlType="input" input="true" form-control--modifier="pf-m-search" form-control--attribute=(concat 'type="search" id="' id '-search-input" name="' id '-search-input" aria-label="Search"')}}
  {{/context-menu-control}}
  {{> divider}}
  {{#> context-menu-list-item}}
    {{#> context-menu-item}}
      {{#> context-menu-item-text}}
        Action 1
      {{/context-menu-item-text}}
    {{/context-menu-item}}
  {{/context-menu-list-item}}
  {{#> context-menu-list-item}}
    {{#> context-menu-item}}
      {{#> context-menu-item-text}}
        Action 2
      {{/context-menu-item-text}}
    {{/context-menu-item}}
  {{/context-menu-list-item}}
  {{#> context-menu-list-item}}
    {{#> context-menu-item}}
      {{#> context-menu-item-text}}
        Action 3
      {{/context-menu-item-text}}
    {{/context-menu-item}}
  {{/context-menu-list-item}}
{{/context-menu}}
```

### With-links
```hbs
{{#> context-menu}}
  {{#> context-menu-list-item}}
    {{#> context-menu-item context-menu-item--type="a"}}
      {{#> context-menu-item-text}}
        Link 1
      {{/context-menu-item-text}}
      {{> context-menu-item-external-icon}}
    {{/context-menu-item}}
  {{/context-menu-list-item}}
  {{#> context-menu-list-item}}
    {{#> context-menu-item context-menu-item--type="a"}}
      {{#> context-menu-item-text}}
        Link 2
      {{/context-menu-item-text}}
      {{> context-menu-item-external-icon}}
    {{/context-menu-item}}
  {{/context-menu-list-item}}
  {{#> context-menu-list-item}}
    {{#> context-menu-item context-menu-item--type="a"}}
      {{#> context-menu-item-text}}
        Link 3
      {{/context-menu-item-text}}
      {{> context-menu-item-external-icon}}
    {{/context-menu-item}}
  {{/context-menu-list-item}}
{{/context-menu}}
```

### With-separator(s)
```hbs
{{#> context-menu}}
  {{#> context-menu-list-item}}
    {{#> context-menu-item}}
      {{#> context-menu-item-text}}
        Action 1
      {{/context-menu-item-text}}
    {{/context-menu-item}}
  {{/context-menu-list-item}}
  {{#> context-menu-list-item}}
    {{#> context-menu-item}}
      {{#> context-menu-item-text}}
        Action 2
      {{/context-menu-item-text}}
    {{/context-menu-item}}
  {{/context-menu-list-item}}
  {{> divider}}
  {{#> context-menu-list-item}}
    {{#> context-menu-item}}
      {{#> context-menu-item-text}}
        Action 3
      {{/context-menu-item-text}}
    {{/context-menu-item}}
  {{/context-menu-list-item}}
{{/context-menu}}
```

### With-titled-groups
```hbs
{{#> context-menu}}
  {{#> context-menu-list-item}}
    {{#> context-menu-item context-menu-item--type="a"}}
      {{#> context-menu-item-text}}
        Link not in group
      {{/context-menu-item-text}}
    {{/context-menu-item}}
  {{/context-menu-list-item}}
  {{> divider}}
  {{#> context-menu-group}}
    {{#> context-menu-group-title}}
      Group 1
    {{/context-menu-group-title}}
    <ul>
      {{#> context-menu-list-item}}
        {{#> context-menu-item context-menu-item--type="a"}}
          {{#> context-menu-item-text}}
            Link 1
          {{/context-menu-item-text}}
        {{/context-menu-item}}
      {{/context-menu-list-item}}
      {{#> context-menu-list-item}}
        {{#> context-menu-item context-menu-item--type="a"}}
          {{#> context-menu-item-text}}
            Link 2
          {{/context-menu-item-text}}
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
        {{#> context-menu-item context-menu-item--type="a"}}
          {{#> context-menu-item-text}}
            Link 1
          {{/context-menu-item-text}}
        {{/context-menu-item}}
      {{/context-menu-list-item}}
      {{#> context-menu-list-item}}
        {{#> context-menu-item context-menu-item--type="a"}}
          {{#> context-menu-item-text}}
            Link 2
          {{/context-menu-item-text}}
        {{/context-menu-item}}
      {{/context-menu-list-item}}
    </ul>
  {{/context-menu-group}}
{{/context-menu}}
```

### With-description
```hbs
{{#> context-menu}}
  {{#> context-menu-list-item}}
    {{#> context-menu-item}}
      {{#> context-menu-item-text}}
        Action 1
      {{/context-menu-item-text}}
      {{#> context-menu-item-description}}
        Description
      {{/context-menu-item-description}}
    {{/context-menu-item}}
  {{/context-menu-list-item}}
  {{#> context-menu-list-item}}
    {{#> context-menu-item}}
      {{#> context-menu-item-text}}
        Action 2
      {{/context-menu-item-text}}
      {{#> context-menu-item-description}}
        Description
      {{/context-menu-item-description}}
    {{/context-menu-item}}
  {{/context-menu-list-item}}
  {{#> context-menu-list-item}}
    {{#> context-menu-item}}
      {{#> context-menu-item-text}}
        Action 3
      {{/context-menu-item-text}}
      {{#> context-menu-item-description}}
        Description
      {{/context-menu-item-description}}
    {{/context-menu-item}}
  {{/context-menu-list-item}}
{{/context-menu}}
```

### With-favorites
```hbs
{{#> context-menu}}
  {{#> context-menu-group}}
    {{#> context-menu-group-title}}
      Favorites
    {{/context-menu-group-title}}
    <ul>
      {{#> context-menu-list-item}}
        {{#> context-menu-item}}
          {{#> context-menu-item-text}}
            Item 1 
          {{/context-menu-item-text}}
          {{#> context-menu-item-description}}
            This is a description
          {{/context-menu-item-description}}
        {{/context-menu-item}}
        {{> context-menu-item-action context-menu-item-action--IsFavorite="true" context-menu-item-action--IsFavorited="true"}}
      {{/context-menu-list-item}}
      {{#> context-menu-list-item}}
        {{#> context-menu-item}}
          {{#> context-menu-item-text}}
            Item 3
          {{/context-menu-item-text}}
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
          {{#> context-menu-item-text}}
            Item 1
          {{/context-menu-item-text}}
          {{#> context-menu-item-description}}
            This is a description
          {{/context-menu-item-description}}
        {{/context-menu-item}}
        {{> context-menu-item-action context-menu-item-action--IsFavorite="true"}}
      {{/context-menu-list-item}}
      {{#> context-menu-list-item}}
        {{#> context-menu-item}}
          {{#> context-menu-item-text}}
            Item 2
          {{/context-menu-item-text}}
          {{#> context-menu-item-description}}
            This is a description
          {{/context-menu-item-description}}
          {{> context-menu-item-select-icon}}
        {{/context-menu-item}}
         {{> context-menu-item-action context-menu-item-action--IsFavorite="true"}}
      {{/context-menu-list-item}}
      {{#> context-menu-list-item}}
        {{#> context-menu-item}}
          {{#> context-menu-item-text}}
            Item 3
          {{/context-menu-item-text}}
        {{/context-menu-item}}
        {{> context-menu-item-action context-menu-item-action--IsFavorite="true"}}
      {{/context-menu-list-item}}
    </ul>
  {{/context-menu-group}}
{{/context-menu}}
```

### Option-single-select
```hbs
{{#> context-menu}}
  {{#> context-menu-list-item}}
    {{#> context-menu-item}}
      {{#> context-menu-item-icon}}
        <i class="fas fa-table" aria-hidden="true"></i>
      {{/context-menu-item-icon}}
      {{#> context-menu-item-text}}
        Option 1
      {{/context-menu-item-text}}
    {{/context-menu-item}}
  {{/context-menu-list-item}}
  {{#> context-menu-list-item}}
    {{#> context-menu-item}}
      {{#> context-menu-item-text}}
        Option 2
      {{/context-menu-item-text}}
      {{> context-menu-item-select-icon}}
    {{/context-menu-item}}
  {{/context-menu-list-item}}
  {{#> context-menu-list-item}}
    {{#> context-menu-item}}
      {{#> context-menu-item-text}}
        Option 3
      {{/context-menu-item-text}}
      {{#> context-menu-item-description}}
        Description
      {{/context-menu-item-description}}
    {{/context-menu-item}}
  {{/context-menu-list-item}}
{{/context-menu}}
```

<!-- ### Responsive-drill-down
```hbs
{{#> context-menu}}
  {{#> context-menu-list-item}}
    {{#> context-menu-navigation}}
      {{#> context-menu-item}}
        {{> context-menu-navigation-back-button}}
        {{#> context-menu-item-icon}}
          <i class="fas fa-cube" aria-hidden="true"></i>
        {{/context-menu-item-icon}}
        {{#> context-menu-item-text}}
          Edit
        {{/context-menu-item-text}}
      {{/context-menu-item}}
    {{/context-menu-navigation}}
  {{/context-menu-list-item}}
  {{> divider}}
  {{#> context-menu-list-item}}
    {{#> context-menu-item}}
      {{#> context-menu-item-text}}
        Start rollout
      {{/context-menu-item-text}}
    {{/context-menu-item}}
  {{/context-menu-list-item}}
  {{#> context-menu-list-item}}
    {{#> context-menu-item}}
      {{#> context-menu-item-text}}
        Pause rollouts
      {{/context-menu-item-text}}
    {{/context-menu-item}}
  {{/context-menu-list-item}}
  {{#> context-menu-list-item}}
    {{#> context-menu-item}}
      {{#> context-menu-item-text}}
        Add storage
      {{/context-menu-item-text}}
    {{/context-menu-item}}
  {{/context-menu-list-item}}
{{/context-menu}}
``` -->

## Documentation
### Overview


### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
