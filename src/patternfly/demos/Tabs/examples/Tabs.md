---
id: 'Tabs'
section: components
---

## Examples

### Open tabs

```hbs isFullscreen
{{> page-template page-template--id="tabs-tables-and-tabs-example"}}

{{#* inline "page-template-section"}}
  {{#> tabs-template tabs-template--id=(concat page-template--id "-tabs")}}

    {{#> page-main-tabs page-main-tabs--IsLimitWidth="true"}}
      {{> tabs-template-pod-tab-list tabs-template-pod-tab-list--modifier="pf-m-page-insets"}}
    {{/page-main-tabs}}

    {{#> page-main-section page-main-section--IsLimitWidth="true" page-main-section--modifier="pf-m-light"}}
      {{#> tabs-template-pod-tab-content}}
        {{#> l-flex l-flex--modifier="pf-m-column"}}
          {{#> l-flex-item l-flex-item--modifier="pf-m-spacer-lg"}}
            {{> title titleType="h2" title--modifier="pf-m-lg pf-v6-u-mt-sm" title--text="Pod details" title--attribute=(concat 'id="' tabs-template-pod-tab-content--id '-details-title"')}}
          {{/l-flex-item}}
          {{#> l-flex-item}}
            {{#> description-list description-list--modifier="pf-m-2-col-on-lg" description-list--attribute=(concat 'aria-labelledby="' tabs-template-pod-tab-content--id '-details-title"')}}
              {{#> description-list-group}}
                {{#> description-list-term}}
                  Name
                {{/description-list-term}}
                {{#> description-list-description}}
                  3scale-control-fccb6ddb9-phyqv9
                {{/description-list-description}}
              {{/description-list-group}}
              {{#> description-list-group}}
                {{#> description-list-term}}
                  Status
                {{/description-list-term}}
                {{#> description-list-description}}
                  {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
                    {{#> l-flex-item}}
                      <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
                    {{/l-flex-item}}
                    {{#> l-flex-item}}
                      Running
                    {{/l-flex-item}}
                  {{/l-flex}}
                {{/description-list-description}}
              {{/description-list-group}}
              {{#> description-list-group}}
                {{#> description-list-term}}
                  Namespace
                {{/description-list-term}}
                {{#> description-list-description}}
                  {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
                    {{#> l-flex-item}}
                      {{> label label--id="cyan-icon" label--color="cyan" label-text--value="NS"}}
                    {{/l-flex-item}}
                    {{#> l-flex-item}}
                      <a href="#">knative-serving-ingress</a>
                    {{/l-flex-item}}
                  {{/l-flex}}
                {{/description-list-description}}
              {{/description-list-group}}
              {{#> description-list-group}}
                {{#> description-list-term}}
                  Restart policy
                {{/description-list-term}}
                {{#> description-list-description}}
                  Always restart
                {{/description-list-description}}
              {{/description-list-group}}
              {{#> description-list-group}}
                {{#> description-list-term}}
                  Labels
                {{/description-list-term}}
                {{#> description-list-description}}
                  {{#> label-group label-group--id="label-group-basic"}}
                    {{#> label-group-main}}
                      {{#> label-group-list label-group-list--attribute='aria-label="Group of labels"'}}
                        {{#> label-group-list-item}}
                          {{> label label--IsOutlined=true label-text--value="app=3scale-gateway"}}
                        {{/label-group-list-item}}
                        {{#> label-group-list-item}}
                          {{> label label--IsOutlined=true label-text--value="pod-template-has=6747686899"}}
                        {{/label-group-list-item}}
                      {{/label-group-list}}
                    {{/label-group-main}}
                  {{/label-group}}
                {{/description-list-description}}
              {{/description-list-group}}
              {{#> description-list-group}}
                {{#> description-list-term}}
                  Active deadline seconds
                {{/description-list-term}}
                {{#> description-list-description}}
                  Not configured
                {{/description-list-description}}
              {{/description-list-group}}
              {{#> description-list-group}}
                {{#> description-list-term}}
                  Tolerations
                {{/description-list-term}}
                {{#> description-list-description}}
                  stuff
                {{/description-list-description}}
              {{/description-list-group}}
              {{#> description-list-group}}
                {{#> description-list-term}}
                  Pod IP
                {{/description-list-term}}
                {{#> description-list-description}}
                  10.345.2.197
                {{/description-list-description}}
              {{/description-list-group}}
              {{#> description-list-group}}
                {{#> description-list-term}}
                  Annotations
                {{/description-list-term}}
                {{#> description-list-description}}
                  stuff
                {{/description-list-description}}
              {{/description-list-group}}
              {{#> description-list-group}}
                {{#> description-list-term}}
                  Node
                {{/description-list-term}}
                {{#> description-list-description}}
                  {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
                    {{#> l-flex-item}}
                      {{> label label--id="purple-icon" label--color="purple" label-text--value="N"}}
                    {{/l-flex-item}}
                    {{#> l-flex-item}}
                      ip-10-0-233-118.us-east-2.computer.external
                    {{/l-flex-item}}
                  {{/l-flex}}
                {{/description-list-description}}
              {{/description-list-group}}
              {{#> description-list-group}}
                {{#> description-list-term}}
                  Created at
                {{/description-list-term}}
                {{#> description-list-description}}
                  <time>Oct 15, 1:51 pm</time>
                {{/description-list-description}}
              {{/description-list-group}}
            {{/description-list}}
          {{/l-flex-item}}
        {{/l-flex}}
      {{/tabs-template-pod-tab-content}}
    {{/page-main-section}}
  {{/tabs-template}}
{{/inline}}
```

