---
id: Code editor
section: components
cssPrefix: pf-v6-c-code-editor
---

import './CodeEditor.css';

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

### Without language tab

```hbs
{{#> code-editor}}
  {{#> code-editor-header}}
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
        {{#> button button--IsLink=true button--icon-template="icon-help"}}
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


### With optional code editor container 
This is an extra container used in React to prevent event propagation if upload is enabled or there is a provided empty state.

```hbs 
{{#> code-editor}}
  {{#> code-editor-container}}
  {{#> code-editor-header}}
    {{#> code-editor-header-content}}
      {{#> code-editor-controls}}
        {{> code-editor-controls--buttons}}
      {{/code-editor-controls}}
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
    {{#> code-editor-upload}}
      {{#> empty-state}}
        {{#> empty-state-header}}
          {{> empty-state-icon empty-state-icon--type="code"}}
          {{#> empty-state-title}}
            {{#> empty-state-title-text empty-state-title-text--element="h4"}}
              Start editing
            {{/empty-state-title-text}}
          {{/empty-state-title}}
        {{/empty-state-header}}

        {{#> empty-state-body}}
          Drag a file here or browse to upload.
        {{/empty-state-body}}

        {{#> empty-state-footer}}
          {{#> empty-state-actions}}
            {{#> button button--IsPrimary=true}}
              Browse
            {{/button}}
          {{/empty-state-actions}}
          {{#> empty-state-actions}}
            {{#> button button--IsLink=true}}
              Start from scratch
            {{/button}}
          {{/empty-state-actions}}
        {{/empty-state-footer}}
      {{/empty-state}}
    {{/code-editor-upload}}
  {{/code-editor-main}}
  {{/code-editor-container}}
{{/code-editor}}
```


### With full height modifier

```hbs
{{#> code-editor code-editor--modifier="pf-m-full-height"}}
  {{#> code-editor-header}}
    {{#> code-editor-header-content}}
      {{#> code-editor-controls}}
        {{> code-editor-controls--buttons}}
      {{/code-editor-controls}}
      {{> code-editor-header-main code-editor-header-main--text="Header main content"}}
      {{#> code-editor-keyboard-shortcuts}}
        {{#> button button--IsLink=true button--icon-template="icon-help"}}
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
| `.pf-v6-c-code-editor__header`             | `<div>`    | Initiates the code editor header used for the controls and tab elements. |
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
| `.pf-v6-c-code-editor__container`             | `<div>`    | Initiates the container used inside `.pf-v6-c-code-editor` in PatternFly React. This is used in PatternFly React to prevent event propagation if upload is enabled or there is a provided empty state.                                                      |
| `.pf-m-full-height`             | `.pf-v6-c-code-editor`    | Modifies for full-height style.                                                   |

