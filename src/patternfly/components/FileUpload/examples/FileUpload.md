---
title: File upload
section: experimental
cssPrefix: pf-c-file-upload
---

## Examples
```hbs title=Basic-file-upload
{{#> file-upload}}
  {{#> file-upload-control}}
    {{#> file-upload-label}}
      Drag a file here or browse to upload
    {{/file-upload-label}}
    {{#> button button--modifier="pf-m-control"}}
      Browse...
    {{/button}}
    {{#> button button--modifier="pf-m-control" button--attribute="disabled"}}
      Clear
    {{/button}}
  {{/file-upload-control}}
  {{#> file-upload-text-area}}
  {{/file-upload-text-area}}
{{/file-upload}}
```

```hbs title=Browse-to-upload-file
{{#> file-upload}}
  {{#> file-upload-control}}
    {{#> file-upload-label}}
      Drag a file here or browse to upload
    {{/file-upload-label}}
    {{#> button button--modifier="pf-m-control pf-m-expanded"}}
      Browse...
    {{/button}}
    {{#> button button--modifier="pf-m-control" button--attribute="disabled"}}
      Clear
    {{/button}}
  {{/file-upload-control}}
  {{#> file-upload-text-area}}
  {{/file-upload-text-area}}
{{/file-upload}}
```

```hbs title=Browsed-file-upload-complete
{{#> file-upload}}
  {{#> file-upload-control}}
    {{#> file-upload-label file-upload-label--modifier="pf-m-disabled" file-upload-label--attribute="disabled"}}
      Read only title
    {{/file-upload-label}}
    {{#> button button--modifier="pf-m-control"}}
      Browse...
    {{/button}}
    {{#> button button--modifier="pf-m-control"}}
      Clear
    {{/button}}
  {{/file-upload-control}}
  {{#> file-upload-text-area file-upload-text-area--attribute="disabled"}}
    Ssh-Rsa AAh3zJFkzjjakCJialksjfB3zJFkzzAAhhMskjjakCJialksjfB3z89z3zJFkz3 +kzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fc
  {{/file-upload-text-area}}
{{/file-upload}}
```

```hbs title=Drag-or-drop-file
{{#> file-upload file-upload--modifier="pf-m-draganddrop"}}
  {{#> file-upload-control}}
    {{#> file-upload-label}}
      Drag a file here or browse to upload
    {{/file-upload-label}}
    {{#> button button--modifier="pf-m-control"}}
      Browse...
    {{/button}}
    {{#> button button--modifier="pf-m-control" button--attribute="disabled"}}
      Clear
    {{/button}}
  {{/file-upload-control}}
  {{#> file-upload-text-area}}
  {{/file-upload-text-area}}
{{/file-upload}}
```

```hbs title=File-has-been-dragged/dropped
{{#> file-upload}}
  {{#> file-upload-control}}
    {{#> file-upload-label file-upload-label--modifier="pf-m-disabled" file-upload-label--attribute="disabled"}}
      Sample.txt
    {{/file-upload-label}}
    {{#> button button--modifier="pf-m-control"}}
      Browse...
    {{/button}}
    {{#> button button--modifier="pf-m-control"}}
      Clear
    {{/button}}
  {{/file-upload-control}}
  {{#> file-upload-text-area}}
  {{/file-upload-text-area}}
{{/file-upload}}
```

## Documentation
### Overview


| Attribute | Applied to | Outcome |
| -- | -- | -- |


### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |

