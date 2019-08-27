import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import wizardInPageExampleRaw from '!raw!./wizard-in-page-example.hbs';
import wizardInPageExpandedExampleRaw from '!raw!./wizard-in-page-expanded-example.hbs';
import WizardInPageExample from './wizard-in-page-example.hbs';
import WizardInPageExpandedExample from './wizard-in-page-expanded-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default props => {
  const wizardInPageExample = WizardInPageExample();
  const wizardInPageExpandedExample = WizardInPageExpandedExample();
  const headingText = 'Wizard';
  const variablesRoot = 'pf-d-wizard';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Wizard - in page" handlebars={wizardInPageExampleRaw} fullPageOnly="true">
        {wizardInPageExample}
      </Example>
      <Example heading="Wizard - nav expanded (mobile)" handlebars={wizardInPageExpandedExampleRaw} fullPageOnly="true">
        {wizardInPageExpandedExample}
      </Example>
    </Documentation>
  );
};
