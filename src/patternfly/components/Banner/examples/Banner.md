---
id: 'Banner'
section: components
cssPrefix: pf-v5-c-banner
---

## Examples
### Basic
Banners can be styled with one of 9 different nonstatus colors. A nonstatus banner should only be used when the banner color does not represent status or severity.

```hbs
{{#> banner}}
  Default banner
{{/banner}}

<br>

{{#> banner banner--modifier="pf-m-red"}}
  Red banner
{{/banner}}

<br>

{{#> banner banner--modifier="pf-m-orangered"}}
  Orangered banner
{{/banner}}

<br>

{{#> banner banner--modifier="pf-m-orange"}}
  Orange banner
{{/banner}}

<br>

{{#> banner banner--modifier="pf-m-gold"}}
  Gold banner
{{/banner}}

<br>

{{#> banner banner--modifier="pf-m-green"}}
  Green banner
{{/banner}}

<br>

{{#> banner banner--modifier="pf-m-cyan"}}
  Cyan banner
{{/banner}}

<br>

{{#> banner banner--modifier="pf-m-blue"}}
  Blue banner
{{/banner}}

<br>

{{#> banner banner--modifier="pf-m-purple"}}
  Purple banner
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
When a banner is used to convey status, it is advised to add an icon that also conveys status visually, and to provide screen reader text using ` .pf-v5-screen-reader ` or an equivalent.

```hbs
{{#> banner banner--modifier="pf-m-success"}}
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

{{#> banner banner--modifier="pf-m-warning"}}
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

<br>

{{#> banner banner--modifier="pf-m-danger"}}
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

{{#> banner banner--modifier="pf-m-info"}}
  {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
    {{#> l-flex-item}}
      {{#> screen-reader}}Custom status banner:{{/screen-reader}}
      <i class="fas fa-info-circle" aria-hidden="true"></i>
    {{/l-flex-item}}
    {{#> l-flex-item}}
      Info banner
    {{/l-flex-item}}
  {{/l-flex}}
{{/banner}}

<br>

{{#> banner banner--modifier="pf-m-custom"}}
  {{#> l-flex l-flex--modifier="pf-m-space-items-sm"}}
    {{#> l-flex-item}}
      {{#> screen-reader}}Custom status banner:{{/screen-reader}}
      <i class="fas fa-bell" aria-hidden="true"></i>
    {{/l-flex-item}}
    {{#> l-flex-item}}
      Custom banner
    {{/l-flex-item}}
  {{/l-flex}}
{{/banner}}
```

## Documentation

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v5-c-banner` | `<div>` |  Initiates a banner. **Required** |
| `.pf-m-red` | `.pf-v5-c-banner` |  Modifies banner for red styling. |
| `.pf-m-orangered` | `.pf-v5-c-banner` |  Modifies banner for orangered styling. |
| `.pf-m-orange` | `.pf-v5-c-banner` |  Modifies banner for orange styling. |
| `.pf-m-gold` | `.pf-v5-c-banner` |  Modifies banner for gold styling. |
| `.pf-m-green` | `.pf-v5-c-banner` |  Modifies banner for green styling. |
| `.pf-m-cyan` | `.pf-v5-c-banner` |  Modifies banner for cyan styling. |
| `.pf-m-blue` | `.pf-v5-c-banner` |  Modifies banner for blue styling. |
| `.pf-m-purple` | `.pf-v5-c-banner` |  Modifies banner for purple styling. |
| `.pf-m-success` | `.pf-v5-c-banner` |  Modifies banner for success status styling. |
| `.pf-m-warning` | `.pf-v5-c-banner` |  Modifies banner for warning status styling. |
| `.pf-m-danger` | `.pf-v5-c-banner` |  Modifies banner for danger status styling. |
| `.pf-m-info` | `.pf-v5-c-banner` |  Modifies banner for info status styling. |
| `.pf-m-custom` | `.pf-v5-c-banner` |  Modifies banner for custom status styling. |
| `.pf-m-sticky` | `.pf-v5-c-banner` |  Modifies banner to be sticky to the top of its container. |
