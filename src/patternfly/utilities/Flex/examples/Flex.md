---
title: Flex
section: utilities
---

## Examples
```hbs title=Enable-flex
{{#> display display--type="flex"}}
  Display flex
{{/display}}
{{#> display display--type="inline-flex"}}
  Display inline flex
{{/display}}
```

```hbs title=Flex-direction
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Flex row
{{/title}}
{{#> display display--type="flex" display--modifier="pf-u-flex-direction-row"}}
  <div>
    Flex item 1
  </div>
  <div>
    Flex item 2
  </div>
  <div>
    Flex item 3
  </div>
{{/display}}
<br>
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Flex row-reverse
{{/title}}
{{#> display display--type="flex" display--modifier="pf-u-flex-direction-row-reverse"}}
  <div>
    Flex item 1
  </div>
  <div>
    Flex item 2
  </div>
  <div>
    Flex item 3
  </div>
{{/display}}
<br>
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Flex column
{{/title}}
{{#> display display--type="flex" display--modifier="pf-u-flex-direction-column"}}
  <div>
    Flex item 1
  </div>
  <div>
    Flex item 2
  </div>
  <div>
    Flex item 3
  </div>
{{/display}}
<br>
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Flex column-reverse
{{/title}}
{{#> display display--type="flex" display--modifier="pf-u-flex-direction-column-reverse"}}
  <div>
    Flex item 1
  </div>
  <div>
    Flex item 2
  </div>
  <div>
    Flex item 3
  </div>
{{/display}}
```

```hbs title=Flex-justify-content
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Justify content flex-start
{{/title}}
{{#> display display--type="flex" display--modifier="pf-u-justify-content-flex-start"}}
  <div>
    Flex item 1
  </div>
  <div>
    Flex item 2
  </div>
  <div>
    Flex item 3
  </div>
{{/display}}
<br>
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Justify content flex-end
{{/title}}
{{#> display display--type="flex" display--modifier="pf-u-justify-content-flex-end"}}
  <div>
    Flex item 1
  </div>
  <div>
    Flex item 2
  </div>
  <div>
    Flex item 3
  </div>
{{/display}}
<br>
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Justify content center
{{/title}}
{{#> display display--type="flex" display--modifier="pf-u-justify-content-center"}}
  <div>
    Flex item 1
  </div>
  <div>
    Flex item 2
  </div>
  <div>
    Flex item 3
  </div>
{{/display}}
<br>
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Justify content space-around
{{/title}}
{{#> display display--type="flex" display--modifier="pf-u-justify-content-space-around"}}
  <div>
    Flex item 1
  </div>
  <div>
    Flex item 2
  </div>
  <div>
    Flex item 3
  </div>
{{/display}}
<br>
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Justify content space-between
{{/title}}
{{#> display display--type="flex" display--modifier="pf-u-justify-content-space-between"}}
  <div>
    Flex item 1
  </div>
  <div>
    Flex item 2
  </div>
  <div>
    Flex item 3
  </div>
{{/display}}
```

```hbs title=Flex-align-items
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Align items flex-start
{{/title}}
{{#> display display--type="flex" display--modifier="pf-u-align-items-flex-start Documentation-container-tall"}}
  <div>
    Flex item 1
  </div>
  <div>
    Flex item 2
  </div>
  <div>
    Flex item 3
  </div>
{{/display}}
<br>
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Align items flex-end
{{/title}}
{{#> display display--type="flex" display--modifier="pf-u-align-items-flex-end Documentation-container-tall"}}
  <div>
    Flex item 1
  </div>
  <div>
    Flex item 2
  </div>
  <div>
    Flex item 3
  </div>
{{/display}}
<br>
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Align items center
{{/title}}
{{#> display display--type="flex" display--modifier="pf-u-align-items-center Documentation-container-tall"}}
  <div>
    Flex item 1
  </div>
  <div>
    Flex item 2
  </div>
  <div>
    Flex item 3
  </div>
{{/display}}
<br>
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Align items baseline
{{/title}}
{{#> display display--type="flex" display--modifier="pf-u-align-items-baseline Documentation-container-tall"}}
  <div>
    Flex item 1
  </div>
  <div>
    Flex item 2
  </div>
  <div>
    Flex item 3
  </div>
{{/display}}
<br>
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Align items stretch
{{/title}}
{{#> display display--type="flex" display--modifier="pf-u-align-items-stretch Documentation-container-tall"}}
  <div>
    Flex item 1
  </div>
  <div>
    Flex item 2
  </div>
  <div>
    Flex item 3
  </div>
{{/display}}
```

