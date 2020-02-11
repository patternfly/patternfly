---
title: File upload
section: beta
cssPrefix: pf-c-file-upload
---

## Examples

```hbs title=Basic-file-upload
{{#> file-upload file-upload--id="basic-file-upload"}}
  {{#> file-upload-input-group}}
    {{#> input-group}}
      {{> file-upload-text-input
        file-upload-text-input--aria-label="Upload a file"
        file-upload-text-input--attribute='placeholder="Drag a file here or browse to upload"'
        }}
      {{#> button button--modifier="pf-m-control"}}
        Browse...
      {{/button}}
      {{#> button button--modifier="pf-m-control" button--attribute="disabled"}}
        Clear
      {{/button}}
    {{/input-group}}
  {{/file-upload-input-group}}
  {{#> file-upload-textarea file-upload-textarea--aria-label="Text area empty"}}
  {{/file-upload-textarea}}
{{/file-upload}}
```

```hbs title=Upload-complete-non-editable
{{#> file-upload file-upload--id="browsed-file-upload-complete"}}
  {{#> file-upload-input-group}}
    {{#> input-group}}
      {{> file-upload-text-input
        file-upload-text-input--aria-label="Read only"
        file-upload-text-input--attribute='readonly value="Read only title"'
        }}
      {{#> button button--modifier="pf-m-control"}}
        Browse...
      {{/button}}
      {{#> button button--modifier="pf-m-control"}}
        Clear
      {{/button}}
    {{/input-group}}
  {{/file-upload-input-group}}
  {{#> file-upload-textarea file-upload-textarea--aria-label="Text area empty" file-upload-textarea--attribute='readonly'}}Ssh-Rsa AAh3zJFkzjjakCJialksjfB3zJFkzzAAhhMskjjakCJialksjfB3z89z3zJFkz3 +kzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fc
  {{/file-upload-textarea}}
{{/file-upload}}
```

```hbs title=Upload-complete-editable
{{#> file-upload file-upload--id="drop-file"}}
  {{#> file-upload-input-group}}
    {{#> input-group}}
      {{> file-upload-text-input
        file-upload-text-input--aria-label="Filename"
        file-upload-text-input--attribute='readonly value="Sample.txt"'
        }}
      {{#> button button--modifier="pf-m-control"}}
        Browse...
      {{/button}}
      {{#> button button--modifier="pf-m-control"}}
        Clear
      {{/button}}
    {{/input-group}}
  {{/file-upload-input-group}}
  {{#> file-upload-textarea file-upload-textarea--aria-label="Text area empty"}}Ssh-Rsa AAh3zJFkzjjakCJialksjfB3zJFkzzAAhhMskjjakCJialksjfB3z89z3zJFkz3 +kzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fc
  {{/file-upload-textarea}}
{{/file-upload}}
```

```hbs title=Drag-file-hover-component
{{#> file-upload file-upload--id="drag-file-hover-component" file-upload--modifier="pf-m-drag-hover"}}
  {{#> file-upload-input-group}}
    {{#> input-group}}
      {{> file-upload-text-input file-upload-text-input--aria-label="Drag or drop a file" file-upload-text-input--attribute='placeholder="Drag a file here or browse to upload"'}}
      {{#> button button--modifier="pf-m-control"}}
        Browse...
      {{/button}}
      {{#> button button--modifier="pf-m-control" button--attribute="disabled"}}
        Clear
      {{/button}}
    {{/input-group}}
  {{/file-upload-input-group}}
  {{#> file-upload-textarea file-upload-textarea--aria-label="Text area empty" file-upload-textarea--attribute='readonly'}}
  {{/file-upload-textarea}}
{{/file-upload}}
```

```hbs title=File-upload-error
{{#> file-upload file-upload--id="file-upload-error"}}
  {{#> file-upload-input-group}}
    {{#> input-group}}
      {{> file-upload-text-input
        file-upload-text-input--aria-label="File upload error"
        file-upload-text-input--attribute='required value="Sample.png" aria-invalid="true"'
        }}
      {{#> button button--modifier="pf-m-control"}}
        Browse...
      {{/button}}
      {{#> button button--modifier="pf-m-control"}}
        Clear
      {{/button}}
    {{/input-group}}
  {{/file-upload-input-group}}
  {{#> file-upload-textarea file-upload-textarea--aria-label="Text area empty"}}{{/file-upload-textarea}}
  {{#> file-upload-message file-upload-message--modifier="pf-m-error"}}
    {{#> form-helper-text form-helper-text--modifier="pf-m-error" form-helper-text--attribute='id="file-upload-error-helper-text" aria-live="polite"'}}
      We don't support this file type. Try again with a different file type.
    {{/form-helper-text}}
  {{/file-upload-message}}
{{/file-upload}}
```

```hbs title=File-upload-loading
{{#> file-upload file-upload--id="file-upload-loading" file-upload--modifier="pf-m-loading"}}
  {{#> file-upload-input-group}}
    {{#> input-group}}
      {{> file-upload-text-input
        file-upload-text-input--aria-label="Read only"
        file-upload-text-input--attribute='readonly name="file-upload-loading" value="Sample.png"'
      }}
      {{#> button button--modifier="pf-m-control"}}
        Browse...
      {{/button}}
      {{#> button button--modifier="pf-m-control"}}
        Clear
      {{/button}}
    {{/input-group}}
  {{/file-upload-input-group}}
  {{#> file-upload-textarea file-upload-textarea--aria-label="Text area empty" file-upload-textarea--HasSpinner="true"}}Ssh-Rsa AAh3zJFkzjjakCJialksjfB3zJFkzzAAhhMskjjakCJialksjfB3z89z3zJFkz3 +kzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fc
  {{/file-upload-textarea}}
{{/file-upload}}
```

## Documentation

### Overview

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-file-upload` | `<form>`, `<div>` | Initiates the file upload component. **Required**. |
| `.pf-c-file-upload__input-group` | `<div>` | Initiates the file upload input group. **Required** |
| `.pf-c-file-upload__text-area` | `<textarea>`, `<div>` | Initiates the text area element. **Required** |
| `.pf-c-file-upload__message` | `<div>` | Initiates the file upload message. |
| `.pf-m-drag-hover` | `.pf-c-file-upload` | Modifies file upload for when an element is dragged or dropped inside of its container. |
| `.pf-m-loading` | `.pf-c-file-upload` | Modifies file upload for the loading state. |
| `.pf-m-error` | `.pf-c-file-upload__message`| Modifies the file upload message for the error state. |
