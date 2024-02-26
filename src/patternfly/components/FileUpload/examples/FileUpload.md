---
id: Simple file upload
section: components
subsection: file-upload
cssPrefix: pf-v6-c-file-upload
---

## Examples

### Basic file upload
```hbs
{{#> file-upload file-upload--id="basic-file-upload"}}
  {{#> file-upload-file-select}}
    {{#> input-group}}
      {{#> input-group-item input-group-item--IsFill=true}}
        {{> file-upload-text-input
          form-control--IsReadonly="true"
          file-upload-text-input--aria-label="Drag and drop a file or upload one"
          file-upload-text-input--attribute=(concat 'placeholder="Drag and drop a file or upload one" aria-describedby="' file-upload--id '-browse"')
          }}
      {{/input-group-item}}
      {{#> input-group-item}}
        {{#> button button--modifier="pf-m-control" button--attribute=(concat 'id="' file-upload--id '-browse"')}}
          Upload
        {{/button}}
      {{/input-group-item}}
      {{#> input-group-item}}
        {{#> button button--modifier="pf-m-control" button--attribute="disabled"}}
          Clear
        {{/button}}
      {{/input-group-item}}
    {{/input-group}}
  {{/file-upload-file-select}}
  {{#> file-upload-file-details file-upload-file-details--aria-label="Empty text area"}}
  {{/file-upload-file-details}}
{{/file-upload}}
```

### With helper text

```hbs
{{#> file-upload file-upload--id="file-upload-helper-text"}}
  {{#> file-upload-file-select}}
    {{#> input-group}}
      {{#> input-group-item input-group-item--IsFill=true}}
        {{> file-upload-text-input
          form-control--IsReadonly="true"
          file-upload-text-input--aria-label="Drag and drop a file or upload one"
          file-upload-text-input--attribute=(concat 'placeholder="Drag and drop a file or upload one" aria-describedby="' file-upload--id '-browse"')
          }}
      {{/input-group-item}}
      {{#> input-group-item}}
        {{#> button button--modifier="pf-m-control" button--attribute=(concat 'id="' file-upload--id '-browse" aria-describedby="helper-text-example"')}}
          Upload
        {{/button}}
      {{/input-group-item}}
      {{#> input-group-item}}
        {{#> button button--modifier="pf-m-control" button--attribute="disabled"}}
          Clear
        {{/button}}
      {{/input-group-item}}
    {{/input-group}}
  {{/file-upload-file-select}}
  {{#> file-upload-file-details file-upload-file-details--aria-label="Uploaded file content"}}
  {{/file-upload-file-details}}
  {{#> file-upload-helper-text}}
    {{> helper-text helper-text--value="Upload a CSV file" helper-text-item--id='helper-text-example'}}
  {{/file-upload-helper-text}}
{{/file-upload}}
```

### Upload complete non editable
```hbs
{{#> file-upload file-upload--id="browsed-file-upload-complete"}}
  {{#> file-upload-file-select}}
    {{#> input-group}}
      {{#> input-group-item input-group-item--IsFill=true}}
        {{> file-upload-text-input
          form-control--IsReadonly='true'
          file-upload-text-input--aria-label="Read only filename"
          file-upload-text-input--attribute=(concat 'value="Read only filename" aria-describedby="' file-upload--id '-browse"')
          }}
      {{/input-group-item}}
      {{#> input-group-item}}
        {{#> button button--modifier="pf-m-control" button--attribute=(concat 'id="' file-upload--id '-browse"')}}
          Upload
        {{/button}}
      {{/input-group-item}}
      {{#> input-group-item}}
        {{#> button button--modifier="pf-m-control"}}
          Clear
        {{/button}}
      {{/input-group-item}}
    {{/input-group}}
  {{/file-upload-file-select}}
  {{#> file-upload-file-details file-upload-file-details--aria-label="Text area" form-control--IsReadonly='true'}}Ssh-Rsa AAh3zJFkzjjakCJialksjfB3zJFkzzAAhhMskjjakCJialksjfB3z89z3zJFkz3 +kzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fc
  {{/file-upload-file-details}}
{{/file-upload}}
```

### Upload complete editable
```hbs
{{#> file-upload file-upload--id="drop-file"}}
  {{#> file-upload-file-select}}
    {{#> input-group}}
      {{#> input-group-item input-group-item--IsFill=true}}
        {{> file-upload-text-input
          form-control--IsReadonly='true'
          file-upload-text-input--aria-label="Read only filename"
          file-upload-text-input--attribute=(concat 'value="Sample.txt" aria-describedby="' file-upload--id '-browse"')
          }}
      {{/input-group-item}}
      {{#> input-group-item}}
        {{#> button button--modifier="pf-m-control" button--attribute=(concat 'id="' file-upload--id '-browse"')}}
          Upload
        {{/button}}
      {{/input-group-item}}
      {{#> input-group-item}}
        {{#> button button--modifier="pf-m-control"}}
          Clear
        {{/button}}
      {{/input-group-item}}
    {{/input-group}}
  {{/file-upload-file-select}}
  {{#> file-upload-file-details file-upload-file-details--aria-label="Text area"}}Ssh-Rsa AAh3zJFkzjjakCJialksjfB3zJFkzzAAhhMskjjakCJialksjfB3z89z3zJFkz3 +kzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fc
  {{/file-upload-file-details}}
{{/file-upload}}
```

