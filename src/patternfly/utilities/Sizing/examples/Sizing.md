---
id: Sizing
section: utility-classes
---

import './Sizing.css'

## Examples

### Width base and percentage units

```hbs
{{#> sizing sizing--modifier="pf-v6-u-w-0"}}
  .pf-v6-u-w-0
{{/sizing}}
{{#> sizing sizing--modifier="pf-v6-u-w-25"}}
  .pf-v6-u-w-25
{{/sizing}}
{{#> sizing sizing--modifier="pf-v6-u-w-50"}}
  .pf-v6-u-w-50
{{/sizing}}
{{#> sizing sizing--modifier="pf-v6-u-w-75"}}
  .pf-v6-u-w-75
{{/sizing}}
{{#> sizing sizing--modifier="pf-v6-u-w-100"}}
  .pf-v6-u-w-100
{{/sizing}}
{{#> sizing sizing--modifier="pf-v6-u-w-initial"}}
  .pf-v6-u-w-initial (auto)
{{/sizing}}
{{#> sizing sizing--modifier="pf-v6-u-w-inherit"}}
  .pf-v6-u-w-inherit
{{/sizing}}
```

### Usage

[Breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes) is optional. Breakpoints: base (no breakpoint value), `-on-sm`, `-on-md`, `-on-lg`, and `-on-xl`. **Example .pf-v6-u-w-initial-on-lg**

| Class                                  | Applied to | Outcome                         |
| -------------------------------------- | ---------- | ------------------------------- |
| `.pf-v6-u-w-initial{-on-[breakpoint]}` | `*`        | Sets width: initial (auto)      |
| `.pf-v6-u-w-inherit{-on-[breakpoint]}` | `*`        | Sets width: inherit             |
| `.pf-v6-u-w-0{-on-[breakpoint]}`       | `*`        | Sets width: 0%                  |
| `.pf-v6-u-w-25{-on-[breakpoint]}`      | `*`        | Sets width: 25%                 |
| `.pf-v6-u-w-33{-on-[breakpoint]}`      | `*`        | Sets width: calc(100% / 3)      |
| `.pf-v6-u-w-50{-on-[breakpoint]}`      | `*`        | Sets width: 50%                 |
| `.pf-v6-u-w-66{-on-[breakpoint]}`      | `*`        | Sets width: calc(100% / 3 \* 2) |
| `.pf-v6-u-w-75{-on-[breakpoint]}`      | `*`        | Sets width: 75%                 |
| `.pf-v6-u-w-100{-on-[breakpoint]}`     | `*`        | Sets width: 100%                |

### Width viewport units

```hbs isFullscreen
{{#> sizing sizing--modifier="pf-v6-u-w-25vw"}}
  .pf-v6-u-w-25vw
{{/sizing}}
{{#> sizing sizing--modifier="pf-v6-u-w-33vw"}}
  .pf-v6-u-w-33vw
{{/sizing}}
{{#> sizing sizing--modifier="pf-v6-u-w-50vw"}}
  .pf-v6-u-w-50vw
{{/sizing}}
{{#> sizing sizing--modifier="pf-v6-u-w-66vw"}}
  .pf-v6-u-w-66vw
{{/sizing}}
{{#> sizing sizing--modifier="pf-v6-u-w-75vw"}}
  .pf-v6-u-w-75vw
{{/sizing}}
{{#> sizing sizing--modifier="pf-v6-u-w-100vw"}}
  .pf-v6-u-w-100vw
{{/sizing}}
```

### Usage

[Breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes) is optional. Breakpoints: base (no breakpoint value), -on-sm, -on-md, -on-lg, -on-xl. **Example .pf-v6-u-w-25vw-on-lg**

| Class                                | Applied to | Outcome                          |
| ------------------------------------ | ---------- | -------------------------------- |
| `.pf-v6-u-w-25vw{-on-[breakpoint]}`  | `*`        | Sets width: 25vw                 |
| `.pf-v6-u-w-33vw{-on-[breakpoint]}`  | `*`        | Sets width: calc(100vw / 3)      |
| `.pf-v6-u-w-50vw{-on-[breakpoint]}`  | `*`        | Sets width: 50vw                 |
| `.pf-v6-u-w-66vw{-on-[breakpoint]}`  | `*`        | Sets width: calc(100vw / 3 \* 2) |
| `.pf-v6-u-w-75vw{-on-[breakpoint]}`  | `*`        | Sets width: 75vw                 |
| `.pf-v6-u-w-100vw{-on-[breakpoint]}` | `*`        | Sets width: 100vw                |

### Height base and percentage units

