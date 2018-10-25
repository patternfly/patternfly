import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import wizardFiniteSimpleExampleRaw from '!raw!./wizard-finite-simple-example.hbs';
import wizardFiniteComplexExampleRaw from '!raw!./wizard-finite-complex-example.hbs';
import WizardfiniteSimpleExample from './wizard-finite-simple-example.hbs';
import WizardfiniteComplexExample from './wizard-finite-complex-example.hbs';
import wizardFiniteComplexExampleDoc from '../docs/wizard-finite-complex.md';
import docs from '../docs/code.md';
import '../wizard-finite.scss';

export const Docs = docs;

export default () => {
  const wizardFiniteSimpleExample = WizardfiniteSimpleExample();
  const wizardFiniteComplexExample = WizardfiniteComplexExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Wizard (Finite) - Simple" handlebars={wizardFiniteSimpleExampleRaw}>
        {wizardFiniteSimpleExample}
      </Example>
      <Example
        heading="Wizard (Finite) - Complex"
        handlebars={wizardFiniteComplexExampleRaw}
        docs={wizardFiniteComplexExampleDoc}
        minHeight="20em"
      >
        {wizardFiniteComplexExample}
      </Example>
    </Documentation>
  );
};
