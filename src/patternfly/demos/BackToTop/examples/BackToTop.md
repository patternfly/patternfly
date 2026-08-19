---
id: 'Back to top'
section: components
---

## Examples
### Basic
```hbs isFullscreen
{{> page-template page-template--id="back-to-top-basic-example"}}

{{#* inline "page-template-section"}}
  {{> page-template-gallery page-template-gallery--IsLongGallery="true"}}
  {{> back-to-top back-to-top--target=(concat "main-content-" page-template--id)}}
{{/inline}}
```
