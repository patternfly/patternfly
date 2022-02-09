---
id: Gallery
section: layouts
cssPrefix: pf-l-gallery
---

import './Gallery.css'

## Examples
### Basic
```hbs
{{#> gallery}}
  {{#> gallery-item}}content{{/gallery-item}}
  {{#> gallery-item}}content{{/gallery-item}}
  {{#> gallery-item}}content{{/gallery-item}}
  {{#> gallery-item}}content{{/gallery-item}}
  {{#> gallery-item}}content{{/gallery-item}}
{{/gallery}}
```

### With gutter
```hbs
{{#> gallery gallery--modifier="pf-m-gutter"}}
  {{#> gallery-item}}content{{/gallery-item}}
  {{#> gallery-item}}content{{/gallery-item}}
  {{#> gallery-item}}content{{/gallery-item}}
  {{#> gallery-item}}content{{/gallery-item}}
  {{#> gallery-item}}content{{/gallery-item}}
{{/gallery}}
```

### Grid template minmax() width customization

Grid template columms min value can be applied to <code>.pf-l-gallery</code>.  Min-width is set inline as `--pf-l-gallery--GridTemplateColumns--min{-on-[breakpoint]}: {width}`.

### Min width modified gallery
```hbs
{{#> gallery gallery--modifier="pf-m-gutter" gallery--attribute='style="--pf-l-gallery--GridTemplateColumns--min: 150px;"'}}
  {{#> gallery-item}}content{{/gallery-item}}
  {{#> gallery-item}}content{{/gallery-item}}
  {{#> gallery-item}}content{{/gallery-item}}
  {{#> gallery-item}}content{{/gallery-item}}
  {{#> gallery-item}}content{{/gallery-item}}
{{/gallery}}
```

### Max width modified gallery
```hbs
{{#> gallery gallery--modifier="pf-m-gutter" gallery--attribute='style="--pf-l-gallery--GridTemplateColumns--max: 300px;"'}}
  {{#> gallery-item}}content{{/gallery-item}}
  {{#> gallery-item}}content{{/gallery-item}}
  {{#> gallery-item}}content{{/gallery-item}}
  {{#> gallery-item}}content{{/gallery-item}}
  {{#> gallery-item}}content{{/gallery-item}}
{{/gallery}}
```

### Min width modified gallery, responsive updates
```hbs
{{#> gallery gallery--modifier="pf-m-gutter" gallery--attribute='style="--pf-l-gallery--GridTemplateColumns--min-on-md: 100px; --pf-l-gallery--GridTemplateColumns--min-on-lg: 150px; --pf-l-gallery--GridTemplateColumns--min-on-xl: 200px; --pf-l-gallery--GridTemplateColumns--min-on-2xl: 300px;"'}}
  {{#> gallery-item}}content{{/gallery-item}}
  {{#> gallery-item}}content{{/gallery-item}}
  {{#> gallery-item}}content{{/gallery-item}}
  {{#> gallery-item}}content{{/gallery-item}}
  {{#> gallery-item}}content{{/gallery-item}}
{{/gallery}}
```

### Max width modified gallery, responsive updates
```hbs
{{#> gallery gallery--modifier="pf-m-gutter" gallery--attribute='style="--pf-l-gallery--GridTemplateColumns--max-on-md: 280px; --pf-l-gallery--GridTemplateColumns--max-on-lg: 320px; --pf-l-gallery--GridTemplateColumns--max-on-2xl: 400px;"'}}
  {{#> gallery-item}}content{{/gallery-item}}
  {{#> gallery-item}}content{{/gallery-item}}
  {{#> gallery-item}}content{{/gallery-item}}
  {{#> gallery-item}}content{{/gallery-item}}
  {{#> gallery-item}}content{{/gallery-item}}
{{/gallery}}
```

### Min and max width modified gallery, responsive updates
```hbs
{{#> gallery gallery--modifier="pf-m-gutter" gallery--attribute='style="--pf-l-gallery--GridTemplateColumns--min: 100%; --pf-l-gallery--GridTemplateColumns--min-on-md: 100px; --pf-l-gallery--GridTemplateColumns--max-on-md: 200px; --pf-l-gallery--GridTemplateColumns--min-on-xl: 300px; --pf-l-gallery--GridTemplateColumns--max-on-xl: 1fr;"'}}
  {{#> gallery-item}}content{{/gallery-item}}
  {{#> gallery-item}}content{{/gallery-item}}
  {{#> gallery-item}}content{{/gallery-item}}
  {{#> gallery-item}}content{{/gallery-item}}
  {{#> gallery-item}}content{{/gallery-item}}
{{/gallery}}
```

### List type
```hbs
{{#> gallery gallery--modifier="pf-m-gutter" gallery--type="ul" gallery-item--type="li"}}
  {{#> gallery-item}}content{{/gallery-item}}
  {{#> gallery-item}}content{{/gallery-item}}
  {{#> gallery-item}}content{{/gallery-item}}
  {{#> gallery-item}}content{{/gallery-item}}
  {{#> gallery-item}}content{{/gallery-item}}
{{/gallery}}
```

## Documentation
### Overview
The gallery layout is designed so that all of its children are of uniform size, display horizontally, and wrap responsively.

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-l-gallery` |  `<div>` |  Initializes a Gallery layout |
| `.pf-l-gallery__item` | `<div>` |  Explicitly sets the child for the gallery. This class isn't necessary, but it is included to keep inline with BEM convention, and to provide an entity that will later be used for applying modifiers. |
| `.pf-m-gutter` | `.pf-l-gallery` | Adds space between children by using the globally defined gutter value. |
| `--pf-l-gallery--GridTemplateColumns--min{-on-[breakpoint]}: {width}` | `.pf-l-gallery` | Modifies the min value of `grid-template-columns` declaration at the optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
| `--pf-l-gallery--GridTemplateColumns--max{-on-[breakpoint]}: {width}` | `.pf-l-gallery` | Modifies the max value of `grid-template-columns` declaration at the optional [breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes). |
