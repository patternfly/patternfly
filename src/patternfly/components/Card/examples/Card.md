---
id: Card
section: components
cssPrefix: pf-c-card
---

## Examples
### Basic
```hbs
{{#> card}}
  {{#> card-title}}
    Title
  {{/card-title}}
  {{#> card-body}}
    <i class="fas fa-bell"></i>
<i class="pf-icon-add-circle-o"></i>
<i class="fas fa-times-circle"></i>
<i class="fas fa-times"></i>
<i class="pf-icon-attention-bell"></i>
<i class="pf-icon-applications"></i>
<i class="pf-icon-arrow"></i>
<i class="pf-icon-asleep"></i>
<i class="pf-icon-automation"></i>
<i class="pf-icon-blueprint"></i>
<i class="pf-icon-build"></i>
<i class="pf-icon-builder-image"></i>
<i class="pf-icon-bundle"></i>
<i class="pf-icon-catalog"></i>
<i class="pf-icon-chat"></i>
<i class="pf-icon-close"></i>
<i class="pf-icon-cloud-security"></i>
<i class="pf-icon-cloud-tenant"></i>
<i class="pf-icon-cluster"></i>
<i class="pf-icon-connected"></i>
<i class="pf-icon-container-node"></i>
<i class="pf-icon-cpu"></i>
<i class="pf-icon-degraded"></i>
<i class="pf-icon-disconnected"></i>
<i class="pf-icon-domain"></i>
<i class="pf-icon-edit"></i>
<i class="pf-icon-enhancement"></i>
<i class="pf-icon-enterprise"></i>
<i class="pf-icon-equalizer"></i>
<i class="pf-icon-error-circle-o"></i>
<i class="pf-icon-export"></i>
<i class="pf-icon-filter"></i>
<i class="pf-icon-flavor"></i>
<i class="pf-icon-folder-close"></i>
<i class="pf-icon-folder-open"></i>
<i class="pf-icon-globe-route"></i>
<i class="pf-icon-help"></i>
<i class="pf-icon-history"></i>
<i class="pf-icon-home"></i>
<i class="pf-icon-import"></i>
<i class="pf-icon-in-progress"></i>
<i class="pf-icon-info"></i>
<i class="pf-icon-infrastructure"></i>
<i class="pf-icon-integration"></i>
<i class="pf-icon-key"></i>
<i class="pf-icon-locked"></i>
<i class="pf-icon-maintenance"></i>
<i class="pf-icon-memory"></i>
<i class="pf-icon-messages"></i>
<i class="pf-icon-middleware"></i>
<i class="pf-icon-migration"></i>
<i class="pf-icon-monitoring"></i>
<i class="pf-icon-network"></i>
<i class="pf-icon-off"></i>
<i class="pf-icon-ok"></i>
<i class="pf-icon-on"></i>
<i class="pf-icon-optimize"></i>
<i class="pf-icon-orders"></i>
<i class="pf-icon-paused"></i>
<i class="pf-icon-pending"></i>
<i class="pf-icon-pf-icon-ansible-tower"></i>
<i class="pf-icon-pf-icon-openshift"></i>
<i class="pf-icon-pf-icon-openstack"></i>
<i class="pf-icon-pficon-dragdrop"></i>
<i class="pf-icon-pficon-history"></i>
<i class="pf-icon-pficon-network-range"></i>
<i class="pf-icon-pficon-on-running"></i>
<i class="pf-icon-pficon-running"></i>
<i class="pf-icon-pficon-satellite"></i>
<i class="pf-icon-pficon-sort-common-asc"></i>
<i class="pf-icon-pficon-sort-common-desc"></i>
<i class="pf-icon-pficon-template"></i>
<i class="pf-icon-pficon-vcenter"></i>
<i class="pf-icon-plugged"></i>
<i class="pf-icon-port"></i>
<i class="pf-icon-print"></i>
<i class="pf-icon-private"></i>
<i class="pf-icon-process-automation"></i>
<i class="pf-icon-project"></i>
<i class="pf-icon-rebalance"></i>
<i class="pf-icon-rebooting"></i>
<i class="pf-icon-regions"></i>
<i class="pf-icon-registry"></i>
<i class="pf-icon-remove2"></i>
<i class="pf-icon-replicator"></i>
<i class="pf-icon-repository"></i>
<i class="pf-icon-resource-pool"></i>
<i class="pf-icon-resources-almost-empty"></i>
<i class="pf-icon-resources-almost-full"></i>
<i class="pf-icon-resources-full"></i>
<i class="pf-icon-save"></i>
<i class="pf-icon-screen"></i>
<i class="pf-icon-security"></i>
<i class="pf-icon-server-group"></i>
<i class="pf-icon-server"></i>
<i class="pf-icon-service-catalog"></i>
<i class="pf-icon-service"></i>
<i class="pf-icon-services"></i>
<i class="pf-icon-spinner"></i>
<i class="pf-icon-spinner2"></i>
<i class="pf-icon-storage-domain"></i>
<i class="pf-icon-tenant"></i>
<i class="pf-icon-thumb-tack"></i>
<i class="pf-icon-topology"></i>
<i class="pf-icon-trend-down"></i>
<i class="pf-icon-trend-up"></i>
<i class="pf-icon-unknown"></i>
<i class="pf-icon-unlocked"></i>
<i class="pf-icon-unplugged"></i>
<i class="pf-icon-user"></i>
<i class="pf-icon-users"></i>
<i class="pf-icon-virtual-machine"></i>
<i class="pf-icon-volume"></i>
<i class="pf-icon-warning-triangle"></i>
<i class="pf-icon-zone"></i>
  {{/card-body}}
  {{#> card-footer}}
    Footer
  {{/card-footer}}
{{/card}}
```

