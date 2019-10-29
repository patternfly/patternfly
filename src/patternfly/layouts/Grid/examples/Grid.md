---
title: Grid
section: layouts
cssPrefix: pf-l-grid
---

import './Grid.css'

## Examples
```hbs title=Smart-(responsive)
{{#> grid grid--modifier="pf-m-all-6-col-on-sm pf-m-all-4-col-on-md pf-m-all-2-col-on-lg pf-m-all-1-col-on-xl"}}
  {{#> grid-item}}
    item 1
  {{/grid-item}}
  {{#> grid-item}}
    item 2
  {{/grid-item}}
  {{#> grid-item}}
    item 3
  {{/grid-item}}
  {{#> grid-item}}
    item 4
  {{/grid-item}}
  {{#> grid-item}}
    item 5
  {{/grid-item}}
  {{#> grid-item}}
    item 6
  {{/grid-item}}
  {{#> grid-item}}
    item 7
  {{/grid-item}}
  {{#> grid-item}}
    item 8
  {{/grid-item}}
  {{#> grid-item}}
    item 9
  {{/grid-item}}
  {{#> grid-item}}
    item 10
  {{/grid-item}}  
  {{#> grid-item}}
    item 11
  {{/grid-item}}
  {{#> grid-item}}
    item 12
  {{/grid-item}}
{{/grid}}
```

```hbs title=Smart-with-overrides-(responsive)
{{#> grid grid--modifier="pf-m-all-6-col-on-sm pf-m-all-4-col-on-md pf-m-all-2-col-on-lg pf-m-all-1-col-on-xl"}}
  {{#> grid-item grid-item--modifier="pf-m-8-col-on-sm pf-m-4-col-on-lg pf-m-6-col-on-xl"}}
    item 1
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col-on-sm pf-m-8-col-on-lg pf-m-6-col-on-xl"}}
    item 2
  {{/grid-item}}
  {{#> grid-item}}
    item 3
  {{/grid-item}}
  {{#> grid-item}}
    item 4
  {{/grid-item}}
  {{#> grid-item}}
    item 5
  {{/grid-item}}
  {{#> grid-item}}
    item 6
  {{/grid-item}}
  {{#> grid-item}}
    item 7
  {{/grid-item}}
  {{#> grid-item}}
    item 8
  {{/grid-item}}
  {{#> grid-item}}
    item 9
  {{/grid-item}}
  {{#> grid-item}}
    item 10
  {{/grid-item}}  
  {{#> grid-item}}
    item 11
  {{/grid-item}}
  {{#> grid-item}}
    item 12
  {{/grid-item}}
  {{#> grid-item}}
    item 13
  {{/grid-item}}  
  {{#> grid-item}}
    item 14
  {{/grid-item}}  
{{/grid}}
```

```hbs title=Base 
{{#> grid}}
  {{#> grid-item grid-item--modifier="pf-m-12-col"}}
      12 col
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-11-col"}}
      11 col 
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
      1 col 
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-10-col"}}
      10 col 
  {{/grid-item}}    
  {{#> grid-item grid-item--modifier="pf-m-2-col"}}
      2 col 
  {{/grid-item}}    
  {{#> grid-item grid-item--modifier="pf-m-9-col"}}
      9 col 
  {{/grid-item}}    
  {{#> grid-item grid-item--modifier="pf-m-3-col"}}
      3 col 
  {{/grid-item}}    
  {{#> grid-item grid-item--modifier="pf-m-8-col"}}
      8 col
  {{/grid-item}}    
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
      4 col
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-7-col"}}
      7 col
  {{/grid-item}}  
  {{#> grid-item grid-item--modifier="pf-m-5-col"}}
      5 col
  {{/grid-item}}  
{{/grid}}
```

