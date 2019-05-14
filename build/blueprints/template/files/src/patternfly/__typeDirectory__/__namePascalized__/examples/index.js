import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import {{nameCamelized}}SimpleExampleRaw from '!raw!./{{nameDasherized}}-simple-example.hbs';
import {{nameCamelized}}ComplexExampleRaw from '!raw!./{{nameDasherized}}-complex-example.hbs';
import {{moduleName}}SimpleExample from './{{nameDasherized}}-simple-example.hbs';
import {{moduleName}}ComplexExample from './{{nameDasherized}}-complex-example.hbs';
import {{nameCamelized}}ComplexExampleDoc from '../docs/{{nameDasherized}}-complex.md';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const {{nameCamelized}}SimpleExample = {{moduleName}}SimpleExample();
  const {{nameCamelized}}ComplexExample = {{moduleName}}ComplexExample();
  const headingText = '{{nameTitleized}}';
  const variablesRoot = '{{bemName}}';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="{{nameTitleized}} simple" handlebars={{simpleExampleRawReference}} minHeight="20em">
        {{simpleExampleReference}}
      </Example>
      <Example heading="{{nameTitleized}} complex" handlebars={{complexExampleRawReference}} docs={{complexExampleDocReference}}>
        {{complexExampleReference}}
      </Example>
    </Documentation>
  );
};
