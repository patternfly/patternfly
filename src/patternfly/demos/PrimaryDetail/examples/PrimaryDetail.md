---
id: Primary-detail
section: demos
wrapperTag: div
---

## Demos

### Primary-detail expanded
```hbs isFullscreen
{{> page-template page-template--id="primary-detail-expanded-example" masthead-template--modifier="pf-m-display-stack pf-m-display-inline-on-lg"}}

{{#* inline "page-template-main-content"}}
  {{> page-template-breadcrumb}}
  {{> page-template-title}}
  {{> divider divider--type="div"}}
  {{#> page-main-section page-main-section--modifier="pf-m-no-padding"}}

    <!-- Drawer -->
    {{#> primary-detail-template primary-detail-template--id=(concat page-template--id "-drawer") primary-detail-template--modifier="pf-m-inline-on-2xl" drawer-panel--IsOpen="true"}}

      {{#> drawer-main}}

        <!-- Content -->
        {{#> drawer-content}}
          {{> toolbar-template
                toolbar-template--id=(concat drawer--id '-toolbar')
                toolbar-template--modifier="pf-m-page-insets"
                toolbar-template--HasFilterGroup="true"
                toolbar-template--HasOverflowMenu="true"
                toolbar-template--HasSearchFilter="true"
                toolbar-template--HasSortButton="true"
                toolbar-template--HasToggleGroup="true"
          }}
          {{> data-list-simple-data-list}}
        {{/drawer-content}}

        <!-- Panel -->
        {{#> drawer-panel progress--modifier="pf-m-sm"}}

          <!-- Panel header -->
          {{> primary-detail-template-panel-header primary-detail-template-panel-header--title="Node 2" primary-detail-template-panel-header--sub-title='<a href="#">siemur/test-space</a>'}}

          <!-- Tabs -->
          {{#> drawer-body drawer-body--modifier="pf-m-no-padding"}}
            {{> primary-detail-template-panel-tabs primary-detail-template-panel-tabs--modifier="pf-m-box pf-m-fill"}}
          {{/drawer-body}}

          <!-- Tab content -->
          {{#> drawer-body}}
            {{> primary-detail-template-panel-tab-content}}
          {{/drawer-body}}
        {{/drawer-panel}}
      {{/drawer-main}}
    {{/primary-detail-template}}
  {{/page-main-section}}
{{/inline}}
```

### Primary-detail collapsed
```hbs isFullscreen
{{> page-template page-template--id="primary-detail-collapsed-example" masthead-template--modifier="pf-m-display-stack pf-m-display-inline-on-lg"}}

{{#* inline "page-template-main-content"}}
  {{> page-template-breadcrumb}}
  {{> page-template-title}}
  {{> divider divider--type="div"}}
  {{#> page-main-section page-main-section--modifier="pf-m-no-padding"}}

    <!-- Drawer -->
    {{#> primary-detail-template primary-detail-template--id=(concat page-template--id "-drawer") primary-detail-template--modifier="pf-m-inline-on-2xl"}}

      {{#> drawer-main}}

        <!-- Content -->
        {{#> drawer-content}}
          {{> toolbar-template
                toolbar-template--id=(concat drawer--id '-toolbar')
                toolbar-template--modifier="pf-m-page-insets"
                toolbar-template--HasFilterGroup="true"
                toolbar-template--HasOverflowMenu="true"
                toolbar-template--HasSearchFilter="true"
                toolbar-template--HasSortButton="true"
                toolbar-template--HasToggleGroup="true"
          }}
          {{> data-list-simple-data-list}}
        {{/drawer-content}}

        <!-- Panel -->
        {{#> drawer-panel progress--modifier="pf-m-sm"}}

          <!-- Panel header -->
          {{> primary-detail-template-panel-header primary-detail-template-panel-header--title="Patternfly-elements" primary-detail-template-panel-header--sub-title="PatternFly elements"}}

          <!-- Tab content -->
          {{#> drawer-body}}
            {{> primary-detail-template-panel-body}}
          {{/drawer-body}}
        {{/drawer-panel}}

      {{/drawer-main}}
    {{/primary-detail-template}}
  {{/page-main-section}}
{{/inline}}
```

