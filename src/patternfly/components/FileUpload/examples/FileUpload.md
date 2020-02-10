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
      <!-- {{#> form-control controlType="input" input="true" form-control--attribute='id="basic-file-upload-input" name="basic-file-upload" placeholder="Drag a file here or browse to upload" aria-label="Upload a file"'}}
      {{/form-control}} -->
      {{#> button button--modifier="pf-m-control"}}
        Browse...
      {{/button}}
      {{#> button button--modifier="pf-m-control" button--attribute="disabled"}}
        Clear
      {{/button}}
    {{/input-group}}
  {{/file-upload-input-group}}
  {{#> file-upload-textarea file-upload-textarea--aria-label="Text area empty"}}{{/file-upload-textarea}}
  <!-- {{#> file-upload-text-area}}
    {{#> form-control controlType="textarea" form-control--attribute='name="textarea" id="text-area-1" aria-label="Text area empty"' form-control--modifier="pf-m-resize-vertical"}}
    {{/form-control}}
  {{/file-upload-text-area}} -->
{{/file-upload}}
```

```hbs title=Browse-to-upload-file
{{#> file-upload file-upload--id="browse-to-upload-file"}}
  {{#> file-upload-input-group}}
    {{#> input-group}}
      {{> file-upload-text-input
        file-upload-text-input--aria-label="Select browse button to upload file"
        file-upload-text-input--attribute='placeholder="Drag a file here or browse to upload"'
        }}
      <!-- {{#> form-control controlType="input" input="true" form-control--attribute='id="basic-file-upload-browse-input" name="basic-file-upload-browse" placeholder="Drag a file here or browse to upload" aria-label="Select browse button to upload file"'}}
      {{/form-control}} -->
      {{#> button button--modifier="pf-m-control pf-m-expanded"}}
        Browse...
      {{/button}}
      {{#> button button--modifier="pf-m-control" button--attribute="disabled"}}
        Clear
      {{/button}}
    {{/input-group}}
  {{/file-upload-input-group}}
  {{#> file-upload-textarea file-upload-textarea--aria-label="Text area empty"}}{{/file-upload-textarea}}
  <!-- {{#> file-upload-text-area}}
    {{#> form-control controlType="textarea" form-control--attribute='name="textarea" id="text-area-2" aria-label="Text area empty"' form-control--modifier="pf-m-resize-vertical"}}
    {{/form-control}}
  {{/file-upload-text-area}} -->
{{/file-upload}}
```

```hbs title=Browsed-file-upload-complete
{{#> file-upload file-upload--id="browsed-file-upload-complete"}}
  {{#> file-upload-input-group}}
    {{#> input-group}}
      {{> file-upload-text-input
        file-upload-text-input--aria-label="Read only"
        file-upload-text-input--attribute='readonly value="Read only title"'
        }}
      <!-- {{#> form-control controlType="input" input="true" form-control--attribute='id="file-upload-browse-complete-input" name="file-upload-browse-complete" value="Read only title" aria-label="Read only" readonly'}}
      {{/form-control}} -->
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
  <!-- {{#> file-upload-text-area}}
    {{#> form-control controlType="textarea" form-control--attribute='readonly name="textarea" id="text-area-3" aria-label="Text area empty"' form-control--modifier="pf-m-resize-vertical"}}Ssh-Rsa AAh3zJFkzjjakCJialksjfB3zJFkzzAAhhMskjjakCJialksjfB3z89z3zJFkz3 +kzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fc
    {{/form-control}}
  {{/file-upload-text-area}} -->
{{/file-upload}}

```

```hbs title=Drag-file-hover-component
{{#> file-upload file-upload--id="drag-file-hover-component" file-upload--modifier="pf-m-drag-hover"}}
  {{#> file-upload-input-group}}
    {{#> input-group}}
      {{> file-upload-text-input file-upload-text-input--aria-label="Drag or drop a file" file-upload-text-input--attribute='placeholder="Drag a file here or browse to upload"'}}
      <!-- {{#> form-control controlType="input" input="true" form-control--attribute='id="drag-or-drop-file-input" name="drag-or-drop-file" placeholder="Drag a file here or browse to upload" aria-label="Drag or drop a file"'}}
      {{/form-control}} -->
      {{#> button button--modifier="pf-m-control"}}
        Browse...
      {{/button}}
      {{#> button button--modifier="pf-m-control" button--attribute="disabled"}}
        Clear
      {{/button}}
    {{/input-group}}
  {{/file-upload-input-group}}
  {{#> file-upload-textarea file-upload-textarea--aria-label="Text area empty" file-upload-textarea--attribute='readonly'}}Ssh-Rsa AAh3zJFkzjjakCJialksjfB3zJFkzzAAhhMskjjakCJialksjfB3z89z3zJFkz3 +kzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fc
  {{/file-upload-textarea}}
  <!-- {{#> file-upload-text-area}}
    {{#> form-control controlType="textarea" form-control--attribute='name="textarea" id="text-area-4" aria-label="Text area empty"' form-control--modifier="pf-m-resize-vertical"}}
    {{/form-control}}
  {{/file-upload-text-area}} -->
{{/file-upload}}
```

```hbs title=Drop-file
{{#> file-upload file-upload--id="drop-file"}}
  {{#> file-upload-input-group}}
    {{#> input-group}}
      {{> file-upload-text-input
        file-upload-text-input--aria-label="Filename"
        file-upload-text-input--attribute='readonly value="Sample.txt"'
        }}
      <!-- {{#> form-control controlType="input" input="true" form-control--attribute='id="file-drag-drop-complete-input" name="file-drag-drop-complete" value="Sample.txt" aria-label="Filename" readonly'}}
      {{/form-control}} -->
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
  <!-- {{#> file-upload-text-area}}
    {{#> form-control controlType="textarea" form-control--attribute='name="textarea" id="text-area-5" aria-label="Text area empty"' form-control--modifier="pf-m-resize-vertical"}}Ssh-Rsa AAh3zJFkzjjakCJialksjfB3zJFkzzAAhhMskjjakCJialksjfB3z89z3zJFkz3 +kzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fc
    {{/form-control}}
  {{/file-upload-text-area}} -->
{{/file-upload}}
```

```hbs title=File-upload-error
{{#> file-upload file-upload--id="file-upload-error"}}
  {{#> file-upload-input-group}}
    {{#> input-group}}
      {{> file-upload-text-input
        file-upload-text-input--aria-label="File upload error"
        file-upload-text-input--attribute='readonly value="Sample.png"'
        }}
      <!-- {{#> form-control controlType="input" input="true" form-control--attribute='id="file-upload-error-input" name="file-upload-error" value="Sample.png" aria-label="File upload error" aria-invalid="true" required'}}
      {{/form-control}} -->
      {{#> button button--modifier="pf-m-control"}}
        Browse...
      {{/button}}
      {{#> button button--modifier="pf-m-control"}}
        Clear
      {{/button}}
    {{/input-group}}
  {{/file-upload-input-group}}
  {{#> file-upload-textarea file-upload-textarea--aria-label="Text area empty"}}{{/file-upload-textarea}}
  <!-- {{#> file-upload-text-area}}
    {{#> form-control controlType="textarea" form-control--attribute='name="textarea" id="text-area-6" aria-label="Text area empty"' form-control--modifier="pf-m-resize-vertical"}}
    {{/form-control}}
  {{/file-upload-text-area}} -->
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
        file-upload-text-input--aria-label="File upload loading"
        file-upload-text-input--attribute='name="file-upload-loading" value="Sample.png"'
        }}
      <!-- {{#> form-control controlType="input" input="true" form-control--attribute='id="file-upload-loading-input" name="file-upload-loading" value="Sample.png" aria-label="File upload loading"'}}
      {{/form-control}} -->
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

  <!-- {{#> file-upload-text-area file-upload-text-area--attribute='aria-label="Text area empty"'}}
    {{#> form-control controlType="textarea" form-control--attribute='name="textarea" id="text-area-7" aria-label="Text area empty"' form-control--modifier="pf-m-resize-vertical"}}Ssh-Rsa AAh3zJFkzjjakCJialksjfB3zJFkzzAAhhMskjjakCJialksjfB3z89z3zJFkz3 +kzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fc
      {{/form-control}}
    {{#> file-upload-text-area-spinner}}
      {{#> spinner spinner--modifier="pf-m-lg"}}Loading...{{/spinner}}
    {{/file-upload-text-area-spinner}}
  {{/file-upload-text-area}} -->
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
| `.pf-c-file-upload__input-group` | `<div>` | Initiates the file upload input group. **Required** |
| `.pf-c-file-upload__text-area` | `<textarea>`, `<div>` | Initiates the text area element. **Required** |
| `.pf-c-file-upload__message` | `<div>` | Initiates the file upload message. |
| `.pf-m-drag-hover` | `.pf-c-file-upload` | Modifies file upload for when an element is dragged or dropped inside of its container. |
| `.pf-m-loading` | `.pf-c-file-upload` | Modifies file upload for the loading state. |
| `.pf-m-error` | `.pf-c-file-upload__message`| Modifies the file upload message for the error state. |
