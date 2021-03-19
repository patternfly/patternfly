---
id: 'Code block'
beta: true
section: components
cssPrefix: pf-c-code-block
---

## Examples
### Basic
```hbs
{{#> code-block}}
  {{#> code-block-header}}
    {{#> code-block-actions}}
      {{#> code-block-actions-item}}
        {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Copy to clipboard"'}}
          <i class="fas fa-copy" aria-hidden="true"></i>
        {{/button}}
      {{/code-block-actions-item}}
      {{#> code-block-actions-item}}
        {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Run in Web Terminal"'}}
          <i class="fas fa-play" aria-hidden="true"></i>
        {{/button}}
      {{/code-block-actions-item}}
    {{/code-block-actions}}
  {{/code-block-header}}
  {{#> code-block-content}}
    {{#> code-block-pre}}
      {{#> code-block-code}}
apiVersion: helm.openshift.io/v1beta1/<br>
{{~#> foo}}{{/foo}}kind: HelmChartRepository<br>
{{~#> foo}}{{/foo}}metadata:<br>
{{~#> foo}}{{/foo}}name: azure-sample-repo<br>
{{~#> foo}}{{/foo}}spec:<br>
{{~#> foo}}{{/foo}}connectionConfig:<br>
{{~#> foo}}{{/foo}}url: https://raw.githubusercontent.com/Azure-Samples/helm-charts/master/docs
      {{/code-block-code}}
    {{/code-block-pre}}
  {{/code-block-content}}
{{/code-block}}
```

## Documentation
### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-code-block` | `<div>` | Initiates the code block component. **Required** |
| `.pf-c-chip-group__header` | `<div>` | Initiates the code block header. |
| `.pf-c-chip-group__actions` | `<div>` | Initiates the code block actions. |
| `.pf-c-chip-group__actions-item` | `<div>` | Initiates a code block action item. |
| `.pf-c-chip-group__content` | `<div>` | Initiates the code block content. **Required** |
| `.pf-c-chip-group__pre` | `<pre>` | Initiates the code block `<pre>` element. **Required** |
| `.pf-c-chip-group__code` | `<code>` | Initiates the code block `<code>` element. **Required** |
