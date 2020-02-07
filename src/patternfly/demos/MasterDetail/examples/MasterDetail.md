---
title: Master Detail
section: demos
---

import './MasterDetail.css'

## Demos

```hbs title=Master-detail-table-expanded isFullscreen
{{#> master-detail-template
  master-detail-template--id="master-detail-table-expanded-example"
  master-detail-template--title="Master detail expanded, with table and .pf-m-inline modifier demo"
  master-detail-template--description="Body text should be Red Hat Text Regular at 16px. It should have leading of 24px because of its relative line height of 1.5"
  master-detail-template--modifier="pf-m-light"
  }}

  {{#> divider divider--type="div"}}{{/divider}}
  {{#> page-main-section page-main-section--modifier="pf-m-no-padding"}}

    <!-- Drawer -->
    {{#> drawer
      drawer--id=(concat master-detail-template--id '-drawer')
      drawer-panel--IsOpen="true"
      drawer--modifier="pf-m-inline-on-2xl"
      }}

      {{#> drawer-main}}

        <!-- Content -->
        {{#> drawer-content}}

          {{> master-detail-toolbar}}
          {{#> divider divider--type="div"}}{{/divider}}

          <!-- Table -->
          {{> master-detail-table}}
        {{/drawer-content}}

        <!-- Panel -->
        {{#> drawer-panel
          drawer-panel--type="div"
          drawer-panel--NoBody="true"
          progress--modifier="pf-m-sm"
          }}

          <!-- Content header -->
          {{#> drawer-panel-body}}
            {{> master-detail-content-header
              master-detail-content-header--title="Node 2"
              master-detail-content-header--sub-title='<a href="#">siemur/test-space</a>'
              }}
          {{/drawer-panel-body}}

          <!-- Tabs -->
          {{#> drawer-panel-body drawer-panel-body--modifier="pf-m-no-padding"}}
            {{> master-detail-content-tabs}}
          {{/drawer-panel-body}}

          <!-- Tab content -->
          {{#> drawer-panel-body}}
            {{> master-detail-content-tab-content}}
          {{/drawer-panel-body}}
        {{/drawer-panel}}
      {{/drawer-main}}
    {{/drawer}}
  {{/page-main-section}}
{{/master-detail-template}}
```

```hbs title=Master-detail-table-collapsed isFullscreen
{{#> master-detail-template
  master-detail-template--id="master-detail-table-collapsed-example"
  master-detail-template--title="Master detail collapsed, with table demo"
  master-detail-template--description="Body text should be Red Hat Text Regular at 16px. It should have leading of 24px because of its relative line height of 1.5"
  master-detail-template--modifier="pf-m-light"
  }}

  {{#> divider divider--type="div"}}{{/divider}}
  {{#> page-main-section page-main-section--modifier="pf-m-no-padding"}}

    <!-- Drawer -->
    {{#> drawer
      drawer--id=(concat master-detail-template--id '-drawer')
      drawer--modifier="pf-m-inline-on-2xl"
      }}

      {{#> drawer-main}}
        <!-- Content -->
        {{#> drawer-content}}

          {{> master-detail-toolbar}}
          {{#> divider divider--type="div"}}{{/divider}}

          <!-- Table -->
          {{> master-detail-table}}
        {{/drawer-content}}


        <!-- Panel -->
        {{#> drawer-panel
          drawer-panel--type="div"
          drawer-panel--NoBody="true"
          progress--modifier="pf-m-sm"
          }}

          <!-- Content header -->
          {{#> drawer-panel-body}}
            {{> master-detail-content-header
              master-detail-content-header--title="Node 2"
              master-detail-content-header--sub-title='<a href="#">siemur/test-space</a>'
              }}
          {{/drawer-panel-body}}

          <!-- Tabs -->
          {{#> drawer-panel-body drawer-panel-body--modifier="pf-m-no-padding"}}
            {{> master-detail-content-tabs}}
          {{/drawer-panel-body}}

          <!-- Tab content -->
          {{#> drawer-panel-body}}
            {{> master-detail-content-tab-content}}
          {{/drawer-panel-body}}
        {{/drawer-panel}}
      {{/drawer-main}}
    {{/drawer}}
  {{/page-main-section}}
{{/master-detail-template}}
```

