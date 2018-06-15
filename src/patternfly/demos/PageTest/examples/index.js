import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import PagetestExample1Raw from '!raw!./page-test-example1.hbs';
import PagetestExample2Raw from '!raw!./page-test-example2.hbs';
import PagetestExample1 from './page-test-example1.hbs';
import PagetestExample2 from './page-test-example2.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const pageTestExample1 = PagetestExample1();
  const pageTestExample2 = PagetestExample2();

  return (
    <Documentation docs={Docs}>
      <Example
        heading="Pagetest Example 1"
        fullPageOnly="true"
        handlebars={PagetestExample1Raw}
      >
        {pageTestExample1}
      </Example>
      <Example
        heading="Pagetest Example 2"
        fullPageOnly="true"
        handlebars={PagetestExample2Raw}
      >
        {pageTestExample2}
      </Example>
    </Documentation>
  );
};
