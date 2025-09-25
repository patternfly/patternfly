---
id: Stack
section: foundations-and-styles
subsection: layouts
cssPrefix: pf-v6-l-stack
---

import './Stack.css'

## Examples
### Basic
```hbs
{{#> stack}}
  {{#> stack-item}}
    content
  {{/stack-item}}
  {{#> stack-item stack-item--modifier="pf-m-fill"}}
    pf-m-fill
  {{/stack-item}}
  {{#> stack-item}}
    content
  {{/stack-item}}
{{/stack}}
```

### With gutter
```hbs
{{#> stack stack--modifier="pf-m-gutter"}}
  {{#> stack-item}}
    content
  {{/stack-item}}
  {{#> stack-item stack-item--modifier="pf-m-fill"}}
    pf-m-fill
  {{/stack-item}}
  {{#> stack-item}}
    content
  {{/stack-item}}
{{/stack}}
```

## Documentation
### Overview
The stack layout is designed to position items vertically.

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-l-stack` | `*` | Initiates the stack layout.  |
| `.pf-v6-l-stack__item` | `*` | Initiates a stack item.  |
| `.pf-m-gutter` | `.pf-v6-l-stack` | Adds space between children by using the globally defined gutter value. |
| `.pf-m-fill` | `.pf-v6-l-stack > *`, `.pf-v6-l-stack__item` | Specifies which item(s) should fill the avaiable vertical space. |
