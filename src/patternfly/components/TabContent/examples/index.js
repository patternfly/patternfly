import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import tabContentExampleRaw from '!raw!./tab-content-example.hbs';
import TabcontentExample from './tab-content-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const tabContentExample = TabcontentExample();
  const headingText = 'Tab Content';
  const variablesRoot = 'pf-c-tab-content';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Tab Content" handlebars={tabContentExampleRaw}>
        {tabContentExample}
      </Example>
    </Documentation>
  );
};
