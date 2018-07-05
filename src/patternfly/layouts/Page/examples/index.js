import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import PageLayoutExampleRaw from '!raw!./page-layout-example.hbs';
import PageLayoutExample from './page-layout-example.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const layoutExample = PageLayoutExample();

  return (
    <Documentation docs={Docs} className="is-layout-page">
      <Example heading="Page Example" handlebars={PageLayoutExampleRaw}>
        {layoutExample}
      </Example>
    </Documentation>
  );
};
