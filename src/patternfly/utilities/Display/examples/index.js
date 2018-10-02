import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

import displayInlineBlockExampleRaw from '!raw!./display-inline-block-example.hbs';
import displayBlockExampleRaw from '!raw!./display-block-example.hbs';
import displayFlexExampleRaw from '!raw!./display-flex-example.hbs';
import displayInlineFlexExampleRaw from '!raw!./display-inline-flex-example.hbs';
import displayInlineExampleRaw from '!raw!./display-inline-example.hbs';
import displayTableExampleRaw from '!raw!./display-table-example.hbs';
import displayNoneExampleRaw from '!raw!./display-none-example.hbs';

import DisplayInlineBlockExample from './display-inline-block-example.hbs';
import DisplayBlockExample from './display-block-example.hbs';
import DisplayFlexExample from './display-flex-example.hbs';
import DisplayInlineFlexExample from './display-inline-flex-example.hbs';
import DisplayInlineExample from './display-inline-example.hbs';
import DisplayTableExample from './display-table-example.hbs';
import DisplayNoneExample from './display-none-example.hbs';

// import displayInlineBlockExampleDoc from '../docs/display-inline-block.md';
// import displayBlockExampleDoc from '../docs/display-block.md';
// import displayInlineExampleDoc from '../docs/display-inline.md';
// import displayTableExampleDoc from '../docs/display-table.md';
// import displayNoneExampleDoc from '../docs/display-none.md';

import docs from '../docs/code.md';
import '../display.scss';

export const Docs = docs;

export default () => {
  const displayInlineBlockExample = DisplayInlineBlockExample();
  const displayBlockExample = DisplayBlockExample();
  const displayFlexExample = DisplayFlexExample();
  const displayInlineFlexExample = DisplayInlineFlexExample();
  const displayInlineExample = DisplayInlineExample();
  const displayTableExample = DisplayTableExample();
  const displayNoneExample = DisplayNoneExample();
  const headingText = 'Display';

  return (
    <Documentation docs={Docs} heading={headingText} className="is-utility-page">
      <Example heading="Display inline-block" handlebars={displayInlineBlockExampleRaw}>
        {displayInlineBlockExample}
      </Example>
      <Example heading="Display block" handlebars={displayBlockExampleRaw}>
        {displayBlockExample}
      </Example>
      <Example heading="Display flex" handlebars={displayFlexExampleRaw}>
        {displayFlexExample}
      </Example>
      <Example heading="Display inline flex" handlebars={displayInlineFlexExampleRaw}>
        {displayInlineFlexExample}
      </Example>
      <Example heading="Display inline" handlebars={displayInlineExampleRaw}>
        {displayInlineExample}
      </Example>
      <Example heading="Display table" handlebars={displayTableExampleRaw}>
        {displayTableExample}
      </Example>
      <Example heading="Display none" handlebars={displayNoneExampleRaw}>
        {displayNoneExample}
      </Example>
    </Documentation>
  );
};
