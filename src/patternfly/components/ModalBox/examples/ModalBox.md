---
title: Modal box
section: components
cssPrefix: pf-c-modal-box
---

## Examples
```hbs title=Basic
{{#> modal-box modal-box--attribute='aria-labelledby="modal-title" aria-describedby="modal-description"'}}
  {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close"'}}
   <i class="fas fa-times" aria-hidden="true"></i>
  {{/button}}
  {{#> title titleType="h1" title--modifier="pf-m-2xl" title--attribute='id="modal-title"'}}
    Modal header
  {{/title}}
  {{#> modal-box-body modal-box-body--attribute='id="modal-description"'}}
    To support screen reader user awareness of the dialog text, the dialog text is wrapped in a div that is referenced by aria-describedby.
  {{/modal-box-body}}
  {{#> modal-box-footer modal-box-footer--modifier="pf-m-align-left"}}
    Modal footer
  {{/modal-box-footer}}
{{/modal-box}}
```

```hbs title=Small
{{#> modal-box modal-box--modifier="pf-m-sm" modal-box--attribute='aria-labelledby="modal-sm-title" aria-describedby="modal-sm-description"'}}
  {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close dialog"'}}
    <i class="fas fa-times" aria-hidden="true"></i>
  {{/button}}
  {{#> title titleType="h1" title--modifier="pf-m-2xl" title--attribute='id="modal-sm-title"'}}
    Modal header
  {{/title}}
  {{#> modal-box-body modal-box-body--attribute='id="modal-sm-description"'}}
    Static text describing modal purpose. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.
  {{/modal-box-body}}
  {{#> modal-box-footer modal-box-footer--modifier="pf-m-align-left"}}
    Modal footer
  {{/modal-box-footer}}
{{/modal-box}}
```

```hbs title=Large
{{#> modal-box modal-box--modifier="pf-m-lg" modal-box--attribute='aria-labelledby="modal-lg-title" aria-describedby="modal-lg-description"'}}
  {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close"'}}
    <i class="fas fa-times" aria-hidden="true"></i>
  {{/button}}
  {{#> title titleType="h1" title--modifier="pf-m-2xl" title--attribute='id="modal-lg-title"'}}
    Modal header
  {{/title}}
  {{#> modal-box-body modal-box-body--attribute='id="modal-lg-description"'}}
    Static text describing modal purpose. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.
  {{/modal-box-body}}
  {{#> modal-box-footer modal-box-footer--modifier="pf-m-align-left"}}
    Modal footer
  {{/modal-box-footer}}
{{/modal-box}}
```

```hbs title=Without-header
{{#> modal-box modal-box--attribute='aria-label="Example of a modal without a header" aria-describedby="modal-no-header-description"'}}
    {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close"'}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
  {{#> modal-box-body}}
    <span id="modal-no-header-description">When static text describing the modal is available, it can be wrapped with an ID referring to the modal's aria-describedby value. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  {{/modal-box-body}}
  {{#> modal-box-footer modal-box-footer--modifier="pf-m-align-left"}}
    Modal footer
  {{/modal-box-footer}}
{{/modal-box}}
```

## Documentation
### Overview
A modal box is a generic rectangular container that can be used to build modals. A modal box can have three sections: header, body, and footer. Header or body is required. If no `.pf-c-title` is used, `aria-label="[title of modal]"` must be provided for `.pf-c-modal-box`.


### Accessibility
| Attribute | Applies to | Outcome |
| -- | -- | -- |
| `role="dialog"` | `.pf-c-modal-box` | Identifies the element that serves as the modal container. **Required**|
| `aria-labelledby="[id value of .pf-c-title]"` | `.pf-c-modal-box` | Gives the modal an accessible name by referring to the element that provides the dialog title. **Required when .pf-c-title is present** |
| `aria-label="[title of modal]"` | `.pf-c-modal-box` | Gives the modal an accessible name. **Required when `.pf-c-title` is _not_ present** |
| `aria-describedby="[id value of applicable content]"` | `.pf-c-modal-box` | Gives the modal an accessible description by referring to the modal content that describes the primary message or purpose of the dialog. Not used if there is no static text that describes the modal. |
| `aria-modal="true"` | `.pf-c-modal-box` | Tells assistive technologies that the windows underneath the current modal are not available for interaction. **Required**|
| `aria-label="Close"` | `.pf-c-modal-box__close .pf-c-button` | Provides an accessible name for the close button as it uses an icon instead of text. **Required**|
| `aria-hidden="true"` | Parent element containing the page contents when modal is open | Hides main contents of the page from screen readers. The element with `.pf-c-modal-box` must not be a descendent of the element with `aria-hidden="true"`. For more info see [trapping focus](/accessibility-guide#trapping-focus). **Required** |

### Usage
| Class | Applied | Outcome |
| -- | -- | -- |
| `.pf-c-modal-box` | `<div>` | Initiates a modal box. **Required** |
| `.pf-c-button.pf-m-plain` | `<button>` | Initiates a modal box close button. **Required** |
| `.pf-c-title` | `<h1>`,`<h2>`,`<h3>`,`<h4>`,`<h5>`,`<h6>` |  Initiates a title. Always use it with a modifier class. |
| `.pf-c-modal-box__body` | `<div>` | Initiates a modal box body. A modal box body is **required** if there is no modal box header. |
| `.pf-c-modal-box__footer` | `<footer>` | Initiates a modal box footer. |
| `.pf-m-sm` | `.pf-c-modal-box` | Modifies for a small modal box width. |
| `.pf-m-lg` | `.pf-c-modal-box` | Modifies for a large modal box width. |
| `.pf-m-align-left` | `.pf-c-modal-box__foter` | Modifies for buttons in footer to be left aligned. **Required** |
