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
                      {{#> wizard-nav-link wizard-nav-link--modifier="pf-m-current" wizard-nav-link--IsCurrent="true"}}
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
                    {{#> wizard-nav-link wizard-nav-link--modifier="pf-m-current" wizard-nav-link--IsCurrent="true"}}
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
                      {{#> wizard-nav-link wizard-nav-link--modifier="pf-m-current" wizard-nav-link--IsCurrent="true"}}
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
                      {{#> wizard-nav-link wizard-nav-link--modifier="pf-m-current" wizard-nav-link--IsCurrent="true"}}
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
