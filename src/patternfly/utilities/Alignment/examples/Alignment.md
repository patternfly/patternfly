---
id: Alignment
section: foundations-and-styles
subsection: utility-classes
---

import './Alignment.css'

## Examples
### Basic
```hbs
{{#> alignment alignment--type="start"}}
  Text start
{{/alignment}}
{{#> alignment alignment--type="center"}}
  Text center
{{/alignment}}
{{#> alignment alignment--type="end"}}
  Text end
{{/alignment}}
{{#> alignment alignment--type="justify"}}
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris.
{{/alignment}}
```

## Documentation
### Overview
[Breakpoints](/foundations-and-styles/design-tokens/all-design-tokens) are optional. Breakpoint options include: base (no breakpoint value), `-on-sm`, `-on-md`, `-on-lg`, and `-on-xl`. Example: `.pf-v6-u-text-align-start-on-lg`

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-u-text-align-start{-on-[breakpoint]}` | `*` |  Aligns text start |
| `.pf-v6-u-text-align-center{-on-[breakpoint]}` | `*` |  Aligns text center |
| `.pf-v6-u-text-align-end{-on-[breakpoint]}` | `*` |  Aligns text end |
| `.pf-v6-u-text-align-justify{-on-[breakpoint]}` | `*` |  Aligns text justify |
