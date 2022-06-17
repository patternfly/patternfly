---
id: 'Description list'
section: components
cssPrefix: pf-c-description-list
---

## Examples

### Default
```hbs
{{> description-list__example description-list--title="Default DL"}}
```

### Term help text
```hbs
{{> description-list__example description-list--title="Term help text" description-list-term--TextIsHelp="true"}}
```

### Default, two column
```hbs
{{> description-list__example description-list--title="Default 2 column DL" description-list--modifier="pf-m-2-col" description-list--IsLongDescription="true"}}
```

### Default, three column on lg breakpoint
```hbs
{{> description-list__example description-list--title="Default 3 column DL" description-list--modifier="pf-m-3-col-on-lg"}}
```

### Horizontal
```hbs
{{> description-list__example description-list--title="Horizontal DL" description-list--modifier="pf-m-horizontal"}}
```

### Horizontal, two column
```hbs
{{> description-list__example description-list--title="Horizontal 2 column DL" description-list--modifier="pf-m-horizontal pf-m-2-col"}}
```

### Horizontal, three column on lg breakpoint
```hbs
{{> description-list__example description-list--title="Horizontal 3 column DL" description-list--modifier="pf-m-horizontal pf-m-3-col-on-lg"}}
```

### Compact
```hbs
{{> description-list__example description-list--title="Compact DL" description-list--modifier="pf-m-compact"}}
```

### Compact horizontal
```hbs
{{> description-list__example description-list--title="Compact DL" description-list--modifier="pf-m-compact pf-m-horizontal pf-m-2-col"}}
```

### Fluid horizontal
```hbs
{{> description-list__example description-list--title="Fluid DL" description-list--modifier="pf-m-horizontal pf-m-fluid pf-m-2-col"}}
```

### Column fill

Column fill will modify the default placement of description list groups to fill from top to bottom using css column-count, instead of left to right. **Note:** using this modifier will change the layout so that horizontally adjacent groups are no longer aligned in the same row.

```hbs
{{> description-list__example description-list--title="Column fill" description-list--modifier="pf-m-fill-columns pf-m-2-col pf-m-3-col-on-lg" description-list--IsLongDescription="true"}}
```

## Auto fit

### Auto-fit basic
```hbs
{{> description-list__example description-list--title="Auto-fit" description-list--header="Auto fit" description-list--modifier="pf-m-auto-fit"}}
```

### Auto-fit, min width modified, grid template columns
```hbs
{{> description-list__example description-list--title="Auto-fit" description-list--header="Auto fit" description-list--modifier="pf-m-auto-fit" description-list--attribute='style="--pf-c-description-list--GridTemplateColumns--min: 200px;"'}}
```

### Auto-fit, min width modified, responsive grid template columns
```hbs
{{> description-list__example description-list--title="Auto-fit" description-list--header="Auto fit" description-list--modifier="pf-m-auto-fit" description-list--attribute='style="--pf-c-description-list--GridTemplateColumns--min-on-md: 100px; --pf-c-description-list--GridTemplateColumns--min-on-lg: 150px; --pf-c-description-list--GridTemplateColumns--min-on-xl: 200px; --pf-c-description-list--GridTemplateColumns--min-on-2xl: 300px;"'}}
```

## Responsive column definitions

### Default, responsive columns
```hbs
{{> description-list__example description-list--title="Default responsive DL" description-list--modifier="pf-m-2-col-on-lg pf-m-3-col-on-xl"}}
```

### Horizontal, responsive columns
```hbs
{{> description-list__example description-list--title="Horizontal responsive DL columns" description-list--modifier="pf-m-horizontal pf-m-2-col-on-lg pf-m-3-col-on-xl"}}
```

### Responsive, horizontal, vertical group layout
```hbs
{{> description-list__example description-list--title="Horizontal responsive DL groups" description-list--modifier="pf-m-horizontal pf-m-vertical-on-md pf-m-horizontal-on-lg pf-m-vertical-on-xl pf-m-horizontal-on-2xl"}}
```

## Auto-column-width

### Default, auto columns width
```hbs
{{> description-list__example description-list--title="Auto column width DL" description-list--modifier="pf-m-auto-column-widths pf-m-3-col"}}
```

### Horizontal, auto column width
```hbs
{{> description-list__example description-list--title="Horizontal ato-fit DL" description-list--modifier="pf-m-horizontal pf-m-auto-column-widths pf-m-2-col-on-lg"}}
```

## Inline grid

### Default, inline grid
```hbs
{{> description-list__example description-list--title="Default inline grid" description-list--modifier="pf-m-3-col pf-m-inline-grid"}}
```

### Display variant
```hbs
{{> description-list__example description-list--modifier="pf-m-display-lg pf-m-2-col-on-lg" description-list--title="Card DL"}}
```

## Card variants

