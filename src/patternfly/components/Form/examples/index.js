import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import FormTextInputExampleRaw from '!raw!./form-text-input-example.hbs';
import FormInputGroupExampleRaw from '!raw!./form-input-group-example.hbs';
import FormSelectInputExampleRaw from '!raw!./form-select-input-example.hbs';
import FormCheckRadioExampleRaw from '!raw!./form-check-radio-example.hbs';
import FormTextareaExampleRaw from '!raw!./form-textarea-example.hbs';
import FormTextInputExample from './form-text-input-example.hbs';
import FormInputGroupExample from './form-input-group-example.hbs';
import FormSelectInputExample from './form-select-input-example.hbs';
import FormCheckRadioExample from './form-check-radio-example.hbs';
import FormTextareaExample from './form-textarea-example.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const formTextInputExample = FormTextInputExample();
  const formInputGroupExample = FormInputGroupExample();
  const formSelectInputExample = FormSelectInputExample();
  const formCheckRadioExample = FormCheckRadioExample();
  const formTextareaExample = FormTextareaExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Checkboxes/Radios" handlebars={FormCheckRadioExampleRaw}>
        {formCheckRadioExample}
      </Example>
      <Example heading="Text inputs" handlebars={FormTextInputExampleRaw}>
        {formTextInputExample}
      </Example>
      <Example heading="Input groups" handlebars={FormInputGroupExampleRaw}>
        {formInputGroupExample}
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
