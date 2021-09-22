---
id: 'Banner'
section: components
cssPrefix: pf-c-banner
---

## Examples
### Basic
```hbs
{{#> banner}}
  Default banner
{{/banner}}

<br>

{{#> banner banner--modifier="pf-m-info"}}
  Info banner
{{/banner}}

<br>

{{#> banner banner--modifier="pf-m-danger"}}
  Danger banner
{{/banner}}

<br>

{{#> banner banner--modifier="pf-m-success"}}
  Success banner
{{/banner}}

<br>

{{#> banner banner--modifier="pf-m-warning"}}
  Warning banner
{{/banner}}
```

### Banner with links

```hbs
{{#> banner banner--modifier="pf-m-info"}}
  Banner with a 
  <a href="https://www.w3.org/TR/WCAG20-TECHS/ARIA8.html#ARIA8-examples">
  link</a>
{{/banner}}
<br>
{{#> banner banner--modifier="pf-m-info"}}
  Banner with a 
  <a class="pf-m-disabled" role="link" aria-disabled="true">
  disabled link</a>
{{/banner}}
<br>
{{#> banner banner--modifier="pf-m-info"}}
  Banner with an 
  {{#> button-link button-link--attribute='href="https://www.w3.org/TR/WCAG20-TECHS/ARIA8.html#ARIA8-examples"' button-link--modifier="pf-m-inline pf-m-link"}}
  inline link{{/button-link}}
{{/banner}}
<br>
{{#> banner }}
  Banner with an 
  {{#> button button--modifier="pf-m-inline pf-m-link"}}
    inline link button
  {{/button}}
{{/banner}}
<br>
{{#> banner}}
  Banner with a 
  {{#> button button--modifier="pf-m-link pf-m-inline" button--attribute="disabled"}}
    disabled inline link button
  {{/button}}
{{/banner}}
<br>
{{#> banner banner--modifier="pf-m-warning"}}
  A warning banner with 
  {{#> button button--modifier="pf-m-link pf-m-inline"}}
    inline link button
  {{/button}}
{{/banner}}
<br>
{{#> banner banner--modifier="pf-m-danger"}}
  A long danger banner with both text and {{#> button button--IsInlineLinkSpan="true" button--attribute='tabindex="0"' button--modifier="pf-m-link pf-m-inline"}}
    long button text that needs to be a span so that it will wrap inline with the text around it.
  {{/button}}
{{/banner}}
<br>
{{#> banner banner--modifier="pf-m-info"}}
  {{#> button button--modifier="pf-m-link pf-m-inline pf-m-display-lg"}}
    Call to action in a banner
    {{#> button-icon button-icon--modifier="pf-m-end"}}
      <i class="fas fa-arrow-right" aria-hidden="true"></i>
    {{/button-icon}}
  {{/button}}
{{/banner}}
```

## Documentation
Add a modifier class to the default banner to change the presentation: `.pf-m-info`, `.pf-m-danger`, `.pf-m-success`, or `.pf-m-warning`.

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-banner` | `<div>` |  Initiates a banner. **Required** |
| `.pf-m-info` | `.pf-c-banner` |  Modifies banner for info styles. |
| `.pf-m-danger` | `.pf-c-banner` |  Modifies banner for danger styles. |
| `.pf-m-success` | `.pf-c-banner` |  Modifies banner for success styles. |
| `.pf-m-warning` | `.pf-c-banner` |  Modifies banner for warning styles. |
| `.pf-m-sticky` | `.pf-c-banner` |  Modifies banner to be sticky to the top of its container. |
