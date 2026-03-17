---
id: Expandable section
section: components
cssPrefix: pf-v6-c-expandable-section
---

## Examples
### Hidden
```hbs
{{#> expandable-section expandable-section--id="hidden"}}
  {{#> expandable-section-toggle}}
    {{#if expandable-section--IsExpanded}}
      Show less hidden example content
    {{else}}
      Show more hidden example content
    {{/if}}
  {{/expandable-section-toggle}}
  {{#> expandable-section-content}}
    This content is visible only when the component is expanded.
  {{/expandable-section-content}}
{{/expandable-section}}
```

### Expanded
```hbs
{{#> expandable-section expandable-section--id="expanded" expandable-section--IsExpanded=true}}
  {{#> expandable-section-toggle}}
    {{#if expandable-section--IsExpanded}}
      Show less expanded example content
    {{else}}
      Show more expanded example content
    {{/if}}
  {{/expandable-section-toggle}}
  {{#> expandable-section-content}}
    This content is visible only when the component is expanded.
  {{/expandable-section-content}}
{{/expandable-section}}
```

### Indented
```hbs
{{#> expandable-section expandable-section--id="indented" expandable-section--IsExpanded=true expandable-section--IsIndented=true}}
  {{#> expandable-section-toggle}}
    {{#if expandable-section--IsExpanded}}
      Show less indented example content
    {{else}}
      Show more indented example content
    {{/if}}
  {{/expandable-section-toggle}}
  {{#> expandable-section-content}}
    This content is visible only when the component is expanded.
  {{/expandable-section-content}}
{{/expandable-section}}
```

### Disclosure variation (hidden)

```hbs
{{#> expandable-section expandable-section--id="disclosure-variation-hidden" expandable-section--IsDisplayLg=true}}
  {{#> expandable-section-toggle}}
    {{#if expandable-section--IsExpanded}}
      Show less disclosure variation example content
    {{else}}
      Show more disclosure variation example content
    {{/if}}
  {{/expandable-section-toggle}}
  {{#> expandable-section-content}}
    This content is visible only when the component is expanded.
  {{/expandable-section-content}}
{{/expandable-section}}
```

### Disclosure variation (expanded)

```hbs
{{#> expandable-section expandable-section--id="disclosure-variation-expanded" expandable-section--IsDisplayLg=true expandable-section--IsExpanded=true}}
  {{#> expandable-section-toggle}}
    {{#if expandable-section--IsExpanded}}
      Show less disclosure variation example content
    {{else}}
      Show more disclosure variation example content
    {{/if}}
  {{/expandable-section-toggle}}
  {{#> expandable-section-content}}
    This content is visible only when the component is expanded.
  {{/expandable-section-content}}
{{/expandable-section}}
```

### Disclosure variation (indented)

```hbs
{{#> expandable-section expandable-section--id="disclosure-variation-indented" expandable-section--IsDisplayLg=true expandable-section--IsExpanded=true expandable-section--IsIndented=true}}
  {{#> expandable-section-toggle}}
    {{#if expandable-section--IsExpanded}}
      Show less disclosure variation indented example content
    {{else}}
      Show more disclosure variation indented example content
    {{/if}}
  {{/expandable-section-toggle}}
  {{#> expandable-section-content}}
    This content is visible only when the component is expanded.
  {{/expandable-section-content}}
{{/expandable-section}}
```

### Detached
```hbs
{{#> stack stack--modifier="pf-m-gutter" expandable-section--id="detached-toggle" expandable-section--IsDetached=true expandable-section--IsExpanded=true expandable-section--modifier="pf-m-expand-top"}}
  {{#> stack-item}}
    {{#> expandable-section}}
      {{#> expandable-section-content}}
        This content is visible only when the component is expanded.
      {{/expandable-section-content}}
    {{/expandable-section}}
  {{/stack-item}}

  {{#> stack-item}}
    {{#> expandable-section expandable-section--IsDetached=true expandable-section--modifier="pf-m-expand-top"}}
      {{#> expandable-section-toggle}}
        {{#if expandable-section--IsExpanded}}
          Show less detached example content
        {{else}}
          Show more detached example content
        {{/if}}
      {{/expandable-section-toggle}}
    {{/expandable-section}}
  {{/stack-item}}
{{/stack}}
```

### Truncate expansion (hidden)
```hbs
{{#> expandable-section expandable-section--id="truncated-expansion-hidden" expandable-section--IsTruncate=true}}
  {{#> expandable-section-content}}
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus, diam vitae eleifend consequat, metus sapien posuere quam, ut tincidunt nunc enim eget sapien. Mauris ac dui imperdiet dolor dignissim efficitur laoreet quis erat. Proin turpis leo, malesuada eget urna et, tristique mollis odio. Ut mattis nulla lorem, elementum hendrerit nunc molestie vitae. Proin massa sem, bibendum id urna in, viverra porta neque. Ut ut mi ac lacus rhoncus mollis id quis sem. Suspendisse non justo elementum, dictum eros nec, hendrerit sapien. Mauris aliquet, est sit amet tincidunt vehicula, purus est hendrerit arcu, vitae egestas odio lorem ut lacus. In et neque non metus viverra rhoncus quis non purus. Integer id venenatis tortor. Nulla sollicitudin convallis tellus, at porta eros volutpat in. Curabitur rhoncus rhoncus nisi, sit amet tincidunt dolor efficitur vitae. Integer purus neque, porta non odio lobortis, accumsan elementum risus. Pellentesque viverra id lacus a cursus. Etiam eu pulvinar risus. Etiam ultrices nec urna id consequat.
  {{/expandable-section-content}}
  {{#> expandable-section-toggle}}
    {{#if expandable-section--IsExpanded}}
      Show less truncated content
    {{else}}
      Show more truncated content
    {{/if}}
  {{/expandable-section-toggle}}
{{/expandable-section}}
```

