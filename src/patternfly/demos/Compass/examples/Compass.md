---
id: Compass
section: PatternFly-AI
subsection: Generative UIs
wrapperTag: div
---

## Examples
### Card view
```hbs isFullscreen isBeta
{{> compass--card-view}}
```

### Dashboard
```hbs isFullscreen isBeta
{{#> compass--demo-context}}
  {{#> compass}}
    {{#> compass-header}}
      {{#> compass-logo}}
        {{> compass--icons compass--icons--redhat=true}}
      {{/compass-logo}}
      {{#> compass-nav}}
        {{#> compass-panel compass-panel--HasNoPadding=false compass-panel--IsPill=true}}
          {{#> compass-nav-content}}
            {{#> compass-nav-home}}
              {{#> button button--IsPlain=true button--aria-label="Home" button--IsCircle=true button--IsIcon=true}}
                {{> compass--icons compass--icons--home=true}}
              {{/button}}
            {{/compass-nav-home}}
            {{#> compass-nav-main}}
                {{#> tabs tabs--id="primary-nav" tabs--type="nav" tabs--IsNav=true tabs--attribute='aria-label="Primary nav"' tabs-link--isLink="true"}}
                  {{> __tabs-list}}
                {{/tabs}}
            {{/compass-nav-main}}
            {{#> compass-nav-search}}
              {{#> button button--IsPlain=true button--aria-label="Search" button--IsCircle=true button--IsIcon=true}}
                {{> compass--icons compass--icons--search=true}}
              {{/button}}
            {{/compass-nav-search}}
          {{/compass-nav-content}}
        {{/compass-panel}}
        {{#> compass-panel compass-panel--HasNoPadding=false compass-panel--IsPill=true}}
          {{#> compass-nav-content}}
            {{#> compass-nav-main}}
                {{#> tabs tabs--id="secondary-nav" tabs--type="nav" tabs--IsNav=true tabs--attribute='aria-label="Secondary nav"' tabs-link--isLink="true" tabs--modifier="pf-m-subtab"}}
                  {{> __tabs-list-secondary __tabs-list--IsDisabled="true"}}
                {{/tabs}}
            {{/compass-nav-main}}
          {{/compass-nav-content}}
        {{/compass-panel}}
      {{/compass-nav}}
      {{#> compass-profile}}
        {{#> menu-toggle menu-toggle--IsPlain="true" menu-toggle--IsText="true"}}
          {{#> menu-toggle-icon}}
            {{> avatar avatar--modifier="pf-m-md"}}
          {{/menu-toggle-icon}}
          {{#> menu-toggle-text}}
            Ned Username
          {{/menu-toggle-text}}
          {{#> menu-toggle-controls}}
            {{> menu-toggle-toggle-icon}}
          {{/menu-toggle-controls}}
        {{/menu-toggle}}
      {{/compass-profile}}
    {{/compass-header}}
    {{#> compass-sidebar compass-sidebar--IsStart=true}}
      {{#> compass-panel compass-panel--IsPill=true}}
        {{#> action-list action-list--modifier="pf-m-icons" action-list--IsVertical=true}}
          {{#> action-list-item}}
            {{#> button button--IsPlain=true button--aria-label="Add" button--IsCircle=true button--IsIcon=true}}
              {{> compass--icons compass--icons--square-plus=true}}
            {{/button}}
          {{/action-list-item}}
          {{#> action-list-item}}
            {{#> button button--IsPlain=true button--aria-label="Help" button--IsCircle=true button--IsIcon=true}}
              {{> compass--icons compass--icons--question-circle=true}}
            {{/button}}
          {{/action-list-item}}
          {{#> action-list-item}}
            {{#> button button--modifier=(concat (pfv "unset-prefix") "m-ai-indicator") button--IsPlain=true button--aria-label="AI assistant" button--IsCircle=true button--IsIcon=true}}
              {{> compass--icons compass--icons--sparkle=true}}
            {{/button}}
          {{/action-list-item}}
          {{#> action-list-item}}
            {{#> button button--IsPlain=true button--aria-label="User profile" button--IsCircle=true button--IsIcon=true}}
              {{> compass--icons compass--icons--user=true}}
            {{/button}}
          {{/action-list-item}}
          {{#> action-list-item}}
            {{#> button button--IsPlain=true button--aria-label="Send" button--IsCircle=true button--IsIcon=true}}
              {{> compass--icons compass--icons--paper-plane=true}}
            {{/button}}
          {{/action-list-item}}
        {{/action-list}}
      {{/compass-panel}}
    {{/compass-sidebar}}
    {{#> compass-main}}
      {{#> compass-hero}}
        {{#> hero}}
          {{#> hero-body}}
            {{#> content}}
              <h1>Automation that does more</h1>
              <p>Red&nbsp;Hat Ansible Automation Platform offers more capabilities, accessibility, and flexibility, so you can bring the power of automation to the teams, tasks, and environments that need it.</p>
              {{#> action-list}}
                {{#> action-list-group}}
                  {{#> action-list-item}}
                    {{#> button button--IsPrimary=true}}
                      Upgrade today
                    {{/button}}
                  {{/action-list-item}}
                  {{#> action-list-item}}
                    {{#> button button--IsSecondary=true}}
                      Talk to a Red Hatter
                    {{/button}}
                  {{/action-list-item}}
                {{/action-list-group}}
              {{/action-list}}
            {{/content}}
          {{/hero-body}}
        {{/hero}}
      {{/compass-hero}}
      {{#> compass-content}}
        {{#> grid grid--modifier="pf-m-gutter" grid--id="compass-dashboard-grid"}}
          {{#> grid-item grid-item--modifier="pf-m-gutter pf-m-4-col-on-lg pf-m-6-col-on-2xl" grid-item--attribute='style="--pf-v6-l-grid--item--Order-on-lg:3"'}}
            {{#> l-flex l-flex--modifier="pf-m-column"}}
          {{#> compass-panel compass-panel--HasNoPadding=true}}
              {{> card-template-status card--IsPlain=true card-template-status--HideNotificationDrawer=true card-template-status--id=(concat grid--id '-status-card-1')}} <!-- inventory -->
          {{/compass-panel}}
          {{#> compass-panel compass-panel--HasNoPadding=true}}
              {{> card-template-line-chart card--IsPlain=true card-template-line-chart--id=(concat grid--id '-line-chart-card-1')}}
          {{/compass-panel}}
          {{#> compass-panel compass-panel--HasNoPadding=true}}
              {{> card-template-metrics card--IsPlain=true card-template-metrics--id=(concat grid--id '-metrics-card-1')}}
          {{/compass-panel}}
            {{/l-flex}}
          {{/grid-item}}
          {{#> grid-item grid-item--modifier="pf-m-gutter pf-m-4-col-on-lg pf-m-3-col-on-2xl" grid-item--attribute='style="--pf-v6-l-grid--item--Order-on-lg:2"'}}
            {{#> l-flex l-flex--modifier="pf-m-column pf-m-row-on-md pf-m-column-on-lg"}}
              {{#> l-flex-item l-flex-item--modifier="pf-m-flex-1"}}
          {{#> compass-panel compass-panel--HasNoPadding=true}}
                {{> card-template-details card--IsPlain=true card-template-details--id=(concat grid--id '-details-card-1')}}
          {{/compass-panel}}
              {{/l-flex-item}}
              {{#> l-flex-item l-flex-item--modifier="pf-m-flex-1"}}
          {{#> compass-panel compass-panel--HasNoPadding=true}}
                {{> card-template-data-list card--IsPlain=true data-list--IsPlain=true card-template-data-list--id=(concat grid--id '-data-list-card-1')}}
          {{/compass-panel}}
              {{/l-flex-item}}
            {{/l-flex}}
          {{/grid-item}}
          {{#> grid-item grid-item--modifier="pf-m-4-col-on-lg pf-m-3-col-on-2xl" grid-item--attribute='style="--pf-v6-l-grid--item--Order-on-lg:4"'}}
            {{#> l-flex l-flex--modifier="pf-m-column"}}
          {{#> compass-panel compass-panel--HasNoPadding=true}}
              {{> card-template-events card--IsPlain=true card-template-events--id=(concat grid--id '-events-card-1')}}
          {{/compass-panel}}
            {{/l-flex}}
          {{/grid-item}}
        {{/grid}}
      {{/compass-content}}
    {{/compass-main}}
    {{#> compass-sidebar compass-sidebar--IsEnd=true}}
      {{#> compass-panel compass-panel--IsPill=true}}
        {{#> action-list action-list--modifier="pf-m-icons" action-list--IsVertical=true}}
          {{#> action-list-item}}
            {{#> button button--IsPlain=true button--aria-label="Help" button--IsCircle=true button--IsIcon=true}}
              {{> compass--icons compass--icons--question-circle=true}}
            {{/button}}
          {{/action-list-item}}
          {{#> action-list-item}}
            {{#> button button--IsPlain=true button--aria-label="User profile" button--IsCircle=true button--IsIcon=true}}
              {{> compass--icons compass--icons--user=true}}
            {{/button}}
          {{/action-list-item}}
          {{#> action-list-item}}
            {{#> button button--IsPlain=true button--aria-label="Send" button--IsCircle=true button--IsIcon=true}}
              {{> compass--icons compass--icons--paper-plane=true}}
            {{/button}}
          {{/action-list-item}}
        {{/action-list}}
      {{/compass-panel}}
    {{/compass-sidebar}}
    {{#> compass-footer}}
      {{#> compass-footer-main}}
        {{#> compass-panel compass-panel--HasNoPadding=true compass-panel--HasNoBorder=true compass-panel--IsPill=true}}chatbot message bar{{/compass-panel}}
      {{/compass-footer-main}}
    {{/compass-footer}}
  {{/compass}}
{{/compass--demo-context}}
```

