---
id: Modal
section: components
cssPrefix: pf-v6-c-modal-box
---

import './ModalBox.css'

## Examples
### Basic
```hbs isFullscreen
{{#> modal-box modal-box--attribute='aria-labelledby="modal-title" aria-describedby="modal-description" id="firstmodal"'}}
  {{> modal-box-close}}
  {{#> modal-box-header}}
    {{#> modal-box-title modal-box-title--attribute='id="modal-title"'}}
      First modal
    {{/modal-box-title}}
  {{/modal-box-header}}
  {{#> modal-box-body modal-box-body--attribute='id="modal-description"'}}
    We don't need no stinkin' javascript. 
  {{/modal-box-body}}
  {{#> modal-box-footer}}
    Modal footer
  {{/modal-box-footer}}
{{/modal-box}}

{{#> modal-box modal-box--attribute='aria-labelledby="modal-title" aria-describedby="modal-description" id="secondmodal"'}}
  {{> modal-box-close}}
  {{#> modal-box-header}}
    {{#> modal-box-title modal-box-title--attribute='id="modal-title"'}}
      Second modal
    {{/modal-box-title}}
  {{/modal-box-header}}
  {{#> modal-box-body modal-box-body--attribute='id="modal-description"'}}
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ante purus, feugiat ut elit et, lacinia feugiat velit. Cras eget pharetra lorem, eget venenatis augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu consectetur orci. Vestibulum ac dui facilisis, dictum sem vel, porttitor magna. Donec auctor velit in nunc cursus, sit amet pellentesque dui elementum. Vestibulum a auctor felis. Nam malesuada sem et sapien pellentesque, et dictum elit elementum. Quisque ut massa consectetur ligula laoreet laoreet vel a justo. Praesent vel malesuada velit. Aenean quis leo in sapien sodales sagittis quis a turpis. Mauris vitae fermentum lorem. Fusce in felis in lectus ullamcorper rutrum. Maecenas quis libero consectetur, dictum neque at, tempor ante. Curabitur quis ante pulvinar velit consequat luctus ut faucibus enim.
  {{/modal-box-body}}
  {{#> modal-box-footer}}
    So much text!
  {{/modal-box-footer}}
{{/modal-box}}<div>

<button onclick="firstmodal.showModal()">Show the modal</button>

<p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ante purus, feugiat ut elit et, lacinia feugiat velit. Cras eget pharetra lorem, eget venenatis augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut eu consectetur orci. Vestibulum ac dui facilisis, dictum sem vel, porttitor magna. Donec auctor velit in nunc cursus, sit amet pellentesque dui elementum. Vestibulum a auctor felis. Nam malesuada sem et sapien pellentesque, et dictum elit elementum. Quisque ut massa consectetur ligula laoreet laoreet vel a justo. Praesent vel malesuada velit. Aenean quis leo in sapien sodales sagittis quis a turpis. Mauris vitae fermentum lorem. Fusce in felis in lectus ullamcorper rutrum. Maecenas quis libero consectetur, dictum neque at, tempor ante. Curabitur quis ante pulvinar velit consequat luctus ut faucibus enim.
</p>
<p>
Ut diam felis, fermentum eu dignissim et, viverra sed turpis. Fusce vehicula elit et maximus placerat. Ut elementum at neque sit amet vehicula. Nulla at finibus felis. Sed tincidunt sapien fermentum mauris dignissim maximus. Proin laoreet enim at justo sollicitudin, sit amet scelerisque massa feugiat. Fusce quis cursus libero. In posuere nulla dui, quis viverra leo finibus in. Maecenas sem magna, ullamcorper quis tellus in, placerat ullamcorper diam. Aenean vitae ultricies libero.
</p>
<p>
Mauris sodales viverra metus sed dignissim. Sed eleifend eleifend aliquam. Phasellus sit amet sagittis lacus, ut ullamcorper neque. Etiam volutpat, urna non aliquam pulvinar, sem urna congue dolor, eu ultrices sapien nisi eu nibh. Nulla nulla diam, suscipit nec nibh vitae, mollis faucibus risus. Curabitur ornare est nec nulla condimentum, et commodo diam bibendum. Sed hendrerit justo id lobortis dapibus. Phasellus venenatis fringilla rhoncus. Mauris suscipit et velit eget posuere. Sed volutpat magna faucibus urna sollicitudin, vitae porttitor velit finibus. Vestibulum sed metus porttitor sem pretium mollis. Donec quis posuere nunc. Nam lacus lacus, sagittis lobortis laoreet a, cursus ac leo. Donec sed enim a odio facilisis scelerisque. Suspendisse eros nisi, sagittis a dolor eget, laoreet ornare arcu. Aliquam molestie, enim et aliquet efficitur, ante arcu congue risus, id finibus nibh elit ac erat.
</p>
<p>
Etiam quis maximus nulla. Nunc quis orci ante. Nulla porttitor scelerisque vestibulum. Cras ipsum dolor, maximus nec leo vel, dapibus egestas neque. Phasellus iaculis lobortis neque, et malesuada erat tristique nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque aliquet eget erat eu feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In ultrices varius luctus. Aenean gravida nibh id porta efficitur.
</p>
<p>
Curabitur condimentum vehicula diam eget pulvinar. Duis tincidunt finibus metus. Quisque consequat enim ut mauris consectetur aliquet. Quisque egestas urna in massa eleifend, sit amet imperdiet diam congue. Quisque enim nulla, iaculis sed justo in, facilisis tincidunt mauris. Integer sit amet luctus elit, vel semper dolor. Phasellus nec semper nibh, at fermentum odio. Nam mollis purus eu mi ultrices consequat. Ut ligula odio, malesuada vel viverra et, consequat ac purus. Curabitur sit amet felis erat. Quisque consequat, purus quis suscipit ultricies, est lorem commodo ante, in pharetra mi turpis nec diam.
</p>
<button onclick="secondmodal.showModal()">Show a different modal</button>

</div>
```

