---
title: ClipboardCopy
section: components
cssPrefix: pf-c-clipboard-copy
---
import NoExpansionExampleRaw from '!!raw-loader!./clipboard-copy-no-expansion-example.hbs';
import ExpansionExampleRaw from '!!raw-loader!./clipboard-copy-expansion-example.hbs';
import NoExpansionExample from './clipboard-copy-no-expansion-example.hbs';
import ExpansionExample from './clipboard-copy-expansion-example.hbs';
      
<Example 
  title="Copy to clipboard no expansion" 
  handlebars={ClipboardCopyNoExpansionExampleRaw}>
  html={NoExpansionExample()} />

<Example 
  title="Copy to clipboard expansion" 
  handlebars={ExpansionExampleRaw} 
  minHeight="20em">
  html={ExpansionExample()} />

## Overview

## Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-label="Show content"` | `.pf-c-clipboard-copy__group-toggle` |  Provides an accessible name for the button when an icon is used instead of text. **Required when an icon is used with no supporting text.** |
| `aria-label="Copy to clipboard"` | `.pf-c-clipboard-copy__group-copy` |  Provides an accessible name for the button when an icon is used instead of text. **Required when an icon is used with no supporting text.** |
| `aria-label="[input label text]"` | `.pf-c-form-control` | Provides an accessible label for the input. Provide a label that describes the contents in the input. **Required** |
| `aria-hidden="true"` | `<i>` |  Hides the icon from assistive technologies. 
| `aria-controls="[id of expandable element]"` | `.pf-c-clipboard-copy__group-toggle` | Identifies the element controlled by the toggle button. **Required** |
| `aria-expanded="true"` | `.pf-c-clipboard-copy__group-toggle` | Indicates that the expandable content is visible. |
| `aria-expanded="false"` | `.pf-c-clipboard-copy__group-toggle` | Indicates that the expandable content is hidden. |
| `hidden` | `.pf-c-clipboard-copy__expandable-content` | Indicates that the expandable content is hidden so that it isn't visible in the UI and isn't accessed by assistive technologies. |
| `aria-labelledby="[id of button] [id of input label]"` | `.pf-c-clipboard-copy__group-copy`, `.pf-c-clipboard-copy__group-toggle` | Provides an accessible name that is unique and communicates context of the button. Required when more than one ClipboardCopy component exists on the page. **Important:** If the label is defined on the `<input>` using `aria-label`, then use the `id` of the `<input>`. If the label is defined in a `<label>`, then use the `id` of the `<label>`. **Alternatively** this attribute can be ignored if the text input label is defined as part of the value in `aria-label`. |

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-clipboard-copy` | `<div>` | Initiates a clipboard copy component. **Required** |
| `.pf-c-clipboard-copy__group` | `<div>` | Initiates a wrapper for the clipboard copy group. **Required** |
| `.pf-c-clipboard-copy__group-toggle` | `<button>` | Initiates a toggle button that expands content. |
| `.pf-c-clipboard-copy__group-toggle-icon` | `<i>` | Initiates a toggle button icon. |
| `.pf-c-clipboard-copy__group-copy` | `<button>` | Initiates a copy button with the clipboard icon. **Required** |
| `.pf-c-clipboard-copy__expandable-content` | `<div>` | Initiates an expandable element. |
| `.pf-m-hover` | `.pf-c-clipboard-copy__group-toggle`, `.pf-c-clipboard-copy__group-copy`| Modifies buttons for the hover state. |
| `.pf-m-active` | `.pf-c-clipboard-copy__group-toggle`, `.pf-c-clipboard-copy__group-copy`| Modifies toggle button for the active state. |
| `.pf-m-focus` | `.pf-c-clipboard-copy__group-toggle`, `.pf-c-clipboard-copy__group-copy`| Modifies toggle button for the focus state. |
| `.pf-m-expanded` | `.pf-c-clipboard-copy__group-toggle` | Modifies toggle button for the expanded state. |
