import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import ButtonTypesTemplateRaw from '!raw!./buttonTypes.hbs';
import ButtonStatesTemplateRaw from '!raw!./buttonStates.hbs';
import ButtonBlockTemplateRaw from '!raw!./buttonBlock.hbs';
import ButtonLinkExampleRaw from '!raw!./button-link-example.hbs';
import ButtonTypesTemplate from './buttonTypes.hbs';
import ButtonStatesTemplate from './buttonStates.hbs';
import ButtonLinkExample from './button-link-example.hbs';
import ButtonBlockTemplate from './buttonBlock.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const buttonTypesTemplate = ButtonTypesTemplate();
  const buttonStatesTemplate = ButtonStatesTemplate();
  const buttonLinkExample = ButtonLinkExample();
  const buttonBlockTemplate = ButtonBlockTemplate();

  return (
    <Documentation docs={Docs}>
      <Example heading="Button Types" handlebars={ButtonTypesTemplateRaw}>
        {buttonTypesTemplate}
      </Example>
      <Example heading="Button States" handlebars={ButtonStatesTemplateRaw}>
        {buttonStatesTemplate}
      </Example>
      <Example heading="Links as Buttons" handlebars={ButtonLinkExampleRaw}>
        {buttonLinkExample}
      </Example>
      <Example
        heading="Button (Block Level)"
        handlebars={ButtonBlockTemplateRaw}
      >
        {buttonBlockTemplate}
      </Example>
    </Documentation>
  );
};
