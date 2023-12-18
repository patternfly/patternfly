---
id: Brand
section: components
---

import './Brand.css'

## Examples
### Inline SVG
```hbs
{{> brand
  brand--IsSVG=true
  brand--attribute='style="--pf-v5-c-brand--Width: 150px; --pf-v5-c-brand--Width-on-md: 300px;"'
  brand--AltText="PatternFly inline SVG logo"
}}
```

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
  brand--attribute='style="--pf-v5-c-brand--Width: 40px; --pf-v5-c-brand--Width-on-md: 220px;"'
  brand--IsPicture="true"
  brand--img-url='/assets/images/PF-IconLogo-color.svg'
  brand--img-url-on-md='/assets/images/PF-HorizontalLogo-Color.svg'
}}
</div>

<div class="show-dark">
{{> brand
  brand--IsDark="true"
  brand--attribute='style="--pf-v5-c-brand--Width: 40px; --pf-v5-c-brand--Width-on-md: 220px;"'
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
| `alt` | `.pf-v5-c-brand` | The alt attribute specifies an alternate text for an image, if the image cannot be displayed. **Required** |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-c-brand` | `<img>, <picture>, <svg>` |  Initiates a brand image. **Required** |
| `.pf-m-picture` | `.pf-v5-c-brand` |  Modifies a brand image to a picture. |
| `--pf-v5-c-brand--Width{-on-[breakpoint]}: {width}` | `.pf-v5-c-brand` |  Modifies the width value of a picture on optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `--pf-v5-c-brand--Height{-on-[breakpoint]}: {height}` | `.pf-v5-c-brand` |  Modifies the height value of a picture on optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
