import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import wizardExampleRaw from '!raw!./wizard-example.hbs';
import wizardExpandedExampleRaw from '!raw!./wizard-expanded-example.hbs';
import wizardFinishedExampleRaw from '!raw!./wizard-finished-example.hbs';
import wizardFullWidthFullHeightExampleRaw from '!raw!./wizard-full-width-full-height-example.hbs';
import wizardCompactNavExampleRaw from '!raw!./wizard-compact-nav-example.hbs';
import WizardExample from './wizard-example.hbs';
import WizardExpandedExample from './wizard-expanded-example.hbs';
import WizardFinishedExample from './wizard-finished-example.hbs';
import WizardFullWidthFullHeightExample from './wizard-full-width-full-height-example.hbs';
import WizardCompactNavExample from './wizard-compact-nav-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const wizardExample = WizardExample();
  const wizardExpandedExample = WizardExpandedExample();
  const wizardFinishedExample = WizardFinishedExample();
  const wizardFullWidthFullHeightExample = WizardFullWidthFullHeightExample();
  const wizardCompactNavExample = WizardCompactNavExample();
  const headingText = 'Wizard';
  const variablesRoot = 'pf-c-wizard';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Wizard" handlebars={wizardExampleRaw} fullPageOnly="true">
        {wizardExample}
      </Example>
      <Example heading="Wizard Expanded (mobile)" handlebars={wizardExpandedExampleRaw} fullPageOnly="true">
        {wizardExpandedExample}
      </Example>
      <Example heading="Wizard Finished" handlebars={wizardFinishedExampleRaw} fullPageOnly="true">
        {wizardFinishedExample}
      </Example>
      <Example
        heading="Wizard Full Width/Full Height"
        handlebars={wizardFullWidthFullHeightExampleRaw}
        fullPageOnly="true"
      >
        {wizardFullWidthFullHeightExample}
      </Example>
      <Example heading="Wizard Compact Nav" handlebars={wizardCompactNavExampleRaw} fullPageOnly="true">
        {wizardCompactNavExample}
      </Example>
    </Documentation>
  );
};
