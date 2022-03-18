---
id: 'Context selector'
section: components
---

## Examples

### Context selector in masthead
```hbs isFullscreen
{{> page-template page-template--id="context-selector-in-masthead"}}

{{#*inline "masthead-template-content-toolbar-content"}}
  {{#> toolbar-content-section}}
    {{#> toolbar-item}}
      {{> masthead-template-context-selector}}
    {{/toolbar-item}}
  {{/toolbar-content-section}}
{{/inline}}
```

### Context selector in sidebar
```hbs isFullscreen
{{> page-template page-template--id="context-selector-in-sidebar-example" page-sidebar--HasContextSelector="true"}}
```

### Context selector in sidebar expanded
```hbs isFullscreen
{{> page-template
      page-template--id="context-selector-in-sidebar-expanded-example"
      page-sidebar--HasContextSelector="true"
      page-sidebar--ContextSelectorIsExpanded="true"
}}
```

### Context selector in page content
```hbs isFullscreen
{{> page-template
      page-template--id="context-selector-in-page-content-example"
      page-template--HasNoBreadcrumb="true"
      page-template--HasNoTitle="true"
}}

{{#*inline "page-template-section"}}
  {{#> page-main-section page-main-section--IsLimitWidth="true" page-main-section--modifier="pf-m-light pf-m-no-padding"}}
    {{#> toolbar toolbar--id="toolbar-simple-example" toolbar--modifier="pf-m-inset-none"}}
      {{#> toolbar-content}}
        {{#> toolbar-content-section}}
          {{#> toolbar-item}}
            {{#> context-selector context-selector--id=(concat page-template--id '-context-selector') context-selector--label-text="Selected project" context-selector-toggle--IsPlain="true" context-selector-toggle--IsText="true" context-selector--modifier="pf-m-page-insets pf-m-width-auto" context-selector--attribute='style="--pf-c-context-selector--Width: 270px;"'}}
              {{#> context-selector-toggle context-selector-toggle--attribute=(concat 'id="' context-selector--id '-toggle"' 'aria-labelledby="' context-selector--id '-label ' context-selector--id '-toggle"')}}
                {{#> context-selector-toggle-text}}
                  Project: openshift-apple1
                {{/context-selector-toggle-text}}
                {{#> context-selector-toggle-icon}}
                {{/context-selector-toggle-icon}}
              {{/context-selector-toggle}}
              {{#> context-selector-menu}}
                {{#> context-selector-menu-search}}
                  {{> search-input}}
                {{/context-selector-menu-search}}
                {{> __context-selector-menu-menu}}
              {{/context-selector-menu}}
            {{/context-selector}}
          {{/toolbar-item}}
          {{#> toolbar-item}}
            {{#> select id=(concat page-template--id '-select') select-toggle--modifier="pf-m-plain"}}All applications{{/select}}
          {{/toolbar-item}}
        {{/toolbar-content-section}}
      {{/toolbar-content}}
    {{/toolbar}}
  {{/page-main-section}}
  {{> divider}}
  {{> page-template-breadcrumb}}
  {{> page-template-title}}
  {{> page-template-gallery}}
{{/inline}}
```
