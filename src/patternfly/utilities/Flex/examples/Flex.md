---
id: Flex
section: utility-classes
---

import './Flex.css'

## Examples
### Basic
```hbs
{{#> display display--type="flex"}}
  Display flex
{{/display}}
{{#> display display--type="inline-flex"}}
  Display inline flex
{{/display}}
```

### Direction
```hbs
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Flex row
{{/title}}
{{#> display display--type="flex" display--modifier="pf-v6-u-flex-direction-row"}}
  {{#> flex-item}}Flex item 1{{/flex-item}}
  {{#> flex-item}}Flex item 2{{/flex-item}}
  {{#> flex-item}}Flex item 3{{/flex-item}}
{{/display}}
<br>
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Flex row-reverse
{{/title}}
{{#> display display--type="flex" display--modifier="pf-v6-u-flex-direction-row-reverse"}}
  {{#> flex-item}}Flex item 1{{/flex-item}}
  {{#> flex-item}}Flex item 2{{/flex-item}}
  {{#> flex-item}}Flex item 3{{/flex-item}}
{{/display}}
<br>
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Flex column
{{/title}}
{{#> display display--type="flex" display--modifier="pf-v6-u-flex-direction-column"}}
  {{#> flex-item}}Flex item 1{{/flex-item}}
  {{#> flex-item}}Flex item 2{{/flex-item}}
  {{#> flex-item}}Flex item 3{{/flex-item}}
{{/display}}
<br>
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Flex column-reverse
{{/title}}
{{#> display display--type="flex" display--modifier="pf-v6-u-flex-direction-column-reverse"}}
  {{#> flex-item}}Flex item 1{{/flex-item}}
  {{#> flex-item}}Flex item 2{{/flex-item}}
  {{#> flex-item}}Flex item 3{{/flex-item}}
{{/display}}
```

### Justified content
```hbs
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Justify content flex-start
{{/title}}
{{#> display display--type="flex" display--modifier="pf-v6-u-justify-content-flex-start"}}
  {{#> flex-item}}Flex item 1{{/flex-item}}
  {{#> flex-item}}Flex item 2{{/flex-item}}
  {{#> flex-item}}Flex item 3{{/flex-item}}
{{/display}}
<br>
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Justify content flex-end
{{/title}}
{{#> display display--type="flex" display--modifier="pf-v6-u-justify-content-flex-end"}}
  {{#> flex-item}}Flex item 1{{/flex-item}}
  {{#> flex-item}}Flex item 2{{/flex-item}}
  {{#> flex-item}}Flex item 3{{/flex-item}}
{{/display}}
<br>
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Justify content center
{{/title}}
{{#> display display--type="flex" display--modifier="pf-v6-u-justify-content-center"}}
  {{#> flex-item}}Flex item 1{{/flex-item}}
  {{#> flex-item}}Flex item 2{{/flex-item}}
  {{#> flex-item}}Flex item 3{{/flex-item}}
{{/display}}
<br>
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Justify content space-around
{{/title}}
{{#> display display--type="flex" display--modifier="pf-v6-u-justify-content-space-around"}}
  {{#> flex-item}}Flex item 1{{/flex-item}}
  {{#> flex-item}}Flex item 2{{/flex-item}}
  {{#> flex-item}}Flex item 3{{/flex-item}}
{{/display}}
<br>
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Justify content space-between
{{/title}}
{{#> display display--type="flex" display--modifier="pf-v6-u-justify-content-space-between"}}
  {{#> flex-item}}Flex item 1{{/flex-item}}
  {{#> flex-item}}Flex item 2{{/flex-item}}
  {{#> flex-item}}Flex item 3{{/flex-item}}
{{/display}}
```

