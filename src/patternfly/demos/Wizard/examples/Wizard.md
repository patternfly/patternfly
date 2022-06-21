---
id: Wizard
section: components
wrapperTag: div
---

## Demos
### Basic
```hbs isFullscreen
{{> page-template page-template--id="wizard-basic-example"}}

{{#> modal-template}}
  {{#> modal-box modal-box--modifier="pf-m-lg" modal-box--attribute='aria-label="Basic wizard"'}}
    {{#> wizard}}
      {{#> wizard-header}}
        {{#> button button--modifier="pf-m-plain pf-c-wizard__close" button--attribute='aria-label="Close"'}}
          <i class="fas fa-times" aria-hidden="true"></i>
        {{/button}}
        {{#> title title--modifier="pf-m-3xl pf-c-wizard__title"}}Wizard title{{/title}}
        {{#> wizard-description}}
          Here is where the description goes
        {{/wizard-description}}
      {{/wizard-header}}
      {{#> wizard-toggle}}
        {{#> wizard-toggle-list}}
            {{#> wizard-toggle-list-item}}
              {{#> wizard-toggle-num}}2{{/wizard-toggle-num}}
              Configuration
              {{> wizard-toggle-separator}}
            {{/wizard-toggle-list-item}}
            {{#> wizard-toggle-list-item}}
              Substep B
            {{/wizard-toggle-list-item}}
          {{/wizard-toggle-list}}
          {{> wizard-toggle-icon}}
        {{/wizard-toggle}}
        {{#> wizard-outer-wrap}}
          {{#> wizard-inner-wrap}}
            {{#> wizard-nav}}
              {{#> wizard-nav-list}}
                {{#> wizard-nav-item}}
                  {{#> wizard-nav-link}}
                    Information
                  {{/wizard-nav-link}}
                {{/wizard-nav-item}}
                {{#> wizard-nav-item}}
                  {{#> wizard-nav-link wizard-nav-link--modifier="pf-m-current"}}
                    Configuration
                  {{/wizard-nav-link}}
                  {{#> wizard-nav-list}}
                    {{#> wizard-nav-item}}
                      {{#> wizard-nav-link}}
                        Substep A
                      {{/wizard-nav-link}}
                    {{/wizard-nav-item}}
                    {{#> wizard-nav-item}}
                      {{#> wizard-nav-link wizard-nav-link--modifier="pf-m-current" wizard-nav-link--IsCurrentPage="true"}}
                        Substep B
                      {{/wizard-nav-link}}
                    {{/wizard-nav-item}}
                    {{#> wizard-nav-item}}
                      {{#> wizard-nav-link}}
                        Substep C
                      {{/wizard-nav-link}}
                    {{/wizard-nav-item}}
                  {{/wizard-nav-list}}
                {{/wizard-nav-item}}
                {{#> wizard-nav-item}}
                  {{#> wizard-nav-link}}
                    Additional
                  {{/wizard-nav-link}}
                {{/wizard-nav-item}}
                {{#> wizard-nav-item}}
                  {{#> wizard-nav-link wizard-nav-link--modifier="pf-m-disabled" wizard-nav-link--attribute='aria-disabled="true" tabindex="-1"'}}
                    Review
                  {{/wizard-nav-link}}
                {{/wizard-nav-item}}
              {{/wizard-nav-list}}
            {{/wizard-nav}}
          {{#> wizard-main}}
            {{> __wizard-form}}
          {{/wizard-main}}
        {{/wizard-inner-wrap}}
        {{#> wizard-footer}}
          {{#> button button--modifier="pf-m-primary" button--IsSubmit="true"}}
            Next
          {{/button}}
          {{#> button button--modifier="pf-m-secondary"}}
            Back
          {{/button}}
          {{#> wizard-footer-cancel}}
            {{#> button button--modifier="pf-m-link"}}
              Cancel
            {{/button}}
          {{/wizard-footer-cancel}}
        {{/wizard-footer}}
      {{/wizard-outer-wrap}}
    {{/wizard}}
  {{/modal-box}}
{{/modal-template}}
```

