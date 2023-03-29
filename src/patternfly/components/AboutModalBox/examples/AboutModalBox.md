---
id: About modal
section: components
cssPrefix: pf-c-about-modal-box
---

## Examples
### Basic
```hbs isFullscreen
{{#> about-modal-box}}
  {{#> about-modal-box-brand}}
    {{> about-modal-box-brand-image about-modal-box-brand-image--attribute='src="/assets/images/pf_mini_logo_white.svg" alt="PatternFly brand logo"'}}
  {{/about-modal-box-brand}}
  {{#> about-modal-box-close}}
    {{#> button button--attribute='aria-label="Close dialog"' button--modifier="pf-m-plain"}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
  {{/about-modal-box-close}}
  {{#> about-modal-box-header}}
    {{#> title titleType="h1" title--modifier="pf-m-4xl" title--attribute='id="about-modal-title"'}}
      Product name
    {{/title}}
  {{/about-modal-box-header}}
  {{#> about-modal-box-content}}
    {{#> about-modal-box-body}}
      content
    {{/about-modal-box-body}}
    {{#> about-modal-box-strapline}}
      Trademark and copyright information here
    {{/about-modal-box-strapline}}
  {{/about-modal-box-content}}
{{/about-modal-box}}
```

## Documentation
### Accessibility
| Attribute | Applies to | Outcome |
| -- | -- | -- |
| `aria-label="Close Dialog"` | `.pf-c-modal-box__close .pf-c-button` | Provides an accessible name for the close button as it uses an icon instead of text. **Required** |

### Customizing the background image
In order to use a custom image, pass a new value to the `--pf-c-about-modal-box--BackgroundImage` CSS variable. For example:

```css
--pf-c-about-modal-box--BackgroundImage: url("custom/image/path");
```

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-about-modal-box` |  `<div>`, `<article>`  |  Initiates a modal box. |
| `.pf-c-about-modal-box__brand` |  `<div>` |  Initiates a modal box brand cell. |
| `.pf-c-about-modal-box__brand-image` |  `<img>` |  Initiates a modal box brand image. |
| `.pf-c-about-modal-box__close` |  `<div>` |  Initiates a modal box close cell. |
| `.pf-c-about-modal-box__header` |  `<div>`, `<header>` |  Initiates a modal box header cell. |
| `.pf-c-about-modal-box__content` |  `<div>` |  Initiates a modal box content cell. |
| `.pf-c-about-modal-box__body` |  `<div>` |  Initiates a modal box body cell. |
| `.pf-c-about-modal-box__strapline` |  `<p>` |  Initiates a modal box strapline cell. |
