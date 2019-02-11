## Overview


## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `aria-expanded="false"` | `.pf-c-accordion__button` | Indicates that the expanded content element is hidden. **Required**|
| `aria-expanded="true"` | `.pf-c-accordion__button`, `.pf-c-accordion__expanded-content` | Indicates that the expanded content element is visible. **Required**|
| `hidden` | `.pf-c-accordion__expanded-content` | Indicates that the expanded content element is hidden. Use with `aria-expanded="false"` **Required** |
| `aria-hidden="true"` | `.pf-c-accordion__button-toggle-icon` | Hides the icon from assistive technologies.**Required** |


## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-accordion` | `<ul>` | Initiates an accordion component. **Required**|
| `.pf-c-accordion__button` | `<button>` | Initiates a button in the accordion. **Required** |
| `.pf-c-accordion__button-text` | `<span>` | Initiates the text inside the button. **Required** |
| `.pf-c-accordion__button-toggle` | `<span>` | Initiates the toggle inside the button. **Required** |
| `.pf-c-accordion__button-toggle-icon` | `<i>` | Initiates the toggle icon inside the toggle. **Required** |
| `.pf-c-accordion__expanded-content` | `<div>` | Initiates an expanded content. **Must be paired with a button** |
| `.pf-m-expanded` | `.pf-c-accordion__button`, `.pf-c-accordion__expanded-content` | Modifies the accordion button and expanded content for the expanded state. |
| `.pf-m-hover` | `.pf-c-accordion__button` | Modifies the accordion button for the hover state. |
| `.pf-m-active` | `.pf-c-accordion__button` | Modifies the accordion button for the active state. |
| `.pf-m-focus` | `.pf-c-accordion__button` | Modifies the accordion button for the focus state. |
| `.pf-m-fixed` | `.pf-c-accordion__expanded-content` | Modifies the expanded content for the fixed state. |
