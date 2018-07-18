import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import SampleExample1Raw from '!raw!./sample-example1.hbs';
import SampleExample2Raw from '!raw!./sample-example2.hbs';
import SampleExample1 from './sample-example1.hbs';
import SampleExample2 from './sample-example2.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const sampleExample1 = SampleExample1();
  const sampleExample2 = SampleExample2();

  return (
    <Documentation docs={Docs}>
      <Example heading="Sample Example 1" handlebars={SampleExample1Raw}>
        {sampleExample1}
      </Example>
      <Example heading="Sample Example 2" handlebars={SampleExample2Raw}>
        {sampleExample2}
      </Example>
    </Documentation>
  );
};
