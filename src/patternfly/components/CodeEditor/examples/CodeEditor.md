---
id: Code editor
section: components
cssPrefix: pf-v6-c-code-editor
---

## Examples

### Default

```hbs
{{#> code-editor}}
  {{#> code-editor-header}}
    {{#> code-editor-header-content}}
      {{#> code-editor-controls}}
        {{> code-editor-controls--buttons}}
      {{/code-editor-controls}}
      {{> code-editor-header-main}}
    {{/code-editor-header-content}}
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
    {{#> code-editor-header-content}}
      {{#> code-editor-controls}}
        {{> code-editor-controls--buttons}}
      {{/code-editor-controls}}
      {{> code-editor-header-main}}
    {{/code-editor-header-content}}
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
{{> code-editor-template-no-actions}}
```

### Drag file and hover over component

```hbs
{{> code-editor-template-no-actions code-editor-main--modifier="pf-m-drag-hover"}}
```

### With optional header content and keyboard shortcuts

```hbs
{{#> code-editor}}
  {{#> code-editor-header}}
    {{#> code-editor-header-content}}
      {{#> code-editor-controls}}
        {{> code-editor-controls--buttons}}
      {{/code-editor-controls}}
      {{> code-editor-header-main code-editor-header-main--text="Header main content"}}
      {{#> code-editor-keyboard-shortcuts}}
        {{#> button button--IsLink=true button--icon="question-circle"}}
          View shortcuts
        {{/button}}
      {{/code-editor-keyboard-shortcuts}}
    {{/code-editor-header-content}}
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

### Usage

| Class                                      | Applied to | Outcome                                                                                       |
| ------------------------------------------ | ---------- | --------------------------------------------------------------------------------------------- |
| `.pf-v6-c-code-editor`                     | `<div>`    | Initiates the code editor component. **Required**                                             |
| `.pf-v6-c-code-editor__header`             | `<div>`    | Initiates the code editor header used for the controls and tab elements. **Required**         |
| `.pf-v6-c-code-editor__header-content`     | `<div>`    | Initiates the code editor header content used for the controls and tab elements. **Required** |
| `.pf-v6-c-code-editor__main`               | `<div>`    | Initiates the main container for a code editor e.g. Monaco **Required**                       |
| `.pf-v6-c-code-editor__code`               | `<div>`    | Initiates the container for code without a JS code editor. Comes with PatternFly styling.     |
| `.pf-v6-c-code-editor__controls`           | `<div>`    | Initiates the code editor controls.                                                           |
| `.pf-v6-c-code-editor__header-main`        | `<div>`    | Initiates the code editor header content area.                                                |
| `.pf-v6-c-code-editor__keyboard-shortcuts` | `<div>`    | Initiates the code editor header keyboard shortcuts area.                                     |
| `.pf-v6-c-code-editor__tab`                | `<div>`    | Initiates the code editor tab.                                                                |
| `.pf-v6-c-code-editor__tab-text`           | `<span>`   | Initiates the code editor tab text.                                                           |
| `.pf-v6-c-code-editor__tab-icon`           | `<span>`   | Initiates the code editor tab icon.                                                           |
| `.pf-v6-c-code-editor__upload`             | `<div>`    | Initiates the code editor upload border.                                                      |
