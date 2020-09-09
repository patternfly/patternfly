---
id: Code snippet
section: components
beta: true
cssPrefix: pf-c-code-snippet
---

## Examples
### Default
```hbs
{{#> code-snippet}}
  {{#> code-snippet-header}}
    {{#> code-snippet-controls}}
      {{#> input-group}}
        {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Copy to clipboard"'}}
          <i class="fas fa-copy" aria-hidden="true"></i>
        {{/button}}
        {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Download code"'}}
          <i class="fas fa-download"></i>
        {{/button}}
        {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Upload code"'}}
          <i class="fas fa-upload"></i>
        {{/button}}
      {{/input-group}}
    {{/code-snippet-controls}}
    {{#> code-snippet-tab}}
      <i class="fas fa-code"></i>
      {{#> code-snippet-tab-text}}
        HTML
      {{/code-snippet-tab-text}}
    {{/code-snippet-tab}}
  {{/code-snippet-header}}
  {{#> code-snippet-code}}
    code goes here 
  {{/code-snippet-code}}
{{/code-snippet}}
```

### Overflow
```hbs
{{#> code-snippet}}
  {{#> code-snippet-header}}
    {{#> code-snippet-controls}}
      {{#> input-group}}
        {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Copy to clipboard"'}}
          <i class="fas fa-copy" aria-hidden="true"></i>
        {{/button}}
        {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Download code"'}}
          <i class="fas fa-download"></i>
        {{/button}}
        {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Upload code"'}}
          <i class="fas fa-upload"></i>
        {{/button}}
      {{/input-group}}
      {{#> code-snippet-controls-overflow}}
        {{#> overflow-menu overflow-menu--id="overflow-menu-simple"}}
          {{#> overflow-menu-control overflow-menu-control--IsControl="true" overflow-menu-button--aria-label="Generic options"}}
            {{#> overflow-menu-dropdown-item}}
              Action 1
            {{/overflow-menu-dropdown-item}}
            {{#> overflow-menu-dropdown-item}}
              Action 2
            {{/overflow-menu-dropdown-item}}
          {{/overflow-menu-control}}
        {{/overflow-menu}}
      {{/code-snippet-controls-overflow}}
    {{/code-snippet-controls}}
    {{#> code-snippet-tab}}
      <i class="fas fa-code"></i>
      {{#> code-snippet-tab-text}}
        HTML
      {{/code-snippet-tab-text}}
    {{/code-snippet-tab}}
  {{/code-snippet-header}}
  {{#> code-snippet-code}}
    code goes here 
  {{/code-snippet-code}}
{{/code-snippet}}

<br/>

{{#> code-snippet}}
  {{#> code-snippet-header}}
    {{#> code-snippet-controls}}
      {{#> input-group}}
        {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Copy to clipboard"'}}
          <i class="fas fa-copy" aria-hidden="true"></i>
        {{/button}}
        {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Download code"'}}
          <i class="fas fa-download"></i>
        {{/button}}
        {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Upload code"'}}
          <i class="fas fa-upload"></i>
        {{/button}}
        {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Save code"'}}
          <i class="fas fa-save"></i>
        {{/button}}
      {{/input-group}}
      {{#> code-snippet-controls-overflow}}
        {{#> overflow-menu overflow-menu--id="overflow-menu-simple"}}
          {{#> overflow-menu-control dropdown--IsExpanded="true" overflow-menu-control--IsControl="true" overflow-menu-button--aria-label="Generic options"}}
            {{#> overflow-menu-dropdown-item}}
              Action 1
            {{/overflow-menu-dropdown-item}}
            {{#> overflow-menu-dropdown-item}}
              Action 2
            {{/overflow-menu-dropdown-item}}
          {{/overflow-menu-control}}
        {{/overflow-menu}}
      {{/code-snippet-controls-overflow}}
    {{/code-snippet-controls}}
    {{#> code-snippet-tab}}
      <i class="fas fa-code"></i>
      {{#> code-snippet-tab-text}}
        HTML
      {{/code-snippet-tab-text}}
    {{/code-snippet-tab}}
  {{/code-snippet-header}}
  {{#> code-snippet-code}}
    code goes here 
  {{/code-snippet-code}}
{{/code-snippet}}
```

## Documentation
### Overview

### Accessibility
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-code-snippet` | `<div>` | Initiates the code snippet component. **Required** |
| `.pf-c-code-snippet__header` | `<div>` | Initiates the code snippet control used for actions. **Required** |
| `.pf-c-code-snippet__code` | `<div>` | Initiates the code snippet container for the code. **Required** |
| `.pf-c-code-snippet__controls` | `<div>` | Initiates the code snippet action group. **Required** |
| `.pf-c-code-snippet__tab` | `<div>` | Initiates the code snippet tab. |
| `.pf-c-code-snippet__tab-text` | `<div>` | Initiates the code snippet tab text. |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-code-snippet` | `<div>` | Initiates the code snippet component. **Required** |
| `.pf-c-code-snippet__control` | `<div>` | Initiates the code snippet control used for actions. **Required** |
| `.pf-c-code-snippet__code` | `<div>` | Initiates the code snippet container for the code. **Required** |
| `.pf-c-code-snippet__controls` | `<div>` | Initiates the code snippet action group. **Required** |
| `.pf-c-code-snippet__tab` | `<div>` | Initiates the code snippet tab. |
| `.pf-c-code-snippet__tab-text` | `<div>` | Initiates the code snippet tab text. |
