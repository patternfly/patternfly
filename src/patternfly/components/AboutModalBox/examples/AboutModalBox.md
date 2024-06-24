---
id: About modal
section: components
cssPrefix: pf-v6-c-about-modal-box
---

## Examples
### Basic
```hbs isFullscreen
{{#> about-modal-box}}
  {{#> about-modal-box-brand}}
    {{> about-modal-box-brand-image about-modal-box-brand-image--attribute='src="/assets/images/PF-IconLogo.svg" alt="PatternFly brand logo"'}}
  {{/about-modal-box-brand}}
  {{#> about-modal-box-close}}
    {{> button button--attribute='aria-label="Close dialog"' button--IsPlain=true button--IsIcon=true button--icon="times"}}
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
In order to add a background image, set the `--pf-v6-c-about-modal-box--BackgroundImage` CSS variable to the path of the image. For example: `--pf-v6-c-about-modal-box--BackgroundImage: url(custom/path/image.jpg);`

### Accessibility
| Attribute | Applies to | Outcome |
| -- | -- | -- |
| `aria-label="Close Dialog"` | `.pf-v6-c-modal-box__close .pf-v6-c-button` | Provides an accessible name for the close button as it uses an icon instead of text. **Required** |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-about-modal-box` |  `<div>`, `<article>`  |  Initiates a modal box. |
| `.pf-v6-c-about-modal-box__brand` |  `<div>` |  Initiates a modal box brand cell. |
| `.pf-v6-c-about-modal-box__brand-image` |  `<img>` |  Initiates a modal box brand image. |
| `.pf-v6-c-about-modal-box__close` |  `<div>` |  Initiates a modal box close cell. |
| `.pf-v6-c-about-modal-box__header` |  `<div>`, `<header>` |  Initiates a modal box header cell. |
| `.pf-v6-c-about-modal-box__content` |  `<div>` |  Initiates a modal box content cell. |
| `.pf-v6-c-about-modal-box__body` |  `<div>` |  Initiates a modal box body cell. |
| `.pf-v6-c-about-modal-box__strapline` |  `<p>` |  Initiates a modal box strapline cell. |
| `--pf-v6-c-about-modal-box--BackgroundImage` |  `.pf-v6-c-about-modal-box` |  Sets the background image for the about modal. |
