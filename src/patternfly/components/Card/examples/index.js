import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import CardBasicExampleRaw from '!raw!./card-basic-example.hbs';
import CardNoFooterExampleRaw from '!raw!./card-no-footer-example.hbs';
import CardNoHeaderExampleRaw from '!raw!./card-no-header-example.hbs';
import CardContentOnlyExampleRaw from '!raw!./card-content-only-example.hbs';
import docs from '../docs/code.md';
import CardBasicExample from './card-basic-example.hbs';
import CardNoFooterExample from './card-no-footer-example.hbs';
import CardNoHeaderExample from './card-no-header-example.hbs';
import CardContentOnlyExample from './card-content-only-example.hbs';

import '../styles.scss';

export const Docs = docs;

export default () => {
  const cardBasicExample = CardBasicExample();
  const cardNoFooterExample = CardNoFooterExample();
  const cardNoHeaderExample = CardNoHeaderExample();
  const cardContentOnlyExample = CardContentOnlyExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Card" handlebars={CardBasicExampleRaw}>
        {cardBasicExample}
      </Example>
      <Example heading="Card with no footer" handlebars={CardNoFooterExampleRaw}>
        {cardNoHeaderExample}
      </Example>
      <Example heading="Card with no header" handlebars={CardNoHeaderExampleRaw}>
        {cardNoFooterExample}
      </Example>
      <Example heading="Card with only a content section" handlebars={CardContentOnlyExampleRaw}>
        {cardContentOnlyExample}
      </Example>
    </Documentation>
  );
};
