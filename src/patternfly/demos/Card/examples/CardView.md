---
id: Card
section: components
wrapperTag: div
---

## Demos
### Card view
```hbs isFullscreen
{{#> page page--id="card-view"}}
  {{#> skip-to-content skip-to-content--attribute=(concat 'href="#main-content-' page--id '"')}}
    Skip to content
  {{/skip-to-content}}
  {{#> page-header}}
    {{!-- Brand --}}
    {{#> page-header-brand}}
      {{#> page-header-brand-toggle}}
        {{#> button button--modifier="pf-m-plain" button--attribute=(concat 'id="' page--id '-nav-toggle" aria-label="Global navigation" aria-expanded="true" aria-controls="' page--id '-primary-nav"')}}
          <i class="fas fa-bars" aria-hidden="true"></i>
        {{/button}}
      {{/page-header-brand-toggle}}
      {{#> page-header-brand-link page-header-brand-link--href="#"}}
        {{#> brand brand--attribute='src="/assets/images/PF-Masthead-Logo.svg" alt="Patternfly Logo"'}}{{/brand}}
      {{/page-header-brand-link}}
    {{/page-header-brand}}

    {{#> page-template-header-tools-elements}}
    {{/page-template-header-tools-elements}}
  {{/page-header}}
  {{!-- Nav --}}
  {{#> page-sidebar}}
    {{#> nav nav--attribute=(concat 'id="' page--id '-primary-nav" aria-label="Global"')}}
      {{#> nav-list}}
        {{#> nav-item}}
          {{#> nav-link nav-link--href="#" nav-link--current="true"}}
            System Panel
          {{/nav-link}}
        {{/nav-item}}
        {{#> nav-item}}
          {{#> nav-link nav-link--href="#"}}
            Policy
          {{/nav-link}}
        {{/nav-item}}
        {{#> nav-item}}
          {{#> nav-link nav-link--href="#"}}
            Authentication
          {{/nav-link}}
        {{/nav-item}}
        {{#> nav-item}}
          {{#> nav-link nav-link--href="#"}}
            Network Services
          {{/nav-link}}
        {{/nav-item}}
        {{#> nav-item}}
          {{#> nav-link nav-link--href="#"}}
            Server
          {{/nav-link}}
        {{/nav-item}}
      {{/nav-list}}
    {{/nav}}
  {{/page-sidebar}}
  {{#> page-main page-main--attribute=(concat 'id="main-content-' page--id '"')}}
    {{#> page-main-section page-main-section--modifier="pf-m-light"}}
      {{#> content}}
        <h1>Projects</h1>
        <p>This is a demo that showcases Patternfly Cards. </p>
      {{/content}}
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-light pf-m-no-padding"}}
      {{> toolbar--template toolbar--id=(concat page--id '-toolbar') toolbar--modifier="pf-m-page-insets" toolbar--template--HasBulkSelect="true" toolbar--template--HasOverflowMenu="true" toolbar--template--HasFilter="true" toolbar--template--HasToggleGroup="true"}}
    {{/page-main-section}}
    {{#> page-main-section}}
      {{> card-view-demo-template-gallery}}
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-light pf-m-sticky-bottom"}}
      {{#> pagination pagination--modifier="pf-m-bottom"}}
        {{> pagination-options-menu id="pagination-options-menu-bottom-example" options-menu--IsText="true" pagination-options-menu--modifier="pf-m-top"}}
        {{> pagination-nav-content}}
      {{/pagination}}
    {{/page-main-section}}
  {{/page-main}}
{{/page}}
```

