---
id: 'Code block'
section: components
cssPrefix: pf-v6-c-code-block
---

## Examples
### Basic
```hbs
{{#> code-block}}
  {{#> code-block-header}}
    {{#> code-block-actions}}
      {{#> code-block-actions-item}}
        {{> button button--IsPlain=true button--attribute='aria-label="Copy to clipboard basic example code content"' button--IsIcon=true button--icon="copy"}}
      {{/code-block-actions-item}}
      {{#> code-block-actions-item}}
        {{> button button--IsPlain=true button--attribute='aria-label="Run basic example code in Web Terminal"' button--IsIcon=true button--icon="play"}}
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
        {{> button button--IsPlain=true button--attribute='aria-label="Copy to clipboard expandable example code content"' button--IsIcon=true button--icon="copy"}}
      {{/code-block-actions-item}}
      {{#> code-block-actions-item}}
        {{> button button--IsPlain=true button--attribute='aria-label="Run expandable example code in Web Terminal"' button--IsIcon=true button--icon="play"}}
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
        {{> button button--IsPlain=true button--attribute='aria-label="Copy to clipboard expandable expanded example code content"' button--IsIcon=true button--icon="copy"}}
      {{/code-block-actions-item}}
      {{#> code-block-actions-item}}
        {{> button button--IsPlain=true button--attribute='aria-label="Run expandable expanded example code in Web Terminal"' button--IsIcon=true button--icon="play"}}
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
| `.pf-v6-c-code-block` | `<div>` | Initiates the code block component. **Required** |
| `.pf-v6-c-code-block__header` | `<div>` | Initiates the code block header. |
| `.pf-v6-c-code-block__actions` | `<div>` | Initiates the code block actions. |
| `.pf-v6-c-code-block__actions-item` | `<div>` | Initiates a code block action item. |
| `.pf-v6-c-code-block__content` | `<div>` | Initiates the code block content. **Required** |
| `.pf-v6-c-code-block__pre` | `<pre>` | Initiates the code block `<pre>` element. **Required** |
| `.pf-v6-c-code-block__code` | `<code>` | Initiates the code block `<code>` element. **Required** |
