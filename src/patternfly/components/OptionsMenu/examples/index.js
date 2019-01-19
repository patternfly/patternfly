import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import optionsMenuSingleExampleRaw from '!raw!./options-menu-single-example.hbs';
import optionsMenuMultipleExampleRaw from '!raw!./options-menu-multiple-example.hbs';
import OptionsmenuSingleExample from './options-menu-single-example.hbs';
import OptionsmenuMultipleExample from './options-menu-multiple-example.hbs';
import docs from '../docs/code.md';
import '../options-menu.scss';

export const Docs = docs;

export default () => {
  const optionsMenuSingleExample = OptionsmenuSingleExample();
  const optionsMenuMultipleExample = OptionsmenuMultipleExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Options Menu - Single option" handlebars={optionsMenuSingleExampleRaw} minHeight="20em">
        {optionsMenuSingleExample}
      </Example>
      <Example heading="Options Menu - Multiple options" handlebars={optionsMenuMultipleExampleRaw} minHeight="20em">
        {optionsMenuMultipleExample}
      </Example>
    </Documentation>
  );
};
