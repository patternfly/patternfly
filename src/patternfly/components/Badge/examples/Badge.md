---
id: Badge
section: components
cssPrefix: pf-v6-c-badge
---

## Examples
### Read
```ts
interface CoreBadgeProps {
  className: string;
  children: React.ReactNode;
  screenReaderText: string;
}

const CoreBadge: React.FunctionComponent<CoreBadgeProps> = ({
  className,
  children,
  screenReaderText
}: CoreBadgeProps) => (
  <span className={`pf-v6-c-badge ${className}`}>
    {children}
    {screenReaderText && <span className="pf-v6-screen-reader">{screenReaderText}</span>}
  </span>
);

const readExample = () => {
  const readValues = ['7', '21', '245', '999+'];
  return (
    <>
      {readValues.map((value, index) => (
        <CoreBadge className="pf-m-read" key={index}>{value}</CoreBadge>
      ))}
    </>
  )
}
```

### Unread
```ts
interface CoreBadgeProps {
  className: string;
  children: React.ReactNode;
  screenReaderText: string;
}

const CoreBadge: React.FunctionComponent<CoreBadgeProps> = ({
  className,
  children,
  screenReaderText
}: CoreBadgeProps) => (
  <span className={`pf-v6-c-badge ${className}`}>
    {children}
    {screenReaderText && <span className="pf-v6-screen-reader">{screenReaderText}</span>}
  </span>
);

const unreadExample = () => {
  const unReadValues = ['7', '21', '245', '999+'];
  return (
    <>
      {unReadValues.map((value, index) => (
        <CoreBadge className="pf-m-unread" key={index} screenReaderText="unread messages">
          {value}
        </CoreBadge>
      ))}
    </>
  )
}
```

### Disabled
```hbs
{{> badge badge--modifier="pf-m-read" badge--IsDisabled=true badge--text="7"}}
{{> badge badge--modifier="pf-m-read" badge--IsDisabled=true badge--text="24"}}
{{> badge badge--IsUnread=true badge--IsDisabled=true badge--text="240"}}
{{> badge badge--IsUnread=true badge--IsDisabled=true badge--text="999+"}}
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