```hbs title=Gutter
{{#> grid grid--modifier="pf-m-gutter"}}
  {{#> grid-item grid-item--modifier="pf-m-12-col"}}
      12 col
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-11-col"}}
      11 col 
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
      1 col 
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-10-col"}}
      10 col 
  {{/grid-item}}    
  {{#> grid-item grid-item--modifier="pf-m-2-col"}}
      2 col 
  {{/grid-item}}    
  {{#> grid-item grid-item--modifier="pf-m-9-col"}}
      9 col 
  {{/grid-item}}    
  {{#> grid-item grid-item--modifier="pf-m-3-col"}}
      3 col 
  {{/grid-item}}    
{{/grid}}
```
```hbs title=Row-gutter
{{#> grid grid--modifier="pf-m-gutter-rows"}}
  {{#> grid-item grid-item--modifier="pf-m-12-col"}}
      12 col
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-11-col"}}
      11 col 
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
      1 col 
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-10-col"}}
      10 col 
  {{/grid-item}}    
  {{#> grid-item grid-item--modifier="pf-m-2-col"}}
      2 col 
  {{/grid-item}}    
  {{#> grid-item grid-item--modifier="pf-m-9-col"}}
      9 col 
  {{/grid-item}}    
  {{#> grid-item grid-item--modifier="pf-m-3-col"}}
      3 col 
  {{/grid-item}}    
{{/grid}}
```
```hbs title=Column-gutter
{{#> grid grid--modifier="pf-m-gutter-columns"}}
  {{#> grid-item grid-item--modifier="pf-m-12-col"}}
      12 col
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-11-col"}}
      11 col 
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
      1 col 
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-10-col"}}
      10 col 
  {{/grid-item}}    
  {{#> grid-item grid-item--modifier="pf-m-2-col"}}
      2 col 
  {{/grid-item}}    
  {{#> grid-item grid-item--modifier="pf-m-9-col"}}
      9 col 
  {{/grid-item}}    
  {{#> grid-item grid-item--modifier="pf-m-3-col"}}
      3 col 
  {{/grid-item}}    
{{/grid}}
```

```hbs title=Responsive
{{#> grid}}
  {{#> grid-item grid-item--modifier="pf-m-1-col pf-m-6-col-on-md pf-m-11-col-on-xl"}}
      1 / 6 / 11 col
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-11-col pf-m-6-col-on-md pf-m-1-col-on-xl"}}
      11 / 6 / 1 col
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-2-col pf-m-6-col-on-md pf-m-10-col-on-xl"}}
      2 / 6 / 10 col 
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-10-col pf-m-6-col-on-md pf-m-2-col-on-xl"}}
      10 / 6 / 2 col 
  {{/grid-item}}    
  {{#> grid-item grid-item--modifier="pf-m-3-col pf-m-6-col-on-md pf-m-9-col-on-xl"}}
      3 / 6 / 9 col 
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-9-col pf-m-6-col-on-md pf-m-3-col-on-xl"}}
      9 / 6 / 3 col 
  {{/grid-item}}   
  {{#> grid-item grid-item--modifier="pf-m-4-col pf-m-6-col-on-md pf-m-8-col-on-xl"}}
      4 / 6 / 8 col 
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-8-col pf-m-6-col-on-md pf-m-4-col-on-xl"}}
      8 / 6 / 4 col 
  {{/grid-item}}   
  {{#> grid-item grid-item--modifier="pf-m-5-col pf-m-6-col-on-md pf-m-7-col-on-xl"}}
      5 / 6 / 7 col 
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-7-col pf-m-6-col-on-md pf-m-5-col-on-xl"}}
      7 / 6 / 5 col 
  {{/grid-item}} 
{{/grid}}
```

```hbs title=Nested
{{#> grid}}
  {{#> grid-item grid-item--modifier="pf-m-12-col"}}
    12 col
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-10-col"}}
    10 col 
      {{#> grid grid--modifier="pf-m-gutter"}}
        {{#> grid-item grid-item--modifier="pf-m-6-col"}}
            6 col 
        {{/grid-item}}    
        {{#> grid-item grid-item--modifier="pf-m-6-col"}}
            6 col 
        {{/grid-item}}    
        {{#> grid-item grid-item--modifier="pf-m-4-col"}}
            4 col 
        {{/grid-item}}    
        {{#> grid-item grid-item--modifier="pf-m-8-col"}}
            8 col 
        {{/grid-item}}    
      {{/grid}}      
  {{/grid-item}}    
  {{#> grid-item grid-item--modifier="pf-m-2-col"}}
      2 col 
  {{/grid-item}}   
{{/grid}}
```