### With image and action
```hbs
{{#> card card--id="card-action-example-1"}}
  {{#> card-header}}
    {{#> card-header-main}}
      <img src="/assets/images/pf_logo.svg" width="300px" alt="Logo">
    {{/card-header-main}}
    {{#> card-actions}}
      {{#> dropdown id=(concat card--id "-dropdown-kebab-right-aligned") dropdown--IsActionMenu="true" dropdown-toggle--modifier="pf-m-plain" dropdown--HasKebabIcon="true" aria-label="Actions"}}
      {{/dropdown}}
      <input type="checkbox" id="{{card--id}}-check" name="{{card--id}}-check" aria-labelledby="{{card--id}}-check-label">
    {{/card-actions}}
  {{/card-header}}
  {{#> card-title card-title--attribute=(concat 'id="' card--id '-check-label"')}}
    Title
  {{/card-title}}
  {{#> card-body}}
    Body
  {{/card-body}}
  {{#> card-footer}}
    Footer
  {{/card-footer}}
{{/card}}
```

### With title in head
```hbs
{{#> card card--id="card-action-example-2"}}
  {{#> card-header}}
    {{#> card-actions}}
      {{#> dropdown id=(concat card--id "-dropdown-kebab-right-aligned") dropdown--IsActionMenu="true" dropdown-toggle--modifier="pf-m-plain" dropdown--HasKebabIcon="true" aria-label="Actions"}}
      {{/dropdown}}
      <input type="checkbox" id="{{card--id}}-check" name="{{card--id}}-check" aria-labelledby="{{card--id}}-check-label">
    {{/card-actions}}
    {{#> card-title card-title--attribute=(concat 'id="' card--id '-check-label"')}}
      This is a really really really really really really really really really really long title
    {{/card-title}}
  {{/card-header}}
  {{#> card-body}}
    Body
  {{/card-body}}
  {{#> card-footer}}
    Footer
  {{/card-footer}}
{{/card}}
```

### With only actions in head (no title/footer)
```hbs
{{#> card card--id="card-action-example-3"}}
  {{#> card-header}}
    {{#> card-actions}}
      {{#> dropdown id=(concat card--id "-dropdown-kebab-right-aligned") dropdown--IsActionMenu="true" dropdown-toggle--modifier="pf-m-plain" dropdown--HasKebabIcon="true" aria-label="Actions"}}
      {{/dropdown}}
      <input type="checkbox" id="{{card--id}}-check" name="{{card--id}}-check" aria-labelledby="{{card--id}}-check-label">
    {{/card-actions}}
  {{/card-header}}
  {{#> card-body card-body--attribute=(concat 'id="' card--id '-check-label"')}}
    This is the card body, there are only actions in the card head.
  {{/card-body}}
{{/card}}
```
### With only image in head
```hbs
{{#> card}}
  {{#> card-header}}
    {{#> card-header-main}}
      <img src="/assets/images/pf_logo.svg" width="300px" alt="Logo">
    {{/card-header-main}}
  {{/card-header}}
  {{#> card-title}}
    Title
  {{/card-title}}
  {{#> card-body}}
    Body
  {{/card-body}}
  {{#> card-footer}}
    Footer
  {{/card-footer}}
{{/card}}
```

### With no footer
```hbs
{{#> card}}
  {{#> card-title}}
    Title
  {{/card-title}}
  {{#> card-body}}
    This card has no footer
  {{/card-body}}
{{/card}}
```

### With no title
```hbs
{{#> card}}
  {{#> card-body}}
    This card has no title
  {{/card-body}}
  {{#> card-footer}}
    Footer
  {{/card-footer}}
{{/card}}
```

