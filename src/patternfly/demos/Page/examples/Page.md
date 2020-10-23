---
id: Page
section: components
wrapperTag: div
---

<!-- ## Demos
### Default nav
```hbs isFullscreen
{{> page-demo-default page-demo-default--id="page-default-nav-example"}}
```

### Expandable nav
```hbs isFullscreen
{{> page-demo-expandable-nav page-demo-expandable--id="page-expandable-nav-example"}}
``` -->

### Refactored page header
```hbs isFullscreen
{{#> page page--id="refactored-page-header"}}
  {{#> skip-to-content skip-to-content--attribute=(concat 'href="#main-content-' page--id '"')}}
    Skip to content
  {{/skip-to-content}}
  {{#> page-header-alt}}
    {{#> page-header-brand-toggle}}
      {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'id="' page--id '-nav-toggle" aria-label="Global navigation" aria-expanded="true" aria-controls="' page--id '-tertiary-nav"')}}
        <i class="fas fa-bars" aria-hidden="true"></i>
      {{/button}}
    {{/page-header-brand-toggle}}
    {{#> page-header-brand}}
      {{#> page-header-brand-link page-header-brand-link--href="#"}}
        {{> brand brand--attribute='src="/assets/images/PF-Masthead-Logo.svg" alt="PatternFly logo"'}}
        <span class="pf-c-brand__text" style='--pf-c-page__header-brand-link--c-brand__text--MarginTop: -10px; --pf-c-page__header-brand-link--c-brand__text--MarginLeft: 50px;'>
          subtext
        </span>
      {{/page-header-brand-link}}
    {{/page-header-brand}}
    {{#> page-header-content}}
      {{#> toolbar toolbar--id="toolbar-toggle-group-collapsed-example" toolbar--modifier="pf-m-show-on-lg"}}
        {{#> toolbar-content}}
          {{#> toolbar-content-section}}
            {{#> toolbar-group toolbar-group--modifier="pf-m-toggle-group pf-m-show-on-xl"}}
              {{> toolbar-toggle toolbar-toggle--modifier="pf-m-expanded" toolbar-toggle--IsExpanded="true"}}
              {{#> toolbar-group toolbar-group--modifier="pf-m-filter-group"}}
                {{#> toolbar-item}}
                  {{> page-template-context-selector}}
                {{/toolbar-item}}
                {{#> toolbar-item}}
                  {{> page-template-context-selector}}
                {{/toolbar-item}}
              {{/toolbar-group}}
            {{/toolbar-group}}
            {{#> toolbar-group toolbar-group--modifier="pf-m-align-right"}}
              {{#> toolbar-group toolbar-group--modifier="pf-m-icon-button-group"}}
                {{#> toolbar-item}}
                  {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Settings"'}}
                    <i class="fas fa-cog" aria-hidden="true"></i>
                  {{/button}}
                {{/toolbar-item}}
                {{#> toolbar-item}}
                  {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Help"'}}
                    <i class="pf-icon pf-icon-help" aria-hidden="true"></i>
                  {{/button}}
                {{/toolbar-item}}
                {{#> toolbar-item}}
                  {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Unread notifications" aria-expanded="false"'}}
                    {{#> notification-badge notification-badge--modifier="pf-m-read"}}
                      {{#if page-header-tools--IsAttention}}
                        <i class="pf-icon-attention-bell" aria-hidden="true"></i>
                      {{else}}
                        <i class="pf-icon-bell" aria-hidden="true"></i>
                      {{/if}}
                    {{/notification-badge}}
                  {{/button}}
                {{/toolbar-item}}
                {{#> toolbar-item}}
                  {{#> dropdown id=(concat page--id '-dropdown-kebab-right-aligned-1') dropdown--IsActionMenu="true" dropdown-menu--modifier="pf-m-align-right" dropdown-toggle--modifier="pf-m-plain" dropdown--HasKebabIcon="true" aria-label="Actions"}}
                  {{/dropdown}}
                {{/toolbar-item}}
              {{/toolbar-group}}
              {{#> toolbar-item}}
                {{#> dropdown id=(concat page--id '-dropdown') dropdown--IsMenuToggleImageText="true" dropdown--IsExpanded=""}}
                  {{#> dropdown-toggle-image}}
                    {{> avatar avatar--attribute='src="/assets/images/img_avatar.svg" alt="Avatar image"'}}
                  {{/dropdown-toggle-image}}
                  {{#> dropdown-toggle-text}}
                    John Smith
                  {{/dropdown-toggle-text}}
                  {{> dropdown-toggle-icon}}
                {{/dropdown}}
              {{/toolbar-item}}
            {{/toolbar-group}}
          {{/toolbar-content-section}}
          {{#> toolbar-expandable-content toolbar-expandable-content--IsExpanded}}
            {{#> toolbar-group toolbar-group--modifier="pf-m-filter-group"}}
              {{#> toolbar-item}}
                {{> page-template-context-selector}}
              {{/toolbar-item}}
              {{#> toolbar-item}}
                {{> page-template-context-selector}}
              {{/toolbar-item}}
            {{/toolbar-group}}
          {{/toolbar-expandable-content}}
        {{/toolbar-content}}
      {{/toolbar}}
    {{/page-header-content}}
  {{/page-header-alt}}
  {{#> page-sidebar}}
  {{/page-sidebar}}
  {{#> page-main}}
  {{/page-main}}
{{/page}}
```

