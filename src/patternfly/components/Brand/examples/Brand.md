---
id: Brand
section: components
---

import './Brand.css'

## Examples
### Basic
```hbs
<div class="show-light">
{{> brand
  brand--attribute='src="/assets/images/PF-HorizontalLogo-Color.svg" alt="PatternFly logo"'
}}
</div>

<div class="show-dark">
{{> brand
  brand--attribute='src="/assets/images/PF-HorizontalLogo-Reverse.svg" alt="PatternFly logo"' brand--IsDark="true"
}}
</div>
```

### Responsive
```hbs
<div class="show-light">
{{> brand
  brand--attribute='style="--pf-v6-c-brand--Width: 37px; --pf-v6-c-brand--Width-on-md: 220px;"'
  brand--IsPicture="true"
  brand--img-url='/assets/images/PF-IconLogo-color.svg'
  brand--img-url-on-md='/assets/images/PF-HorizontalLogo-Color.svg'
}}
</div>

<div class="show-dark">
{{> brand
  brand--IsDark="true"
  brand--attribute='style="--pf-v6-c-brand--Width: 37px; --pf-v6-c-brand--Width-on-md: 220px;"'
  brand--IsPicture="true"
  brand--img-url='/assets/images/PF-IconLogo-Reverse.svg'
  brand--img-url-on-md='/assets/images/PF-HorizontalLogo-Reverse.svg'
}}
</div>
```

## Documentation
### Overview
Simple brand component.

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `alt` | `.pf-v6-c-brand` | The alt attribute specifies an alternate text for an image, if the image cannot be displayed. **Required** |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-brand` | `<img>, <picture>` |  Initiates a brand image. **Required** |
| `.pf-m-picture` | `.pf-v6-c-brand` |  Modifies a brand image to a picture. |
| `--pf-v6-c-brand--Width{-on-[breakpoint]}: {width}` | `.pf-v6-c-brand` |  Modifies the width value of a picture on optional [breakpoint](/tokens/all-tokens). |
| `--pf-v6-c-brand--Height{-on-[breakpoint]}: {height}` | `.pf-v6-c-brand` |  Modifies the height value of a picture on optional [breakpoint](/tokens/all-tokens). |
