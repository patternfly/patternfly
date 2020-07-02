---
title: 'Descriptionlist'
section: components
beta: true
cssPrefix: pf-c-description-list
---

## Examples

```hbs title=Default
{{> description-list__example description-list--title="Default DL"}}
```

```hbs title=Default-2-col
{{> description-list__example description-list--title="Default 2 column DL" description-list--modifier="pf-m-2-col"}}
```

```hbs title=Default-3-col
{{> description-list__example description-list--title="Default 3 column DL" description-list--modifier="pf-m-3-col"}}
```

```hbs title=Default-4-col
{{> description-list__example description-list--title="Default 4 column DL" description-list--modifier="pf-m-4-col"}}
```

```hbs title=Horizontal
{{> description-list__example description-list--title="Horizontal DL" description-list--modifier="pf-m-horizontal"}}
```

```hbs title=Horizontal-2-col
{{> description-list__example description-list--title="Horizontal 2 column DL" description-list--modifier="pf-m-horizontal pf-m-2-col"}}
```

```hbs title=Horizontal-3-col
{{> description-list__example description-list--title="Horizontal 3 column DL" description-list--modifier="pf-m-horizontal pf-m-3-col"}}
```

```hbs title=Horizontal-4-col
{{> description-list__example description-list--title="Horizontal 4 column DL" description-list--modifier="pf-m-horizontal pf-m-4-col"}}
```

## Responsive column definitions

```hbs title=Default-responsive-columns
{{> description-list__example description-list--title="Default responsive DL" description-list--modifier="pf-m-2-col-on-lg pf-m-3-col-on-xl pf-m-4-col-on-2xl"}}
```

```hbs title=Horizontal-responsive-columns
{{> description-list__example description-list--title="Horizontal responsive DL" description-list--modifier="pf-m-horizontal pf-m-2-col-on-lg pf-m-3-col-on-xl pf-m-4-col-on-2xl"}}
```

## Auto-fit layout

```hbs title=Default-auto-fit
{{> description-list__example description-list--title="Auto-fit DL" description-list--modifier="pf-m-auto-fit"}}
```

```hbs title=Horizontal-auto-fit
{{> description-list__example description-list--title="Horizontal ato-fit DL" description-list--modifier="pf-m-horizontal pf-m-auto-fit"}}
```

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
| `.pf-m-{1,2,3,4}-col{-on-[lg, xl, 2xl]}` | `.pf-c-description-list` | Modifies the description list column layout. |