### Horizontal grid collapsed
```hbs
{{#> card card--id="card-demo-horizontal-grid-collapsed"}}
  {{#> card-header}}
    {{> card-header-toggle}}
    {{#> card-actions}}
      {{> dropdown dropdown--id=(concat card--id "-dropdown-kebab-right-aligned") dropdown-toggle--IsPlain="true"}}
    {{/card-actions}}
    {{#> level level--modifier="pf-m-gutter"}}
      {{#> card-title card-title--attribute=(concat 'id="' card--id '-title"')}}
        Getting started
      {{/card-title}}
      {{#> label-group label-group--id="label-group-basic"}}
        {{#> label-group-main}}
          {{#> label-group-list label-group-list--attribute='aria-label="Group of labels"'}}
            {{#> label-group-list-item}}
              {{#> label label--modifier="pf-m-blue"}}
                {{#> label-icon}}
                  <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
                {{/label-icon}}
                Set up your cluster
              {{/label}}
            {{/label-group-list-item}}
            {{#> label-group-list-item}}
              {{#> label label--modifier="pf-m-purple"}}
                {{#> label-icon}}
                  <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
                {{/label-icon}}
                Guided tours
              {{/label}}
            {{/label-group-list-item}}
            {{#> label-group-list-item}}
              {{#> label label--modifier="pf-m-green"}}
                {{#> label-icon}}
                  <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
                {{/label-icon}}
                Quick starts
              {{/label}}
            {{/label-group-list-item}}
            {{#> label-group-list-item}}
              {{#> label label--IsOverflow="true"}}
                1 more
              {{/label}}
            {{/label-group-list-item}}
          {{/label-group-list}}
        {{/label-group-main}}
      {{/label-group}}
    {{/level}}
  {{/card-header}}
{{/card}}
```

