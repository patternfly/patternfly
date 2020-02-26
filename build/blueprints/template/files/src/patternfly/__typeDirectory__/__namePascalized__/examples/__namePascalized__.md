---
title: '{{nameCapitalized}}'
section: beta
beta: true
cssPrefix: pf-c-{{nameDasherized}}
---

## Optional introduction

Optional introduction for `{{nameDasherized}}`.

## Examples

```hbs title=Basic
{{moduleHbOpen}}
  {{moduleHbIdConcatenationOpen}}
    Item
  {{moduleHbIdConcatenationClose}}
{{moduleHbClose}}
```

## Documentation

### Overview

`{{nameDasherized}}` is a component. Some of its elements are presentational, while others require accessibility support.

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `hidden` | `.{{nameDasherized}}__item` |  Indicates that the `.{{nameDasherized}}__item` is hidden. |
| `aria-hidden` | `.{{nameDasherized}}__item` |  Indicates that the `.{{nameDasherized}}__item` is hidden from and unfocusable to screen readers, but remains visible for sighted users. |
| `aria-label="[descriptive text]"` | `.{{nameDasherized}}__item` | Provides an accessible name for a test element. **Required** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.{{nameDasherized}}` | `<div>` | Initiates the {{nameSimple}} component. **Required** |
| `.{{nameDasherized}}__item` | `<div>` | Initiates a {{nameSimple}} item. **Required** |
| `.pf-m-selected` | `.{{nameDasherized}}__item` | Modifies a {{nameSimple}} item for the selected state. **Required** |
