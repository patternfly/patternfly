---
title: Accordion
section: components
cssPrefix: pf-c-accordion
---
import Fluid from './accordion-fluid-example.hbs';
import FluidRaw from '!!raw-loader!./accordion-fluid-example.hbs';
import Fixed from './accordion-fixed-example.hbs';
import FixedRaw from '!!raw-loader!./accordion-fixed-example.hbs';
import DefinitionList from './accordion-definition-list-example.hbs';
import DefinitionListRaw from '!!raw-loader!./accordion-definition-list-example.hbs';

## Examples
<Example
  title="Accordion fluid example"
  html={Fluid()}
  handlebars={FluidRaw} />

<Example
  title="Accordion fixed example"
  html={Fixed()}
  handlebars={FixedRaw} />

<Example
  title="Accordion definition list example"
  html={DefinitionList()}
  handlebars={DefinitionListRaw} />

## Documentation
### Overview

There are two variations to build the accordion component:
One way uses `<div>` and `<h1 - h6>` tags to build the component. 
In these examples `.pf-c-accordion` uses `<div>`, `.pf-c-accordion__toggle` uses `<h3><button>`, and `.pf-c-accordion__expanded-content` uses `<div>`. The heading level that you use should fit within the rest of the headings outlined on your page.

Another variation is using the definition list:
In these examples `.pf-c-accordion` uses `<dl>`, `.pf-c-accordion__toggle` uses `<dt><button>`, and `.pf-c-accordion__expanded-content` uses `<dd>`.

### Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-expanded="false"` | `.pf-c-accordion__toggle` | Indicates that the expanded content element is hidden. **Required**|
| `aria-expanded="true"` | `.pf-c-accordion__toggle` | Indicates that the expanded content element is visible. **Required**|
| `hidden` | `.pf-c-accordion__expanded-content` | Indicates that the expanded content element is hidden. Use with `aria-expanded="false"` **Required** |
| `aria-hidden="true"` | `.pf-c-accordion__toggle-icon` | Hides the icon from assistive technologies.**Required** |

### Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-accordion` | `<div>`, `<dl>` | Initiates an accordion component. **Required**|
| `.pf-c-accordion__toggle` | `<h1-h6><button>`, `<dt><button>` | Initiates a toggle in the accordion. **Required** |
| `.pf-c-accordion__toggle-text` | `<span>` | Initiates the text inside the toggle. **Required** |
| `.pf-c-accordion__toggle-icon` | `<i>` | Initiates the toggle icon. **Required** |
| `.pf-c-accordion__expanded-content` | `<div>`, `<dd>` | Initiates expanded content. **Must be paired with a button** |
| `.pf-c-accordion__expanded-content-body` | `<div>` | Initiates expanded content body. **Required** |
| `.pf-m-expanded` | `.pf-c-accordion__toggle`, `.pf-c-accordion__expanded-content` | Modifies the accordion button and expanded content for the expanded state. |
| `.pf-m-hover` | `.pf-c-accordion__toggle` | Modifies the accordion button for the hover state. |
| `.pf-m-active` | `.pf-c-accordion__toggle` | Modifies the accordion button for the active state. |
| `.pf-m-focus` | `.pf-c-accordion__toggle` | Modifies the accordion button for the focus state. |
| `.pf-m-fixed` | `.pf-c-accordion__expanded-content` | Modifies the expanded content for the fixed state. |
