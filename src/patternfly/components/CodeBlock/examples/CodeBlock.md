---
id: 'Code block'
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
    {{#> code-block-pre~}}{{~#> code-block-code~}}apiVersion: helm.openshift.io/v1beta1/
kind: HelmChartRepository
metadata:
name: azure-sample-repo
spec:
connectionConfig:
url: https://raw.githubusercontent.com/Azure-Samples/helm-charts/master/docs{{~/code-block-code~}}{{~/code-block-pre}}
  {{/code-block-content}}
{{/code-block}}
```

### Expandable
```hbs
{{#> code-block expandable-section--id="code-block-expandable" expandable-section--IsDetached="true"}}
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
    {{#> code-block-pre~}}
      {{~#> code-block-code~}}
apiVersion: helm.openshift.io/v1beta1/
kind: HelmChartRepository
metadata:
name: azure-sample-repo
{{~#> code-block-expandable-content~}}
    {{~#> expandable-section~}}
      {{~#> expandable-section-content~}}
spec:
connectionConfig:
url: https://raw.githubusercontent.com/Azure-Samples/helm-charts/master/docs
      {{~/expandable-section-content~}}
    {{~/expandable-section~}}
{{~/code-block-expandable-content~}}
      {{~/code-block-code~}}
    {{~/code-block-pre}}
    {{#> code-block-expandable-toggle}}
      {{#> expandable-section expandable-section-toggle-icon--modifier="pf-m-expand-top"}}
        {{#> expandable-section-toggle}}
        {{/expandable-section-toggle}}
      {{/expandable-section}}
    {{/code-block-expandable-toggle}}
  {{/code-block-content}}
{{/code-block}}
```

### Expandable expanded
```hbs
{{#> code-block expandable-section--id="code-block-expandable-expanded" expandable-section--IsDetached="true" expandable-section--IsExpanded="true"}}
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
    {{#> code-block-pre~}}
      {{~#> code-block-code~}}
apiVersion: helm.openshift.io/v1beta1/
kind: HelmChartRepository
metadata:
name: azure-sample-repo
{{~#> code-block-expandable-content~}}
    {{~#> expandable-section~}}
      {{~#> expandable-section-content~}}
spec:
connectionConfig:
url: https://raw.githubusercontent.com/Azure-Samples/helm-charts/master/docs
      {{~/expandable-section-content~}}
    {{~/expandable-section~}}
{{~/code-block-expandable-content~}}
      {{~/code-block-code~}}
    {{~/code-block-pre}}
    {{#> code-block-expandable-toggle}}
      {{#> expandable-section expandable-section-toggle-icon--modifier="pf-m-expand-top"}}
        {{#> expandable-section-toggle}}
        {{/expandable-section-toggle}}
      {{/expandable-section}}
    {{/code-block-expandable-toggle}}
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
