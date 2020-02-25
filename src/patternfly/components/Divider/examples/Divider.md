---
title: Divider
section: components
cssPrefix: pf-c-divider
---

import './Divider.css'

## Examples
```hbs title=<hr>
{{> divider}}
```

```hbs title=<li>
<ul>
  <li>List item one</li>
  {{> divider divider--type="li"}}
  <li>List item two</li>
</ul>
```

```hbs title=<div>
{{> divider divider--type="div"}}
```

```hbs title=Insets
<div>No inset</div>
{{> divider divider--type="div"}}
<div>Small inset on sm</div>
{{> divider divider--type="div" divider--modifier="pf-m-inset-sm-on-sm"}}
<div>Large inset on md</div>
{{> divider divider--type="div" divider--modifier="pf-m-inset-sm-on-sm pf-m-inset-lg-on-md"}}
<div>2xl inset on lg</div>
{{> divider divider--type="div" divider--modifier="pf-m-inset-sm-on-sm pf-m-inset-xl-on-md pf-m-inset-2xl-on-lg"}}
```

```hbs title=Vertical
{{> divider divider--type="div" divider--modifier="pf-m-vertical"}}
```

```hbs title=Vertical-insets
<div>No inset</div>
{{> divider divider--type="div" divider--modifier="pf-m-vertical"}}
<div>Small inset on sm</div>
{{> divider divider--type="div" divider--modifier="pf-m-vertical pf-m-inset-sm-on-sm"}}
<div>Medium inset on md</div>
{{> divider divider--type="div" divider--modifier="pf-m-vertical pf-m-inset-sm-on-sm pf-m-inset-md-on-md"}}
```

## Documentation

### Overview
The divider renders as an `<hr>` by default. It is possible to make the divider render as an `li` or a `div` to match the HTML5 specification and context of the divider.

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role="separator"` | `li.pf-c-divider`, `div.pf-c-divider` | Indicates that the separator is a separator. |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-divider` | `<hr>`, `<li>`, `<div>` | Defines the divider component. |
| `.pf-m-vertical` | `.pf-c-divider` | Modifies the divider component from horizontal to vertical. This modifier requires that the parent has an explicit or implicit height, or has a flex or grid based layout parent. |
| `.pf-m-inset-{none, sm, md, lg, xl, 2xl, 3xl}{-on-[md, lg, xl, 2xl]}` | `.pf-c-divider` | Modifies a divider inset to match spacer system. |
