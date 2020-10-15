---
id: Scrollspy
section: components
cssPrefix: pf-c-scrollspy
beta: true
---

## Examples
### Horizontal default
```hbs
{{#> scrollspy}}
  {{#> scrollspy-list}}
    {{#> scrollspy-item}}
      {{#> scrollspy-link}}
        {{#> scrollspy-item-text}}
          Inactive section
        {{/scrollspy-item-text}}
      {{/scrollspy-link}}
    {{/scrollspy-item}}
    {{#> scrollspy-item scrollspy-item--modifier="pf-m-current"}}
      {{#> scrollspy-link}}
        {{#> scrollspy-item-text}}
          Active section
        {{/scrollspy-item-text}}
      {{/scrollspy-link}}
    {{/scrollspy-item}}
    {{#> scrollspy-item}}
      {{#> scrollspy-link}}
        {{#> scrollspy-item-text}}
          Inactive section
        {{/scrollspy-item-text}}
      {{/scrollspy-link}}
    {{/scrollspy-item}}
  {{/scrollspy-list}}
{{/scrollspy}}
```

### Horizontal with background
```hbs
{{#> scrollspy scrollspy--modifier="pf-m-background pf-m-center"}}
  {{#> scrollspy-list}}
    {{#> scrollspy-item}}
      {{#> scrollspy-link}}
        {{#> scrollspy-item-text}}
          Inactive section
        {{/scrollspy-item-text}}
      {{/scrollspy-link}}
    {{/scrollspy-item}}
    {{#> scrollspy-item scrollspy-item--modifier="pf-m-current"}}
      {{#> scrollspy-link}}
        {{#> scrollspy-item-text}}
          Active section
        {{/scrollspy-item-text}}
      {{/scrollspy-link}}
    {{/scrollspy-item}}
    {{#> scrollspy-item}}
      {{#> scrollspy-link}}
        {{#> scrollspy-item-text}}
          Inactive section
        {{/scrollspy-item-text}}
      {{/scrollspy-link}}
    {{/scrollspy-item}}
  {{/scrollspy-list}}
{{/scrollspy}}
```

### Horizontal with label
```hbs
{{#> scrollspy}}
  {{#> scrollspy-main}}
    {{#> scrollspy-label}}
      Jump to section
    {{/scrollspy-label}}
    {{#> scrollspy-list}}
      {{#> scrollspy-item}}
        {{#> scrollspy-link}}
          {{#> scrollspy-item-text}}
            Inactive section
          {{/scrollspy-item-text}}
        {{/scrollspy-link}}
      {{/scrollspy-item}}
      {{#> scrollspy-item scrollspy-item--modifier="pf-m-current"}}
        {{#> scrollspy-link}}
          {{#> scrollspy-item-text}}
            Active section
          {{/scrollspy-item-text}}
        {{/scrollspy-link}}
      {{/scrollspy-item}}
      {{#> scrollspy-item}}
        {{#> scrollspy-link}}
          {{#> scrollspy-item-text}}
            Inactive section
          {{/scrollspy-item-text}}
        {{/scrollspy-link}}
      {{/scrollspy-item}}
    {{/scrollspy-list}}
  {{/scrollspy-main}}
{{/scrollspy}}
<br/>
{{#> scrollspy scrollspy--modifier="pf-m-background"}}
  {{#> scrollspy-main}}
    {{#> scrollspy-label}}
      Jump to section
    {{/scrollspy-label}}
    {{#> scrollspy-list}}
      {{#> scrollspy-item}}
        {{#> scrollspy-link}}
          {{#> scrollspy-item-text}}
            Inactive section
          {{/scrollspy-item-text}}
        {{/scrollspy-link}}
      {{/scrollspy-item}}
      {{#> scrollspy-item scrollspy-item--modifier="pf-m-current"}}
        {{#> scrollspy-link}}
          {{#> scrollspy-item-text}}
            Active section
          {{/scrollspy-item-text}}
        {{/scrollspy-link}}
      {{/scrollspy-item}}
      {{#> scrollspy-item}}
        {{#> scrollspy-link}}
          {{#> scrollspy-item-text}}
            Inactive section
          {{/scrollspy-item-text}}
        {{/scrollspy-link}}
      {{/scrollspy-item}}
    {{/scrollspy-list}}
  {{/scrollspy-main}}
{{/scrollspy}}
<br/>
{{#> scrollspy scrollspy--modifier="pf-m-center"}}
  {{#> scrollspy-main}}
    {{#> scrollspy-label}}
      Jump to section
    {{/scrollspy-label}}
    {{#> scrollspy-list}}
      {{#> scrollspy-item}}
        {{#> scrollspy-link}}
          {{#> scrollspy-item-text}}
            Inactive section
          {{/scrollspy-item-text}}
        {{/scrollspy-link}}
      {{/scrollspy-item}}
      {{#> scrollspy-item scrollspy-item--modifier="pf-m-current"}}
        {{#> scrollspy-link}}
          {{#> scrollspy-item-text}}
            Active section
          {{/scrollspy-item-text}}
        {{/scrollspy-link}}
      {{/scrollspy-item}}
      {{#> scrollspy-item}}
        {{#> scrollspy-link}}
          {{#> scrollspy-item-text}}
            Inactive section
          {{/scrollspy-item-text}}
        {{/scrollspy-link}}
      {{/scrollspy-item}}
    {{/scrollspy-list}}
  {{/scrollspy-main}}
{{/scrollspy}}
<br/>
{{#> scrollspy scrollspy--modifier="pf-m-background pf-m-center"}}
  {{#> scrollspy-main}}
    {{#> scrollspy-label}}
      Jump to section
    {{/scrollspy-label}}
    {{#> scrollspy-list}}
      {{#> scrollspy-item}}
        {{#> scrollspy-link}}
          {{#> scrollspy-item-text}}
            Inactive section
          {{/scrollspy-item-text}}
        {{/scrollspy-link}}
      {{/scrollspy-item}}
      {{#> scrollspy-item scrollspy-item--modifier="pf-m-current"}}
        {{#> scrollspy-link}}
          {{#> scrollspy-item-text}}
            Active section
          {{/scrollspy-item-text}}
        {{/scrollspy-link}}
      {{/scrollspy-item}}
      {{#> scrollspy-item}}
        {{#> scrollspy-link}}
          {{#> scrollspy-item-text}}
            Inactive section
          {{/scrollspy-item-text}}
        {{/scrollspy-link}}
      {{/scrollspy-item}}
    {{/scrollspy-list}}
  {{/scrollspy-main}}
{{/scrollspy}}
```