```hbs
{{#> sizing sizing--modifier="pf-v6-u-h-0 pf-v6-u-display-inline-block"}}
  .pf-v6-u-h-0
{{/sizing}}
{{#> sizing sizing--modifier="pf-v6-u-h-25 pf-v6-u-display-inline-block"}}
  .pf-v6-u-h-25
{{/sizing}}
{{#> sizing sizing--modifier="pf-v6-u-h-50 pf-v6-u-display-inline-block"}}
  .pf-v6-u-h-50
{{/sizing}}
{{#> sizing sizing--modifier="pf-v6-u-h-75 pf-v6-u-display-inline-block"}}
  .pf-v6-u-h-75
{{/sizing}}
{{#> sizing sizing--modifier="pf-v6-u-h-100 pf-v6-u-display-inline-block"}}
  .pf-v6-u-h-100
{{/sizing}}
{{#> sizing sizing--modifier="pf-v6-u-h-initial pf-v6-u-display-inline-block"}}
  .pf-v6-u-h-initial
{{/sizing}}
{{#> sizing sizing--modifier="pf-v6-u-h-inherit pf-v6-u-display-inline-block"}}
  .pf-v6-u-h-inherit
{{/sizing}}
```

### Usage

[Breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes) is optional. Breakpoints: base (no breakpoint value), -on-sm, -on-md, -on-lg, -on-xl. **Example .pf-v6-u-h-initial-on-lg**

| Class                                  | Applied to | Outcome                          |
| -------------------------------------- | ---------- | -------------------------------- |
| `.pf-v6-u-h-initial{-on-[breakpoint]}` | `*`        | Sets height: initial (auto)      |
| `.pf-v6-u-h-inherit{-on-[breakpoint]}` | `*`        | Sets height: inherit             |
| `.pf-v6-u-h-0{-on-[breakpoint]}`       | `*`        | Sets height: 0%                  |
| `.pf-v6-u-h-25{-on-[breakpoint]}`      | `*`        | Sets height: 25%                 |
| `.pf-v6-u-h-33{-on-[breakpoint]}`      | `*`        | Sets height: calc(100% / 3)      |
| `.pf-v6-u-h-50{-on-[breakpoint]}`      | `*`        | Sets height: 50%                 |
| `.pf-v6-u-h-66{-on-[breakpoint]}`      | `*`        | Sets height: calc(100% / 3 \* 2) |
| `.pf-v6-u-h-75{-on-[breakpoint]}`      | `*`        | Sets height: 75%                 |
| `.pf-v6-u-h-100{-on-[breakpoint]}`     | `*`        | Sets height: 100%                |

### Height viewport units

```hbs isFullscreen
{{#> sizing sizing--modifier="pf-v6-u-h-25vh pf-v6-u-display-inline-block"}}
  .pf-v6-u-h-25vh
{{/sizing}}
{{#> sizing sizing--modifier="pf-v6-u-h-33vh pf-v6-u-display-inline-block"}}
  .pf-v6-u-h-33vh
{{/sizing}}
{{#> sizing sizing--modifier="pf-v6-u-h-50vh pf-v6-u-display-inline-block"}}
  .pf-v6-u-h-50vh
{{/sizing}}
{{#> sizing sizing--modifier="pf-v6-u-h-66vh pf-v6-u-display-inline-block"}}
  .pf-v6-u-h-66vh
{{/sizing}}
{{#> sizing sizing--modifier="pf-v6-u-h-75vh pf-v6-u-display-inline-block"}}
  .pf-v6-u-h-75vh
{{/sizing}}
{{#> sizing sizing--modifier="pf-v6-u-h-100vh pf-v6-u-display-inline-block"}}
  .pf-v6-u-h-100vh
{{/sizing}}
```

### Usage

[Breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes) is optional. Breakpoints: base (no breakpoint value), -on-sm, -on-md, -on-lg, -on-xl. **Example .pf-v6-u-h-25vh-on-lg**

| Class                                | Applied to | Outcome                           |
| ------------------------------------ | ---------- | --------------------------------- |
| `.pf-v6-u-h-25vh{-on-[breakpoint]}`  | `*`        | Sets height: 25vh                 |
| `.pf-v6-u-h-33vh{-on-[breakpoint]}`  | `*`        | Sets height: calc(100vh / 3)      |
| `.pf-v6-u-h-50vh{-on-[breakpoint]}`  | `*`        | Sets height: 50vh                 |
| `.pf-v6-u-h-66vh{-on-[breakpoint]}`  | `*`        | Sets height: calc(100vh / 3 \* 2) |
| `.pf-v6-u-h-75vh{-on-[breakpoint]}`  | `*`        | Sets height: 75vh                 |
| `.pf-v6-u-h-100vh{-on-[breakpoint]}` | `*`        | Sets height: 100vh                |

### Min width

```hbs
{{#> sizing-min-max sizing-min-max--modifier="pf-v6-u-min-width" sizing-min-max--attribute='style="--pf-v6-u-min-width--MinWidth: 50ch;"'}}
  Min-width 50ch example
{{/sizing-min-max}}
```

### Max width

```hbs
{{#> sizing-min-max sizing-min-max--modifier="pf-v6-u-max-width" sizing-min-max--attribute='style="--pf-v6-u-max-width--MaxWidth: 50ch;"'}}
  Max-width 50ch example
{{/sizing-min-max}}
```