```hbs title=Offsets
{{#> grid grid--modifier="pf-m-gutter"}}
  {{#> grid-item grid-item--modifier="pf-m-11-col pf-m-offset-1-col"}}
      11 col, offset 1
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-10-col pf-m-offset-2-col"}}
      10 col, offset 2
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-9-col pf-m-offset-3-col"}}
      9 col, offset 3
  {{/grid-item}}    
  {{#> grid-item grid-item--modifier="pf-m-8-col pf-m-offset-4-col"}}
      8 col, offset 4
  {{/grid-item}}  
{{/grid}}
```

```hbs title=Row-spans
{{#> grid grid--modifier="pf-m-gutter"}}
  {{#> grid-item grid-item--modifier="pf-m-8-col"}}
    8 col 
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col pf-m-2-row"}}
    4 col, 2 row
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-2-col pf-m-3-row"}}
    2 col, 3 row
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-2-col"}}
    2 col 
  {{/grid-item}}  
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    4 col 
  {{/grid-item}}  
  {{#> grid-item grid-item--modifier="pf-m-2-col"}}
    2 col 
  {{/grid-item}}  
  {{#> grid-item grid-item--modifier="pf-m-2-col"}}
    2 col 
  {{/grid-item}}  
  {{#> grid-item grid-item--modifier="pf-m-2-col"}}
    2 col 
  {{/grid-item}}  
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    4 col 
  {{/grid-item}}  
  {{#> grid-item grid-item--modifier="pf-m-2-col"}}
    2 col 
  {{/grid-item}}  
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    4 col 
  {{/grid-item}}  
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    4 col 
  {{/grid-item}}  
{{/grid}}
```
### Aligning and justifying

#### Justify-items

