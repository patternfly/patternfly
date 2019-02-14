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

export default () => {
  const formControlInputExample = FormControlInputExample();
  const formControlSelectExample = FormControlSelectExample();
  const formControlTextareaExample = FormControlTextareaExample();
  const headingText = 'Form Controls';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading="Input Example" handlebars={FormControlInputExampleRaw}>
        {formControlInputExample}
      </Example>
      <Example heading="Select Example" handlebars={FormControlSelectExampleRaw}>
        {formControlSelectExample}
      </Example>
      <Example heading="Textarea Example" handlebars={FormControlTextareaExampleRaw}>
        {formControlTextareaExample}
      </Example>
    </Documentation>
  );
};
