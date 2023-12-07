---
id: Avatar
section: components
cssPrefix: pf-v5-c-avatar
---

import './Avatar.css'

## Examples
### Basic
```hbs
{{> avatar}}
```

### Bordered
```hbs
{{> avatar avatar--modifier="pf-m-bordered" avatar--AltText="Avatar image bordered"}}
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
| `alt` | `.pf-v5-c-avatar` | The alt attribute describes the appearance and function of the avatar image. **Required** |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-c-avatar` | `<img>` |  Initiates an avatar image. **Required** |
| `.pf-m-bordered` | `.pf-v5-c-avatar` | Modifies an avatar to have a border. |
| `.pf-m-sm{-on-[breakpoint]}` | `.pf-v5-c-avatar` | Modifies an avatar to be small on an optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-md{-on-[breakpoint]}` | `.pf-v5-c-avatar` | Modifies an avatar to be medium on an optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). **Note:** This is the default size. |
| `.pf-m-lg{-on-[breakpoint]}` | `.pf-v5-c-avatar` | Modifies an avatar to be large on an optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `.pf-m-xl{-on-[breakpoint]}` | `.pf-v5-c-avatar` | Modifies an avatar to be extra large on an optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
