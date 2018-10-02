import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import SplitRaw from '!raw!./split-example.hbs';
import SplitGuttersRaw from '!raw!./split-gutters-example.hbs';
import Split from './split-example.hbs';
import SplitGutters from './split-gutters-example.hbs';
import docs from '../docs/code.md';
import '../split.scss';

export const Docs = docs;

export default () => {
  const split = Split();
  const splitGutters = SplitGutters();
  const headingText = 'Split';

  return (
    <Documentation docs={Docs} heading={headingText} className="is-layout-page">
      <Example heading="Split Example" handlebars={SplitRaw}>
        {split}
      </Example>
      <Example heading="Split Example with gutter" handlebars={SplitGuttersRaw}>
        {splitGutters}
      </Example>
    </Documentation>
  );
};
