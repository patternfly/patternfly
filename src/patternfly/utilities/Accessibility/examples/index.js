import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import srOnlyExampleRaw from '!raw!./accessibility-sr-only-example.hbs';
import SrOnlyExample from './accessibility-sr-only-example.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const srOnlyExample = SrOnlyExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Screen reader only" handlebars={srOnlyExampleRaw}>
        {srOnlyExample}
      </Example>
    </Documentation>
  );
};
