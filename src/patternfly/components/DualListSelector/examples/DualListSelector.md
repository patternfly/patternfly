---
id: 'Dual list selector'
section: components
cssPrefix: pf-v6-c-dual-list-selector
---

## Examples
### Basic
```hbs
{{#> dual-list-selector dual-list-selector--id="basic"}}
  {{#> dual-list-selector-pane dual-list-selector-pane--id=(concat dual-list-selector--id '-available') dual-list-selector-pane--modifier="pf-m-available"}}
    {{#> dual-list-selector-header}}
      {{#> dual-list-selector-title}}
        {{#> dual-list-selector-title-text}}
          Available options
        {{/dual-list-selector-title-text}}
      {{/dual-list-selector-title}}
    {{/dual-list-selector-header}}
    {{#> dual-list-selector-tools}}
      {{#> dual-list-selector-tools-filter}}
        {{> text-input-group--search-input text-input-group-text-input--aria-label="Available search input"}}
      {{/dual-list-selector-tools-filter}}
      {{> dual-list-selector--actions}}
    {{/dual-list-selector-tools}}
    {{#> dual-list-selector-status}}
      {{#> dual-list-selector-status-text}}
        0 of 5 items selected
      {{/dual-list-selector-status-text}}
    {{/dual-list-selector-status}}
    {{#> dual-list-selector-menu}}
      {{#> dual-list-selector-list}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item1"}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item2"}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item dual-list-selector-list-item--IsDisabled="true"}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item3 (disabled)"}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item4"}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item5"}}
        {{/dual-list-selector-list-item}}
      {{/dual-list-selector-list}}
    {{/dual-list-selector-menu}}
  {{/dual-list-selector-pane}}
  {{#> dual-list-selector-controls}}
    {{> dual-list-selector-controls-item dual-list-selector-controls-item--IsAdd=true dual-list-selector-controls-item--IsDisabled=true}}
    {{> dual-list-selector-controls-item dual-list-selector-controls-item--IsAddAll=true}}
    {{> dual-list-selector-controls-item dual-list-selector-controls-item--IsRemoveAll=true dual-list-selector-controls-item--IsDisabled=true}}
    {{> dual-list-selector-controls-item dual-list-selector-controls-item--IsRemove=true dual-list-selector-controls-item--IsDisabled=true}}
  {{/dual-list-selector-controls}}
  {{#> dual-list-selector-pane dual-list-selector-pane--id=(concat dual-list-selector--id '-chosen') dual-list-selector-pane--modifier="pf-m-chosen"}}
    {{#> dual-list-selector-header}}
      {{#> dual-list-selector-title}}
        {{#> dual-list-selector-title-text}}
          Chosen options
        {{/dual-list-selector-title-text}}
      {{/dual-list-selector-title}}
    {{/dual-list-selector-header}}
    {{#> dual-list-selector-tools}}
      {{#> dual-list-selector-tools-filter}}
        {{> text-input-group--search-input text-input-group-text-input--aria-label="Chosen search input"}}
      {{/dual-list-selector-tools-filter}}
      {{> dual-list-selector--actions}}
    {{/dual-list-selector-tools}}
    {{#> dual-list-selector-status}}
      {{#> dual-list-selector-status-text}}
        0 of 0 items selected
      {{/dual-list-selector-status-text}}
    {{/dual-list-selector-status}}
    {{#> dual-list-selector-menu}}
      {{#> dual-list-selector-list}}
      {{/dual-list-selector-list}}
    {{/dual-list-selector-menu}}
  {{/dual-list-selector-pane}}
{{/dual-list-selector}}
```

### Available item selected
```hbs
{{#> dual-list-selector dual-list-selector--id="available-item-selected"}}
  {{#> dual-list-selector-pane dual-list-selector-pane--id=(concat dual-list-selector--id '-available') dual-list-selector-pane--modifier="pf-m-available"}}
    {{#> dual-list-selector-header}}
      {{#> dual-list-selector-title}}
        {{#> dual-list-selector-title-text}}
          Available options
        {{/dual-list-selector-title-text}}
      {{/dual-list-selector-title}}
    {{/dual-list-selector-header}}
    {{#> dual-list-selector-tools}}
      {{#> dual-list-selector-tools-filter}}
        {{> text-input-group--search-input text-input-group-text-input--aria-label="Available search input"}}
      {{/dual-list-selector-tools-filter}}
      {{> dual-list-selector--actions}}
    {{/dual-list-selector-tools}}
    {{#> dual-list-selector-status}}
      {{#> dual-list-selector-status-text}}
        1 of 5 items selected
      {{/dual-list-selector-status-text}}
    {{/dual-list-selector-status}}
    {{#> dual-list-selector-menu}}
      {{#> dual-list-selector-list}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item1"}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item dual-list-selector-list-item-row--IsSelected="true"}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item2"}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item3"}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item4"}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item5"}}
        {{/dual-list-selector-list-item}}
      {{/dual-list-selector-list}}
    {{/dual-list-selector-menu}}
  {{/dual-list-selector-pane}}
  {{#> dual-list-selector-controls}}
    {{> dual-list-selector-controls-item dual-list-selector-controls-item--IsAdd=true}}
    {{> dual-list-selector-controls-item dual-list-selector-controls-item--IsAddAll=true}}
    {{> dual-list-selector-controls-item dual-list-selector-controls-item--IsRemoveAll=true dual-list-selector-controls-item--IsDisabled=true}}
    {{> dual-list-selector-controls-item dual-list-selector-controls-item--IsRemove=true dual-list-selector-controls-item--IsDisabled=true}}
  {{/dual-list-selector-controls}}
  {{#> dual-list-selector-pane dual-list-selector-pane--id=(concat dual-list-selector--id '-chosen') dual-list-selector-pane--modifier="pf-m-chosen"}}
    {{#> dual-list-selector-header}}
      {{#> dual-list-selector-title}}
        {{#> dual-list-selector-title-text}}
          Chosen options
        {{/dual-list-selector-title-text}}
      {{/dual-list-selector-title}}
    {{/dual-list-selector-header}}
    {{#> dual-list-selector-tools}}
      {{#> dual-list-selector-tools-filter}}
        {{> text-input-group--search-input text-input-group-text-input--aria-label="Chosen search input"}}
      {{/dual-list-selector-tools-filter}}
      {{> dual-list-selector--actions}}
    {{/dual-list-selector-tools}}
    {{#> dual-list-selector-status}}
      {{#> dual-list-selector-status-text}}
        0 of 0 items selected
      {{/dual-list-selector-status-text}}
    {{/dual-list-selector-status}}
    {{#> dual-list-selector-menu}}
      {{#> dual-list-selector-list}}
      {{/dual-list-selector-list}}
    {{/dual-list-selector-menu}}
  {{/dual-list-selector-pane}}
{{/dual-list-selector}}
```

