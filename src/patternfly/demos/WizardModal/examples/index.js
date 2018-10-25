import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import wizardModalSimpleExampleRaw from '!raw!./wizard-modal-simple-example.hbs';
import wizardModalStep1ExampleRaw from '!raw!./wizard-modal-step1-example.hbs';
import wizardModalStep2ExampleRaw from '!raw!./wizard-modal-step2-example.hbs';
import wizardModalStep3ExampleRaw from '!raw!./wizard-modal-step3-example.hbs';
import wizardModalStep4ExampleRaw from '!raw!./wizard-modal-step4-example.hbs';
import wizardModalStep5ExampleRaw from '!raw!./wizard-modal-step5-example.hbs';
import wizardModalComplexExampleRaw from '!raw!./wizard-modal-complex-example.hbs';
import WizardModalSimpleExample from './wizard-modal-simple-example.hbs';
import WizardModalStep1Example from './wizard-modal-step1-example.hbs';
import WizardModalStep2Example from './wizard-modal-step2-example.hbs';
import WizardModalStep3Example from './wizard-modal-step3-example.hbs';
import WizardModalStep4Example from './wizard-modal-step4-example.hbs';
import WizardModalStep5Example from './wizard-modal-step5-example.hbs';
import WizardModalComplexExample from './wizard-modal-complex-example.hbs';
import wizardModalComplexExampleDoc from '../docs/wizard-modal-complex.md';
import docs from '../docs/code.md';
// import '../styles.scss';

export const Docs = docs;

export default () => {
  const wizardModalSimpleExample = WizardModalSimpleExample();
  const wizardModalStep1Example = WizardModalStep1Example();
  const wizardModalStep2Example = WizardModalStep2Example();
  const wizardModalStep3Example = WizardModalStep3Example();
  const wizardModalStep4Example = WizardModalStep4Example();
  const wizardModalStep5Example = WizardModalStep5Example();
  const wizardModalComplexExample = WizardModalComplexExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Wizard Modal (Simple)" handlebars={wizardModalSimpleExampleRaw} fullPageOnly="true">
        {wizardModalSimpleExample}
      </Example>
      <Example heading="Wizard Modal Step 1" handlebars={wizardModalStep1ExampleRaw} fullPageOnly="true">
        {wizardModalStep1Example}
      </Example>
      <Example heading="Wizard Modal Step 2" handlebars={wizardModalStep2ExampleRaw} fullPageOnly="true">
        {wizardModalStep2Example}
      </Example>
      <Example heading="Wizard Modal Step 3" handlebars={wizardModalStep3ExampleRaw} fullPageOnly="true">
        {wizardModalStep3Example}
      </Example>
      <Example heading="Wizard Modal Step 4" handlebars={wizardModalStep4ExampleRaw} fullPageOnly="true">
        {wizardModalStep4Example}
      </Example>
      <Example heading="Wizard Modal Step 5" handlebars={wizardModalStep5ExampleRaw} fullPageOnly="true">
        {wizardModalStep5Example}
      </Example>
      <Example
        heading="Wizardmodal Complex"
        handlebars={wizardModalComplexExampleRaw}
        docs={wizardModalComplexExampleDoc}
      >
        {wizardModalComplexExample}
      </Example>
    </Documentation>
  );
};