### Primary-detail content body padding
```hbs isFullscreen
{{> page-template page-template--id="primary-detail-content-body-padding-example" masthead-template--modifier="pf-m-display-stack pf-m-display-inline-on-lg"}}

{{#* inline "page-template-main-content"}}
  {{> page-template-breadcrumb}}
  {{> page-template-title}}
  {{> divider divider--type="div"}}
  {{#> page-main-section page-main-section--modifier="pf-m-no-padding"}}

    <!-- Drawer -->
    {{#> primary-detail-template primary-detail-template--id=(concat page-template--id "-drawer") primary-detail-template--modifier="pf-m-inline-on-2xl" drawer-panel--IsOpen="true"}}

      {{#> drawer-main}}

        <!-- Content -->
        {{#> drawer-content drawer-content--modifier="pf-m-no-background" drawer-body--modifier="pf-m-padding"}}
          {{> toolbar-template
                toolbar-template--id=(concat drawer--id '-toolbar')
                toolbar-template--modifier="pf-m-page-insets"
                toolbar-template--HasFilterGroup="true"
                toolbar-template--HasOverflowMenu="true"
                toolbar-template--HasSortButton="true"
                toolbar-template--HasToggleGroup="true"
          }}
          {{> data-list-simple-data-list}}
        {{/drawer-content}}

        <!-- Panel -->
        {{#> drawer-panel progress--modifier="pf-m-sm"}}

          <!-- Panel header -->
          {{> primary-detail-template-panel-header primary-detail-template-panel-header--title="Patternfly-elements" primary-detail-template-panel-header--sub-title="PatternFly elements"}}

          <!-- Tab content -->
          {{#> drawer-body}}
            {{> primary-detail-template-panel-body}}
          {{/drawer-body}}
        {{/drawer-panel}}

      {{/drawer-main}}
    {{/primary-detail-template}}
  {{/page-main-section}}
{{/inline}}
```

### Primary-detail card view expanded
```hbs isFullscreen
{{> page-template page-template--id="primary-detail-card-view-expanded-example" masthead-template--modifier="pf-m-display-stack pf-m-display-inline-on-lg"}}

{{#* inline "page-template-main-content"}}
  {{> page-template-breadcrumb}}
  {{> page-template-title}}
  {{> divider divider--type="div"}}
  {{#> page-main-section page-main-section--modifier="pf-m-no-padding"}}

    <!-- Drawer -->
    {{#> primary-detail-template primary-detail-template--id=(concat page-template--id "-drawer") primary-detail-template--modifier="pf-m-inline-on-2xl" drawer-panel--IsOpen="true"}}

      {{#> drawer-section}}
        {{> toolbar-template
              toolbar-template--id=(concat drawer--id '-toolbar')
              toolbar-template--modifier="pf-m-page-insets"
              toolbar-template--HasBulkSelect="true"
              toolbar-template--HasSearchFilter="true"
              toolbar-template--HasSortButton="true"
              toolbar-template--HasToggleGroup="true"
              toolbar-template--HasOverflowMenu="true"
              toolbar-template--HasOverflowMenuSecondButton="true"
              toolbar-template--HasViewToggle="true"
        }}
        {{> divider divider--type="div"}}
      {{/drawer-section}}

      {{#> drawer-main}}

        <!-- Content -->
        {{#> drawer-content drawer-content--modifier="pf-m-no-background" drawer-body--modifier="pf-m-padding"}}
          {{> primary-detail-template-card-view}}
        {{/drawer-content}}

        <!-- Panel -->
        {{#> drawer-panel
          drawer-panel--modifier=""
          }}

          <!-- Panel header -->
          {{> primary-detail-template-panel-header primary-detail-template-panel-header--title="Patternfly" primary-detail-template-panel-header--sub-title="PatternFly elements"}}

          {{#> drawer-body}}
            {{> primary-detail-template-panel-body}}
          {{/drawer-body}}

        {{/drawer-panel}}
      {{/drawer-main}}
    {{/primary-detail-template}}
  {{/page-main-section}}
{{/inline}}
```

