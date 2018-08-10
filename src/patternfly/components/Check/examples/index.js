import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import CheckCheckboxExampleRaw from '!raw!./check-checkbox-example.hbs';
import CheckRadioExampleRaw from '!raw!./check-radio-example.hbs';
import CheckCheckboxExample from './check-checkbox-example.hbs';
import CheckRadioExample from './check-radio-example.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const checkCheckboxExample = CheckCheckboxExample();
  const checkRadioExample = CheckRadioExample();
  const headingText = 'Check';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading="Checkbox Example" handlebars={CheckCheckboxExampleRaw}>
        {checkCheckboxExample}
      </Example>
      <Example heading="Radio button Example" handlebars={CheckRadioExampleRaw}>
        {checkRadioExample}
      </Example>
    </Documentation>
  );
};
