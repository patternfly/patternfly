---
id: Resize Observer
section: components
cssPrefix: pf-v5-c-resize-observer
---

import './ResizeObserver.css'
import './ResizeObserver.js'

## Examples
### Basic
```hbs

{{#> resize-observer
     resize-observer--modifier="test"
     resize-observer--id='basic-example1'
     resize-observer--data-size-sm='0'
     resize-observer--data-size-md='300'
     resize-observer--data-size-lg='600'
     resize-observer--data-size-xl='750'
     resize-observer--data-size-custom='1200'
  }}
  {{> masthead-example}}
  {{#each (exampleObject)}}
    {{@key}}
    {{this.name}}
  {{/each}}
{{/resize-observer}}
{{#> resize-observer
     resize-observer--id='basic-example2'
     resize-observer--data-size-sm='0'
     resize-observer--data-size-md='650'
     resize-observer--data-size-lg='850'
     resize-observer--data-size-xl='950'
  }}
  {{> masthead-example}}
  {{#each (exampleObject)}}
    {{@key}}
    {{this.name}}
  {{/each}}
{{/resize-observer}}
{{#> resize-observer
     resize-observer--id='basic-example3'
     resize-observer--data-size-sm='0'
     resize-observer--data-size-md='250'
     resize-observer--data-size-lg='450'
     resize-observer--data-size-lg='550'
  }}
  {{> masthead-example}}
  {{#each (exampleObject)}}
    {{@key}}
    {{this.name}}
  {{/each}}
{{/resize-observer}}
{{#> resize-observer
     resize-observer--id='basic-example4'
     resize-observer--data-size-sm='0'
     resize-observer--data-size-md='750'
  }}
  {{> masthead-example}}
  {{#each (exampleObject)}}
    {{@key}}
    {{this.name}}
  {{/each}}
{{/resize-observer}}
{{#> resize-observer
     resize-observer--id='basic-example5'
     resize-observer--data-size-sm='0'
     resize-observer--data-size-md='750'
  }}
  {{> masthead-example}}
  {{#each (exampleObject)}}
    {{@key}}
    {{this.name}}
  {{/each}}
{{/resize-observer}}
{{#> resize-observer
     resize-observer--id='basic-example6'
     resize-observer--data-size-sm='0'
     resize-observer--data-size-md='750'
     resize-observer--data-size-xxl='1750'
  }}
  {{> masthead-example}}
  {{#each (exampleObject)}}
    {{@key}}
    {{this.name}}
  {{/each}}
{{/resize-observer}}
{{#> resize-observer
     resize-observer--id='basic-example7'
     resize-observer--data-size-sm='10'
     resize-observer--data-size-md='850'
     resize-observer--data-size-xl='1850'
  }}
  {{> masthead-example}}
  {{#each (exampleObject)}}
    {{@key}}
    {{this.name}}
  {{/each}}
{{/resize-observer}}
{{#> resize-observer
     resize-observer--id='basic-example8'
     resize-observer--data-size-md='750'
  }}
  {{> masthead-example}}
  {{#each (exampleObject)}}
    {{@key}}
    {{this.name}}
  {{/each}}
{{/resize-observer}}
```



## Documentation
### Overview
The resize observer component provides...

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `data-` | `.pf-v5-c-resize-observer` | Description... |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-c-resize-observer` | `<div>` |  Initiates a resize observer. **Required** |
