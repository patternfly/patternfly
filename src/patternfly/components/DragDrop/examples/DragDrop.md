---
id: 'Drag drop'
beta: true
section: components
cssPrefix: pf-c-drag-drop
---

import './DragDrop.css'

## Examples
### Basic
```hbs
{{#> droppable}}
  {{> draggable}}
  {{> draggable}}
  {{> draggable}}
  {{> draggable}}
  {{> draggable}}
  {{> draggable}}
  {{> draggable}}
  {{> draggable}}
{{/droppable}}
```

### Dragging
```hbs
{{#> droppable droppable--modifier="pf-m-dragging"}}
  {{> draggable}}
  {{> draggable}}
  {{> draggable}}
  {{> draggable draggable--modifier="pf-m-dragging"}}
  {{> draggable}}
  {{> draggable}}
  {{> draggable}}
  {{> draggable}}
{{/droppable}}
```

### Drag outside
```hbs
{{#> droppable droppable--modifier="pf-m-dragging pf-m-drag-outside"}}
  {{> draggable}}
  {{> draggable}}
  {{> draggable}}
  {{> draggable draggable--modifier="pf-m-dragging pf-m-drag-outside"}}
  {{> draggable}}
  {{> draggable}}
  {{> draggable}}
  {{> draggable}}
{{/droppable}}
```

## Documentation
### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-draggable` | `*` | Initiates a draggable element. |
| `.pf-c-droppable` | `*` | Initiates a droppable element. |
| `.pf-m-dragging` | `.pf-c-draggable`, `.pf-c-droppable` | Indicates a draggable and droppable element are in the dragging state. |
| `.pf-m-drag-outside` | `.pf-c-draggable`, `.pf-c-droppable` | Indicates a draggable element is dragged outside of a droppable element. |
