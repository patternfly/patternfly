import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import TitleTemplateRaw from '!raw!./title-types-example.hbs';
import TitleTemplate from './title-types-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const titleTemplate = TitleTemplate();
  const headingText = 'Title';
  const variablesRoot = 'pf-c-title';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Title types" handlebars={TitleTemplateRaw}>
        {titleTemplate}
      </Example>
    </Documentation>
  );
};
