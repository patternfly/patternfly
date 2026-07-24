---
id: Primary-detail
section: patterns
wrapperTag: div
---

## Demos

### Primary-detail expanded
```hbs isFullscreen
{{> page-template page-template--id="primary-detail-expanded-example" masthead-template--modifier="pf-m-display-stack pf-m-display-inline-on-lg"}}

{{#* inline "page-template-section"}}
  {{#> page-main-section}}

    <!-- Drawer -->
    {{#> primary-detail-template primary-detail-template--id=(concat page-template--id "-drawer") drawer-panel--IsOpen="true"}}

      {{#> drawer-section}}
        {{> toolbar-template
            toolbar-template--id=(concat drawer--id '-toolbar')
            toolbar-template--HasFilterGroup=true
            toolbar-template--HasOverflowMenu=true
            toolbar-template--HasSearchFilter=true
            toolbar-template--HasSortButton=true
            toolbar-template--HasToggleGroup=true
          }}
        {{> divider divider--type="div"}}
      {{/drawer-section}}

      {{#> drawer-main}}

        <!-- Content -->
        {{#> drawer-content}}
          {{> data-list-simple-data-list}}
        {{/drawer-content}}

        <!-- Panel -->
        {{#> drawer-panel progress--modifier="pf-m-sm"}}

          <!-- Panel header -->
          {{> primary-detail-template-panel-header primary-detail-template-panel-header--title="Node 2" primary-detail-template-panel-header--sub-title='<a href="#">siemur/test-space</a>'}}

          <!-- Tabs -->
          {{#> drawer-body drawer-body--modifier="pf-m-no-padding"}}
            {{> primary-detail-template-panel-tabs primary-detail-template-panel-tabs--aria-label="Node 2" primary-detail-template-panel-tabs--modifier="pf-m-box pf-m-fill"}}
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

{{#* inline "page-template-section"}}
  {{#> page-main-section}}

    <!-- Drawer -->
    {{#> primary-detail-template primary-detail-template--id=(concat page-template--id "-drawer")}}

      {{#> drawer-section}}
        {{> toolbar-template
            toolbar-template--id=(concat drawer--id '-toolbar')
            toolbar-template--HasFilterGroup=true
            toolbar-template--HasOverflowMenu=true
            toolbar-template--HasSearchFilter=true
            toolbar-template--HasSortButton=true
            toolbar-template--HasToggleGroup=true
          }}
        {{> divider divider--type="div"}}
      {{/drawer-section}}

      {{#> drawer-main}}

        <!-- Content -->
        {{#> drawer-content}}
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

{{#* inline "page-template-section"}}
  {{#> page-main-section page-main-section--modifier="pf-m-no-padding"}}

    <!-- Drawer -->
    {{#> primary-detail-template primary-detail-template--id=(concat page-template--id "-drawer") primary-detail-template--modifier="pf-m-inline" drawer-panel--IsOpen="true"}}

      {{#> drawer-section}}
        {{> toolbar-template
            toolbar-template--id=(concat drawer--id '-toolbar')
            toolbar-template--modifier="pf-m-inset-lg"
            toolbar-template--HasBulkSelect=true
            toolbar-template--HasSearchFilter=true
            toolbar-template--HasSortButton=true
            toolbar-template--HasToggleGroup=true
            toolbar-template--HasOverflowMenu=true
            toolbar-template--HasOverflowMenuSecondButton=true
            toolbar-template--HasViewToggle=true
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

### Inline modifier
```hbs isFullscreen
{{> page-template page-template--id="primary-detail-inline-modifier-example" masthead-template--modifier="pf-m-display-stack pf-m-display-inline-on-lg"}}

{{#* inline "page-template-section"}}
  {{#> page-main-section}}
    {{#> primary-detail-template primary-detail-template--id=(concat page-template--id "-drawer") primary-detail-template--modifier="pf-m-inline" drawer-panel--IsOpen="true"}}

      {{#> drawer-section}}
        {{> toolbar-template
            toolbar-template--id=(concat drawer--id '-toolbar')
            toolbar-template--HasFilterGroup=true
            toolbar-template--HasOverflowMenu=true
            toolbar-template--HasSearchFilter=true
            toolbar-template--HasSortButton=true
            toolbar-template--HasToggleGroup=true
          }}
        {{> divider divider--type="div"}}
      {{/drawer-section}}

      {{#> drawer-main}}

        <!-- Content -->
        {{#> drawer-content}}
          {{> data-list-simple-data-list}}
        {{/drawer-content}}

        <!-- Panel -->
        {{#> drawer-panel drawer-panel--type="div" progress--modifier="pf-m-sm"}}

          <!-- Panel header -->
          {{> primary-detail-template-panel-header primary-detail-template-panel-header--title="Node 2" primary-detail-template-panel-header--sub-title='<a href="#">siemur/test-space</a>'}}

          <!-- Tabs -->
          {{#> drawer-body drawer-body--modifier="pf-m-no-padding"}}
            {{> primary-detail-template-panel-tabs primary-detail-template-panel-tabs--aria-label="Node 2" primary-detail-template-panel-tabs--modifier="pf-m-box pf-m-fill"}}
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

## Documentation

This demo implements the drawer in context of the page component.
