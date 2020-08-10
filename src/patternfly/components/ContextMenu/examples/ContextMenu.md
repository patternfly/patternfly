---
id: Context menu
section: components
beta: true
cssPrefix: pf-c-context-menu
---

import './ContextMenu.css'

## Examples
### Default
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

### Desktop-fly-out
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

## Documentation
### Overview


### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
