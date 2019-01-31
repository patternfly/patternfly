## Overview


## Accessibility

| Attribute | Applied To | Outcome |
| -- | -- | -- |
| `aria-expanded="false"` | `.pf-c-accordion__item` | Indicates that the expanded content element is hidden. **Required**|
| `aria-expanded="true"` | `.pf-c-accordion__item`, `.pf-c-accordion__item-expanded-content` | Indicates that the expanded content element is visible. **Required**|
| `hidden` | `.pf-c-accordion__item-expanded-content` | Indicates that the expanded content element is hidden.**Required** |
| `aria-hidden="true"` | `.pf-c-accordion__item-button-toggle` `<i>` | Hides the icon from assistive technologies.**Required** |
| `aria-controls="[id of .pf-c-accordion__item-expanded-content]"` | `.pf-c-accordion__item__button` | Identifies the element controlled by the button. **Required**.


## Usage

| Class | Applied To | Outcome |
| -- | -- | -- |
| `.pf-c-accordion` | `<ul>` | Initiates an accordion component. **Required**|
| `.pf-c-accordion__item` | `<li>` | Initiates a list item in the accordion component. **Required** |
| `.pf-c-accordion__item-button` | `<button>` | Initiates the button in the accordion item. **Required** |
| `.pf-c-accordion__item-button-text` | `<span>` | Initiates the text inside the button. **Required** |
| `.pf-c-accordion__item-button-toggle` | `<span>` | Initiates the toggle inside the button. **Required** |
| `.pf-c-accordion__item-expanded-content` | `<div>` | Initiates the expanded content inside the accordion item. **Required** |
| `.pf-m-expanded` | `.pf-c-accordion__item` | Modifies the accordion item for the expanded state. |
| `.pf-m-hover` | `.pf-c-accordion__item` | Modifies the accordion item for the hover state. |
| `.pf-m-active` | `.pf-c-accordion__item` | Modifies the accordion item for the active state. |
| `.pf-m-focus` | `.pf-c-accordion__item-button` | Modifies the accordion item button for the focus state. |
| `.pf-m-fixed` | `.pf-c-accordion__item-expanded-content` | Modifies the expanded content for the fixed state. |
