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
      {{#> code-snippet-tab-icon}}
        <i class="fas fa-code"></i>
      {{/code-snippet-tab-icon}}
      {{#> code-snippet-tab-text}}
        HTML
      {{/code-snippet-tab-text}}
    {{/code-snippet-tab}}
  {{/code-snippet-header}}
  {{#> code-snippet-main}}
    {{#> code-snippet-code}}
      code goes here 
    {{/code-snippet-code}}
  {{/code-snippet-main}}
{{/code-snippet}}
```

### Read-only
```hbs
{{#> code-snippet code-snippet--modifier="pf-m-read-only"}}
  {{#> code-snippet-header}}
    {{#> code-snippet-controls}}
      {{#> input-group}}
        {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Copy to clipboard"'}}
          <i class="fas fa-copy" aria-hidden="true"></i>
        {{/button}}
        {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Download code"'}}
          <i class="fas fa-download"></i>
        {{/button}}
        {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Upload code" disabled'}}
          <i class="fas fa-upload"></i>
        {{/button}}
      {{/input-group}}
    {{/code-snippet-controls}}
    {{#> code-snippet-tab}}
      {{#> code-snippet-tab-icon}}
        <i class="fas fa-code"></i>
      {{/code-snippet-tab-icon}}
      {{#> code-snippet-tab-text}}
        HTML
      {{/code-snippet-tab-text}}
    {{/code-snippet-tab}}
  {{/code-snippet-header}}
  {{#> code-snippet-main}}
    {{#> code-snippet-code}}
      code goes here 
    {{/code-snippet-code}}
  {{/code-snippet-main}}
{{/code-snippet}}
```

### Without actions
```hbs
{{#> code-snippet}}
  {{#> code-snippet-header}}
    {{#> code-snippet-tab}}
      {{#> code-snippet-tab-icon}}
        <i class="fas fa-code"></i>
      {{/code-snippet-tab-icon}}
      {{#> code-snippet-tab-text}}
        YAML
      {{/code-snippet-tab-text}}
    {{/code-snippet-tab}}
  {{/code-snippet-header}}
  {{#> code-snippet-main}}
    {{#> code-snippet-code}}
    {{#> empty-state empty-state--modifier="pf-m-lg"}}
      {{#> empty-state-icon}}
        <i class="fas fa-code"/>
      {{/empty-state-icon}}
      {{#> title titleType="h1" title--modifier="pf-m-lg"}}
        Start editing
      {{/title}}
      {{#> empty-state-body}}
        Drag a file here or browse to upload.
      {{/empty-state-body}}
      {{#> button button--modifier="pf-m-primary"}}
        Browse
      {{/button}}
      {{#> empty-state-secondary}}
        {{#> button button--modifier="pf-m-link"}}
          Start from scratch
        {{/button}}
      {{/empty-state-secondary}}
    {{/empty-state}}
    {{/code-snippet-code }}
  {{/code-snippet-main}}
{{/code-snippet}}
```


### Drag file and hover over component
```hbs
{{#> code-snippet}}
  {{#> code-snippet-header}}
    {{#> code-snippet-tab}}
      {{#> code-snippet-tab-icon}}
        <i class="fas fa-code"></i>
      {{/code-snippet-tab-icon}}
      {{#> code-snippet-tab-text}}
        YAML
      {{/code-snippet-tab-text}}
    {{/code-snippet-tab}}
  {{/code-snippet-header}}
  <div class="pf-c-code-snippet__container">
    {{#> code-snippet-code code-snippet-code--modifier="pf-m-drag-hover"}}
      {{#> empty-state empty-state--modifier="pf-m-lg"}}
        {{#> empty-state-icon}}
          <i class="fas fa-code"/>
        {{/empty-state-icon}}
        {{#> title titleType="h1" title--modifier="pf-m-lg"}}
          Start editing
        {{/title}}
        {{#> empty-state-body}}
          Drag a file here or browse to upload.
        {{/empty-state-body}}
        {{#> button button--modifier="pf-m-primary"}}
          Browse
        {{/button}}
        {{#> empty-state-secondary}}
          {{#> button button--modifier="pf-m-link"}}
            Start from scratch
          {{/button}}
        {{/empty-state-secondary}}
      {{/empty-state}}
    {{/code-snippet-code}}
  </div>
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
      {{#> code-snippet-tab-icon}}
        <i class="fas fa-code"></i>
      {{/code-snippet-tab-icon}}
    {{/code-snippet-tab}}
  {{/code-snippet-header}}
  {{#> code-snippet-main}}
    {{#> code-snippet-code}}
      code goes here 
    {{/code-snippet-code}}
  {{/code-snippet-main}}
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
      {{#> code-snippet-tab-icon}}
        <i class="fas fa-code"></i>
      {{/code-snippet-tab-icon}}
    {{/code-snippet-tab}}
  {{/code-snippet-header}}
  {{#> code-snippet-main}}
    {{#> code-snippet-code}}
      code goes here 
    {{/code-snippet-code}}
  {{/code-snippet-main}}
{{/code-snippet}}
```

## Documentation
### Overview

### Accessibility
| Class | Applied to | Outcome |
| -- | -- | -- |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-code-snippet` | `<div>` | Initiates the code snippet component. **Required** |
| `.pf-c-code-snippet__header` | `<div>` | Initiates the code snippet header used for the controls and tab elements. **Required** |
| `.pf-c-code-snippet__main` | `<div>` | Initiates the main container for the code **Required** |
| `.pf-c-code-snippet__code` | `<div>` | Initiates the container for the code editor e.g. Monaco. **Required** |
| `.pf-c-code-snippet__controls` | `<div>` | Initiates the code snippet controls. **Required** |
| `.pf-c-code-snippet__tab` | `<div>` | Initiates the code snippet tab. |
| `.pf-c-code-snippet__tab-text` | `<span>` | Initiates the code snippet tab text. |
| `.pf-c-code-snippet__tab-icon` | `<span>` | Initiates the code snippet tab icon. |