### Open tabs with secondary tabs
```hbs isFullscreen
{{> page-template page-template--id="tabs-tables-and-tabs-example"}}

{{#* inline "page-template-section"}}
  {{#> tabs-template tabs-template--id=(concat page-template--id "-tabs")}}
    {{#> page-main-tabs page-main-tabs--IsLimitWidth="true"}}
      {{> tabs-template-pod-tab-list tabs-template-pod-tab-list--modifier="pf-m-page-insets"}}
    {{/page-main-tabs}}
    {{#> page-main-section page-main-section--IsLimitWidth="true" page-main-section--modifier="pf-m-light pf-m-no-padding"}}
      {{> tabs-template-pod-tab-list tabs-template-pod-tab-list--IsSecondary="true" tabs-template-pod-tab-list--modifier="pf-m-page-insets" tabs--id=(concat tabs-template--id '-secondary') tabs-template-pod-tab-list--modifier=reset}}
      {{#> tabs-template-pod-tab-content tab-content-body--modifier="pf-m-padding"}}
        {{#> tabs-template-pod-tab-content tab-content-body--modifier=reset tabs--id=(concat tabs-template--id '-secondary') tabs-template-pod-tab-content--IsSecondary="true"}}
          {{#> l-flex l-flex--modifier="pf-m-column"}}
            {{#> l-flex-item}}
              {{#> description-list description-list--modifier="pf-m-2-col-on-lg" description-list--attribute='aria-label="Pod information list"'}}
                {{#> description-list-group}}
                  {{#> description-list-term}}
                    Name
                  {{/description-list-term}}
                  {{#> description-list-description}}
                    3scale-control-fccb6ddb9-phyqv9
                  {{/description-list-description}}
                {{/description-list-group}}
                {{#> description-list-group}}
                  {{#> description-list-term}}
                    Status
                  {{/description-list-term}}
                  {{#> description-list-description}}
                    {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
                      {{#> l-flex-item}}
                        <i class="fas fa-fw fa-check-circle" aria-hidden="true"></i>
                      {{/l-flex-item}}
                      {{#> l-flex-item}}
                        Running
                      {{/l-flex-item}}
                    {{/l-flex}}
                  {{/description-list-description}}
                {{/description-list-group}}
                {{#> description-list-group}}
                  {{#> description-list-term}}
                    Namespace
                  {{/description-list-term}}
                  {{#> description-list-description}}
                    {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
                      {{#> l-flex-item}}
                        {{> label label--id="cyan-icon" label--color="cyan" label-text--value="NS"}}
                      {{/l-flex-item}}
                      {{#> l-flex-item}}
                        <a href="#">knative-serving-ingress</a>
                      {{/l-flex-item}}
                    {{/l-flex}}
                  {{/description-list-description}}
                {{/description-list-group}}
                {{#> description-list-group}}
                  {{#> description-list-term}}
                    Restart policy
                  {{/description-list-term}}
                  {{#> description-list-description}}
                    Always restart
                  {{/description-list-description}}
                {{/description-list-group}}
                {{#> description-list-group}}
                  {{#> description-list-term}}
                    Pod IP
                  {{/description-list-term}}
                  {{#> description-list-description}}
                    10.345.2.197
                  {{/description-list-description}}
                {{/description-list-group}}
                {{#> description-list-group}}
                  {{#> description-list-term}}
                    Active deadline seconds
                  {{/description-list-term}}
                  {{#> description-list-description}}
                    Not configured
                  {{/description-list-description}}
                {{/description-list-group}}
                {{#> description-list-group}}
                  {{#> description-list-term}}
                    Created at
                  {{/description-list-term}}
                  {{#> description-list-description}}
                    <time>Oct 15, 1:51 pm</time>
                  {{/description-list-description}}
                {{/description-list-group}}
                {{#> description-list-group}}
                  {{#> description-list-term}}
                    Node
                  {{/description-list-term}}
                  {{#> description-list-description}}
                    {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
                      {{#> l-flex-item}}
                        {{> label label--id="purple-icon" label--color="purple" label-text--value="N"}}
                      {{/l-flex-item}}
                      {{#> l-flex-item}}
                        ip-10-0-233-118.us-east-2.computer.external
                      {{/l-flex-item}}
                    {{/l-flex}}
                  {{/description-list-description}}
                {{/description-list-group}}
              {{/description-list}}
            {{/l-flex-item}}
          {{/l-flex}}
        {{/tabs-template-pod-tab-content}}
      {{/tabs-template-pod-tab-content}}
    {{/page-main-section}}
  {{/tabs-template}}
{{/inline}}
```

