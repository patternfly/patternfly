import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import brandSimpleExampleRaw from '!raw!./brand-simple-example.hbs';
import BrandSimpleExample from './brand-simple-example.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const brandSimpleExample = BrandSimpleExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Brand Simple" handlebars={brandSimpleExampleRaw} minHeight="20em">
        {brandSimpleExample}
      </Example>
    </Documentation>
  );
};
