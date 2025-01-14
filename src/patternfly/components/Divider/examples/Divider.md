---
id: Divider
section: components
cssPrefix: pf-v6-c-divider
---

import './Divider.css'

## Examples

### hr

```hbs
{{> divider}}
```

### li

```hbs
<ul role="list">
  <li>List item one</li>
  {{> divider divider--type="li"}}
  <li>List item two</li>
</ul>
```

### div
```hbs
{{> divider divider--type="div"}}
```

### Inset medium

```hbs
{{> divider divider--modifier="pf-m-inset-md"}}
```

### Md inset, no inset on md, 3xl inset on lg, lg inset on xl

```hbs
{{> divider divider--modifier="pf-m-inset-md pf-m-inset-none-on-md pf-m-inset-3xl-on-lg pf-m-inset-lg-on-xl"}}
```

### Vertical

```hbs
{{> divider divider--type="div" divider--modifier="pf-m-vertical"}}
```

### Vertical, inset medium

```hbs
{{> divider divider--type="div" divider--modifier="pf-m-vertical pf-m-inset-md"}}
```

### Vertical, md inset, no inset on md, lg inset on lg, sm inset on xl

```hbs
{{> divider divider--type="div" divider--modifier="pf-m-vertical pf-m-inset-md pf-m-inset-none-on-md pf-m-inset-lg-on-lg pf-m-inset-sm-on-xl"}}
```

### Vertical on lg

```hbs
{{> divider divider--type="div" divider--modifier="pf-m-horizontal pf-m-vertical-on-lg"}}
```

### Horizontal on lg

```hbs
{{> divider divider--type="div" divider--modifier="pf-m-horizontal-on-lg pf-m-vertical"}}
```

### In flex layout

```hbs
<strong>Horizontal</strong>
<br>
<br>
{{#> l-flex}}
  {{#> l-flex-item}}item 1{{/l-flex-item}}
  {{> divider divider--type="div" divider--modifier="pf-m-vertical"}}
  {{#> l-flex-item}}item 1{{/l-flex-item}}
{{/l-flex}}
<br>
<br>
<strong>Vertical</strong>
<br>
<br>
{{#> l-flex l-flex--modifier="pf-m-column"}}
  {{#> l-flex-item}}item 1{{/l-flex-item}}
  {{> divider divider--type="div"}}
  {{#> l-flex-item}}item 1{{/l-flex-item}}
{{/l-flex}}
```

## Documentation

### Overview

The divider renders as an `<hr>` by default. It is possible to make the divider render as an `li` or a `div` to match the HTML5 specification and context of the divider.

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role="separator"` | `li.pf-v6-c-divider`, `div.pf-v6-c-divider` | Indicates that the separator is a separator. |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-divider` | `<hr>`, `<li>`, `<div>` | Defines the divider component. |
| `.pf-m-vertical` | `.pf-v6-c-divider` | Modifies the divider component from horizontal to vertical. This modifier requires that the parent has an explicit or implicit height, or has a flex or grid based layout parent. |
| `.pf-m-inset-{none, sm, md, lg, xl, 2xl, 3xl}{-on-[sm, md, lg, xl, 2xl]}` | `.pf-v6-c-divider` | Modifies divider padding/inset to visually match padding of other adjacent components. |
| `.pf-m-hidden{-on-[breakpoint]}` | `.pf-v6-c-divider` | Modifies a divider to be hidden, at optional [breakpoint](/tokens/all-tokens). |
| `.pf-m-visible{-on-[breakpoint]}` | `.pf-v6-c-divider` | Modifies a divider to be shown, at optional [breakpoint](/tokens/all-tokens). |
