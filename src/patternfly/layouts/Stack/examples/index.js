import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import StackTemplate from './stack-template.hbs'
import StackTemplateHasGutter from './stack-template-has-gutter.hbs'
import docs from '../docs/code.md'
import '../styles.scss'

export const Docs = docs;

export default () => {
  const stackTemplate = StackTemplate()
  const stackTemplateHasGutter = StackTemplateHasGutter()

  return (
    <Documentation docs={Docs} className="is-layout-page">
      <Example heading="Stack Example">
        {stackTemplate}
      </Example>
      <Example heading="Stack Example with Gutter">
        {stackTemplateHasGutter}
      </Example>
    </Documentation>
  );
};
