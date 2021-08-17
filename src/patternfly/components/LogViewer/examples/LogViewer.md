---
id: 'Log viewer'
beta: true
section: extensions
cssPrefix: pf-c-log-viewer
---

import './LogViewer.css';

## Examples

### Basic
```hbs
{{#> log-viewer log-viewer--id="log-viewer-basic-example" log-viewer--attribute='style="--pf-c-log-viewer__index--Width: 75px"'}}
  {{> __log-viewer-toolbar menu--IsHidden="true"}}
  {{> __log-viewer-main}}
{{/log-viewer}}
```

### With line numbers
```hbs
{{#> log-viewer log-viewer--id="log-viewer-line-number-example" log-viewer--HasLineNumbers="true" log-viewer--attribute='style="--pf-c-log-viewer__index--Width: 75px"'}}
  {{> __log-viewer-toolbar menu--IsHidden="true"}}
  {{> __log-viewer-main}}
{{/log-viewer}}
```

### With text wrapping
```hbs
{{#> log-viewer log-viewer--id="log-viewer-text-wrap-example" log-viewer--HasLineNumbers="true" log-viewer--TextWraps="true" log-viewer--attribute='style="--pf-c-log-viewer__index--Width: 75px"'}}
  {{> __log-viewer-toolbar menu--IsHidden="true"}}
  {{> __log-viewer-main}}
{{/log-viewer}}
```

### With search results
```hbs
{{#> log-viewer log-viewer--id="log-viewer-search-results-example" log-viewer--HasLineNumbers="true" log-viewer--IsMatch="true" log-viewer--attribute='style="--pf-c-log-viewer__index--Width: 75px;"'}}
  {{> __log-viewer-toolbar menu--IsHidden="true"}}
  {{> __log-viewer-main}}
{{/log-viewer}}
```

### With max height
```hbs
{{#> log-viewer log-viewer--id="log-viewer-max-height-example" log-viewer--HasLineNumbers="true" log-viewer--attribute='style="--pf-c-log-viewer__index--Width: 75px; --pf-c-log-viewer--MaxHeight: 300px;"'}}
  {{> __log-viewer-toolbar menu--IsHidden="true"}}
  {{> __log-viewer-main}}
{{/log-viewer}}
```

### With dropdown, drilldown, search expanded
```hbs
{{#> log-viewer log-viewer--id="log-viewer-dropdowns-expanded-example" log-viewer--HasLineNumbers="true" log-viewer--attribute='style="--pf-c-log-viewer__index--Width: 75px"'}}
  {{> __log-viewer-toolbar dropdown--IsExpanded="true"}}
  {{> __log-viewer-main}}
{{/log-viewer}}
```

### With popover open
```hbs
{{#> log-viewer log-viewer--id="log-viewer-popover-expanded-example" log-viewer--HasLineNumbers="true" log-viewer--attribute='style="--pf-c-log-viewer__index--Width: 75px"'}}
  {{> __log-viewer-toolbar menu--IsHidden="true"}}
  {{> __log-viewer-main}}
{{/log-viewer}}
{{#> popover popover--modifier="pf-m-bottom" popover--attribute='aria-labelledby="popover-bottom-header" aria-describedby="popover-bottom-body"'}}
  {{#> popover-content}}
      {{#> button button--modifier="pf-m-plain" button--attribute='aria-label="Close"'}}
        <i class="fas fa-times" aria-hidden="true"></i>
      {{/button}}
      {{#> title titleType="h1" title--modifier="pf-m-md" title--attribute='id="popover-bottom-header"'}}
        Clear this log?
      {{/title}}
    {{#> popover-body popover-body--attribute='id="popover-bottom-body"'}}
      Any current log data will be lost.
    {{/popover-body}}
    {{#> popover-footer}}
      {{#> button button--modifier="pf-m-link"}}
        Clear
      {{/button}}
      {{#> button button--modifier="pf-m-link"}}
        Cancel
      {{/button}}
    {{/popover-footer}}
  {{/popover-content}}
{{/popover}}
```

### Dark
```hbs
{{#> log-viewer log-viewer--id="log-viewer-line-number-example" log-viewer--IsMatch="true" log-viewer--modifier="pf-m-dark" log-viewer--HasLineNumbers="true" log-viewer--attribute='style="--pf-c-log-viewer__index--Width: 75px"'}}
  {{> __log-viewer-toolbar menu--IsHidden="true"}}
  {{> __log-viewer-main}}
{{/log-viewer}}
```

## Documentation

### Accessibility

| Attribute | Applied | Outcome |
| -- | -- | -- |
| `aria-label="Log viewer"` | `.pf-c-log-viewer` | Provides an accessible label for the log viewer. |
| `role="log"` | `.pf-c-log-viewer__main` | Identifies an element that creates a live region where new information is added in a meaningful order and old information may disappear. **Required** |
| `aria-live="polite"` | `.pf-c-log-viewer__list` | Allows assistive technologies to automatically read new content within the aria-live region on the place where the text is displayed. |
| `aria-atomic="true"` | `.pf-c-log-viewer__list` | Allows assistive technologies to notify a user when log messages are added. |
| `tabindex="0"` | `.pf-c-log-viewer`, `.pf-c-log-viewer__list` | Inserts the element into the tab order of the page so that it is focusable. **Required** |
| `aria-hidden="true"` | `.pf-c-log-viewer__index` | Hides an index from assistive technologies. |

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-log-viewer` | `<div>` | Initiates a log viewer. **Required** |
| `.pf-c-log-viewer__header` | `<div>` | Initiates the header container for a log viewer. **Required** |
| `.pf-c-log-viewer__main` | `<div>` | Initiates the main container for a log viewer. **Required** |
| `.pf-c-log-viewer__scroll-container` | `<div>` | Initiates the scroll container for a log viewer. **Required** |
| `.pf-c-log-viewer__list` | `<ul>` | Initiates the log viewer list. **Required** |
| `.pf-c-log-viewer__list-item` | `<li>` | Initiates a log viewer list item. **Required** |
| `.pf-c-log-viewer__index` | `<span>` | Initiates a log viewer index element. **Required for numbered list** |
| `.pf-c-log-viewer__text` | `<div>` | Initiates a log viewer text element. **Required** |
| `.pf-c-log-viewer__string` | `<span>` | Initiates a log viewer string element. |
| `.pf-c-log-viewer__timestamp` | `<div>` | Initiates a log viewer text element. **Required** |
| `.pf-m-wrap-text` | `.pf-c-log-viewer` | Modifies the log viewer text to wrap. |
| `.pf-m-line-numbers` | `.pf-c-log-viewer` | Modifies the log viewer to display line numbers. |
| `.pf-m-dark` | `.pf-c-log-viewer` | Modifies the log viewer content for dark theme. |
| `.pf-m-match` | `.pf-c-log-viewer__string` | Indicates a string is a search result. |
| `.pf-m-current` | `.pf-c-log-viewer__string` | Indicates a string is the current search result. |
| `--pf-c-log-viewer--MaxHeight{-on-[breakpoint]}: {height}` | `.pf-c-log-viewer` |  Modifies the height value of a log viewer. |