### With help button
```hbs isFullscreen
{{#> modal-box modal-box--attribute='aria-labelledby="modal-help-title" aria-describedby="modal-help-description"'}}
  {{> modal-box-close}}
  {{#> modal-box-header modal-box-header--HasHelp='true'}}
      {{#> modal-box-title modal-box-title--attribute='id="modal-help-title"'}}
        Modal title Modal title Modal title Modal title Modal title Modal title Modal title Modal title
      {{/modal-box-title}}
      {{#> modal-box-description modal-box-description--attribute='id="modal-help-description"'}}
        A description is used when you want to provide more info about the modal than the title is able to describe. The content in the description is static and will not scroll with the rest of the modal body.
      {{/modal-box-description}}
  {{/modal-box-header}}
  {{#> modal-box-body}}
    To support screen reader user awareness of the dialog text, the dialog text is wrapped in a div that is referenced by aria-describedby.
  {{/modal-box-body}}
  {{#> modal-box-footer}}
    Modal footer
  {{/modal-box-footer}}
{{/modal-box}}
```

### Small
```hbs isFullscreen
{{#> modal-box modal-box--modifier="pf-m-sm" modal-box--attribute='aria-labelledby="modal-sm-title" aria-describedby="modal-sm-description"'}}
  {{> modal-box-close}}
  {{#> modal-box-header}}
    {{#> modal-box-title modal-box-title--attribute='id="modal-sm-title"'}}
      Modal title
    {{/modal-box-title}}
  {{/modal-box-header}}
  {{#> modal-box-body modal-box-body--attribute='id="modal-sm-description"'}}
    Static text describing modal purpose. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.
  {{/modal-box-body}}
  {{#> modal-box-footer}}
    Modal footer
  {{/modal-box-footer}}
{{/modal-box}}
```

