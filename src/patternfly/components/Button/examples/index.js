import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import ButtonTypesTemplateRaw from '!raw!./button-types-example.hbs';
import ButtonStatesTemplateRaw from '!raw!./button-states-example.hbs';
import ButtonBlockTemplateRaw from '!raw!./button-block-example.hbs';
import ButtonLinkExampleRaw from '!raw!./button-link-example.hbs';
import ButtonTypesTemplate from './button-types-example.hbs';
import ButtonStatesTemplate from './button-states-example.hbs';
import ButtonBlockTemplate from './button-block-example.hbs';
import ButtonLinkExample from './button-link-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const buttonTypesTemplate = ButtonTypesTemplate();
  const buttonStatesTemplate = ButtonStatesTemplate();
  const buttonLinkExample = ButtonLinkExample();
  const buttonBlockTemplate = ButtonBlockTemplate();
  const headingText = 'Button';
  const variablesRoot = 'pf-c-button';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Button Types" handlebars={ButtonTypesTemplateRaw}>
        {buttonTypesTemplate}
      </Example>
      <Example heading="Button States" handlebars={ButtonStatesTemplateRaw}>
        {buttonStatesTemplate}
      </Example>
      <Example heading="Links as Buttons" handlebars={ButtonLinkExampleRaw}>
        {buttonLinkExample}
      </Example>
      <Example heading="Button (Block Level)" handlebars={ButtonBlockTemplateRaw}>
        {buttonBlockTemplate}
      </Example>
    </Documentation>
  );
};
