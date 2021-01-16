---
id: Jump links
beta: true
section: components
---

## Examples
### Basic
```hbs isFullscreen
{{#> page-demo-default}}
  {{#> page-main-section page-main-section--modifier="pf-m-no-padding"}}
    {{#> sidebar}}
      {{#> sidebar-panel sidebar-panel--modifier="pf-m-sticky pf-m-gutter"}}
        {{#> page-main-section newcontext}}
          {{#> jump-links jump-links--modifier="pf-m-vertical" jump-links--attribute='aria-label="Local"'}}
            {{#> jump-links-list}}
              {{#> jump-links-item}}
                {{#> jump-links-link}}
                  {{#> jump-links-link-text}}
                    Inactive section
                  {{/jump-links-link-text}}
                {{/jump-links-link}}
              {{/jump-links-item}}
              {{#> jump-links-item jump-links-item--modifier="pf-m-current"}}
                {{#> jump-links-link}}
                  {{#> jump-links-link-text}}
                    Active section
                  {{/jump-links-link-text}}
                {{/jump-links-link}}
              {{/jump-links-item}}
              {{#> jump-links-item}}
                {{#> jump-links-link}}
                  {{#> jump-links-link-text}}
                    Inactive section
                  {{/jump-links-link-text}}
                {{/jump-links-link}}
              {{/jump-links-item}}
              {{#> jump-links-item}}
                {{#> jump-links-link}}
                  {{#> jump-links-link-text}}
                    Inactive section
                  {{/jump-links-link-text}}
                {{/jump-links-link}}
              {{/jump-links-item}}
              {{#> jump-links-item}}
                {{#> jump-links-link}}
                  {{#> jump-links-link-text}}
                    Inactive section
                  {{/jump-links-link-text}}
                {{/jump-links-link}}
              {{/jump-links-item}}
            {{/jump-links-list}}
          {{/jump-links}}
        {{/page-main-section}}
      {{/sidebar-panel}}
      {{#> sidebar-content}}
        {{#> page-main-section newcontext}}
          {{#> content}}
            <h2>Some page section</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed dui ullamcorper, dignissim purus eu, mattis leo. Curabitur eleifend turpis ipsum, aliquam pretium risus efficitur vel. Etiam eget enim vitae quam facilisis pharetra at eget diam. Suspendisse ut vulputate magna. Nunc viverra posuere orci sit amet pulvinar. Quisque dui justo, egestas ac accumsan suscipit, tristique eu risus. In aliquet libero ante, ac pulvinar lectus pretium in. Ut enim tellus, vulputate et lorem et, hendrerit rutrum diam. Cras pharetra dapibus elit vitae ullamcorper. Nulla facilisis euismod diam, at sodales sem laoreet hendrerit. Curabitur porttitor ex nulla. Proin ligula leo, egestas ac nibh a, pellentesque mollis augue. Donec nec augue vehicula eros pulvinar vehicula eget rutrum neque. Duis sit amet interdum lorem. Vivamus porttitor nec quam a accumsan. Nam pretium vitae leo vitae rhoncus.</p>

            <h2>Some page section</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed dui ullamcorper, dignissim purus eu, mattis leo. Curabitur eleifend turpis ipsum, aliquam pretium risus efficitur vel. Etiam eget enim vitae quam facilisis pharetra at eget diam. Suspendisse ut vulputate magna. Nunc viverra posuere orci sit amet pulvinar. Quisque dui justo, egestas ac accumsan suscipit, tristique eu risus. In aliquet libero ante, ac pulvinar lectus pretium in. Ut enim tellus, vulputate et lorem et, hendrerit rutrum diam. Cras pharetra dapibus elit vitae ullamcorper. Nulla facilisis euismod diam, at sodales sem laoreet hendrerit. Curabitur porttitor ex nulla. Proin ligula leo, egestas ac nibh a, pellentesque mollis augue. Donec nec augue vehicula eros pulvinar vehicula eget rutrum neque. Duis sit amet interdum lorem. Vivamus porttitor nec quam a accumsan. Nam pretium vitae leo vitae rhoncus.</p>

            <h2>Some page section</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed dui ullamcorper, dignissim purus eu, mattis leo. Curabitur eleifend turpis ipsum, aliquam pretium risus efficitur vel. Etiam eget enim vitae quam facilisis pharetra at eget diam. Suspendisse ut vulputate magna. Nunc viverra posuere orci sit amet pulvinar. Quisque dui justo, egestas ac accumsan suscipit, tristique eu risus. In aliquet libero ante, ac pulvinar lectus pretium in. Ut enim tellus, vulputate et lorem et, hendrerit rutrum diam. Cras pharetra dapibus elit vitae ullamcorper. Nulla facilisis euismod diam, at sodales sem laoreet hendrerit. Curabitur porttitor ex nulla. Proin ligula leo, egestas ac nibh a, pellentesque mollis augue. Donec nec augue vehicula eros pulvinar vehicula eget rutrum neque. Duis sit amet interdum lorem. Vivamus porttitor nec quam a accumsan. Nam pretium vitae leo vitae rhoncus.</p>

            <h2>Some page section</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed dui ullamcorper, dignissim purus eu, mattis leo. Curabitur eleifend turpis ipsum, aliquam pretium risus efficitur vel. Etiam eget enim vitae quam facilisis pharetra at eget diam. Suspendisse ut vulputate magna. Nunc viverra posuere orci sit amet pulvinar. Quisque dui justo, egestas ac accumsan suscipit, tristique eu risus. In aliquet libero ante, ac pulvinar lectus pretium in. Ut enim tellus, vulputate et lorem et, hendrerit rutrum diam. Cras pharetra dapibus elit vitae ullamcorper. Nulla facilisis euismod diam, at sodales sem laoreet hendrerit. Curabitur porttitor ex nulla. Proin ligula leo, egestas ac nibh a, pellentesque mollis augue. Donec nec augue vehicula eros pulvinar vehicula eget rutrum neque. Duis sit amet interdum lorem. Vivamus porttitor nec quam a accumsan. Nam pretium vitae leo vitae rhoncus.</p>
          {{/content}}
        {{/page-main-section}}
      {{/sidebar-content}}
    {{/sidebar}}
  {{/page-main-section}}
{{/page-demo-default}}
```
