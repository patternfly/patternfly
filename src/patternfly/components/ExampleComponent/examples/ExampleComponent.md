---
id: 'Example component'
beta: true
section: components
cssPrefix: pf-v5-c-example-component
---

## Examples
### Test
```hbs
<!-- {{cardContent}}
{{#each (cardContent)}}
  {{#> example-component example-component-body--modifier='testing' }}
    {{debug}}
  {{/example-component}}
{{/each}} -->
```

### Basic
```hbs
<!-- {{#each cardContent}}
  {{#> example-component example-component-body--modifier='tes  ting' }}
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
{{/each}} -->
```
### Object iteration
```hbs
<!-- {{> example-component-object}} -->
{{#> example-component example-component-body--modifier='testing'}}
  test
{{/example-component}}
```

### Array iteration
```hbs
<!-- {{> example-component-array}} -->
```

### Array iteration 2
```hbs
<!-- {{#each (exampleArray) default="true"}}
  {{this}}
{{/each}} -->
```


## Documentation