### Medium
```hbs isFullscreen
{{#> modal-box modal-box--modifier="pf-m-md" modal-box--attribute='aria-labelledby="modal-md-title" aria-describedby="modal-md-description"'}}
  {{> modal-box-close}}
  {{#> modal-box-header}}
    {{#> modal-box-title modal-box-title--attribute='id="modal-md-title"'}}
      Modal title
    {{/modal-box-title}}
  {{/modal-box-header}}
  {{#> modal-box-body modal-box-body--attribute='id="modal-md-description"'}}
    Static text describing modal purpose. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.
  {{/modal-box-body}}
  {{#> modal-box-footer}}
    Modal footer
  {{/modal-box-footer}}
{{/modal-box}}
```

### Large
```hbs isFullscreen
{{#> modal-box modal-box--modifier="pf-m-lg" modal-box--attribute='aria-labelledby="modal-lg-title" aria-describedby="modal-lg-description"'}}
  {{> modal-box-close}}
  {{#> modal-box-header}}
    {{#> modal-box-title modal-box-title--attribute='id="modal-lg-title"'}}
      Modal title
    {{/modal-box-title}}
  {{/modal-box-header}}
  {{#> modal-box-body modal-box-body--attribute='id="modal-lg-description"'}}
    Static text describing modal purpose. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.
  {{/modal-box-body}}
  {{#> modal-box-footer}}
    Modal footer
  {{/modal-box-footer}}
{{/modal-box}}
```

### Without title
```hbs isFullscreen
{{#> modal-box modal-box--attribute='aria-label="Example of a modal without a title" aria-describedby="modal-no-title-description"'}}
  {{> modal-box-close}}
  {{#> modal-box-body}}
    <span id="modal-no-title-description">When static text describing the modal is available, it can be wrapped with an ID referring to the modal's aria-describedby value. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  {{/modal-box-body}}
  {{#> modal-box-footer}}
    Modal footer
  {{/modal-box-footer}}
{{/modal-box}}
```

### With description
```hbs isFullscreen
{{#> modal-box modal-box--attribute='aria-labelledby="modal-with-description-title" aria-describedby="modal-with-description-description"'}}
  {{> modal-box-close}}
  {{#> modal-box-header}}
    {{#> modal-box-title modal-box-title--attribute='id="modal-with-description-title"'}}
      Modal title
    {{/modal-box-title}}
    {{#> modal-box-description modal-box-description--attribute='id="modal-with-description-description"'}}
      A description is used when you want to provide more info about the modal than the title is able to describe. The content in the description is static and will not scroll with the rest of the modal body.
    {{/modal-box-description}}
  {{/modal-box-header}}
  {{#> modal-box-body}}
    To support screen reader user awareness of the dialog text, the dialog text is wrapped in a div that is referenced by aria-describedby.
  {{/modal-box-body}}
  {{#> modal-box-footer}}
    Modal footer
  {{/modal-box-footer}}
{{/modal-box}}
```

### Custom title
```hbs isFullscreen
{{#> modal-box modal-box--attribute='aria-labelledby="modal-custom-title" aria-describedby="modal-custom-description"'}}
  {{> modal-box-close}}
  {{#> modal-box-header}}
    {{#> title title--modifier="pf-m-4xl" title--attribute='id="modal-custom-title"'}}Custom title{{/title}}
  {{/modal-box-header}}
  {{#> modal-box-body modal-box-body--attribute='id="modal-custom-description"'}}
    To support screen reader user awareness of the dialog text, the dialog text is wrapped in a div that is referenced by aria-describedby.
  {{/modal-box-body}}
  {{#> modal-box-footer}}
    Modal footer
  {{/modal-box-footer}}
{{/modal-box}}
```

### Modal box as generic container
```hbs isFullscreen
{{#> modal-box modal-box--attribute='aria-labelledby="modal-generic-container-description"'}}
  <p id="modal-generic-container-description">The modal box children elements can be removed, and the modal serves as a generic modal container. One use case of this is when creating a wizard in a modal.</p>
{{/modal-box}}
```

