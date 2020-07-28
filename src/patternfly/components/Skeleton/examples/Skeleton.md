---
title: Skeleton
section: components
cssPrefix: pf-c-skeleton
beta: true
---

import './Skeleton.css'

## Examples
```hbs title=Default
{{#> skeleton}}
  {{#> skeleton-element}}
  {{/skeleton-element}}
{{/skeleton}}
```

```hbs title=Responsive-width-modifiers
{{#> skeleton}}
  {{#> skeleton-element skeleton-element--modifier="pf-m-width-10"}}
  {{/skeleton-element}}
{{/skeleton}}
<br/>
{{#> skeleton}}
  {{#> skeleton-element skeleton-element--modifier="pf-m-width-15"}}
  {{/skeleton-element}}
{{/skeleton}}
<br/>
{{#> skeleton}}
  {{#> skeleton-element skeleton-element--modifier="pf-m-width-20"}}
  {{/skeleton-element}}
{{/skeleton}}
<br/>
{{#> skeleton}}
  {{#> skeleton-element skeleton-element--modifier="pf-m-width-25"}}
  {{/skeleton-element}}
{{/skeleton}}
<br/>
{{#> skeleton}}
  {{#> skeleton-element skeleton-element--modifier="pf-m-width-30"}}
  {{/skeleton-element}}
{{/skeleton}}
<br/>
{{#> skeleton}}
  {{#> skeleton-element skeleton-element--modifier="pf-m-width-35"}}
  {{/skeleton-element}}
{{/skeleton}}
<br/>
{{#> skeleton}}
  {{#> skeleton-element skeleton-element--modifier="pf-m-width-40"}}
  {{/skeleton-element}}
{{/skeleton}}
<br/>
{{#> skeleton}}
  {{#> skeleton-element skeleton-element--modifier="pf-m-width-45"}}
  {{/skeleton-element}}
{{/skeleton}}
<br/>
{{#> skeleton}}
  {{#> skeleton-element skeleton-element--modifier="pf-m-width-50"}}
  {{/skeleton-element}}
{{/skeleton}}
<br/>
{{#> skeleton}}
  {{#> skeleton-element skeleton-element--modifier="pf-m-width-60"}}
  {{/skeleton-element}}
{{/skeleton}}
<br/>
{{#> skeleton}}
  {{#> skeleton-element skeleton-element--modifier="pf-m-width-70"}}
  {{/skeleton-element}}
{{/skeleton}}
<br/>
{{#> skeleton}}
  {{#> skeleton-element skeleton-element--modifier="pf-m-width-80"}}
  {{/skeleton-element}}
{{/skeleton}}
<br/>
{{#> skeleton}}
  {{#> skeleton-element skeleton-element--modifier="pf-m-width-90"}}
  {{/skeleton-element}}
{{/skeleton}}
<br/>
{{#> skeleton}}
  {{#> skeleton-element}}
  {{/skeleton-element}}
{{/skeleton}}
```

```hbs title=Height-modifiers
{{#> skeleton}}
  {{#> skeleton-element skeleton-element--modifier="pf-m-height-sm"}}
  {{/skeleton-element}}
{{/skeleton}}
<br/>
{{#> skeleton}}
  {{#> skeleton-element skeleton-element--modifier="pf-m-height-md"}}
  {{/skeleton-element}}
{{/skeleton}}
<br/>
{{#> skeleton}}
  {{#> skeleton-element skeleton-element--modifier="pf-m-height-lg"}}
  {{/skeleton-element}}
{{/skeleton}}
```

```hbs title=Text-modifiers
--pf-global--FontSize--4xl
{{#> skeleton}}
  {{#> skeleton-element skeleton-element--modifier="pf-m-text-4xl"}}
  {{/skeleton-element}}
{{/skeleton}}
<br/>
--pf-global--FontSize--3xl
{{#> skeleton}}
  {{#> skeleton-element skeleton-element--modifier="pf-m-text-3xl"}}
  {{/skeleton-element}}
{{/skeleton}}
<br/>
--pf-global--FontSize--2xl
{{#> skeleton}}
  {{#> skeleton-element skeleton-element--modifier="pf-m-text-2xl"}}
  {{/skeleton-element}}
{{/skeleton}}
<br/>
--pf-global--FontSize--xl
{{#> skeleton}}
  {{#> skeleton-element skeleton-element--modifier="pf-m-text-xl"}}
  {{/skeleton-element}}
{{/skeleton}}
<br/>
--pf-global--FontSize--lg
{{#> skeleton}}
  {{#> skeleton-element skeleton-element--modifier="pf-m-text-lg"}}
  {{/skeleton-element}}
{{/skeleton}}
<br/>
--pf-global--FontSize--md
{{#> skeleton}}
  {{#> skeleton-element skeleton-element--modifier="pf-m-text-md"}}
  {{/skeleton-element}}
{{/skeleton}}
<br/>
--pf-global--FontSize--sm
{{#> skeleton}}
  {{#> skeleton-element skeleton-element--modifier="pf-m-text-sm"}}
  {{/skeleton-element}}
{{/skeleton}}
```

