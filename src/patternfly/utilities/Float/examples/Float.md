---
id: Float
section: utility-classes
---

import './Float.css'

## Examples
### Basic
```hbs
{{#> float float--type="start"}}
  Float start
{{/float}}
{{#> float float--type="end"}}
  Float end
{{/float}}
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, odit fugit eaque ad assumenda fuga alias aut ipsum repudiandae enim pariatur ullam distinctio omnis dolorem at voluptatum saepe, beatae officiis?
</p>
```

## Documentation
### Overview
[Breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes) is optional. Breakpoints: base (no breakpoint value), `-on-sm`, `-on-md`, `-on-lg`, and `-on-xl`. **Example .pf-v6-u-text-start-on-lg**

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-u-float-start{-on-[breakpoint]}` | `*` |  Float element start |
| `.pf-v6-u-float-end{-on-[breakpoint]}` | `*` |  Float element end |