### Nav expanded (mobile)
```hbs isFullscreen
{{> page-template page-template--id="wizard-nav-expanded-example"}}

{{#> modal-template}}
  {{#> modal-box modal-box--modifier="pf-m-lg" modal-box--attribute='aria-label="Wizard with expanded mobile nav"'}}
    {{#> wizard wizard--IsExpanded="true"}}
      {{#> wizard-header}}
        {{#> button button--modifier="pf-m-plain pf-c-wizard__close" button--attribute='aria-label="Close"'}}
          <i class="fas fa-times" aria-hidden="true"></i>
        {{/button}}
        {{#> title title--modifier="pf-m-3xl pf-c-wizard__title"}}Wizard title{{/title}}
        {{#> wizard-description}}
          Here is where the description goes
        {{/wizard-description}}
      {{/wizard-header}}
      {{#> wizard-toggle}}
        {{#> wizard-toggle-list}}
          {{#> wizard-toggle-list-item}}
            {{#> wizard-toggle-num}}2{{/wizard-toggle-num}}
            Configuration
            {{> wizard-toggle-separator}}
          {{/wizard-toggle-list-item}}
          {{#> wizard-toggle-list-item}}
            Substep B
          {{/wizard-toggle-list-item}}
        {{/wizard-toggle-list}}
        {{> wizard-toggle-icon}}
      {{/wizard-toggle}}
      {{#> wizard-outer-wrap}}
        {{#> wizard-inner-wrap}}
          {{#> wizard-nav}}
            {{#> wizard-nav-list}}
              {{#> wizard-nav-item}}
                {{#> wizard-nav-link}}
                  Information
                {{/wizard-nav-link}}
              {{/wizard-nav-item}}
              {{#> wizard-nav-item}}
                {{#> wizard-nav-link wizard-nav-link--modifier="pf-m-current"}}
                  Configuration
                {{/wizard-nav-link}}
                {{#> wizard-nav-list}}
                  {{#> wizard-nav-item}}
                    {{#> wizard-nav-link}}
                      Substep A
                    {{/wizard-nav-link}}
                  {{/wizard-nav-item}}
                  {{#> wizard-nav-item}}
                    {{#> wizard-nav-link wizard-nav-link--modifier="pf-m-current" wizard-nav-link--IsCurrentPage="true"}}
                      Substep B
                    {{/wizard-nav-link}}
                  {{/wizard-nav-item}}
                  {{#> wizard-nav-item}}
                    {{#> wizard-nav-link}}
                      Substep C
                    {{/wizard-nav-link}}
                  {{/wizard-nav-item}}
                {{/wizard-nav-list}}
              {{/wizard-nav-item}}
              {{#> wizard-nav-item}}
                {{#> wizard-nav-link}}
                  Additional
                {{/wizard-nav-link}}
              {{/wizard-nav-item}}
              {{#> wizard-nav-item}}
                {{#> wizard-nav-link wizard-nav-link--modifier="pf-m-disabled" wizard-nav-link--attribute='aria-disabled="true" tabindex="-1"'}}
                  Review
                {{/wizard-nav-link}}
              {{/wizard-nav-item}}
            {{/wizard-nav-list}}
          {{/wizard-nav}}
          {{#> wizard-main}}
            {{> __wizard-form}}
          {{/wizard-main}}
        {{/wizard-inner-wrap}}
        {{#> wizard-footer}}
          {{#> button button--modifier="pf-m-primary" button--IsSubmit="true"}}
            Next
          {{/button}}
          {{#> button button--modifier="pf-m-secondary"}}
            Back
          {{/button}}
          {{#> wizard-footer-cancel}}
            {{#> button button--modifier="pf-m-link"}}
              Cancel
            {{/button}}
          {{/wizard-footer-cancel}}
        {{/wizard-footer}}
      {{/wizard-outer-wrap}}
    {{/wizard}}
  {{/modal-box}}
{{/modal-template}}
```

