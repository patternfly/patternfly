import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import SplitRaw from '!raw!./split-example.hbs';
import SplitGuttersRaw from '!raw!./split-gutters-example.hbs';
import SplitNoPrimarySecondaryRaw from '!raw!./split-noprimarysecondary-example.hbs';
import Split from './split-example.hbs';
import SplitGutters from './split-gutters-example.hbs';
import SplitNoPrimarySecondary from './split-noprimarysecondary-example.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const split = Split();
  const splitGutters = SplitGutters();
  const splitNoPrimarySecondary = SplitNoPrimarySecondary();
  return (
    <Documentation docs={Docs} className="is-layout-page">
      <Example heading="Split Example" handlebars={SplitRaw}>
        {split}
      </Example>
      <Example heading="Split Example with gutter" handlebars={SplitGuttersRaw}>
        {splitGutters}
      </Example>
      <Example
        heading="Split Example with no primary or secondary children specified"
        handlebars={SplitNoPrimarySecondaryRaw}
      >
        {splitNoPrimarySecondary}
      </Example>
    </Documentation>
  );
};