### Horizontal grid expanded
```hbs
{{#> card card--id="card-demo-horizontal-grid-expanded" card--modifier="pf-m-expanded"}}
  {{#> card-header}}
    {{> card-header-toggle}}
    {{#> card-actions}}
      {{> dropdown dropdown--id=(concat card--id "-dropdown-kebab-right-aligned") dropdown-toggle--IsPlain="true"}}
    {{/card-actions}}
    {{#> card-title card-title--attribute=(concat 'id="' card--id '-title"')}}
      Getting started
    {{/card-title}}
  {{/card-header}}
  {{#> card-expandable-content}}
    {{#> card-body}}
      {{#> grid grid--modifier="pf-m-all-6-col-on-md pf-m-all-3-col-on-lg pf-m-gutter"}}
        {{#> l-flex l-flex--modifier="pf-m-space-items-lg pf-m-column pf-m-align-items-flex-start"}}
          {{#> l-flex l-flex--modifier="pf-m-space-items-sm pf-m-column pf-m-align-items-flex-start pf-m-grow"}}
            {{#> label label--modifier="pf-m-blue"}}
              {{#> label-icon}}
                <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
              {{/label-icon}}
              Set up your cluster
            {{/label}}
            <p>Continue setting up your cluster to access all you cain in the Console</p>
            {{#> list list--modifier="pf-m-plain"}}
              <li>
                <a href="#">Add identity provider</a>
              </li>
              <li>
                <a href="#">Configure alert receivers</a>
              </li>
              <li>
                <a href="#">Configure default ingress certificate</a>
              </li>
            {{/list}}
          {{/l-flex}}
          {{#> button-link button-link--modifier="pf-m-link pf-m-inline" button-link--attribute='href="#"'}}
            View all set up cluster steps
            {{#> button-icon button-icon--modifier="pf-m-end"}}
              <i class="fas fa-arrow-right" aria-hidden="true"></i>
            {{/button-icon}}
          {{/button-link}}
        {{/l-flex}}
        {{#> l-flex l-flex--modifier="pf-m-space-items-lg pf-m-column pf-m-align-items-flex-start"}}
          {{#> l-flex l-flex--modifier="pf-m-space-items-sm pf-m-column pf-m-align-items-flex-start pf-m-grow"}}
            {{#> label label--modifier="pf-m-purple"}}
              {{#> label-icon}}
                <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
              {{/label-icon}}
              Guided tours
            {{/label}}
            <p>Tour some of the key features around the console</p>
            {{#> list list--modifier="pf-m-plain"}}
              <li>
                <a href="#">Tour the console</a>
              </li>
              <li>
                <a href="#">Explore the Developer perspective</a>
              </li>
            {{/list}}
          {{/l-flex}}
          {{#> button-link button-link--modifier="pf-m-link pf-m-inline" button-link--attribute='href="#"'}}
            View all guided tours
            {{#> button-icon button-icon--modifier="pf-m-end"}}
              <i class="fas fa-arrow-right" aria-hidden="true"></i>
            {{/button-icon}}
          {{/button-link}}
        {{/l-flex}}
        {{#> l-flex l-flex--modifier="pf-m-space-items-lg pf-m-column pf-m-align-items-flex-start"}}
          {{#> l-flex l-flex--modifier="pf-m-space-items-sm pf-m-column pf-m-align-items-flex-start pf-m-grow"}}
            {{#> label label--modifier="pf-m-green"}}
              {{#> label-icon}}
                <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
              {{/label-icon}}
              Quick starts
            {{/label}}
            <p>Get started with features using our step-by-step documentation</p>
            {{#> list list--modifier="pf-m-plain"}}
              <li>
                <a href="#">Getting started with Serverless</a>
              </li>
              <li>
                <a href="#">Explore virtualization</a>
              </li>
              <li>
                <a href="#">Build pipelines</a>
              </li>
            {{/list}}
          {{/l-flex}}
          {{#> button-link button-link--modifier="pf-m-link pf-m-inline" button-link--attribute='href="#"'}}
            View all quick starts
            {{#> button-icon button-icon--modifier="pf-m-end"}}
              <i class="fas fa-arrow-right" aria-hidden="true"></i>
            {{/button-icon}}
          {{/button-link}}
        {{/l-flex}}
        {{#> l-flex l-flex--modifier="pf-m-space-items-lg pf-m-column pf-m-align-items-flex-start"}}
          {{#> l-flex l-flex--modifier="pf-m-space-items-sm pf-m-column pf-m-align-items-flex-start pf-m-grow"}}
            {{#> label label--modifier="pf-m-orange"}}
              {{#> label-icon}}
                <i class="fas fa-fw fa-info-circle" aria-hidden="true"></i>
              {{/label-icon}}
              Learning resources
            {{/label}}
            <p>Learn about new features within the Console and get started with demo apps</p>
            {{#> list list--modifier="pf-m-plain"}}
              <li>
                <a href="#">See what's possible with the Explore page</a>
              </li>
              <li>
                <a href="#">OpenShift 4.5: Top Tasks <i class="fas fa-external-link-alt" aria-hidden="true"></i></a>
              </li>
              <li>
                <a href="#">Try a demo app</a>
              </li>
            {{/list}}
          {{/l-flex}}
          {{#> button-link button-link--modifier="pf-m-link pf-m-inline" button-link--attribute='href="#"'}}
            View all learning resources
            {{#> button-icon button-icon--modifier="pf-m-end"}}
              <i class="fas fa-arrow-right" aria-hidden="true"></i>
            {{/button-icon}}
          {{/button-link}}
        {{/l-flex}}
      {{/grid}}
    {{/card-body}}
  {{/card-expandable-content}}
{{/card}}
```

### Horizontal split
```hbs
{{#> card card--id="card-demo-horizontal-split" card--modifier="pf-m-flat"}}
  {{#> grid grid--modifier="pf-m-all-6-col-on-md"}}
    {{#> grid-item grid-item--modifier="pf-d-card__media-item" grid-item--attribute='style="min-height: 200px; background: center / cover url(\'/assets/images/pfbg_992@2x.jpg\'); "'}}
    {{/grid-item}}
    {{#> grid-item}}
      {{#> card-title}}
        Headline
      {{/card-title}}
      {{#> card-body}}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse arcu purus, lobortis nec euismod eu, tristique ut sapien. Nullam turpis lectus, aliquet sit amet volutpat eu, semper eget quam. Maecenas in tempus diam. Aenean interdum velit sed massa aliquet, sit amet malesuada nulla hendrerit. Aenean non faucibus odio. Etiam non metus turpis. Praesent sollicitudin elit neque, id ullamcorper nibh faucibus eget.
      {{/card-body}}
      {{#> card-footer}}
        {{#> button button--modifier="pf-m-tertiary"}}Call to action{{/button}}
      {{/card-footer}}
    {{/grid-item}}
  {{/grid}}
{{/card}}
```