### With drawer, closed
```hbs isFullscreen
{{> page-template page-template--id="wizard-with-drawer-closed-example"}}

{{#> modal-template}}
  {{#> modal-box modal-box--modifier="pf-m-lg" modal-box--attribute='aria-label="Basic wizard"'}}
    {{#> wizard}}
      {{#> wizard-header}}
        {{#> button button--modifier="pf-m-plain pf-c-wizard__close" button--attribute='aria-label="Close"'}}
          <i class="fas fa-times" aria-hidden="true"></i>
        {{/button}}
        {{#> title title--modifier="pf-m-3xl pf-c-wizard__title"}}Wizard title{{/title}}
        {{#> wizard-description}}
          Here is where the description goes
        {{/wizard-description}}
      {{/wizard-header}}
      {{#> wizard-toggle}}
        {{#> wizard-toggle-list}}
          {{#> wizard-toggle-list-item}}
            {{#> wizard-toggle-num}}2{{/wizard-toggle-num}}
            Configuration
            {{> wizard-toggle-separator}}
          {{/wizard-toggle-list-item}}
          {{#> wizard-toggle-list-item}}
            Substep B
          {{/wizard-toggle-list-item}}
        {{/wizard-toggle-list}}
        {{> wizard-toggle-icon}}
      {{/wizard-toggle}}
      {{#> wizard-outer-wrap}}
        {{#> wizard-inner-wrap}}
          {{> wizard-template-nav}}
          {{#> wizard-main wizard-main--HasNoBody="true"}}
            {{#> drawer drawer--id="wizard-with-drawer-closed-example-drawer" drawer--IsInline="true"}}
              {{#> drawer-main}}
                {{#> drawer-content drawer-content--NoBody="true"}}
                  {{#> wizard-main-body}}
                    {{> __wizard-drawer-toggle __wizard-drawer-toggle--modifier="pf-u-hidden"}}
                    {{> __wizard-form}}
                  {{/wizard-main-body}}
                {{/drawer-content}}
                {{#> drawer-panel drawer-panel--modifier="pf-m-light-200 pf-m-width-33"}}
                  {{#> drawer-body}}
                    {{#> drawer-head}}
                      {{> title titleType="h2" title--modifier="pf-m-xl" title--text="Register with Red Hat connector"}}
                      {{#> drawer-actions}}
                        {{> drawer-close}}
                      {{/drawer-actions}}
                    {{/drawer-head}}
                  {{/drawer-body}}
                  {{#> drawer-body}}
                    {{#> content}}
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta odio non justo cursus, quis placerat lacus mattis. Praesent orci velit, elementum eu tempus ut, posuere vel lorem. Fusce id tempus ex, et tempus nibh. Nullam laoreet odio tellus, id varius ante euismod id. Phasellus maximus lorem risus, eget facilisis urna hendrerit vel. Duis dapibus venenatis orci, id tristique magna hendrerit et. Aliquam eu lectus nec nisl efficitur euismod.
                      </p>

                      <p>
                        Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc auctor tortor eget ex mattis sagittis. Praesent aliquet, sem ut aliquet posuere, ante neque convallis velit, sit amet dictum nisi odio sed purus. Vestibulum congue eros nisl, faucibus sollicitudin nisi rutrum quis. Nam lacus risus, fringilla sed imperdiet sit amet, eleifend id nulla. Pellentesque posuere purus ex, sed ultricies leo vehicula vitae. Pellentesque lacinia, lacus interdum consequat molestie, urna quam rutrum nisi, at rhoncus dolor justo nec ante. Ut semper nisi ipsum, vel varius elit facilisis et. Nulla bibendum elit sed varius suscipit. Curabitur imperdiet ligula at pellentesque pretium. Sed eu porta erat.
                      </p>

                      <p>
                        Aenean hendrerit quam velit, eget euismod ex sagittis a. Fusce a ante ut ante malesuada tincidunt. <a href="#">Vestibulum facilisis ante eros, eget volutpat risus lobortis non.</a>
                      </p>
                      <a href="#">
                        {{#> l-flex l-flex--type="span" l-flex--modifier="pf-m-space-items-sm pf-m-nowrap"}}
                          <span>Learn about Red Hat connector</span>
                          <i class="fas fa-external-link-alt" aria-hidden="true"></i>
                        {{/l-flex}}
                      </a>
                    {{/content}}
                  {{/drawer-body}}
                {{/drawer-panel}}
              {{/drawer-main}}
              {{#> wizard-footer}}
                {{#> button button--modifier="pf-m-primary" button--IsSubmit="true"}}
                  Next
                {{/button}}
                {{#> button button--modifier="pf-m-secondary"}}
                  Back
                {{/button}}
                {{#> wizard-footer-cancel}}
                  {{#> button button--modifier="pf-m-link"}}
                    Cancel
                  {{/button}}
                {{/wizard-footer-cancel}}
              {{/wizard-footer}}
            {{/drawer}}
          {{/wizard-main}}
        {{/wizard-inner-wrap}}
      {{/wizard-outer-wrap}}
    {{/wizard}}
  {{/modal-box}}
{{/modal-template}}
```