```hbs title=Shape-modifiers
Small circle
{{#> skeleton}}
  {{#> skeleton-element skeleton-element--modifier="pf-m-circle pf-m-width-sm"}}
  {{/skeleton-element}}
{{/skeleton}}
<br/>
Medium circle
{{#> skeleton}}
  {{#> skeleton-element skeleton-element--modifier="pf-m-circle pf-m-width-md"}}
  {{/skeleton-element}}
{{/skeleton}}
<br/>
Large circle
{{#> skeleton}}
  {{#> skeleton-element skeleton-element--modifier="pf-m-circle pf-m-width-lg"}}
  {{/skeleton-element}}
{{/skeleton}}
<br/>
Small square
{{#> skeleton}}
  {{#> skeleton-element skeleton-element--modifier="pf-m-width-sm"}}
  {{/skeleton-element}}
{{/skeleton}}
<br/>
Medium square
{{#> skeleton}}
  {{#> skeleton-element skeleton-element--modifier="pf-m-width-md"}}
  {{/skeleton-element}}
{{/skeleton}}
<br/>
Large square
{{#> skeleton}}
  {{#> skeleton-element skeleton-element--modifier="pf-m-width-lg"}}
  {{/skeleton-element}}
{{/skeleton}}
<br/>
Small rectangle
{{#> skeleton}}
  {{#> skeleton-element skeleton-element--modifier="pf-m-height-sm"}}
  {{/skeleton-element}}
{{/skeleton}}
<br/>
Medium rectangle
{{#> skeleton}}
  {{#> skeleton-element skeleton-element--modifier="pf-m-height-md"}}
  {{/skeleton-element}}
{{/skeleton}}
<br/>
Large rectangle
{{#> skeleton}}
  {{#> skeleton-element skeleton-element--modifier="pf-m-height-lg"}}
  {{/skeleton-element}}
{{/skeleton}}
```


```hbs title=Card-Examples
{{#> skeleton skeleton--modifier="pf-m-padding"}}
  {{#> skeleton-container skeleton-container--modifier="pf-m-spacer-sm pf-m-padding-bottom-sm"}}
    {{#> skeleton-element skeleton-element--modifier="pf-m-height-lg"}}
    {{/skeleton-element}}
    {{#> skeleton-element skeleton-element--modifier="pf-m-height-lg pf-m-width-60"}}
    {{/skeleton-element}}
    {{#> skeleton-element skeleton-element--modifier="pf-m-height-lg pf-m-width-20"}}
    {{/skeleton-element}}
    {{#> skeleton-element skeleton-element--modifier="pf-m-height-lg pf-m-width-80"}}
    {{/skeleton-element}}
  {{/skeleton-container}}
  {{#> skeleton-container skeleton-container--modifier="pf-m-justify-items-center pf-m-padding-top-xl pf-m-padding-bottom-xl"}}
    {{#> skeleton-element skeleton-element--modifier="pf-m-circle-lg"}}
    {{/skeleton-element}}
  {{/skeleton-container}}
  {{#> skeleton-container skeleton-container--modifier="pf-m-spacer-sm pf-m-padding-top-sm"}}
    {{#> skeleton-element skeleton-element--modifier="pf-m-height-lg pf-m-width-20"}}
    {{/skeleton-element}}
    {{#> skeleton-element skeleton-element--modifier="pf-m-height-lg pf-m-width-40"}}
    {{/skeleton-element}}
  {{/skeleton-container}}
{{/skeleton}}

<br/>
<br/>

{{#> skeleton skeleton--modifier="pf-m-padding"}}
  {{#> skeleton-container skeleton-container--modifier="pf-m-justify-items-center pf-m-padding-bottom-xl"}}
    {{#> skeleton-element skeleton-element--modifier="pf-m-rectangle-md"}}
    {{/skeleton-element}}
  {{/skeleton-container}}
  {{#> skeleton-container skeleton-container--modifier="pf-m-spacer-sm"}}
    {{#> skeleton-element skeleton-element--modifier="pf-m-height-lg pf-m-width-80"}}
    {{/skeleton-element}}
    {{#> skeleton-element skeleton-element--modifier="pf-m-height-lg pf-m-width-40"}}
    {{/skeleton-element}}
    {{#> skeleton-element skeleton-element--modifier="pf-m-height-lg"}}
    {{/skeleton-element}}
  {{/skeleton-container}}
{{/skeleton}}
```

