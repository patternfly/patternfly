import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import docs from '../docs/code.md';
import TextInputs from './text-inputs.hbs';
import TextInputsAddons from './text-inputs-addons.hbs';
import SelectInputs from './select-inputs.hbs';
import ChecksRadios from './checks-radios.hbs';
import Textareas from './textareas.hbs';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const textInputs = TextInputs();
  const textInputsAddons = TextInputsAddons();
  const selectInputs = SelectInputs();
  const checksRadios = ChecksRadios();
  const textareas = Textareas();

  return (
    <Documentation docs={Docs}>
      <Example heading="Checkboxes/Radios">{checksRadios}</Example>
      <Example heading="Select inputs">{selectInputs}</Example>
      <Example heading="Text inputs">{textInputs}</Example>
      <Example heading="Textareas">{textareas}</Example>
      <Example heading="Text inputs with addons">{textInputsAddons}</Example>
    </Documentation>
  );
};
