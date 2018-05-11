import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import ContentTemplate from './content-template.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const contentTemplate = ContentTemplate();

  return (
    <Documentation docs={Docs} className="">
      <Example heading="Content Example">{contentTemplate}</Example>
    </Documentation>
  );
};
