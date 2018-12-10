import React from 'react';
import { Helmet } from 'react-helmet';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import docs from '../docs/code.md';
import PopoverupgradeexamplesExample1 from './popover-upgrade-examples-example1.hbs';
import PopoverupgradeexamplesExample2 from './popover-upgrade-examples-example2.hbs';

export const Docs = docs;

export default () => {
  const PopoverUpgradeExamplesExample1 = PopoverupgradeexamplesExample1();
  const PopoverUpgradeExamplesExample2 = PopoverupgradeexamplesExample2();
  const headingText = 'Popover Migration';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Helmet>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/patternfly/3.54.1/css/patternfly.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/patternfly/3.54.1/css/patternfly-additions.css"
        />
      </Helmet>
      <Example heading="PatternFly 3 Popover">{PopoverUpgradeExamplesExample1}</Example>
      <Example heading="PatternFly 4 Popover">{PopoverUpgradeExamplesExample2}</Example>
    </Documentation>
  );
};
