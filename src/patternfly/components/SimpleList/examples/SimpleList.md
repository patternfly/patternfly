---
title: Simple list
section: experimental
cssPrefix: pf-c-simple-list
---

## Examples
```hbs title=Simple-list
{{#> simple-list}}
  {{#> simple-list-list}}
    {{#> simple-list-item}}
    {{/simple-list-item}}
  {{/simple-list-list}}
{{/simple-list}}
```
```hbs title=Grouped-list
{{#> simple-list}}
  {{#> simple-list-section}}
    {{#> simple-list-section-title}}
    {{/simple-list-section-title}}
    {{#> simple-list-list}}
      {{#> simple-list-item}}
      {{/simple-list-item}}
    {{/simple-list-list}}
  {{/simple-list-section}}
{{/simple-list}}
```

## Documentation
### Overview

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |


### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-simple-list` | `<div>` | Initiates a simple list. |
| `.pf-c-simple-list__section` | `<section>` | Initiates a simple list section. |
| `.pf-c-simple-list__title` | `<h2>` | Initiates a simple list title. |
| `.pf-c-simple-list__list` | `<ul>` | Initiates a simple list unordered list. |
| `.pf-c-simple-list__item` | `<li>` | Initiates a simple list item. |
