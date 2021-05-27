---
id: Width limiter
section: utilities
beta: true
---

import './WidthLimiter.css'

## Examples

### Min width
```hbs
{{#> width-limiter width-limiter--attribute='style="--pf-u-width-limiter--MinWidth: 50ch;"'}}
  <div class="width-limiter-example">
    Min-width 50ch example
  </div>
{{/width-limiter}}
```

### Max width
```hbs
{{#> width-limiter width-limiter--attribute='style="--pf-u-width-limiter--MaxWidth: 50ch;"'}}
  <div class="width-limiter-example">
    Max-width 50ch example
  </div>
{{/width-limiter}}
```

### Min and max width
```hbs
{{#> width-limiter width-limiter--attribute='style="--pf-u-width-limiter--MinWidth: 30ch; --pf-u-width-limiter--MaxWidth: 50ch;"'}}
  <div class="width-limiter-example">
    Min-width 30ch, max-width 50ch example
  </div>
{{/width-limiter}}
```

### Responsive width control
```hbs
{{#> width-limiter width-limiter--attribute='style="--pf-u-width-limiter--MinWidth: 20ch; --pf-u-width-limiter--MaxWidth: 30ch; --pf-u-width-limiter--MaxWidth-on-md: 50ch; --pf-u-width-limiter--MaxWidth-on-xl: 70ch;"'}}
  <div class="width-limiter-example">
    Min-width 20ch, max-width 30ch, max-width-on-md 50ch, max-width-on-xl 70ch example
  </div>
{{/width-limiter}}
```

## Documentation

### Usage

| Class                                                       | Applied to            | Outcome                       |
| ----------------------------------------------------------- | --------------------- | ----------------------------- |
| `--pf-u-width-limiter--MinWidth{-on-[breakpoint]}: {width}` | `.pf-u-width-limiter` | Modifies the min width value. |
| `--pf-u-width-limiter--MaxWidth{-on-[breakpoint]}: {width}` | `.pf-u-width-limiter` | Modifies the max width value. |
