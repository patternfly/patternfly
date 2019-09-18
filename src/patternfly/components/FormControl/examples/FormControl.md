---
title: Form Control
section: components
cssPrefix: pf-c-form-control
---
```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import FormControlInputExampleRaw from '!!raw-loader!./form-control-input-example.hbs';
import FormControlSelectExampleRaw from '!!raw-loader!./form-control-select-example.hbs';
import FormControlTextareaExampleRaw from '!!raw-loader!./form-control-textarea-example.hbs';
import FormControlInputExample from './form-control-input-example.hbs';
import FormControlSelectExample from './form-control-select-example.hbs';
import FormControlTextareaExample from './form-control-textarea-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const formControlInputExample = FormControlInputExample();
  const formControlSelectExample = FormControlSelectExample();
  const formControlTextareaExample = FormControlTextareaExample();
  const headingText = 'Form control';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Input example" handlebars={FormControlInputExampleRaw}>
        {formControlInputExample}
      </Example>
      <Example heading="Select example" handlebars={FormControlSelectExampleRaw}>
        {formControlSelectExample}
      </Example>
      <Example heading="Textarea example" handlebars={FormControlTextareaExampleRaw}>
        {formControlTextareaExample}
      </Example>
    </Documentation>
  );
};
```

## Overview

Input, textarea, and select are provided in the form controls component for use cases outside of forms. If they are used without label text ensure some sort of label for assistive technologies. (for example: `aria-label`)


## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-form-control` | `<input>`,`<textarea>`, `<select>` |  Initiates an input, textarea or select. For styling of checkboxes or radios see the [check component](../../Check/examples/). **Required**  |
