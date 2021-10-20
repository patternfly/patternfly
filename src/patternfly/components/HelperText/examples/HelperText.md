---
id: 'Helper text'
section: components
cssPrefix: pf-c-helper-text
---

## Examples
### Static
```hbs
{{#> helper-text}}
  {{#> helper-text-item}}
    {{#> helper-text-item-text}}This is default helper text{{/helper-text-item-text}}
  {{/helper-text-item}}
{{/helper-text}}

{{#> helper-text}}
  {{#> helper-text-item helper-text-item--modifier="pf-m-indeterminate"}}
    {{#> helper-text-item-text}}This is indeterminate helper text{{/helper-text-item-text}}
  {{/helper-text-item}}
{{/helper-text}}

{{#> helper-text}}
  {{#> helper-text-item helper-text-item--modifier="pf-m-warning"}}
    {{#> helper-text-item-text}}This is warning helper text{{/helper-text-item-text}}
  {{/helper-text-item}}
{{/helper-text}}

{{#> helper-text}}
  {{#> helper-text-item helper-text-item--modifier="pf-m-success"}}
    {{#> helper-text-item-text}}This is success helper text{{/helper-text-item-text}}
  {{/helper-text-item}}
{{/helper-text}}

{{#> helper-text}}
  {{#> helper-text-item helper-text-item--modifier="pf-m-error"}}
    {{#> helper-text-item-text}}This is error helper text{{/helper-text-item-text}}
  {{/helper-text-item}}
{{/helper-text}}
```

### Icon
```hbs
{{#> helper-text}}
  {{#> helper-text-item}}
    {{> helper-text-item-icon helper-text-item-icon--type="minus"}}
    {{#> helper-text-item-text}}This is default helper text{{/helper-text-item-text}}
  {{/helper-text-item}}
{{/helper-text}}

{{#> helper-text}}
  {{#> helper-text-item helper-text-item--modifier="pf-m-indeterminate"}}
    {{> helper-text-item-icon helper-text-item-icon--type="minus"}}
    {{#> helper-text-item-text}}This is indeterminate helper text{{/helper-text-item-text}}
  {{/helper-text-item}}
{{/helper-text}}

{{#> helper-text}}
  {{#> helper-text-item helper-text-item--modifier="pf-m-warning"}}
    {{> helper-text-item-icon helper-text-item-icon--type="exclamation-triangle"}}
    {{#> helper-text-item-text}}This is warning helper text{{/helper-text-item-text}}
  {{/helper-text-item}}
{{/helper-text}}

{{#> helper-text}}
  {{#> helper-text-item helper-text-item--modifier="pf-m-success"}}
    {{> helper-text-item-icon helper-text-item-icon--type="check-circle"}}
    {{#> helper-text-item-text}}This is success helper text{{/helper-text-item-text}}
  {{/helper-text-item}}
{{/helper-text}}

{{#> helper-text}}
  {{#> helper-text-item helper-text-item--modifier="pf-m-error"}}
    {{> helper-text-item-icon helper-text-item-icon--type="exclamation-circle"}}
    {{#> helper-text-item-text}}This is error helper text{{/helper-text-item-text}}
  {{/helper-text-item}}
{{/helper-text}}
```

### Multiple static
```hbs
{{#> helper-text}}
  {{#> helper-text-item}}
    {{#> helper-text-item-text}}This is default helper text{{/helper-text-item-text}}
  {{/helper-text-item}}
  {{#> helper-text-item}}
    {{#> helper-text-item-text}}This is another default helper text in the same block{{/helper-text-item-text}}
  {{/helper-text-item}}
  {{#> helper-text-item}}
    {{#> helper-text-item-text}}And this is more default text in the same block{{/helper-text-item-text}}
  {{/helper-text-item}}
{{/helper-text}}
```

