---
title: Accordion
section: components
---

```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import accordionFluidExampleRaw from '!raw!./accordion-fluid-example.hbs';
import accordionFixedExampleRaw from '!raw!./accordion-fixed-example.hbs';
import accordionDefinitionListExampleRaw from '!raw!./accordion-definition-list-example.hbs';
import AccordionFluidExample from './accordion-fluid-example.hbs';
import AccordionFixedExample from './accordion-fixed-example.hbs';
import AccordionDefinitionListExample from './accordion-definition-list-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default props => {
  const accordionFluidExample = AccordionFluidExample();
  const accordionFixedExample = AccordionFixedExample();
  const accordionDefinitionListExample = AccordionDefinitionListExample();
  const headingText = 'Accordion';
  const variablesRoot = 'pf-c-accordion';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Accordion fluid example" handlebars={accordionFluidExampleRaw}>
        {accordionFluidExample}
      </Example>
      <Example heading="Accordion fixed example" handlebars={accordionFixedExampleRaw}>
        {accordionFixedExample}
      </Example>
      <Example heading="Accordion definition list example" handlebars={accordionDefinitionListExampleRaw}>
        {accordionDefinitionListExample}
      </Example>
    </Documentation>
  );
};
```

## Overview

There are two variations to build the accordion component:
One way uses `<div>` and `<h1 - h6>` tags to build the component. 
In these examples `.pf-c-accordion` uses `<div>`, `.pf-c-accordion__toggle` uses `<h3><button>`, and `.pf-c-accordion__expanded-content` uses `<div>`. The heading level that you use should fit within the rest of the headings outlined on your page.

Another variation is using the definition list:
In these examples `.pf-c-accordion` uses `<dl>`, `.pf-c-accordion__toggle` uses `<dt><button>`, and `.pf-c-accordion__expanded-content` uses `<dd>`.


## Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-expanded="false"` | `.pf-c-accordion__toggle` | Indicates that the expanded content element is hidden. **Required**|
| `aria-expanded="true"` | `.pf-c-accordion__toggle` | Indicates that the expanded content element is visible. **Required**|
| `hidden` | `.pf-c-accordion__expanded-content` | Indicates that the expanded content element is hidden. Use with `aria-expanded="false"` **Required** |
| `aria-hidden="true"` | `.pf-c-accordion__toggle-icon` | Hides the icon from assistive technologies.**Required** |


## Usage

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

