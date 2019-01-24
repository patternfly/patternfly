import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import CheckExampleRaw from '!raw!./check-example.hbs';
import CheckExample from './check-example.hbs';
import docs from '../docs/code.md';
import '../check.scss';

export const Docs = docs;

export default () => {
  const checkExample = CheckExample();
  const headingText = 'Check';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading="Check Example" handlebars={CheckExampleRaw}>
        {checkExample}
      </Example>
    </Documentation>
  );
};
