---
id: Badge
section: components
cssPrefix: pf-v6-c-badge
---

## Examples
### Read
```hbs
{{> badge badge--text="7"}}
{{> badge badge--text="24"}}
{{> badge badge--text="240"}}
{{> badge badge--text="999+"}}
```

### Unread
```hbs
{{> badge badge--IsUnread=true badge--text="7"}}
{{> badge badge--IsUnread=true badge--text="24"}}
{{> badge badge--IsUnread=true badge--text="240"}}
{{> badge badge--IsUnread=true badge--text="999+"}}
```

### Disabled
```hbs
{{> badge badge--IsUnread=true badge--IsDisabled=true badge--text="7"}}
{{> badge badge--IsUnread=true badge--IsDisabled=true badge--text="24"}}
{{> badge badge--IsDisabled=true badge--text="240"}}
{{> badge badge--IsDisabled=true badge--text="999+"}}
```

## Documentation
### Overview
Always add a modifier class. Never use the class `.pf-v6-c-badge` on its own.

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-c-badge` | `<span>` | Initiates a badge. **Always use with a modifier class.** |
| `.pf-m-read` | `.pf-v6-c-badge` | Applies read badge styling. |
| `.pf-m-unread` | `.pf-v6-c-badge` | Applies unread badge styling. |
| `.pf-m-disabled` | `.pf-v6-c-badge` | Applies disabled badge styling. For use when a badge is used in a disabled element. |
