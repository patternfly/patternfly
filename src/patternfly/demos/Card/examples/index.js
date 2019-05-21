import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

import CardDemoExampleRaw from '!raw!./card-demo-example.hbs';
import CardDemoExample from './card-demo-example.hbs';

import docs from '../docs/code.md';

export const Docs = docs;

export default () => {
  const cardDemoExample = CardDemoExample();

  const headingText = 'Card Demo';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading="Card Demo" fullPageOnly="true" handlebars={CardDemoExampleRaw}>
        {cardDemoExample}
      </Example>
    </Documentation>
  );
};