```hbs title=Justify-items-start
{{#> grid grid--modifier="pf-m-justify-items-start pf-m-gutter"}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 1
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 2
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 3
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 4
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 5
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 6
  {{/grid-item}}
{{/grid}}
```
```hbs title=Justify-items-center
{{#> grid grid--modifier="pf-m-justify-items-center pf-m-gutter"}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 1
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 2
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 3
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 4
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 5
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 6
  {{/grid-item}}
{{/grid}}
```
```hbs title=Justify-items-end
{{#> grid grid--modifier="pf-m-justify-items-end pf-m-gutter"}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 1
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 2
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 3
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 4
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 5
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 6
  {{/grid-item}}
{{/grid}}
```
```hbs title=Justify-items-stretch
{{#> grid grid--modifier="pf-m-justify-items-stretch pf-m-gutter"}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 1
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 2
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 3
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 4
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 5
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 6
  {{/grid-item}}
{{/grid}}
```
#### Align items
```hbs title=align-items-start
{{#> grid grid--modifier="pf-m-align-items-start pf-m-gutter"}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 1
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 2
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 3
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 4
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 5
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 6
  {{/grid-item}}
{{/grid}}
``` 
```hbs title=Align-items-center
{{#> grid grid--modifier="pf-m-align-items-center pf-m-gutter"}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 1
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 2
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 3
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 4
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 5
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 6
  {{/grid-item}}
{{/grid}}
```
```hbs title=Align-items-end
{{#> grid grid--modifier="pf-m-align-items-end pf-m-gutter"}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 1
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 2
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 3
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 4
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 5
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 6
  {{/grid-item}}
{{/grid}}
```
```hbs title=Align-items-stretch
{{#> grid grid--modifier="pf-m-align-items-stretch pf-m-gutter"}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 1
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 2
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 3
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 4
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 5
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 6
  {{/grid-item}}
{{/grid}}
```
#### Justify content
#### For all `justify-content` grids, `grid-template-columns` is set to `initial` to allow customization over the column count.
```hbs title=Justify-content-start
{{#> grid grid--modifier="pf-m-justify-content-start pf-m-gutter"}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 1
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 2
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 3
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 4
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 5
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 6
  {{/grid-item}}
{{/grid}}
```
```hbs title=Justify-content-center
{{#> grid grid--modifier="pf-m-justify-content-center pf-m-gutter"}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 1
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 2
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 3
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 4
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 5
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 6
  {{/grid-item}}
{{/grid}}
```
```hbs title=Justify-content-end
{{#> grid grid--modifier="pf-m-justify-content-end pf-m-gutter"}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 1
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 2
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 3
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 4
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 5
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 6
  {{/grid-item}}
{{/grid}}
```
```hbs title=Justify-content-stretch
{{#> grid grid--modifier="pf-m-justify-content-stretch pf-m-gutter"}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 1
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 2
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 3
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 4
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 5
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 6
  {{/grid-item}}
{{/grid}}
```
```hbs title=Justify-content-space-around
{{#> grid grid--modifier="pf-m-justify-content-space-around pf-m-grid-auto-flow-column pf-m-gutter"}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 1
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 2
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 3
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 4
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 5
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 6
  {{/grid-item}}
{{/grid}}
```
```hbs title=Justify-content-space-between
{{#> grid grid--modifier="pf-m-justify-content-space-between pf-m-grid-auto-flow-column pf-m-gutter"}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 1
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 2
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 3
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 4
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 5
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 6
  {{/grid-item}}
{{/grid}}
```
```hbs title=Justify-content-space-evenly
{{#> grid grid--modifier="pf-m-justify-content-space-evenly pf-m-grid-auto-flow-column pf-m-gutter"}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 1
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 2
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 3
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 4
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 5
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 6
  {{/grid-item}}
{{/grid}}
```
```hbs title=Grid-auto-flow-column
{{#> grid grid--modifier="pf-m-grid-auto-flow-column pf-m-justify-content-start pf-m-gutter"}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 1
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 2
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 3
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 4
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 5
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 6
  {{/grid-item}}
{{/grid}}
```
```hbs title=grid-auto-flow-row
{{#> grid grid--modifier="pf-m-grid-auto-flow-row pf-m-justify-content-start pf-m-gutter"}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 1
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 2
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 3
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 4
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 5
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 6
  {{/grid-item}}
{{/grid}}
```
```hbs title=grid-auto-flow-dense
{{#> grid grid--modifier="pf-m-grid-auto-flow-dense pf-m-justify-content-start pf-m-gutter"}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 1
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 2
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-2-col"}}
    item 3
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 4
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-1-col"}}
    item 5
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-3-col"}}
    item 6
  {{/grid-item}}
{{/grid}}
```
#### Align content
```hbs title=align-content-start
{{#> grid grid--modifier="pf-m-align-content-start pf-m-gutter"}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 1
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 2
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 3
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 4
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 5
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 6
  {{/grid-item}}
{{/grid}}
``` 
```hbs title=align-content-center
{{#> grid grid--modifier="pf-m-align-content-center pf-m-gutter"}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 1
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 2
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 3
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 4
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 5
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 6
  {{/grid-item}}
{{/grid}}
```
```hbs title=align-content-end
{{#> grid grid--modifier="pf-m-align-content-end pf-m-gutter"}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 1
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 2
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 3
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 4
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 5
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 6
  {{/grid-item}}
{{/grid}}
```
```hbs title=align-content-stretch
{{#> grid grid--modifier="pf-m-align-content-stretch pf-m-gutter"}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 1
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 2
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 3
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 4
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 5
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 6
  {{/grid-item}}
{{/grid}}
```
```hbs title=align-content-space-around
{{#> grid grid--modifier="pf-m-align-content-space-around pf-m-gutter"}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 1
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 2
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 3
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 4
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 5
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 6
  {{/grid-item}}
{{/grid}}
```
```hbs title=align-content-space-between
{{#> grid grid--modifier="pf-m-align-content-space-between pf-m-gutter"}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 1
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 2
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 3
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 4
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 5
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 6
  {{/grid-item}}
{{/grid}}
```
```hbs title=align-content-space-evenly
{{#> grid grid--modifier="pf-m-align-content-space-evenly pf-m-gutter"}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 1
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 2
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 3
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 4
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 5
  {{/grid-item}}
  {{#> grid-item grid-item--modifier="pf-m-4-col"}}
    item 6
  {{/grid-item}}
{{/grid}}
```
#### Justify self
```hbs title=justify-self-start
{{#> grid grid--modifier="pf-m-gutter"}}
  {{#> grid-item grid-item--modifier="pf-m-justify-self-start"}}
    item 1
  {{/grid-item}}
{{/grid}}
```
```hbs title=justify-self-center
{{#> grid grid--modifier="pf-m-gutter"}}
  {{#> grid-item grid-item--modifier="pf-m-justify-self-center"}}
    item 1
  {{/grid-item}}
{{/grid}}
```
```hbs title=justify-self-end
{{#> grid grid--modifier="pf-m-gutter"}}
  {{#> grid-item grid-item--modifier="pf-m-justify-self-end"}}
    item 1
  {{/grid-item}}
{{/grid}}
```
```hbs title=justify-self-stretch
{{#> grid grid--modifier="pf-m-gutter"}}
  {{#> grid-item grid-item--modifier="pf-m-justify-self-stretch"}}
    item 1
  {{/grid-item}}
{{/grid}}
```
#### Align self
```hbs title=align-self-start
{{#> grid grid--modifier="pf-m-gutter"}}
  {{#> grid-item grid-item--modifier="pf-m-align-self-start pf-m-4-col"}}
    item 1
  {{/grid-item}}
{{/grid}}
```
```hbs title=align-self-center
{{#> grid grid--modifier="pf-m-gutter"}}
  {{#> grid-item grid-item--modifier="pf-m-align-self-center pf-m-4-col"}}
    item 1
  {{/grid-item}}
{{/grid}}
```
```hbs title=align-self-end
{{#> grid grid--modifier="pf-m-gutter"}}
  {{#> grid-item grid-item--modifier="pf-m-align-self-end pf-m-4-col"}}
    item 1
  {{/grid-item}}
{{/grid}}
```
```hbs title=align-self-stretch
{{#> grid grid--modifier="pf-m-gutter"}}
  {{#> grid-item grid-item--modifier="pf-m-align-self-stretch pf-m-4-col"}}
    item 1
  {{/grid-item}}
{{/grid}}
```

