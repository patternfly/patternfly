---
id: Backdrop
section: components
cssPrefix: pf-v6-c-backdrop
---

## Examples
### Basic
```hbs isFullscreen
{{> backdrop}}
```

### Animated
Toggle the `.pf-m-show` class to see the show and hide animation.

```hbs isFullscreen isBeta
{{> backdrop backdrop--IsAnimate=true backdrop--IsShow=true}}
```

## Documentation
### Overview
This component puts a backdrop over the entire viewport.

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-backdrop` | `<div>` |  Initiates backdrop. **Required** |
| `.pf-v6-c-backdrop__open` | `<body>` |  Lock scrolling when backdrop is active. This class should be set on `<body>` while backdrop is active and removed while backdrop is inactive. **Required** |
| `.pf-m-animate` | `.pf-v6-c-backdrop` | Enables animation support for fading the backdrop in and out. |
| `.pf-m-show` | `.pf-v6-c-backdrop.pf-m-animate` | Used to show/hide the backdrop when using `.pf-m-animate`. |
