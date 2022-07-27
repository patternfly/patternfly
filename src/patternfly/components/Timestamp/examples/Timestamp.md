---
id: Timestamp
beta: true
section: components
cssPrefix: pf-c-timestamp
---

## Examples

### Basic

```hbs
{{#> timestamp}}
  {{#> timestamp-text timestamp-text--attribute='datetime="2019-01-21T21:38"'}}
    Thursday, 21 January 2019, 9:38 PM EST
  {{/timestamp-text}}
{{/timestamp}}

<br/>
<br/>

{{#> timestamp}}
  {{#> timestamp-text timestamp-text--attribute='datetime="2019-01-21T21:38"'}}
    21 January 2019, 9:38 PM EST
  {{/timestamp-text}}
{{/timestamp}}

<br/>
<br/>

{{#> timestamp}}
  {{#> timestamp-text timestamp-text--attribute='datetime="2019-01-21T21:38"'}}
    21 Jan. 2019, 9:38 PM EST
  {{/timestamp-text}}
{{/timestamp}}

<br/>
<br/>

{{#> timestamp}}
  {{#> timestamp-text timestamp-text--attribute='datetime="2022-07-15T10:00"'}}
    1 hour ago 
  {{/timestamp-text}}
{{/timestamp}}

<br/>
<br/>

{{#> timestamp}}
  {{#> timestamp-text timestamp-text--attribute='datetime="2022-07-21"'}}
    Tomorrow
  {{/timestamp-text}}
{{/timestamp}}
```

## Documentation

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-timestamp` | `<span>` | Creates a timestamp. **Required** |
| `.pf-c-timestamp__text` | `<time>` | Creates the visual text of the timestamp. **Required** |
| `.pf-m-help-text`| `.pf-c-timestamp` | Modifies styling for a timestamp that has help text. |