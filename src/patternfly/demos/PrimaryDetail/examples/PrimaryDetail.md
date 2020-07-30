---
id: Primary-Detail
section: demos
wrapperTag: div
---

## Demos

### Primary-detail expanded
```hbs isFullscreen
{{#> primary-detail-template
  primary-detail-template--id="primary-detail-expanded-example"
  primary-detail-template--title="Primary-detail expanded"
  primary-detail-template--description="Body text should be Red Hat Text Regular at 16px. It should have leading of 24px because of its relative line height of 1.5"
  primary-detail-template--modifier="pf-m-light"
  }}

  {{#> divider divider--type="div"}}{{/divider}}
  {{#> page-main-section page-main-section--modifier="pf-m-no-padding"}}

    <!-- Drawer -->
    {{#> drawer
      drawer--id=(concat primary-detail-template--id '-drawer')
      drawer-panel--IsOpen="true"
      drawer--modifier="pf-m-inline-on-2xl"
      }}

      {{#> drawer-main}}

        <!-- Content -->
        {{#> drawer-content}}
          {{> primary-detail-toolbar}}
          {{> primary-detail-data-list}}
        {{/drawer-content}}

        <!-- Panel -->
        {{#> drawer-panel
          drawer-panel--NoBody="true"
          progress--modifier="pf-m-sm"
          }}

          <!-- Panel header -->
          {{> primary-detail-panel-header
            primary-detail-panel-header--title="Node 2"
            primary-detail-panel-header--sub-title='<a href="#">siemur/test-space</a>'
            }}

          <!-- Tabs -->
          {{#> drawer-body drawer-body--modifier="pf-m-no-padding"}}
            {{> primary-detail-panel-tabs}}
          {{/drawer-body}}

          <!-- Tab content -->
          {{#> drawer-body}}
            {{> primary-detail-panel-tab-content}}
          {{/drawer-body}}
        {{/drawer-panel}}
      {{/drawer-main}}
    {{/drawer}}
  {{/page-main-section}}
{{/primary-detail-template}}
```

### Primary-detail collapsed
```hbs isFullscreen
{{#> primary-detail-template
  primary-detail-template--id="primary-detail-collapsed-example"
  primary-detail-template--title="Primary-detail collapsed"
  primary-detail-template--description="Body text should be Red Hat Text Regular at 16px. It should have leading of 24px because of its relative line height of 1.5"
  primary-detail-template--modifier="pf-m-light"
  }}

  {{#> divider divider--type="div"}}{{/divider}}
  {{#> page-main-section page-main-section--modifier="pf-m-no-padding"}}

    <!-- Drawer -->
    {{#> drawer
      drawer--id=(concat primary-detail-template--id '-drawer')
      drawer--modifier="pf-m-inline-on-2xl"
      }}

      {{#> drawer-main}}

        <!-- Content -->
        {{#> drawer-content}}
          {{> primary-detail-toolbar}}
          {{> primary-detail-data-list}}
        {{/drawer-content}}


        <!-- Panel -->
        {{#> drawer-panel
          drawer-panel--NoBody="true"
          progress--modifier="pf-m-sm"
          }}

          <!-- Content header -->
          {{> primary-detail-panel-header
            primary-detail-panel-header--title="Node 2"
            primary-detail-panel-header--sub-title='<a href="#">siemur/test-space</a>'
            }}

          <!-- Tabs -->
          {{#> drawer-body drawer-body--modifier="pf-m-no-padding"}}
            {{> primary-detail-panel-tabs}}
          {{/drawer-body}}

          <!-- Tab content -->
          {{#> drawer-body}}
            {{> primary-detail-panel-tab-content}}
          {{/drawer-body}}
        {{/drawer-panel}}
      {{/drawer-main}}
    {{/drawer}}
  {{/page-main-section}}
{{/primary-detail-template}}
```