### Aligned items
```hbs
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Align items flex-start
{{/title}}
{{#> display display--type="flex" display--modifier="pf-v6-u-align-items-flex-start"}}
  {{#> flex-item}}Flex item 1{{/flex-item}}
  {{#> flex-item flex-item--modifier="ws-example-u-flex-md"}}Flex item 2{{/flex-item}}
  {{#> flex-item flex-item--modifier="ws-example-u-flex-lg"}}Flex item 3{{/flex-item}}
{{/display}}
<br>
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Align items flex-end
{{/title}}
{{#> display display--type="flex" display--modifier="pf-v6-u-align-items-flex-end"}}
  {{#> flex-item}}Flex item 1{{/flex-item}}
  {{#> flex-item flex-item--modifier="ws-example-u-flex-md"}}Flex item 2{{/flex-item}}
  {{#> flex-item flex-item--modifier="ws-example-u-flex-lg"}}Flex item 3{{/flex-item}}
{{/display}}
<br>
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Align items center
{{/title}}
{{#> display display--type="flex" display--modifier="pf-v6-u-align-items-center"}}
  {{#> flex-item}}Flex item 1{{/flex-item}}
  {{#> flex-item flex-item--modifier="ws-example-u-flex-md"}}Flex item 2{{/flex-item}}
  {{#> flex-item flex-item--modifier="ws-example-u-flex-lg"}}Flex item 3{{/flex-item}}
{{/display}}
<br>
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Align items baseline
{{/title}}
{{#> display display--type="flex" display--modifier="pf-v6-u-align-items-baseline"}}
  {{#> flex-item}}Flex item 1{{/flex-item}}
  {{#> flex-item flex-item--modifier="ws-example-u-flex-md"}}Flex item 2{{/flex-item}}
  {{#> flex-item flex-item--modifier="ws-example-u-flex-lg"}}Flex item 3{{/flex-item}}
{{/display}}
<br>
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Align items stretch
{{/title}}
{{#> display display--type="flex" display--modifier="pf-v6-u-align-items-stretch"}}
  {{#> flex-item}}Flex item 1{{/flex-item}}
  {{#> flex-item}}Flex item 2{{/flex-item}}
  {{#> flex-item}}Flex item 3{{/flex-item}}
{{/display}}
```

### Aligned self
```hbs
{{#> display display--type="flex"}}
  {{#> flex-item flex-item--modifier="pf-v6-u-align-self-flex-start"}}
    flex-start
  {{/flex-item}}
  {{#> flex-item flex-item--modifier="pf-v6-u-align-self-center"}}
    center
  {{/flex-item}}
  {{#> flex-item flex-item--modifier="pf-v6-u-align-self-flex-end"}}
    flex end
  {{/flex-item}}
  {{#> flex-item flex-item--modifier="pf-v6-u-align-self-baseline"}}
    baseline
  {{/flex-item}}
  {{#> flex-item flex-item--modifier="pf-v6-u-align-self-stretch"}}
    stretch
  {{/flex-item}}
{{/display}}
```

### Aligned content
```hbs
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Align content flex-start
{{/title}}
{{#> display display--type="flex" display--modifier="pf-v6-u-align-content-flex-start"}}
  {{#> flex-item}}Flex item 1{{/flex-item}}
  {{#> flex-item}}Flex item 2{{/flex-item}}
  {{#> flex-item}}Flex item 3{{/flex-item}}
  {{#> flex-item}}Flex item 4{{/flex-item}}
  {{#> flex-item}}Flex item 5{{/flex-item}}
{{/display}}
<br>
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Align content flex-end
{{/title}}
{{#> display display--type="flex" display--modifier="pf-v6-u-align-content-flex-end"}}
  {{#> flex-item}}Flex item 1{{/flex-item}}
  {{#> flex-item}}Flex item 2{{/flex-item}}
  {{#> flex-item}}Flex item 3{{/flex-item}}
  {{#> flex-item}}Flex item 4{{/flex-item}}
  {{#> flex-item}}Flex item 5{{/flex-item}}
{{/display}}
<br>
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Align content center
{{/title}}
{{#> display display--type="flex" display--modifier="pf-v6-u-align-content-center"}}
  {{#> flex-item}}Flex item 1{{/flex-item}}
  {{#> flex-item}}Flex item 2{{/flex-item}}
  {{#> flex-item}}Flex item 3{{/flex-item}}
  {{#> flex-item}}Flex item 4{{/flex-item}}
  {{#> flex-item}}Flex item 5{{/flex-item}}
{{/display}}
<br>
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Align content space-around
{{/title}}
{{#> display display--type="flex" display--modifier="pf-v6-u-align-content-space-around"}}
  {{#> flex-item}}Flex item 1{{/flex-item}}
  {{#> flex-item}}Flex item 2{{/flex-item}}
  {{#> flex-item}}Flex item 3{{/flex-item}}
  {{#> flex-item}}Flex item 4{{/flex-item}}
  {{#> flex-item}}Flex item 5{{/flex-item}}
{{/display}}
<br>
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Align content space-between
{{/title}}
{{#> display display--type="flex" display--modifier="pf-v6-u-align-content-space-between"}}
  {{#> flex-item}}Flex item 1{{/flex-item}}
  {{#> flex-item}}Flex item 2{{/flex-item}}
  {{#> flex-item}}Flex item 3{{/flex-item}}
  {{#> flex-item}}Flex item 4{{/flex-item}}
  {{#> flex-item}}Flex item 5{{/flex-item}}
{{/display}}
<br>
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Align content stretch
{{/title}}
{{#> display display--type="flex" display--modifier="pf-v6-u-align-content-stretch"}}
  {{#> flex-item}}Flex item 1{{/flex-item}}
  {{#> flex-item}}Flex item 2{{/flex-item}}
  {{#> flex-item}}Flex item 3{{/flex-item}}
  {{#> flex-item}}Flex item 4{{/flex-item}}
  {{#> flex-item}}Flex item 5{{/flex-item}}
{{/display}}
```