### With drawer, expanded
```hbs isFullscreen
{{> page-template page-template--id="wizard-with-drawer-expanded-example"}}

{{#> modal-template}}
  {{#> modal-box modal-box--modifier="pf-m-lg" modal-box--attribute='aria-label="Basic wizard"'}}
    {{#> wizard}}
      {{#> wizard-header}}
        {{#> button button--modifier="pf-m-plain pf-c-wizard__close" button--attribute='aria-label="Close"'}}
          <i class="fas fa-times" aria-hidden="true"></i>
        {{/button}}
        {{#> title title--modifier="pf-m-3xl pf-c-wizard__title"}}Wizard title{{/title}}
        {{#> wizard-description}}
          Here is where the description goes
        {{/wizard-description}}
      {{/wizard-header}}
      {{#> wizard-toggle}}
        {{#> wizard-toggle-list}}
          {{#> wizard-toggle-list-item}}
            {{#> wizard-toggle-num}}2{{/wizard-toggle-num}}
            Configuration
            {{> wizard-toggle-separator}}
          {{/wizard-toggle-list-item}}
          {{#> wizard-toggle-list-item}}
            Substep B
          {{/wizard-toggle-list-item}}
        {{/wizard-toggle-list}}
        {{> wizard-toggle-icon}}
      {{/wizard-toggle}}
      {{#> wizard-outer-wrap}}
        {{#> wizard-inner-wrap}}
          {{> wizard-template-nav}}
          {{#> wizard-main wizard-main--HasNoBody="true"}}
            {{#> drawer drawer--id="wizard-with-drawer-expanded-example-drawer" drawer-panel--IsOpen="true" drawer--IsInline="true"}}
              {{#> drawer-main}}
                {{#> drawer-content drawer-content--NoBody="true"}}
                  {{#> wizard-main-body}}
                    {{> __wizard-drawer-toggle __wizard-drawer-toggle--modifier="pf-u-hidden"}}
                    {{> __wizard-form}}
                  {{/wizard-main-body}}
                {{/drawer-content}}
                {{#> drawer-panel drawer-panel--modifier="pf-m-light-200 pf-m-width-33"}}
                  {{#> drawer-body}}
                    {{#> drawer-head}}
                      {{> title titleType="h2" title--modifier="pf-m-xl" title--text="Register with Red Hat connector"}}
                      {{#> drawer-actions}}
                        {{> drawer-close}}
                      {{/drawer-actions}}
                    {{/drawer-head}}
                  {{/drawer-body}}
                  {{#> drawer-body}}
                    {{#> content}}
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta odio non justo cursus, quis placerat lacus mattis. Praesent orci velit, elementum eu tempus ut, posuere vel lorem. Fusce id tempus ex, et tempus nibh. Nullam laoreet odio tellus, id varius ante euismod id. Phasellus maximus lorem risus, eget facilisis urna hendrerit vel. Duis dapibus venenatis orci, id tristique magna hendrerit et. Aliquam eu lectus nec nisl efficitur euismod.
                      </p>

                      <p>
                        Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc auctor tortor eget ex mattis sagittis. Praesent aliquet, sem ut aliquet posuere, ante neque convallis velit, sit amet dictum nisi odio sed purus. Vestibulum congue eros nisl, faucibus sollicitudin nisi rutrum quis. Nam lacus risus, fringilla sed imperdiet sit amet, eleifend id nulla. Pellentesque posuere purus ex, sed ultricies leo vehicula vitae. Pellentesque lacinia, lacus interdum consequat molestie, urna quam rutrum nisi, at rhoncus dolor justo nec ante. Ut semper nisi ipsum, vel varius elit facilisis et. Nulla bibendum elit sed varius suscipit. Curabitur imperdiet ligula at pellentesque pretium. Sed eu porta erat.
                      </p>

                      <p>
                        Aenean hendrerit quam velit, eget euismod ex sagittis a. Fusce a ante ut ante malesuada tincidunt. <a href="#">Vestibulum facilisis ante eros, eget volutpat risus lobortis non.</a>
                      </p>
                      <a href="#">
                        {{#> l-flex l-flex--type="span" l-flex--modifier="pf-m-space-items-sm pf-m-nowrap"}}
                          <span>Learn about Red Hat connector</span>
                          <i class="fas fa-external-link-alt" aria-hidden="true"></i>
                        {{/l-flex}}
                      </a>
                    {{/content}}
                  {{/drawer-body}}
                {{/drawer-panel}}
              {{/drawer-main}}
              {{#> wizard-footer}}
                {{#> button button--modifier="pf-m-primary" button--IsSubmit="true"}}
                  Next
                {{/button}}
                {{#> button button--modifier="pf-m-secondary"}}
                  Back
                {{/button}}
                {{#> wizard-footer-cancel}}
                  {{#> button button--modifier="pf-m-link"}}
                    Cancel
                  {{/button}}
                {{/wizard-footer-cancel}}
              {{/wizard-footer}}
            {{/drawer}}
          {{/wizard-main}}
        {{/wizard-inner-wrap}}
      {{/wizard-outer-wrap}}
    {{/wizard}}
  {{/modal-box}}
{{/modal-template}}
```

