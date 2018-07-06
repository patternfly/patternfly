import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import docs from '../docs/code.md';
import FormTextInputExample from './form-text-input-example.hbs';
import FormSelectInputExample from './form-select-input-example.hbs';
import FormChecksRadioExample from './form-check-radio-example.hbs';
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
      <Example heading="Checkboxes/Radios">{formChecksRadioExample}</Example>
      <Example heading="Text inputs">{formTextInputExample}</Example>
      <Example heading="Select inputs">{formSelectInputExample}</Example>
      <Example heading="Textareas">{formTextareaExample}</Example>
    </Documentation>
  );
};