### Primary-detail content body padding
```hbs isFullscreen
{{#> primary-detail-template
  primary-detail-template--id="primary-detail-panel-body-padding"
  primary-detail-template--title="Padded content example"
  primary-detail-template--description="Body text should be Red Hat Text Regular at 16px. It should have leading of 24px because of its relative line height of 1.5"
  }}

  {{#> divider divider--type="div"}}{{/divider}}
  {{#> page-main-section page-main-section--modifier="pf-m-no-padding"}}

    <!-- Drawer -->
    {{#> drawer
      drawer--id=(concat primary-detail-template--id '-drawer')
      drawer--modifier="pf-m-inline-on-2xl"
      drawer-panel--IsOpen="true"
      }}

      {{#> drawer-main}}

        <!-- Content -->
        {{#> drawer-content drawer-content--modifier="pf-m-no-background" drawer-body--modifier="pf-m-padding"}}
          {{> primary-detail-toolbar}}
          {{> primary-detail-data-list}}
        {{/drawer-content}}

        <!-- Panel -->
        {{#> drawer-panel
          drawer-panel--NoBody="true"
          progress--modifier="pf-m-sm"
          }}

          <!-- Panel header -->
          {{> primary-detail-panel-header
            primary-detail-panel-header--title="Patternfly-elements"
            primary-detail-panel-header--sub-title="PatternFly elements"
            }}

          <!-- Tab content -->
          {{#> drawer-body}}
            {{> primary-detail-panel-body}}
          {{/drawer-body}}
        {{/drawer-panel}}

      {{/drawer-main}}
    {{/drawer}}
  {{/page-main-section}}
{{/primary-detail-template}}
```

### Primary-detail card view expanded
```hbs isFullscreen
{{#> primary-detail-template
  primary-detail-template--id="primary-detail-card-view-expanded-example"
  primary-detail-template--title="Main title"
  primary-detail-template--description="Body text should be Red Hat Text Regular at 16px. It should have leading of 24px because of its relative line height of 1.5"
  }}

  {{#> page-main-section page-main-section--modifier="pf-m-no-padding"}}

    <!-- Drawer -->
    {{#> drawer
      drawer--id=(concat primary-detail-template--id '-drawer')
      drawer--modifier="pf-m-inline-on-2xl"
      drawer-panel--IsOpen="true"
      }}

      {{#> drawer-section}}
        {{> primary-detail-toolbar primary-detail-toolbar--HasViewToggle="true"}}
        {{#> divider divider--type="div"}}{{/divider}}
      {{/drawer-section}}

      {{#> drawer-main}}

        <!-- Content -->
        {{#> drawer-content drawer-content--modifier="pf-m-no-background" drawer-body--modifier="pf-m-padding"}}
          {{> primary-detail-card-view}}
        {{/drawer-content}}

        <!-- Panel -->
        {{#> drawer-panel
          drawer-panel--modifier=""
          drawer-panel--NoBody="true"
          }}

          <!-- Panel header -->
          {{> primary-detail-panel-header
            primary-detail-panel-header--title="Patternfly"
            primary-detail-panel-header--sub-title="PatternFly elements"
            }}

          {{#> drawer-body}}
            {{> primary-detail-panel-body}}
          {{/drawer-body}}

        {{/drawer-panel}}
      {{/drawer-main}}
    {{/drawer}}
  {{/page-main-section}}
{{/primary-detail-template}}
```

### Primary-detail card simple list expanded on mobile
```hbs isFullscreen
{{#> primary-detail-template
  primary-detail-template--id="primary-detail-card-simple-list-example"
  primary-detail-template--title="Primary-detail, in card, simple list"
  primary-detail-template--description="Body text should be Red Hat Text Regular at 16px. It should have leading of 24px because of its relative line height of 1.5"
  }}

  {{#> page-main-section}}
    {{#> card}}

      <!-- Drawer -->
      {{#> drawer
        drawer--id=(concat primary-detail-template--id '-drawer')
        drawer--IsStatic="true"
        drawer-panel--IsOpen="true"
        }}

        {{#> drawer-main}}
          <!-- Content -->
          {{#> drawer-content drawer-content--NoBody="true"}}
            {{#> drawer-content-body drawer-content-body--modifier="pf-m-no-padding"}}
              {{> primary-detail-simple-list}}
            {{/drawer-content-body}}
          {{/drawer-content}}

          <!-- Panel -->
          {{#> drawer-panel
            drawer-panel--type="div"
            drawer-panel--attribute=(concat 'id="' primary-detail-template--id '-panel" aria-label="Panel"')
            drawer-panel--modifier="pf-m-width-75-on-xl"
            drawer-panel--NoBody="true"
            }}

            <!-- Panel header -->
            {{> primary-detail-panel-header
              primary-detail-panel-header--title="Patternfly-elements"
              }}

            {{#> drawer-body}}
              {{> primary-detail-panel-body}}
            {{/drawer-body}}
          {{/drawer-panel}}
        {{/drawer-main}}
      {{/drawer}}
    {{/card}}
  {{/page-main-section}}
{{/primary-detail-template}}
```

