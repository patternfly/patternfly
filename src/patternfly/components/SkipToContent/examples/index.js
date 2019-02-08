import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import skipToContentSimpleExampleRaw from '!raw!./skip-to-content-simple-example.hbs';
import skipToContentComplexExampleRaw from '!raw!./skip-to-content-complex-example.hbs';
import SkiptocontentSimpleExample from './skip-to-content-simple-example.hbs';
import SkiptocontentComplexExample from './skip-to-content-complex-example.hbs';
import skipToContentComplexExampleDoc from '../docs/skip-to-content-complex.md';
import docs from '../docs/code.md';
import '../skip-to-content.scss';

export const Docs = docs;

export default () => {
  const skipToContentSimpleExample = SkiptocontentSimpleExample();
  const skipToContentComplexExample = SkiptocontentComplexExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Skiptocontent Simple" handlebars={skipToContentSimpleExampleRaw} minHeight="20em">
        {skipToContentSimpleExample}
      </Example>
      <Example
        heading="Skiptocontent Complex"
        handlebars={skipToContentComplexExampleRaw}
        docs={skipToContentComplexExampleDoc}
      >
        {skipToContentComplexExample}
      </Example>
    </Documentation>
  );
};
