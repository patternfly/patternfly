---
id: Breadcrumb
section: components
cssPrefix: pf-v6-c-breadcrumb
---

## Examples

### Basic

```hbs
{{#> breadcrumb}}
  {{#> breadcrumb-list}}
    {{#> breadcrumb-item}}
      {{> breadcrumb-item-divider}}
      {{#> breadcrumb-link}}
        Section home
      {{/breadcrumb-link}}
    {{/breadcrumb-item}}
    {{#> breadcrumb-item}}
      {{> breadcrumb-item-divider}}
      {{#> breadcrumb-link}}
        Section title
      {{/breadcrumb-link}}
    {{/breadcrumb-item}}
    {{#> breadcrumb-item}}
      {{> breadcrumb-item-divider}}
      {{#> breadcrumb-link}}
        Section title
      {{/breadcrumb-link}}
    {{/breadcrumb-item}}
    {{#> breadcrumb-item}}
      {{> breadcrumb-item-divider}}
      {{#> breadcrumb-link breadcrumb-link--current="true"}}
        Section landing
      {{/breadcrumb-link}}
    {{/breadcrumb-item}}
  {{/breadcrumb-list}}
{{/breadcrumb}}
```

### Without home link

```hbs
{{#> breadcrumb}}
  {{#> breadcrumb-list}}
    {{#> breadcrumb-item}}
      {{> breadcrumb-item-divider}}
        Section home
    {{/breadcrumb-item}}
    {{#> breadcrumb-item}}
      {{> breadcrumb-item-divider}}
      {{#> breadcrumb-link}}
        Section title
      {{/breadcrumb-link}}
    {{/breadcrumb-item}}
    {{#> breadcrumb-item}}
      {{> breadcrumb-item-divider}}
      {{#> breadcrumb-link}}
        Section title
      {{/breadcrumb-link}}
    {{/breadcrumb-item}}
    {{#> breadcrumb-item}}
      {{> breadcrumb-item-divider}}
      {{#> breadcrumb-link}}
        Section title
      {{/breadcrumb-link}}
    {{/breadcrumb-item}}
    {{#> breadcrumb-item}}
      {{> breadcrumb-item-divider}}
      {{#> breadcrumb-link}}
        Section title
      {{/breadcrumb-link}}
    {{/breadcrumb-item}}
    {{#> breadcrumb-item}}
      {{> breadcrumb-item-divider}}
      {{#> breadcrumb-link breadcrumb-link--current="true"}}
        Section landing
      {{/breadcrumb-link}}
    {{/breadcrumb-item}}
  {{/breadcrumb-list}}
{{/breadcrumb}}
```

### With heading

```hbs
{{#> breadcrumb}}
  {{#> breadcrumb-list}}
    {{#> breadcrumb-item}}
      {{> breadcrumb-item-divider}}
      {{#> breadcrumb-link}}
        Section home
      {{/breadcrumb-link}}
    {{/breadcrumb-item}}
    {{#> breadcrumb-item}}
      {{> breadcrumb-item-divider}}
      {{#> breadcrumb-link}}
        Section title
      {{/breadcrumb-link}}
    {{/breadcrumb-item}}
    {{#> breadcrumb-item}}
      {{> breadcrumb-item-divider}}
      {{#> breadcrumb-link}}
        Section title
      {{/breadcrumb-link}}
    {{/breadcrumb-item}}
    {{#> breadcrumb-item}}
      {{> breadcrumb-item-divider}}
      {{#> breadcrumb-link}}
        Section title
      {{/breadcrumb-link}}
    {{/breadcrumb-item}}
    {{#> breadcrumb-item}}
      {{> breadcrumb-item-divider}}
      {{#> breadcrumb-heading}}
        {{#> breadcrumb-link breadcrumb-link--current="true"}}
          Section title
        {{/breadcrumb-link}}
      {{/breadcrumb-heading}}
    {{/breadcrumb-item}}
  {{/breadcrumb-list}}
{{/breadcrumb}}
```

### With menu dropdown

