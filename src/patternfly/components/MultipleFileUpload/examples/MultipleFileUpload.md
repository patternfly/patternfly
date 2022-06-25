---
id: 'File upload - multiple'
beta: true
section: components
cssPrefix: pf-c-multiple-file-upload
---

## Examples
### Basic
```hbs
{{> __multiple-file-upload-default}}
```

### Drag over
```hbs
{{> __multiple-file-upload-default multiple-file-upload--modifier="pf-m-drag-over"}}
```

### Horizontal
```hbs
{{> __multiple-file-upload-default multiple-file-upload--modifier="pf-m-horizontal"}}
```

### Horizontal drag over
```hbs
{{> __multiple-file-upload-default multiple-file-upload--modifier="pf-m-horizontal pf-m-drag-over"}}
```

### File upload status
```hbs
{{> __multiple-file-upload-default multiple-file-upload--HasStatus="true" multiple-file-upload--id="multiple-file-upload-status"}}
```

### File upload status expanded
```hbs
{{> __multiple-file-upload-default multiple-file-upload--HasStatus="true" multiple-file-upload-status--IsExpanded="true" multiple-file-upload--id="multiple-file-upload-status-expanded"}}
```

### Horizontal file upload status expanded
```hbs
{{> __multiple-file-upload-default multiple-file-upload--modifier="pf-m-horizontal" multiple-file-upload--HasStatus="true" multiple-file-upload-status--IsExpanded="true" multiple-file-upload--id="multiple-file-upload-status-horizontal-expanded"}}
```

## Documentation

### Usage
| Class | Applied | Outcome |
| -- | -- | -- |
| `.pf-c-multiple-file-upload` | `<div>` | Initiates the multiple file upload component. **Required** |
| `.pf-c-multiple-file-upload__main` | `<div>` | Defines the main section. |
| `.pf-c-multiple-file-upload__title` | `<div>` | Defines the title. |
| `.pf-c-multiple-file-upload__title-icon` | `<div>` | Defines the title icon. |
| `.pf-c-multiple-file-upload__title-text` | `<div>` | Defines the title text. |
| `.pf-c-multiple-file-upload__title-text-separator` | `<div>` | Defines the title text separator. |
| `.pf-c-multiple-file-upload__upload` | `<div>` | Defines the upload button. |
| `.pf-c-multiple-file-upload__info` | `<div>` | Defines the info section. |
| `.pf-c-multiple-file-upload__status` | `<div>` | Defines the status section. |
| `.pf-c-multiple-file-upload__status-progress` | `<div>` | Defines the status toggle progress. |
| `.pf-c-multiple-file-upload__status-progress-icon` | `<div>` | Defines the status toggle progress icon. |
| `.pf-c-multiple-file-upload__status-progress-text` | `<div>` | Defines the status toggle progress text. |
| `.pf-c-multiple-file-upload__status-list` | `<div>` | Defines the status item list. |
| `.pf-c-multiple-file-upload__status-item` | `<div>` | Defines a status item. |
| `.pf-c-multiple-file-upload__status-item-icon` | `<div>` | Defines the status item icon. |
| `.pf-c-multiple-file-upload__status-item-main` | `<div>` | Defines the status item main progress section. |
| `.pf-c-multiple-file-upload__status-item-close` | `<div>` | Defines the status item close button. |
| `.pf-c-multiple-file-upload__status-item-progress` | `<div>` | Defines the status item progress description. |
| `.pf-c-multiple-file-upload__status-item-progress-text` | `<div>` | Defines the status item progress description text. |
| `.pf-c-multiple-file-upload__status-item-progress-size` | `<div>` | Defines the status item progress description size. |
