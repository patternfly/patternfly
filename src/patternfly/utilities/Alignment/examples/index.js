import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import alignmentSimpleExampleRaw from '!raw!./alignment-simple-example.hbs';
import alignmentComplexExampleRaw from '!raw!./alignment-complex-example.hbs';
import AlignmentSimpleExample from './alignment-simple-example.hbs';
import AlignmentComplexExample from './alignment-complex-example.hbs';
import alignmentComplexExampleDoc from '../docs/alignment-complex.md';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const alignmentSimpleExample = AlignmentSimpleExample();
  const alignmentComplexExample = AlignmentComplexExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Alignment Simple" handlebars={alignmentSimpleExampleRaw}>
        {alignmentSimpleExample}
      </Example>
      <Example heading="Alignment Complex" handlebars={alignmentComplexExampleRaw} docs={alignmentComplexExampleDoc}>
        {alignmentComplexExample}
      </Example>
    </Documentation>
  );
};