### Icon
```hbs isFullscreen
{{#> modal-example modal-example--id="icon"}}
  {{#> modal-box modal-box--attribute=(concat 'aria-labelledby="' modal-example--id '-title" aria-describedby="' modal-example--id '-description"')}}
    {{> modal-box-close}}
    {{#> modal-box-header}}
      {{#> modal-box-title modal-box-title--IsIcon="true" modal-box-title--attribute=(concat 'id="' modal-example--id '-title"') modal-box-title-icon--type="bullhorn"}}
        Modal with icon title
      {{/modal-box-title}}
    {{/modal-box-header}}
    {{#> modal-box-body modal-box-body--attribute=(concat 'id="' modal-example--id '-description"')}}
      Modal description
    {{/modal-box-body}}
    {{#> modal-box-footer}}
      Modal footer
    {{/modal-box-footer}}
  {{/modal-box}}
{{/modal-example}}
```

### Custom alert
```hbs isFullscreen
{{#> modal-example modal-example--id="custom-alert"}}
  {{#> modal-box modal-box--attribute=(concat 'aria-labelledby="' modal-example--id '-title" aria-describedby="' modal-example--id '-description"') modal-box--IsAlert="true" modal-box--IsCustomAlert="true"}}
    {{> modal-box-close}}
    {{#> modal-box-header}}
      {{#> modal-box-title modal-box-title--IsIcon="true" modal-box-title--attribute=(concat 'id="' modal-example--id '-title"')}}
        Custom alert modal title
      {{/modal-box-title}}
    {{/modal-box-header}}
    {{#> modal-box-body modal-box-body--attribute=(concat 'id="' modal-example--id '-description"')}}
      Modal description
    {{/modal-box-body}}
    {{#> modal-box-footer}}
      Modal footer
    {{/modal-box-footer}}
  {{/modal-box}}
{{/modal-example}}
```

### Info alert
```hbs isFullscreen
{{#> modal-example modal-example--id="info-alert"}}
  {{#> modal-box modal-box--attribute=(concat 'aria-labelledby="' modal-example--id '-title" aria-describedby="' modal-example--id '-description"') modal-box--IsAlert="true" modal-box--IsInfoAlert="true"}}
    {{> modal-box-close}}
    {{#> modal-box-header}}
      {{#> modal-box-title modal-box-title--IsIcon="true" modal-box-title--attribute=(concat 'id="' modal-example--id '-title"')}}
        Info alert modal title
      {{/modal-box-title}}
    {{/modal-box-header}}
    {{#> modal-box-body modal-box-body--attribute=(concat 'id="' modal-example--id '-description"')}}
      Modal description
    {{/modal-box-body}}
    {{#> modal-box-footer}}
      Modal footer
    {{/modal-box-footer}}
  {{/modal-box}}
{{/modal-example}}
```

### Success alert
```hbs isFullscreen
{{#> modal-example modal-example--id="success-alert"}}
  {{#> modal-box modal-box--attribute=(concat 'aria-labelledby="' modal-example--id '-title" aria-describedby="' modal-example--id '-description"') modal-box--IsAlert="true" modal-box--IsSuccessAlert="true"}}
    {{> modal-box-close}}
    {{#> modal-box-header}}
      {{#> modal-box-title modal-box-title--IsIcon="true" modal-box-title--attribute=(concat 'id="' modal-example--id '-title"')}}
        Success alert modal title
      {{/modal-box-title}}
    {{/modal-box-header}}
    {{#> modal-box-body modal-box-body--attribute=(concat 'id="' modal-example--id '-description"')}}
      Modal description
    {{/modal-box-body}}
    {{#> modal-box-footer}}
      Modal footer
    {{/modal-box-footer}}
  {{/modal-box}}
{{/modal-example}}
```

### Warning alert
```hbs isFullscreen
{{#> modal-example modal-example--id="warning-alert"}}
  {{#> modal-box modal-box--attribute=(concat 'aria-labelledby="' modal-example--id '-title" aria-describedby="' modal-example--id '-description"') modal-box--IsAlert="true" modal-box--IsWarningAlert="true"}}
    {{> modal-box-close}}
    {{#> modal-box-header}}
      {{#> modal-box-title modal-box-title--IsIcon="true" modal-box-title--attribute=(concat 'id="' modal-example--id '-title"')}}
        Warning alert modal title
      {{/modal-box-title}}
    {{/modal-box-header}}
    {{#> modal-box-body modal-box-body--attribute=(concat 'id="' modal-example--id '-description"')}}
      Modal description
    {{/modal-box-body}}
    {{#> modal-box-footer}}
      Modal footer
    {{/modal-box-footer}}
  {{/modal-box}}
{{/modal-example}}
```