```hbs
{{#> breadcrumb breadcrumb--id="breadcrumb-with-menu-toggle-example"}}
  {{#> breadcrumb-list}}
    {{#> breadcrumb-item}}
      {{> breadcrumb-item-divider}}
      {{#> breadcrumb-link}}
        Section home
      {{/breadcrumb-link}}
    {{/breadcrumb-item}}
    {{#> breadcrumb-item}}
      {{> breadcrumb-item-divider}}
      {{#> breadcrumb-link}}
        Section title
      {{/breadcrumb-link}}
    {{/breadcrumb-item}}
    {{#> breadcrumb-item}}
      {{> breadcrumb-item-divider}}
      {{#> breadcrumb-dropdown}}
        {{#> menu-toggle menu-toggle--IsText=true menu-toggle--IsPlain=true menu-toggle--IsSmall=true}}
          {{#> menu-toggle-count}}
            {{#> badge badge--modifier="pf-m-unread"}}
              4
              <span class="pf-v6-screen-reader">additional items</span>
            {{/badge}}
          {{/menu-toggle-count}}
          {{#> menu-toggle-controls}}
            {{> menu-toggle-toggle-icon}}
          {{/menu-toggle-controls}}
        {{/menu-toggle}}
      {{/breadcrumb-dropdown}}
    {{/breadcrumb-item}}
    {{#> breadcrumb-item}}
      {{> breadcrumb-item-divider}}
      {{#> breadcrumb-heading}}
        {{#> breadcrumb-link breadcrumb-link--current="true"}}
          Section title
        {{/breadcrumb-link}}
      {{/breadcrumb-heading}}
    {{/breadcrumb-item}}
  {{/breadcrumb-list}}
{{/breadcrumb}}
```

### With buttons

```hbs
{{#> breadcrumb breadcrumb-link--IsButton="true"}}
  {{#> breadcrumb-list}}
    {{#> breadcrumb-item}}
      {{> breadcrumb-item-divider}}
      {{#> breadcrumb-link}}
        Section home
      {{/breadcrumb-link}}
    {{/breadcrumb-item}}
    {{#> breadcrumb-item}}
      {{> breadcrumb-item-divider}}
      {{#> breadcrumb-link}}
        Section title
      {{/breadcrumb-link}}
    {{/breadcrumb-item}}
    {{#> breadcrumb-item}}
      {{> breadcrumb-item-divider}}
      {{#> breadcrumb-link}}
        Section title
      {{/breadcrumb-link}}
    {{/breadcrumb-item}}
    {{#> breadcrumb-item}}
      {{> breadcrumb-item-divider}}
      {{#> breadcrumb-link breadcrumb-link--current="true"}}
        Section landing
      {{/breadcrumb-link}}
    {{/breadcrumb-item}}
  {{/breadcrumb-list}}
{{/breadcrumb}}
```

## Documentation

### Overview

A breadcrumb is a list of links to display a user's navigational hierarchy. The last item of the breadcrumb list indicates the current page's location.

- `.pf-v6-c-breadcrumb__list` is the default breadcrumb navigation. It provides links to previous navigation pages and also shows the current page's location.

In the event that a page does not have a traditional `<h1>` page title, a heading can be included in the breadcrumbs and an optional link within.

### Accessibility

| Attribute                             | Applied to                                               | Outcome                                           |
| ------------------------------------- | -------------------------------------------------------- | ------------------------------------------------- |
| `aria-label="[landmark description]"` | `.pf-v6-c-breadcrumb`                                    | Describes `<nav>` landmark.                       |
| `aria-label="[link name]"`            | `.pf-v6-c-breadcrumb__link`                              | If link has no text (icon), add an aria-label.    |
| `aria-current="page"`                 | `.pf-v6-c-breadcrumb__item`, `.pf-v6-c-breadcrumb__link` | Indicates the current page within a set of pages. |

### Usage

| Class                               | Applied to                  | Outcome                                                |
| ----------------------------------- | --------------------------- | ------------------------------------------------------ |
| `.pf-v6-c-breadcrumb`               | `<nav>`                     | Initiates a primary breadcrumb element. **Required**   |
| `.pf-v6-c-breadcrumb__list`         | `<ol>`                      | Initiates default breadcrumb ordered list.             |
| `.pf-v6-c-breadcrumb__item`         | `<li>`                      | Initiates default breadcrumb list item.                |
| `.pf-v6-c-breadcrumb__item-divider` | `<span>`                    | Initiates default breadcrumb list item divider.        |
| `.pf-v6-c-breadcrumb__link`         | `<a>`, `<button>`           | Initiates default breadcrumb list link.                |
| `.pf-v6-c-breadcrumb__title`        | `<h1>`                      | Initiates breadcrumb header.                           |
| `.pf-m-current`                     | `.pf-v6-c-breadcrumb__link` | Modifies to display the list item as the current item. |
