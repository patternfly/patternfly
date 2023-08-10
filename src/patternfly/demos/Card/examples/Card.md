---
id: Card
section: components
wrapperTag: div
---

import './Card.css'

## Demos
### Horizontal grid collapsed
```hbs
{{#> card card--id="card-demo-horizontal-grid-collapsed-example"}}
  {{#> card-header}}
    {{> card-header-toggle}}
    {{#> card-actions}}
      {{> dropdown dropdown--id=(concat card--id "-dropdown-kebab-right-aligned") dropdown-toggle--IsPlain="true"}}
    {{/card-actions}}
    {{#> card-header-main}}
      {{#> split split--modifier="pf-m-gutter pf-m-wrap"}}
        {{> card-title card-title-text--element="h2" card-title-text--value="Getting started" card-title-text--id=(concat card--id '-title')}}
        {{#> label-group label-group--id="label-group-basic"}}
          {{#> label-group-main}}
            {{#> label-group-list label-group-list--attribute='aria-label="Group of labels"'}}
              {{#> label-group-list-item}}
                {{> label label--IsCompact=true label-text--value="Set up your cluster" label-icon--value="info-circle"}}
              {{/label-group-list-item}}
              {{#> label-group-list-item}}
                {{> label
                    label--color="purple"
                    label--IsCompact=true
                    label-text--value="Guided tours"
                    label-icon--value="info-circle"}}
              {{/label-group-list-item}}
              {{#> label-group-list-item}}
                {{> label
                    label--color="green"
                    label--IsCompact=true
                    label-text--value="Quick starts"
                    label-icon--value="info-circle"}}
              {{/label-group-list-item}}
              {{#> label-group-list-item}}
                {{> label label--IsOverflow=true label--IsCompact=true label-text--value="1 more"}}
              {{/label-group-list-item}}
            {{/label-group-list}}
          {{/label-group-main}}
        {{/label-group}}
      {{/split}}
    {{/card-header-main}}
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
    {{#> card-header-main}}
      {{> card-title card-title-text--value="Getting started" card-title-text--id=(concat card--id '-title')}}
    {{/card-header-main}}
  {{/card-header}}
  {{#> card-expandable-content}}
    {{#> card-body}}
      {{#> grid grid--modifier="pf-m-all-6-col-on-md pf-m-all-3-col-on-lg pf-m-gutter"}}
        {{#> l-flex l-flex--modifier="pf-m-space-items-lg pf-m-column pf-m-align-items-flex-start"}}
          {{#> l-flex l-flex--modifier="pf-m-space-items-sm pf-m-column pf-m-align-items-flex-start pf-m-grow"}}
            {{> label label--color="blue" label-text--value="Set up your cluster" label-icon--value="info-circle"}}
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
          {{#> button button--IsAnchor="true" button--modifier="pf-m-link pf-m-inline" button--url="#"}}
            View all set up cluster steps
            {{#> button-icon button-icon--modifier="pf-m-end"}}
              <i class="fas fa-arrow-right" aria-hidden="true"></i>
            {{/button-icon}}
          {{/button}}
        {{/l-flex}}
        {{#> l-flex l-flex--modifier="pf-m-space-items-lg pf-m-column pf-m-align-items-flex-start"}}
          {{#> l-flex l-flex--modifier="pf-m-space-items-sm pf-m-column pf-m-align-items-flex-start pf-m-grow"}}
            {{> label label--color="purple" label-text--value="Guided tours" label-icon--value="info-circle"}}
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
         {{#> button button--IsAnchor="true" button--modifier="pf-m-link pf-m-inline" button--url="#"}}
            View all guided tours
            {{#> button-icon button-icon--modifier="pf-m-end"}}
              <i class="fas fa-arrow-right" aria-hidden="true"></i>
            {{/button-icon}}
          {{/button}}
        {{/l-flex}}
        {{#> l-flex l-flex--modifier="pf-m-space-items-lg pf-m-column pf-m-align-items-flex-start"}}
          {{#> l-flex l-flex--modifier="pf-m-space-items-sm pf-m-column pf-m-align-items-flex-start pf-m-grow"}}
            {{> label label--color="green" label-text--value="Quick starts" label-icon--value="info-circle"}}
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
          {{#> button button--IsAnchor="true" button--modifier="pf-m-link pf-m-inline" button--url="#"}}
            View all quick starts
            {{#> button-icon button-icon--modifier="pf-m-end"}}
              <i class="fas fa-arrow-right" aria-hidden="true"></i>
            {{/button-icon}}
          {{/button}}
        {{/l-flex}}
        {{#> l-flex l-flex--modifier="pf-m-space-items-lg pf-m-column pf-m-align-items-flex-start"}}
          {{#> l-flex l-flex--modifier="pf-m-space-items-sm pf-m-column pf-m-align-items-flex-start pf-m-grow"}}
            {{> label label--color="orange" label-text--value="Learning resources" label-icon--value="info-circle"}}
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
          {{#> button button--IsAnchor="true" button--modifier="pf-m-link pf-m-inline" button--url="#"}}
            View all learning resources
            {{#> button-icon button-icon--modifier="pf-m-end"}}
              <i class="fas fa-arrow-right" aria-hidden="true"></i>
            {{/button-icon}}
          {{/button}}
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
      {{> card-title card-title-text--value="Headline"}}
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
{{#> gallery gallery--modifier="pf-m-gutter" gallery--attribute='style="--pf-v5-l-gallery--GridTemplateColumns--min: 260px;"'}}
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
            <a href="#">https://api2.devcluster.openshift.com</a>
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

### Aggregate status card
```hbs
{{#> grid grid--modifier="pf-m-gutter"}}
  {{#> grid-item}}
    {{#> gallery gallery--modifier="pf-m-gutter"}}
      {{#> card card--modifier="pf-v5-u-text-align-center"}}
        {{> card-title card-title-text--value="5 Clusters"}}
        {{#> card-body}}
          <i class="fas fa-check-circle pf-v5-u-success-color-100" aria-hidden="true"></i>
        {{/card-body}}
      {{/card}}
      {{#> card card--modifier="pf-v5-u-text-align-center"}}
        {{> card-title card-title-text--value="15 Clusters"}}
        {{#> card-body}}
          <i class="fas fa-exclamation-triangle pf-v5-u-warning-color-100" aria-hidden="true"></i>
        {{/card-body}}
      {{/card}}
      {{#> card card--modifier="pf-v5-u-text-align-center"}}
        {{> card-title card-title-text--value="3 Clusters"}}
        {{#> card-body}}
          <i class="fas fa-times-circle pf-v5-u-danger-color-100" aria-hidden="true"></i>
        {{/card-body}}
      {{/card}}
    {{/gallery}}
  {{/grid-item}}
  {{#> grid-item}}
    {{#> gallery gallery--modifier="pf-m-gutter"}}
      {{#> card card--modifier="pf-v5-u-text-align-center"}}
        {{> card-title card-title-text--value="10 Hosts"}}
        {{#> card-body}}
          {{#> l-flex l-flex--modifier="pf-m-inline-flex pf-m-space-items-md"}}
            {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
              {{#> l-flex-item}}
                <i class="fas fa-exclamation-circle pf-v5-u-success-color-100" aria-hidden="true"></i>
              {{/l-flex-item}}
              {{#> l-flex-item}}
                <a href="#">2</a>
              {{/l-flex-item}}
            {{/l-flex}}
            {{> divider divider--modifier="pf-m-vertical"}}
            {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
              {{#> l-flex-item}}
                <i class="fas fa-exclamation-triangle pf-v5-u-warning-color-100" aria-hidden="true"></i>
              {{/l-flex-item}}
              {{#> l-flex-item}}
                <a href="#">1</a>
              {{/l-flex-item}}
            {{/l-flex}}
          {{/l-flex}}
        {{/card-body}}
      {{/card}}
      {{#> card card--modifier="pf-v5-u-text-align-center"}}
        {{> card-title card-title-text--value="50 Hosts"}}
        {{#> card-body}}
          {{#> l-flex l-flex--modifier="pf-m-inline-flex pf-m-space-items-md"}}
            {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
              {{#> l-flex-item}}
                <i class="fas fa-check-circle pf-v5-u-success-color-100" aria-hidden="true"></i>
              {{/l-flex-item}}
              {{#> l-flex-item}}
                <a href="#">5</a>
              {{/l-flex-item}}
            {{/l-flex}}
            {{> divider divider--modifier="pf-m-vertical"}}
            {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
              {{#> l-flex-item}}
                <i class="fas fa-times-circle pf-v5-u-danger-color-100" aria-hidden="true"></i>
              {{/l-flex-item}}
              {{#> l-flex-item}}
                <a href="#">12</a>
              {{/l-flex-item}}
            {{/l-flex}}
          {{/l-flex}}
        {{/card-body}}
      {{/card}}
      {{#> card card--modifier="pf-v5-u-text-align-center"}}
        {{> card-title card-title-text--value="12 Hosts"}}
        {{#> card-body}}
          {{#> l-flex l-flex--modifier="pf-m-inline-flex pf-m-space-items-md"}}
            {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
              {{#> l-flex-item}}
                <i class="fas fa-exclamation-triangle pf-v5-u-warning-color-100" aria-hidden="true"></i>
              {{/l-flex-item}}
              {{#> l-flex-item}}
                <a href="#">2</a>
              {{/l-flex-item}}
            {{/l-flex}}
            {{> divider divider--modifier="pf-m-vertical"}}
            {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
              {{#> l-flex-item}}
                <i class="fas fa-times-circle pf-v5-u-danger-color-100" aria-hidden="true"></i>
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
    {{#> gallery gallery--modifier="pf-m-gutter" gallery--attribute='style="--pf-v5-l-gallery--GridTemplateColumns--min: 260px;"'}}
      {{#> card}}
        {{> card-title card-title-text--value="13 Hosts" card-title-text--modifier="pf-v5-u-text-align-center"}}
        {{#> card-body}}
          {{#> l-flex l-flex--modifier="pf-m-justify-content-center pf-m-space-items-md"}}
            {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
              {{#> l-flex-item}}
                <i class="fas fa-times-circle pf-v5-u-danger-color-100" aria-hidden="true"></i>
              {{/l-flex-item}}
              {{#> stack}}
                <a href="#">2 errors</a>
                <span>subtitle</span>
              {{/stack}}
            {{/l-flex}}
            {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
              {{#> l-flex-item}}
                <i class="fas fa-exclamation-triangle pf-v5-u-warning-color-100" aria-hidden="true"></i>
              {{/l-flex-item}}
              {{#> stack}}
                <a href="#">1 warnings</a>
                <span>subtitle</span>
              {{/stack}}
            {{/l-flex}}
          {{/l-flex}}
        {{/card-body}}
      {{/card}}
      {{#> card}}
        {{> card-title card-title-text--value="3 Hosts" card-title--modifier="pf-v5-u-text-align-center"}}
        {{#> card-body}}
          {{#> l-flex l-flex--modifier="pf-m-justify-content-center pf-m-space-items-md"}}
            {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
              {{#> l-flex-item}}
                <i class="fas fa-check-circle pf-v5-u-success-color-100" aria-hidden="true"></i>
              {{/l-flex-item}}
              {{#> stack}}
                <a href="#">2 successes</a>
                <span>subtitle</span>
              {{/stack}}
            {{/l-flex}}
            {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
              {{#> l-flex-item}}
                <i class="fas fa-exclamation-triangle pf-v5-u-warning-color-100" aria-hidden="true"></i>
              {{/l-flex-item}}
              {{#> stack}}
                <a href="#">3 warnings</a>
                <span>subtitle</span>
              {{/stack}}
            {{/l-flex}}
          {{/l-flex}}
        {{/card-body}}
      {{/card}}
      {{#> card}}
        {{> card-title card-title-text--value="50 Hosts" card-title--modifier="pf-v5-u-text-align-center"}}
        {{#> card-body}}
          {{#> l-flex l-flex--modifier="pf-m-justify-content-center pf-m-space-items-md"}}
            {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
              {{#> l-flex-item}}
                <i class="fas fa-exclamation-triangle pf-v5-u-warning-color-100" aria-hidden="true"></i>
              {{/l-flex-item}}
              {{#> stack}}
                <a href="#">7 warnings</a>
                <span>subtitle</span>
              {{/stack}}
            {{/l-flex}}
            {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
              {{#> l-flex-item}}
                <i class="fas fa-times-circle pf-v5-u-danger-color-100" aria-hidden="true"></i>
              {{/l-flex-item}}
              {{#> stack}}
                <a href="#">1 error</a>
                <span>subtitle</span>
              {{/stack}}
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
    {{#> card-header-main}}
      {{#> title titleType="h2" title--modifier="pf-m-lg"}}
        Status
      {{/title}}
    {{/card-header-main}}
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
{{> card-demo--status-card card--id="status-card-default-example"}}
```

### Status card expanded notifications
```hbs
{{> card-demo--status-card card--id="status-card-expanded-example" card-demo--notication-drawer--IsOpen="true"}}
```

### Status card expanded with popover
```hbs
{{> card-demo--status-card card--id="status-card-expanded-with-popover-example" card-demo--popover--IsOpen="true" card-demo--notication-drawer--IsOpen="true"}}
```

### Utilization card 1
```hbs
{{#> gallery gallery--modifier="pf-m-gutter" gallery--attribute='style="--pf-v5-l-gallery--GridTemplateColumns--min: 360px;"'}}
  {{#> card card--id="utilization-card-1-example"}}
    {{#> card-title card-title--id=(concat card--id '-title1')}}
      {{#> title title--modifier="pf-m-lg" titleType="h2"}}
        Top Utilized Clusters
      {{/title}}
    {{/card-title}}
    {{#> card-body}}
      {{#> l-flex l-flex--modifier="pf-m-column"}}
        {{#> stack}}
          <b>Cluster-1204</b>
          <span>27.3 cores available</span>
        {{/stack}}
        {{> card-demo--chart}}
        <a href="#">View details</a>
      {{/l-flex}}
    {{/card-body}}
    {{#> card-body}}
      {{#> l-flex l-flex--modifier="pf-m-column"}}
        {{#> stack}}
          <b>Abcdef-1204</b>
          <span>50.6 cores available</span>
        {{/stack}}
        {{> card-demo--chart}}
        <a href="#">View details</a>
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
{{#> gallery gallery--modifier="pf-m-gutter" gallery--attribute='style="--pf-v5-l-gallery--GridTemplateColumns--min: 360px;"'}}
  {{#> card card--id="utilization-card-2-example"}}
    {{#> card-title card-title--id=(concat card--id '-title1')}}
      {{#> title title--modifier="pf-m-lg" titleType="h2"}}
        Top Utilized Clusters
      {{/title}}
    {{/card-title}}
    {{#> card-body}}
      {{#> l-flex l-flex--modifier="pf-m-column"}}
        {{#> stack}}
          <a href="#">Cluster-1204</a>
          <span>27.3 cores available</span>
        {{/stack}}
        {{> card-demo--chart}}
      {{/l-flex}}
    {{/card-body}}
    {{#> card-body}}
      {{#> l-flex l-flex--modifier="pf-m-column"}}
        {{#> stack}}
          <a href="#">Abcdef-1204</a>
          <span>50.6 cores available</span>
        {{/stack}}
        {{> card-demo--chart}}
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
<b>Note:</b> Custom CSS is used in this demo to align the card title and select toggle text to <code>baseline</code> alignment.
<br><br>
{{#> gallery gallery--modifier="pf-m-gutter" gallery--attribute='style="--pf-v5-l-gallery--GridTemplateColumns--min: 360px;"'}}
  {{#> card card--id="utilization-card-3-example"}}
    {{#> card-header card-header--modifier="pf-v5-u-align-items-flex-start"}}
      {{#> card-header-main}}
        {{#> card-title card-title--id=(concat card--id '-title1') card-title--attribute=('style="padding-block-start: 3px;"')}}
          {{#> title title--modifier="pf-m-lg" titleType="h2"}}
            Recommendations
          {{/title}}
        {{/card-title}}
      {{/card-header-main}}
      {{#> card-actions card-actions--modifier="pf-m-no-offset"}}
        {{#> select select--id=(concat card--id '-select-dropdown') select-menu--modifier="pf-m-align-right" select-toggle--modifier="pf-m-plain"}}
          Filter
        {{/select}}
      {{/card-actions}}
    {{/card-header}}
    {{#> card-body}}
      {{#> l-flex l-flex--modifier="pf-m-column"}}
        <span>System</span>
        {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
          <i class="fas fa-exclamation-circle pf-v5-u-danger-color-100" aria-hidden="true"></i>
          <a hfer="#">25 incidents detected</a>
        {{/l-flex}}
        {{> card-demo--chart card-demo--chart--IsStackChart="true"}}
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
{{#> gallery gallery--modifier="pf-m-gutter" gallery--attribute='style="--pf-v5-l-gallery--GridTemplateColumns--min: 360px;"'}}
  {{#> card card--id="utilization-card-4-example"}}
    {{#> card-title card-title--id=(concat card--id '-title1')}}
      {{#> title title--modifier="pf-m-lg" titleType="h2"}}
        CPU Usage
      {{/title}}
    {{/card-title}}
    {{#> card-body}}
      {{> card-demo--chart card-demo--chart--IsThresholdChart="true"}}
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
    {{#> card-header-main}}
      {{#> card-title card-title--id=(concat card--id '-title')}}
        {{#> title title--modifier="pf-m-lg" titleType="h2"}}
          Hardware Monitor
        {{/title}}
      {{/card-title}}
    {{/card-header-main}}
  {{/card-header}}
  {{#> card card--id=(concat card--id '-group-1') card--modifier="pf-m-plain pf-m-expanded"}}
    {{#> card-header card-header--modifier="pf-m-toggle-right"}}
      {{> card-header-toggle}}
      {{#> card-header-main}}
        {{> card-title card-title-text--value="CPU 1" card-title--id=(concat card--id '-title') card-title-text--modifier="pf-v5-u-font-weight-light"}}
      {{/card-header-main}}
    {{/card-header}}
    {{#> card-expandable-content}}
      {{#> card-body}}
        {{> card-demo--stacked-sparklines}}
      {{/card-body}}
    {{/card-expandable-content}}
  {{/card}}
  {{#> card card--id=(concat card--id '-group-2') card--modifier="pf-m-plain"}}
    {{#> card-header card-header--modifier="pf-m-toggle-right"}}
      {{> card-header-toggle}}
      {{#> card-header-main}}
        {{> card-title card-title-text--value="CPU 2" card-title--id=(concat card--id '-title') card-title-text--modifier="pf-v5-u-font-weight-light"}}
      {{/card-header-main}}
    {{/card-header}}
  {{/card}}
  {{#> card card--id=(concat card--id '-group-3') card--modifier="pf-m-plain"}}
    {{#> card-header card-header--modifier="pf-m-toggle-right"}}
      {{> card-header-toggle}}
      {{#> card-header-main}}
        {{> card-title card-title-text--value="CPU 3" card-title--id=(concat card--id '-title"') card-title-text--modifier="pf-v5-u-font-weight-light"}}
      {{/card-header-main}}
    {{/card-header}}
  {{/card}}
{{/card}}
```

### Nested cards with expand toggle
```hbs
{{#> card card--id="nested-cards-example"}}
  {{#> card-header}}
    {{#> card-header-main}}
      {{#> card-title card-title--id=(concat card--id '-title')}}
        {{#> title title--modifier="pf-m-lg" titleType="h2"}}
          Hardware Monitor
        {{/title}}
      {{/card-title}}
    {{/card-header-main}}
  {{/card-header}}
  {{#> card card--id=(concat card--id '-group-1') card--modifier="pf-m-plain pf-m-expanded"}}
    {{#> card-header}}
      {{> card-header-toggle}}
      {{#> card-header-main}}
        {{> card-title card-title-text--value="CPU 1" card-title--id=(concat card--id '-title') card-title-text--modifier="pf-v5-u-font-weight-light"}}
      {{/card-header-main}}
    {{/card-header}}
    {{#> card-expandable-content}}
      {{#> card-body}}
        {{> card-demo--stacked-sparklines}}
      {{/card-body}}
    {{/card-expandable-content}}
  {{/card}}
  {{#> card card--id=(concat card--id '-group-2') card--modifier="pf-m-plain"}}
    {{#> card-header}}
      {{> card-header-toggle}}
      {{#> card-header-main}}
        {{> card-title card-title-text--value="CPU 2" card-title--id=(concat card--id '-title') card-title-text--modifier="pf-v5-u-font-weight-light"}}
      {{/card-header-main}}
    {{/card-header}}
  {{/card}}
  {{#> card card--id=(concat card--id '-group-3') card--modifier="pf-m-plain"}}
    {{#> card-header}}
      {{> card-header-toggle}}
      {{#> card-header-main}}
        {{> card-title card-title-text--value="CPU 3" card-title--id=(concat card--id '-title') card-title-text--modifier="pf-v5-u-font-weight-light"}}
      {{/card-header-main}}
    {{/card-header}}
  {{/card}}
{{/card}}
```

### With accordion
```hbs
{{#> card card--id="with-accordion-example"}}
  {{#> card-header}}
    {{#> card-header-main}}
      {{#> card-title card-title--id=(concat card--id '-title')}}
        {{#> title title--modifier="pf-m-lg" titleType="h2"}}
          Hardware Monitor
        {{/title}}
      {{/card-title}}
    {{/card-header-main}}
  {{/card-header}}
  {{#> card-body}}
    {{#> accordion}}
      {{#> accordion-toggle accordion-toggle--IsExpanded="true" accordion-toggle--attribute='aria-expanded="true"'}}
        {{#> accordion-toggle-text}}
          <span class="pf-v5-u-font-weight-light">
            CPU 1
          </span>
        {{/accordion-toggle-text}}
        {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
      {{/accordion-toggle}}
      {{#> accordion-expandable-content accordion-expandable-content--IsExpanded="true"}}
        {{#> accordion-expandable-content-body}}
          {{> card-demo--stacked-sparklines}}
        {{/accordion-expandable-content-body}}
      {{/accordion-expandable-content}}

      {{#> accordion-toggle accordion-toggle--attribute='aria-expanded="false"'}}
        {{#> accordion-toggle-text}}
          <span class="pf-v5-u-font-weight-light">
            CPU 2
          </span>
        {{/accordion-toggle-text}}
        {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
      {{/accordion-toggle}}
      {{#> accordion-expandable-content}}
        {{> card-demo--stacked-sparklines}}
      {{/accordion-expandable-content}}

      {{#> accordion-toggle accordion-toggle--attribute='aria-expanded="false"'}}
        {{#> accordion-toggle-text}}
          <span class="pf-v5-u-font-weight-light">
            CPU 3
          </span>
        {{/accordion-toggle-text}}
        {{#> accordion-toggle-icon}}{{/accordion-toggle-icon}}
      {{/accordion-toggle}}
      {{#> accordion-expandable-content}}
        {{> card-demo--stacked-sparklines}}
      {{/accordion-expandable-content}}
    {{/accordion}}
  {{/card-body}}
{{/card}}
```

### Trend card 1
```hbs
<b>Note:</b> Custom CSS is used in this demo to align the card title and select toggle text to <code>baseline</code> alignment.
<br><br>
{{#> gallery gallery--modifier="pf-m-gutter" gallery--attribute='style="--pf-v5-l-gallery--GridTemplateColumns--min: 360px;"'}}
  {{#> card card--id="trend-card-1-example"}}
    {{#> card-header}}
      {{#> card-header-main}}
        {{#> card-title card-title--id=(concat card--id '-title')}}
          {{#> title title--modifier="pf-m-2xl"}}
            1,050,765 IOPS
          {{/title}}
        {{/card-title}}
        <span class="pf-v5-u-color-200">
          Workload
        </span>
      {{/card-header-main}}
      {{#> card-actions card-actions--modifier="pf-m-no-offset" card-actions--attribute='style="padding-block-start: 1px;"'}}
        {{#> select select--id=(concat card--id '-select-dropdown') select-menu--modifier="pf-m-align-right" select-toggle--modifier="pf-m-plain"}}
          Filter
        {{/select}}
      {{/card-actions}}
    {{/card-header}}
    {{#> card-body}}
      {{> card-demo--chart card-demo--chart--IsChart2="true"}}
    {{/card-body}}
  {{/card}}
{{/gallery}}
```

### Trend card 2
```hbs
{{#> gallery gallery--modifier="pf-m-gutter" gallery--attribute='style="--pf-v5-l-gallery--GridTemplateColumns--min: 360px;"'}}
  {{#> card card--id="trend-card-2-example"}}
    {{#> card-header}}
      {{#> card-header-main}}
        {{#> l-flex l-flex--modifier="pf-m-align-items-center"}}
          {{#> l-flex-item l-flex-item--modifier="pf-m-flex-none"}}
            {{#> l-flex l-flex--modifier="pf-m-column pf-m-space-items-none"}}
              {{#> card-title card-title--id=(concat card--id '-title')}}
                {{#> title title--modifier="pf-m-2xl"}}
                  842 TB
                {{/title}}
              {{/card-title}}
              <span class="pf-v5-u-color-200">
                Storage capacity
              </span>
            {{/l-flex}}
          {{/l-flex-item}}
          {{#> l-flex-item l-flex-item--modifier="pf-m-flex-1"}}
            {{> card-demo--chart}}
          {{/l-flex-item}}
        {{/l-flex}}
      {{/card-header-main}}
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
<b>Note:</b> Custom CSS is used in this demo to align the card title and select toggle text to <code>baseline</code> alignment.
<br><br>
{{#> gallery gallery--modifier="pf-m-gutter" gallery--attribute='style="--pf-v5-l-gallery--GridTemplateColumns--min: 360px;"'}}
  {{#> card card--id="card-log-view-example"}}
    {{#> card-header card-header--modifier="pf-v5-u-align-items-flex-start"}}
      {{#> card-actions card-actions--modifier="pf-m-no-offset"}}
        {{#> select select--id=(concat card--id '-select-dropdown') select-menu--modifier="pf-m-align-right" select-toggle--modifier="pf-m-plain"}}
          Most recent
        {{/select}}
      {{/card-actions}}
      {{#> card-header-main}}
        {{#> card-title card-title--id=(concat card--id '-title1') card-title--attribute=(concat 'style="padding-block-start: 3px;"')}}
          {{#> title title--modifier="pf-m-lg" titleType="h2"}}
            Activity
          {{/title}}
        {{/card-title}}
      {{/card-header-main}}
    {{/card-header}}
    {{#> card-body}}
      {{#> description-list}}
        {{#> description-list-group}}
          {{#> description-list-term}}
            Readiness probe failed
          {{/description-list-term}}
          {{#> description-list-description}}
            Readiness probe failed: Get https://10.131.0.7:5000/healthz: dial tcp 10.131.0.7:5000: connect: connection refused
          {{/description-list-description}}
          {{#> description-list-description}}
            <time class="pf-v5-u-color-200 pf-v5-u-font-size-sm">Jun 17, 11:02 am</time>
          {{/description-list-description}}
        {{/description-list-group}}
        {{#> description-list-group}}
          {{#> description-list-term}}
            Successful assignment
          {{/description-list-term}}
          {{#> description-list-description}}
            Successfully assigned default/example to ip-10-0-130-149.ec2.internal
          {{/description-list-description}}
          {{#> description-list-description}}
            <time class="pf-v5-u-color-200 pf-v5-u-font-size-sm">Jun 17, 11:13 am</time>
          {{/description-list-description}}
        {{/description-list-group}}
        {{#> description-list-group}}
          {{#> description-list-term}}
            Pulling image
          {{/description-list-term}}
          {{#> description-list-description}}
            Pulling image "openshift/hello-openshift"
          {{/description-list-description}}
          {{#> description-list-description}}
            <time class="pf-v5-u-color-200 pf-v5-u-font-size-sm">Jun 17, 10:59 am</time>
          {{/description-list-description}}
        {{/description-list-group}}
        {{#> description-list-group}}
          {{#> description-list-term}}
            Created container
          {{/description-list-term}}
          {{#> description-list-description}}
            Created container hello-openshift
          {{/description-list-description}}
          {{#> description-list-description}}
            <time class="pf-v5-u-color-200 pf-v5-u-font-size-sm">Jun 17, 10:45 am</time>
          {{/description-list-description}}
        {{/description-list-group}}
      {{/description-list}}
    {{/card-body}}
    {{> divider}}
    {{#> card-footer}}
      <a href="#">View all activity</a>
    {{/card-footer}}
  {{/card}}
{{/gallery}}
```

### Events view
```hbs
<b>Note:</b> Custom CSS is used in this demo to align the card title and select toggle text to <code>baseline</code> alignment.
<br><br>
{{#> gallery gallery--modifier="pf-m-gutter" gallery--attribute='style="--pf-v5-l-gallery--GridTemplateColumns--min: 360px;"'}}
  {{#> card card--id="card-events-view-example"}}
    {{#> card-header card-header--modifier="pf-v5-u-align-items-flex-start"}}
      {{#> card-actions card-actions--modifier="pf-m-no-offset"}}
        {{#> select select--id=(concat card--id '-select-dropdown') select-menu--modifier="pf-m-align-right" select-toggle--modifier="pf-m-plain"}}
          Status
        {{/select}}
      {{/card-actions}}
      {{#> card-header-main}}
        {{#> card-title card-title--id=(concat card--id '-title1') card-title--attribute=(concat 'style="padding-block-start: 3px;"')}}
          {{#> title title--modifier="pf-m-lg" titleType="h2"}}
            Events
          {{/title}}
        {{/card-title}}
      {{/card-header-main}}
    {{/card-header}}
    {{#> card-body}}
      {{#> description-list}}
        {{#> description-list-group}}
          {{#> description-list-term}}
            {{#> l-flex l-flex--modifier="pf-m-nowrap pf-m-space-items-sm"}}
              {{#> l-flex-item}}
                <i class="fas fa-exclamation-circle pf-v5-u-danger-color-100" aria-hidden="true"></i>
              {{/l-flex-item}}
              {{#> l-flex-item}}
                Readiness probe failed
              {{/l-flex-item}}
            {{/l-flex}}
          {{/description-list-term}}
          {{#> description-list-description}}
            Readiness probe failed: Get https://10.131.0.7:5000/healthz: dial tcp 10.131.0.7:5000: connect: connection refused
          {{/description-list-description}}
          {{#> description-list-description}}
            <time class="pf-v5-u-color-200 pf-v5-u-font-size-sm">Jun 17, 11:02 am</time>
          {{/description-list-description}}
        {{/description-list-group}}
        {{#> description-list-group}}
          {{#> description-list-term}}
            {{#> l-flex l-flex--modifier="pf-m-nowrap pf-m-space-items-sm"}}
              {{#> l-flex-item}}
                <i class="fas fa-check-circle pf-v5-u-success-color-100" aria-hidden="true"></i>
              {{/l-flex-item}}
              {{#> l-flex-item}}
                Successful assignment
              {{/l-flex-item}}
            {{/l-flex}}
          {{/description-list-term}}
          {{#> description-list-description}}
            Successfully assigned default/example to ip-10-0-130-149.ec2.internal
          {{/description-list-description}}
          {{#> description-list-description}}
            <time class="pf-v5-u-color-200 pf-v5-u-font-size-sm">Jun 17, 11:13 am</time>
          {{/description-list-description}}
        {{/description-list-group}}
        {{#> description-list-group}}
          {{#> description-list-term}}
            {{#> l-flex l-flex--modifier="pf-m-nowrap pf-m-space-items-sm"}}
              {{#> l-flex-item}}
                {{#> spinner spinner--modifier="pf-m-md" spinner--attribute='aria-label="Loading"'}}Loading...{{/spinner}}
              {{/l-flex-item}}
              {{#> l-flex-item}}
                Pulling image
              {{/l-flex-item}}
            {{/l-flex}}
          {{/description-list-term}}
          {{#> description-list-description}}
            Pulling image "openshift/hello-openshift"
          {{/description-list-description}}
          {{#> description-list-description}}
            <time class="pf-v5-u-color-200 pf-v5-u-font-size-sm">Jun 17, 10:59 am</time>
          {{/description-list-description}}
        {{/description-list-group}}
        {{#> description-list-group}}
          {{#> description-list-term}}
            {{#> l-flex l-flex--modifier="pf-m-nowrap pf-m-space-items-sm"}}
              {{#> l-flex-item}}
                <i class="fas fa-check-circle pf-v5-u-success-color-100" aria-hidden="true"></i>
              {{/l-flex-item}}
              {{#> l-flex-item}}
                Created container
              {{/l-flex-item}}
            {{/l-flex}}
          {{/description-list-term}}
          {{#> description-list-description}}
            Created container hello-openshift
          {{/description-list-description}}
          {{#> description-list-description}}
            <time class="pf-v5-u-color-200 pf-v5-u-font-size-sm">Jun 17, 10:45 am</time>
          {{/description-list-description}}
        {{/description-list-group}}
      {{/description-list}}
    {{/card-body}}
    {{> divider}}
    {{#> card-footer}}
      <a href="#">View all events</a>
    {{/card-footer}}
  {{/card}}
{{/gallery}}
```
