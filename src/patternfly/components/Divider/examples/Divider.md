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
  {{> divider divider--type="li" divider--modifier="pf-m-inset-2xl"}}
  <li>List item two</li>
</ul>
```

```hbs title=<div>
{{> divider divider--type="div"}}
```

```hbs title=Vertical
{{#> button}}testing{{/button}}
{{> divider divider--type="div" divider--modifier="pf-m-vertical"}}
{{#> button}}testing{{/button}}
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
| `.pf-m-stretch` | `.pf-m-vertical` | Modifies the vertical divider to stretch to full height. |
