import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import brandSimpleExampleRaw from '!raw!./brand-simple-example.hbs';
import BrandSimpleExample from './brand-simple-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default () => {
  const brandSimpleExample = BrandSimpleExample();
  const headingText = 'Brand';
  const variablesRoot = 'pf-c-brand';

  return (
    <Documentation docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Brand Simple" handlebars={brandSimpleExampleRaw}>
        {brandSimpleExample}
      </Example>
    </Documentation>
  );
};
