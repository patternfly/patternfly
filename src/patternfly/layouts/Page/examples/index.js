import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import PageLayoutRaw from '!raw!./page-layout-example.hbs';
import PageLayout from './page-layout-example.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const layoutExample = PageLayout();

  return (
    <Documentation docs={Docs} className="is-layout-page">
      <Example heading="Page Example" handlebars={PageLayoutRaw}>
        {layoutExample}
      </Example>
    </Documentation>
  );
};
