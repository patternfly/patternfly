import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import FormVerticalAlignLabelsExampleRaw from '!raw!./form-vertical-align-labels-example.hbs';
import FormHorizontalAlignLabelsExampleRaw from '!raw!./form-horizontal-align-labels-example.hbs';
import FormHelpTextExampleRaw from '!raw!./form-help-text-example.hbs';
import FormActionGroupExampleRaw from '!raw!./form-action-group-example.hbs';
import FormVerticalAlignLabelsExample from './form-vertical-align-labels-example.hbs';
import FormHorizontalAlignLabelsExample from './form-horizontal-align-labels-example.hbs';
import FormHelpTextExample from './form-help-text-example.hbs';
import FormActionGroupExample from './form-action-group-example.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const formVerticalAlignLabelsExample = FormVerticalAlignLabelsExample();
  const formHorizontalAlignLabelsExample = FormHorizontalAlignLabelsExample();
  const formHelpTextExample = FormHelpTextExample();
  const formActionGroupExample = FormActionGroupExample();
  const headingText = 'Form';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading="Vertical aligned Labels" handlebars={FormVerticalAlignLabelsExampleRaw}>
        {formVerticalAlignLabelsExample}
      </Example>
      <Example heading="Horizontal aligned Labels" handlebars={FormHorizontalAlignLabelsExampleRaw}>
        {formHorizontalAlignLabelsExample}
      </Example>
      <Example heading="Help text" handlebars={FormHelpTextExampleRaw}>
        {formHelpTextExample}
      </Example>
      <Example heading="Action Group" handlebars={FormActionGroupExampleRaw}>
        {formActionGroupExample}
      </Example>
    </Documentation>
  );
};
