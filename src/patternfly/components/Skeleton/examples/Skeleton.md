---
id: Skeleton
section: components
cssPrefix: pf-v6-c-skeleton
---

import './Skeleton.css'

## Examples

### Default
```hbs
{{#> skeleton}}
    {{#> screen-reader}}Loading default content{{/screen-reader}}
{{/skeleton}}
```

### Percentage width modifiers
```hbs
{{#> skeleton skeleton--modifier="pf-m-width-25"}}
    {{#> screen-reader}}Loading percentage with modifiers content{{/screen-reader}}
{{/skeleton}}
<br/>
{{#> skeleton skeleton--modifier="pf-m-width-33"}}
{{/skeleton}}
<br/>
{{#> skeleton skeleton--modifier="pf-m-width-50"}}
{{/skeleton}}
<br/>
{{#> skeleton skeleton--modifier="pf-m-width-66"}}
{{/skeleton}}
<br/>
{{#> skeleton skeleton--modifier="pf-m-width-75"}}
{{/skeleton}}
<br/>
{{#> skeleton}}
{{/skeleton}}
```

### Percentage height modifiers
```hbs
{{#> skeleton skeleton--modifier="pf-m-height-25"}}
    {{#> screen-reader}}Loading percentage height modifiers content{{/screen-reader}}
{{/skeleton}}
{{#> skeleton skeleton--modifier="pf-m-height-33"}}
{{/skeleton}}
{{#> skeleton skeleton--modifier="pf-m-height-50"}}
{{/skeleton}}
{{#> skeleton skeleton--modifier="pf-m-height-66"}}
{{/skeleton}}
{{#> skeleton skeleton--modifier="pf-m-height-75"}}
{{/skeleton}}
{{#> skeleton skeleton--modifier="pf-m-height-100"}}
{{/skeleton}}
```

### Text modifiers
```hbs
--pf-v6-global--FontSize--4xl
{{#> skeleton skeleton--modifier="pf-m-text-4xl"}}
    {{#> screen-reader}}Loading text modifiers content{{/screen-reader}}
{{/skeleton}}
<br/>
--pf-v6-global--FontSize--3xl
{{#> skeleton skeleton--modifier="pf-m-text-3xl"}}
{{/skeleton}}
<br/>
--pf-v6-global--FontSize--2xl
{{#> skeleton skeleton--modifier="pf-m-text-2xl"}}
{{/skeleton}}
<br/>
--pf-v6-global--FontSize--xl
{{#> skeleton skeleton--modifier="pf-m-text-xl"}}
{{/skeleton}}
<br/>
--pf-v6-global--FontSize--lg
{{#> skeleton skeleton--modifier="pf-m-text-lg"}}
{{/skeleton}}
<br/>
--pf-v6-global--FontSize--md
{{#> skeleton skeleton--modifier="pf-m-text-md"}}
{{/skeleton}}
<br/>
--pf-v6-global--FontSize--sm
{{#> skeleton skeleton--modifier="pf-m-text-sm"}}
{{/skeleton}}
```

### Static height width and shape modifiers
```hbs
Small circle
{{#> skeleton skeleton--modifier="pf-m-circle pf-m-width-sm"}}
    {{#> screen-reader}}Loading circle content{{/screen-reader}}
{{/skeleton}}
<br/>
Medium circle
{{#> skeleton skeleton--modifier="pf-m-circle pf-m-width-md"}}
{{/skeleton}}
<br/>
Large circle
{{#> skeleton skeleton--modifier="pf-m-circle pf-m-width-lg"}}
{{/skeleton}}
<br/>
Small square
{{#> skeleton skeleton--modifier="pf-m-square pf-m-width-sm"}}
    {{#> screen-reader}}Loading square content{{/screen-reader}}
{{/skeleton}}
<br/>
Medium square
{{#> skeleton skeleton--modifier="pf-m-square pf-m-width-md"}}
{{/skeleton}}
<br/>
Large square
{{#> skeleton skeleton--modifier="pf-m-square pf-m-width-lg"}}
{{/skeleton}}
<br/>
Small rectangle
{{#> skeleton skeleton--modifier="pf-m-height-sm pf-m-width-md"}}
    {{#> screen-reader}}Loading rectangle content{{/screen-reader}}
{{/skeleton}}
<br/>
Medium rectangle
{{#> skeleton skeleton--modifier="pf-m-height-md pf-m-width-lg"}}
{{/skeleton}}
<br/>
Large rectangle
{{#> skeleton skeleton--modifier="pf-m-height-lg"}}
{{/skeleton}}
```

## Documentation

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-skeleton` | `<div>` | Initiates the skeleton component. **Required** |
| `.pf-m-width-[sm, md, lg, 25, 33, 50, 66, 75]` | `.pf-v6-c-skeleton` | Modifies the width of the skeleton. The default is 100%. |
| `.pf-m-height-[sm, md, lg, 25, 33, 50, 66, 75, 100]` | `.pf-v6-c-skeleton` | Modifies the height of the skeleton. The default is the inherited font size. |
| `.pf-m-text-[sm, md, lg, xl, 2xl, 3xl, 4xl]` | `.pf-v6-c-skeleton` | Modifies the skeleton height to match the height of PatternFly's text elements. |
| `.pf-m-circle` | `.pf-v6-c-skeleton` | Modifies the border radius of the skeleton to be a circle. Use a width modifier to specify the size. |
| `.pf-m-square` | `.pf-v6-c-skeleton` | Modifies the border radius of the skeleton to be a square. Use a width modifier to specify the size. |
