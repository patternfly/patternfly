import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import CardBasicExampleRaw from '!raw!./card-basic-example.hbs';
import CardNoFooterExampleRaw from '!raw!./card-no-footer-example.hbs';
import CardNoHeaderExampleRaw from '!raw!./card-no-header-example.hbs';
import CardContentOnlyExampleRaw from '!raw!./card-content-only-example.hbs';
import CardMultipleBodyExampleRaw from '!raw!./card-multiple-body-example.hbs';
import CardGrowExampleRaw from '!raw!./card-grow-example.hbs';
import docs from '../docs/code.md';
import CardBasicExample from './card-basic-example.hbs';
import CardNoFooterExample from './card-no-footer-example.hbs';
import CardNoHeaderExample from './card-no-header-example.hbs';
import CardContentOnlyExample from './card-content-only-example.hbs';
import CardMultipleBodyExample from './card-multiple-body-example.hbs';
import CardGrowExample from './card-grow-example.hbs';

export const Docs = docs;

export default () => {
  const cardBasicExample = CardBasicExample();
  const cardNoFooterExample = CardNoFooterExample();
  const cardNoHeaderExample = CardNoHeaderExample();
  const cardContentOnlyExample = CardContentOnlyExample();
  const cardMultipleBodyExample = CardMultipleBodyExample();
  const cardGrowExample = CardGrowExample();
  const headingText = 'Card';
  const variablesRoot = 'pf-c-card';

  return (
    <Documentation docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Card" handlebars={CardBasicExampleRaw}>
        {cardBasicExample}
      </Example>
      <Example heading="Card with no footer" handlebars={CardNoFooterExampleRaw}>
        {cardNoFooterExample}
      </Example>
      <Example heading="Card with no header" handlebars={CardNoHeaderExampleRaw}>
        {cardNoHeaderExample}
      </Example>
      <Example heading="Card with only a content section" handlebars={CardContentOnlyExampleRaw}>
        {cardContentOnlyExample}
      </Example>
      <Example heading="Card with multiple body sections" handlebars={CardMultipleBodyExampleRaw}>
        {cardMultipleBodyExample}
      </Example>
      <Example
        heading="Card with a body section that grows"
        handlebars={CardGrowExampleRaw}
        minHeight="30em"
        className="is-height-flex-column-grow"
      >
        {cardGrowExample}
      </Example>
    </Documentation>
  );
};
