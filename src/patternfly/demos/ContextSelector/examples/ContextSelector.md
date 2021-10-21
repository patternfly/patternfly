---
id: 'Context selector'
section: components
---

## Examples

### Context selector in masthead
```hbs isFullscreen
{{#> masthead-demo--page masthead-demo--page--id="context-selector-in-masthead"}}
  {{#> masthead masthead--id=(concat masthead-demo--page--id '-masthead')}}  {{> masthead-toggle}}
    {{#> masthead-main}}
      {{#> masthead-brand}}
        {{> brand
          brand--attribute='style="--pf-c-brand--Width: 180px; --pf-c-brand--Width-on-md: 180px; --pf-c-brand--Width-on-2xl: 220px;"'
          brand--IsPicture="true"
          brand--img-url--base='/assets/images/logo__pf--reverse--base.png'
          brand--img-url='/assets/images/logo__pf--reverse--base.svg'
          brand--img-url-on-md='/assets/images/logo__pf--reverse-on-md.svg'}}
      {{/masthead-brand}}
    {{/masthead-main}}
    {{#> masthead-content}}
      {{#> toolbar toolbar--modifier="pf-m-full-height pf-m-static" toolbar--id=(concat masthead--id '-toolbar')}}
        {{#> toolbar-content}}
          {{#> toolbar-content-section}}
            {{#> toolbar-item}}
              {{> masthead-demo--context-selector}}
            {{/toolbar-item}}
          {{/toolbar-content-section}}
        {{/toolbar-content}}
      {{/toolbar}}
    {{/masthead-content}}
  {{/masthead}}
{{/masthead-demo--page}}
```

### Context selector in sidebar
```hbs isFullscreen
{{> page-demo-masthead-component page-demo-default--id="context-selector-in-sidebar" page-demo-masthead-component--HasMenu="true"}}
```

### Context selector in sidebar expanded
```hbs isFullscreen
{{> page-demo-masthead-component page-demo-default--id="context-selector-in-sidebar-expanded" page-demo-masthead-component--HasMenu="true" page-demo-masthead-component--MenuIsExpanded="true"}}
```

### Context selector in page content
```hbs isFullscreen
{{#> page-demo-default page-demo-default--id="context-selector-in-page-content" page-demo-default--HasNoContent="true"}}
  {{#> page-main-section page-main-section--modifier="pf-m-no-padding" page-main-section--IsLimitWidth="true"}}
    {{#> toolbar toolbar--id="toolbar-simple-example" toolbar--modifier="pf-m-inset-none"}}
      {{#> toolbar-content}}
        {{#> toolbar-content-section}}
          {{#> toolbar-item}}
            {{#> context-selector context-selector--id=(concat page-demo-default--id '-context-selector') context-selector--label-text="Selected project" context-selector-toggle--IsPlain="true" context-selector-toggle--IsText="true" context-selector--modifier="pf-m-page-insets pf-m-width-auto" context-selector--attribute='style="--pf-c-context-selector--Width: 270px;"'}}
              {{#> context-selector-toggle context-selector-toggle--attribute=(concat 'id="' context-selector--id '-toggle"' 'aria-labelledby="' context-selector--id '-label ' context-selector--id '-toggle"')}}
                {{#> context-selector-toggle-text}}
                  Project: openshift-apple1
                {{/context-selector-toggle-text}}
                {{#> context-selector-toggle-icon}}
                {{/context-selector-toggle-icon}}
              {{/context-selector-toggle}}
              {{#> context-selector-menu}}
                {{#> context-selector-menu-search}}
                  {{#> input-group}}
                    {{#> form-control controlType="input" input="true" form-control--attribute=(concat 'type="search"' 'placeholder="Search"' 'id="textInput1"' 'name="textInput1"' 'aria-labelledby="' context-selector--id '-search-button"')}}
                    {{/form-control}}
                    {{#> button button--modifier="pf-m-control" button--attribute=(concat 'id="' context-selector--id '-search-button"' 'aria-label="Search menu items"')}}
                      <i class="fas fa-search" aria-hidden="true"></i>
                    {{/button}}
                  {{/input-group}}
                {{/context-selector-menu-search}}
                {{> __context-selector-menu-menu}}
              {{/context-selector-menu}}
            {{/context-selector}}
          {{/toolbar-item}}
          {{#> toolbar-item}}
            {{#> select id=(concat page-demo-default--id '-select') select-toggle--modifier="pf-m-plain"}}All applications{{/select}}
          {{/toolbar-item}}
        {{/toolbar-content-section}}
      {{/toolbar-content}}
    {{/toolbar}}
  {{/page-main-section}}
  {{> divider}}
  {{> page-template-breadcrumb}}
  {{> page-template-title}}
  {{> page-template-gallery}}
{{/page-demo-default}}
```
