---
id: Navigation
section: components
---

## Examples
### Default nav
```hbs isFullscreen
{{> page-template page-template--id="nav-basic-example"}}
```

### Expandable nav
```hbs isFullscreen
{{> page-template page-template--id="nav-expandable-example" page-template-sidebar--nav--IsExpandable="true"}}
```

### Horizontal nav
```hbs isFullscreen
{{> page-template page-template--id="nav-horizontal-example"
      page-template--HasNoSidebar="true"
      masthead-template--HasHorizontalNav="true"
      masthead-template--HasNoToggle="true"
}}
```

### Horizontal subnav
```hbs isFullscreen
{{> page-template page-template--id="nav-horizontal-subnav-example" page-template-sidebar--nav--IsExpandable="true"}}

{{#* inline "page-template-main-content"}}
  {{> page-template-horizontal-subnav}}
  {{> page-template-breadcrumb}}
  {{> page-template-title}}
  {{> page-template-gallery page-template-gallery--modifier="pf-m-fill"}}
  {{> page-template-footer}}
{{/inline}}
```

### Horizontal nav with horizontal subnav
```hbs isFullscreen
{{> page-template
      page-template--id="nav-horizontal-example"
      page-template--HasNoSidebar="true"
      masthead-template--modifier="pf-m-display-stack pf-m-display-inline-on-lg"
      masthead-template--HasHorizontalNav="true"
}}

{{#* inline "page-template-main-content"}}
  {{> page-template-horizontal-subnav}}
  {{> page-template-breadcrumb}}
  {{> page-template-title}}
  {{> page-template-gallery page-template-gallery--modifier="pf-m-fill"}}
{{/inline}}
```

### Legacy tertiary nav
```hbs isFullscreen
{{> page-template page-template--id="nav-legacy-teriary-example" page-template-sidebar--nav--IsExpandable="true"}}

{{#* inline "page-template-main-content"}}
  {{> page-template-tertiary-nav}}
  {{> page-template-breadcrumb}}
  {{> page-template-title}}
  {{> page-template-gallery page-template-gallery--modifier="pf-m-fill"}}
{{/inline}}
```

### Grouped nav
```hbs isFullscreen
{{> page-template page-template--id="nav-grouped-nav-example" page-template-sidebar--nav--IsExpandable="true"}}

{{#* inline "page-template-sidebar"}}
  {{#> page-sidebar}}
    {{#> nav nav--attribute=(concat 'id="' page--id '-grouped-nav" aria-label="Global"')}}
      {{#> nav-section nav-section--attribute='aria-labelledby="grouped-title1"'}}
        {{#> nav-section-title nav-section-title--attribute='id="grouped-title1"'}}
          System panel
        {{/nav-section-title}}
        {{#> nav-list nav-list--type="simple"}}
          {{#> nav-item newcontent}}
            {{#> nav-link nav-link--href="#"}}
              Overview
            {{/nav-link}}
          {{/nav-item}}
          {{#> nav-item newcontent}}
            {{#> nav-link nav-link--href="#"}}
              Resource usage
            {{/nav-link}}
          {{/nav-item}}
          {{#> nav-item newcontent}}
            {{#> nav-link nav-link--href="#" nav-link--current="true"}}
              Hypervisors
            {{/nav-link}}
          {{/nav-item}}
          {{#> nav-item newcontent}}
            {{#> nav-link nav-link--href="#"}}
              Instances
            {{/nav-link}}
          {{/nav-item}}
          {{#> nav-item newcontent}}
            {{#> nav-link nav-link--href="#"}}
              Volumes
            {{/nav-link}}
          {{/nav-item}}
          {{#> nav-item newcontent}}
            {{#> nav-link nav-link--href="#"}}
              Networks
            {{/nav-link}}
          {{/nav-item}}
        {{/nav-list}}
      {{/nav-section}}
      {{#> nav-section nav-section--attribute='aria-labelledby="grouped-title2"'}}
        {{#> nav-section-title nav-section-title--attribute='id="grouped-title2"'}}
          Policy
        {{/nav-section-title}}
        {{#> nav-list nav-list--type="simple"}}
          {{#> nav-item newcontent}}
            {{#> nav-link nav-link--href="#"}}
              Hosts
            {{/nav-link}}
          {{/nav-item}}
          {{#> nav-item newcontent}}
            {{#> nav-link nav-link--href="#"}}
              Virtual machines
            {{/nav-link}}
          {{/nav-item}}
          {{#> nav-item newcontent}}
            {{#> nav-link nav-link--href="#"}}
              Storage
            {{/nav-link}}
          {{/nav-item}}
        {{/nav-list}}
      {{/nav-section}}
    {{/nav}}
  {{/page-sidebar}}
{{/inline}}
```

### Light theme sidebar and nav
```hbs isFullscreen
{{> page-template
      page-template--id="nav-light-theme-example"
      page-template-sidebar--nav--IsExpandable="true"
      page-sidebar--modifier="pf-m-light"
      nav--modifier="pf-m-light"
}}
```
