import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import ContentTemplate from './content-template.hbs';
import ContentVisualDesignTemplate from './content-visual-design-template.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const contentTemplate = ContentTemplate();
  const contentVisualDesignTemplate = ContentVisualDesignTemplate();

  return (
    <Documentation docs={Docs} className="">
      <Example heading="Content Example">{contentTemplate}</Example>
      <Example heading="This is here for visual design review purposes only and will be deleted">
        {contentVisualDesignTemplate}
      </Example>
    </Documentation>
  );
};
