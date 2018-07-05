import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import BullseyeTemplateRaw from '!raw!./bullseye-template-example.hbs';
import BullseyeTemplate from './bullseye-template-example.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const bullseyeTemplate = BullseyeTemplate();

  return (
    <Documentation docs={Docs} className="is-layout-page">
      <Example heading="Bullseye Example" handlebars={BullseyeTemplateRaw}>
        {bullseyeTemplate}
      </Example>
    </Documentation>
  );
};