### Multiple available items selected
```hbs
{{#> dual-list-selector dual-list-selector--id="multiple-available-items-selected"}}
  {{#> dual-list-selector-pane dual-list-selector-pane--id=(concat dual-list-selector--id '-available') dual-list-selector-pane--modifier="pf-m-available"}}
    {{#> dual-list-selector-header}}
      {{#> dual-list-selector-title}}
        {{#> dual-list-selector-title-text}}
          Available options
        {{/dual-list-selector-title-text}}
      {{/dual-list-selector-title}}
    {{/dual-list-selector-header}}
    {{#> dual-list-selector-tools}}
      {{#> dual-list-selector-tools-filter}}
        {{> text-input-group--search-input text-input-group-text-input--aria-label="Available search input"}}
      {{/dual-list-selector-tools-filter}}
      {{> dual-list-selector--actions}}
    {{/dual-list-selector-tools}}
    {{#> dual-list-selector-status}}
      {{#> dual-list-selector-status-text}}
        3 of 5 items selected
      {{/dual-list-selector-status-text}}
    {{/dual-list-selector-status}}
    {{#> dual-list-selector-menu}}
      {{#> dual-list-selector-list}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item1"}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item dual-list-selector-list-item-row--IsSelected="true"}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item2"}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item dual-list-selector-list-item-row--IsSelected="true"}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item3"}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item4"}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item dual-list-selector-list-item-row--IsSelected="true"}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item5"}}
        {{/dual-list-selector-list-item}}
      {{/dual-list-selector-list}}
    {{/dual-list-selector-menu}}
  {{/dual-list-selector-pane}}
  {{#> dual-list-selector-controls}}
    {{> dual-list-selector-controls-item dual-list-selector-controls-item--IsAdd=true}}
    {{> dual-list-selector-controls-item dual-list-selector-controls-item--IsAddAll=true}}
    {{> dual-list-selector-controls-item dual-list-selector-controls-item--IsRemoveAll=true dual-list-selector-controls-item--IsDisabled=true}}
    {{> dual-list-selector-controls-item dual-list-selector-controls-item--IsRemove=true dual-list-selector-controls-item--IsDisabled=true}}
  {{/dual-list-selector-controls}}
  {{#> dual-list-selector-pane dual-list-selector-pane--id=(concat dual-list-selector--id '-chosen') dual-list-selector-pane--modifier="pf-m-chosen"}}
    {{#> dual-list-selector-header}}
      {{#> dual-list-selector-title}}
        {{#> dual-list-selector-title-text}}
          Chosen options
        {{/dual-list-selector-title-text}}
      {{/dual-list-selector-title}}
    {{/dual-list-selector-header}}
    {{#> dual-list-selector-tools}}
      {{#> dual-list-selector-tools-filter}}
        {{> text-input-group--search-input text-input-group-text-input--aria-label="Chosen search input"}}
      {{/dual-list-selector-tools-filter}}
      {{> dual-list-selector--actions}}
    {{/dual-list-selector-tools}}
    {{#> dual-list-selector-status}}
      {{#> dual-list-selector-status-text}}
        0 of 0 items selected
      {{/dual-list-selector-status-text}}
    {{/dual-list-selector-status}}
    {{#> dual-list-selector-menu}}
      {{#> dual-list-selector-list}}
      {{/dual-list-selector-list}}
    {{/dual-list-selector-menu}}
  {{/dual-list-selector-pane}}
{{/dual-list-selector}}
```

