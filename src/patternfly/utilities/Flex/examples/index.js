import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import flexSimpleExampleRaw from '!raw!./flex-simple-example.hbs';
import flexComplexExampleRaw from '!raw!./flex-complex-example.hbs';
import FlexSimpleExample from './flex-simple-example.hbs';
import FlexComplexExample from './flex-complex-example.hbs';
import flexComplexExampleDoc from '../docs/flex-complex.md';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const flexSimpleExample = FlexSimpleExample();
  const flexComplexExample = FlexComplexExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Flex Simple" handlebars={flexSimpleExampleRaw}>
        {flexSimpleExample}
      </Example>
      <Example heading="Flex Complex" handlebars={flexComplexExampleRaw} docs={flexComplexExampleDoc}>
        {flexComplexExample}
      </Example>
    </Documentation>
  );
};