### Multiple sections
```hbs isFullscreen isBeta
{{#> compass--demo-context}}
  {{#> compass}}
    {{#> compass-header}}
      {{#> compass-logo}}
        {{> compass--icons compass--icons--redhat=true}}
      {{/compass-logo}}
      {{#> compass-nav}}
        {{#> compass-panel compass-panel--HasNoPadding=false compass-panel--IsPill=true}}
          {{#> compass-nav-content}}
            {{#> compass-nav-home}}
              {{#> button button--IsPlain=true button--aria-label="Home" button--IsCircle=true button--IsIcon=true}}
                {{> compass--icons compass--icons--home=true}}
              {{/button}}
            {{/compass-nav-home}}
            {{#> compass-nav-main}}
                {{#> tabs tabs--id="primary-nav" tabs--type="nav" tabs--IsNav=true tabs--attribute='aria-label="Primary nav"' tabs-link--isLink="true"}}
                  {{> __tabs-list}}
                {{/tabs}}
            {{/compass-nav-main}}
            {{#> compass-nav-search}}
              {{#> button button--IsPlain=true button--aria-label="Search" button--IsCircle=true button--IsIcon=true}}
                {{> compass--icons compass--icons--search=true}}
              {{/button}}
            {{/compass-nav-search}}
          {{/compass-nav-content}}
        {{/compass-panel}}
        {{#> compass-panel compass-panel--HasNoPadding=false compass-panel--IsPill=true}}
          {{#> compass-nav-content}}
            {{#> compass-nav-main}}
                {{#> tabs tabs--id="secondary-nav" tabs--type="nav" tabs--IsNav=true tabs--attribute='aria-label="Secondary nav"' tabs-link--isLink="true" tabs--modifier="pf-m-subtab"}}
                  {{> __tabs-list-secondary __tabs-list--IsDisabled="true"}}
                {{/tabs}}
            {{/compass-nav-main}}
          {{/compass-nav-content}}
        {{/compass-panel}}
      {{/compass-nav}}
      {{#> compass-profile}}
        {{#> menu-toggle menu-toggle--IsPlain="true" menu-toggle--IsText="true"}}
          {{#> menu-toggle-icon}}
            {{> avatar avatar--modifier="pf-m-md"}}
          {{/menu-toggle-icon}}
          {{#> menu-toggle-text}}
            Ned Username
          {{/menu-toggle-text}}
          {{#> menu-toggle-controls}}
            {{> menu-toggle-toggle-icon}}
          {{/menu-toggle-controls}}
        {{/menu-toggle}}
      {{/compass-profile}}
    {{/compass-header}}
    {{#> compass-sidebar compass-sidebar--IsStart=true}}
      {{#> compass-panel compass-panel--IsPill=true}}
        {{#> action-list action-list--modifier="pf-m-icons" action-list--IsVertical=true}}
          {{#> action-list-item}}
            {{#> button button--IsPlain=true button--aria-label="Add" button--IsCircle=true button--IsIcon=true}}
              {{> compass--icons compass--icons--square-plus=true}}
            {{/button}}
          {{/action-list-item}}
          {{#> action-list-item}}
            {{#> button button--IsPlain=true button--aria-label="Help" button--IsCircle=true button--IsIcon=true}}
              {{> compass--icons compass--icons--question-circle=true}}
            {{/button}}
          {{/action-list-item}}
          {{#> action-list-item}}
            {{#> button button--modifier=(concat (pfv "unset-prefix") "m-ai-indicator") button--IsPlain=true button--aria-label="AI assistant" button--IsCircle=true button--IsIcon=true}}
              {{> compass--icons compass--icons--sparkle=true}}
            {{/button}}
          {{/action-list-item}}
          {{#> action-list-item}}
            {{#> button button--IsPlain=true button--aria-label="User profile" button--IsCircle=true button--IsIcon=true}}
              {{> compass--icons compass--icons--user=true}}
            {{/button}}
          {{/action-list-item}}
          {{#> action-list-item}}
            {{#> button button--IsPlain=true button--aria-label="Send" button--IsCircle=true button--IsIcon=true}}
              {{> compass--icons compass--icons--paper-plane=true}}
            {{/button}}
          {{/action-list-item}}
        {{/action-list}}
      {{/compass-panel}}
    {{/compass-sidebar}}
    {{#> compass-main}}
      {{#> compass-main-header}}
        {{#> compass-panel}}
          {{#> compass-main-header-content}}
            {{#> compass-main-header-title}}
              {{#> title titleType="h2" title--modifier="pf-m-h1"}}
                Page title
              {{/title}}
            {{/compass-main-header-title}}
            {{#> compass-main-header-toolbar}}
              {{#> action-list}}
                {{#> action-list-group}}
                  {{#> action-list-item}}
                    {{#> button button--IsPrimary=true}}
                      Add integration
                    {{/button}}
                  {{/action-list-item}}
                  {{#> action-list-item}}
                    {{#> button button--IsSecondary=true}}
                      Test integration
                    {{/button}}
                  {{/action-list-item}}
                {{/action-list-group}}
              {{/action-list}}
            {{/compass-main-header-toolbar}}
          {{/compass-main-header-content}}
        {{/compass-panel}}
      {{/compass-main-header}}
      {{#> compass-content}}
        {{#> grid grid--modifier="pf-m-all-6-col pf-m-gutter"}}
          {{#> compass-panel compass-panel--IsScrollable=true}}
            {{#> l-flex l-flex--modifier="pf-m-column pf-m-gap-md"}}
              {{> toolbar-template
                toolbar-template--id=(concat page-template--id '-toolbar')
                toolbar-template--HasToggleGroup=true
                toolbar-template--HasBulkSelect=true
                toolbar-template--HasOverflowMenu=true
                toolbar-template--HasFilter=true
              }}
              {{> card-template-gallery card-template-gallery--id="card-view-basic-example-gallery"}}
            {{/l-flex}}
          {{/compass-panel}}
          {{#> compass-panel compass-panel--IsScrollable=true}}
            {{#> l-flex l-flex--modifier="pf-m-column pf-m-gap-md"}}
              {{> toolbar-template
                toolbar-template--id=(concat page-template--id '-toolbar')
                toolbar-template--HasToggleGroup=true
                toolbar-template--HasBulkSelect=true
                toolbar-template--HasOverflowMenu=true
                toolbar-template--HasFilter=true
              }}
              {{> card-template-gallery card-template-gallery--id="card-view-basic-example-gallery"}}
            {{/l-flex}}
          {{/compass-panel}}
        {{/grid}}
      {{/compass-content}}
    {{/compass-main}}
    {{#> compass-sidebar compass-sidebar--IsEnd=true}}
      {{#> compass-panel compass-panel--IsPill=true}}
        {{#> action-list action-list--modifier="pf-m-icons" action-list--IsVertical=true}}
          {{#> action-list-item}}
            {{#> button button--IsPlain=true button--aria-label="Help" button--IsCircle=true button--IsIcon=true}}
              {{> compass--icons compass--icons--question-circle=true}}
            {{/button}}
          {{/action-list-item}}
          {{#> action-list-item}}
            {{#> button button--IsPlain=true button--aria-label="User profile" button--IsCircle=true button--IsIcon=true}}
              {{> compass--icons compass--icons--user=true}}
            {{/button}}
          {{/action-list-item}}
          {{#> action-list-item}}
            {{#> button button--IsPlain=true button--aria-label="Send" button--IsCircle=true button--IsIcon=true}}
              {{> compass--icons compass--icons--paper-plane=true}}
            {{/button}}
          {{/action-list-item}}
        {{/action-list}}
      {{/compass-panel}}
    {{/compass-sidebar}}
    {{#> compass-footer}}
      {{#> compass-footer-main}}
        {{#> compass-panel compass-panel--HasNoPadding=true compass-panel--HasNoBorder=true compass-panel--IsPill=true}}chatbot message bar{{/compass-panel}}
      {{/compass-footer-main}}
    {{/compass-footer}}
  {{/compass}}
{{/compass--demo-context}}
```

### With drawer
```hbs isFullscreen isBeta
{{#> drawer drawer--id="pill" drawer--IsPill=true drawer-panel--IsOpen=true}}
 {{#> drawer-main}}
    {{#> drawer-content}}
      {{> compass--card-view}}
    {{/drawer-content}}
    {{> drawer-example-panel drawer-panel-example--IsGlass=true}}
  {{/drawer-main}}
{{/drawer}}
```