### Chosen item
```hbs
{{#> dual-list-selector dual-list-selector--id="chosen-item"}}
  {{#> dual-list-selector-pane dual-list-selector-pane--id=(concat dual-list-selector--id '-available') dual-list-selector-pane--modifier="pf-m-available"}}
    {{#> dual-list-selector-header}}
      {{#> dual-list-selector-title}}
        {{#> dual-list-selector-title-text}}
          Available options
        {{/dual-list-selector-title-text}}
      {{/dual-list-selector-title}}
    {{/dual-list-selector-header}}
    {{#> dual-list-selector-tools}}
      {{#> dual-list-selector-tools-filter}}
        {{> text-input-group--search-input text-input-group-text-input--aria-label="Available search input"}}
      {{/dual-list-selector-tools-filter}}
      {{> dual-list-selector--actions}}
    {{/dual-list-selector-tools}}
    {{#> dual-list-selector-status}}
      {{#> dual-list-selector-status-text}}
        0 of 4 items selected
      {{/dual-list-selector-status-text}}
    {{/dual-list-selector-status}}
    {{#> dual-list-selector-menu}}
      {{#> dual-list-selector-list}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item1"}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item2"}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item3"}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item4"}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item5"}}
        {{/dual-list-selector-list-item}}
      {{/dual-list-selector-list}}
    {{/dual-list-selector-menu}}
  {{/dual-list-selector-pane}}
  {{#> dual-list-selector-controls}}
    {{> dual-list-selector-controls-item dual-list-selector-controls-item--IsAdd=true dual-list-selector-controls-item--IsDisabled=true}}
    {{> dual-list-selector-controls-item dual-list-selector-controls-item--IsAddAll=true}}
    {{> dual-list-selector-controls-item dual-list-selector-controls-item--IsRemoveAll=true}}
    {{> dual-list-selector-controls-item dual-list-selector-controls-item--IsRemove=true dual-list-selector-controls-item--IsDisabled=true}}
  {{/dual-list-selector-controls}}
  {{#> dual-list-selector-pane dual-list-selector-pane--id=(concat dual-list-selector--id '-chosen') dual-list-selector-pane--modifier="pf-m-chosen"}}
    {{#> dual-list-selector-header}}
      {{#> dual-list-selector-title}}
        {{#> dual-list-selector-title-text}}
          Chosen options
        {{/dual-list-selector-title-text}}
      {{/dual-list-selector-title}}
    {{/dual-list-selector-header}}
    {{#> dual-list-selector-tools}}
      {{#> dual-list-selector-tools-filter}}
        {{> text-input-group--search-input text-input-group-text-input--aria-label="Chosen search input"}}
      {{/dual-list-selector-tools-filter}}
      {{> dual-list-selector--actions}}
    {{/dual-list-selector-tools}}
    {{#> dual-list-selector-status}}
      {{#> dual-list-selector-status-text}}
        0 of 1 items selected
      {{/dual-list-selector-status-text}}
    {{/dual-list-selector-status}}
    {{#> dual-list-selector-menu}}
      {{#> dual-list-selector-list}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item1"}}
        {{/dual-list-selector-list-item}}
      {{/dual-list-selector-list}}
    {{/dual-list-selector-menu}}
  {{/dual-list-selector-pane}}
{{/dual-list-selector}}
```

### Chosen item selected
```hbs
{{#> dual-list-selector dual-list-selector--id="chosen-item-selected"}}
  {{#> dual-list-selector-pane dual-list-selector-pane--id=(concat dual-list-selector--id '-available') dual-list-selector-pane--modifier="pf-m-available"}}
    {{#> dual-list-selector-header}}
      {{#> dual-list-selector-title}}
        {{#> dual-list-selector-title-text}}
          Available options
        {{/dual-list-selector-title-text}}
      {{/dual-list-selector-title}}
    {{/dual-list-selector-header}}
    {{#> dual-list-selector-tools}}
      {{#> dual-list-selector-tools-filter}}
        {{> text-input-group--search-input text-input-group-text-input--aria-label="Available search input"}}
      {{/dual-list-selector-tools-filter}}
      {{> dual-list-selector--actions}}
    {{/dual-list-selector-tools}}
    {{#> dual-list-selector-status}}
      {{#> dual-list-selector-status-text}}
        0 of 4 items selected
      {{/dual-list-selector-status-text}}
    {{/dual-list-selector-status}}
    {{#> dual-list-selector-menu}}
      {{#> dual-list-selector-list}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item1"}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item2"}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item3"}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item4"}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item5"}}
        {{/dual-list-selector-list-item}}
      {{/dual-list-selector-list}}
    {{/dual-list-selector-menu}}
  {{/dual-list-selector-pane}}
  {{#> dual-list-selector-controls}}
    {{> dual-list-selector-controls-item dual-list-selector-controls-item--IsAdd=true dual-list-selector-controls-item--IsDisabled=true}}
    {{> dual-list-selector-controls-item dual-list-selector-controls-item--IsAddAll=true}}
    {{> dual-list-selector-controls-item dual-list-selector-controls-item--IsRemoveAll=true}}
    {{> dual-list-selector-controls-item dual-list-selector-controls-item--IsRemove=true}}
  {{/dual-list-selector-controls}}
  {{#> dual-list-selector-pane dual-list-selector-pane--id=(concat dual-list-selector--id '-chosen') dual-list-selector-pane--modifier="pf-m-chosen"}}
    {{#> dual-list-selector-header}}
      {{#> dual-list-selector-title}}
        {{#> dual-list-selector-title-text}}
          Chosen options
        {{/dual-list-selector-title-text}}
      {{/dual-list-selector-title}}
    {{/dual-list-selector-header}}
    {{#> dual-list-selector-tools}}
      {{#> dual-list-selector-tools-filter}}
        {{> text-input-group--search-input text-input-group-text-input--aria-label="Chosen search input"}}
      {{/dual-list-selector-tools-filter}}
      {{> dual-list-selector--actions}}
    {{/dual-list-selector-tools}}
    {{#> dual-list-selector-status}}
      {{#> dual-list-selector-status-text}}
        1 of 1 items selected
      {{/dual-list-selector-status-text}}
    {{/dual-list-selector-status}}
    {{#> dual-list-selector-menu}}
      {{#> dual-list-selector-list}}
        {{#> dual-list-selector-list-item dual-list-selector-list-item-row--IsSelected="true"}}
          {{> dual-list-selector-item dual-list-selector-item--text="Item5"}}
        {{/dual-list-selector-list-item}}
      {{/dual-list-selector-list}}
    {{/dual-list-selector-menu}}
  {{/dual-list-selector-pane}}
{{/dual-list-selector}}
```


