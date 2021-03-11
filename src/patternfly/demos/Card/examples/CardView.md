---
id: Card
section: components
wrapperTag: div
---

import './CardView.css'

## Demos

### Card view
```hbs isFullscreen
{{#> page page--id="card-view-example"}}
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
    {{#> page-main-section page-main-section--modifier="pf-m-fill"}}
      {{> cardview-demo--template-gallery}}
    {{/page-main-section}}
    {{#> page-main-section page-main-section--modifier="pf-m-no-padding pf-m-light pf-m-sticky-bottom pf-m-no-fill"}}
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
{{#> card card--id="card-demo-horizontal-grid-collapsed-example"}}
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
{{#> card card--id="card-demo-horizontal-grid-expanded-example" card--modifier="pf-m-expanded"}}
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
{{#> card card--id="card-demo-horizontal-split-example" card--modifier="pf-m-flat"}}
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

### Details card
```hbs
{{#> gallery gallery--modifier="pf-m-gutter" gallery--attribute='style="--pf-l-gallery--GridTemplateColumns--min: 260px;"'}}
  {{#> card}}
    {{#> card-title}}
      {{#> title titleType="h2" title--modifier="pf-m-xl"}}
        Details
      {{/title}}
    {{/card-title}}
    {{#> card-body}}
      {{#> description-list}}
        {{#> description-list-group}}
          {{#> description-list-term}}
            Cluster API Address
          {{/description-list-term}}
          {{#> description-list-description}}
            <a href="#">https://api1.devcluster.openshift.com</a>
          {{/description-list-description}}
        {{/description-list-group}}
        {{#> description-list-group}}
          {{#> description-list-term}}
            Cluster ID
          {{/description-list-term}}
          {{#> description-list-description}}
            63b97ac1-b850-41d9-8820-239becde9e86
          {{/description-list-description}}
        {{/description-list-group}}
        {{#> description-list-group}}
          {{#> description-list-term}}
            Provider
          {{/description-list-term}}
          {{#> description-list-description}}
            AWS
          {{/description-list-description}}
        {{/description-list-group}}
        {{#> description-list-group}}
          {{#> description-list-term}}
            OpenShift Version
          {{/description-list-term}}
          {{#> description-list-description}}
            4.5.0.ci-2020-06-16-015028
          {{/description-list-description}}
        {{/description-list-group}}
        {{#> description-list-group}}
          {{#> description-list-term}}
            Update Channel
          {{/description-list-term}}
          {{#> description-list-description}}
            stable-4.5
          {{/description-list-description}}
        {{/description-list-group}}
      {{/description-list}}
    {{/card-body}}
    {{> divider}}
    {{#> card-footer}}
      <a href="#">View Settings</a>
    {{/card-footer}}
  {{/card}}
  {{#> card}}
    {{#> card-title}}
      {{#> title titleType="h2" title--modifier="pf-m-xl"}}
        Details
      {{/title}}
    {{/card-title}}
    {{#> card-body}}
      {{#> description-list}}
        {{#> description-list-group}}
          {{#> description-list-term}}
            Cluster API Address
          {{/description-list-term}}
          {{#> description-list-description}}
            https://api2.devcluster.openshift.com
          {{/description-list-description}}
        {{/description-list-group}}
        {{#> description-list-group}}
          {{#> description-list-term}}
            Cluster ID
          {{/description-list-term}}
          {{#> description-list-description}}
            08908908-b850-41d9-8820-239becde9e86
          {{/description-list-description}}
        {{/description-list-group}}
        {{#> description-list-group}}
          {{#> description-list-term}}
            Provider
          {{/description-list-term}}
          {{#> description-list-description}}
            Azure
          {{/description-list-description}}
        {{/description-list-group}}
        {{#> description-list-group}}
          {{#> description-list-term}}
            OpenShift Version
          {{/description-list-term}}
          {{#> description-list-description}}
            4.5.0.ci-2020-06-16-015026
          {{/description-list-description}}
        {{/description-list-group}}
        {{#> description-list-group}}
          {{#> description-list-term}}
            Update Channel
          {{/description-list-term}}
          {{#> description-list-description}}
            stable-4.4
          {{/description-list-description}}
        {{/description-list-group}}
      {{/description-list}}
    {{/card-body}}
    {{> divider}}
    {{#> card-footer}}
      <a href="#">View Settings</a>
    {{/card-footer}}
  {{/card}}
{{/gallery}}
```

### Aggregiate status card
```hbs
{{#> grid grid--modifier="pf-m-gutter"}}
  {{#> grid-item}}
    {{#> gallery gallery--modifier="pf-m-gutter"}}
      {{#> card card--modifier="pf-u-text-align-center"}}
        {{#> card-title}}
          5 Clusters
        {{/card-title}}
        {{#> card-body}}
          <i class="fas fa-check-circle pf-u-success-color-100" aria-hidden="true"></i>
        {{/card-body}}
      {{/card}}
      {{#> card card--modifier="pf-u-text-align-center"}}
        {{#> card-title}}
          15 Clusters
        {{/card-title}}
        {{#> card-body}}
          <i class="fas fa-exclamation-triangle pf-u-warning-color-100" aria-hidden="true"></i>
        {{/card-body}}
      {{/card}}
      {{#> card card--modifier="pf-u-text-align-center"}}
        {{#> card-title}}
          3 Clusters
        {{/card-title}}
        {{#> card-body}}
          <i class="fas fa-times-circle pf-u-danger-color-100" aria-hidden="true"></i>
        {{/card-body}}
      {{/card}}
    {{/gallery}}
  {{/grid-item}}
  {{#> grid-item}}
    {{#> gallery gallery--modifier="pf-m-gutter"}}
      {{#> card card--modifier="pf-u-text-align-center"}}
        {{#> card-title}}
            10 Hosts
        {{/card-title}}
        {{#> card-body}}
          {{#> l-flex l-flex--modifier="pf-m-inline-flex"}}
            {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
              {{#> l-flex-item}}
                <i class="fas fa-exclamation-circle pf-u-success-color-100" aria-hidden="true"></i>
              {{/l-flex-item}}
              {{#> l-flex-item}}
                <a href="#">2</a>
              {{/l-flex-item}}
            {{/l-flex}}
            {{> divider divider--modifier="pf-m-vertical"}}
            {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
              {{#> l-flex-item}}
                <i class="fas fa-exclamation-triangle pf-u-warning-color-100" aria-hidden="true"></i>
              {{/l-flex-item}}
              {{#> l-flex-item}}
                <a href="#">1</a>
              {{/l-flex-item}}
            {{/l-flex}}
          {{/l-flex}}
        {{/card-body}}
      {{/card}}
      {{#> card card--modifier="pf-u-text-align-center"}}
        {{#> card-title}}
            50 Hosts
        {{/card-title}}
        {{#> card-body}}
          {{#> l-flex l-flex--modifier="pf-m-inline-flex"}}
            {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
              {{#> l-flex-item}}
                <i class="fas fa-check-circle pf-u-success-color-100" aria-hidden="true"></i>
              {{/l-flex-item}}
              {{#> l-flex-item}}
                <a href="#">5</a>
              {{/l-flex-item}}
            {{/l-flex}}
            {{> divider divider--modifier="pf-m-vertical"}}
            {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
              {{#> l-flex-item}}
                <i class="fas fa-times-circle pf-u-danger-color-100" aria-hidden="true"></i>
              {{/l-flex-item}}
              {{#> l-flex-item}}
                <a href="#">12</a>
              {{/l-flex-item}}
            {{/l-flex}}
          {{/l-flex}}
        {{/card-body}}
      {{/card}}
      {{#> card card--modifier="pf-u-text-align-center"}}
        {{#> card-title}}
            12 Hosts
        {{/card-title}}
        {{#> card-body}}
          {{#> l-flex l-flex--modifier="pf-m-inline-flex"}}
            {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
              {{#> l-flex-item}}
                <i class="fas fa-exclamation-triangle pf-u-warning-color-100" aria-hidden="true"></i>
              {{/l-flex-item}}
              {{#> l-flex-item}}
                <a href="#">2</a>
              {{/l-flex-item}}
            {{/l-flex}}
            {{> divider divider--modifier="pf-m-vertical"}}
            {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
              {{#> l-flex-item}}
                <i class="fas fa-times-circle pf-u-danger-color-100" aria-hidden="true"></i>
              {{/l-flex-item}}
              {{#> l-flex-item}}
                <a href="#">7</a>
              {{/l-flex-item}}
            {{/l-flex}}
          {{/l-flex}}
        {{/card-body}}
      {{/card}}
    {{/gallery}}
  {{/grid-item}}
  {{#> grid-item}}
    {{#> gallery gallery--modifier="pf-m-gutter" gallery--attribute='style="--pf-l-gallery--GridTemplateColumns--min: 260px;"'}}
      {{#> card}}
        {{#> card-title card-title--modifier="pf-u-text-align-center"}}
            13 Hosts
        {{/card-title}}
        {{#> card-body}}
          {{#> l-flex l-flex--modifier="pf-m-justify-content-space-around"}}
            {{#> l-flex newcontext}}
              {{#> l-flex-item}}
                <i class="fas fa-times-circle pf-u-danger-color-100" aria-hidden="true"></i>
              {{/l-flex-item}}
              {{#> l-flex l-flex--modifier="pf-m-column pf-m-space-items-none"}}
                {{#> l-flex-item}}
                  <a href="#">2 errors</a>
                {{/l-flex-item}}
                {{#> l-flex-item}}
                  <span>subtitle</span>
                {{/l-flex-item}}
              {{/l-flex}}
            {{/l-flex}}
            {{#> l-flex}}
              {{#> l-flex-item}}
                <i class="fas fa-exclamation-triangle pf-u-warning-color-100" aria-hidden="true"></i>
              {{/l-flex-item}}
              {{#> l-flex l-flex--modifier="pf-m-column pf-m-space-items-none"}}
                {{#> l-flex-item}}
                  <a href="#">1 warnings</a>
                {{/l-flex-item}}
                {{#> l-flex-item}}
                  <span>subtitle</span>
                {{/l-flex-item}}
              {{/l-flex}}
            {{/l-flex}}
          {{/l-flex}}
        {{/card-body}}
      {{/card}}
      {{#> card}}
        {{#> card-title card-title--modifier="pf-u-text-align-center"}}
            3 Hosts
        {{/card-title}}
        {{#> card-body}}
          {{#> l-flex l-flex--modifier="pf-m-justify-content-space-around"}}
            {{#> l-flex newcontext}}
              {{#> l-flex-item}}
                <i class="fas fa-check-circle pf-u-success-color-100" aria-hidden="true"></i>
              {{/l-flex-item}}
              {{#> l-flex l-flex--modifier="pf-m-column pf-m-space-items-none"}}
                {{#> l-flex-item}}
                  <a href="#">2 successes</a>
                {{/l-flex-item}}
                {{#> l-flex-item}}
                  <span>subtitle</span>
                {{/l-flex-item}}
              {{/l-flex}}
            {{/l-flex}}
            {{#> l-flex}}
              {{#> l-flex-item}}
                <i class="fas fa-exclamation-triangle pf-u-warning-color-100" aria-hidden="true"></i>
              {{/l-flex-item}}
              {{#> l-flex l-flex--modifier="pf-m-column pf-m-space-items-none"}}
                {{#> l-flex-item}}
                  <a href="#">3 warnings</a>
                {{/l-flex-item}}
                {{#> l-flex-item}}
                  <span>subtitle</span>
                {{/l-flex-item}}
              {{/l-flex}}
            {{/l-flex}}
          {{/l-flex}}
        {{/card-body}}
      {{/card}}
      {{#> card}}
        {{#> card-title card-title--modifier="pf-u-text-align-center"}}
            50 Hosts
        {{/card-title}}
        {{#> card-body}}
          {{#> l-flex l-flex--modifier="pf-m-justify-content-space-around"}}
            {{#> l-flex newcontext}}
              {{#> l-flex-item}}
                <i class="fas fa-exclamation-triangle pf-u-warning-color-100" aria-hidden="true"></i>
              {{/l-flex-item}}
              {{#> l-flex l-flex--modifier="pf-m-column pf-m-space-items-none"}}
                {{#> l-flex-item}}
                  <a href="#">7 warnings</a>
                {{/l-flex-item}}
                {{#> l-flex-item}}
                  <span>subtitle</span>
                {{/l-flex-item}}
              {{/l-flex}}
            {{/l-flex}}
            {{#> l-flex}}
              {{#> l-flex-item}}
                <i class="fas fa-times-circle pf-u-danger-color-100" aria-hidden="true"></i>
              {{/l-flex-item}}
              {{#> l-flex l-flex--modifier="pf-m-column pf-m-space-items-none"}}
                {{#> l-flex-item}}
                  <a href="#">1 error</a>
                {{/l-flex-item}}
                {{#> l-flex-item}}
                  <span>subtitle</span>
                {{/l-flex-item}}
              {{/l-flex}}
            {{/l-flex}}
          {{/l-flex}}
        {{/card-body}}
      {{/card}}
    {{/gallery}}
  {{/grid-item}}
{{/grid}}
```

### Status, tabbed card
```hbs
{{#> card}}
  {{#> card-header}}
    {{#> title titleType="h2" title--modifier="pf-m-lg"}}
      Status
    {{/title}}
  {{/card-header}}
  {{#> card-body}}
    {{#> tabs tabs--id="status-tabs" tabs--modifier="pf-m-fill"}}
      {{#> tabs-list}}
        {{> __tabs-item __tabs-item--id="object-1" __tabs-item--aria-label="Object 1" __tabs-item--text="Object 1" __tabs-item--current="true"}}
        {{> __tabs-item __tabs-item--id="object-2" __tabs-item--aria-label="Object 2" __tabs-item--text="Object 2"}}
        {{> __tabs-item __tabs-item--id="object-3" __tabs-item--aria-label="Object 3" __tabs-item--text="Object 3"}}
      {{/tabs-list}}
    {{/tabs}}
  {{/card-body}}
  {{#> card-body}}
    {{#> tab-content tab-content--IsActive="true" tab-content--attribute=(concat 'id="' primary-detail-template--id '-tab1-panel"')}}
      {{#> description-list description-list--modifier="pf-m-horizontal pf-m-2-col-on-lg"}}
        {{#> description-list-group}}
          {{#> description-list-term}}
            {{#> description-list-text}}
              {{#> grid}}
                {{#> grid-item grid-item--modifier="pf-m-3-col"}}
                  {{#> spinner spinner--modifier="pf-m-md" spinner--attribute='aria-label="Loading"'}}Loading...{{/spinner}}
                {{/grid-item}}
                {{#> grid-item grid-item--modifier="pf-m-9-col"}}
                  {{#> title titleType="h3" title--modifier="pf-m-md"}}
                    Running
                  {{/title}}
                {{/grid-item}}
              {{/grid}}
            {{/description-list-text}}
          {{/description-list-term}}
          {{#> description-list-description}}
            {{#> description-list-text}}
              <a href="#">Resource name that is long and can wrap</a>
            {{/description-list-text}}
            {{#> description-list-text}}
              121 systems
            {{/description-list-text}}
          {{/description-list-description}}
        {{/description-list-group}}
        {{#> description-list-group}}
          {{#> description-list-term}}
            {{#> description-list-text}}
              {{#> l-flex}}
                {{#> l-flex-item}}
                  <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
                {{/l-flex-item}}
                {{#> l-flex-item}}
                  {{#> title titleType="h3" title--modifier="pf-m-md"}}
                    Ready
                  {{/title}}
                {{/l-flex-item}}
              {{/l-flex}}
            {{/description-list-text}}
          {{/description-list-term}}
          {{#> description-list-description}}
            {{#> description-list-text}}
              <a href="#">Resource name</a>
            {{/description-list-text}}
            {{#> description-list-text}}
              121 systems
            {{/description-list-text}}
          {{/description-list-description}}
        {{/description-list-group}}
        {{#> description-list-group}}
          {{#> description-list-term}}
            {{#> description-list-text}}
              {{#> grid}}
                {{#> grid-item grid-item--modifier="pf-m-3-col"}}
                  {{#> spinner spinner--modifier="pf-m-md" spinner--attribute='aria-label="Loading"'}}Loading...{{/spinner}}
                {{/grid-item}}
                {{#> grid-item grid-item--modifier="pf-m-9-col"}}
                  {{#> title titleType="h3" title--modifier="pf-m-md"}}
                    Running
                  {{/title}}
                {{/grid-item}}
              {{/grid}}
            {{/description-list-text}}
          {{/description-list-term}}
          {{#> description-list-description}}
            {{#> description-list-text}}
              <a href="#">Resource name that is long and can wrap</a>
            {{/description-list-text}}
            {{#> description-list-text}}
              121 systems
            {{/description-list-text}}
          {{/description-list-description}}
        {{/description-list-group}}
        {{#> description-list-group}}
          {{#> description-list-term}}
            {{#> description-list-text}}
              {{#> l-flex}}
                {{#> l-flex-item}}
                  <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
                {{/l-flex-item}}
                {{#> l-flex-item}}
                  {{#> title titleType="h3" title--modifier="pf-m-md"}}
                    Ready
                  {{/title}}
                {{/l-flex-item}}
              {{/l-flex}}
            {{/description-list-text}}
          {{/description-list-term}}
          {{#> description-list-description}}
            {{#> description-list-text}}
              <a href="#">Resource name that is long and can wrap</a>
            {{/description-list-text}}
            {{#> description-list-text}}
              121 systems
            {{/description-list-text}}
          {{/description-list-description}}
        {{/description-list-group}}
      {{/description-list}}
    {{/tab-content}}
    {{#> tab-content tab-content--attribute=(concat 'id="' primary-detail-template--id '-tab2-panel"')}}
      Panel 2
    {{/tab-content}}
    {{#> tab-content tab-content--attribute=(concat 'id="' primary-detail-template--id '-tab3-panel"')}}
      Panel 3
    {{/tab-content}}
  {{/card-body}}
{{/card}}
```

### Status card
```hbs
{{> cardview-demo--status-card card--id="status-card-default-example"}}
```

### Status card expanded notifications
```hbs
{{> cardview-demo--status-card card--id="status-card-expanded-example" cardview-demo--notication-drawer--IsOpen="true"}}
```

### Status card expanded with popover
```hbs
{{> cardview-demo--status-card card--id="status-card-expanded-with-popover-example" cardview-demo--popover--IsOpen="true" cardview-demo--notication-drawer--IsOpen="true"}}
```

### Utilization card 1
```hbs
{{#> gallery gallery--modifier="pf-m-gutter" gallery--attribute='style="--pf-l-gallery--GridTemplateColumns--min: 360px;"'}}
  {{#> card card--id="utilization-card-1-example"}}
    {{#> card-title card-title--attribute=(concat 'id="' card--id '-title1"')}}
      {{#> title title--modifier="pf-m-lg" titleType="h2"}}
        Top Utilized Clusters
      {{/title}}
    {{/card-title}}
    {{#> card-body}}
      {{#> l-flex l-flex--modifier="pf-m-column pf-m-space-items-xs"}}
        {{#> l-flex-item}}
          {{#> stack}}
            {{#> stack-item}}
              <b>Cluster-1204</b>
            {{/stack-item}}
            {{#> stack-item}}
              <span>27.3 cores available</span>
            {{/stack-item}}
          {{/stack}}
        {{/l-flex-item}}
        {{#> l-flex-item l-flex-item--modifier="pf-m-spacer-md"}}
          {{> cardview-demo--chart}}
        {{/l-flex-item}}
        {{#> l-flex-item}}
          <a href="#">View details</a>
        {{/l-flex-item}}
      {{/l-flex}}
    {{/card-body}}
    {{#> card-body}}
      {{#> l-flex l-flex--modifier="pf-m-column pf-m-space-items-none"}}
        {{#> l-flex-item}}
          {{#> stack}}
            {{#> stack-item}}
              <b>Abcdef-1204</b>
            {{/stack-item}}
            {{#> stack-item}}
              <span>50.6 cores available</span>
            {{/stack-item}}
          {{/stack}}
        {{/l-flex-item}}
        {{#> l-flex-item l-flex-item--modifier="pf-m-spacer-md"}}
          {{> cardview-demo--chart}}
        {{/l-flex-item}}
        {{#> l-flex-item}}
          <a href="#">View details</a>
        {{/l-flex-item}}
      {{/l-flex}}
    {{/card-body}}
    {{> divider}}
    {{#> card-footer}}
      <a href="#">View all clusters</a>
    {{/card-footer}}
  {{/card}}
{{/gallery}}
```

### Utilization card 2
```hbs
{{#> gallery gallery--modifier="pf-m-gutter" gallery--attribute='style="--pf-l-gallery--GridTemplateColumns--min: 360px;"'}}
  {{#> card card--id="utilization-card-2-example"}}
    {{#> card-title card-title--attribute=(concat 'id="' card--id '-title1"')}}
      {{#> title title--modifier="pf-m-lg" titleType="h2"}}
        Top Utilized Clusters
      {{/title}}
    {{/card-title}}
    {{#> card-body}}
      {{#> l-flex l-flex--modifier="pf-m-column pf-m-space-items-xs"}}
        {{#> l-flex-item}}
          {{#> stack}}
            {{#> stack-item}}
              <a href="#">Cluster-1204</a>
            {{/stack-item}}
            {{#> stack-item}}
              <span>27.3 cores available</span>
            {{/stack-item}}
          {{/stack}}
        {{/l-flex-item}}
        {{#> l-flex-item}}
          {{> cardview-demo--chart}}
        {{/l-flex-item}}
      {{/l-flex}}
    {{/card-body}}
    {{#> card-body}}
      {{#> l-flex l-flex--modifier="pf-m-column pf-m-space-items-none"}}
        {{#> l-flex-item}}
          {{#> stack}}
            {{#> stack-item}}
              <a href="#">Abcdef-1204</a>
            {{/stack-item}}
            {{#> stack-item}}
              <span>50.6 cores available</span>
            {{/stack-item}}
          {{/stack}}
        {{/l-flex-item}}
        {{#> l-flex-item}}
          {{> cardview-demo--chart}}
        {{/l-flex-item}}
      {{/l-flex}}
    {{/card-body}}
    {{> divider}}
    {{#> card-footer}}
      <a href="#">View all clusters</a>
    {{/card-footer}}
  {{/card}}
{{/gallery}}
```

### Utilization card 3
```hbs
{{#> gallery gallery--modifier="pf-m-gutter" gallery--attribute='style="--pf-l-gallery--GridTemplateColumns--min: 360px;"'}}
  {{#> card card--id="utilization-card-3-example"}}
    {{#> card-header}}
      {{#> card-title card-title--attribute=(concat 'id="' card--id '-title1"')}}
        {{#> title title--modifier="pf-m-lg" titleType="h2"}}
          Recommendations
        {{/title}}
      {{/card-title}}
      {{#> card-actions}}
        {{> dropdown dropdown--id=(concat card--id '-dropdown') dropdown-toggle--text="Filter" dropdown-menu--modifier="pf-m-align-right"}}
      {{/card-actions}}
    {{/card-header}}
    {{#> card-body}}
      {{#> l-flex l-flex--modifier="pf-m-column pf-m-space-items-xs"}}
        {{#> l-flex-item}}
          <span>System</span>
        {{/l-flex-item}}
        {{#> l-flex newcontext}}
          {{#> l-flex-item}}
            <i class="fas fa-exclamation-circle pf-u-danger-color-100" aria-hidden="true"></i>
          {{/l-flex-item}}
          {{#> l-flex-item}}
            <a hfer="#">25 incidents detected</a>
          {{/l-flex-item}}
        {{/l-flex}}
        {{#> l-flex-item}}
          {{> cardview-demo--chart cardview-demo--chart--IsStackChart="true"}}
        {{/l-flex-item}}
      {{/l-flex}}
    {{/card-body}}
    {{#> card-footer}}
      <a href="#">See details</a>
    {{/card-footer}}
  {{/card}}
{{/gallery}}
```

### Utilization card 4
```hbs
{{#> gallery gallery--modifier="pf-m-gutter" gallery--attribute='style="--pf-l-gallery--GridTemplateColumns--min: 360px;"'}}
  {{#> card card--id="utilization-card-4-example"}}
    {{#> card-title card-title--attribute=(concat 'id="' card--id '-title1"')}}
      {{#> title title--modifier="pf-m-lg" titleType="h2"}}
        CPU Usage
      {{/title}}
    {{/card-title}}
    {{#> card-body}}
      {{> cardview-demo--chart cardview-demo--chart--IsThresholdChart="true"}}
    {{/card-body}}
    {{#> card-footer}}
      <a href="#">See details</a>
    {{/card-footer}}
  {{/card}}
{{/gallery}}
```

### Nested cards with expand toggle on the right
```hbs
{{#> card card--id="nested-cards-toggle-right-example"}}
  {{#> card-header}}
    {{#> card-title card-title--attribute=(concat 'id="' card--id '-title"')}}
      {{#> title title--modifier="pf-m-lg" titleType="h2"}}
        Hardware Monitor
      {{/title}}
    {{/card-title}}
  {{/card-header}}
  {{#> card card--id=(concat card--id '-group-1') card--modifier="pf-m-no-box-shadow pf-m-expanded"}}
    {{#> card-header card-header--modifier="pf-m-toggle-right"}}
      {{> card-header-toggle}}
      {{#> card-title card-title--attribute=(concat 'id="' card--id '-title"')}}
        <span class="pf-u-font-weight-light">
          CPU 1
        </span>
      {{/card-title}}
    {{/card-header}}
    {{#> card-expandable-content}}
      {{#> card-body}}
        {{> cardview-demo--stacked-sparklines}}
      {{/card-body}}
    {{/card-expandable-content}}
  {{/card}}
  {{#> card card--id=(concat card--id '-group-2') card--modifier="pf-m-no-box-shadow"}}
    {{#> card-header card-header--modifier="pf-m-toggle-right"}}
      {{> card-header-toggle}}
      {{#> card-title card-title--attribute=(concat 'id="' card--id '-title"')}}
        <span class="pf-u-font-weight-light">
          CPU 2
        </span>
      {{/card-title}}
    {{/card-header}}
  {{/card}}
  {{#> card card--id=(concat card--id '-group-3') card--modifier="pf-m-no-box-shadow"}}
    {{#> card-header card-header--modifier="pf-m-toggle-right"}}
      {{> card-header-toggle}}
      {{#> card-title card-title--attribute=(concat 'id="' card--id '-title"')}}
        <span class="pf-u-font-weight-light">
          CPU 3
        </span>
      {{/card-title}}
    {{/card-header}}
  {{/card}}
{{/card}}
```

### Nested cards with expand toggle
```hbs
{{#> card card--id="nested-cards-example"}}
  {{#> card-header}}
    {{#> card-title card-title--attribute=(concat 'id="' card--id '-title"')}}
      {{#> title title--modifier="pf-m-lg" titleType="h2"}}
        Hardware Monitor
      {{/title}}
    {{/card-title}}
  {{/card-header}}
  {{#> card card--id=(concat card--id '-group-1') card--modifier="pf-m-no-box-shadow pf-m-expanded"}}
    {{#> card-header}}
      {{> card-header-toggle}}
      {{#> card-title card-title--attribute=(concat 'id="' card--id '-title"')}}
        <span class="pf-u-font-weight-light">
          CPU 1
        </span>
      {{/card-title}}
    {{/card-header}}
    {{#> card-expandable-content}}
      {{#> card-body}}
        {{> cardview-demo--stacked-sparklines}}
      {{/card-body}}
    {{/card-expandable-content}}
  {{/card}}
  {{#> card card--id=(concat card--id '-group-2') card--modifier="pf-m-no-box-shadow"}}
    {{#> card-header}}
      {{> card-header-toggle}}
      {{#> card-title card-title--attribute=(concat 'id="' card--id '-title"')}}
        <span class="pf-u-font-weight-light">
          CPU 2
        </span>
      {{/card-title}}
    {{/card-header}}
  {{/card}}
  {{#> card card--id=(concat card--id '-group-3') card--modifier="pf-m-no-box-shadow"}}
    {{#> card-header}}
      {{> card-header-toggle}}
      {{#> card-title card-title--attribute=(concat 'id="' card--id '-title"')}}
        <span class="pf-u-font-weight-light">
          CPU 3
        </span>
      {{/card-title}}
    {{/card-header}}
  {{/card}}
{{/card}}
```

### With accordion
```hbs
{{#> card card--id="with-accordion-example"}}
  {{#> card-header}}
    {{#> card-title card-title--attribute=(concat 'id="' card--id '-title"')}}
      {{#> title title--modifier="pf-m-lg" titleType="h2"}}
        Hardware Monitor
      {{/title}}
    {{/card-title}}
  {{/card-header}}
  {{#> card-body}}
    {{#> accordion}}
      {{#> accordion-toggle accordion-toggle--IsExpanded="true" accordion-toggle--attribute='aria-expanded="true"'}}
        {{#> accordion-toggle-text}}
          <span class="pf-u-font-weight-light">
            CPU 1
          </span>
        {{/accordion-toggle-text}}
        {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
      {{/accordion-toggle}}
      {{#> accordion-expanded-content accordion-expanded-content--IsExpanded="true"}}
        {{#> accordion-expanded-content-body}}
          {{> cardview-demo--stacked-sparklines}}
        {{/accordion-expanded-content-body}}
      {{/accordion-expanded-content}}

      {{#> accordion-toggle accordion-toggle--attribute='aria-expanded="false"'}}
        {{#> accordion-toggle-text}}
          <span class="pf-u-font-weight-light">
            CPU 2
          </span>
        {{/accordion-toggle-text}}
        {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
      {{/accordion-toggle}}
      {{#> accordion-expanded-content}}
        {{> cardview-demo--stacked-sparklines}}
      {{/accordion-expanded-content}}

      {{#> accordion-toggle accordion-toggle--attribute='aria-expanded="false"'}}
        {{#> accordion-toggle-text}}
          <span class="pf-u-font-weight-light">
            CPU 3
          </span>
        {{/accordion-toggle-text}}
        {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
      {{/accordion-toggle}}
      {{#> accordion-expanded-content}}
        {{> cardview-demo--stacked-sparklines}}
      {{/accordion-expanded-content}}
    {{/accordion}}
  {{/card-body}}
{{/card}}
```

### Trend card 1
```hbs
{{#> gallery gallery--modifier="pf-m-gutter" gallery--attribute='style="--pf-l-gallery--GridTemplateColumns--min: 360px;"'}}
  {{#> card card--id="trend-card-1-example"}}
    {{#> card-header}}
      {{#> l-flex l-flex--modifier="pf-m-column pf-m-space-items-none"}}
        {{#> card-title card-title--attribute=(concat 'id="' card--id '-title"')}}
          {{#> title title--modifier="pf-m-2xl"}}
            1,050,765 IOPS
          {{/title}}
        {{/card-title}}
        <span class="pf-u-color-200">
          Workload
        </span>
      {{/l-flex}}
      {{#> card-actions}}
        {{> dropdown dropdown--id=(concat card--id '-dropdown') dropdown-toggle--text="Filter" dropdown-menu--modifier="pf-m-align-right"}}
      {{/card-actions}}
    {{/card-header}}
    {{#> card-body}}
      {{> cardview-demo--chart cardview-demo--chart--IsChart2="true"}}
    {{/card-body}}
  {{/card}}
{{/gallery}}
```

### Trend card 2
```hbs
{{#> gallery gallery--modifier="pf-m-gutter" gallery--attribute='style="--pf-l-gallery--GridTemplateColumns--min: 360px;"'}}
  {{#> card card--id="trend-card-2-example"}}
    {{#> card-header}}
      {{#> l-flex l-flex--modifier="pf-m-align-items-center"}}
        {{#> l-flex-item l-flex-item--modifier="pf-m-flex-none"}}
          {{#> l-flex l-flex--modifier="pf-m-column pf-m-space-items-none"}}
            {{#> card-title card-title--attribute=(concat 'id="' card--id '-title"')}}
              {{#> title title--modifier="pf-m-2xl"}}
                842 TB
              {{/title}}
            {{/card-title}}
            <span class="pf-u-color-200">
              Storage capacity
            </span>
          {{/l-flex}}
        {{/l-flex-item}}
        {{#> l-flex-item l-flex-item--modifier="pf-m-flex-1"}}
          {{> cardview-demo--chart}}
        {{/l-flex-item}}
      {{/l-flex}}
    {{/card-header}}
    {{#> card-footer}}
      {{#> l-flex}}
        <a href="#">Action 1</a>
        <a href="#">Action 2</a>
      {{/l-flex}}
    {{/card-footer}}
  {{/card}}
{{/gallery}}
```

### Log view
```hbs
{{#> gallery gallery--modifier="pf-m-gutter" gallery--attribute='style="--pf-l-gallery--GridTemplateColumns--min: 360px;"'}}
  {{#> card card--id="card-log-view-example"}}
    {{#> card-header}}
      {{#> card-actions}}
        {{> dropdown dropdown--id=(concat card--id '-dropdown') dropdown-toggle--text="Most recent" dropdown-menu--modifier="pf-m-align-right"}}
      {{/card-actions}}
      {{#> card-title card-title--attribute=(concat 'id="' card--id '-title1"')}}
        {{#> title title--modifier="pf-m-lg" titleType="h2"}}
          Activity
        {{/title}}
      {{/card-title}}
    {{/card-header}}
    {{#> card-body}}
      {{#> description-list}}
        {{#> description-list-group}}
          {{#> description-list-term}}
            <span class="pf-u-font-size-lg">Readiness probe failed</span>
          {{/description-list-term}}
          {{#> description-list-description}}
            Readiness probe failed: Get https://10.131.0.7:5000/healthz: dial tcp 10.131.0.7:5000: connect: connection refused
          {{/description-list-description}}
          {{#> description-list-description}}
            <date class="pf-u-color-200 pf-u-font-size-sm">Jun 17, 11:02 am</date>
          {{/description-list-description}}
        {{/description-list-group}}
        {{#> description-list-group}}
          {{#> description-list-term}}
            <span class="pf-u-font-size-lg">Successful assignment</span>
          {{/description-list-term}}
          {{#> description-list-description}}
            Successfully assigned default/example to ip-10-0-130-149.ec2.internal
          {{/description-list-description}}
          {{#> description-list-description}}
            <date class="pf-u-color-200 pf-u-font-size-sm">Jun 17, 11:13 am</date>
          {{/description-list-description}}
        {{/description-list-group}}
        {{#> description-list-group}}
          {{#> description-list-term}}
            <span class="pf-u-font-size-lg">Pulling image</span>
          {{/description-list-term}}
          {{#> description-list-description}}
            Pulling image "openshift/hello-openshift"
          {{/description-list-description}}
          {{#> description-list-description}}
            <date class="pf-u-color-200 pf-u-font-size-sm">Jun 17, 10:59 am</date>
          {{/description-list-description}}
        {{/description-list-group}}
        {{#> description-list-group}}
          {{#> description-list-term}}
            <span class="pf-u-font-size-lg">Created container</span>
          {{/description-list-term}}
          {{#> description-list-description}}
            Created container hello-openshift
          {{/description-list-description}}
          {{#> description-list-description}}
            <date class="pf-u-color-200 pf-u-font-size-sm">Jun 17, 10:45 am</date>
          {{/description-list-description}}
        {{/description-list-group}}
      {{/description-list}}
    {{/card-body}}
    {{#> card-footer}}
      <a href="#">View all activity</a>
    {{/card-footer}}
  {{/card}}
{{/gallery}}
```

### Events view
```hbs
{{#> gallery gallery--modifier="pf-m-gutter" gallery--attribute='style="--pf-l-gallery--GridTemplateColumns--min: 360px;"'}}
  {{#> card card--id="card-events-view-example"}}
    {{#> card-header}}
      {{#> card-actions}}
        {{> dropdown dropdown--id=(concat card--id '-dropdown') dropdown-toggle--text="Status" dropdown-menu--modifier="pf-m-align-right"}}
      {{/card-actions}}
      {{#> card-title card-title--attribute=(concat 'id="' card--id '-title1"')}}
        {{#> title title--modifier="pf-m-lg" titleType="h2"}}
          Events
        {{/title}}
      {{/card-title}}
    {{/card-header}}
    {{#> card-body}}
      {{#> description-list}}
        {{#> description-list-group}}
          {{#> description-list-term description-list-term--modifier="pf-u-font-size-lg"}}
            {{#> l-flex l-flex--modifier="pf-m-nowrap"}}
              {{#> l-flex-item}}
                <i class="fas fa-exclamation-circle pf-u-danger-color-100" aria-hidden="true"></i>
              {{/l-flex-item}}
              {{#> l-flex-item}}
                <span>Readiness probe failed</span>
              {{/l-flex-item}}
            {{/l-flex}}
          {{/description-list-term}}
          {{#> description-list-description}}
            Readiness probe failed: Get https://10.131.0.7:5000/healthz: dial tcp 10.131.0.7:5000: connect: connection refused
          {{/description-list-description}}
          {{#> description-list-description}}
            <date class="pf-u-color-200 pf-u-font-size-sm">Jun 17, 11:02 am</date>
          {{/description-list-description}}
        {{/description-list-group}}
        {{#> description-list-group}}
          {{#> description-list-term description-list-term--modifier="pf-u-font-size-lg"}}
            {{#> l-flex l-flex--modifier="pf-m-nowrap"}}
              {{#> l-flex-item}}
                <i class="fas fa-check-circle pf-u-success-color-100" aria-hidden="true"></i>
              {{/l-flex-item}}
              {{#> l-flex-item}}
                <span>Successful assignment</span>
              {{/l-flex-item}}
            {{/l-flex}}
          {{/description-list-term}}
          {{#> description-list-description}}
            Successfully assigned default/example to ip-10-0-130-149.ec2.internal
          {{/description-list-description}}
          {{#> description-list-description}}
            <date class="pf-u-color-200 pf-u-font-size-sm">Jun 17, 11:13 am</date>
          {{/description-list-description}}
        {{/description-list-group}}
        {{#> description-list-group}}
          {{#> description-list-term description-list-term--modifier="pf-u-font-size-lg"}}
            {{#> l-flex l-flex--modifier="pf-m-nowrap"}}
              {{#> l-flex-item}}
                {{#> spinner spinner--modifier="pf-m-md" spinner--attribute='aria-label="Loading"'}}Loading...{{/spinner}}
              {{/l-flex-item}}
              {{#> l-flex-item}}
                <span>Pulling image</span>
              {{/l-flex-item}}
            {{/l-flex}}
          {{/description-list-term}}
          {{#> description-list-description}}
            Pulling image "openshift/hello-openshift"
          {{/description-list-description}}
          {{#> description-list-description}}
            <date class="pf-u-color-200 pf-u-font-size-sm">Jun 17, 10:59 am</date>
          {{/description-list-description}}
        {{/description-list-group}}
        {{#> description-list-group}}
          {{#> description-list-term description-list-term--modifier="pf-u-font-size-lg"}}
            {{#> l-flex l-flex--modifier="pf-m-nowrap"}}
              {{#> l-flex-item}}
                <i class="fas fa-check-circle pf-u-success-color-100" aria-hidden="true"></i>
              {{/l-flex-item}}
              {{#> l-flex-item}}
                <span>Created container</span>
              {{/l-flex-item}}
            {{/l-flex}}
          {{/description-list-term}}
          {{#> description-list-description}}
            Created container hello-openshift
          {{/description-list-description}}
          {{#> description-list-description}}
            <date class="pf-u-color-200 pf-u-font-size-sm">Jun 17, 10:45 am</date>
          {{/description-list-description}}
        {{/description-list-group}}
      {{/description-list}}
    {{/card-body}}
    {{#> card-footer}}
      <a href="#">View all events</a>
    {{/card-footer}}
  {{/card}}
{{/gallery}}
```
