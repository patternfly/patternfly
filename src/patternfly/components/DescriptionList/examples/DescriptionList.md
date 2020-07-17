---
id: 'Description list'
section: components
beta: true
cssPrefix: pf-c-description-list
---

## Examples

### Default
```hbs
{{> description-list__example description-list--title="Default DL" description-list--header="Test"}}
```

### Default 2 col
```hbs
{{> description-list__example description-list--title="Default 2 column DL" description-list--modifier="pf-m-2-col"}}
```

### Default 3 col on lg
```hbs
{{> description-list__example description-list--title="Default 3 column DL" description-list--modifier="pf-m-3-col-on-lg"}}
```

### Horizontal
```hbs
{{> description-list__example description-list--title="Horizontal DL" description-list--modifier="pf-m-horizontal"}}
```

### Horizontal 2 col
```hbs
{{> description-list__example description-list--title="Horizontal 2 column DL" description-list--modifier="pf-m-horizontal pf-m-2-col"}}
```

### Horizontal 3 col on lg
```hbs
{{> description-list__example description-list--title="Horizontal 3 column DL" description-list--modifier="pf-m-horizontal pf-m-3-col-on-lg"}}
```

## Responsive column definitions

### Default responsive columns
```hbs
{{> description-list__example description-list--title="Default responsive DL" description-list--modifier="pf-m-2-col-on-lg pf-m-3-col-on-xl"}}
```

### Horizontal responsive columns
```hbs
{{> description-list__example description-list--title="Horizontal responsive DL" description-list--modifier="pf-m-horizontal pf-m-2-col-on-lg pf-m-3-col-on-xl"}}
```

## Auto-column-width

### Default auto columns width
```hbs
{{> description-list__example description-list--title="Auto column width DL" description-list--modifier="pf-m-auto-column-widths pf-m-3-col"}}
```

### Horizontal auto column width
```hbs
{{> description-list__example description-list--title="Horizontal ato-fit DL" description-list--modifier="pf-m-horizontal pf-m-auto-column-widths pf-m-2-col-on-lg"}}
```

## Inline grid

### Default inline grid
```hbs
{{> description-list__example description-list--title="Default inline grid" description-list--modifier="pf-m-3-col pf-m-inline-grid"}}
```

<!-- ## Auto term with is only supported in FF currently

### Horizontal 2 col auto term width
```hbs
{{> description-list__example description-list--title="Horizontal 2 column DL" description-list--modifier="pf-m-horizontal pf-m-auto-term-widths pf-m-2-col"}}
``` -->

## Documentation

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `title` | `.pf-c-description-list` | Provides an accessible title for the description list. **Required** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-description-list` | `<dl>` | Initiates the description list component. **Required** |
| `.pf-c-description-list__group` | `<div>` | Initiates a description list component group. **Required** |
| `.pf-c-description-list__term` | `<dt>` | Initiates a description list component term. **Required** |
| `.pf-c-description-list__description` | `<dd>` | Initiates a description list component description. **Required** |
| `.pf-c-description-list__text` | `<div>` | Initiates a description list component text element. **Required** |
| `.pf-m-horizontal` | `.pf-c-description-list` | Modifies the description list component term and description pair to a horizontal layout. |
| `.pf-m-auto-column-widths` | `.pf-c-description-list` | Modifies the description list to format automatically. |
| `.pf-m-inline-grid` | `.pf-c-description-list` | Modifies the description list display to inline-grid. |
| `.pf-m-{1,2,3}-col{-on-[md, lg, xl, 2xl]}` | `.pf-c-description-list` | Modifies the description list number of columns. |

<!-- | `.pf-m-order[0-12]{-on-[breakpoint]}` | `.pf-c-description-list__group` | Modifies the order of the flex layout element. |
| `.pf-m-order-first{-on-[breakpoint]}` | `.pf-c-description-list__group` | Modifies the order of the flex layout element to -1. |
| `.pf-m-order-last{-on-[breakpoint]}` | `..pf-c-description-list__group` | Modifies the order of the flex layout element to $limit + 1. | -->
