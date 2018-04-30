import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import docs from '../docs/code.md';
import PageLayoutExample from './page-layout.hbs';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const layoutExample = PageLayoutExample();

  return (
    <Documentation docs={Docs} className="is-layout-page">
      <Example heading="Page Example">{layoutExample}</Example>
    </Documentation>
  );
};
