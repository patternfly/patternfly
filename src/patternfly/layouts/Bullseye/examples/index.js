import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import BullseyeTemplate from './bullseye-template.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const bullseyeTemplate = BullseyeTemplate();

  return (
    <Documentation docs={Docs} className="is-layout-page">
      <Example heading="Bullseye Example">{bullseyeTemplate}</Example>
    </Documentation>
  );
};