### Primary-detail card data list expanded on mobile
```hbs isFullscreen
{{#> primary-detail-template
  primary-detail-template--id="primary-detail-card-data-list-example"
  primary-detail-template--title="Primary-detail, in card, data list"
  primary-detail-template--description="Body text should be Red Hat Text Regular at 16px. It should have leading of 24px because of its relative line height of 1.5"
  }}

  {{#> page-main-section}}
    {{#> card}}

      <!-- Drawer -->
      {{#> drawer
        drawer--id=(concat primary-detail-template--id '-drawer')
        drawer--IsStatic="true"
        drawer-panel--IsOpen="true"
        }}

        {{#> drawer-main}}

          <!-- Content -->
          {{#> drawer-content}}
            {{#> drawer-body}}
              {{> primary-detail-card-toolbar}}
              {{> primary-detail-card-data-list}}
            {{/drawer-body}}
          {{/drawer-content}}

          <!-- Panel -->
          {{#> drawer-panel
            drawer-panel--type="div"
            drawer-panel--attribute=(concat 'id="' primary-detail-template--id '-panel" aria-label="Panel"')
            drawer-panel--modifier="pf-m-width-75-on-2xl"
            drawer-panel--NoBody="true"
            }}

            <!-- Panel header -->
            {{> primary-detail-panel-header
              primary-detail-panel-header--title="Patternfly-elements"
              }}

            {{#> drawer-body}}
              {{> primary-detail-panel-body}}
            {{/drawer-body}}
          {{/drawer-panel}}
        {{/drawer-main}}
      {{/drawer}}
    {{/card}}
  {{/page-main-section}}
{{/primary-detail-template}}
```

### Inline modifier
```hbs isFullscreen
{{#> primary-detail-template
  primary-detail-template--id="independent-scroll-example"
  primary-detail-template--title="Primary-detail expanded, with data-list and .pf-m-inline modifier demo"
  primary-detail-template--description="Body text should be Red Hat Text Regular at 16px. It should have leading of 24px because of its relative line height of 1.5"
  primary-detail-template--modifier="pf-m-light pf-m-inline"
  }}
  {{#> divider divider--type="div"}}{{/divider}}
  <!-- Drawer -->
  {{#> drawer
    drawer--id=(concat primary-detail-template--id '-drawer')
    drawer-panel--IsOpen="true"
    drawer--modifier="pf-m-inline-on-2xl"
    }}

    {{#> drawer-main}}

      <!-- Content -->
      {{#> drawer-content}}
        {{#> drawer-body}}
          {{> primary-detail-toolbar}}
          {{> primary-detail-data-list}}
        {{/drawer-body}}
      {{/drawer-content}}

      <!-- Panel -->
      {{#> drawer-panel
        drawer-panel--type="div"
        drawer-panel--NoBody="true"
        progress--modifier="pf-m-sm"
        }}

        <!-- Panel header -->
        {{> primary-detail-panel-header
          primary-detail-panel-header--title="Node 2"
          primary-detail-panel-header--sub-title='<a href="#">siemur/test-space</a>'
          }}

        <!-- Tabs -->
        {{#> drawer-body drawer-body--modifier="pf-m-no-padding"}}
          {{> primary-detail-panel-tabs}}
        {{/drawer-body}}

        <!-- Tab content -->
        {{#> drawer-body}}
          {{> primary-detail-panel-tab-content}}
        {{/drawer-body}}
      {{/drawer-panel}}
    {{/drawer-main}}
  {{/drawer}}
{{/primary-detail-template}}
```

## Documentation

This demo implements the drawer in context of the page component.
