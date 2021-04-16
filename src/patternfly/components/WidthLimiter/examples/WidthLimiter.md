---
id: 'Width limiter'
beta: true
section: components
cssPrefix: pf-c-width-limiter
---

## Examples

### Min width
```hbs
{{> width-limiter width-limiter--attribute='style="--pf-c-width-limiter--MinWidth: 50ch;"'}}
```

### Max width
```hbs
{{> width-limiter width-limiter--attribute='style="--pf-c-width-limiter--MaxWidth: 50ch;"'}}
```

### Min and max width
```hbs
{{> width-limiter width-limiter--attribute='style="--pf-c-width-limiter--MinWidth: 30ch; --pf-c-width-limiter--MaxWidth: 50ch;"'}}
```

### Responsive width control
```hbs
{{> width-limiter width-limiter--attribute='style="--pf-c-width-limiter--MinWidth: 20ch; --pf-c-width-limiter--MaxWidth: 30ch; --pf-c-width-limiter--MaxWidth-on-md: 50ch; --pf-c-width-limiter--MaxWidth-on-xl: 70ch;"'}}
```

## Documentation

### Usage
| Class | Applied to | Outcome |
| `--pf-c-width-limiter--MinWidth{-on-[breakpoint]}: {width}` | `.pf-c-width-limiter` | Modifies the min width value. |
| `--pf-c-width-limiter--MaxWidth{-on-[breakpoint]}: {width}` | `.pf-c-width-limiter` | Modifies the max width value. |