### Tree view
```hbs
{{#> dual-list-selector dual-list-selector--id="tree"}}
  {{#> dual-list-selector-pane dual-list-selector-pane--id=(concat dual-list-selector--id '-available') dual-list-selector-pane--modifier="pf-m-available"}}
    {{#> dual-list-selector-header}}
      {{#> dual-list-selector-title}}
        {{#> dual-list-selector-title-text}}
          Available options
        {{/dual-list-selector-title-text}}
      {{/dual-list-selector-title}}
    {{/dual-list-selector-header}}
    {{#> dual-list-selector-tools}}
      {{#> dual-list-selector-tools-filter}}
        {{> text-input-group--search-input text-input-group-text-input--aria-label="Available search input"}}
      {{/dual-list-selector-tools-filter}}
      {{> dual-list-selector--actions}}
    {{/dual-list-selector-tools}}
    {{#> dual-list-selector-status}}
      {{#> dual-list-selector-status-text}}
        1 of 11 items selected
      {{/dual-list-selector-status-text}}
    {{/dual-list-selector-status}}
    {{#> dual-list-selector-menu}}
      {{#> dual-list-selector-list dual-list-selector-list--IsTree="true"}}
        {{#> dual-list-selector-list-item dual-list-selector-list-item--IsExpandable="true" dual-list-selector-list-item--IsExpanded="true" dual-list-selector-list-item-row--HasCheck="true"}}
          {{#> dual-list-selector-item dual-list-selector-item--text="Colors" dual-list-selector-item--id="0" dual-list-selector-item--count="6" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
            {{#> dual-list-selector-list newcontext dual-list-selector-list--IsSublist="true" dual-list-selector-list--IsSublist="true"}}
              {{#> dual-list-selector-list-item dual-list-selector-list-item-row--HasCheck="true"}}
                {{#> dual-list-selector-item dual-list-selector-item--text="Red" dual-list-selector-item--id="1" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
              {{/dual-list-selector-list-item}}
              {{#> dual-list-selector-list-item dual-list-selector-list-item-row--IsSelected="true" dual-list-selector-list-item-row--HasCheck="true"}}
                {{#> dual-list-selector-item dual-list-selector-item--text="Orange" dual-list-selector-item--id="2" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
              {{/dual-list-selector-list-item}}
              {{#> dual-list-selector-list-item dual-list-selector-list-item-row--HasCheck="true"}}
                {{#> dual-list-selector-item dual-list-selector-item--text="Yellow" dual-list-selector-item--id="3" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
              {{/dual-list-selector-list-item}}
              {{#> dual-list-selector-list-item dual-list-selector-list-item--IsExpandable="true" dual-list-selector-list-item--IsExpanded="true" dual-list-selector-list-item-row--HasCheck="true"}}
                {{#> dual-list-selector-item dual-list-selector-item--text="Green" dual-list-selector-item--id="4" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
                {{#> dual-list-selector-list newcontext dual-list-selector-list--IsSublist="true"}}
                  {{#> dual-list-selector-list-item dual-list-selector-list-item-row--HasCheck="true"}}
                    {{#> dual-list-selector-item dual-list-selector-item--text="Light green" dual-list-selector-item--id="5" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
                  {{/dual-list-selector-list-item}}
                  {{#> dual-list-selector-list-item dual-list-selector-list-item-row--HasCheck="true"}}
                    {{#> dual-list-selector-item dual-list-selector-item--text="Medium green" dual-list-selector-item--id="6" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
                  {{/dual-list-selector-list-item}}
                  {{#> dual-list-selector-list-item dual-list-selector-list-item-row--HasCheck="true"}}
                    {{#> dual-list-selector-item dual-list-selector-item--text="Dark green" dual-list-selector-item--id="7" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
                  {{/dual-list-selector-list-item}}
                  {{/dual-list-selector-list}}
              {{/dual-list-selector-list-item}}
            {{/dual-list-selector-list}}
        {{/dual-list-selector-list-item}}

        {{#> dual-list-selector-list-item dual-list-selector-list-item--IsExpandable="true" dual-list-selector-list-item-row--HasCheck="true"}}
          {{#> dual-list-selector-item dual-list-selector-item--text="Type something" dual-list-selector-item--id="8" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
        {{/dual-list-selector-list-item}}

        {{#> dual-list-selector-list-item dual-list-selector-list-item-row--HasCheck="true"}}
          {{#> dual-list-selector-item dual-list-selector-item--text="Type something" dual-list-selector-item--id="9" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
        {{/dual-list-selector-list-item}}

        {{#> dual-list-selector-list-item dual-list-selector-list-item--IsExpandable="true" dual-list-selector-list-item-row--HasCheck="true"}}
          {{#> dual-list-selector-item dual-list-selector-item--text="Type something" dual-list-selector-item--id="10" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
        {{/dual-list-selector-list-item}}

      {{/dual-list-selector-list}}
    {{/dual-list-selector-menu}}
  {{/dual-list-selector-pane}}
  {{#> dual-list-selector-controls}}
    {{> dual-list-selector-controls-item dual-list-selector-controls-item--IsAdd=true dual-list-selector-controls-item--IsDisabled=true}}
    {{> dual-list-selector-controls-item dual-list-selector-controls-item--IsAddAll=true}}
    {{> dual-list-selector-controls-item dual-list-selector-controls-item--IsRemoveAll=true dual-list-selector-controls-item--IsDisabled=true}}
    {{> dual-list-selector-controls-item dual-list-selector-controls-item--IsRemove=true dual-list-selector-controls-item--IsDisabled=true}}
  {{/dual-list-selector-controls}}
  {{#> dual-list-selector-pane dual-list-selector-pane--id=(concat dual-list-selector--id '-chosen') dual-list-selector-pane--modifier="pf-m-chosen"}}
    {{#> dual-list-selector-header}}
      {{#> dual-list-selector-title}}
        {{#> dual-list-selector-title-text}}
          Chosen options
        {{/dual-list-selector-title-text}}
      {{/dual-list-selector-title}}
    {{/dual-list-selector-header}}
    {{#> dual-list-selector-tools}}
      {{#> dual-list-selector-tools-filter}}
        {{> text-input-group--search-input text-input-group-text-input--aria-label="Chosen search input"}}
      {{/dual-list-selector-tools-filter}}
      {{> dual-list-selector--actions}}
    {{/dual-list-selector-tools}}
    {{#> dual-list-selector-status}}
      {{#> dual-list-selector-status-text}}
        0 of 0 items selected
      {{/dual-list-selector-status-text}}
    {{/dual-list-selector-status}}
    {{#> dual-list-selector-menu}}
      {{#> dual-list-selector-list}}
      {{/dual-list-selector-list}}
    {{/dual-list-selector-menu}}
  {{/dual-list-selector-pane}}
{{/dual-list-selector}}
```

