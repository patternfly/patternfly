---
id: Avatar
section: components
cssPrefix: pf-c-avatar
---

import './Avatar.css'

## Examples
### Basic
```hbs
{{> avatar avatar--attribute='src="/assets/images/img_avatar-light.svg" alt="Avatar image"'}}
```

### Bordered - light
```hbs
{{> avatar avatar--modifier="pf-m-light" avatar--attribute='src="/assets/images/img_avatar-light.svg" alt="Avatar image light"'}}
```

### Bordered - dark
```hbs
{{> avatar avatar--modifier="pf-m-dark" avatar--attribute='src="/assets/images/img_avatar-dark.svg" alt="Avatar image dark"'}}
```

### Small
```hbs
{{> avatar avatar--modifier="pf-m-sm" avatar--attribute='src="/assets/images/img_avatar-light.svg" alt="Avatar image small"'}}
```

### Medium
```hbs
{{> avatar avatar--modifier="pf-m-md" avatar--attribute='src="/assets/images/img_avatar-light.svg" alt="Avatar image medium"'}}
```

### Large
```hbs
{{> avatar avatar--modifier="pf-m-lg" avatar--attribute='src="/assets/images/img_avatar-light.svg" alt="Avatar image large"'}}
```

### Extra large
```hbs
{{> avatar avatar--modifier="pf-m-xl" avatar--attribute='src="/assets/images/img_avatar-light.svg" alt="Avatar image extra large"'}}
```

### Extra extra large
```hbs
{{> avatar avatar--modifier="pf-m-2xl" avatar--attribute='src="/assets/images/img_avatar-light.svg" alt="Avatar image extra extra large"'}}
```

## Documentation
### Overview
The avatar component provides a default SVG icon. If an image is used it should be 36px by 36px.

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `alt` | `.pf-c-avatar` | The alt attribute specifies an alternate text for an image, if the image cannot be displayed. **Required** |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-avatar` | `<img>` |  Initiates an avatar image. **Required** |
| `.pf-m-light` | `.pf-c-avatar` | Modifies an avatar for use against a light background. |
| `.pf-m-dark` | `.pf-c-avatar` | Modifies an avatar for use against a dark background. |
| `.pf-m-md` | `.pf-c-avatar` | Modifies an avatar to be medium. |
| `.pf-m-lg` | `.pf-c-avatar` | Modifies an avatar to be large. **Note:** This is the default size. |
| `.pf-m-xl` | `.pf-c-avatar` | Modifies an avatar to be extra large. |
| `.pf-m-2xl` | `.pf-c-avatar` | Modifies an avatar to be extra extra large. |
