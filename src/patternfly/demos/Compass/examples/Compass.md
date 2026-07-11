---
id: Compass
section: AI
subsection: Generative UIs
wrapperTag: div
---

## Examples
### Card view

This demo populates the main Compass section with a card view, which is one of the more common page types used within a Compass layout. In this demo, the page includes:
- A `.pf-v6-c-compass__main-header` that contains the page title and toolbar with action items.
- A `.pf-v6-c-compass__content`, which contains a `.pf-v6-c-compass__panel` to create a rounded-rectangle container that serves as the main content background.

```hbs isFullscreen isBeta
{{> compass--card-view}}
```

### Dashboard

This demo populates the main Compass section with a dashboard, which is often used as the landing page within a Compass layout. This demo page includes:

- A `.pf-v6-c-hero` component positioned between the top navigation and the main page content, containing promotional or introductory content with important CTAs.
- A `.pf-v6-c-compass__content` without a `.pf-v6-c-compass__panel` wrapping all of the contents. This removes the rounded-rectangle container that typically serves as the main content background. Instead, the content area is a dashboard (a grid of cards), and each card is individually wrapped in`.pf-v6-c-compass__panel` to provide the rounded-rectangle styling.

```hbs isFullscreen isBeta
{{#> compass--demo-context}}
  {{#> compass}}
    {{> compass--header}}
    {{> compass--sidebar--start}}
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
      {{#> compass-main-footer}}
        {{#> compass-message-bar}}
          {{#> compass-panel compass-panel--HasNoPadding=true compass-panel--HasNoBorder=true compass-panel--IsPill=true}}
            chatbot message bar
          {{/compass-panel}}
        {{/compass-message-bar}}
      {{/compass-main-footer}}
    {{/compass-main}}
    {{> compass--sidebar--end}}
  {{/compass}}
{{/compass--demo-context}}
```

### Multiple sections

This demo places multiple sections within the main Compass section, with each section containing a card view.

Without a `.pf-v6-c-compass__panel` wrapping all of the content, there is no rounded-rectangle container as the main content background. Instead, the `.pf-v6-c-compass__content` is a grid with 2 independently scrollable `.pf-v6-c-compass__panel` elements.

```hbs isFullscreen isBeta
{{#> compass--demo-context}}
  {{#> compass}}
    {{> compass--header}}
    {{> compass--sidebar--start}}
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
      {{#> compass-main-footer}}
        {{#> compass-message-bar}}
          {{#> compass-panel compass-panel--HasNoPadding=true compass-panel--HasNoBorder=true compass-panel--IsPill=true}}
            chatbot message bar
          {{/compass-panel}}
        {{/compass-message-bar}}
      {{/compass-main-footer}}
    {{/compass-main}}
    {{> compass--sidebar--end}}
  {{/compass}}
{{/compass--demo-context}}
```

### With drawer

This demo showcases how you can position a side-panel drawer on top of the other Compass elements.

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

### Docked
```hbs isFullscreen isBeta
{{#> compass--demo-context}}
  {{#> compass compass--HasDock=true}}
    {{#> compass-dock}}
      {{> masthead-template masthead-template--HasDockedNav=true}}
    {{/compass-dock}}
    {{#> compass-main}}
      {{#> compass-main-header}}
        {{#> compass-panel}}
          {{#> compass-main-header-content}}
            {{#> compass-main-header-title}}
              {{#> title titleType="h2" title--modifier="pf-m-h1"}}
                Header
              {{/title}}
            {{/compass-main-header-title}}
            {{#> compass-main-header-toolbar}}
              {{#> action-list}}
                {{#> action-list-group}}
                  {{#> action-list-item}}
                    {{#> button button--IsPrimary=true}}
                      action
                    {{/button}}
                  {{/action-list-item}}
                  {{#> action-list-item}}
                    {{#> button button--IsSecondary=true}}
                      action
                    {{/button}}
                  {{/action-list-item}}
                {{/action-list-group}}
              {{/action-list}}
            {{/compass-main-header-toolbar}}
          {{/compass-main-header-content}}
        {{/compass-panel}}
      {{/compass-main-header}}
      {{#> compass-content}}
        {{#> compass-panel}}
          [so much room for activities]
        {{/compass-panel}}
      {{/compass-content}}
    {{/compass-main}}
  {{/compass}}
{{/compass--demo-context}}
```
