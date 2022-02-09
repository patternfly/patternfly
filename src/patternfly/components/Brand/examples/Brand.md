---
id: Brand
section: components
---

## Examples
### Basic
```hbs
{{> brand brand--attribute='src="/assets/images/pf_logo.svg" alt="PatternFly logo"'}}
```

### Responsive
```hbs
{{> brand
  brand--attribute='style="--pf-c-brand--Width: 40px; --pf-c-brand--Width-on-sm: 60px; --pf-c-brand--Width-on-md: 220px;"'
  brand--IsPicture="true"
  brand--img-url='/assets/images/pf-c-brand__logo.svg'
  brand--img-url-on-sm='/assets/images/pf-c-brand__logo-on-sm.svg'
  brand--img-url-on-md='/assets/images/pf-c-brand__logo-on-md.svg'
  brand--img-url-on-lg='/assets/images/pf-c-brand__logo-on-lg.svg'
  brand--img-url-on-xl='/assets/images/pf-c-brand__logo-on-xl.svg'}}
```

## Documentation
### Overview
Simple brand component.

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `alt` | `.pf-c-brand` | The alt attribute specifies an alternate text for an image, if the image cannot be displayed. **Required** |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-brand` | `<img>, <picture>` |  Initiates a brand image. **Required** |
| `.pf-m-picture` | `.pf-c-brand` |  Modifies a brand image to a picture. |
| `--pf-c-brand--Width{-on-[breakpoint]}: {width}` | `.pf-c-brand` |  Modifies the width value of a picture on optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `--pf-c-brand--Height{-on-[breakpoint]}: {height}` | `.pf-c-brand` |  Modifies the height value of a picture on optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