```hbs title=Table-Examples
{{#> skeleton skeleton--modifier="pf-m-padding"}}
  {{#> skeleton-container skeleton-container--modifier="pf-m-spacer-xl"}}
    {{#> skeleton-element skeleton-element--modifier="pf-m-height-xl"}}
    {{/skeleton-element}}
    {{#> skeleton-element skeleton-element--modifier="pf-m-height-xl"}}
    {{/skeleton-element}}
    {{#> skeleton-element skeleton-element--modifier="pf-m-height-xl"}}
    {{/skeleton-element}}
    {{#> skeleton-element skeleton-element--modifier="pf-m-height-xl"}}
    {{/skeleton-element}}
    {{#> skeleton-element skeleton-element--modifier="pf-m-height-xl"}}
    {{/skeleton-element}}
  {{/skeleton-container}}
{{/skeleton}}

<br/>
<br/>

{{#> skeleton skeleton--modifier="pf-m-padding"}}
  {{#> skeleton-container skeleton-container--modifier="pf-m-spacer-xl"}}
    {{#> skeleton-element skeleton-element--modifier="pf-m-height-xl pf-m-width-80"}}
    {{/skeleton-element}}
    {{#> skeleton-element skeleton-element--modifier="pf-m-height-xl pf-m-width-80"}}
    {{/skeleton-element}}
    {{#> skeleton-element skeleton-element--modifier="pf-m-height-xl pf-m-width-40"}}
    {{/skeleton-element}}
    {{#> skeleton-element skeleton-element--modifier="pf-m-height-xl pf-m-width-80"}}
    {{/skeleton-element}}
    {{#> skeleton-element skeleton-element--modifier="pf-m-height-xl pf-m-width-60"}}
    {{/skeleton-element}}
    {{#> skeleton-element skeleton-element--modifier="pf-m-height-xl pf-m-width-20"}}
    {{/skeleton-element}}
  {{/skeleton-container}}
{{/skeleton}}
```

## Documentation
### Overview

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |


### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-skeleton` | `<div>` | Initiates the skeleton component. **Required** |
| `.pf-c-skeleton__element` | `<div>` | Initiates the skeleton element. **Required** |
| `.pf-m-padding` | `.pf-c-skeleton` | Modifies the skeleton to have padding. |
| `.pf-m-spacer-[xs,sm,md,lg,xl,2xl]` | `.pf-c-skeleton__container` | Modifies the spacing between skeleton elements in the container. | `.pf-c-skeleton__container` | Modifies the skeleton container to center the elements inside of it. 
| `pf-m-justify-items-center` | `
| `.pf-m-padding-top-[xs,sm,md,lg,xl,2xl]` | `.pf-c-skeleton__container` | Modifies the padding top on the skeleton container. |
| `.pf-m-padding-bottom-[xs,sm,md,lg,xl,2xl]` | `.pf-c-skeleton__container` | Modifies the padding bottom on the skeleton container. |
| `.pf-m-height-[xs,sm,md,lg,xl,2xl]` | `.pf-c-skeleton__element` | Modifies the height of the skeleton element. |
| `.pf-m-width-[10,15,20,25,30,35,40,45,50,60,70,80,90]` | `.pf-c-skeleton__element` | Modifies the width of the skeleton element. The default is 100%. |
| `.pf-m-circle-[sm,md,lg]` | `.pf-c-skeleton__element` | Modifies the shape of the skeleton element to be a circle. |
| `.pf-m-square-[sm,md,lg]` | `.pf-c-skeleton__element` | Modifies the shape of the skeleton element to be a square. |
| `.pf-m-rectangle-[sm,md,lg]` | `.pf-c-skeleton__element` | Modifies the shape of the skeleton element to be a rectangle. |
