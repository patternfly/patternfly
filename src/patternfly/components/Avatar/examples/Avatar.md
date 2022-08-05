---
id: Avatar
section: components
cssPrefix: pf-c-avatar
---

import './Avatar.css'

## Examples
### Basic
```hbs
{{> avatar}}
```

### Bordered - light
```hbs
{{> avatar avatar--IsLight="true" avatar--AltText="Avatar image light"}}
```

### Bordered - dark
```hbs
{{> avatar avatar--IsDark="true" avatar--AltText="Avatar image dark"}}
```

### Small
```hbs
{{> avatar avatar--modifier="pf-m-sm" avatar--AltText="Avatar image small"}}
```

### Medium
```hbs
{{> avatar avatar--modifier="pf-m-md" avatar--AltText="Avatar image medium"}}
```

### Large
```hbs
{{> avatar avatar--modifier="pf-m-lg" avatar--AltText="Avatar image large"}}
```

### Extra large
```hbs
{{> avatar avatar--modifier="pf-m-xl" avatar--AltText="Avatar image extra large"}}
```

## Documentation
### Overview
The avatar component provides a default SVG icon. If an image is used it should be 36px by 36px.

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `alt` | `.pf-c-avatar` | The alt attribute describes the appearance and function of the avatar image. **Required** |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-avatar` | `<img>` |  Initiates an avatar image. **Required** |
| `.pf-m-light` | `.pf-c-avatar` | Modifies an avatar for use against a light background. |
| `.pf-m-dark` | `.pf-c-avatar` | Modifies an avatar for use against a dark background. |
| `.pf-m-sm{-on-[breakpoint]}` | `.pf-c-avatar` | Modifies an avatar to be small on an optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-md{-on-[breakpoint]}` | `.pf-c-avatar` | Modifies an avatar to be medium on an optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). **Note:** This is the default size. |
| `.pf-m-lg{-on-[breakpoint]}` | `.pf-c-avatar` | Modifies an avatar to be large on an optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-xl{-on-[breakpoint]}` | `.pf-c-avatar` | Modifies an avatar to be extra large on an optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
