import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import ButtonTypesTemplate from './buttonTypes.hbs';
import ButtonTypesTemplateAlt from './buttonTypesAlt.hbs';
import ButtonStatesTemplate from './buttonStates.hbs';
import ButtonStatesTemplateAlt from './buttonStatesAlt.hbs';
import ButtonBlockTemplate from './buttonBlock.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const buttonTypesTemplate = ButtonTypesTemplate();
  const buttonTypesTemplateAlt = ButtonTypesTemplateAlt();
  const buttonStatesTemplate = ButtonStatesTemplate();
  const buttonStatesTemplateAlt = ButtonStatesTemplateAlt();
  const buttonBlockTemplate = ButtonBlockTemplate();

  return (
    <Documentation docs={Docs}>
      <Example heading="Button Types">{buttonTypesTemplate}</Example>
      <Example heading="Button Types - alternate secondary"  className="is-dark-preview">{buttonTypesTemplateAlt}</Example>
      <Example heading="Button States">{buttonStatesTemplate}</Example>
      <Example heading="Button States - alternate secondary" className="is-dark-preview">{buttonStatesTemplateAlt}</Example>
      <Example heading="Button (Block Level)">{buttonBlockTemplate}</Example>
    </Documentation>
  );
};
