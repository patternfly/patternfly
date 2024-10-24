---
id: 'Helper text'
section: components
cssPrefix: pf-v6-c-helper-text
---

## Examples

### Static

```hbs
{{> helper-text helper-text--value="This is default helper text"}}
{{> helper-text helper-text--value="This is indeterminate helper text" helper-text-item--IsIndeterminate=true}}
{{> helper-text helper-text--value="This is warning helper text" helper-text-item--IsWarning=true}}
{{> helper-text helper-text--value="This is success helper text" helper-text-item--IsSuccess=true}}
{{> helper-text helper-text--value="This is error helper text" helper-text-item--IsError=true}}
```

### Icon

```hbs
{{> helper-text helper-text--value="This is default helper text" helper-text-item--HasIcon=true}}
{{> helper-text helper-text--value="This is indeterminate helper text" helper-text-item--IsIndeterminate=true helper-text-item--HasIcon=true}}
{{> helper-text helper-text--value="This is warning helper text" helper-text-item--IsWarning=true helper-text-item--HasIcon=true}}
{{> helper-text helper-text--value="This is success helper text" helper-text-item--IsSuccess=true helper-text-item--HasIcon=true}}
{{> helper-text helper-text--value="This is error helper text" helper-text-item--IsError=true helper-text-item--HasIcon=true}}
```

### Multiple static

```hbs
{{#> helper-text}}
  {{> helper-text-item helper-text--value="This is default helper text"}}
  {{> helper-text-item helper-text--value="This is another default helper text in the same block"}}
  {{> helper-text-item helper-text--value="And this is more default text in the same block"}}
{{/helper-text}}
```

### Dynamic

```hbs
{{#> helper-text-wrapper helper-text-item--IsDynamic=true helper-text-item--HasIcon=true}}
  {{> helper-text helper-text--value="This is default helper text"}}
  {{> helper-text helper-text--value="This is indeterminate helper text" helper-text-item--IsIndeterminate=true}}
  {{> helper-text helper-text--value="This is warning helper text" helper-text-item--IsWarning=true}}
  {{> helper-text helper-text--value="This is success helper text" helper-text-item--IsSuccess=true}}
  {{> helper-text helper-text--value="This is error helper text" helper-text-item--IsError=true}}
{{/helper-text-wrapper}}
```

### Dynamic list

```hbs
{{#> helper-text helper-text-item--IsDynamic=true helper-text-item--HasIcon=true}}
  {{> helper-text-item helper-text--value='Must be at least 14 characters' helper-text-item--IsSuccess=true}}
  {{> helper-text-item helper-text--value='Cannot contain any variation of the word "redhat"' helper-text-item--IsError=true}}
  {{> helper-text-item helper-text--value='Must include at least 3 of the following: lowercase letter, uppercase letters, numbers, symbols' helper-text-item--IsSuccess=true}}
{{/helper-text}}
```

### Usage

| Class                             | Applied to                   | Outcome                                                                                                                                  |
| --------------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `.pf-v6-c-helper-text`            | `<div>`, `<ul>`              | Initiates the helper text component. **Required**                                                                                        |
| `.pf-v6-c-helper-text__item`      | `<div>`, `<li>`              | Initiates a helper text item. **Required**                                                                                               |
| `.pf-v6-c-helper-text__item-icon` | `<span>`                     | Initiates a helper text item icon. **Required when used in `.pf-v6-c-helper-text__item.pf-m-dynamic`**                                   |
| `.pf-v6-c-helper-text__item-text` | `<span>`                     | Initiates a helper text item text. **Required**                                                                                          |
| `.pf-m-dynamic`                   | `.pf-v6-c-helper-text__item` | Modifies a helper text item to be dynamic. For use when the item changes state as the form field the text is associated with is updated. |
| `.pf-m-indeterminate`             | `.pf-v6-c-helper-text__item` | Modifies a helper text item for indeterminate state styles.                                                                              |
| `.pf-m-warning`                   | `.pf-v6-c-helper-text__item` | Modifies a helper text item for warning state styles.                                                                                    |
| `.pf-m-success`                   | `.pf-v6-c-helper-text__item` | Modifies a helper text item for success state styles.                                                                                    |
| `.pf-m-error`                     | `.pf-v6-c-helper-text__item` | Modifies a helper text item for error state styles.                                                                                      |
| `.pf-m-hidden`                    | `.pf-v6-c-helper-text`       | Hides helper text.                                                                                                                       |
