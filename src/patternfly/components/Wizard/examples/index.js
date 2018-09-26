import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import wizardFiniteStepsRaw from '!raw!./wizard-finite-steps.hbs';
import wizardComplexExampleRaw from '!raw!./wizard-complex-example.hbs';
import WizardFiniteSteps from './wizard-finite-steps.hbs';
import WizardComplexExample from './wizard-complex-example.hbs';
import wizardComplexExampleDoc from '../docs/wizard-complex.md';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const wizardFiniteSteps = WizardFiniteSteps();
  const wizardComplexExample = WizardComplexExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Wizard Finite Steps" handlebars={wizardFiniteStepsRaw}>
        {wizardFiniteSteps}
      </Example>
      <Example heading="Wizard Complex" handlebars={wizardComplexExampleRaw} docs={wizardComplexExampleDoc}>
        {wizardComplexExample}
      </Example>
    </Documentation>
  );
};
