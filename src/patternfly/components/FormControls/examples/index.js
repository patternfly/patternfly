import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import docs from '../docs/code.md';
import FormcontrolsInputExampleRaw from '!raw!./form-controls-input-example.hbs';
import FormcontrolsInputExample from './form-controls-input-example.hbs';
import FormcontrolsSelectExampleRaw from '!raw!./form-controls-select-example.hbs';
import FormcontrolsSelectExample from './form-controls-select-example.hbs';
import FormcontrolsTextareaExampleRaw from '!raw!./form-controls-textarea-example.hbs';
import FormcontrolsTextareaExample from './form-controls-textarea-example.hbs';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const formControlsInputExample = FormcontrolsInputExample();
  const formControlsSelectExample = FormcontrolsSelectExample();
  const formControlsTextareaExample = FormcontrolsTextareaExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Input Example" handlebars={FormcontrolsInputExampleRaw}>{formControlsInputExample}</Example>
      <Example heading="Select Example" handlebars={FormcontrolsSelectExampleRaw}>{formControlsSelectExample}</Example>
      <Example heading="Textarea Example" handlebars={FormcontrolsTextareaExampleRaw}>{formControlsTextareaExample}</Example>
    </Documentation>
  );
};