### Horizontal nav
```hbs isFullscreen
{{#> page page--id="page-layout-horizontal-nav"}}
  {{#> skip-to-content skip-to-content--attribute=(concat 'href="#main-content-' page--id '"')}}
    Skip to content
  {{/skip-to-content}}
  {{#> page-header}}
    {{#> page-header-brand}}
      {{#> page-header-brand-link page-header-brand-link--href="#"}}
        {{#> brand brand--attribute='src="/assets/images/PF-Masthead-Logo.svg" alt="PatternFly logo"'}}{{/brand}}
      {{/page-header-brand-link}}
    {{/page-header-brand}}
    {{#> page-header-nav}}
      {{#> nav nav--IsHorizontal="true" nav--IsScrollable="true" nav--attribute=(concat 'id="' page--id '-horizontal-nav" aria-label="Global"')}}
        {{#> nav-list}}
          {{#> nav-item}}
            {{#> nav-link nav-link--href="#"}}
              Horizontal nav item 1
            {{/nav-link}}
          {{/nav-item}}
          {{#> nav-item}}
            {{#> nav-link nav-link--href="#"}}
              Horizontal nav item 2
            {{/nav-link}}
          {{/nav-item}}
          {{#> nav-item}}
            {{#> nav-link nav-link--href="#"}}
              Horizontal nav item 3
            {{/nav-link}}
          {{/nav-item}}
          {{#> nav-item}}
            {{#> nav-link nav-link--href="#"}}
              Horizontal nav item 4
            {{/nav-link}}
          {{/nav-item}}
          {{#> nav-item}}
            {{#> nav-link nav-link--href="#" nav-link--current="true"}}
              Horizontal nav item 5
            {{/nav-link}}
          {{/nav-item}}
        {{/nav-list}}
      {{/nav}}
    {{/page-header-nav}}
    {{#> page-template-header-tools-elements}}
    {{/page-template-header-tools-elements}}
  {{/page-header}}
  {{#> page-main page-main--attribute=(concat 'id="main-content-' page--id '"')}}
    {{#> page-template-breadcrumb}}
    {{/page-template-breadcrumb}}
    {{#> page-template-title}}
    {{/page-template-title}}
    {{#> page-template-gallery}}
    {{/page-template-gallery}}
  {{/page-main}}
{{/page}}
```