### With drawer and informational step
```hbs isFullscreen
{{> page-template page-template--id="wizard-with-drawer-info-example"}}

{{#> modal-template}}
  {{#> modal-box modal-box--modifier="pf-m-lg" modal-box--attribute='aria-label="Basic wizard"'}}
    {{#> wizard}}
      {{#> wizard-header}}
        {{#> button button--modifier="pf-m-plain pf-c-wizard__close" button--attribute='aria-label="Close"'}}
          <i class="fas fa-times" aria-hidden="true"></i>
        {{/button}}
        {{#> title title--modifier="pf-m-3xl pf-c-wizard__title"}}Wizard title{{/title}}
        {{#> wizard-description}}
          Here is where the description goes
        {{/wizard-description}}
      {{/wizard-header}}
      {{#> wizard-toggle}}
        {{#> wizard-toggle-list}}
          {{#> wizard-toggle-list-item}}
            {{#> wizard-toggle-num}}2{{/wizard-toggle-num}}
            Configuration
            {{> wizard-toggle-separator}}
          {{/wizard-toggle-list-item}}
          {{#> wizard-toggle-list-item}}
            Substep B
          {{/wizard-toggle-list-item}}
        {{/wizard-toggle-list}}
        {{> wizard-toggle-icon}}
      {{/wizard-toggle}}
      {{#> wizard-outer-wrap}}
        {{#> wizard-inner-wrap}}
          {{> wizard-template-nav}}
          {{#> wizard-main wizard-main--HasNoBody="true"}}
            {{#> drawer drawer--id="wizard-with-drawer-closed-example-drawer" drawer--IsInline="true"}}
              {{#> drawer-main}}
                {{#> drawer-content drawer-content--NoBody="true"}}
                  {{#> wizard-main-body}}
                    {{> __wizard-drawer-toggle __wizard-drawer-toggle--modifier="pf-u-hidden"}}
                    {{> __wizard-info}}
                  {{/wizard-main-body}}
                {{/drawer-content}}
                {{#> drawer-panel drawer-panel--modifier="pf-m-light-200 pf-m-width-33"}}
                  {{#> drawer-body}}
                    {{#> drawer-head}}
                      {{> title titleType="h2" title--modifier="pf-m-xl" title--text="Register with Red Hat connector"}}
                      {{#> drawer-actions}}
                        {{> drawer-close}}
                      {{/drawer-actions}}
                    {{/drawer-head}}
                  {{/drawer-body}}
                  {{#> drawer-body}}
                    {{#> content}}
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta odio non justo cursus, quis placerat lacus mattis. Praesent orci velit, elementum eu tempus ut, posuere vel lorem. Fusce id tempus ex, et tempus nibh. Nullam laoreet odio tellus, id varius ante euismod id. Phasellus maximus lorem risus, eget facilisis urna hendrerit vel. Duis dapibus venenatis orci, id tristique magna hendrerit et. Aliquam eu lectus nec nisl efficitur euismod.
                      </p>

                      <p>
                        Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc auctor tortor eget ex mattis sagittis. Praesent aliquet, sem ut aliquet posuere, ante neque convallis velit, sit amet dictum nisi odio sed purus. Vestibulum congue eros nisl, faucibus sollicitudin nisi rutrum quis. Nam lacus risus, fringilla sed imperdiet sit amet, eleifend id nulla. Pellentesque posuere purus ex, sed ultricies leo vehicula vitae. Pellentesque lacinia, lacus interdum consequat molestie, urna quam rutrum nisi, at rhoncus dolor justo nec ante. Ut semper nisi ipsum, vel varius elit facilisis et. Nulla bibendum elit sed varius suscipit. Curabitur imperdiet ligula at pellentesque pretium. Sed eu porta erat.
                      </p>

                      <p>
                        Aenean hendrerit quam velit, eget euismod ex sagittis a. Fusce a ante ut ante malesuada tincidunt. <a href="#">Vestibulum facilisis ante eros, eget volutpat risus lobortis non.</a>
                      </p>
                      <a href="#">
                        {{#> l-flex l-flex--type="span" l-flex--modifier="pf-m-space-items-sm pf-m-nowrap"}}
                          <span>Learn about Red Hat connector</span>
                          <i class="fas fa-external-link-alt" aria-hidden="true"></i>
                        {{/l-flex}}
                      </a>
                    {{/content}}
                  {{/drawer-body}}
                {{/drawer-panel}}
              {{/drawer-main}}
              {{#> wizard-footer}}
                {{#> button button--modifier="pf-m-primary" button--IsSubmit="true"}}
                  Next
                {{/button}}
                {{#> button button--modifier="pf-m-secondary"}}
                  Back
                {{/button}}
                {{#> wizard-footer-cancel}}
                  {{#> button button--modifier="pf-m-link"}}
                    Cancel
                  {{/button}}
                {{/wizard-footer-cancel}}
              {{/wizard-footer}}
            {{/drawer}}
          {{/wizard-main}}
        {{/wizard-inner-wrap}}
      {{/wizard-outer-wrap}}
    {{/wizard}}
  {{/modal-box}}
{{/modal-template}}
```

