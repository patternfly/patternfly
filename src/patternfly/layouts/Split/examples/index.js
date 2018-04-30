import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import SplitTemplate from './split-template.hbs'
import SplitTemplateGutters from './split-template-gutters.hbs'
import SplitTemplateNoPrimarySecondary from './split-template-noprimarysecondary.hbs'
import docs from '../docs/code.md'
import '../styles.scss'

export const Docs = docs;

export default () => {
  const splitTemplate = SplitTemplate()
  const splitTemplateGutters = SplitTemplateGutters()
  const splitTemplateNoPrimarySecondary = SplitTemplateNoPrimarySecondary()
  return (
    <Documentation docs={Docs} className="is-layout-page">
      <Example heading="Split Example">
        {splitTemplate}
      </Example>
      <Example heading="Split Example with gutter">
        {splitTemplateGutters}
      </Example>
      <Example heading="Split Example with no primary or secondary children specified">
        {splitTemplateNoPrimarySecondary}
      </Example>
    </Documentation>
  );
};
