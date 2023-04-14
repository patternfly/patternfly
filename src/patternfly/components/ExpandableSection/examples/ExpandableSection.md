---
id: Expandable section
section: components
cssPrefix: pf-c-expandable-section
---

## Examples
### Hidden
```hbs
{{#> expandable-section}}
  {{> expandable-section-toggle}}
  {{#> expandable-section-content}}
    This content is visible only when the component is expanded.
  {{/expandable-section-content}}
{{/expandable-section}}
```

### Expanded
```hbs
{{#> expandable-section expandable-section--IsExpanded="true"}}
  {{> expandable-section-toggle}}
  {{#> expandable-section-content}}
    This content is visible only when the component is expanded.
  {{/expandable-section-content}}
{{/expandable-section}}
```

### Disclosure variation (hidden)

```hbs
{{#> expandable-section expandable-section--IsDisplayLg="true"}}
  {{> expandable-section-toggle}}
  {{#> expandable-section-content}}
    This content is visible only when the component is expanded.
  {{/expandable-section-content}}
{{/expandable-section}}
```

### Disclosure variation (expanded)

```hbs
{{#> expandable-section expandable-section--IsDisplayLg="true" expandable-section--IsExpanded="true"}}
  {{> expandable-section-toggle}}
  {{#> expandable-section-content}}
    This content is visible only when the component is expanded.
  {{/expandable-section-content}}
{{/expandable-section}}
```

### Detached toggle
```hbs
{{#> stack stack--modifier="pf-m-gap" expandable-section--id="detached-toggle" expandable-section--IsDetached="true" expandable-section--IsExpanded="true"}}
  {{#> stack-item}}
    {{#> expandable-section}}
      {{#> expandable-section-content}}
        This content is visible only when the component is expanded.
      {{/expandable-section-content}}
    {{/expandable-section}}
  {{/stack-item}}

  {{#> stack-item}}
    {{#> expandable-section expandable-section-toggle-icon--modifier="pf-m-expand-top"}}
      {{#> expandable-section-toggle}}
      {{/expandable-section-toggle}}
    {{/expandable-section}}
  {{/stack-item}}
{{/stack}}
```

### Indented
```hbs
{{#> expandable-section expandable-section--IsExpanded="true" expandable-section--IsIndented="true"}}
  {{> expandable-section-toggle}}
  {{#> expandable-section-content}}
    This content is visible only when the component is expanded.
  {{/expandable-section-content}}
{{/expandable-section}}
```

### Truncate expansion
```hbs
{{#> expandable-section expandable-section--IsTruncate="true"}}
  {{#> expandable-section-content}}
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus, diam vitae eleifend consequat, metus sapien posuere quam, ut tincidunt nunc enim eget sapien. Mauris ac dui imperdiet dolor dignissim efficitur laoreet quis erat. Proin turpis leo, malesuada eget urna et, tristique mollis odio. Ut mattis nulla lorem, elementum hendrerit nunc molestie vitae. Proin massa sem, bibendum id urna in, viverra porta neque. Ut ut mi ac lacus rhoncus mollis id quis sem. Suspendisse non justo elementum, dictum eros nec, hendrerit sapien. Mauris aliquet, est sit amet tincidunt vehicula, purus est hendrerit arcu, vitae egestas odio lorem ut lacus. In et neque non metus viverra rhoncus quis non purus. Integer id venenatis tortor. Nulla sollicitudin convallis tellus, at porta eros volutpat in. Curabitur rhoncus rhoncus nisi, sit amet tincidunt dolor efficitur vitae. Integer purus neque, porta non odio lobortis, accumsan elementum risus. Pellentesque viverra id lacus a cursus. Etiam eu pulvinar risus. Etiam ultrices nec urna id consequat.
  {{/expandable-section-content}}
  {{> expandable-section-toggle}}
{{/expandable-section}}
```

