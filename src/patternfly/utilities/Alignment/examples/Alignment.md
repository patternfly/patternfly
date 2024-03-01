---
id: Alignment
section: utility-classes
---

import './Alignment.css'

## Examples
### Basic
```hbs
{{#> alignment alignment--type="left"}}
  Text left
{{/alignment}}
{{#> alignment alignment--type="center"}}
  Text center
{{/alignment}}
{{#> alignment alignment--type="right"}}
  Text right
{{/alignment}}
{{#> alignment alignment--type="justify"}}
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris.
{{/alignment}}
```

## Documentation
### Overview
[Breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes) is optional. Breakpoints: base (no breakpoint value), `-on-sm`, `-on-md`, `-on-lg`, and `-on-xl`. **Example .pf-v5-u-text-left-on-lg**

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-u-text-align-left{-on-[breakpoint]}` | `*` |  Aligns text left |
| `.pf-v6-u-text-align-center{-on-[breakpoint]}` | `*` |  Aligns text center |
| `.pf-v6-u-text-align-right{-on-[breakpoint]}` | `*` |  Aligns text right |
| `.pf-v6-u-text-align-justify{-on-[breakpoint]}` | `*` |  Aligns text justify |
