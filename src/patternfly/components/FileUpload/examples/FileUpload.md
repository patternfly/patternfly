---
title: File upload
section: experimental
cssPrefix: pf-c-file-upload
---

## Examples
```hbs title=Basic-file-upload
{{#> file-upload file-upload--type="form"}}
  {{#> input-group}}
    {{#> form-control controlType="input" input="true" form-control--attribute='id="basic-file-upload" name="basic-file-upload" placeholder="Drag a file here or browse to upload" aria-label="upload a file"'}}
    {{/form-control}}
    {{#> button button--modifier="pf-m-control"}}
      Browse...
    {{/button}}
    {{#> button button--modifier="pf-m-control" button--attribute="disabled"}}
      Clear
    {{/button}}
  {{/input-group}}
  {{#> file-upload-text-area file-upload-text-area--attribute='aria-label="text-area-empty"'}}
  {{/file-upload-text-area}}
{{/file-upload}}
```

```hbs title=Browse-to-upload-file
{{#> file-upload file-upload--type="form"}}
  {{#> input-group}}
    {{#> form-control controlType="input" input="true" form-control--attribute='id="basic-file-upload-browse" name="basic-file-upload-browse" placeholder="Drag a file here or browse to upload" aria-label="select browse button to upload file"'}}
    {{/form-control}}
    {{#> button button--modifier="pf-m-control pf-m-expanded"}}
      Browse...
    {{/button}}
    {{#> button button--modifier="pf-m-control" button--attribute="disabled"}}
      Clear
    {{/button}}
  {{/input-group}}
  {{#> file-upload-text-area file-upload-text-area--attribute='aria-label="text-area-empty"'}}
  {{/file-upload-text-area}}
{{/file-upload}}
```

```hbs title=Browsed-file-upload-complete
{{#> file-upload file-upload--type="form"}}
  {{#> input-group}}
    {{#> form-control controlType="input" input="true" form-control--attribute='id="file-upload-browse-complete" name="file-upload-browse-complete" value="Read only title" aria-label="read only" readonly'}}
    {{/form-control}}
    {{#> button button--modifier="pf-m-control"}}
      Browse...
    {{/button}}
    {{#> button button--modifier="pf-m-control"}}
      Clear
    {{/button}}
  {{/input-group}}
  {{#> file-upload-text-area file-upload-text-area--attribute='aria-label="text-area-empty" disabled'}}
    Ssh-Rsa AAh3zJFkzjjakCJialksjfB3zJFkzzAAhhMskjjakCJialksjfB3z89z3zJFkz3 +kzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fc
  {{/file-upload-text-area}}
{{/file-upload}}

```

```hbs title=Drag-or-drop-file
{{#> file-upload file-upload--type="form" file-upload--modifier="pf-m-draganddrop"}}
  {{#> input-group}}
    {{#> form-control controlType="input" input="true" form-control--attribute='id="drag-or-drop-file" name="drag-or-drop-file" placeholder="Drag a file here or browse to upload" aria-label="drag or drop a file"'}}
    {{/form-control}}
    {{#> button button--modifier="pf-m-control"}}
      Browse...
    {{/button}}
    {{#> button button--modifier="pf-m-control" button--attribute="disabled"}}
      Clear
    {{/button}}
  {{/input-group}}
  {{#> file-upload-text-area file-upload-text-area--attribute='aria-label="text-area-empty"'}}
  {{/file-upload-text-area}}
{{/file-upload}}
```

```hbs title=File-has-been-dragged/dropped
{{#> file-upload file-upload--type="form"}}
  {{#> input-group}}
    {{#> form-control controlType="input" input="true" form-control--attribute='id="file-drag-drop-complete" name="file-drag-drop-complete" value="Sample.txt" aria-label="filename" readonly'}}
    {{/form-control}}
    {{#> button button--modifier="pf-m-control"}}
      Browse...
    {{/button}}
    {{#> button button--modifier="pf-m-control"}}
      Clear
    {{/button}}
  {{/input-group}}
  {{#> file-upload-text-area file-upload-text-area--attribute='aria-label="text-area-empty"'}}
    Ssh-Rsa AAh3zJFkzjjakCJialksjfB3zJFkzzAAhhMskjjakCJialksjfB3z89z3zJFkz3 +kzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fc
  {{/file-upload-text-area}}
{{/file-upload}}
```

```hbs title=File-upload-error
{{#> file-upload file-upload--type="form"}}
  {{#> input-group}}
    {{#> form-control controlType="input" input="true" form-control--attribute='id="file-upload-error" name="file-upload-error" value="Sample.png" aria-label="file upload error" aria-invalid="true" required'}}
    {{/form-control}}
    {{#> button button--modifier="pf-m-control"}}
      Browse...
    {{/button}}
    {{#> button button--modifier="pf-m-control"}}
      Clear
    {{/button}}
  {{/input-group}}
  {{#> file-upload-text-area file-upload-text-area--attribute='aria-label="text-area-empty"'}}
  {{/file-upload-text-area}}
  {{#> form-helper-text form-helper-text--modifier="pf-m-error" form-helper-text--attribute='id="file-upload-error-helper-text" aria-live="polite"'}}
    We don't support this file type. Try again with a different file type.
  {{/form-helper-text}}
{{/file-upload}}
```

```hbs title=File-upload-loading
{{#> file-upload file-upload--type="form"}}
  {{#> input-group}}
    {{#> form-control controlType="input" input="true" form-control--attribute='id="file-upload-loading" name="file-upload-loading" value="Sample.png" aria-label="file upload loading"'}}
    {{/form-control}}
    {{#> button button--modifier="pf-m-control"}}
      Browse...
    {{/button}}
    {{#> button button--modifier="pf-m-control"}}
      Clear
    {{/button}}
  {{/input-group}}
  {{#> file-upload-text-area file-upload-text-area--type="div" file-upload-text-area--modifier="pf-m-loading" file-upload-text-area--attribute='aria-label="text-area-empty"'}}
    {{#> spinner spinner--modifier="pf-m-lg"}}Loading...{{/spinner}}
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
| `.pf-c-file-upload` | `<form>`, `<div>` | Initiates the file upload component. **Required**. |
| `.pf-c-file-upload__text-area` | `<textarea>`, `<div>` | Initiates the text area element. **Required** |
| `.pf-m-draganddrop` | `.pf-c-file-upload` | Modifies file upload for when an element is dragged or dropped inside of its container. |
| `.pf-m-loading` | `.pf-c-file-upload__text-area` | Modifies text area for the loading state. |
