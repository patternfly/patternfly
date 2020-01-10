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
      {{#> simple-list-item-button}}
        List item 1
      {{/simple-list-item-button}}
    {{/simple-list-item}}
    {{#> simple-list-item}}
      {{#> simple-list-item-button}}
        List item 2
      {{/simple-list-item-button}}
    {{/simple-list-item}}
    {{#> simple-list-item}}
      {{#> simple-list-item-button}}
        List item 3
      {{/simple-list-item-button}}
    {{/simple-list-item}}
  {{/simple-list-list}}
{{/simple-list}}
```
```hbs title=Grouped-list
{{#> simple-list}}
  {{#> simple-list-section}}
    {{#> simple-list-title}}
       Title
    {{/simple-list-title}}
    {{#> simple-list-list}}
      {{#> simple-list-item}}
        {{#> simple-list-item-button}}
          List item 1
        {{/simple-list-item-button}}
      {{/simple-list-item}}
      {{#> simple-list-item}}
              {{#> simple-list-item-button}}
        List item 2
      {{/simple-list-item-button}}
      {{/simple-list-item}}
      {{#> simple-list-item}}
              {{#> simple-list-item-button}}
        List item 3
      {{/simple-list-item-button}}
      {{/simple-list-item}}
      {{#> simple-list-item}}
              {{#> simple-list-item-button}}
        List item 4
      {{/simple-list-item-button}}
      {{/simple-list-item}}
    {{/simple-list-list}}
  {{/simple-list-section}}
  {{#> simple-list-section}}
    {{#> simple-list-title}}
      Title
    {{/simple-list-title}}
    {{#> simple-list-list}}
      {{#> simple-list-item}}
              {{#> simple-list-item-button}}
        List item 1
      {{/simple-list-item-button}}
      {{/simple-list-item}}
      {{#> simple-list-item}}
              {{#> simple-list-item-button}}
        List item 2
      {{/simple-list-item-button}}
      {{/simple-list-item}}
      {{#> simple-list-item}}
              {{#> simple-list-item-button}}
        List item 3
      {{/simple-list-item-button}}
      {{/simple-list-item}}
      {{#> simple-list-item}}
              {{#> simple-list-item-button}}
        List item 4
      {{/simple-list-item-button}}
      {{/simple-list-item}}
    {{/simple-list-list}}
  {{/simple-list-section}}
{{/simple-list}}
```

## Documentation
### Overview

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-simple-list` | `<div>` | Initiates a simple list. |
| `.pf-c-simple-list__section` | `<section>` | Initiates a simple list section. |
| `.pf-c-simple-list__title` | `<h2>` | Initiates a simple list title. |
| `.pf-c-simple-list__list` | `<ul>` | Initiates a simple list unordered list. |
| `.pf-c-simple-list__item` | `<li>` | Initiates a simple list item. |
| `.pf-c-simple-list__item-button` | `<button>` | Initiates a simple list item button. |
| `.pf-m-hover` | `.pf-c-simple-list__item-button` | Modifies the simple list item button for the hovered state. |
| `.pf-m-active` | `.pf-c-simple-list__item-button` | Modifies the simple list item button for the active state. |
| `.pf-m-focus` | `.pf-c-simple-list__item-button` | Modifies the simple list item button for the focussed state. |