```hbs title=Master-detail-data-list-expanded isFullscreen
{{#> master-detail-template
  master-detail-template--id="master-detail-data-list-expanded-example"
  master-detail-template--title="Expanded data list demo"
  master-detail-template--description="Body text should be Red Hat Text Regular at 16px. It should have leading of 24px because of its relative line height of 1.5"
  }}

  {{#> divider divider--type="div"}}{{/divider}}
  {{#> page-main-section page-main-section--modifier="pf-m-no-padding"}}

    <!-- Drawer -->
    {{#> drawer
      drawer--id=(concat master-detail-template--id '-drawer')
      drawer--modifier="pf-m-inline-on-2xl"
      drawer-panel--IsOpen="true"
      }}

      {{#> drawer-main}}
        {{#> drawer-content drawer-content--modifier="pf-m-no-background" drawer-content-body--modifier="pf-m-padding"}}

            <!-- Toolbar -->
          {{> master-detail-toolbar}}

          <!-- Data list -->
          {{> master-detail-data-list}}
        {{/drawer-content}}

        <!-- Panel -->
        {{#> drawer-panel
          drawer-panel--type="div"
          drawer-panel--attribute=(concat 'id="' master-detail-template--id '-panel" aria-label="Panel"')
          drawer-panel--NoBody="true"
          progress--modifier="pf-m-sm"
          }}

          <!-- Content header -->
          {{#> drawer-panel-body}}
            {{> master-detail-content-header
              master-detail-content-header--title="Patternfly-elements"
              master-detail-content-header--sub-title="PatternFly elements"
              }}
          {{/drawer-panel-body}}

          <!-- Tab content -->
          {{#> drawer-panel-body}}
            {{> master-detail-content-body}}
          {{/drawer-panel-body}}
        {{/drawer-panel}}

      {{/drawer-main}}
    {{/drawer}}
  {{/page-main-section}}
{{/master-detail-template}}
```

```hbs title=Master-detail-card-view-expanded isFullscreen
{{#> master-detail-template
  master-detail-template--id="master-detail-card-view-expanded-example"
  master-detail-template--title="Main title"
  master-detail-template--description="Body text should be Red Hat Text Regular at 16px. It should have leading of 24px because of its relative line height of 1.5"
  }}

  {{#> page-main-section page-main-section--modifier="pf-m-no-padding"}}

    <!-- Drawer -->
    {{#> drawer
      drawer--id=(concat master-detail-template--id '-drawer')
      drawer--modifier="pf-m-inline-on-2xl"
      drawer-panel--IsOpen="true"
      }}

      {{#> drawer-section}}
        {{> master-detail-toolbar master-detail-toolbar--HasViewToggle="true"}}
        {{#> divider divider--type="div"}}{{/divider}}
      {{/drawer-section}}

      {{#> drawer-main}}
        {{#> drawer-content
          drawer-content--modifier="pf-m-no-background"
          drawer-content-body--modifier="pf-m-padding"
          }}

          {{> master-detail-card-view}}
        {{/drawer-content}}

        {{#> drawer-panel
          drawer-panel--type="div"
          drawer-panel--attribute=(concat 'id="' master-detail-template--id '-panel" aria-label="Panel"')
          drawer-panel--modifier=""
          drawer-panel--NoBody="true"
          }}

          {{#> drawer-panel-body}}
            {{> master-detail-content-header
              master-detail-content-header--title="Patternfly"
              master-detail-content-header--sub-title="PatternFly elements"
              }}
          {{/drawer-panel-body}}

          {{#> drawer-panel-body}}
            {{> master-detail-content-body}}
          {{/drawer-panel-body}}

        {{/drawer-panel}}
      {{/drawer-main}}
    {{/drawer}}
  {{/page-main-section}}
{{/master-detail-template}}
```

```hbs title=Master-detail-card-simple-list isFullscreen
{{#> master-detail-template
  master-detail-template--id="master-detail-card-simple-list-example"
  master-detail-template--title="Master detail, in card, simple list"
  master-detail-template--description="Body text should be Red Hat Text Regular at 16px. It should have leading of 24px because of its relative line height of 1.5"
  }}

  {{#> page-main-section}}
    {{#> card}}

      <!-- Drawer -->
      {{#> drawer
        drawer--id=(concat master-detail-template--id '-drawer')
        drawer--IsStatic="true"
        }}

        {{#> drawer-main}}
          <!-- Content -->
          {{#> drawer-content drawer-content--NoBody="true"}}
            {{#> drawer-content-body drawer-content-body--modifier="pf-m-no-padding"}}
              {{> master-detail-simple-list}}
            {{/drawer-content-body}}
          {{/drawer-content}}

          <!-- Panel -->
          {{#> drawer-panel
            drawer-panel--type="div"
            drawer-panel--attribute=(concat 'id="' master-detail-template--id '-panel" aria-label="Panel"')
            drawer-panel--modifier="pf-m-width-75-on-xl"
            drawer-panel--NoBody="true"
            }}

            <!-- Panel  -->
            {{#> drawer-panel-body}}
              {{> master-detail-content-header
                master-detail-content-header--title="Patternfly-elements"
                master-detail-content-header--sub-title="PatternFly elements"
                }}
            {{/drawer-panel-body}}
            {{#> drawer-panel-body}}
              {{> master-detail-content-body}}
            {{/drawer-panel-body}}
          {{/drawer-panel}}
        {{/drawer-main}}
      {{/drawer}}
    {{/card}}
  {{/page-main-section}}
{{/master-detail-template}}
```