### Dynamic
```hbs
{{#> helper-text}}
  {{#> helper-text-item helper-text-item--modifier="pf-m-dynamic"}}
    {{> helper-text-item-icon helper-text-item-icon--type="minus"}}
    {{#> helper-text-item-text}}This is default helper text{{/helper-text-item-text}}
  {{/helper-text-item}}
{{/helper-text}}

{{#> helper-text}}
  {{#> helper-text-item helper-text-item--modifier="pf-m-dynamic pf-m-indeterminate"}}
    {{> helper-text-item-icon helper-text-item-icon--type="minus"}}
    {{#> helper-text-item-text}}This is indeterminate helper text{{/helper-text-item-text}}
  {{/helper-text-item}}
{{/helper-text}}

{{#> helper-text}}
  {{#> helper-text-item helper-text-item--modifier="pf-m-dynamic pf-m-warning"}}
    {{> helper-text-item-icon helper-text-item-icon--type="exclamation-triangle"}}
    {{#> helper-text-item-text}}This is warning helper text{{/helper-text-item-text}}
  {{/helper-text-item}}
{{/helper-text}}

{{#> helper-text}}
  {{#> helper-text-item helper-text-item--modifier="pf-m-dynamic pf-m-success"}}
    {{> helper-text-item-icon helper-text-item-icon--type="check-circle"}}
    {{#> helper-text-item-text}}This is success helper text{{/helper-text-item-text}}
  {{/helper-text-item}}
{{/helper-text}}

{{#> helper-text}}
  {{#> helper-text-item helper-text-item--modifier="pf-m-dynamic pf-m-error"}}
    {{> helper-text-item-icon helper-text-item-icon--type="exclamation-circle"}}
    {{#> helper-text-item-text}}This is error helper text{{/helper-text-item-text}}
  {{/helper-text-item}}
{{/helper-text}}
```

### Dynamic list
```hbs
{{#> helper-text helper-text--type="ul" helper-text-item--type="li"}}
  {{#> helper-text-item helper-text-item--modifier="pf-m-dynamic pf-m-success"}}
    {{> helper-text-item-icon helper-text-item-icon--type="check-circle"}}
    {{#> helper-text-item-text}}Must be at least 14 characters{{/helper-text-item-text}}
  {{/helper-text-item}}
  {{#> helper-text-item helper-text-item--modifier="pf-m-dynamic pf-m-error"}}
    {{> helper-text-item-icon helper-text-item-icon--type="exclamation-circle"}}
    {{#> helper-text-item-text}}Cannot contain any variation of the word "redhat"{{/helper-text-item-text}}
  {{/helper-text-item}}
  {{#> helper-text-item helper-text-item--modifier="pf-m-dynamic pf-m-success"}}
    {{> helper-text-item-icon helper-text-item-icon--type="check-circle"}}
    {{#> helper-text-item-text}}Must include at least 3 of the following: lowercase letter, uppercase letters, numbers, symbols{{/helper-text-item-text}}
  {{/helper-text-item}}
{{/helper-text}}
```

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-helper-text` | `<div>`, `<ul>` |  Initiates the helper text component. **Required** |
| `.pf-c-helper-text__item` | `<div>`, `<li>` |  Initiates a helper text item. **Required** |
| `.pf-c-helper-text__item-icon` | `<span>` |  Initiates a helper text item icon. **Required when used in `.pf-c-helper-text__item.pf-m-dynamic`** |
| `.pf-c-helper-text__item-text` | `<span>` |  Initiates a helper text item text. **Required** |
| `.pf-m-dynamic` | `.pf-c-helper-text__item` |  Modifies a helper text item to be dynamic. For use when the item changes state as the form field the text is associated with is updated. |
| `.pf-m-indeterminate` | `.pf-c-helper-text__item` |  Modifies a helper text item for indeterminate state styles. |
| `.pf-m-warning` | `.pf-c-helper-text__item` |  Modifies a helper text item for warning state styles. |
| `.pf-m-success` | `.pf-c-helper-text__item` |  Modifies a helper text item for success state styles. |
| `.pf-m-error` | `.pf-c-helper-text__item` |  Modifies a helper text item for error state styles. |
