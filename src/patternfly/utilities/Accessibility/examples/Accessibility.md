---
id: Accessibility
section: utility-classes
---

## Examples
### Screen reader only
```hbs
Content available only to screen reader, open inspector to investigate
{{#> accessibility accessibility--type="screen-reader"}}
    This content is intended to be announced by assistive technologies, but not visually presented.
{{/accessibility}}
```

### Visible
```hbs
{{#> accessibility accessibility--type="visible"}}
    This class unsets .pf-v5-u-screen-reader and .pf-v5-screen-reader. It will be visible.
{{/accessibility}}
```

### Hidden
```hbs
The text underneath is hidden.
{{#> accessibility accessibility--type="hidden"}}
  This text is hidden.
{{/accessibility}}
```

## Documentation
### Overview
[Breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes) is optional. Breakpoints: base (no breakpoint value), `-on-sm`, `-on-md`, `-on-lg`, and `-on-xl`. **Example .pf-v5-u-screen-reader-on-lg**

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-u-screen-reader{-on-[breakpoint]}` | `*` |  Visually hides element, but leaves accessible to assistive technologies |
| `.pf-v6-u-visible{-on-[breakpoint]}` | `*` |  Unsets `.pf-v6-u-screen-reader` and `.pf-v6-screen-reader` |
