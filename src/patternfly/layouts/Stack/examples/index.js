import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import StackTemplateRaw from '!raw!./stack-template-example.hbs';
import StackTemplateHasGutterRaw from '!raw!./stack-template-has-gutter-example.hbs';
import StackTemplate from './stack-template-example.hbs';
import StackTemplateHasGutter from './stack-template-has-gutter-example.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const stackTemplate = StackTemplate();
  const stackTemplateHasGutter = StackTemplateHasGutter();

  return (
    <Documentation docs={Docs} className="is-layout-page">
      <Example heading="Stack Example" handlebars={StackTemplateRaw}>
        {stackTemplate}
      </Example>
      <Example heading="Stack Example with Gutter" handlebars={StackTemplateHasGutterRaw}>
        {stackTemplateHasGutter}
      </Example>
    </Documentation>
  );
};