### Min and max width

```hbs
{{#> sizing-min-max sizing-min-max--modifier="pf-v6-u-min-width pf-v6-u-max-width" sizing-min-max--attribute='style="--pf-v6-u-min-width--MinWidth: 30ch; --pf-v6-u-max-width--MaxWidth: 50ch;"'}}
  Min-width 30ch, max-width 50ch example
{{/sizing-min-max}}
```

### Responsive width control

```hbs
{{#> sizing-min-max sizing-min-max--modifier="pf-v6-u-min-width pf-v6-u-max-width" sizing-min-max--attribute='style="--pf-v6-u-min-width--MinWidth: 20ch; --pf-v6-u-max-width--MaxWidth: 30ch; --pf-v6-u-max-width--MaxWidth-on-md: 50ch; --pf-v6-u-max-width--MaxWidth-on-xl: 70ch;"'}}
  Min-width 20ch, max-width 30ch, max-width-on-md 50ch, max-width-on-xl 70ch example
{{/sizing-min-max}}
```

### Usage

| Class                | Applied to | Outcome                                                                 |
| -------------------- | ---------- | ----------------------------------------------------------------------- |
| `.pf-v6-u-min-width` | `*`        | Sets min-width: `var(--pf-v6-u-min-width--MinWidth{-on-[breakpoint]})`. |
| `.pf-v6-u-max-width` | `*`        | Sets min-width: `var(--pf-v6-u-max-width--MaxWidth{-on-[breakpoint]})`. |

[Breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes) is optional. Breakpoints: base (no breakpoint value), -on-sm, -on-md, -on-lg, -on-xl. **Example --pf-v6-u-min-width--MinWidth-on-lg**

| Custom property                                            | Applied to           | Outcome                                 |
| ---------------------------------------------------------- | -------------------- | --------------------------------------- |
| `--pf-v6-u-min-width--MinWidth{-on-[breakpoint]}: {width}` | `.pf-v6-u-min-width` | Modifies the min width custom property. |
| `--pf-v6-u-max-width--MaxWidth{-on-[breakpoint]}: {width}` | `.pf-v6-u-max-width` | Modifies the max width custom property. |

### Min height

```hbs
{{#> sizing-min-max sizing-min-max--modifier="pf-v6-u-min-height" sizing-min-max--attribute='style="--pf-v6-u-min-height--MinHeight: 50ch;"'}}
  Min-height 50ch example
{{/sizing-min-max}}
```

### Max height

```hbs
{{#> sizing-min-max sizing-min-max--modifier="pf-v6-u-max-height" sizing-min-max--attribute='style="--pf-v6-u-max-height--MaxHeight: 50ch;"'}}
  Max-height 50ch example
{{/sizing-min-max}}
```

### Min and max height

```hbs
{{#> sizing-min-max sizing-min-max--modifier="pf-v6-u-min-height pf-v6-u-max-height" sizing-min-max--attribute='style="--pf-v6-u-min-height--MinHeight: 30ch; --pf-v6-u-max-height--MaxHeight: 50ch;"'}}
  Min-height 30ch, max-height 50ch example
{{/sizing-min-max}}
```

### Responsive height control

```hbs
{{#> sizing-min-max sizing-min-max--modifier="pf-v6-u-min-height pf-v6-u-max-height" sizing-min-max--attribute='style="--pf-v6-u-min-height--MinHeight: 20ch; --pf-v6-u-max-height--MaxHeight: 30ch; --pf-v6-u-max-height--MaxHeight-on-md: 50ch; --pf-v6-u-max-height--MaxHeight-on-xl: 70ch;"'}}
  Min-height 20ch, max-height 30ch, max-height-on-md 50ch, max-height-on-xl 70ch example
{{/sizing-min-max}}
```

### Usage

| Class                 | Applied to | Outcome                                                                    |
| --------------------- | ---------- | -------------------------------------------------------------------------- |
| `.pf-v6-u-min-height` | `*`        | Sets min-height: `var(--pf-v6-u-min-height--MinHeight{-on-[breakpoint]})`. |
| `.pf-v6-u-max-height` | `*`        | Sets max-height: `var(--pf-v6-u-max-height--MaxHeight{-on-[breakpoint]})`. |

[Breakpoint](/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes) is optional. Breakpoints: base (no breakpoint value), -on-sm, -on-md, -on-lg, -on-xl. **Example --pf-v6-u-min-height--MinHeight-on-lg**

| Custom property                                               | Applied to            | Outcome                                  |
| ------------------------------------------------------------- | --------------------- | ---------------------------------------- |
| `--pf-v6-u-min-height--MinHeight{-on-[breakpoint]}: {height}` | `.pf-v6-u-min-height` | Modifies the min height custom property. |
| `--pf-v6-u-max-height--MaxHeight{-on-[breakpoint]}: {height}` | `.pf-v6-u-max-height` | Modifies the max height custom property. |