### In page
```hbs isFullscreen
{{> page-template page-template--id="wizard-in-page-example"}}

{{#* inline "page-template-main-content"}}
  {{> page-template-breadcrumb}}
  {{> page-template-title}}

  {{#> page-main-wizard page-main-wizard--IsLimitWidth="true"}}
    {{#> wizard}}
      {{#> wizard-toggle}}
        {{#> wizard-toggle-list}}
            {{#> wizard-toggle-list-item}}
              {{#> wizard-toggle-num}}2{{/wizard-toggle-num}}
              Configuration
              {{> wizard-toggle-separator}}
            {{/wizard-toggle-list-item}}
            {{#> wizard-toggle-list-item}}
              Substep B
            {{/wizard-toggle-list-item}}
          {{/wizard-toggle-list}}
          {{> wizard-toggle-icon}}
        {{/wizard-toggle}}
        {{#> wizard-outer-wrap}}
          {{#> wizard-inner-wrap}}
            {{#> wizard-nav}}
              {{#> wizard-nav-list}}
                {{#> wizard-nav-item}}
                  {{#> wizard-nav-link}}
                    Information
                  {{/wizard-nav-link}}
                {{/wizard-nav-item}}
                {{#> wizard-nav-item}}
                  {{#> wizard-nav-link wizard-nav-link--modifier="pf-m-current"}}
                    Configuration
                  {{/wizard-nav-link}}
                  {{#> wizard-nav-list}}
                    {{#> wizard-nav-item}}
                      {{#> wizard-nav-link}}
                        Substep A
                      {{/wizard-nav-link}}
                    {{/wizard-nav-item}}
                    {{#> wizard-nav-item}}
                      {{#> wizard-nav-link wizard-nav-link--modifier="pf-m-current" wizard-nav-link--IsCurrentPage="true"}}
                        Substep B
                      {{/wizard-nav-link}}
                    {{/wizard-nav-item}}
                    {{#> wizard-nav-item}}
                      {{#> wizard-nav-link}}
                        Substep C
                      {{/wizard-nav-link}}
                    {{/wizard-nav-item}}
                  {{/wizard-nav-list}}
                {{/wizard-nav-item}}
                {{#> wizard-nav-item}}
                  {{#> wizard-nav-link}}
                    Additional
                  {{/wizard-nav-link}}
                {{/wizard-nav-item}}
                {{#> wizard-nav-item}}
                  {{#> wizard-nav-link wizard-nav-link--modifier="pf-m-disabled" wizard-nav-link--attribute='aria-disabled="true" tabindex="-1"'}}
                    Review
                  {{/wizard-nav-link}}
                {{/wizard-nav-item}}
              {{/wizard-nav-list}}
            {{/wizard-nav}}
          {{#> wizard-main wizard-main--type="div"}}
            {{> __wizard-form}}
          {{/wizard-main}}
        {{/wizard-inner-wrap}}
        {{#> wizard-footer}}
          {{#> button button--modifier="pf-m-primary" button--IsSubmit="true"}}
            Next
          {{/button}}
          {{#> button button--modifier="pf-m-secondary"}}
            Back
          {{/button}}
          {{#> wizard-footer-cancel}}
            {{#> button button--modifier="pf-m-link"}}
              Cancel
            {{/button}}
          {{/wizard-footer-cancel}}
        {{/wizard-footer}}
      {{/wizard-outer-wrap}}
    {{/wizard}}
  {{/page-main-wizard}}
{{/inline}}
```

