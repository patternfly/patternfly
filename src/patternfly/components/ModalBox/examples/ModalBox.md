---
title: Modal Box
section: components
cssPrefix: pf-c-modal-box
---
```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import ModalBoxBasicExampleRaw from '!!raw-loader!./modal-box-basic-example.hbs';
import ModalBoxSmExampleRaw from '!!raw-loader!./modal-box-sm-example.hbs';
import ModalBoxLgExampleRaw from '!!raw-loader!./modal-box-lg-example.hbs';
import ModalBoxNoHeaderExampleRaw from '!!raw-loader!./modal-box-no-header-example.hbs';
import ModalBoxBasicExample from './modal-box-basic-example.hbs';
import ModalBoxSmExample from './modal-box-sm-example.hbs';
import ModalBoxLgExample from './modal-box-lg-example.hbs';
import ModalBoxNoHeaderExample from './modal-box-no-header-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const modalBoxBasicExample = ModalBoxBasicExample();
  const modalBoxSmExample = ModalBoxSmExample();
  const modalBoxLgExample = ModalBoxLgExample();
  const modalBoxNoHeaderExample = ModalBoxNoHeaderExample();
  const headingText = 'Modal box';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Modalbox basic example" handlebars={ModalBoxBasicExampleRaw}>
        {modalBoxBasicExample}
      </Example>
      <Example heading="Modalbox small example" handlebars={ModalBoxSmExampleRaw}>
        {modalBoxSmExample}
      </Example>
      <Example heading="Modalbox large example" handlebars={ModalBoxLgExampleRaw}>
        {modalBoxLgExample}
      </Example>
      <Example heading="Modalbox no header example" handlebars={ModalBoxNoHeaderExampleRaw}>
        {modalBoxNoHeaderExample}
      </Example>
    </Documentation>
  );
};
```

## Overview

A modal box is a generic rectangular container that can be used to build modals. A modal box can have three sections: header, body, and footer. Header or body is required. If no `.pf-c-title` is used, `aria-label="[title of modal]"` must be provided for `.pf-c-modal-box`.


## Accessibility

| Attribute | Applies to | Outcome |
| -- | -- | -- |
| `role="dialog"` | `.pf-c-modal-box` | Identifies the element that serves as the modal container. **Required**|
| `aria-labelledby="[id value of .pf-c-title]"` | `.pf-c-modal-box` | Gives the modal an accessible name by referring to the element that provides the dialog title. **Required when .pf-c-title is present** |
| `aria-label="[title of modal]"` | `.pf-c-modal-box` | Gives the modal an accessible name. **Required when `.pf-c-title` is _not_ present** |
| `aria-describedby="[id value of applicable content]"` | `.pf-c-modal-box` | Gives the modal an accessible description by referring to the modal content that describes the primary message or purpose of the dialog. Not used if there is no static text that describes the modal. |
| `aria-modal="true"` | `.pf-c-modal-box` | Tells assistive technologies that the windows underneath the current modal are not available for interaction. **Required**|
| `aria-label="Close"` | `.pf-c-modal-box__close .pf-c-button` | Provides an accessible name for the close button as it uses an icon instead of text. **Required**|
| `aria-hidden="true"` | Parent element containing the page contents when modal is open | Hides main contents of the page from screen readers. The element with `.pf-c-modal-box` must not be a descendent of the element with `aria-hidden="true"`. For more info see [trapping focus](../../../../accessibility-guide#trapping-focus). **Required** |

## Usage

| Class | Applied | Outcome |
| -- | -- | -- |
| `.pf-c-modal-box` | `<div>` | Initiates a modal box. **Required** |
| `.pf-c-button.pf-m-plain` | `<button>` | Initiates a modal box close button. **Required** |
| `.pf-c-title` | `<h1>`,`<h2>`,`<h3>`,`<h4>`,`<h5>`,`<h6>` |  Initiates a title. Always use it with a modifier class. |
| `.pf-c-modal-box__body` | `<div>` | Initiates a modal box body. A modal box body is **required** if there is no modal box header. |
| `.pf-c-modal-box__footer` | `<footer>` | Initiates a modal box footer. |
| `.pf-m-sm` | `.pf-c-modal-box` | Modifies for a small modal box width. |
| `.pf-m-lg` | `.pf-c-modal-box` | Modifies for a large modal box width. |
| `.pf-m-align-left` | `.pf-c-modal-box__foter` | Modifies for buttons in footer to be left aligned. **Required** |
