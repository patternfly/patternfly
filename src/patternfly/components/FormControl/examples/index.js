import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import FormControlInputExampleRaw from '!raw!./form-control-input-example.hbs';
import FormControlSelectExampleRaw from '!raw!./form-control-select-example.hbs';
import FormControlTextareaExampleRaw from '!raw!./form-control-textarea-example.hbs';
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
  const variablesRoot = 'pf-c-form-control';

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
