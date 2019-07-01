import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import ButtonVariationTemplateRaw from '!raw!./button-variations-example.hbs';
import ButtonStatesTemplateRaw from '!raw!./button-states-example.hbs';
import ButtonBlockTemplateRaw from '!raw!./button-block-example.hbs';
import ButtonTypesTemplateRaw from '!raw!./button-types-example.hbs';
import ButtonLinkExampleRaw from '!raw!./button-link-example.hbs';
import ButtonBackgroundExampleRaw from '!raw!./button-background-example.hbs';
import ButtonVariationTemplate from './button-variations-example.hbs';
import ButtonStatesTemplate from './button-states-example.hbs';
import ButtonBlockTemplate from './button-block-example.hbs';
import ButtonTypesTemplate from './button-types-example.hbs';
import ButtonLinkExample from './button-link-example.hbs';
import ButtonBackgroundExample from './button-background-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default props => {
  const buttonVariationTemplate = ButtonVariationTemplate();
  const buttonStatesTemplate = ButtonStatesTemplate();
  const buttonLinkExample = ButtonLinkExample();
  const buttonBackgroundExample = ButtonBackgroundExample();
  const buttonBlockTemplate = ButtonBlockTemplate();
  const buttonTypesTemplate = ButtonTypesTemplate();
  const headingText = 'Button';
  const variablesRoot = 'pf-c-button';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Button variations" handlebars={ButtonVariationTemplateRaw}>
        {buttonVariationTemplate}
      </Example>
      <Example heading="Button states" handlebars={ButtonStatesTemplateRaw}>
        {buttonStatesTemplate}
      </Example>
      <Example heading="Links as buttons" handlebars={ButtonLinkExampleRaw}>
        {buttonLinkExample}
      </Example>
      <Example
        heading="Plain button with background in masthead"
        handlebars={ButtonBackgroundExampleRaw}
        className="is-dark-preview pf-t-dark"
      >
        {buttonBackgroundExample}
      </Example>
      <Example heading="Button (block level)" handlebars={ButtonBlockTemplateRaw}>
        {buttonBlockTemplate}
      </Example>
      <Example heading="Button types" handlebars={ButtonTypesTemplateRaw}>
        {buttonTypesTemplate}
      </Example>
    </Documentation>
  );
};
