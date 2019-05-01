import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import ContentTemplateRaw from '!raw!./content-template-example.hbs';
import ContentTemplate from './content-template-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const contentTemplate = ContentTemplate();
  const headingText = 'Content';
  const variablesRoot = 'pf-c-content';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Content example" handlebars={ContentTemplateRaw}>
        {contentTemplate}
      </Example>
    </Documentation>
  );
};