Cards can be used as [description list group wrappers](../card#description-list-group-wrapper-card-variant). Using cards in this way applies the card body padding directly to the card and enables the use of card modifiers within description list groups.

### Description list group wrapper as card
```hbs
{{> description-list__example description-list--modifier="pf-m-2-col-on-lg" description-list-group--IsCard="true" description-list--title="Card DL"}}
```

### Display lg and card variant
```hbs
{{> description-list__example description-list-group--IsCard="true" description-list--modifier="pf-m-display-lg pf-m-2-col-on-lg" description-list--title="Card DL"}}
```

### Display 2xl and card variant
```hbs
{{> description-list__example description-list-group--IsCard="true" description-list--modifier="pf-m-display-2xl pf-m-2-col-on-lg" description-list--title="Card DL"}}
```

### Display and card variant, three column on lg breakpoint
```hbs
{{> description-list__example description-list__example--IsShort="true" description-list-group--IsCard="true" description-list--modifier="pf-m-3-col-on-lg pf-m-display-lg" description-list--title="Card DL"}}
```

### Display and card variant, horizontal, modified term width
```hbs
{{> description-list__example description-list--attribute='style="--pf-c-description-list__term--width: 10ch;"' description-list__example--IsShort="true" description-list-group--IsCard="true" description-list--modifier="pf-m-2-col-on-lg pf-m-display-lg pf-m-horizontal" description-list--title="Card DL"}}
```

<!-- ## Auto term with is only supported in FF currently

### Horizontal 2 col auto term width
```hbs
{{> description-list__example description-list--title="Horizontal 2 column DL" description-list--modifier="pf-m-horizontal pf-m-auto-term-widths pf-m-2-col"}}
``` -->

## With icons

### Icons on terms
```hbs
{{> description-list__example-with-icons description-list--title="With icon"}}
```

## Documentation

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `title` | `.pf-c-description-list` | Provides an accessible title for the description list. **Required** |
| `tabindex="0"` | `.pf-c-description-list__text.pf-m-help-text` | Inserts the `.pf-c-description-list__text` into the tab order of the page so that it is focusable. **Required when the element is clickable** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-description-list` | `<dl>` | Initiates the description list component. **Required** |
| `.pf-c-description-list__group` | `<div>` | Initiates a description list component group. **Required** |
| `.pf-c-description-list__term` | `<dt>` | Initiates a description list component term. **Required** |
| `.pf-c-description-list__description` | `<dd>` | Initiates a description list component description. **Required** |
| `.pf-c-description-list__text` | `<span>`, `<div>` | Initiates a description list component text element. Use a `<span>` when a child of `.pf-c-description-list__term`. **Required** |
| `.pf-c-description-list__term-icon` | `<span>` | Initiates a description list component term icon element. |
| `.pf-m-compact` | `.pf-c-description-list` | Modifies the description list for compact horizontal and vertical spacing. |
| `.pf-m-display-lg` | `.pf-c-description-list` | Modifies the description list to have large display styling. |
| `.pf-m-display-2xl` | `.pf-c-description-list` | Modifies the description list to have 2xl display styling. |
| `.pf-m-fluid` | `.pf-c-description-list.pf-m-horizontal` | Modifies the description list term width to be fluid. |
| `.pf-m-help-text` | `.pf-c-description-list__text` | Indicates there is more information available for the description list component term text. |
| `.pf-m-horizontal{-on-[sm, md, lg, xl, 2xl]}` | `.pf-c-description-list` | Modifies the description list component term and description pair to a horizontal layout. |
| `.pf-m-vertical{-on-[sm, md, lg, xl, 2xl]}` | `.pf-c-description-list` | Modifies the description list component term and description pair to a vertical layout. |
| `.pf-m-fill-columns` | `.pf-c-description-list` | Modifies the description list groups to fill columns from top to bottom, instead of rows from left to right. |
| `.pf-m-auto-column-widths` | `.pf-c-description-list` | Modifies the description list to format automatically. |
| `.pf-m-inline-grid` | `.pf-c-description-list` | Modifies the description list display to inline-grid. |
| `.pf-m-{1,2,3}-col{-on-[sm, md, lg, xl, 2xl]}` | `.pf-c-description-list` | Modifies the description list number of columns. |
| `--pf-c-description-list--GridTemplateColumns--min{-on-[breakpoint]}: {width}` | `.pf-c-description-list` | Modifies the min value of the `grid-template-columns` declaration at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `--pf-c-description-list--m-horizontal__term--width{-on-[breakpoint]}: {width}` | `.pf-c-description-list.pf-m-horizontal` | Modifies the description list term width at optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |

<!-- | `.pf-m-order[0-12]{-on-[breakpoint]}` | `.pf-c-description-list__group` | Modifies the order of the flex layout element. |
| `.pf-m-order-first{-on-[breakpoint]}` | `.pf-c-description-list__group` | Modifies the order of the flex layout element to -1. |
| `.pf-m-order-last{-on-[breakpoint]}` | `..pf-c-description-list__group` | Modifies the order of the flex layout element to $limit + 1. | -->
