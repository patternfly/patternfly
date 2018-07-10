import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import docs from '../docs/code.md';
import FormTextInputExampleRaw from '!raw!./form-text-input-example.hbs';
import FormTextInputExample from './form-text-input-example.hbs';
import FormSelectInputExampleRaw from '!raw!./form-select-input-example.hbs';
import FormSelectInputExample from './form-select-input-example.hbs';
import FormChecksRadioExampleRaw from '!raw!./form-check-radio-example.hbs';
import FormChecksRadioExample from './form-check-radio-example.hbs';
import FormTextareaExampleRaw from '!raw!./form-textarea-example.hbs';
import FormTextareaExample from './form-textarea-example.hbs';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const formTextInputExample = FormTextInputExample();
  const formSelectInputExample = FormSelectInputExample();
  const formChecksRadioExample = FormChecksRadioExample();
  const formTextareaExample = FormTextareaExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Checkboxes/Radios" handlebars={FormChecksRadioExampleRaw}>
      {formChecksRadioExample}
      </Example>
      <Example heading="Text inputs" handlebars={FormTextInputExampleRaw}>
      {formTextInputExample}
      </Example>
      <Example heading="Select inputs" handlebars={FormSelectInputExampleRaw}>
      {formSelectInputExample}
      </Example>
      <Example heading="Textareas" handlebars={FormTextareaExampleRaw}>
      {formTextareaExample}
      </Example>
    </Documentation>
  );
};
