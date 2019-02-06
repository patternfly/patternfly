import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import tabContentExampleRaw from '!raw!./tab-content-example.hbs';
import TabcontentExample from './tab-content-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default () => {
  const tabContentExample = TabcontentExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Tab Content " handlebars={tabContentExampleRaw}>
        {tabContentExample}
      </Example>
    </Documentation>
  );
};