```hbs title=Master-detail-card-data-list isFullscreen
{{#> master-detail-template
  master-detail-template--id="master-detail-card-data-list-example"
  master-detail-template--title="Master detail and simple list, in card"
  master-detail-template--description="Body text should be Red Hat Text Regular at 16px. It should have leading of 24px because of its relative line height of 1.5"
  }}

  {{#> page-main-section}}
    {{#> card}}

      <!-- Drawer -->
      {{#> drawer
        drawer--id=(concat master-detail-template--id '-drawer')
        drawer--IsStatic="true"
        }}

        {{#> drawer-main}}
          <!-- Content -->
          {{#> drawer-content drawer-content--NoBody="true"}}
            {{#> drawer-content-body drawer-content-body--modifier="pf-m-no-padding"}}
              {{> master-detail-card-toolbar}}
              {{> master-detail-card-data-list}}
            {{/drawer-content-body}}
          {{/drawer-content}}

          <!-- Panel -->
          {{#> drawer-panel
            drawer-panel--type="div"
            drawer-panel--attribute=(concat 'id="' master-detail-template--id '-panel" aria-label="Panel"')
            drawer-panel--modifier="pf-m-width-75-on-2xl"
            drawer-panel--NoBody="true"
            }}

            <!-- Panel  -->
            {{#> drawer-panel-body}}
              {{> master-detail-content-header
                master-detail-content-header--title="Patternfly-elements"
                master-detail-content-header--sub-title="PatternFly elements"
                }}
            {{/drawer-panel-body}}
            {{#> drawer-panel-body}}
              {{> master-detail-content-body}}
            {{/drawer-panel-body}}
          {{/drawer-panel}}
        {{/drawer-main}}
      {{/drawer}}
    {{/card}}
  {{/page-main-section}}
{{/master-detail-template}}
```

```hbs title=Independently-scrollable-content-and-panel isFullscreen
{{#> master-detail-template
  master-detail-template--id="independent-scroll-example"
  master-detail-template--title="Master detail expanded, with table and .pf-m-inline modifier demo"
  master-detail-template--description="Body text should be Red Hat Text Regular at 16px. It should have leading of 24px because of its relative line height of 1.5"
  master-detail-template--modifier="pf-m-light"
  }}
  {{#> divider divider--type="div"}}{{/divider}}
  <!-- Drawer -->
  {{#> drawer
    drawer--id=(concat master-detail-template--id '-drawer')
    drawer-panel--IsOpen="true"
    drawer--modifier="pf-m-inline-on-2xl"
    }}

    {{#> drawer-main}}

      <!-- Content -->
      {{#> drawer-content}}

        {{> master-detail-toolbar}}
        {{#> divider divider--type="div"}}{{/divider}}

        <!-- Table -->
        {{> master-detail-table}}
      {{/drawer-content}}

      <!-- Panel -->
      {{#> drawer-panel
        drawer-panel--type="div"
        drawer-panel--NoBody="true"
        progress--modifier="pf-m-sm"
        }}

        <!-- Content header -->
        {{#> drawer-panel-body}}
          {{> master-detail-content-header
            master-detail-content-header--title="Node 2"
            master-detail-content-header--sub-title='<a href="#">siemur/test-space</a>'
            }}
        {{/drawer-panel-body}}

        <!-- Tabs -->
        {{#> drawer-panel-body drawer-panel-body--modifier="pf-m-no-padding"}}
          {{> master-detail-content-tabs}}
        {{/drawer-panel-body}}

        <!-- Tab content -->
        {{#> drawer-panel-body}}
          {{> master-detail-content-tab-content}}
        {{/drawer-panel-body}}
      {{/drawer-panel}}
    {{/drawer-main}}
  {{/drawer}}
{{/master-detail-template}}
```

## Documentation

This demo implements the drawer in context of the page component.
