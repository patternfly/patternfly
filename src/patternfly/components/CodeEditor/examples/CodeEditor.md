---
id: Code editor
section: components
beta: true
cssPrefix: pf-c-code-editor
---

## Examples
### Default
```hbs
{{#> code-editor}}
  {{#> code-editor-control}}
    {{#> code-editor-action-group}}
      {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Copy to clipboard"'}}
        <i class="fas fa-copy" aria-hidden="true"></i>
      {{/button}}
      {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Download code"'}}
        <i class="fas fa-download"></i>
      {{/button}}
      {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Upload code"'}}
        <i class="fas fa-upload"></i>
      {{/button}}
    {{/code-editor-action-group}}
    {{#> code-editor-tab}}
      <i class="fas fa-code"></i>
      {{#> code-editor-tab-text}}
        HTML
      {{/code-editor-tab-text}}
    {{/code-editor-tab}}
  {{/code-editor-control}}
  {{#> code-editor-code}}
    code goes here 
  {{/code-editor-code}}
{{/code-editor}}
```

### Overflow
```hbs
{{#> code-editor}}
  {{#> code-editor-control}}
    {{#> code-editor-action-group}}
      {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Copy to clipboard"'}}
        <i class="fas fa-copy" aria-hidden="true"></i>
      {{/button}}
      {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Download code"'}}
        <i class="fas fa-download"></i>
      {{/button}}
      {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Upload code"'}}
        <i class="fas fa-upload"></i>
      {{/button}}
      {{#> code-editor-action-group-control}}
        {{#> overflow-menu overflow-menu--id="overflow-menu-simple"}}
          {{#> overflow-menu-control overflow-menu-control--IsControl="true" overflow-menu-button--aria-label="Generic options"}}
            {{#> overflow-menu-dropdown-item}}
              Item 1
            {{/overflow-menu-dropdown-item}}
            {{#> overflow-menu-dropdown-item}}
              Item 2
            {{/overflow-menu-dropdown-item}}
            {{#> overflow-menu-dropdown-item}}
              Item 3
            {{/overflow-menu-dropdown-item}}
          {{/overflow-menu-control}}
        {{/overflow-menu}}
      {{/code-editor-action-group-control}}
    {{/code-editor-action-group}}
    {{#> code-editor-tab}}
      <i class="fas fa-code"></i>
      {{#> code-editor-tab-text}}
        HTML
      {{/code-editor-tab-text}}
    {{/code-editor-tab}}
  {{/code-editor-control}}
  {{#> code-editor-code}}
    code goes here 
  {{/code-editor-code}}
{{/code-editor}}

<br/>

{{#> code-editor}}
  {{#> code-editor-control}}
    {{#> code-editor-action-group}}
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
      {{#> code-editor-action-group-control}}
        {{#> overflow-menu overflow-menu--id="overflow-menu-simple"}}
          {{#> overflow-menu-control dropdown--IsExpanded="true" overflow-menu-control--IsControl="true" overflow-menu-button--aria-label="Generic options"}}
            {{#> overflow-menu-dropdown-item}}
              Item 1
            {{/overflow-menu-dropdown-item}}
            {{#> overflow-menu-dropdown-item}}
              Item 2
            {{/overflow-menu-dropdown-item}}
            {{#> overflow-menu-dropdown-item}}
              Item 3
            {{/overflow-menu-dropdown-item}}
          {{/overflow-menu-control}}
        {{/overflow-menu}}
      {{/code-editor-action-group-control}}
    {{/code-editor-action-group}}
    {{#> code-editor-tab}}
      <i class="fas fa-code"></i>
      {{#> code-editor-tab-text}}
        HTML
      {{/code-editor-tab-text}}
    {{/code-editor-tab}}
  {{/code-editor-control}}
  {{#> code-editor-code}}
    code goes here 
  {{/code-editor-code}}
{{/code-editor}}
```

## Documentation
### Overview

### Accessibility
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-code-editor` | `<div>` | Initiates the code editor component. **Required** |
| `.pf-c-code-editor__control` | `<div>` | Initiates the code editor control used for actions. **Required** |
| `.pf-c-code-editor__code` | `<div>` | Initiates the code editor container for the code. **Required** |
| `.pf-c-code-editor__action-group` | `<div>` | Initiates the code editor action group. **Required** |
| `.pf-c-code-editor__tab` | `<div>` | Initiates the code editor tab. |
| `.pf-c-code-editor__tab-text` | `<div>` | Initiates the code editor tab text. |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-code-editor` | `<div>` | Initiates the code editor component. **Required** |
| `.pf-c-code-editor__control` | `<div>` | Initiates the code editor control used for actions. **Required** |
| `.pf-c-code-editor__code` | `<div>` | Initiates the code editor container for the code. **Required** |
| `.pf-c-code-editor__action-group` | `<div>` | Initiates the code editor action group. **Required** |
| `.pf-c-code-editor__tab` | `<div>` | Initiates the code editor tab. |
| `.pf-c-code-editor__tab-text` | `<div>` | Initiates the code editor tab text. |