### Tree view with chosen and disabled options
```hbs
{{#> dual-list-selector dual-list-selector--id="tree-options"}}
  {{#> dual-list-selector-pane dual-list-selector-pane--id=(concat dual-list-selector--id '-available') dual-list-selector-pane--modifier="pf-m-available"}}
    {{#> dual-list-selector-header}}
      {{#> dual-list-selector-title}}
        {{#> dual-list-selector-title-text}}
          Available options
        {{/dual-list-selector-title-text}}
      {{/dual-list-selector-title}}
    {{/dual-list-selector-header}}
    {{#> dual-list-selector-tools}}
      {{#> dual-list-selector-tools-filter}}
        {{> text-input-group--search-input text-input-group-text-input--aria-label="Available search input"}}
      {{/dual-list-selector-tools-filter}}
      {{> dual-list-selector--actions}}
    {{/dual-list-selector-tools}}
    {{#> dual-list-selector-status}}
      {{#> dual-list-selector-status-text}}
        0 of 10 items selected
      {{/dual-list-selector-status-text}}
    {{/dual-list-selector-status}}
    {{#> dual-list-selector-menu}}
      {{#> dual-list-selector-list dual-list-selector-list--IsTree="true"}}
        {{#> dual-list-selector-list-item dual-list-selector-list-item--IsExpandable="true" dual-list-selector-list-item--IsExpanded="true" dual-list-selector-list-item-row--HasCheck="true"}}
          {{#> dual-list-selector-item dual-list-selector-item--text="Colors" dual-list-selector-item--count="6" dual-list-selector-item--id="11" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
            {{#> dual-list-selector-list newcontext dual-list-selector-list--IsSublist="true"}}
              {{#> dual-list-selector-list-item dual-list-selector-list-item-row--IsSelected="true" dual-list-selector-list-item-row--HasCheck="true"}}
                {{#> dual-list-selector-item dual-list-selector-item--text="Orange" dual-list-selector-item--id="12" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
              {{/dual-list-selector-list-item}}
              {{#> dual-list-selector-list-item dual-list-selector-list-item-row--HasCheck="true"}}
                {{#> dual-list-selector-item dual-list-selector-item--text="Yellow" dual-list-selector-item--id="13" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
              {{/dual-list-selector-list-item}}
              {{#> dual-list-selector-list-item dual-list-selector-list-item--IsExpandable="true" dual-list-selector-list-item--IsExpanded="true" dual-list-selector-list-item--IsDisabled="true" dual-list-selector-list-item-row--HasCheck="true"}}
                {{#> dual-list-selector-item dual-list-selector-item--text="Green (disabled)" dual-list-selector-item--id="14" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
                {{#> dual-list-selector-list newcontext dual-list-selector-list--IsSublist="true" dual-list-selector-list-item--IsTopLevelDisabled="true" dual-list-selector-list-item--IsDisabled="true"}}
                  {{#> dual-list-selector-list-item dual-list-selector-list-item-row--HasCheck="true"}}
                    {{#> dual-list-selector-item dual-list-selector-item--text="Light green" dual-list-selector-item--id="15" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
                  {{/dual-list-selector-list-item}}
                  {{#> dual-list-selector-list-item dual-list-selector-list-item-row--HasCheck="true"}}
                    {{#> dual-list-selector-item dual-list-selector-item--text="Medium green" dual-list-selector-item--id="16" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
                  {{/dual-list-selector-list-item}}
                  {{#> dual-list-selector-list-item dual-list-selector-list-item-row--HasCheck="true"}}
                    {{#> dual-list-selector-item dual-list-selector-item--text="Dark green" dual-list-selector-item--id="17" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
                  {{/dual-list-selector-list-item}}
                  {{/dual-list-selector-list}}
              {{/dual-list-selector-list-item}}
            {{/dual-list-selector-list}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item dual-list-selector-list-item--IsExpandable="true" dual-list-selector-list-item-row--HasCheck="true"}}
          {{#> dual-list-selector-item dual-list-selector-item--text="Type something" dual-list-selector-item--id="18" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item dual-list-selector-list-item-row--HasCheck="true"}}
          {{#> dual-list-selector-item dual-list-selector-item--text="Type something" dual-list-selector-item--id="19" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
        {{/dual-list-selector-list-item}}
        {{#> dual-list-selector-list-item dual-list-selector-list-item--IsExpandable="true" dual-list-selector-list-item-row--HasCheck="true"}}
          {{#> dual-list-selector-item dual-list-selector-item--text="Type something" dual-list-selector-item--id="20" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
        {{/dual-list-selector-list-item}}
      {{/dual-list-selector-list}}
    {{/dual-list-selector-menu}}
  {{/dual-list-selector-pane}}
  {{#> dual-list-selector-controls}}
    {{> dual-list-selector-controls-item dual-list-selector-controls-item--IsAdd=true dual-list-selector-controls-item--IsDisabled=true}}
    {{> dual-list-selector-controls-item dual-list-selector-controls-item--IsAddAll=true}}
    {{> dual-list-selector-controls-item dual-list-selector-controls-item--IsRemoveAll=true dual-list-selector-controls-item--IsDisabled=true}}
    {{> dual-list-selector-controls-item dual-list-selector-controls-item--IsRemove=true dual-list-selector-controls-item--IsDisabled=true}}
  {{/dual-list-selector-controls}}
  {{#> dual-list-selector-pane dual-list-selector-pane--id=(concat dual-list-selector--id '-chosen') dual-list-selector-pane--modifier="pf-m-chosen"}}
    {{#> dual-list-selector-header}}
      {{#> dual-list-selector-title}}
        {{#> dual-list-selector-title-text}}
          Chosen options
        {{/dual-list-selector-title-text}}
      {{/dual-list-selector-title}}
    {{/dual-list-selector-header}}
    {{#> dual-list-selector-tools}}
      {{#> dual-list-selector-tools-filter}}
        {{> text-input-group--search-input text-input-group-text-input--aria-label="Chosen search input"}}
      {{/dual-list-selector-tools-filter}}
      {{> dual-list-selector--actions}}
    {{/dual-list-selector-tools}}
    {{#> dual-list-selector-status}}
      {{#> dual-list-selector-status-text
      }}
        0 of 0 items selected
      {{/dual-list-selector-status-text}}
    {{/dual-list-selector-status}}
    {{#> dual-list-selector-menu}}
      {{#> dual-list-selector-list dual-list-selector-list--IsTree="true"}}
        {{#> dual-list-selector-list-item dual-list-selector-list-item--IsExpandable="true" dual-list-selector-list-item--IsExpanded="true" dual-list-selector-list-item-row--HasCheck="true"}}
          {{#> dual-list-selector-item dual-list-selector-item--text="Colors" dual-list-selector-item--id="21" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
            {{#> dual-list-selector-list newcontext dual-list-selector-list--IsSublist="true"}}
              {{#> dual-list-selector-list-item dual-list-selector-list-item-row--IsSelected="true" dual-list-selector-list-item-row--HasCheck="true"}}
                {{#> dual-list-selector-item dual-list-selector-item--text="Orange" dual-list-selector-item--id="22" dual-list-selector-item--type="div"}}{{/dual-list-selector-item}}
              {{/dual-list-selector-list-item}}
            {{/dual-list-selector-list}}
        {{/dual-list-selector-list-item}}
      {{/dual-list-selector-list}}
    {{/dual-list-selector-menu}}
  {{/dual-list-selector-pane}}
{{/dual-list-selector}}
```

