---
id: Accessibility
section: foundations-and-styles
subsection: utility-classes
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
    This class unsets .pf-v6-u-screen-reader and .pf-v6-screen-reader. It will be visible.
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
[Breakpoints](/foundations-and-styles/design-tokens/all-patternfly-tokens) are optional. Breakpoint options include: base (no breakpoint value), `-on-sm`, `-on-md`, `-on-lg`, and `-on-xl`. Example: `.pf-v6-u-screen-reader-on-lg`

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-u-screen-reader{-on-[breakpoint]}` | `*` |  Visually hides element, but leaves accessible to assistive technologies |
| `.pf-v6-u-visible{-on-[breakpoint]}` | `*` |  Unsets `.pf-v6-u-screen-reader` and `.pf-v6-screen-reader` |