### Shrink
```hbs
{{#> display display--type="flex"}}
  {{#> flex-item flex-item--modifier="pf-v6-u-flex-shrink-0"}}
    Flex shrink 0
  {{/flex-item}}
  {{#> flex-item flex-item--modifier="pf-v6-u-flex-shrink-1"}}
    Flex shrink 1
  {{/flex-item}}
{{/display}}
```

### Grow
```hbs
{{#> display display--type="flex"}}
  {{#> flex-item flex-item--modifier="pf-v6-u-flex-grow-0"}}
    Flex grow 0
  {{/flex-item}}
  {{#> flex-item flex-item--modifier="pf-v6-u-flex-grow-1"}}
    Flex grow 1
  {{/flex-item}}
{{/display}}
```

### Basis and none
```hbs
{{#> display display--type="flex"}}
  {{#> flex-item flex-item--modifier="pf-v6-u-flex-basis-0"}}
    Flex basis 0
  {{/flex-item}}
  {{#> flex-item flex-item--modifier="pf-v6-u-flex-basis-auto"}}
    Flex basis auto
  {{/flex-item}}
  {{#> flex-item flex-item--modifier="pf-v6-u-flex-basis-none"}}
    Flex basis none
  {{/flex-item}}
  {{#> flex-item flex-item--modifier="pf-v6-u-flex-1"}}
    Flex 1
  {{/flex-item}}
{{/display}}
```

### Fill
```hbs
{{#> display display--type="flex"}}
  {{#> flex-item flex-item--modifier="pf-v6-u-flex-none"}}
    Flex none
  {{/flex-item}}
  {{#> flex-item flex-item--modifier="pf-v6-u-flex-fill"}}
    Flex fill
  {{/flex-item}}
{{/display}}
```

### Wrap
```hbs
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Flex wrap
{{/title}}
{{#> display display--type="flex" display--modifier="pf-v6-u-flex-wrap"}}
  {{#> flex-item}}Flex item 1{{/flex-item}}
  {{#> flex-item}}Flex item 2{{/flex-item}}
  {{#> flex-item}}Flex item 3{{/flex-item}}
  {{#> flex-item}}Flex item 4{{/flex-item}}
  {{#> flex-item}}Flex item 5{{/flex-item}}
  {{#> flex-item}}Flex item 6{{/flex-item}}
  {{#> flex-item}}Flex item 7{{/flex-item}}
  {{#> flex-item}}Flex item 8{{/flex-item}}
  {{#> flex-item}}Flex item 9{{/flex-item}}
  {{#> flex-item}}Flex item 10{{/flex-item}}
{{/display}}
<br>
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Flex no wrap
{{/title}}
{{#> display display--type="flex" display--modifier="pf-v6-u-flex-nowrap"}}
  {{#> flex-item}}Flex item 1{{/flex-item}}
  {{#> flex-item}}Flex item 2{{/flex-item}}
  {{#> flex-item}}Flex item 3{{/flex-item}}
  {{#> flex-item}}Flex item 4{{/flex-item}}
  {{#> flex-item}}Flex item 5{{/flex-item}}
  {{#> flex-item}}Flex item 6{{/flex-item}}
  {{#> flex-item}}Flex item 7{{/flex-item}}
  {{#> flex-item}}Flex item 8{{/flex-item}}
  {{#> flex-item}}Flex item 9{{/flex-item}}
  {{#> flex-item}}Flex item 10{{/flex-item}}
{{/display}}
<br>
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Flex wrap reverse
{{/title}}
{{#> display display--type="flex" display--modifier="pf-v6-u-flex-wrap-reverse"}}
  {{#> flex-item}}Flex item 1{{/flex-item}}
  {{#> flex-item}}Flex item 2{{/flex-item}}
  {{#> flex-item}}Flex item 3{{/flex-item}}
  {{#> flex-item}}Flex item 4{{/flex-item}}
  {{#> flex-item}}Flex item 5{{/flex-item}}
  {{#> flex-item}}Flex item 6{{/flex-item}}
  {{#> flex-item}}Flex item 7{{/flex-item}}
  {{#> flex-item}}Flex item 8{{/flex-item}}
  {{#> flex-item}}Flex item 9{{/flex-item}}
  {{#> flex-item}}Flex item 10{{/flex-item}}
{{/display}}
```