### Draggable
```hbs
{{#> wrapper dual-list-selector--id="draggable"}}
  <div id="{{dual-list-selector--id}}-help">
    Activate the reorder button and use the arrow keys to reorder the list or use your mouse to drag/reorder. Press escape to cancel the reordering.
  </div>
  {{#> dual-list-selector }}
    {{#> dual-list-selector-pane dual-list-selector-pane--id=(concat dual-list-selector--id '-available') dual-list-selector-pane--modifier="pf-m-available"}}
      {{#> dual-list-selector-header}}
        {{#> dual-list-selector-title}}
          {{#> dual-list-selector-title-text}}
            Available options
          {{/dual-list-selector-title-text}}
        {{/dual-list-selector-title}}
      {{/dual-list-selector-header}}
      {{#> dual-list-selector-tools}}
        {{#> dual-list-selector-tools-filter}}
        {{> text-input-group--search-input text-input-group-text-input--aria-label="Available search input"}}
        {{/dual-list-selector-tools-filter}}
        {{> dual-list-selector--actions}}
      {{/dual-list-selector-tools}}
      {{#> dual-list-selector-status}}
        {{#> dual-list-selector-status-text}}
          0 of 5 items selected
        {{/dual-list-selector-status-text}}
      {{/dual-list-selector-status}}
      {{#> dual-list-selector-menu}}
        {{#> dual-list-selector-list}}
          {{#> dual-list-selector-list-item}}
            {{> dual-list-selector-item dual-list-selector-item--text="Item1"}}
          {{/dual-list-selector-list-item}}
          {{#> dual-list-selector-list-item}}
            {{> dual-list-selector-item dual-list-selector-item--text="Item4"}}
          {{/dual-list-selector-list-item}}
          {{#> dual-list-selector-list-item}}
            {{> dual-list-selector-item dual-list-selector-item--text="Item6"}}
          {{/dual-list-selector-list-item}}
        {{/dual-list-selector-list}}
      {{/dual-list-selector-menu}}
    {{/dual-list-selector-pane}}
    {{#> dual-list-selector-controls}}
      {{> dual-list-selector-controls-item dual-list-selector-controls-item--IsAdd=true dual-list-selector-controls-item--IsDisabled=true}}
      {{> dual-list-selector-controls-item dual-list-selector-controls-item--IsAddAll=true}}
      {{> dual-list-selector-controls-item dual-list-selector-controls-item--IsRemoveAll=true dual-list-selector-controls-item--IsDisabled=true}}
      {{> dual-list-selector-controls-item dual-list-selector-controls-item--IsRemove=true dual-list-selector-controls-item--IsDisabled=true}}
    {{/dual-list-selector-controls}}
    {{#> dual-list-selector-pane dual-list-selector-pane--id=(concat dual-list-selector--id '-chosen') dual-list-selector-pane--modifier="pf-m-chosen"}}
      {{#> dual-list-selector-header}}
        {{#> dual-list-selector-title}}
          {{#> dual-list-selector-title-text}}
            Chosen options
          {{/dual-list-selector-title-text}}
        {{/dual-list-selector-title}}
      {{/dual-list-selector-header}}
      {{#> dual-list-selector-tools}}
        {{#> dual-list-selector-tools-filter}}
          {{> text-input-group--search-input text-input-group-text-input--aria-label="Chosen search input"}}
        {{/dual-list-selector-tools-filter}}
        {{> dual-list-selector--actions}}
      {{/dual-list-selector-tools}}
      {{#> dual-list-selector-status}}
        {{#> dual-list-selector-status-text}}
          0 of 0 items selected
        {{/dual-list-selector-status-text}}
      {{/dual-list-selector-status}}
      {{#> dual-list-selector-menu}}
        {{#> dual-list-selector-list dual-list-selector-list-item--IsDraggable="true"}}
          {{#> dual-list-selector-list-item dual-list-selector-list-item--id=(concat dual-list-selector--id '-list-item-2') dual-list-selector-draggable-button--IsDisabled="true"}}
            {{> dual-list-selector-item dual-list-selector-item--text="Item2 - draggable icon disabled"}}
          {{/dual-list-selector-list-item}}
          {{#> dual-list-selector-list-item dual-list-selector-list-item--id=(concat dual-list-selector--id '-list-item-3')}}
            {{> dual-list-selector-item dual-list-selector-item--text="Item3"}}
          {{/dual-list-selector-list-item}}
          {{#> dual-list-selector-list-item dual-list-selector-list-item--id=(concat dual-list-selector--id '-list-item-5') dual-list-selector-list-item-row--modifier="pf-m-ghost-row" dual-list-selector-draggable-button--IsDisabled="true"}}
            {{> dual-list-selector-item dual-list-selector-item--text="Item5 - ghost row"}}
          {{/dual-list-selector-list-item}}
          {{#> dual-list-selector-list-item dual-list-selector-list-item--id=(concat dual-list-selector--id '-list-item-7') dual-list-selector-list-item-row--IsSelected="true"}}
            {{> dual-list-selector-item dual-list-selector-item--text="Item7 - selected"}}
          {{/dual-list-selector-list-item}}
        {{/dual-list-selector-list}}
      {{/dual-list-selector-menu}}
    {{/dual-list-selector-pane}}
  {{/dual-list-selector}}
  <div class="{{pfv 'unset-prefix'}}screen-reader" aria-live="assertive">
    This is the aria-live section that provides real-time feedback to the user.
  </div>
{{/wrapper}}
```

