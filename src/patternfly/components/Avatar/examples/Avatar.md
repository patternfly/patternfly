---
id: Avatar
section: components
cssPrefix: pf-v6-c-avatar
---

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

### Colorful default
Use a color modifier to add visual interest to the default avatar icon.
```hbs
{{> avatar--colorful avatar--modifier="pf-m-red" avatar--AltText="Avatar with color"}}
{{> avatar--colorful avatar--modifier="pf-m-orangered" avatar--AltText="Avatar with color"}}
{{> avatar--colorful avatar--modifier="pf-m-orange" avatar--AltText="Avatar with color"}}
{{> avatar--colorful avatar--modifier="pf-m-yellow" avatar--AltText="Avatar with color"}}
{{> avatar--colorful avatar--modifier="pf-m-green" avatar--AltText="Avatar with color"}}
{{> avatar--colorful avatar--modifier="pf-m-teal" avatar--AltText="Avatar with color"}}
{{> avatar--colorful avatar--modifier="pf-m-blue" avatar--AltText="Avatar with color"}}
{{> avatar--colorful avatar--modifier="pf-m-purple" avatar--AltText="Avatar with color"}}
{{> avatar--colorful avatar--modifier="" avatar--AltText="Avatar with color"}}
```

### Colorful initials
```hbs
{{> avatar--colorful avatar--Initial="C" avatar--modifier="pf-m-red" avatar--AltText="Initials with color"}}
{{> avatar--colorful avatar--Initial="C" avatar--modifier="pf-m-orangered" avatar--AltText="Initials with color"}}
{{> avatar--colorful avatar--Initial="C" avatar--modifier="pf-m-orange" avatar--AltText="Initials with color"}}
{{> avatar--colorful avatar--Initial="C" avatar--modifier="pf-m-yellow" avatar--AltText="Initials with color"}}
{{> avatar--colorful avatar--Initial="C" avatar--modifier="pf-m-green" avatar--AltText="Initials with color"}}
{{> avatar--colorful avatar--Initial="C" avatar--modifier="pf-m-teal" avatar--AltText="Initials with color"}}
{{> avatar--colorful avatar--Initial="C" avatar--modifier="pf-m-blue" avatar--AltText="Initials with color"}}
{{> avatar--colorful avatar--Initial="C" avatar--modifier="pf-m-purple" avatar--AltText="Initials with color"}}
{{> avatar--colorful avatar--Initial="C" avatar--AltText="Initials with color"}}
```

## Documentation
### Overview
The avatar component provides a default SVG icon. If an image is used it should be 36px by 36px.

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `alt` | `.pf-v6-c-avatar` | The alt attribute describes the appearance and function of the avatar image. **Required** |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-avatar` | `<img>` |  Initiates an avatar image. **Required** |
| `.pf-m-bordered` | `.pf-v6-c-avatar` | Modifies an avatar to have a border. |
| `.pf-m-sm{-on-[breakpoint]}` | `.pf-v6-c-avatar` | Modifies an avatar to be small on an optional [breakpoint](/foundations-and-styles/design-tokens/all-design-tokens). |
| `.pf-m-md{-on-[breakpoint]}` | `.pf-v6-c-avatar` | Modifies an avatar to be medium on an optional [breakpoint](/foundations-and-styles/design-tokens/all-design-tokens). **Note:** This is the default size. |
| `.pf-m-lg{-on-[breakpoint]}` | `.pf-v6-c-avatar` | Modifies an avatar to be large on an optional [breakpoint](/foundations-and-styles/design-tokens/all-design-tokens). |
| `.pf-m-xl{-on-[breakpoint]}` | `.pf-v6-c-avatar` | Modifies an avatar to be extra large on an optional [breakpoint](/foundations-and-styles/design-tokens/all-design-tokens). |
