---
id: Avatar
section: components
cssPrefix: pf-v6-c-avatar
---

## Examples
### Basic
```hbs
{{> avatar}}
{{> avatar avatar--src="/assets/images/img_avatar-rhds.svg"}}
```

### Bordered
```hbs
{{> avatar avatar--modifier="pf-m-bordered" avatar--alt="Avatar image bordered"}}
{{> avatar avatar--modifier="pf-m-bordered" avatar--alt="Avatar image bordered" avatar--src="/assets/images/img_avatar-rhds.svg"}}
```

### Small
```hbs
{{> avatar avatar--modifier="pf-m-sm" avatar--alt="Avatar image small"}}
{{> avatar avatar--modifier="pf-m-sm" avatar--alt="Avatar image small" avatar--src="/assets/images/img_avatar-rhds.svg"}}
```

### Medium
```hbs
{{> avatar avatar--modifier="pf-m-md" avatar--alt="Avatar image medium"}}
{{> avatar avatar--modifier="pf-m-md" avatar--alt="Avatar image medium" avatar--src="/assets/images/img_avatar-rhds.svg"}}
```

### Large
```hbs
{{> avatar avatar--modifier="pf-m-lg" avatar--alt="Avatar image large"}}
{{> avatar avatar--modifier="pf-m-lg" avatar--alt="Avatar image large" avatar--src="/assets/images/img_avatar-rhds.svg"}}
```

### Extra large
```hbs
{{> avatar avatar--modifier="pf-m-xl" avatar--alt="Avatar image extra large"}}
{{> avatar avatar--modifier="pf-m-xl" avatar--alt="Avatar image extra large" avatar--src="/assets/images/img_avatar-rhds.svg"}}
```

### Colorful default
Use a color modifier to add visual interest to the default avatar icon.
```hbs
{{> avatar--colorful avatar--modifier="pf-m-red" avatar--aria-label="Red avatar with icon"}}
{{> avatar--colorful avatar--modifier="pf-m-orangered" avatar--aria-label="Orange-red avatar with icon"}}
{{> avatar--colorful avatar--modifier="pf-m-orange" avatar--aria-label="Orange avatar with icon"}}
{{> avatar--colorful avatar--modifier="pf-m-yellow" avatar--aria-label="Yellow avatar with icon"}}
{{> avatar--colorful avatar--modifier="pf-m-green" avatar--aria-label="Green avatar with icon"}}
{{> avatar--colorful avatar--modifier="pf-m-teal" avatar--aria-label="Teal avatar with icon"}}
{{> avatar--colorful avatar--modifier="pf-m-blue" avatar--aria-label="Blue avatar with icon"}}
{{> avatar--colorful avatar--modifier="pf-m-purple" avatar--aria-label="Purple avatar with icon"}}
{{> avatar--colorful avatar--modifier="pf-m-gray" avatar--aria-label="Gray avatar with icon"}}
```

### Colorful initials
Use a color modifier with a user's initial to add visual interest when no image is available.
```hbs
{{> avatar--colorful avatar--modifier="pf-m-red" avatar--initials="C" avatar--aria-label="Red avatar with initial"}}
{{> avatar--colorful avatar--modifier="pf-m-orangered" avatar--initials="C" avatar--aria-label="Orange-red avatar with initial"}}
{{> avatar--colorful avatar--modifier="pf-m-orange" avatar--initials="C" avatar--aria-label="Orange avatar with initial"}}
{{> avatar--colorful avatar--modifier="pf-m-yellow" avatar--initials="C" avatar--aria-label="Yellow avatar with initial"}}
{{> avatar--colorful avatar--modifier="pf-m-green" avatar--initials="C" avatar--aria-label="Green avatar with initial"}}
{{> avatar--colorful avatar--modifier="pf-m-teal" avatar--initials="C" avatar--aria-label="Teal avatar with initial"}}
{{> avatar--colorful avatar--modifier="pf-m-blue" avatar--initials="C" avatar--aria-label="Blue avatar with initial"}}
{{> avatar--colorful avatar--modifier="pf-m-purple" avatar--initials="C" avatar--aria-label="Purple avatar with initial"}}
{{> avatar--colorful avatar--modifier="pf-m-gray" avatar--aria-label="Gray avatar with initial" avatar--initials="C"}}
```

## Documentation
### Overview
The avatar component provides a default SVG icon. If an image is used it should be 36px by 36px.

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `alt` | `.pf-v6-c-avatar` | The alt attribute describes the appearance and function of the avatar image. **Required for image avatars** |
| `role="img"` | `.pf-v6-c-avatar` | Indicates the element represents an image. **Required for colorful avatars** |
| `aria-label` | `.pf-v6-c-avatar` | Provides an accessible name for the avatar. **Required for colorful avatars** |
| `aria-hidden="true"` | `.pf-v6-c-avatar__initials`, `<svg>` | Hides decorative content from screen readers when the container has `aria-label`. |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-avatar` | `<img>`, `<div>` |  Initiates an avatar. **Required** |
| `.pf-v6-c-avatar--colorful` | `.pf-v6-c-avatar` | Modifies an avatar to use colorful styling with a border. |
| `.pf-v6-c-avatar__initials` | `<span>` | Contains the user's initials in a colorful avatar. |
| `.pf-m-bordered` | `.pf-v6-c-avatar` | Modifies an avatar to have a border. |
| `.pf-m-sm{-on-[breakpoint]}` | `.pf-v6-c-avatar` | Modifies an avatar to be small on an optional [breakpoint](/foundations-and-styles/design-tokens/all-design-tokens). |
| `.pf-m-md{-on-[breakpoint]}` | `.pf-v6-c-avatar` | Modifies an avatar to be medium on an optional [breakpoint](/foundations-and-styles/design-tokens/all-design-tokens). **Note:** This is the default size. |
| `.pf-m-lg{-on-[breakpoint]}` | `.pf-v6-c-avatar` | Modifies an avatar to be large on an optional [breakpoint](/foundations-and-styles/design-tokens/all-design-tokens). |
| `.pf-m-xl{-on-[breakpoint]}` | `.pf-v6-c-avatar` | Modifies an avatar to be extra large on an optional [breakpoint](/foundations-and-styles/design-tokens/all-design-tokens). |
| `.pf-m-red` | `.pf-v6-c-avatar` |  Modifies avatar for red styling. |
| `.pf-m-orangered` | `.pf-v6-c-avatar` |  Modifies avatar for orangered styling. |
| `.pf-m-orange` | `.pf-v6-c-avatar` |  Modifies avatar for orange styling. |
| `.pf-m-yellow` | `.pf-v6-c-avatar` |  Modifies avatar for yellow styling. |
| `.pf-m-green` | `.pf-v6-c-avatar` |  Modifies avatar for green styling. |
| `.pf-m-teal` | `.pf-v6-c-avatar` |  Modifies avatar for teal styling. |
| `.pf-m-blue` | `.pf-v6-c-avatar` |  Modifies avatar for blue styling. |
| `.pf-m-purple` | `.pf-v6-c-avatar` |  Modifies avatar for purple styling. |
| `.pf-m-gray` | `.pf-v6-c-avatar` |  Modifies avatar for gray styling. |