### In page nav expanded (mobile)
```hbs isFullscreen
{{> page-template page-template--id="in-page-nav-expanded-example"}}

{{#* inline "page-template-main-content"}}
  {{> page-template-breadcrumb}}
  {{> page-template-title}}

  {{#> page-main-wizard page-main-wizard--IsLimitWidth="true"}}
    {{#> wizard wizard--IsExpanded="true"}}
      {{#> wizard-toggle}}
        {{#> wizard-toggle-list}}
            {{#> wizard-toggle-list-item}}
              {{#> wizard-toggle-num}}2{{/wizard-toggle-num}}
              Configuration
              {{> wizard-toggle-separator}}
            {{/wizard-toggle-list-item}}
            {{#> wizard-toggle-list-item}}
              Substep B
            {{/wizard-toggle-list-item}}
          {{/wizard-toggle-list}}
          {{> wizard-toggle-icon}}
        {{/wizard-toggle}}
        {{#> wizard-outer-wrap}}
          {{#> wizard-inner-wrap}}
            {{#> wizard-nav}}
              {{#> wizard-nav-list}}
                {{#> wizard-nav-item}}
                  {{#> wizard-nav-link}}
                    Information
                  {{/wizard-nav-link}}
                {{/wizard-nav-item}}
                {{#> wizard-nav-item}}
                  {{#> wizard-nav-link wizard-nav-link--modifier="pf-m-current"}}
                    Configuration
                  {{/wizard-nav-link}}
                  {{#> wizard-nav-list}}
                    {{#> wizard-nav-item}}
                      {{#> wizard-nav-link}}
                        Substep A
                      {{/wizard-nav-link}}
                    {{/wizard-nav-item}}
                    {{#> wizard-nav-item}}
                      {{#> wizard-nav-link wizard-nav-link--modifier="pf-m-current" wizard-nav-link--IsCurrentPage="true"}}
                        Substep B
                      {{/wizard-nav-link}}
                    {{/wizard-nav-item}}
                    {{#> wizard-nav-item}}
                      {{#> wizard-nav-link}}
                        Substep C
                      {{/wizard-nav-link}}
                    {{/wizard-nav-item}}
                  {{/wizard-nav-list}}
                {{/wizard-nav-item}}
                {{#> wizard-nav-item}}
                  {{#> wizard-nav-link}}
                    Additional
                  {{/wizard-nav-link}}
                {{/wizard-nav-item}}
                {{#> wizard-nav-item}}
                  {{#> wizard-nav-link wizard-nav-link--modifier="pf-m-disabled" wizard-nav-link--attribute='aria-disabled="true" tabindex="-1"'}}
                    Review
                  {{/wizard-nav-link}}
                {{/wizard-nav-item}}
              {{/wizard-nav-list}}
            {{/wizard-nav}}
          {{#> wizard-main wizard-main--type="div"}}
            {{> __wizard-form}}
          {{/wizard-main}}
        {{/wizard-inner-wrap}}
        {{#> wizard-footer}}
          {{#> button button--modifier="pf-m-primary" button--IsSubmit="true"}}
            Next
          {{/button}}
          {{#> button button--modifier="pf-m-secondary"}}
            Back
          {{/button}}
          {{#> wizard-footer-cancel}}
            {{#> button button--modifier="pf-m-link"}}
              Cancel
            {{/button}}
          {{/wizard-footer-cancel}}
        {{/wizard-footer}}
      {{/wizard-outer-wrap}}
    {{/wizard}}
  {{/page-main-wizard}}
{{/inline}}
```

