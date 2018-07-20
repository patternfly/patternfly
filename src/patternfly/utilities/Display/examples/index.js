import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import displaySimpleExampleRaw from '!raw!./display-simple-example.hbs';
import displayComplexExampleRaw from '!raw!./display-complex-example.hbs';
import DisplaySimpleExample from './display-simple-example.hbs';
import DisplayComplexExample from './display-complex-example.hbs';
import displayComplexExampleDoc from '../docs/display-complex.md';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const displaySimpleExample = DisplaySimpleExample();
  const displayComplexExample = DisplayComplexExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Display Simple" handlebars={displaySimpleExampleRaw}>
        {displaySimpleExample}
      </Example>
      <Example heading="Display Complex" handlebars={displayComplexExampleRaw} docs={displayComplexExampleDoc}>
        {displayComplexExample}
      </Example>
    </Documentation>
  );
};
