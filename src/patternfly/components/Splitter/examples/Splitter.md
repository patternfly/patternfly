---
title: Splitter
section: components
cssPrefix: pf-c-splitter
beta: true
---

import './Splitter.css'

## Examples
```hbs title=Default
{{#> splitter}}
  {{#> splitter-handle}}
  {{/splitter-handle}}
{{/splitter}}
```

```hbs title=Vertical
{{#> splitter splitter--IsVertical="true"}}
  {{#> splitter-handle}}
  {{/splitter-handle}}
{{/splitter}}
```


## Documentation
### Overview

### Accessibility
| Class | Applied to | Outcome |
| -- | -- | -- |
| `role="separator"` | `.pf-c-splitter` | Indicates that the splitter is a separator. **Required** |
| `tabindex="0"` | `.pf-c-splitter` | Inserts the splitter into the tab order of the page so that it is focusable. **Required** |
| `aria-orientation="horizontal"` | `.pf-c-splitter` | Indicates that the splitter is oriented horizontally. |
| `aria-orientation="vertical"` | `.pf-c-splitter.pf-m-vertical` | Indicates that the splitter is oriented vertically. |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-splitter` | `<div>` | Initiates the splitter component. **Required** |
| `.pf-c-splitter__handle` | `<div>` | Initiates the splitter handle element. |
| `.pf-m-vertical` |  `.pf-c-splitter` | Modifies the splitter component to be vertical. |