### Truncate expansion expanded
```hbs
{{#> expandable-section expandable-section--IsTruncate="true" expandable-section--IsExpanded="true"}}
  {{#> expandable-section-content}}
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus, diam vitae eleifend consequat, metus sapien posuere quam, ut tincidunt nunc enim eget sapien. Mauris ac dui imperdiet dolor dignissim efficitur laoreet quis erat. Proin turpis leo, malesuada eget urna et, tristique mollis odio. Ut mattis nulla lorem, elementum hendrerit nunc molestie vitae. Proin massa sem, bibendum id urna in, viverra porta neque. Ut ut mi ac lacus rhoncus mollis id quis sem. Suspendisse non justo elementum, dictum eros nec, hendrerit sapien. Mauris aliquet, est sit amet tincidunt vehicula, purus est hendrerit arcu, vitae egestas odio lorem ut lacus. In et neque non metus viverra rhoncus quis non purus. Integer id venenatis tortor. Nulla sollicitudin convallis tellus, at porta eros volutpat in. Curabitur rhoncus rhoncus nisi, sit amet tincidunt dolor efficitur vitae. Integer purus neque, porta non odio lobortis, accumsan elementum risus. Pellentesque viverra id lacus a cursus. Etiam eu pulvinar risus. Etiam ultrices nec urna id consequat.
  {{/expandable-section-content}}
  {{> expandable-section-toggle}}
{{/expandable-section}}
```

## Documentation
### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-expanded="true"` | `.pf-c-expandable-section__toggle` | Indicates that the expandable section content is visible. **Required** |
| `aria-expanded="false"` | `.pf-c-expandable-section__toggle` | Indicates the the expandable section content is hidden. **Required** |
| `hidden` | `.pf-c-expandable-section__content` | Indicates that the expandable section content element is hidden. Use with `aria-expanded="false"` **Required** |
| `aria-hidden="true"` | `.pf-c-expandable-section__toggle-icon` | Hides the icon from screen readers. **Required** |
| `aria-controls="[id of content element]"` | `.pf-c-expandable-section.pf-m-detached .pf-c-expandable-section__toggle` | Identifies the element controlled by the toggle button. **Required** |
| `id` | `.pf-c-expandable-section.pf-m-detached .pf-c-expandable-section__content` | Gives the content an `id` for use with `aria-controls` on `.pf-c-expandable-section__toggle`. **Required** |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-expandable-section` | `<div>` | Initiates the expandable section component. **Required** |
| `.pf-c-expandable-section__toggle` | `<button>` | Initiates the expandable section toggle. **Required** |
| `.pf-c-expandable-section__toggle-text` | `<span>` | Initiates the expandable toggle text. **Required** |
| `.pf-c-expandable-section__toggle-icon` | `<span>` | Initiates the expandable toggle icon. **Required** |
| `.pf-c-expandable-section__content` | `<div>` | Initiates the expandable section content. **Required** |
| `.pf-m-expanded` | `.pf-c-expandable-section` | Modifies the component for the expanded state. |
| `.pf-m-display-lg` | `.pf-c-expandable-section` | Modifies the styling of the component to have large display styling. |
| `.pf-m-detached` | `.pf-c-expandable-section` | Indicates that the expandable section toggle and content are detached from one another, so you can move them around independently in the markup. |
| `.pf-m-indented` | `.pf-c-expandable-section` | Indicates that the expandable section content is indented and is aligned with the start of the title text to provide visual hierarchy. |
| `.pf-m-truncate` | `.pf-c-expandable-section` | Indicates that the expandable section content is truncated by default, and not truncated when expanded. |
| `.pf-m-active` | `.pf-c-expandable-section__toggle` | Forces display of the active state of the toggle. |
| `.pf-m-expand-top` | `.pf-c-expandable-section__toggle-icon` | Modifies the toggle icon to point up when expanded. |
| `--pf-c-expandable-section--m-truncate__content--LineClamp` | `.pf-c-expandable-section.pf-m-truncate` | Modifies the number of lines to show before truncating. |