### Nested tabs
```hbs isFullscreen
{{> page-template page-template--id="nested-tabs-example"}}

{{#* inline "page-template-section"}}
  {{#> tabs-template tabs-template--id=(concat page-template--id "-tabs")}}
    {{#> page-main-tabs page-main-tabs--IsLimitWidth="true"}}
      {{#> tabs tabs--id=(concat tabs-template--id '-tabs') tabs--modifier="pf-m-page-insets"}}
        {{#> tabs-list}}
          {{> __tabs-item
            __tabs-item--current="true"
            __tabs-item--id="cluster-1"
            __tabs-item--aria-label="Cluster 1"
            __tabs-item--text="Cluster 1"
            __tabs-link--attribute=(concat 'aria-controls="' tabs--id '-cluster-1-panel"')}}
          {{> __tabs-item
            __tabs-item--id="cluster-2"
            __tabs-item--aria-label="Cluster 2"
            __tabs-item--text="Cluster 2"
            __tabs-link--attribute=(concat 'aria-controls="' tabs--id '-cluster-2-panel"')}}
        {{/tabs-list}}
      {{/tabs}}
    {{/page-main-tabs}}
    {{#> page-main-section page-main-section--IsLimitWidth="true" tab-content--id=(concat tabs-template--id '-tabs')}}
      {{#> tab-content tab-content--IsActive="true" tab-content--attribute=(concat 'aria-labelledby="' tab-content--id '-cluster-1-link" id="' tab-content--id '-cluster-1-panel"')}}
        {{> tabs--page-grid-view tabs--page-grid-view--id=(concat tabs-template--id '-tabs')}}
      {{/tab-content}}
      {{#> tab-content tab-content--attribute=(concat 'aria-labelledby="' tab-content--id '-cluster-2-link" id="' tab-content--id '-cluster-2-panel"')}}
        {{#> content}}
          <p>Cluster 2 content</p>
        {{/content}}
      {{/tab-content}}
    {{/page-main-section}}
  {{/tabs-template}}
{{/inline}}
```

