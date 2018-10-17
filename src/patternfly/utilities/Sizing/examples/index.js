import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

import sizingSimpleExampleRaw from '!raw!./sizing-simple-example.hbs';
import sizingBreakpointExampleRaw from '!raw!./sizing-breakpoint-example.hbs';
import sizingButtonExampleRaw from '!raw!./sizing-button-example.hbs';

import SizingSimpleExample from './sizing-simple-example.hbs';
import SizingBreakpointExample from './sizing-breakpoint-example.hbs';
import SizingButtonExample from './sizing-button-example.hbs';

import docs from '../docs/code.md';
import '../sizing.scss';

export const Docs = docs;

export default () => {
  const sizingSimpleExample = SizingSimpleExample();
  const sizingBreakpointExample = SizingBreakpointExample();
  const sizingButtonExample = SizingButtonExample();

  const headingText = 'Sizing';

  return (
    <Documentation docs={Docs} heading={headingText} className="is-utility-page">
      <Example heading="Sizing" handlebars={sizingSimpleExampleRaw}>
        {sizingSimpleExample}
      </Example>
      <Example heading="Sizing" handlebars={sizingBreakpointExampleRaw}>
        {sizingBreakpointExample}
      </Example>
      <Example heading="Sizing" handlebars={sizingButtonExampleRaw}>
        {sizingButtonExample}
      </Example>
    </Documentation>
  );
};