## Documentation
### Overiew
The grid layout is based on CSS Grid’s two-dimensional system of columns and rows. This layout styles the parent element and its children to achieve responsive column and row spans as well as gutters.

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-l-grid` | `<div>` | Initializes the grid layout. |
| `.pf-l-grid__item` | `<div>` | Explicitly sets a child of the grid. This class isn't necessary, but it is included to keep inline with BEM convention, and to provide an entity that will later be used for applying modifiers. |
| `.pf-m-gutter` | `.pf-l-grid` | Adds space between children by using the globally defined gutter value. |
| `.pf-m-gutter-rows` | `.pf-l-grid` | Adds space between children rows by using the globally defined gutter value. |
| `.pf-m-gutter-columns` | `.pf-l-grid` | Adds space between children columns by using the globally defined gutter value. |
| `.pf-m-all-{1-12}-col{-on-[breakpoint]}` | `.pf-l-grid` | Defines grid item size on grid container. |
| `.pf-m-{1-12}-col{-on-[breakpoint]}` | `.pf-l-grid__item` | Defines grid item size.  Although not required, they are strongly suggested. If not used, grid item will default to 12 col. |
| `.pf-m-{2-x}-row{-on-[breakpoint]}` | `.pf-l-grid__item` | Defines grid item row span.  For row spans to function correctly, the value of of the current row plus the grid items to span must be equal to or less than 12. Example: .pf-m-8-col.pf-m-2-row + .pf-m-4-col + .pf-m-4-col. There is no limit to number of spanned rows. |
| `.pf-m-justify-items-start` | `.pf-l-grid` | Modifies justify-items property to start. |
| `.pf-m-justify-items-center` | `.pf-l-grid` | Modifies justify-items property to center. |
| `.pf-m-justify-items-end` | `.pf-l-grid` | Modifies justify-items property to end. |
| `.pf-m-justify-items-stretch` | `.pf-l-grid` | Modifies justify-items property to stretch. |
| `.pf-m-align-items-start` | `.pf-l-grid` | Modifies align-items property to start. |
| `.pf-m-align-items-center` | `.pf-l-grid` | Modifies align-items property to center. |
| `.pf-m-align-items-end` | `.pf-l-grid` | Modifies align-items property to end. |
| `.pf-m-align-items-stretch` | `.pf-l-grid` | Modifies align-items property to stretch. |
| `.pf-m-justify-content-start` | `.pf-l-grid` | Modifies justify-content property to start. |
| `.pf-m-justify-content-center` | `.pf-l-grid` | Modifies justify-content property to center. |
| `.pf-m-justify-content-end` | `.pf-l-grid` | Modifies justify-content property to end. |
| `.pf-m-justify-content-stretch` | `.pf-l-grid` | Modifies justify-content property to stretch. |
| `.pf-m-justify-content-space-around` | `.pf-l-grid` | Modifies justify-content property to space-around. |
| `.pf-m-justify-content-space-between` | `.pf-l-grid` | Modifies justify-content property to space-between. |
| `.pf-m-justify-content-space-evenly` | `.pf-l-grid` | Modifies justify-content property to space-evenly. |
| `.pf-m-align-content-start` | `.pf-l-grid` | Modifies align-content property to start. |
| `.pf-m-align-content-center` | `.pf-l-grid` | Modifies align-content property to center. |
| `.pf-m-align-content-end` | `.pf-l-grid` | Modifies align-content property to end. |
| `.pf-m-align-content-stretch` | `.pf-l-grid` | Modifies align-content property to stretch. |
| `.pf-m-align-content-space-around` | `.pf-l-grid` | Modifies align-content property to space-around. |
| `.pf-m-align-content-space-between` | `.pf-l-grid` | Modifies align-content property to space-between. |
| `.pf-m-align-content-space-evenly` | `.pf-l-grid` | Modifies align-content property to space-evenly. |
| `.pf-m-grid-auto-flow-column` | `.pf-l-grid` | Modifies grid-auto-flow property to column. |
| `.pf-m-grid-auto-flow-row` | `.pf-l-grid` | Modifies grid-auto-flow property to row. |
| `.pf-m-grid-auto-flow-dense` | `.pf-l-grid` | Modifies grid-auto-flow property to dense. |
| `.pf-m-justify-self-start` | `.pf-l-grid__item` | Modifies justify-self property to start. |
| `.pf-m-justify-self-center` | `.pf-l-grid__item` | Modifies justify-self property to center. |
| `.pf-m-justify-self-end` | `.pf-l-grid__item` | Modifies justify-self property to end. |
| `.pf-m-justify-self-stretch` | `.pf-l-grid__item` | Modifies justify-self property to stretch. |
| `.pf-m-align-self-start` | `.pf-l-grid__item` | Modifies align-self property to start. |
| `.pf-m-align-self-center` | `.pf-l-grid__item` | Modifies align-self property to center. |
| `.pf-m-align-self-end` | `.pf-l-grid__item` | Modifies align-self property to end. |
| `.pf-m-align-self-stretch` | `.pf-l-grid__item` | Modifies align-self property to stretch. |
