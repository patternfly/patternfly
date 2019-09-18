---
title: Modal
section: demos
---

<!-- ## Overview -->

This demo implements a basic modal, including the backdrop. Both the normal and large variations of the modal are shown.

<!-- ## Accessibility

| Attribute | Applies to | Outcome |
| -- | -- | -- |
| `role="dialog"` | `.pf-c-modal-box` | Identifies the element that serves as the modal container. **Required**|
| `aria-labeledby="TitleID"` | `.pf-c-modal-box` | Gives the modal an accessible name by referring to the element that provides the dialog title. **Required** |
| `aria-describedby="ContentID"` | `.pf-c-modal-box` | Gives the modal an accessible description by referring to the modal content that describes the primary message or purpose of the dialog. Not used if there is no static text that describes the modal. |
| `aria-modal="true"` | `.pf-c-modal-box` | Tells assistive technologies that the windows underneath the current modal are not available for interaction. **Required**|

## Usage
 -->

```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import ModalExampleRaw from '!!raw-loader!./modal-example.hbs';
import ModalScrollExampleRaw from '!!raw-loader!./modal-scroll-example.hbs';
import ModalLgExampleRaw from '!!raw-loader!./modal-right-aligned-footer-example.hbs';
import ModalRightAlignedFooterExampleRaw from '!!raw-loader!./modal-lg-example.hbs';
import docs from '../docs/code.md';
import ModalExample from './modal-example.hbs';
import ModalScrollExample from './modal-scroll-example.hbs';
import ModalLgExample from './modal-lg-example.hbs';
import ModalRightAlignedFooterExample from './modal-right-aligned-footer-example.hbs';

export const Docs = docs;

export default props => {
  const modalExample = ModalExample();
  const modalScrollExample = ModalScrollExample();
  const modalLgExample = ModalLgExample();
  const modalRightAlignedFooterExample = ModalRightAlignedFooterExample();
  const headingText = 'Modal demo';

  return (
    <Documentation data={props} docs={Docs} heading={headingText}>
      <Example heading="Modal demo" fullPageOnly="true" handlebars={ModalExampleRaw}>
        {modalExample}
      </Example>
      <Example
        heading="Modal demo - content long enough to scroll"
        fullPageOnly="true"
        handlebars={ModalScrollExampleRaw}
      >
        {modalScrollExample}
      </Example>
      <Example heading="Modal demo - large" fullPageOnly="true" handlebars={ModalLgExampleRaw}>
        {modalLgExample}
      </Example>
      <Example
        heading="Modal demo - legacy footer button alignment (right aligned)"
        fullPageOnly="true"
        handlebars={ModalRightAlignedFooterExampleRaw}
      >
        {modalRightAlignedFooterExample}
      </Example>
    </Documentation>
  );
};
```