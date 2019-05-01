import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import SplitRaw from '!raw!./split-example.hbs';
import SplitGuttersRaw from '!raw!./split-gutters-example.hbs';
import Split from './split-example.hbs';
import SplitGutters from './split-gutters-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const split = Split();
  const splitGutters = SplitGutters();
  const headingText = 'Split';
  const variablesRoot = 'pf-l-split';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot} className="is-layout-page">
      <Example heading="Split example" handlebars={SplitRaw}>
        {split}
      </Example>
      <Example heading="Split example with gutter" handlebars={SplitGuttersRaw}>
        {splitGutters}
      </Example>
    </Documentation>
  );
};
