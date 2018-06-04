import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import AlignTemplate from './align-template.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const alignTemplate = AlignTemplate();

  return (
    <Documentation docs={Docs} className="is-layout-page">
      <Example heading="Alignment Example">{alignTemplate}</Example>
    </Documentation>
  );
};
