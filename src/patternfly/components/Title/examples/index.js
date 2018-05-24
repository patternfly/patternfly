import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import TitleTemplate from './titleTypes.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const titleTemplate = TitleTemplate();

  return (
    <Documentation docs={Docs}>
      <Example heading="Title Types">{titleTemplate}</Example>
    </Documentation>
  );
};