### Tables and tabs
```hbs isFullscreen
{{> page-template page-template--id='table-tabs-example'}}

{{#* inline 'page-template-section'}}
  {{#> tabs-template tabs-template--id=(concat page-template--id '-tabs')}}
    {{#> page-main-section page-main-section--modifier='pf-m-no-padding pf-m-light' tab-content--id=(concat tabs-template--id '-tabs')}}
      {{> toolbar-template
          toolbar-template--id=(concat tabs-template--id '-toolbar')
          toolbar-template--modifier='pf-m-page-insets'
          toolbar-template--HasToggleGroup=true
          toolbar-template--HasFilter=true
          toolbar-template--HasNoPagination=true
          toolbar-template--HasSortButton=true
          toolbar-template--HasOverflowMenu=true
          toolbar-template--HasOverflowMenuSecondButton=true
          toolbar-template--OverflowButton1Text='Generate'
          toolbar-template--OverflowButton2Text='Deploy'
          toolbar-template--filterText='Name'
        }}
      {{> divider}}
      {{#> drawer drawer--id=(concat tabs-template--id '-tabs') primary-detail-template-template--id=(concat tabs-template--id '-tabs') drawer-panel--IsOpen="true" drawer--modifier="pf-m-inline"}}
        {{#> drawer-main}}
          <!-- Content -->
          {{#> drawer-content}}
            {{> tabs--table}}
          {{/drawer-content}}

          <!-- Panel -->
          {{#> drawer-panel drawer-panel--modifier="pf-m-width-33 pf-m-width-33-on-xl"}}
            {{> tabs--panel-header tabs--panel-header--title="Node 2" tabs--panel-header--sub-title='<a href="#">siemur/test-space</a>'}}
            {{#> drawer-body drawer-body--modifier="pf-m-no-padding"}}
              {{> primary-detail-template-panel-tabs primary-detail-template-panel-tabs--modifier="pf-m-box pf-m-fill"}}
            {{/drawer-body}}
            {{#> drawer-body primary-detail-template-template--id=(concat tabs-template--id '-tabs')}}
              {{> primary-detail-template-panel-tab-content progress--modifier="pf-m-sm" primary-detail-template-panel-tab-content--HasLabels="true"}}
            {{/drawer-body}}
          {{/drawer-panel}}
        {{/drawer-main}}
      {{/drawer}}
    {{/page-main-section}}
  {{/tabs-template}}
{{/inline}}
```

