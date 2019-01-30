## Overview

## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `aria-label="[button label text]"` | `.pf-c-clipboard-copy__group-toggle` `.pf-c-clipboard-copy__group-copy` |  Provides an accessible name for the button when an icon is used instead of text. **Required when an icon is used with no supporting text.** |
| `aria-hidden="true"` | `<i>` |  Hides the icon from assistive technologies. 
| `aria-controls="[id of expanded element]"` | `.pf-c-clipboard-copy__group-toggle` | Identifies the element controlled by the toggle button. **Required** |
| `aria-expanded="true"` | `.pf-c-clipboard-copy__group-toggle` | Indicates that the expandable content is visible. |
| `aria-expanded="false"` | `.pf-c-clipboard-copy__group-toggle` | Indicates that the expandable content is hidden. |
| `hidden` | `.pf-c-clipboard-copy__expanded-content` | Indicates that the expanded content is hidden so that it isn't visible in the UI and isn't accessed by assistive technologies.

## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-clipboard-copy` | `<div>` | Initiates a clipboard copy component. |
| `.pf-c-clipboard-copy__group` | `<div>` | Initiates a wrapper for the clipboard copy group. |
| `.pf-c-clipboard-copy__group-toggle` | `<button>` | Initiates a toggle button that expands content. |
| `.pf-c-clipboard-copy__group-text` | `<span>` |  Initiates text within the clipboard copy component. **Required** |
| `.pf-c-clipboard-copy__group-copy` | `<button>` | Initiates a copy button with the clipboard icon. **Required** |
| `.pf-c-clipboard-copy__expanded-content` | `<div>` | Initiates an expanded text element. |
| `.pf-m-expanded` | `.pf-c-clipboard-copy__group-toggle` | Modifies toggle button for the expanded state. |
| `.pf-m-hover` | `.pf-c-clipboard-copy__group-toggle` `.pf-c-clipboard-copy__group-copy`| Modifies buttons for the hover state. |
| `.pf-m-active` | `.pf-c-clipboard-copy__group-toggle `| Modifies toggle button for the hover state. |
