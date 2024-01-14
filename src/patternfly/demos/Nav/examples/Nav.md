---
id: Navigation
section: components
---

## Examples
### Default nav
```hbs isFullscreen
{{> page-template page-template--id="nav-basic-example"}}
```

### Grouped nav
```hbs isFullscreen
{{> page-template page-template--id="nav-grouped-nav-example" page-template-sidebar--nav--IsGrouped="true"}}
```

### Expandable nav
```hbs isFullscreen
{{> page-template page-template--id="nav-expandable-example" page-template-sidebar--nav--IsExpandable="true"}}
```

### Horizontal nav
```hbs isFullscreen
{{> page-template page-template--id="nav-horizontal-example"
      page-template--HasNoSidebar="true"
      masthead-template--HasHorizontalNav="true"
      masthead-template--HasNoToggle="true"
}}
```

### Horizontal subnav
```hbs isFullscreen
{{> page-template page-template--id="nav-horizontal-subnav-example" page-template-sidebar--nav--IsExpandable="true"}}
```

### Horizontal nav with horizontal subnav
```hbs isFullscreen
{{> page-template
      page-template--id="nav-horizontal-example"
      page-template--HasNoSidebar="true"
      masthead-template--modifier="pf-m-display-stack pf-m-display-inline-on-lg"
      masthead-template--HasHorizontalNav="true"
      page-template--HasHorizontalSubnav="true"
}}
```
