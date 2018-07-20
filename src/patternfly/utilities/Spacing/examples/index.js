import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import spacingSimpleExampleRaw from '!raw!./spacing-simple-example.hbs';
import spacingComplexExampleRaw from '!raw!./spacing-complex-example.hbs';
import SpacingSimpleExample from './spacing-simple-example.hbs';
import SpacingComplexExample from './spacing-complex-example.hbs';
import spacingComplexExampleDoc from '../docs/spacing-complex.md';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const spacingSimpleExample = SpacingSimpleExample();
  const spacingComplexExample = SpacingComplexExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Spacing Simple" handlebars={spacingSimpleExampleRaw}>
        {spacingSimpleExample}
      </Example>
      <Example heading="Spacing Complex" handlebars={spacingComplexExampleRaw} docs={spacingComplexExampleDoc}>
        {spacingComplexExample}
      </Example>
    </Documentation>
  );
};