## Documentation
### Overview
For these utilities to have effect, the parent element must be set to `display: flex` or `display: inline-flex`. [Breakpoints](/tokens/all-patternfly-tokens) are optional. Breakpoint options include: base (no breakpoint value), `-on-sm`, `-on-md`, `-on-lg`, and `-on-xl`. Example: `.pf-v6-u-flex-row-on-lg`

<!-- ## Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role` or `aria` | `pf-v6-u-flex` |  accessibility notes. |
 -->

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-u-flex-direction-row{-on-[breakpoint]}`            | `*` |  Sets flex-direction: row |
| `.pf-v6-u-flex-direction-row-reverse{-on-[breakpoint]}`    | `*` |  Sets flex-direction: row-reverse |
| `.pf-v6-u-flex-direction-column{-on-[breakpoint]}`         | `*` |  Sets flex-direction: column |
| `.pf-v6-u-flex-direction-column-reverse{-on-[breakpoint]}` | `*` |  Sets flex-direction: column-reverse |
| `.pf-v6-u-justify-content-flex-start{-on-[breakpoint]}`    | `*` |  Sets justify-content: flex-start |
| `.pf-v6-u-justify-content-flex-end{-on-[breakpoint]}`      | `*` |  Sets justify-content: flex-end |
| `.pf-v6-u-justify-content-center{-on-[breakpoint]}`        | `*` |  Sets justify-content: center |
| `.pf-v6-u-justify-content-space-around{-on-[breakpoint]}`  | `*` |  Sets justify-content: space-around |
| `.pf-v6-u-justify-content-space-between{-on-[breakpoint]}` | `*` |  Sets justify-content: space-between |
| `.pf-v6-u-align-items-flex-start{-on-[breakpoint]}`        | `*` |  Sets align-items: flex-start |
| `.pf-v6-u-align-items-flex-end{-on-[breakpoint]}`          | `*` |  Sets align-items: flex-start |
| `.pf-v6-u-align-items-center{-on-[breakpoint]}`            | `*` |  Sets align-items: center |
| `.pf-v6-u-align-items-baseline{-on-[breakpoint]}`          | `*` |  Sets align-items: baseline |
| `.pf-v6-u-align-items-stretch{-on-[breakpoint]}`           | `*` |  Sets align-items: stretch |
| `.pf-v6-u-align-self-flex-start{-on-[breakpoint]}`         | `*` |  Sets align-self: flex-start |
| `.pf-v6-u-align-self-flex-end{-on-[breakpoint]}`           | `*` |  Sets align-self: flex-end |
| `.pf-v6-u-align-self-center{-on-[breakpoint]}`             | `*` |  Sets align-self: center |
| `.pf-v6-u-align-self-baseline{-on-[breakpoint]}`           | `*` |  Sets align-self: baseline |
| `.pf-v6-u-align-self-stretch{-on-[breakpoint]}`            | `*` |  Sets align-self: stretch |
| `.pf-v6-u-align-content-flex-start{-on-[breakpoint]}`      | `*` |  Sets align-content: flex-start |
| `.pf-v6-u-align-content-flex-end{-on-[breakpoint]}`        | `*` |  Sets align-content: flex-end |
| `.pf-v6-u-align-content-center{-on-[breakpoint]}`          | `*` |  Sets align-content: center |
| `.pf-v6-u-align-content-space-between{-on-[breakpoint]}`   | `*` |  Sets align-content: space-between |
| `.pf-v6-u-align-content-space-around{-on-[breakpoint]}`    | `*` |  Sets align-content: space-around |
| `.pf-v6-u-align-content-stretch{-on-[breakpoint]}`         | `*` |  Sets align-content: stretch |
| `.pf-v6-u-flex-shrink{1 or 0}{-on-[breakpoint]}`           | `*` |  Sets flex-shrink to 1 or 0 |
| `.pf-v6-u-flex-grow{1 or 0}{-on-[breakpoint]}`             | `*` |  Sets flex-grow to 1 or 0 |
| `.pf-v6-u-flex-basis{0 or auto}{-on-[breakpoint]}`         | `*` |  Sets flex-basis to 0 auto |
| `.pf-v6-u-flex-fill{-on-[breakpoint]}`                     | `*` |  Sets flex to 1 1 auto |
| `.pf-v6-u-flex-wrap{-on-[breakpoint]}`                     | `*` |  sets flex-wrap: wrap |
| `.pf-v6-u-flex-nowrap{-on-[breakpoint]}`                   | `*` |  sets flex-wrap: nowrap |
| `.pf-v6-u-flex-wrap-reverse{-on-[breakpoint]}`             | `*` |  sets flex-wrap: wrap-reverse |