### Primary-detail card simple list expanded on mobile
```hbs isFullscreen
{{> page-template page-template--id="primary-detail-card-simple-list-on-mobile-example"}}

{{#* inline "page-template-main-content"}}
  {{> page-template-breadcrumb}}
  {{> page-template-title}}
  {{> divider divider--type="div"}}
  {{#> page-main-section}}
    {{#> card}}

      <!-- Drawer -->
      {{#> primary-detail-template primary-detail-template--id=(concat page-template--id "-drawer") drawer--IsStatic="true" drawer-panel--IsOpen="true"}}

        {{#> drawer-main}}
          <!-- Content -->
          {{#> drawer-content drawer-content--NoBody="true"}}
            {{#> drawer-content-body drawer-content-body--modifier="pf-m-no-padding"}}
              {{> primary-detail-template-simple-list}}
            {{/drawer-content-body}}
          {{/drawer-content}}

          <!-- Panel -->
          {{#> drawer-panel drawer-panel--type="div" drawer-panel--attribute=(concat 'id="' drawer--id '-panel" aria-label="Panel"') drawer-panel--modifier="pf-m-width-75-on-xl"}}

            <!-- Panel header -->
            {{> primary-detail-template-panel-header primary-detail-template-panel-header--title="Patternfly-elements"}}

            {{#> drawer-body}}
              {{> primary-detail-template-panel-body}}
            {{/drawer-body}}
          {{/drawer-panel}}
        {{/drawer-main}}
      {{/primary-detail-template}}
    {{/card}}
  {{/page-main-section}}
{{/inline}}
```

### Primary-detail card data list expanded on mobile
```hbs isFullscreen
{{> page-template page-template--id="primary-detail-card-data-list-example"}}

{{#* inline "page-template-main-content"}}
  {{> page-template-breadcrumb}}
  {{> page-template-title}}
  {{> divider divider--type="div"}}
  {{#> page-main-section}}

    {{#> card}}

      <!-- Drawer -->
      {{#> primary-detail-template primary-detail-template--id=(concat page-template--id "-drawer") drawer--IsStatic="true" drawer-panel--IsOpen="true"}}
        {{#> drawer-main}}

          <!-- Content -->
          {{#> drawer-content}}
            {{> primary-detail-template-card-toolbar primary-detail-template-card-toolbar--id=(concat drawer--id '-toolbar')}}
            {{> primary-detail-template-card-data-list primary-detail-template-card-data-list--id=(concat drawer--id '-simple-list')}}
          {{/drawer-content}}

          <!-- Panel -->
          {{#> drawer-panel drawer-panel--type="div" drawer-panel--attribute=(concat 'id="' drawer--id '-panel" aria-label="Panel"') drawer-panel--modifier="pf-m-width-75-on-2xl"}}

            <!-- Panel header -->
            {{> primary-detail-template-panel-header primary-detail-template-panel-header--title="Patternfly-elements"}}
            {{#> drawer-body}}
              {{> primary-detail-template-panel-body}}
            {{/drawer-body}}
          {{/drawer-panel}}
        {{/drawer-main}}
      {{/primary-detail-template}}
    {{/card}}

  {{/page-main-section}}
{{/inline}}
```

### Inline modifier
```hbs isFullscreen
{{> page-template page-template--id="primary-detail-inline-modifier-example"}}

{{#* inline "page-template-main-content"}}
  {{> page-template-breadcrumb}}
  {{> page-template-title}}
  {{> divider divider--type="div"}}

  {{#> primary-detail-template primary-detail-template--id=(concat page-template--id "-drawer") primary-detail-template--modifier="pf-m-inline-on-2xl" drawer-panel--IsOpen="true"}}

    {{#> drawer-main}}

      <!-- Content -->
      {{#> drawer-content}}
        {{> toolbar-template
              toolbar-template--id=(concat drawer--id '-toolbar')
              toolbar-template--modifier="pf-m-page-insets"
              toolbar-template--HasDropdown="true"
              toolbar-template--HasOverflowMenu="true"
              toolbar-template--HasOverflowMenuSecondButton="true"
        }}
        {{> data-list-simple-data-list}}
      {{/drawer-content}}

      <!-- Panel -->
      {{#> drawer-panel drawer-panel--type="div" progress--modifier="pf-m-sm"}}

        <!-- Panel header -->
        {{> primary-detail-template-panel-header primary-detail-template-panel-header--title="Node 2" primary-detail-template-panel-header--sub-title='<a href="#">siemur/test-space</a>'}}

        <!-- Tabs -->
        {{#> drawer-body drawer-body--modifier="pf-m-no-padding"}}
          {{> primary-detail-template-panel-tabs primary-detail-template-panel-tabs--modifier="pf-m-box pf-m-fill"}}
        {{/drawer-body}}

        <!-- Tab content -->
        {{#> drawer-body}}
          {{> primary-detail-template-panel-tab-content}}
        {{/drawer-body}}
      {{/drawer-panel}}
    {{/drawer-main}}
  {{/primary-detail-template}}
{{/inline}}
```

## Documentation

This demo implements the drawer in context of the page component.
