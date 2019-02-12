import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import spacingMarginExampleRaw from '!raw!./spacing-margin-example.hbs';
import spacingPaddingExampleRaw from '!raw!./spacing-padding-example.hbs';
import spacingCombinedExampleRaw from '!raw!./spacing-combined-example.hbs';
import SpacingMarginExample from './spacing-margin-example.hbs';
import SpacingPaddingExample from './spacing-padding-example.hbs';
import SpacingCombinedExample from './spacing-combined-example.hbs';

import docs from '../docs/code.md';

export const Docs = docs;

export default () => {
  const spacingMarginExample = SpacingMarginExample();
  const spacingPaddingExample = SpacingPaddingExample();
  const spacingCombinedExample = SpacingCombinedExample();
  const headingText = 'Spacing';

  return (
    <Documentation docs={Docs} heading={headingText} className="is-utility-page">
      <Example heading="Spacer margin" handlebars={spacingMarginExampleRaw}>
        {spacingMarginExample}
      </Example>
      <Example heading="Spacer padding" handlebars={spacingPaddingExampleRaw}>
        {spacingPaddingExample}
      </Example>
      <Example heading="Spacers combined" handlebars={spacingCombinedExampleRaw}>
        {spacingCombinedExample}
      </Example>
    </Documentation>
  );
};