### With only a content section
```hbs
{{#> card}}
  {{#> card-body}}
    Body
  {{/card-body}}
{{/card}}
```

### With multiple body sections
```hbs
{{#> card}}
  {{#> card-title}}
    Title
  {{/card-title}}
  {{#> card-body}}
    Body
  {{/card-body}}
  {{#> card-body}}
    Body
  {{/card-body}}
  {{#> card-body}}
    Body
  {{/card-body}}
  {{#> card-footer}}
    Footer
  {{/card-footer}}
{{/card}}
```

### With only one body that fills
```hbs
{{#> card}}
  {{#> card-title}}
    Title
  {{/card-title}}
  {{#> card-body card-body--modifier="pf-m-no-fill"}}
    Body pf-m-no-fill
  {{/card-body}}
  {{#> card-body card-body--modifier="pf-m-no-fill"}}
    Body pf-m-no-fill
  {{/card-body}}
  {{#> card-body}}
    Body
  {{/card-body}}
  {{#> card-footer}}
    Footer
  {{/card-footer}}
{{/card}}
```

### Compact
```hbs
{{#> card card--modifier="pf-m-compact"}}
  {{#> card-title}}
    Title
  {{/card-title}}
  {{#> card-body}}
    Body
  {{/card-body}}
  {{#> card-footer}}
    Footer
  {{/card-footer}}
{{/card}}
```

### Hover
```hbs
{{#> card card--modifier="pf-m-hoverable"}}
  {{#> card-title}}
    Title
  {{/card-title}}
  {{#> card-body}}
    Body
  {{/card-body}}
  {{#> card-footer}}
    Footer
  {{/card-footer}}
{{/card}}
```

### Selectable
```hbs
{{#> card card--modifier="pf-m-selectable" card--attribute='tabindex="0"'}}
  {{#> card-title}}
    Title
  {{/card-title}}
  {{#> card-body}}
    Body
  {{/card-body}}
  {{#> card-footer}}
    Footer
  {{/card-footer}}
{{/card}}
```

### Selected
```hbs
{{#> card card--modifier="pf-m-selectable pf-m-selected" card--attribute='tabindex="0"'}}
  {{#> card-title}}
    Title
  {{/card-title}}
  {{#> card-body}}
    Body
  {{/card-body}}
  {{#> card-footer}}
    Footer
  {{/card-footer}}
{{/card}}
```

### Flat
```hbs
{{#> card card--modifier="pf-m-flat"}}
  {{#> card-title}}
    Title
  {{/card-title}}
  {{#> card-body}}
    Body
  {{/card-body}}
  {{#> card-footer}}
    Footer
  {{/card-footer}}
{{/card}}
```

## Documentation
### Overview
A card is a generic rectangular container that can be used to build other components. Use a default card for regular page content and the compact variation for dashboard or small cards.

### Accessibility
| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `tabindex="0"` | `.pf-c-card.pf-m-selectable` | Inserts the selectable card into the tab order of the page so that it is focusable. **Required** |

### Usage
| Class | Applied | Outcome |
| ---- | ---- | ---- |
| `.pf-c-card` | `<div>` | Creates a card component.  **Required** |
| `.pf-c-card__title` | `<div>` | Creates the title of a card. |
| `.pf-c-card__body` | `<div>` | Creates the body of a card. By default, the body element fills the available space in the card. You can use multiple `.pf-c-card__body` elements. |
| `.pf-c-card__footer` | `<div>` | Creates the footer of a card. |
| `.pf-c-card__header` | `<div>` | Creates the header of the card where images, actions, and/or the card title can go. |
| `.pf-c-card__actions` | `<div>` | Creates an actions element to be used in the card header. |
| `.pf-c-card__header-main` | `<div>` | Creates a wrapper element to be used in the card header when using an image, logo, or text. |
| `.pf-m-compact` | `.pf-c-card` | Creates a compact variation of the card component that involves smaller font sizes and spacing. This variation is for use on dashboards and where a smaller card is preferred. |
| `.pf-m-no-fill` | `.pf-c-card__body` | Sets a `.pf-c-card__body` to not fill the available space in `.pf-c-card`. `.pf-m-no-fill` can be added to multiple card bodies. |
| `.pf-m-hoverable` | `.pf-c-card` | Modifies the card to include hover styles on `:hover`. |
| `.pf-m-selectable` | `.pf-c-card` | Modifies a selectable card so that it is selectable. |
| `.pf-m-selected` | `.pf-c-card.pf-m-selectable` | Modifies a selectable card for the selected state. |
| `.pf-m-flat` | `.pf-c-card` | Modifies the card to have a border instead of a shadow. `.pf-m-flat` is for use in layouts where cards are against a white background.