### Danger alert
```hbs isFullscreen
{{#> modal-example modal-example--id="danger-alert"}}
  {{#> modal-box modal-box--attribute=(concat 'aria-labelledby="' modal-example--id '-title" aria-describedby="' modal-example--id '-description"') modal-box--IsAlert="true" modal-box--IsDangerAlert="true"}}
    {{> modal-box-close}}
    {{#> modal-box-header}}
      {{#> modal-box-title modal-box-title--IsIcon="true" modal-box-title--attribute=(concat 'id="' modal-example--id '-title"')}}
        Danger alert modal title
      {{/modal-box-title}}
    {{/modal-box-header}}
    {{#> modal-box-body modal-box-body--attribute=(concat 'id="' modal-example--id '-description"')}}
      To support screen reader user awareness of the dialog text, the dialog text is wrapped in a div that is referenced by aria-describedby.
    {{/modal-box-body}}
    {{#> modal-box-footer}}
      Modal footer
    {{/modal-box-footer}}
  {{/modal-box}}
{{/modal-example}}
```

### Danger alert with modifier on modal title
The status modifier classes can be applied directly to the modal title element, instead of the parent modal.

```hbs isFullscreen
{{#> modal-example modal-example--id="danger-alert-title"}}
  {{#> modal-box modal-box--attribute=(concat 'aria-labelledby="' modal-example--id '-title" aria-describedby="' modal-example--id '-description"') modal-box--IsAlert="true" modal-box--IsDangerAlert="true" modal-box--HasStatusTitle=true}}
    {{> modal-box-close}}
    {{#> modal-box-header}}
      {{#> modal-box-title modal-box-title--IsIcon="true" modal-box-title--attribute=(concat 'id="' modal-example--id '-title"')}}
        Danger alert modal title
      {{/modal-box-title}}
    {{/modal-box-header}}
    {{#> modal-box-body modal-box-body--attribute=(concat 'id="' modal-example--id '-description"')}}
      To support screen reader user awareness of the dialog text, the dialog text is wrapped in a div that is referenced by aria-describedby.
    {{/modal-box-body}}
    {{#> modal-box-footer}}
      Modal footer
    {{/modal-box-footer}}
  {{/modal-box}}
{{/modal-example}}
```

## Documentation
### Overview
A modal box is a generic rectangular container that can be used to build modals. A modal box can have the following sections: header, title, description, body, and footer. With normal use of the modal, a title or body is required. Alternatively, no child elements can be used, and the `.pf-v6-c-modal-box` container will  serve as a generic container with no padding for custom modal content. If no `.pf-v6-c-modal-box__title` is used, `aria-label="[title of modal]"` must be provided for `.pf-v6-c-modal-box`.


