import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import TitleTemplateRaw from '!raw!./title-types-example.hbs';
import TitleTemplate from './title-types-example.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const titleTemplate = TitleTemplate();
  const headingText = 'Title';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading="Title Types" handlebars={TitleTemplateRaw}>
        {titleTemplate}
      </Example>
    </Documentation>
  );
};
