---
title: Divider
section: components
cssPrefix: pf-c-divider
---

## Examples
```hbs title=<hr>
{{#> divider}}{{/divider}}
```

```hbs title=<li>
<ul>
  <li>List item one</li>
  {{#> divider divider--type="li"}}{{/divider}}
  <li>List item two</li>
</ul>
```

```hbs title=<div>
{{#> divider divider--type="div"}}{{/divider}}
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