### Accessibility
| Attribute | Applies to | Outcome |
| -- | -- | -- |
| `role="dialog"` | `.pf-v6-c-modal-box` | Identifies the element that serves as the modal container. **Required** |
| `aria-labelledby="[id value of .pf-v6-c-modal-box__title or custom modal title]"` | `.pf-v6-c-modal-box` | Gives the modal an accessible name by referring to the element that provides the dialog title. **Required when .pf-v6-c-title is present** |
| `aria-label="[title of modal]"` | `.pf-v6-c-modal-box` | Gives the modal an accessible name. **Required when `.pf-v6-c-modal-box__title` is _not_ present** |
| `aria-describedby="[id value of applicable content]"` | `.pf-v6-c-modal-box` | Gives the modal an accessible description by referring to the modal content that describes the primary message or purpose of the dialog. Not used if there is no static text that describes the modal. |
| `aria-modal="true"` | `.pf-v6-c-modal-box` | Tells assistive technologies that the windows underneath the current modal are not available for interaction. **Required**|
| `aria-label="Close"` | `.pf-v6-c-modal-box__close .pf-v6-c-button` | Provides an accessible name for the close button as it uses an icon instead of text. **Required**|
| `aria-hidden="true"` | Parent element containing the page contents when modal is open | Hides main contents of the page from screen readers. The element with `.pf-v6-c-modal-box` must not be a descendent of the element with `aria-hidden="true"`. For more info see [trapping focus](/accessibility/product-development-guide#trapping-focus). **Required** |
| `form="[id of form in modal body]"` | `.pf-v6-c-modal-box__footer .pf-v6-c-button` | Associates a submit button in the modal footer with a form in the modal body. For use when the submit button is outside of the `<form>` that the button submits. |
| `tabindex="0"` | `.pf-v6-c-modal-box__body` | If a modal box body has overflow content that triggers a scrollbar, to ensure that the content is keyboard accessible, the body must include either a focusable element within the scrollable region or the body itself must be focusable by adding `tabindex="0"`. |

### Usage
| Class | Applied | Outcome |
| -- | -- | -- |
| `.pf-v6-c-modal-box` | `<div>` | Initiates a modal box. **Required** |
| `.pf-v6-c-modal-box__close` | `<div>` | Creates a container for the modal box close button. **Required** if there is a close button. |
| `.pf-v6-c-button.pf-m-plain` | `<button>` | Initiates a modal box close button. |
| `.pf-v6-c-modal-box__header` | `<header>` | Initiates a modal box header. **Required** if using a `.pf-v6-c-modal-box__title`. |
| `.pf-v6-c-modal-box__header-main` | `<div>` | Initiates a modal box header main container. **Required** when using a modal header. |
| `.pf-v6-c-modal-box__header-help` | `<div>` | Initiates the help button container in the modal box header actions. |
| `.pf-v6-c-modal-box__title` | `<h1>`,`<h2>`,`<h3>`,`<h4>`,`<h5>`,`<h6>`, `<div>` | Initiates a modal box title. **Required** if using a modal description. |
| `.pf-v6-c-modal-box__title-icon` | `<span>` | Initiates a container for the modal box title icon. |
| `.pf-v6-c-modal-box__title-text` | `<span>` | Initiates a container for the modal box title text. |
| `.pf-v6-c-modal-box__description` | `<div>` | Initiates a modal box description. |
| `.pf-v6-c-modal-box__body` | `<div>` | Initiates a modal box body. |
| `.pf-v6-c-modal-box__footer` | `<footer>` | Initiates a modal box footer. |
| `.pf-m-sm` | `.pf-v6-c-modal-box` | Modifies for a small modal box width. |
| `.pf-m-md` | `.pf-v6-c-modal-box` | Modifies for a medium modal box width. |
| `.pf-m-lg` | `.pf-v6-c-modal-box` | Modifies for a large modal box width. |
| `.pf-m-align-top` | `.pf-v6-c-modal-box` | Modifies for top alignment.  |
| `.pf-m-icon` | `.pf-v6-c-modal-box__title` | Modifies the title layout to accommodate an icon. |
| `.pf-m-custom` | `.pf-v6-c-modal-box`, `.pf-v6-c-modal-box__title` | Modifies for the custom alert state. |
| `.pf-m-info` | `.pf-v6-c-modal-box`, `.pf-v6-c-modal-box__title` | Modifies for the info alert state. |
| `.pf-m-success` | `.pf-v6-c-modal-box`, `.pf-v6-c-modal-box__title` | Modifies for the success alert state. |
| `.pf-m-warning` | `.pf-v6-c-modal-box`, `.pf-v6-c-modal-box__title` | Modifies for the warning alert state. |
| `.pf-m-danger` | `.pf-v6-c-modal-box`, `.pf-v6-c-modal-box__title` | Modifies for the danger alert state. |
| `.pf-m-help` | `.pf-v6-c-modal-box__header` | Modifies the modal box header to support the help action |
