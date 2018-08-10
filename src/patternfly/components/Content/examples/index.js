import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import ContentTemplateRaw from '!raw!./content-template-example.hbs';
import ContentTemplate from './content-template-example.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const contentTemplate = ContentTemplate();
  const headingText = 'Content';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading="Content Example" handlebars={ContentTemplateRaw}>
        {contentTemplate}
      </Example>
    </Documentation>
  );
};
