import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import sequenceFiniteStepsRaw from '!raw!./sequence-finite-steps.hbs';
import sequenceComplexExampleRaw from '!raw!./sequence-complex-example.hbs';
import SequenceFiniteSteps from './sequence-finite-steps.hbs';
import SequenceComplexExample from './sequence-complex-example.hbs';
import sequenceComplexExampleDoc from '../docs/sequence-complex.md';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const sequenceFiniteSteps = SequenceFiniteSteps();
  const sequenceComplexExample = SequenceComplexExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Sequence Finite Steps" handlebars={sequenceFiniteStepsRaw}>
        {sequenceFiniteSteps}
      </Example>
      <Example
        heading="Sequence Infinite Steps"
        handlebars={sequenceComplexExampleRaw}
        docs={sequenceComplexExampleDoc}
      >
        {sequenceComplexExample}
      </Example>
    </Documentation>
  );
};