### Vertical default
```hbs
{{#> scrollspy scrollspy--modifier="pf-m-vertical"}}
  {{#> scrollspy-list}}
    {{#> scrollspy-item}}
      {{#> scrollspy-link}}
        {{#> scrollspy-item-text}}
          Inactive section
        {{/scrollspy-item-text}}
      {{/scrollspy-link}}
    {{/scrollspy-item}}
    {{#> scrollspy-item scrollspy-item--modifier="pf-m-current"}}
      {{#> scrollspy-link}}
        {{#> scrollspy-item-text}}
          Active section
        {{/scrollspy-item-text}}
      {{/scrollspy-link}}
    {{/scrollspy-item}}
    {{#> scrollspy-item}}
      {{#> scrollspy-link}}
        {{#> scrollspy-item-text}}
          Inactive section
        {{/scrollspy-item-text}}
      {{/scrollspy-link}}
    {{/scrollspy-item}}
    {{#> scrollspy-item}}
      {{#> scrollspy-link}}
        {{#> scrollspy-item-text}}
          Inactive section
        {{/scrollspy-item-text}}
      {{/scrollspy-link}}
    {{/scrollspy-item}}
    {{#> scrollspy-item}}
      {{#> scrollspy-link}}
        {{#> scrollspy-item-text}}
          Inactive section
        {{/scrollspy-item-text}}
      {{/scrollspy-link}}
    {{/scrollspy-item}}
  {{/scrollspy-list}}
{{/scrollspy}}
```

