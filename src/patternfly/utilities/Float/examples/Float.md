---
id: Float
section: foundations-and-styles
subsection: utility-classes
---

import './Float.css'

## Examples
### Basic
```hbs
{{#> float float--type="inline-start"}}
  Float inline-start
{{/float}}
{{#> float float--type="inline-end"}}
  Float inline-end
{{/float}}
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, odit fugit eaque ad assuminline-enda fuga alias aut ipsum repudiandae enim pariatur ullam distinctio omnis dolorem at voluptatum saepe, beatae officiis?
</p>
```

## Documentation
### Overview
[Breakpoints](/foundations-and-styles/design-tokens/all-design-tokens) are optional. Breakpoint options include: base (no breakpoint value), `-on-sm`, `-on-md`, `-on-lg`, and `-on-xl`. Example: `.pf-v6-u-float-inline-start-on-lg`

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-u-float-inline-start{-on-[breakpoint]}` | `*` |  Float element inline-start |
| `.pf-v6-u-float-inline-end{-on-[breakpoint]}` | `*` |  Float element inline-end |
