import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import sequenceExampleRaw from '!raw!./sequence-example.hbs';
import SequenceExample from './sequence-example.hbs';
import sequenceComplexExampleDoc from '../docs/sequence-complex.md';
import docs from '../docs/code.md';
import '../sequence.scss';

export const Docs = docs;

export default () => {
  const sequenceExample = SequenceExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Sequence Finite with overflow" handlebars={sequenceExampleRaw} docs={sequenceComplexExampleDoc}>
        {sequenceExample}
      </Example>
    </Documentation>
  );
};
