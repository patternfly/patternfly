---
id: Penta example
section: patterns
wrapperTag: div
---

## Demos

### Penta demo (in progress)

```hbs isFullscreen
{{#> page page--id="page-id"}}
  {{#> masthead masthead--id="masthead-id" masthead--modifier=masthead-template--modifier masthead-template-content-icon-group--breakpoint="lg"}}
    {{#> masthead-logo}}
      {{> masthead-toggle}}
      {{#> masthead-main}}
        {{#> masthead-brand}}
          {{> brand brand--modifier="pf-m-light" brand--attribute='src="/assets/images/PF-IconLogo-color.svg" style="--pf-v5-c-brand--Width: 37px;" alt="PatternFly logo"'}}
          {{> brand brand--modifier="pf-m-dark" brand--attribute='src="/assets/images/PF-IconLogo-Reverse.svg" style="--pf-v5-c-brand--Width: 37px;" alt="PatternFly logo"'}}
        {{/masthead-brand}}
      {{/masthead-main}}
    {{/masthead-logo}}
    {{#> masthead-content}}
      {{#> toolbar}}
        {{#> toolbar-content}}
          {{#> toolbar-content-section}}
            {{#> toolbar-item}}
              {{#> menu-toggle}}
                {{#> menu-toggle-text}}
                  Context selector
                {{/menu-toggle-text}}
                {{#> menu-toggle-controls}}
                  {{> menu-toggle-toggle-icon}}
                {{/menu-toggle-controls}}
              {{/menu-toggle}}
            {{/toolbar-item}}
            {{#> toolbar-group toolbar-group--modifier="pf-m-align-end"}}
              {{#> toolbar-item}}
                {{> menu-toggle menu-toggle--IsPlain=true menu-toggle--attribute='aria-label="Actions"' menu-toggle--icon="ellipsis-v"}}
              {{/toolbar-item}}
              {{#> toolbar-item}}
                {{#> menu-toggle}}
                  {{#> menu-toggle-text}}
                    Alex dev
                  {{/menu-toggle-text}}
                  {{#> menu-toggle-controls}}
                    {{> menu-toggle-toggle-icon}}
                  {{/menu-toggle-controls}}
                {{/menu-toggle}}
              {{/toolbar-item}}
            {{/toolbar-group}}
          {{/toolbar-content-section}}
        {{/toolbar-content}}
      {{/toolbar}}
    {{/masthead-content}}
  {{/masthead}}
  {{#> page-sidebar page-sidebar--ExcludeSidebarBody=true}}
    {{#> page-sidebar-header}}
      {{#> page-sidebar-title}}
        PatternFly Navigation<br>
        Product Name
      {{/page-sidebar-title}}
    {{/page-sidebar-header}}
    {{#> page-sidebar-body}}
      {{#> nav nav--attribute='aria-label="Global"'}}
        {{#> nav-section nav-section--attribute='aria-labelledby="grouped-title1"'}}
          {{#> nav-section-title nav-section-title--attribute='id="grouped-title1"'}}
            Cluster
          {{/nav-section-title}}
          {{#> nav-list}}
            {{#> nav-item}}
              {{#> nav-link nav-link--href="#"}}
                Dashboard
              {{/nav-link}}
            {{/nav-item}}
            {{#> nav-item}}
              {{#> nav-link nav-link--href="#"}}
                Builds
              {{/nav-link}}
            {{/nav-item}}
            {{#> nav-item}}
              {{#> nav-link nav-link--href="#"}}
                Compute
              {{/nav-link}}
            {{/nav-item}}
            {{#> nav-item}}
              {{#> nav-link nav-link--href="#"}}
                Networking
              {{/nav-link}}
            {{/nav-item}}
            {{#> nav-item}}
              {{#> nav-link nav-link--href="#"}}
                Observe
              {{/nav-link}}
            {{/nav-item}}
            {{#> nav-item}}
              {{#> nav-link nav-link--href="#"}}
                Operators
              {{/nav-link}}
            {{/nav-item}}
            {{#> nav-item}}
              {{#> nav-link nav-link--href="#" nav-link--current="true"}}
                Applications
              {{/nav-link}}
            {{/nav-item}}
            {{#> nav-item}}
              {{#> nav-link nav-link--href="#"}}
                Workloads
              {{/nav-link}}
            {{/nav-item}}
          {{/nav-list}}
        {{/nav-section}}
        {{#> nav-section nav-section--attribute='aria-labelledby="grouped-title2"'}}
          {{#> nav-section-title nav-section-title--attribute='id="grouped-title2"'}}
            Settings
          {{/nav-section-title}}
          {{#> nav-list}}
            {{#> nav-item}}
              {{#> nav-link nav-link--href="#"}}
                User Management
              {{/nav-link}}
            {{/nav-item}}
            {{#> nav-item}}
              {{#> nav-link nav-link--href="#"}}
                Administration
              {{/nav-link}}
            {{/nav-item}}
            {{#> nav-item}}
              {{#> nav-link nav-link--href="#"}}
                Import YAML
              {{/nav-link}}
            {{/nav-item}}
            {{#> nav-item}}
              {{#> nav-link nav-link--href="#"}}
                Help and Support
              {{/nav-link}}
            {{/nav-item}}
          {{/nav-list}}
        {{/nav-section}}
      {{/nav}}
    {{/page-sidebar-body}}
  {{/page-sidebar}}

  {{#> page-main page-main--attribute=(concat 'id="main-content-' page--id '"')}}
  {{#> page-main-list}}
    {{> page-template-breadcrumb}}
    {{#> page-main-section page-main-section--IsLimitWidth="true" page-main-section--modifier=(concat 'pf-m-light ' page-template-title--modifier)}}
      {{#> content}}
        <h3>
          {{~#if page-template-title--title}}
            {{page-template-title--title}}
          {{else}}
            Penta Hackathon Demo Page
          {{/if}}
        </h3>
        <p>
          {{~#if page-template-title--description}}
            {{page-template-title--description}}
          {{else}}
            A showcase of our new tokens being applied to create a new theme.
          {{/if}}
        </p>
      {{/content}}
    {{/page-main-section}}
    {{#> page-main-section page-main-section--IsLimitWidth="true" page-main-section--modifier=page-template-gallery--modifier page-main-section--attribute=page-template-gallery--attribute}}
      {{#> toolbar toolbar--id="toolbar-simple-example" toolbar--modifier="pf-m-inset-none"}}
        {{#> toolbar-content}}
          {{#> toolbar-content-section}}
            {{#> toolbar-item}}
              {{#> menu-toggle}}
                {{#> menu-toggle-text}}
                  Dropdown menu
                {{/menu-toggle-text}}
                {{#> menu-toggle-controls}}
                  {{> menu-toggle-toggle-icon}}
                {{/menu-toggle-controls}}
              {{/menu-toggle}}
            {{/toolbar-item}}
            {{#> toolbar-item}}
              {{#> menu-toggle}}
                {{#> menu-toggle-text}}
                  Another one
                {{/menu-toggle-text}}
                {{#> menu-toggle-controls}}
                  {{> menu-toggle-toggle-icon}}
                {{/menu-toggle-controls}}
              {{/menu-toggle}}
            {{/toolbar-item}}
            {{#> toolbar-group toolbar-group--modifier="pf-m-align-end"}}
              {{#> toolbar-group toolbar-group--modifier="pf-m-icon-button-group"}}
                {{#> toolbar-item}}
                  {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Remove"'}}
                    <i class="fas fa-columns" aria-hidden="true"></i>
                  {{/button}}
                {{/toolbar-item}}
                {{#> toolbar-item}}
                  {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Remove"'}}
                    <i class="fas fa-cog" aria-hidden="true"></i>
                  {{/button}}
                {{/toolbar-item}}
              {{/toolbar-group}}
              {{#> toolbar-item}}
                {{#> button button--modifier="pf-m-primary"}}
                  Primary
                {{/button}}
              {{/toolbar-item}}
            {{/toolbar-group}}
          {{/toolbar-content-section}}
        {{/toolbar-content}}
      {{/toolbar}}
      {{#> table table--id=(concat page--id '-table') table--grid="true" table--modifier=(concat 'pf-m-grid-md ' table-simple-table--modifier) table--attribute='aria-label="This is a table with checkboxes"'}}
        {{#> table-thead}}
          {{#> table-tr}}
            {{#> table-td table-td--check="true"}}
              {{#> check check--modifier="pf-m-standalone"}}
                {{#> check-input check-input--attribute=(concat 'name="checkrow1" aria-labelledby="' table--id '-node1"')}}{{/check-input}}
              {{/check}}
            {{/table-td}}
            {{#> table-th table-th--attribute='scope="col"'}}
              Repositories
            {{/table-th}}
            {{#> table-th table-th--attribute='scope="col"'}}
              Branches
            {{/table-th}}
            {{#> table-th table-th--attribute='scope="col"'}}
              Pull requests
            {{/table-th}}
            {{#> table-th table-th--attribute='scope="col"'}}
              Workspaces
            {{/table-th}}
            {{#> table-th table-th--attribute='scope="col"'}}
              Last commit
            {{/table-th}}
            {{> table-td table-td--IsEmpty="true"}}
            {{> table-td table-td--IsEmpty="true"}}
          {{/table-tr}}
        {{/table-thead}}

        {{#> table-tbody table-tr--IsClickable="true" table-tr--basic--title="Clickable"}}
          {{#> table-tr}}
            {{#> table-td table-td--check="true"}}
              {{#> check check--modifier="pf-m-standalone"}}
                {{#> check-input check-input--attribute=(concat 'name="checkrow1" aria-labelledby="' table--id '-node1"')}}{{/check-input}}
              {{/check}}
            {{/table-td}}
            {{#> table-th table-th--data-label="Repository name"}}
              <div>
                <div id="{{table--id}}-node1">Node 1</div>
              </div>
            {{/table-th}}
            {{#> table-td table-td--data-label="Branches"}}
              {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
                {{#> l-flex-item}}
                  <i class="fas fa-code-branch"></i>
                {{/l-flex-item}}
                {{#> l-flex-item}}
                  10
                {{/l-flex-item}}
              {{/l-flex}}
            {{/table-td}}
            {{#> table-td table-td--data-label="Pull requests"}}
              {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
                {{#> l-flex-item}}
                  <i class="fas fa-code"></i>
                {{/l-flex-item}}
                {{#> l-flex-item}}
                  25
                {{/l-flex-item}}
              {{/l-flex}}
            {{/table-td}}
            {{#> table-td table-td--data-label="Workspaces"}}
              {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
                {{#> l-flex-item}}
                  <i class="fas fa-cube"></i>
                {{/l-flex-item}}
                {{#> l-flex-item}}
                  5
                {{/l-flex-item}}
              {{/l-flex}}
            {{/table-td}}
            {{#> table-td table-td--data-label="Last commit"}}
              2 days ago
            {{/table-td}}
            {{#> table-td table-td--data-label="Action"}}
              <a href="/some/path">Action link</a>
            {{/table-td}}
            {{> table-td table-td--IsAction=true menu-toggle--icon='ellipsis-h'}}
          {{/table-tr}}

          {{#> table-tr table-tr--IsSelected="true"}}
            {{#> table-td table-td--check="true"}}
              {{#> check check--modifier="pf-m-standalone"}}
                {{#> check-input check-input--attribute=(concat 'name="checkrow2" aria-labelledby="' table--id '-node2" checked')}}{{/check-input}}
              {{/check}}
            {{/table-td}}
            {{#> table-th table-th--data-label="Repository name"}}
              <div>
                <div id="{{table--id}}-node2">Node 2</div>
              </div>
            {{/table-th}}
            {{#> table-td table-td--data-label="Branches"}}
              {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
                {{#> l-flex-item}}
                  <i class="fas fa-code-branch"></i>
                {{/l-flex-item}}
                {{#> l-flex-item}}
                  8
                {{/l-flex-item}}
              {{/l-flex}}
            {{/table-td}}
            {{#> table-td table-td--data-label="Pull requests"}}
              {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
                {{#> l-flex-item}}
                  <i class="fas fa-code"></i>
                {{/l-flex-item}}
                {{#> l-flex-item}}
                  30
                {{/l-flex-item}}
              {{/l-flex}}
            {{/table-td}}
            {{#> table-td table-td--data-label="Workspaces"}}
              {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
                {{#> l-flex-item}}
                  <i class="fas fa-cube"></i>
                {{/l-flex-item}}
                {{#> l-flex-item}}
                  2
                {{/l-flex-item}}
              {{/l-flex}}
            {{/table-td}}
            {{#> table-td table-td--data-label="Last commit"}}
              2 days ago
            {{/table-td}}
            {{#> table-td table-td--data-label="Action"}}
              <a href="/some/path">Action link</a>
            {{/table-td}}
            {{> table-td table-td--IsAction=true menu-toggle--icon='ellipsis-h'}}
          {{/table-tr}}

          {{#> table-tr}}
            {{#> table-td table-td--check="true"}}
              {{#> check check--modifier="pf-m-standalone"}}
                {{#> check-input check-input--attribute=(concat 'name="checkrow3" aria-labelledby="' table--id '-node3"')}}{{/check-input}}
              {{/check}}
            {{/table-td}}
            {{#> table-th table-th--data-label="Repository name"}}
              <div>
                <div id="{{table--id}}-node3">Node 3</div>
              </div>
            {{/table-th}}
            {{#> table-td table-td--data-label="Branches"}}
              {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
                {{#> l-flex-item}}
                  <i class="fas fa-code-branch"></i>
                {{/l-flex-item}}
                {{#> l-flex-item}}
                  12
                {{/l-flex-item}}
              {{/l-flex}}
            {{/table-td}}
            {{#> table-td table-td--data-label="Pull requests"}}
              {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
                {{#> l-flex-item}}
                  <i class="fas fa-code"></i>
                {{/l-flex-item}}
                {{#> l-flex-item}}
                  48
                {{/l-flex-item}}
              {{/l-flex}}
            {{/table-td}}
            {{#> table-td table-td--data-label="Workspaces"}}
              {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
                {{#> l-flex-item}}
                  <i class="fas fa-cube"></i>
                {{/l-flex-item}}
                {{#> l-flex-item}}
                  13
                {{/l-flex-item}}
              {{/l-flex}}
            {{/table-td}}
            {{#> table-td table-td--data-label="Last commit"}}
              30 days ago
            {{/table-td}}
            {{#> table-td table-td--data-label="Action"}}
              <a href="#">Action link</a>
            {{/table-td}}
            {{> table-td table-td--IsAction=true menu-toggle--icon='ellipsis-h'}}
          {{/table-tr}}

          {{#> table-tr}}
            {{#> table-td table-td--check="true"}}
              {{#> check check--modifier="pf-m-standalone"}}
                {{#> check-input check-input--attribute=(concat 'name="checkrow4" aria-labelledby="' table--id '-node4"')}}{{/check-input}}
              {{/check}}
            {{/table-td}}
            {{#> table-th table-th--data-label="Repository name"}}
              <div>
                <div id="{{table--id}}-node4">Node 4</div>
              </div>
            {{/table-th}}
            {{#> table-td table-td--data-label="Branches"}}
              {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
                {{#> l-flex-item}}
                  <i class="fas fa-code-branch"></i>
                {{/l-flex-item}}
                {{#> l-flex-item}}
                  3
                {{/l-flex-item}}
              {{/l-flex}}
            {{/table-td}}
            {{#> table-td table-td--data-label="Pull requests"}}
              {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
                {{#> l-flex-item}}
                  <i class="fas fa-code"></i>
                {{/l-flex-item}}
                {{#> l-flex-item}}
                  8
                {{/l-flex-item}}
              {{/l-flex}}
            {{/table-td}}
            {{#> table-td table-td--data-label="Workspaces"}}
              {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
                {{#> l-flex-item}}
                  <i class="fas fa-cube"></i>
                {{/l-flex-item}}
                {{#> l-flex-item}}
                  20
                {{/l-flex-item}}
              {{/l-flex}}
            {{/table-td}}
            {{#> table-td table-td--data-label="Last commit"}}
              8 days ago
            {{/table-td}}
            {{#> table-td table-td--data-label="Action"}}
              <a href="/some/path">Action link</a>
            {{/table-td}}
            {{> table-td table-td--IsAction=true menu-toggle--icon='ellipsis-h'}}
          {{/table-tr}}

          {{#> table-tr}}
            {{#> table-td table-td--check="true"}}
              {{#> check check--modifier="pf-m-standalone"}}
                {{#> check-input check-input--attribute=(concat 'name="checkrow5" aria-labelledby="' table--id '-node5"')}}{{/check-input}}
              {{/check}}
            {{/table-td}}
            {{#> table-td table-td--data-label="Repository name"}}
              <div>
                <div id="{{table--id}}-node5">Node 5</div>
              </div>
            {{/table-td}}
            {{#> table-td table-td--data-label="Branches"}}
              {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
                {{#> l-flex-item}}
                  <i class="fas fa-code-branch"></i>
                {{/l-flex-item}}
                {{#> l-flex-item}}
                  34
                {{/l-flex-item}}
              {{/l-flex}}
            {{/table-td}}
            {{#> table-td table-td--data-label="Pull requests"}}
              {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
                {{#> l-flex-item}}
                  <i class="fas fa-code"></i>
                {{/l-flex-item}}
                {{#> l-flex-item}}
                  21
                {{/l-flex-item}}
              {{/l-flex}}
            {{/table-td}}
            {{#> table-td table-td--data-label="Workspaces"}}
              {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
                {{#> l-flex-item}}
                  <i class="fas fa-cube"></i>
                {{/l-flex-item}}
                {{#> l-flex-item}}
                  26
                {{/l-flex-item}}
              {{/l-flex}}
            {{/table-td}}
            {{#> table-td table-td--data-label="Last commit"}}
              2 days ago
            {{/table-td}}
            {{#> table-td table-td--data-label="Action"}}
              <a href="/some/path">Action link</a>
            {{/table-td}}
            {{> table-td table-td--IsAction=true menu-toggle--icon='ellipsis-h'}}
          {{/table-tr}}
        {{/table-tbody}}
      {{/table}}
    {{/page-main-section}}
    {{/page-main-list}}
  {{/page-main}}
{{/page}}
```

## Documentation

This demo was created at the hackathon and is temporary for testing.