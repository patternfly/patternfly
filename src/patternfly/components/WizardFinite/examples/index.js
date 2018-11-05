import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import wizardFiniteSimpleExampleRaw from '!raw!./wizard-finite-simple-example.hbs';
import WizardfiniteSimpleExample from './wizard-finite-simple-example.hbs';
import docs from '../docs/code.md';
import '../wizard-finite.scss';

export const Docs = docs;

export default () => {
  const wizardFiniteSimpleExample = WizardfiniteSimpleExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Wizard (Finite)" handlebars={wizardFiniteSimpleExampleRaw}>
        {wizardFiniteSimpleExample}
      </Example>
    </Documentation>
  );
};