## Documentation

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-live` | `[element with live text]` | To give screen reader users live feedback about what's happening during interaction with the dual list selector, both during drag and drop interactions and keyboard interactions. **Highly Recommended** |
| `aria-labelledby="[id of .pf-v6-c-dual-list-selector__status-text]` | `.pf-v6-c-dual-list-selector__list [ul]` | Gives the list an accessible name. |
| `role="listbox or tree or group"` | `.pf-v6-c-dual-list-selector__list [ul]` | Indicates the list is single, a tree, or a subgroup within the tree. |
| `aria-multiselectable="true"` | `.pf-v6-c-dual-list-selector__list [ul]` | Indicates the list is multiselectable. |
| `aria-activedescendant=""` | `.pf-v6-c-dual-list-selector__list [ul]` | Indicates the list has clickable children. |
| `role="option or treeitem"` | `.pf-v6-c-dual-list-selector__list-item [li]` | Indicates whether the item is part of a tree. |
| `aria-expanded="true"`      | `.pf-v6-c-dual-list-selector__list-item [li]` | Indicates a treeitem is expanded. |

### Usage

| Class | Applied | Outcome |
| -- | -- | -- |
| `.pf-v6-c-dual-list-selector` | `<div>` | Initiates the dual list selector component. **Required** |
| `.pf-v6-c-dual-list-selector__pane` | `<div>` | Initiates a dual list selector pane. **Required** |
| `.pf-v6-c-dual-list-selector__header` | `<div>` | Initiates a dual list selector pane header. **Required** |
| `.pf-v6-c-dual-list-selector__title` | `<div>` | Initiates a dual list selector pane title. **Required** |
| `.pf-v6-c-dual-list-selector__title-text` | `<div>` | Initiates a dual list selector pane title text. **Required** |
| `.pf-v6-c-dual-list-selector__tools` | `<div>` | Initiates a dual list selector tools. **Required** |
| `.pf-v6-c-dual-list-selector__filter` | `<div>` | Initiates a dual list selector pane filter. **Required** |
| `.pf-v6-c-dual-list-selector__actions` | `<div>` | Initiates a dual list selector pane actions. |
| `.pf-v6-c-dual-list-selector__actions-item` | `<div>` | Initiates a dual list selector pane actions item. |
| `.pf-v6-c-dual-list-selector__status` | `<div>` | Initiates a dual list selector pane selected status. **Required** |
| `.pf-v6-c-dual-list-selector__status-text` | `<span>` | Initiates a dual list selector pane selected status text. **Required** |
| `.pf-v6-c-dual-list-selector__menu` | `<div>` | Initiates a dual list selector pane menu container. **Required** |
| `.pf-v6-c-dual-list-selector__list` | `<ul>` | Initiates a dual list selector pane menu list. **Required** |
| `.pf-v6-c-dual-list-selector__list-item` | `<li>` | Initiates a dual list selector pane menu list item. **Required** |
| `.pf-v6-c-dual-list-selector__list-item-row` | `<div>` | Initiates a dual list selector pane menu list item row. **Required** |
| `.pf-v6-c-dual-list-selector__draggable` | `<div>` | Initiates a dual list selector pane draggable element. |
| `.pf-v6-c-dual-list-selector__item` | `<span>`, `<div>` | Initiates a dual list selector pane menu item. **Required** |
| `.pf-v6-c-dual-list-selector__item-main` | `<span>` | Initiates a dual list selector pane menu item main container. **Required** |
| `.pf-v6-c-dual-list-selector__item-check` | `<span>` | Initiates the dual list selector item check. |
| `.pf-v6-c-dual-list-selector__item-count` | `<span>` | Initiates the dual list selector item count. |
| `.pf-v6-c-dual-list-selector__item-toggle-icon` | `<span>` | Initiates the dual list selector item toggle icon. |
| `.pf-v6-c-dual-list-selector__item-toggle` | `<button>` | Initiates the dual list selector item toggle. |
| `.pf-v6-c-dual-list-selector__item-text` | `<span>` | Initiates a dual list selector pane menu item text. **Required** |
| `.pf-v6-c-dual-list-selector__controls` | `<div>` | Initiates the dual list selector controls. **Required** |
| `.pf-v6-c-dual-list-selector__controls-item` | `<div>` | Initiates the dual list selector controls item. **Required** |
| `.pf-m-available` | `.pf-v6-c-dual-list-selector__pane` | Defines a pane as the available list. |
| `.pf-m-chosen` | `.pf-v6-c-dual-list-selector__pane` | Defines a pane as the chosen list. |
| `.pf-m-drag-over` | `.pf-v6-c-dual-list-selector__list` | Modifies the dual list selector list to indicate that a draggable item is being dragged over the list. |
| `.pf-m-ghost-row` | `.pf-v6-c-dual-list-selector__list-item-row` | Modifies the list item main to be a ghost row. |
| `.pf-m-selected` | `.pf-v6-c-dual-list-selector__list-item-row` | Modifies the menu item for the selected state. |
| `.pf-m-check` | `.pf-v6-c-dual-list-selector__list-item-row` | Indicates that an item is selectable with a checkbox. |
| `.pf-m-expandable` | `.pf-v6-c-dual-list-selector__list-item` | Indicates that an item is expandable. |
| `.pf-m-expanded` | `.pf-v6-c-dual-list-selector__list-item` | Indicates that an item is expanded. |
| `.pf-m-disabled` | `.pf-v6-c-dual-list-selector__list-item` | Indicates that an item is disabled. **Note:** If an item is expandable, only the top level item needs the disabled class. |