### Vertical with label
```hbs
{{#> scrollspy scrollspy--modifier="pf-m-vertical"}}
  {{#> scrollspy-label}}
    Jump to section
  {{/scrollspy-label}}
  {{#> scrollspy-list}}
    {{#> scrollspy-item}}
      {{#> scrollspy-link}}
        {{#> scrollspy-item-text}}
          Inactive section
        {{/scrollspy-item-text}}
      {{/scrollspy-link}}
    {{/scrollspy-item}}
    {{#> scrollspy-item scrollspy-item--modifier="pf-m-current"}}
      {{#> scrollspy-link}}
        {{#> scrollspy-item-text}}
          Active section
        {{/scrollspy-item-text}}
      {{/scrollspy-link}}
    {{/scrollspy-item}}
    {{#> scrollspy-item}}
      {{#> scrollspy-link}}
        {{#> scrollspy-item-text}}
          Inactive section
        {{/scrollspy-item-text}}
      {{/scrollspy-link}}
    {{/scrollspy-item}}
    {{#> scrollspy-item}}
      {{#> scrollspy-link}}
        {{#> scrollspy-item-text}}
          Inactive section
        {{/scrollspy-item-text}}
      {{/scrollspy-link}}
    {{/scrollspy-item}}
    {{#> scrollspy-item}}
      {{#> scrollspy-link}}
        {{#> scrollspy-item-text}}
          Inactive section
        {{/scrollspy-item-text}}
      {{/scrollspy-link}}
    {{/scrollspy-item}}
  {{/scrollspy-list}}
{{/scrollspy}}
```

### Vertical with subsections
```hbs
{{#> scrollspy scrollspy--modifier="pf-m-vertical"}}
  {{#> scrollspy-label}}
    Jump to section
  {{/scrollspy-label}}
  {{#> scrollspy-list}}
    {{#> scrollspy-item}}
      {{#> scrollspy-link}}
        {{#> scrollspy-item-text}}
          Inactive section
        {{/scrollspy-item-text}}
      {{/scrollspy-link}}
    {{/scrollspy-item}}
    {{#> scrollspy-item scrollspy-item--modifier="pf-m-current"}}
      {{#> scrollspy-link}}
        {{#> scrollspy-item-text}}
          Active expandable section
        {{/scrollspy-item-text}}
        {{#> scrollspy-link scrollspy-link--modifier="pf-m-subsection"}}
          {{#> scrollspy-item-text}}
            Inactive subsection
          {{/scrollspy-item-text}}
        {{/scrollspy-link}}
        {{#> scrollspy-link scrollspy-link--modifier="pf-m-subsection pf-m-current"}}
          {{#> scrollspy-item-text}}
            Active subsection
          {{/scrollspy-item-text}}
        {{/scrollspy-link}}
      {{/scrollspy-link}}
    {{/scrollspy-item}}
    {{#> scrollspy-item}}
      {{#> scrollspy-link}}
        {{#> scrollspy-item-text}}
          Inactive section
        {{/scrollspy-item-text}}
      {{/scrollspy-link}}
    {{/scrollspy-item}}
    {{#> scrollspy-item}}
      {{#> scrollspy-link}}
        {{#> scrollspy-item-text}}
          Inactive section
        {{/scrollspy-item-text}}
      {{/scrollspy-link}}
    {{/scrollspy-item}}
    {{#> scrollspy-item}}
      {{#> scrollspy-link}}
        {{#> scrollspy-item-text}}
          Inactive section
        {{/scrollspy-item-text}}
      {{/scrollspy-link}}
    {{/scrollspy-item}}
  {{/scrollspy-list}}
{{/scrollspy}}
```

## Documentation
### Overview

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| | | |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-scrollspy` | `<div>` | Initiates the scrollspy container. |
| `.pf-c-scrollspy__main` | `<div>` | Initiates the scrollspy main container for when a label and list is used in the horizontal variation. |
| `.pf-c-scrollspy__list` | `<ul>` | Initiates the scrollspy list. |
| `.pf-c-scrollspy__item` | `<li>` | Initiates the scrollspy list item. |
| `.pf-c-scrollspy__link` | `<button>` | Initiates the scrollspy link. |
| `.pf-c-scrollspy__label` | `<div>` | Initiates the scrollspy label. |
| `.pf-c-scrollspy__item-text` | `<div>` | Initiates the scrollspy item text. |
| `.pf-m-vertical` | `.pf-c-scrollspy` | Modifies the scrollspy component to be vertical. |
| `.pf-m-current` | `.pf-c-scrollspy__item`, `.pf-c-scrollspy__link.pf-m-subsection` | Modifies the scrollspy item to be current. |
| `.pf-m-subsection` | `.pf-c-scrollspy__link` | Modifies the scrollspy link to be a subsection. |
| `.pf-m-background` | `.pf-c-scrollspy` | Modifies the scrollspy component to have a background. |
| `.pf-m-center` | `.pf-c-scrollspy` | Modifies the scrollspy component to center its list and label. |

