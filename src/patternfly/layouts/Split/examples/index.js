import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import SplitTemplateRaw from '!raw!./split-template-example.hbs';
import SplitTemplateGuttersRaw from '!raw!./split-template-gutters-example.hbs';
import SplitTemplateNoPrimarySecondaryRaw from '!raw!./split-template-noprimarysecondary-example.hbs';
import SplitTemplate from './split-template-example.hbs';
import SplitTemplateGutters from './split-template-gutters-example.hbs';
import SplitTemplateNoPrimarySecondary from './split-template-noprimarysecondary-example.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const splitTemplate = SplitTemplate();
  const splitTemplateGutters = SplitTemplateGutters();
  const splitTemplateNoPrimarySecondary = SplitTemplateNoPrimarySecondary();
  return (
    <Documentation docs={Docs} className="is-layout-page">
      <Example heading="Split Example" handlebars={SplitTemplateRaw}>
        {splitTemplate}
      </Example>
      <Example heading="Split Example with gutter" handlebars={SplitTemplateGuttersRaw}>
        {splitTemplateGutters}
      </Example>
      <Example
        heading="Split Example with no primary or secondary children specified"
        handlebars={SplitTemplateNoPrimarySecondaryRaw}
      >
        {splitTemplateNoPrimarySecondary}
      </Example>
    </Documentation>
  );
};
