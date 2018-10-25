import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import sequenceOverflowExampleRaw from '!raw!./sequence-overflow-example.hbs';
import sequenceNoOverflowExampleRaw from '!raw!./sequence-nooverflow-example.hbs';
import SequenceOverflowExample from './sequence-overflow-example.hbs';
import SequenceNoOverflowExample from './sequence-nooverflow-example.hbs';
import sequenceComplexExampleDoc from '../docs/sequence-complex.md';
import docs from '../docs/code.md';
import '../sequence.scss';

export const Docs = docs;

export default () => {
  const sequenceOverflowExample = SequenceOverflowExample();
  const sequenceNoOverflowExample = SequenceNoOverflowExample();

  return (
    <Documentation docs={Docs}>
      <Example
        heading="Sequence with overflow"
        handlebars={sequenceOverflowExampleRaw}
        docs={sequenceComplexExampleDoc}
      >
        {sequenceOverflowExample}
      </Example>
      <Example heading="Sequence without overflow" handlebars={sequenceNoOverflowExampleRaw}>
        {sequenceNoOverflowExample}
      </Example>
    </Documentation>
  );
};
