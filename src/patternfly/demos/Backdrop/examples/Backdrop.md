---
id: Backdrop
section: components
---

## Examples
### Basic
```hbs isFullscreen
{{> page-template page-template--id="page-demo-backdrop"}}
{{> backdrop}}
```

### Animated
Toggle the `.pf-m-show` class to see the show and hide animation.

```hbs isFullscreen isBeta
{{> page-template page-template--id="page-demo-backdrop-animated"}}
{{> backdrop backdrop--IsAnimate=true backdrop--IsShow=true}}
```