```hbs title=Flex-align-self
{{#> display display--type="flex" display--modifier="Documentation-container-tall"}}
  <div class="pf-u-align-self-flex-start">
    flex-start
  </div>
  <div class="pf-u-align-self-center">
    center
  </div>
  <div class="pf-u-align-self-flex-end">
    flex end
  </div>
  <div class="pf-u-align-self-baseline">
    baseline
  </div>
  <div class="pf-u-align-self-stretch">
    stretch
  </div>
{{/display}}
```

```hbs title=Flex-align-content
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Align content flex-start
{{/title}}
{{#> display display--type="flex" display--modifier="pf-u-align-content-flex-start Documentation-container-xtall"}}
  <div>
    Flex item 1
  </div>
  <div>
    Flex item 2
  </div>
  <div>
    Flex item 3
  </div>
  <div>
    Flex item 4
  </div>
  <div>
    Flex item 5
  </div>
{{/display}}
<br>
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Align content flex-end
{{/title}}
{{#> display display--type="flex" display--modifier="pf-u-align-content-flex-end Documentation-container-xtall"}}
  <div>
    Flex item 1
  </div>
  <div>
    Flex item 2
  </div>
  <div>
    Flex item 3
  </div>
  <div>
    Flex item 4
  </div>
  <div>
    Flex item 5
  </div>
{{/display}}
<br>
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Align content center
{{/title}}
{{#> display display--type="flex" display--modifier="pf-u-align-content-center Documentation-container-xtall"}}
  <div>
    Flex item 1
  </div>
  <div>
    Flex item 2
  </div>
  <div>
    Flex item 3
  </div>
  <div>
    Flex item 4
  </div>
  <div>
    Flex item 5
  </div>
{{/display}}
<br>
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Align content space-around
{{/title}}
{{#> display display--type="flex" display--modifier="pf-u-align-content-space-around Documentation-container-xtall"}}
  <div>
    Flex item 1
  </div>
  <div>
    Flex item 2
  </div>
  <div>
    Flex item 3
  </div>
  <div>
    Flex item 4
  </div>
  <div>
    Flex item 5
  </div>
{{/display}}
<br>
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Align content space-between
{{/title}}
{{#> display display--type="flex" display--modifier="pf-u-align-content-space-between Documentation-container-xtall"}}
  <div>
    Flex item 1
  </div>
  <div>
    Flex item 2
  </div>
  <div>
    Flex item 3
  </div>
  <div>
    Flex item 4
  </div>
  <div>
    Flex item 5
  </div>
{{/display}}
<br>
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Align content stretch
{{/title}}
{{#> display display--type="flex" display--modifier="pf-u-align-content-stretch Documentation-container-xtall"}}
  <div>
    Flex item 1
  </div>
  <div>
    Flex item 2
  </div>
  <div>
    Flex item 3
  </div>
  <div>
    Flex item 4
  </div>
  <div>
    Flex item 5
  </div>
{{/display}}
```

```hbs title=Flex-shrink
{{#> display display--type="flex"}}
  <div class="pf-u-flex-shrink-0">
    Flex shrink 0
  </div> 
  <div class="pf-u-flex-shrink-1">
    Flex shrink 1
  </div> 
{{/display}}
```

```hbs title=Flex-grow
{{#> display display--type="flex"}}
  <div class="pf-u-flex-grow-0">
    Flex grow 0
  </div> 
  <br>
  <div class="pf-u-flex-grow-1">
    Flex grow 1
  </div> 
{{/display}}
```

```hbs title=Flex-basis-and-flex-none
{{#> display display--type="flex"}}
  <div class="pf-u-flex-basis-0">
    Flex basis 0
  </div> 
  <div class="pf-u-flex-basis-auto">
    Flex basis auto
  </div> 
  <div class="pf-u-flex-none">
    Flex none
  </div> 
  <div class="pf-u-flex-1">
    Flex 1
  </div> 
{{/display}}
```

```hbs title=Flex-fill
{{#> display display--type="flex"}}
  <div class="pf-u-flex-none">
    Flex none
  </div> 
  <div class="pf-u-flex-fill">
    Flex fill
  </div> 
{{/display}}
```

```hbs title=Flex-wrap
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Flex wrap
{{/title}}
{{#> display display--type="flex" display--modifier="pf-u-flex-wrap"}}
  <div>
    Flex item 1
  </div>
  <div>
    Flex item 2
  </div>
  <div>
    Flex item 3
  </div>
{{/display}}
<br>
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Flex no wrap
{{/title}}
{{#> display display--type="flex" display--modifier="pf-u-flex-nowrap"}}
  <div>
    Flex item 1
  </div>
  <div>
    Flex item 2
  </div>
  <div>
    Flex item 3
  </div>
{{/display}}
<br>
{{#> title titleType="h2" title--modifier="pf-m-lg"}}
  Flex wrap reverse
{{/title}}
{{#> display display--type="flex" display--modifier="pf-u-flex-wrap-reverse"}}
  <div>
    Flex item 1
  </div>
  <div>
    Flex item 2
  </div>
  <div>
    Flex item 3
  </div>
{{/display}}
<br>
```