### With drawer, in page
```hbs isFullscreen
{{> page-template page-template--id="wizard-with-drawer-in-page-example"}}

{{#* inline "page-template-main-content"}}
  {{> page-template-breadcrumb}}
  {{> page-template-title}}

  {{#> page-main-wizard page-main-wizard--modifier="pf-m-light-200" page-main-wizard--IsLimitWidth="true"}}
    {{#> wizard}}
      {{#> wizard-toggle}}
        {{#> wizard-toggle-list}}
          {{#> wizard-toggle-list-item}}
            {{#> wizard-toggle-num}}2{{/wizard-toggle-num}}
            Configuration
            {{> wizard-toggle-separator}}
          {{/wizard-toggle-list-item}}
          {{#> wizard-toggle-list-item}}
            Substep B
          {{/wizard-toggle-list-item}}
        {{/wizard-toggle-list}}
        {{> wizard-toggle-icon}}
      {{/wizard-toggle}}
      {{#> drawer drawer--id="wizard-with-drawer-in-page-example-drawer" drawer-panel--IsOpen="true" drawer--IsInline="true"}}
        {{#> drawer-main}}
          {{#> drawer-content drawer-content--NoBody="true"}}
            {{#> wizard-outer-wrap}}
              {{#> wizard-inner-wrap}}
                {{> wizard-template-nav}}
                {{#> wizard-main}}
                  {{> __wizard-drawer-toggle __wizard-drawer-toggle--attribute='aria-expanded="true"'}}
                  {{> __wizard-form}}
                {{/wizard-main}}
              {{/wizard-inner-wrap}}
            {{/wizard-outer-wrap}}
          {{/drawer-content}}
          {{#> drawer-panel drawer-panel--modifier="pf-m-light-200 pf-m-width-33"}}
            {{#> drawer-body}}
              {{#> drawer-head}}
                {{> title titleType="h2" title--modifier="pf-m-xl" title--text="Register with Red Hat connector"}}
                {{#> drawer-actions}}
                  {{> drawer-close}}
                {{/drawer-actions}}
              {{/drawer-head}}
            {{/drawer-body}}
            {{#> drawer-body}}
              {{#> content}}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta odio non justo cursus, quis placerat lacus mattis. Praesent orci velit, elementum eu tempus ut, posuere vel lorem. Fusce id tempus ex, et tempus nibh. Nullam laoreet odio tellus, id varius ante euismod id. Phasellus maximus lorem risus, eget facilisis urna hendrerit vel. Duis dapibus venenatis orci, id tristique magna hendrerit et. Aliquam eu lectus nec nisl efficitur euismod.
                </p>

                <p>
                  Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc auctor tortor eget ex mattis sagittis. Praesent aliquet, sem ut aliquet posuere, ante neque convallis velit, sit amet dictum nisi odio sed purus. Vestibulum congue eros nisl, faucibus sollicitudin nisi rutrum quis. Nam lacus risus, fringilla sed imperdiet sit amet, eleifend id nulla. Pellentesque posuere purus ex, sed ultricies leo vehicula vitae. Pellentesque lacinia, lacus interdum consequat molestie, urna quam rutrum nisi, at rhoncus dolor justo nec ante. Ut semper nisi ipsum, vel varius elit facilisis et. Nulla bibendum elit sed varius suscipit. Curabitur imperdiet ligula at pellentesque pretium. Sed eu porta erat.
                </p>

                <p>
                  Aenean hendrerit quam velit, eget euismod ex sagittis a. Fusce a ante ut ante malesuada tincidunt. <a href="#">Vestibulum facilisis ante eros, eget volutpat risus lobortis non.</a>
                </p>
                <a href="#">
                  {{#> l-flex l-flex--type="span" l-flex--modifier="pf-m-space-items-sm pf-m-nowrap"}}
                    <span>Learn about Red Hat connector</span>
                    <i class="fas fa-external-link-alt" aria-hidden="true"></i>
                  {{/l-flex}}
                </a>
              {{/content}}
            {{/drawer-body}}
          {{/drawer-panel}}
        {{/drawer-main}}
      {{/drawer}}
      {{#> wizard-footer}}
        {{#> button button--modifier="pf-m-primary" button--IsSubmit="true"}}
          Next
        {{/button}}
        {{#> button button--modifier="pf-m-secondary"}}
          Back
        {{/button}}
        {{#> wizard-footer-cancel}}
          {{#> button button--modifier="pf-m-link"}}
            Cancel
          {{/button}}
        {{/wizard-footer-cancel}}
      {{/wizard-footer}}
    {{/wizard}}
  {{/page-main-wizard}}
{{/inline}}
```
