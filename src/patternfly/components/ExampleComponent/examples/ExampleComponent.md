---
id: 'Example component'
beta: true
section: components
cssPrefix: pf-v5-c-example-component
---

## Examples
### Basic
```hbs
{{#> example-component example-component-body--modifier='testing'}}
  {{#> example-component-title}}
    Basic example title
  {{/example-component-title}}
  {{#> example-component-body}}
    Basic example body
  {{/example-component-body}}
  {{#> example-component-footer}}
    Basic example footer
  {{/example-component-footer}}
{{/example-component}}
```
### Object iteration
```hbs
{{> example-component-object}}
{{#example-component example-component-body--modifier='testing'}}
  test
{{/example-component}}
{{debug}}
```

### Array iteration
```hbs
{{> example-component-array}}
```

### Array iteration 2
```hbs
{{#each (exampleArray) default="true"}}
  {{this}}
{{/each}}
```


## Documentation