## Documentation
### Overiew
For these utilities to have effect, the parent element must be set to `display: flex` or `display: inline-flex`. Breakpoint is optional. Breakpoints: base (no breakpoint value), -on-sm, -on-md, -on-lg, -on-xl. **Example .pf-u-flex-row-on-lg**

<!-- ## Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role` or `aria` | `pf-u-flex` |  accessibility notes. |
 -->

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-u-flex-direction-row{-on-[breakpoint]}`            | `*` |  Sets flex-direction: row |
| `.pf-u-flex-direction-row-reverse{-on-[breakpoint]}`    | `*` |  Sets flex-direction: row-reverse |
| `.pf-u-flex-direction-column{-on-[breakpoint]}`         | `*` |  Sets flex-direction: column |
| `.pf-u-flex-direction-column-reverse{-on-[breakpoint]}` | `*` |  Sets flex-direction: column-reverse |
| `.pf-u-justify-content-flex-start{-on-[breakpoint]}`    | `*` |  Sets justify-content: flex-start |
| `.pf-u-justify-content-flex-end{-on-[breakpoint]}`      | `*` |  Sets justify-content: flex-end |
| `.pf-u-justify-content-center{-on-[breakpoint]}`        | `*` |  Sets justify-content: center |
| `.pf-u-justify-content-space-around{-on-[breakpoint]}`  | `*` |  Sets justify-content: space-around |
| `.pf-u-justify-content-space-between{-on-[breakpoint]}` | `*` |  Sets justify-content: space-between |
| `.pf-u-align-items-flex-start{-on-[breakpoint]}`        | `*` |  Sets align-items: flex-start |
| `.pf-u-align-items-flex-end{-on-[breakpoint]}`          | `*` |  Sets align-items: flex-start |
| `.pf-u-align-items-center{-on-[breakpoint]}`            | `*` |  Sets align-items: center |
| `.pf-u-align-items-baseline{-on-[breakpoint]}`          | `*` |  Sets align-items: baseline |
| `.pf-u-align-items-stretch{-on-[breakpoint]}`           | `*` |  Sets align-items: stretch |
| `.pf-u-align-self-flex-start{-on-[breakpoint]}`         | `*` |  Sets align-self: flex-start |
| `.pf-u-align-self-flex-end{-on-[breakpoint]}`           | `*` |  Sets align-self: flex-end |
| `.pf-u-align-self-center{-on-[breakpoint]}`             | `*` |  Sets align-self: center |
| `.pf-u-align-self-baseline{-on-[breakpoint]}`           | `*` |  Sets align-self: baseline |
| `.pf-u-align-self-stretch{-on-[breakpoint]}`            | `*` |  Sets align-self: stretch |
| `.pf-u-align-content-flex-start{-on-[breakpoint]}`      | `*` |  Sets align-content: flex-start |
| `.pf-u-align-content-flex-end{-on-[breakpoint]}`        | `*` |  Sets align-content: flex-end |
| `.pf-u-align-content-center{-on-[breakpoint]}`          | `*` |  Sets align-content: center |
| `.pf-u-align-content-space-between{-on-[breakpoint]}`   | `*` |  Sets align-content: space-between |
| `.pf-u-align-content-space-around{-on-[breakpoint]}`    | `*` |  Sets align-content: space-around |
| `.pf-u-align-content-stretch{-on-[breakpoint]}`         | `*` |  Sets align-content: stretch |
| `.pf-u-flex-shrink{1 or 0}{-on-[breakpoint]}`           | `*` |  Sets flex-shrink to 1 or 0 |
| `.pf-u-flex-grow{1 or 0}{-on-[breakpoint]}`             | `*` |  Sets flex-grow to 1 or 0 |
| `.pf-u-flex-basis{0 or auto}{-on-[breakpoint]}`         | `*` |  Sets flex-basis to 0 auto |
| `.pf-u-flex-fill{-on-[breakpoint]}`                     | `*` |  Sets flex to 1 1 auto |
| `.pf-u-flex-wrap{-on-[breakpoint]}`                     | `*` |  sets flex-wrap: wrap |
| `.pf-u-flex-nowrap{-on-[breakpoint]}`                   | `*` |  sets flex-wrap: nowrap |
| `.pf-u-flex-wrap-reverse{-on-[breakpoint]}`             | `*` |  sets flex-wrap: wrap-reverse |