### Tertiary nav
```hbs isFullscreen
{{#> page page--id="page-layout-tertiary-nav"}}
  {{#> skip-to-content skip-to-content--attribute=(concat 'href="#main-content-' page--id '"')}}
    Skip to content
  {{/skip-to-content}}
  {{#> page-header}}
    {{!-- Brand --}}
    {{#> page-header-brand}}
      {{#> page-header-brand-toggle}}
        {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'id="' page--id '-nav-toggle" aria-label="Global navigation" aria-expanded="true" aria-controls="' page--id '-tertiary-nav"')}}
          <i class="fas fa-bars" aria-hidden="true"></i>
        {{/button}}
      {{/page-header-brand-toggle}}
      {{#> page-header-brand-link page-header-brand-link--href="#"}}
        {{#> brand brand--attribute='src="/assets/images/PF-Masthead-Logo.svg" alt="PatternFly logo"'}}{{/brand}}
      {{/page-header-brand-link}}
    {{/page-header-brand}}
    {{#> page-template-header-tools-elements}}
    {{/page-template-header-tools-elements}}
  {{/page-header}}

  {{#> page-sidebar}}
    {{#> nav nav--attribute=(concat 'id="' page--id '-tertiary-nav" aria-label="Global"')}}
      {{#> nav-list}}
        {{#> nav-item nav-item--expandable="true" nav-item--expanded="true" nav-item--current="true"}}
          {{#> nav-link nav-link--href="#" nav-link--attribute='id="tertiary-nav-link1"'}}
            System panel
          {{/nav-link}}
          {{#> nav-subnav nav-subnav--attribute='aria-labelledby="tertiary-nav-link1"'}}
            {{#> nav-list}}
              {{#> nav-item newcontent}}
                {{#> nav-link nav-link--href="#"}}
                  Overview
                {{/nav-link}}
              {{/nav-item}}
              {{#> nav-item newcontent}}
                {{#> nav-link nav-link--href="#" nav-link--current="true"}}
                  Resource usage
                {{/nav-link}}
              {{/nav-item}}
              {{#> nav-item newcontent}}
                {{#> nav-link nav-link--href="#"}}
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
          {{/nav-subnav}}
        {{/nav-item}}
        {{#> nav-item nav-item--expandable="true"}}
          {{#> nav-link nav-link--href="#" nav-link--attribute='id="tertiary-nav-link2"'}}
            Policy
          {{/nav-link}}
          {{#> nav-subnav nav-subnav--attribute='aria-labelledby="tertiary-nav-link2"'}}
            {{#> nav-list}}
              {{#> nav-item newcontent}}
                {{#> nav-link nav-link--href="#"}}
                  Subnav link 1
                {{/nav-link}}
              {{/nav-item}}
              {{#> nav-item newcontent}}
                {{#> nav-link nav-link--href="#"}}
                  Subnav link 2
                {{/nav-link}}
              {{/nav-item}}
            {{/nav-list}}
          {{/nav-subnav}}
        {{/nav-item}}
        {{#> nav-item nav-item--expandable="true"}}
          {{#> nav-link nav-link--href="#" nav-link--attribute='id="tertiary-nav-link3"'}}
            Authentication
          {{/nav-link}}
          {{#> nav-subnav nav-subnav--attribute='aria-labelledby="tertiary-nav-link3"'}}
            {{#> nav-list}}
              {{#> nav-item newcontent}}
                {{#> nav-link nav-link--href="#"}}
                  Subnav link 1
                {{/nav-link}}
              {{/nav-item}}
              {{#> nav-item newcontent}}
                {{#> nav-link nav-link--href="#"}}
                  Subnav link 2
                {{/nav-link}}
              {{/nav-item}}
            {{/nav-list}}
          {{/nav-subnav}}
        {{/nav-item}}
      {{/nav-list}}
    {{/nav}}
  {{/page-sidebar}}
  {{#> page-main page-main--attribute=(concat 'id="main-content-' page--id '"')}}
    {{> page-template-tertiary-nav}}
    {{> page-template-breadcrumb}}
    {{> page-template-title}}
    {{> page-template-gallery page-template-gallery--modifier="pf-m-fill"}}
    {{> page-template-footer}}
  {{/page-main}}
{{/page}}
```

### Grouped nav
```hbs isFullscreen
{{#> page page--id="page-layout-grouped-nav"}}
  {{#> skip-to-content skip-to-content--attribute=(concat 'href="#main-content-' page--id '"')}}
    Skip to content
  {{/skip-to-content}}
  {{#> page-header}}
    {{#> page-header-brand}}
      {{#> page-header-brand-toggle}}
        {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'id="' page--id '-nav-toggle" aria-label="Global navigation" aria-expanded="true" aria-controls="' page--id '-grouped-nav"')}}
          <i class="fas fa-bars" aria-hidden="true"></i>
        {{/button}}
      {{/page-header-brand-toggle}}
      {{#> page-header-brand-link page-header-brand-link--href="#"}}
        {{#> brand brand--attribute='src="/assets/images/PF-Masthead-Logo.svg" alt="PatternFly logo"'}}{{/brand}}
      {{/page-header-brand-link}}
    {{/page-header-brand}}
    {{#> page-template-header-tools-elements}}
    {{/page-template-header-tools-elements}}
  {{/page-header}}
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
  {{#> page-main page-main--attribute=(concat 'id="main-content-' page--id '"')}}
    {{#> page-template-title}}
    {{/page-template-title}}
    {{#> page-main-section page-main-section--modifier="pf-m-light"}}
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-dark-200"}}
    {{/page-main-section}}
    {{#> page-main-section}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

### Light theme sidebar and nav
```hbs isFullscreen
{{#> page-demo-expandable-nav page-demo-expandable--id="page-light-sidebar-nav-example"  page-sidebar--modifier="pf-m-light" nav--modifier="pf-m-light"}}{{/page-demo-expandable-nav}}
```

### Sticky tertiary nav
```hbs isFullscreen
{{> page-demo-sticky-top-tertiary-nav page-demo-default--id="page-demo-sticky-top-tertiary-nav"}}
```

### Sticky breadcrumb
```hbs isFullscreen
{{> page-demo-sticky-top-breadcrumb page-demo-default--id="page-demo-sticky-top-breadcrumb"}}
```

### Sticky section group
```hbs isFullscreen
{{> page-demo-sticky-top-section-group page-demo-default--id="page-demo-sticky-top-section-group"}}
```

### Sticky section bottom
```hbs isFullscreen
{{> page-demo-sticky-section-bottom page-demo-default--id="page-demo-sticky-section-bottom"}}
```

### Overflow scroll
```hbs isFullscreen
{{> page-demo-overflow-scroll page-demo-default--id="page-demo-overflow-scroll"}}
```

## Documentation
This demo implements all variations of the nav component in the page component. To make the page component take up the full height of the viewport, it is recommended to add `height: 100%;` to all ancestor elements of the page component.