### Drag file hover component
```hbs
{{#> file-upload file-upload--id="drag-file-hover-component" file-upload--modifier="pf-m-drag-hover"}}
  {{#> file-upload-file-select}}
    {{#> input-group}}
      {{#> input-group-item input-group-item--IsFill=true}}
        {{> file-upload-text-input
          form-control--IsReadonly='true'
          file-upload-text-input--aria-label="Drag and drop a file or upload one"
          file-upload-text-input--attribute=(concat 'placeholder="Drag and drop a file or upload one" aria-describedby="' file-upload--id '-browse"')}}
      {{/input-group-item}}
      {{#> input-group-item}}
        {{#> button button--modifier="pf-m-control" button--attribute=(concat 'id="' file-upload--id '-browse"')}}
          Upload
        {{/button}}
      {{/input-group-item}}
      {{#> input-group-item}}
        {{#> button button--modifier="pf-m-control" button--attribute="disabled"}}
          Clear
        {{/button}}
      {{/input-group-item}}
    {{/input-group}}
  {{/file-upload-file-select}}
  {{#> file-upload-file-details file-upload-file-details--aria-label="Empty text area"}}
  {{/file-upload-file-details}}
{{/file-upload}}
```

### File upload in form with error
```hbs
{{#> form}}
  {{#> form-group}}
    {{#> form-group-control}}
      {{#> file-upload file-upload--id="file-upload-error"}}
        {{#> file-upload-file-select}}
          {{#> input-group}}
            {{#> input-group-item input-group-item--IsFill=true}}
              {{> file-upload-text-input
                form-control--IsReadonly='true'
                file-upload-text-input--aria-label="File upload error"
                file-upload-text-input--attribute=(concat 'value="Sample.png"  aria-describedby="' file-upload--id '-browse"')
                }}
            {{/input-group-item}}
            {{#> input-group-item}}
              {{#> button button--modifier="pf-m-control" button--attribute=(concat 'id="' file-upload--id '-browse" aria-describedby="with-error-example-helper-text"')}}
                Upload
              {{/button}}
            {{/input-group-item}}
            {{#> input-group-item}}
              {{#> button button--modifier="pf-m-control"}}
                Clear
              {{/button}}
            {{/input-group-item}}
          {{/input-group}}
        {{/file-upload-file-select}}
        {{#> file-upload-file-details
          form-control--IsError='true'
          file-upload-file-details--attribute='aria-describedby="with-error-example-helper-text" aria-invalid="true"'
          file-upload-file-details--aria-label="Empty text area"}}{{/file-upload-file-details}}
        {{#> file-upload-helper-text}}
          {{> helper-text helper-text-item--HasIcon=true helper-text--value="Must be a CSV file no larger than 1 KB" helper-text-item--id='with-error-example-helper-text' helper-text-item--IsError=true}}
        {{/file-upload-helper-text}}
      {{/file-upload}}
    {{/form-group-control}}
  {{/form-group}}
{{/form}}
```

### File upload loading
```hbs
{{#> file-upload file-upload--id="file-upload-loading" file-upload--modifier="pf-m-loading"}}
  {{#> file-upload-file-select}}
    {{#> input-group}}
      {{#> input-group-item input-group-item--IsFill=true}}
        {{> file-upload-text-input
          form-control--IsReadonly='true'
          file-upload-text-input--aria-label="Read only filename"
          file-upload-text-input--attribute=(concat 'name="file-upload-loading" value="Sample.png" aria-describedby="' file-upload--id '-browse"')
        }}
      {{/input-group-item}}
      {{#> input-group-item}}
        {{#> button button--modifier="pf-m-control" button--attribute=(concat 'disabled id="' file-upload--id '-browse"')}}
          Upload
        {{/button}}
      {{/input-group-item}}
      {{#> input-group-item}}
        {{#> button button--modifier="pf-m-control"}}
          Clear
        {{/button}}
      {{/input-group-item}}
    {{/input-group}}
  {{/file-upload-file-select}}
  {{#> file-upload-file-details file-upload-file-details--aria-label="Text area" file-upload-file-details--HasSpinner="true"}}Ssh-Rsa AAh3zJFkzjjakCJialksjfB3zJFkzzAAhhMskjjakCJialksjfB3z89z3zJFkz3 +kzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fc
  {{/file-upload-file-details}}
{{/file-upload}}
```

## Documentation

### Overview

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-file-upload` | `<div>`, `<form>` | Initiates the file upload component. **Required**. |
| `.pf-v6-c-file-upload__file-select` | `<div>` | Initiates the file select element. **Required** |
| `.pf-v6-c-file-upload__file-details` | `<div>` | Initiates the file details element. **Required** |
| `.pf-v6-c-file-upload__file-details-spinner` | `<div>` | Initiates the file details element. **Required** |
| `.pf-v6-c-file-upload__helper-text` | `<div>` | Initiates a container for [helper text](/components/helper-text) |
| `.pf-m-drag-hover` | `.pf-v6-c-file-upload` | Modifies file upload for when an element is dragged or dropped inside of its container. |
| `.pf-m-loading` | `.pf-v6-c-file-upload` | Modifies file upload for the loading state. |
