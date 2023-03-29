---
id: Background image
section: components
cssPrefix: pf-c-background-image
---

## Examples
### Basic
```hbs isFullscreen
{{> background-image}}
```

## Documentation

### Overview
This component puts an image on the background.

### Customizing the background image
In order to use a custom image, pass a new value to the `--pf-c-background-image--BackgroundImage` CSS variable. For example:

```css
--pf-c-background-image--BackgroundImage: url("custom/image/path");
```

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-background-image` | `*` |  A fixed background image is applied to the background of the page. |