### Modal tabs
```hbs isFullscreen
{{#> modal-template modal-template--id="modal-tabs-example"}}
  {{#> modal-box modal-box--modifier="pf-m-sm" modal-box--attribute=(concat 'aria-labelledby="' modal-template--id '-modal-title" aria-describedby="' modal-template--id '-modal-description"')}}
    {{> modal-box-close}}
    {{#> modal-box-header}}
      {{#> modal-box-title modal-box-title--attribute=(concat 'id="' modal-template--id '-modal-title"')}}
        PatternFly
      {{/modal-box-title}}
    {{/modal-box-header}}
    {{#> tabs-template tabs-template--id=(concat page-template--id "-tabs")}}
      {{#> modal-box-body modal-box-body--attribute=(concat 'id="' modal-template--id '-modal-description"')}}
        {{#> grid grid--modifier="pf-m-gutter"}}
          {{#> grid-item}}
            {{#> tabs tabs--id=(concat modal-template--id '-tabs') tabs--IsSecondary="true" tabs--modifier="pf-m-inset-none"}}
              {{#> tabs-list}}
                {{> __tabs-item
                  __tabs-item--current="true"
                  __tabs-item--id="details"
                  __tabs-item--aria-label="Details"
                  __tabs-item--text="Details"
                  __tabs-link--attribute=(concat 'aria-controls="' tabs--id '-details-panel"')}}
                {{> __tabs-item
                  __tabs-item--id="documentation"
                  __tabs-item--aria-label="documentation"
                  __tabs-item--text="Documentation"
                  __tabs-link--attribute=(concat 'aria-controls="' tabs--id '-documentation-panel"')}}
              {{/tabs-list}}
            {{/tabs}}
          {{/grid-item}}
          {{#> grid-item}}
            {{#> tab-content tab-content--IsActive="true" tab-content--attribute=(concat 'aria-labelledby="' modal-template--id '-tabs-details-link" id="' modal-template--id '-tabs-details-panel"')}}
              <p>PatternFly is a community project that promotes design commonality and improves user experience.</p>
            {{/tab-content}}
            {{#> tab-content tab-content--attribute=(concat 'aria-labelledby="' modal-template--id '-tabs-documentation-link" id="' modal-template--id '-tabs-documentation-panel"')}}
              {{#> list}}
                <li class=""><a>Doc link 1</a></li>
                <li class=""><a>Doc link 2</a></li>
                <li class=""><a>Doc link 3</a></li>
              {{/list}}
            {{/tab-content}}
          {{/grid-item}}
        {{/grid}}
      {{/modal-box-body}}
    {{/tabs-template}}
  {{/modal-box}}
{{/modal-template}}

{{> page-template page-template--id="modal-tabs-example"}}

{{#* inline "page-template-section"}}
  {{#> page-main-section}}
    {{#> gallery gallery--modifier="pf-m-gutter"}}
      {{#> card card--id=(concat page-template--id '-card-1') card--modifier="pf-m-selectable-raised pf-m-compact"}}
        {{> card-title card-title-text--value="PatternFly"}}
        {{#> card-body}}
          PatternFly is a community project that promotes design commonality and improves user experience.
        {{/card-body}}
      {{/card}}
      {{#> card card--id=(concat page-template--id '-card-2') card--modifier="pf-m-selectable-raised pf-m-compact"}}
        {{> card-title card-title-text--value="ActiveMQ"}}
        {{#> card-body}}
          The ActiveMQ component allows messages to be sent to a JMS Queue or Topic; or messages to be consumed from a JMS Queue or Topic using Apache ActiveMQ.
        {{/card-body}}
      {{/card}}
      {{#> card card--id=(concat page-template--id '-card-3') card--modifier="pf-m-selectable-raised pf-m-compact"}}
        {{> card-title card-title-text--value="Apache Spark"}}
        {{#> card-body}}
          This documentation page covers the Apache Spark component for the Apache Camel.
        {{/card-body}}
      {{/card}}
    {{/gallery}}
  {{/page-main-section}}
{{/inline}}
```

