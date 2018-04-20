import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import SplitTemplate from './split-template.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const splitTemplate = SplitTemplate();
  return (
    <Documentation docs={Docs} className="is-layout-page">
      <Example heading="Split Example">{splitTemplate}</Example>
    </Documentation>
  );
};
