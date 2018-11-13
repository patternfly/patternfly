import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import brandSimpleExampleRaw from '!raw!./brand-simple-example.hbs';
import BrandSimpleExample from './brand-simple-example.hbs';
import docs from '../docs/code.md';
import '../brand.scss';

export const Docs = docs;

export default () => {
  const brandSimpleExample = BrandSimpleExample();
  const headingText = 'Brand';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading="Brand Simple" handlebars={brandSimpleExampleRaw}>
        {brandSimpleExample}
      </Example>
    </Documentation>
  );
};
