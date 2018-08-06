import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import SecondaryNavTemplateRaw from '!raw!./secondary-nav-example.hbs';
import SecondaryNavTemplate from './secondary-nav-example.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const secondaryNavTemplate = SecondaryNavTemplate();

  return (
    <Documentation docs={Docs}>
      <Example heading="SecondaryNav Example" handlebars={SecondaryNavTemplateRaw}>
        {secondaryNavTemplate}
      </Example>
    </Documentation>
  );
};