### Truncate expansion (expanded)
```hbs
{{#> expandable-section expandable-section--id="truncate-expansion-expanded" expandable-section--IsTruncate=true expandable-section--IsExpanded=true}}
  {{#> expandable-section-content}}
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus, diam vitae eleifend consequat, metus sapien posuere quam, ut tincidunt nunc enim eget sapien. Mauris ac dui imperdiet dolor dignissim efficitur laoreet quis erat. Proin turpis leo, malesuada eget urna et, tristique mollis odio. Ut mattis nulla lorem, elementum hendrerit nunc molestie vitae. Proin massa sem, bibendum id urna in, viverra porta neque. Ut ut mi ac lacus rhoncus mollis id quis sem. Suspendisse non justo elementum, dictum eros nec, hendrerit sapien. Mauris aliquet, est sit amet tincidunt vehicula, purus est hendrerit arcu, vitae egestas odio lorem ut lacus. In et neque non metus viverra rhoncus quis non purus. Integer id venenatis tortor. Nulla sollicitudin convallis tellus, at porta eros volutpat in. Curabitur rhoncus rhoncus nisi, sit amet tincidunt dolor efficitur vitae. Integer purus neque, porta non odio lobortis, accumsan elementum risus. Pellentesque viverra id lacus a cursus. Etiam eu pulvinar risus. Etiam ultrices nec urna id consequat.
  {{/expandable-section-content}}
  {{#> expandable-section-toggle}}
    {{#if expandable-section--IsExpanded}}
      Show less truncated content
    {{else}}
      Show more truncated content
    {{/if}}
  {{/expandable-section-toggle}}
{{/expandable-section}}
```

## Documentation
### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-expanded="true"` | `.pf-v6-c-expandable-section__toggle .pf-v6-c-button` | Indicates that the expandable section content is visible. **Required** |
| `aria-expanded="false"` | `.pf-v6-c-expandable-section__toggle .pf-v6-c-button` | Indicates the the expandable section content is hidden. **Required** |
| `hidden` | `.pf-v6-c-expandable-section__content` | Indicates that the expandable section content element is hidden. Use with `aria-expanded="false"` **Required** |
| `aria-hidden="true"` | `.pf-v6-c-expandable-section__toggle-icon` | Hides the icon from screen readers. **Required** |
| `aria-controls="[id of content element]"` | `.pf-v6-c-expandable-section.pf-m-detached .pf-v6-c-expandable-section__toggle .pf-v6-c-button` | Identifies the element controlled by the toggle button. **Required** |
| `id` | `.pf-v6-c-expandable-section.pf-m-detached .pf-v6-c-expandable-section__content` | Gives the content an `id` for use with `aria-controls` on `.pf-v6-c-expandable-section__toggle .pf-v6-c-button`. **Required** |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-expandable-section` | `<div>` | Initiates the expandable section component. **Required** |
| `.pf-v6-c-expandable-section__toggle` | `<div>` | Initiates the expandable toggle wrapper. **Required** |
| `.pf-v6-c-expandable-section__toggle-icon` | `<span>` | Initiates the expandable toggle icon. **Required** |
| `.pf-v6-c-expandable-section__content` | `<div>` | Initiates the expandable section content. **Required** |
| `.pf-m-expanded` | `.pf-v6-c-expandable-section` | Modifies the component for the expanded state. |
| `.pf-m-detached` | `.pf-v6-c-expandable-section` | Modifies the component for a detached variant. |
| `.pf-m-expand-top` | `.pf-v6-c-expandable-section__toggle-icon` | Modifies the toggle icon to point up when expanded. We recommend the new method of applying this class directly to the `.pf-v6-c-expandable-section` wrapper element. |
| `.pf-m-expand-top` | `.pf-v6-c-expandable-section.pf-m-detached` | Modifies the expandable animation and icon rotation directions for detached expandable sections. **Required** when the content is above the toggle. |
| `.pf-m-expand-bottom` | `.pf-v6-c-expandable-section.pf-m-detached` | Modifies the expandable animation direction for detached expandable sections. **Required** when the content is below the toggle. |
| `.pf-m-display-lg` | `.pf-v6-c-expandable-section` | Modifies the styling of the component to have large display styling. |
| `.pf-m-indented` | `.pf-v6-c-expandable-section` | Indicates that the expandable section content is indented and is aligned with the start of the title text to provide visual hierarchy. |
| `.pf-m-truncate` | `.pf-v6-c-expandable-section` | Indicates that the expandable section content is truncated by default, and not truncated when expanded. |
| `--pf-v6-c-expandable-section--m-truncate__content--LineClamp` | `.pf-v6-c-expandable-section.pf-m-truncate` | Modifies the number of lines to show before truncating. |
