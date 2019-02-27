import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import wizardExampleRaw from '!raw!./wizard-example.hbs';
import wizardExpandedExampleRaw from '!raw!./wizard-expanded-example.hbs';
import WizardExample from './wizard-example.hbs';
import WizardExpandedExample from './wizard-expanded-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default () => {
  const wizardExample = WizardExample();
  const wizardExpandedExample = WizardExpandedExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Wizard" handlebars={wizardExampleRaw} fullPageOnly="true">
        {wizardExample}
      </Example>
      <Example
        heading="Wizard Expanded (mobile) and right-aligned footer"
        handlebars={wizardExpandedExampleRaw}
        fullPageOnly="true"
      >
        {wizardExpandedExample}
      </Example>
    </Documentation>
  );
};
