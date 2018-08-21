import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import FormControlsInputExampleRaw from '!raw!./form-controls-input-example.hbs';
import FormControlsSelectExampleRaw from '!raw!./form-controls-select-example.hbs';
import FormControlsTextareaExampleRaw from '!raw!./form-controls-textarea-example.hbs';
import FormControlsInputExample from './form-controls-input-example.hbs';
import FormControlsSelectExample from './form-controls-select-example.hbs';
import FormControlsTextareaExample from './form-controls-textarea-example.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const formControlsInputExample = FormControlsInputExample();
  const formControlsSelectExample = FormControlsSelectExample();
  const formControlsTextareaExample = FormControlsTextareaExample();
  const headingText = 'Form Controls';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading="Input Example" handlebars={FormControlsInputExampleRaw}>
        {formControlsInputExample}
      </Example>
      <Example heading="Select Example" handlebars={FormControlsSelectExampleRaw}>
        {formControlsSelectExample}
      </Example>
      <Example heading="Textarea Example" handlebars={FormControlsTextareaExampleRaw}>
        {formControlsTextareaExample}
      </Example>
    </Documentation>
  );
};
