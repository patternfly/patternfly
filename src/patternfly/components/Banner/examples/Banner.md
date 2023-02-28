---
id: 'Banner'
section: components
cssPrefix: pf-c-banner
---

## Examples
### Basic
Banners can be styled with one of 5 different colors. A basic banner should only be used when the banner color does not represent status or severity.

```hbs
{{#> banner}}
  Default banner
{{/banner}}

<br>

{{#> banner banner--modifier="pf-m-blue"}}
  Blue banner 
{{/banner}}

<br>

{{#> banner banner--modifier="pf-m-red"}}
  Red banner
{{/banner}}

<br>

{{#> banner banner--modifier="pf-m-green"}}
  Green banner
{{/banner}}

<br>

{{#> banner banner--modifier="pf-m-gold"}}
  Gold banner
{{/banner}}
```

### Banner with links

```hbs
{{#> banner}}
  Default banner with a 
  <a href="https://www.w3.org/TR/WCAG20-TECHS/ARIA8.html#ARIA8-examples">
  link</a>
{{/banner}}
<br>
{{#> banner}}
  Default banner with a 
  <a class="pf-m-disabled" role="link" aria-disabled="true">
  disabled link</a>
{{/banner}}
<br>
{{#> banner banner--modifier="pf-m-blue"}}
  Blue banner with an 
  {{#> button button--modifier="pf-m-inline pf-m-link"}}
    inline link button
  {{/button}}
{{/banner}}
<br>
{{#> banner banner--modifier="pf-m-gold"}}
  Gold banner with an 
  {{#> button button--IsAnchor="true" button--url="https://www.w3.org/TR/WCAG20-TECHS/ARIA8.html#ARIA8-examples" button--modifier="pf-m-inline pf-m-link"}}
  inline link button (anchor){{/button}}
{{/banner}}
<br>
{{#> banner banner--modifier="pf-m-red"}}
  Red banner with a 
  {{#> button button--modifier="pf-m-link pf-m-inline" button--attribute="disabled"}}
    disabled inline link button
  {{/button}}
{{/banner}}
```

### Status
When a banner is used to convey status, it is advised to add an icon that also conveys status visually, and to provide screen reader text using ` .pf-screen-reader ` or an equivalent.

```hbs
{{#> banner}}
  {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
    {{#> l-flex-item}}
      {{#> screen-reader}}Default banner:{{/screen-reader}}
      <i class="fas fa-bell" aria-hidden="true"></i>
    {{/l-flex-item}}
    {{#> l-flex-item}}
      Default banner
    {{/l-flex-item}}
  {{/l-flex}}
{{/banner}}

<br>

{{#> banner banner--modifier="pf-m-blue"}}
  {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
    {{#> l-flex-item}}
      {{#> screen-reader}}Info banner:{{/screen-reader}}
      <i class="fas fa-info-circle" aria-hidden="true"></i>
    {{/l-flex-item}}
    {{#> l-flex-item}}
      Info banner
    {{/l-flex-item}}
  {{/l-flex}}
{{/banner}}

<br>

{{#> banner banner--modifier="pf-m-red"}}
  {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
    {{#> l-flex-item}}
      {{#> screen-reader}}Danger banner:{{/screen-reader}}
      <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
    {{/l-flex-item}}
    {{#> l-flex-item}}
      Danger banner
    {{/l-flex-item}}
  {{/l-flex}}
{{/banner}}

<br>

{{#> banner banner--modifier="pf-m-green"}}
  {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
    {{#> l-flex-item}}
      {{#> screen-reader}}Success banner:{{/screen-reader}}
      <i class="fas fa-check-circle" aria-hidden="true"></i>
    {{/l-flex-item}}
    {{#> l-flex-item}}
      Success banner
    {{/l-flex-item}}
  {{/l-flex}}
{{/banner}}

<br>

{{#> banner banner--modifier="pf-m-gold"}}
  {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
    {{#> l-flex-item}}
      {{#> screen-reader}}Warning banner:{{/screen-reader}}
      <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
    {{/l-flex-item}}
    {{#> l-flex-item}}
      Warning banner
    {{/l-flex-item}}
  {{/l-flex}}
{{/banner}}
```

## Documentation
Add a modifier class to the default banner to change the presentation: `.pf-m-blue`, `.pf-m-red`, `.pf-m-green`, or `.pf-m-gold`.

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-banner` | `<div>` |  Initiates a banner. **Required** |
| `.pf-m-blue` | `.pf-c-banner` |  Modifies banner for blue styling. |
| `.pf-m-red` | `.pf-c-banner` |  Modifies banner for red styling. |
| `.pf-m-green` | `.pf-c-banner` |  Modifies banner for green styling. |
| `.pf-m-gold` | `.pf-c-banner` |  Modifies banner for gold styling. |
| `.pf-m-sticky` | `.pf-c-banner` |  Modifies banner to be sticky to the top of its container. |
