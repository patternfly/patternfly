import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import {{nameCamelized}}SimpleExampleRaw from '!raw!./{{nameDasherized}}-simple-example.hbs';
import {{nameCamelized}}ComplexExampleRaw from '!raw!./{{nameDasherized}}-complex-example.hbs';
import {{moduleName}}SimpleExample from './{{nameDasherized}}-simple-example.hbs';
import {{moduleName}}ComplexExample from './{{nameDasherized}}-complex-example.hbs';
import {{nameCamelized}}ComplexExampleDoc from '../docs/{{nameDasherized}}-complex.md';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const {{nameCamelized}}SimpleExample = {{moduleName}}SimpleExample();
  const {{nameCamelized}}ComplexExample = {{moduleName}}ComplexExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="{{moduleName}} Simple" handlebars={{simpleExampleRawReference}}>
        {{simpleExampleReference}}
      </Example>
      <Example heading="{{moduleName}} Complex" handlebars={{complexExampleRawReference}} docs={{complexExampleDocReference}}>
        {{complexExampleReference}}
      </Example>
    </Documentation>
  );
};
