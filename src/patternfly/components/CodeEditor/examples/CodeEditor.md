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
  {{#> code-editor-header}}
    {{#> code-editor-controls}}
      {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Copy to clipboard"'}}
        <i class="fas fa-copy" aria-hidden="true"></i>
      {{/button}}
      {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Download code"'}}
        <i class="fas fa-download"></i>
      {{/button}}
      {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Upload code"'}}
        <i class="fas fa-upload"></i>
      {{/button}}
    {{/code-editor-controls}}
    {{> code-editor-header-main}}
    {{#> code-editor-tab}}
      {{#> code-editor-tab-icon}}
        <i class="fas fa-code"></i>
      {{/code-editor-tab-icon}}
      {{#> code-editor-tab-text}}
        HTML
      {{/code-editor-tab-text}}
    {{/code-editor-tab}}
  {{/code-editor-header}}
  {{#> code-editor-main}}
    {{#> code-editor-code}}
      {{#> code-editor-code-pre}}
        code goes here
      {{/code-editor-code-pre}}
    {{/code-editor-code}}
  {{/code-editor-main}}
{{/code-editor}}
```

### Read-only
```hbs
{{#> code-editor code-editor--modifier="pf-m-read-only"}}
  {{#> code-editor-header}}
    {{#> code-editor-controls}}
      {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Copy to clipboard"'}}
        <i class="fas fa-copy" aria-hidden="true"></i>
      {{/button}}
      {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Download code"'}}
        <i class="fas fa-download"></i>
      {{/button}}
      {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Upload code" disabled'}}
        <i class="fas fa-upload"></i>
      {{/button}}
    {{/code-editor-controls}}
    {{> code-editor-header-main}}
    {{#> code-editor-tab}}
      {{#> code-editor-tab-icon}}
        <i class="fas fa-code"></i>
      {{/code-editor-tab-icon}}
      {{#> code-editor-tab-text}}
        HTML
      {{/code-editor-tab-text}}
    {{/code-editor-tab}}
  {{/code-editor-header}}
  {{#> code-editor-main}}
    {{#> code-editor-code}}
      {{#> code-editor-code-pre}}
        code goes here
      {{/code-editor-code-pre}}
    {{/code-editor-code}}
  {{/code-editor-main}}
{{/code-editor}}
```

### Without actions
```hbs
{{#> code-editor}}
  {{#> code-editor-header}}
    {{> code-editor-header-main}}
    {{#> code-editor-tab}}
      {{#> code-editor-tab-icon}}
        <i class="fas fa-code"></i>
      {{/code-editor-tab-icon}}
      {{#> code-editor-tab-text}}
        YAML
      {{/code-editor-tab-text}}
    {{/code-editor-tab}}
  {{/code-editor-header}}
  {{#> code-editor-main}}
    {{#> empty-state empty-state--modifier="pf-m-lg"}}
      {{#> empty-state-icon}}
        <i class="fas fa-code"></i>
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
  {{/code-editor-main}}
{{/code-editor}}
```


### Drag file and hover over component
```hbs
{{#> code-editor}}
  {{#> code-editor-header}}
    {{> code-editor-header-main}}
    {{#> code-editor-tab}}
      {{#> code-editor-tab-icon}}
        <i class="fas fa-code"></i>
      {{/code-editor-tab-icon}}
      {{#> code-editor-tab-text}}
        YAML
      {{/code-editor-tab-text}}
    {{/code-editor-tab}}
  {{/code-editor-header}}
  {{#> code-editor-main code-editor-main--modifier="pf-m-drag-hover"}}
    {{#> empty-state empty-state--modifier="pf-m-lg"}}
      {{#> empty-state-icon}}
        <i class="fas fa-code"></i>
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
  {{/code-editor-main}}
{{/code-editor}}
```

### With optional header content and keyboard shortcuts
```hbs
{{#> code-editor}}
  {{#> code-editor-header}}
    {{#> code-editor-controls}}
      {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Copy to clipboard"'}}
        <i class="fas fa-copy" aria-hidden="true"></i>
      {{/button}}
      {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Download code"'}}
        <i class="fas fa-download"></i>
      {{/button}}
      {{#> button button--modifier="pf-m-control" button--attribute='aria-label="Upload code"'}}
        <i class="fas fa-upload"></i>
      {{/button}}
    {{/code-editor-controls}}
    {{> code-editor-header-main code-editor-header-main--text="Header main content"}}
    {{#> code-editor-keyboard-shortcuts}}
      {{#> button button--modifier="pf-m-link"}}
        {{#> button-icon button-icon--modifier="pf-m-start"}}
          <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
        {{/button-icon}}
        View shortcuts
      {{/button}}
    {{/code-editor-keyboard-shortcuts}}
    {{#> code-editor-tab}}
      {{#> code-editor-tab-icon}}
        <i class="fas fa-code"></i>
      {{/code-editor-tab-icon}}
      {{#> code-editor-tab-text}}
        HTML
      {{/code-editor-tab-text}}
    {{/code-editor-tab}}
  {{/code-editor-header}}
  {{#> code-editor-main}}
    {{#> code-editor-code}}
      {{#> code-editor-code-pre}}
        code goes here
      {{/code-editor-code-pre}}
    {{/code-editor-code}}
  {{/code-editor-main}}
{{/code-editor}}
```

## Documentation
### Overview

### Accessibility
| Class | Applied to | Outcome |
| -- | -- | -- |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-code-editor` | `<div>` | Initiates the code editor component. **Required** |
| `.pf-c-code-editor__header` | `<div>` | Initiates the code editor header used for the controls and tab elements. **Required** |
| `.pf-c-code-editor__main` | `<div>` | Initiates the main container for a code editor e.g. Monaco **Required** |
| `.pf-c-code-editor__code` | `<div>` | Initiates the container for code without a JS code editor. Comes with PatternFly styling. |
| `.pf-c-code-editor__controls` | `<div>` | Initiates the code editor controls. |
| `.pf-c-code-editor__header-main` | `<div>` | Initiates the code editor header content area. |
| `.pf-c-code-editor__keyboard-shortcuts` | `<div>` | Initiates the code editor header keyboard shortcuts area. |
| `.pf-c-code-editor__tab` | `<div>` | Initiates the code editor tab. |
| `.pf-c-code-editor__tab-text` | `<span>` | Initiates the code editor tab text. |
| `.pf-c-code-editor__tab-icon` | `<span>` | Initiates the code editor tab icon. |