### Nested, unindented tabs
```hbs isFullscreen
{{> page-template page-template--id="gray-tabs-example"}}

{{#* inline "page-template-section"}}
  {{#> tabs-template tabs-template--id=(concat page-template--id "-tabs")}}
    {{#> page-main-tabs page-main-tabs--IsLimitWidth="true"}}
      {{#> tabs tabs--id=(concat tabs-template--id '-tabs') tabs--modifier="pf-m-page-insets"}}
        {{#> tabs-list}}
          {{> __tabs-item
            __tabs-item--id="new"
            __tabs-item--aria-label="What's new"
            __tabs-item--text="What's new"
            __tabs-link--attribute=(concat 'aria-controls="' tabs--id '-new-panel"')}}
          {{> __tabs-item
            __tabs-item--current="true"
            __tabs-item--id="get-started"
            __tabs-item--aria-label="Get started"
            __tabs-item--text="Get started"
            __tabs-link--attribute=(concat 'aria-controls="' tabs--id '-get-started-panel"')}}
          {{> __tabs-item
            __tabs-item--id="knowledge"
            __tabs-item--aria-label="Knowledge"
            __tabs-item--text="Knowledge"
            __tabs-link--attribute=(concat 'aria-controls="' tabs--id '-knowledge-panel"')}}
          {{> __tabs-item
            __tabs-item--id="support"
            __tabs-item--aria-label="Support"
            __tabs-item--text="Support"
            __tabs-link--attribute=(concat 'aria-controls="' tabs--id '-support-panel"')}}
        {{/tabs-list}}
      {{/tabs}}
    {{/page-main-tabs}}
    {{#> page-main-section page-main-section--IsLimitWidth="true" tab-content--id=(concat tabs-template--id '-tabs') page-main-section--modifier="pf-m-light"}}
      {{#> tab-content tab-content--attribute=(concat 'aria-labelledby="' tab-content--id '-new-link" id="' tab-content--id '-new-panel"')}}
        What's new content
      {{/tab-content}}
      {{#> tab-content tab-content--IsActive="true" tab-content--attribute=(concat 'aria-labelledby="' tab-content--id '-get-started-link" id="' tab-content--id '-get-started-panel"')}}
        {{#> grid grid--modifier="pf-m-gutter"}}
          {{#> grid-item}}
            {{#> title title--modifier="pf-m-lg"}}
              Get started with Red Hat Enterprise Linux
            {{/title}}
          {{/grid-item}}
          {{#> grid-item}}
            {{#> tabs tabs--id=(concat tabs-template--id '-subtabs') tabs--IsSecondary="true" tabs--modifier="pf-m-inset-none"}}
              {{#> tabs-list}}
                {{> __tabs-item
                  __tabs-item--current="true"
                  __tabs-item--id="x86"
                  __tabs-item--aria-label="x86 architecture"
                  __tabs-item--text="x86 architecture"
                  __tabs-link--attribute=(concat 'aria-controls="' tabs--id '-x86-panel"')}}
                {{> __tabs-item
                  __tabs-item--id="additional-architectures"
                  __tabs-item--aria-label="Additional Architectures"
                  __tabs-item--text="Additional Architectures"
                  __tabs-link--attribute=(concat 'aria-controls="' tabs--id '-additional-architectures-panel"')}}
              {{/tabs-list}}
            {{/tabs}}
          {{/grid-item}}
          {{#> grid-item}}
            {{#> example-wrapper tab-content--id=(concat tabs-template--id '-subtabs')}}
              {{#> tab-content tab-content--IsActive="true" tab-content--attribute=(concat 'aria-labelledby="' tab-content--id '-x86-link" id="' tab-content--id '-x86-panel"')}}
                {{#> grid grid--modifier="pf-m-gutter"}}
                  {{#> grid-item}}
                    {{#> content}}
                      <p>To perform a standard x86_64 installation using the GUI, you'll need to:</p>
                    {{/content}}
                  {{/grid-item}}
                  {{#> grid grid--modifier="pf-m-all-6-col-on-md pf-m-all-3-col-on-2xl pf-m-gutter" card--modifier="pf-m-flat"}}
                    {{#> card}}
                      {{> card-title card-title-text--value="Check system requirements"}}
                      {{#> card-body}}
                        <p>
                          Your physical or virtual machine should meet the <a href="#">system requirement</a>.
                        </p>
                      {{/card-body}}
                    {{/card}}
                    {{#> card}}
                      {{> card-title card-title-text--value="Download an installation ISO image"}}
                      {{#> card-body}}
                        <p>
                          <a href="#">Download</a>&nbsp;the binary DVD ISO.
                        </p>
                      {{/card-body}}
                    {{/card}}
                    {{#> card}}
                      {{> card-title card-title-text--value="Create a bootable installation media"}}
                      {{#> card-body}}
                        <p>
                          <a href="#">Create</a>&nbsp;a bootable installation media, for example a USB flash drive.
                        </p>
                      {{/card-body}}
                    {{/card}}
                  {{/grid}}
                {{/grid}}
              {{/tab-content}}
              {{#> tab-content tab-content--IsHidden="true" tab-content--attribute=(concat 'aria-labelledby="' tab-content--id '-additional-architectures-link" id="' tab-content--id '-additional-architectures-panel"')}}
                <p>Additional architectural content</p>
              {{/tab-content}}
            {{/example-wrapper}}
          {{/grid-item}}
        {{/grid}}
      {{/tab-content}}
      {{#> tab-content tab-content--attribute=(concat 'aria-labelledby="' tab-content--id '-knowledge-link" id="' tab-content--id '-knowledge-panel"')}}
        {{#> content}}
          <p>Knowledge content</p>
        {{/content}}
      {{/tab-content}}
      {{#> tab-content tab-content--attribute=(concat 'aria-labelledby="' tab-content--id '-support-link" id="' tab-content--id '-support-panel"')}}
        {{#> content}}
          <p>Support content</p>
        {{/content}}
      {{/tab-content}}
    {{/page-main-section}}
  {{/tabs-template}}
{{/inline}}
```
