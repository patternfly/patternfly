---
id: 'Back to top'
section: components
cssPrefix: pf-d-back-to-top
---

## Examples
### Basic
```hbs isFullscreen
{{> page-template page-template--id="back-to-top-basic-example"}}

{{#* inline "page-template-main-content"}}
  {{> page-template-breadcrumb}}
  {{> page-template-title}}
  {{> page-template-gallery page-template-gallery--IsLongGallery="true"}}
  {{> back-to-top back-to-top--target=(concat "main-content-" page-template--id)}}
{{/inline}}
```
