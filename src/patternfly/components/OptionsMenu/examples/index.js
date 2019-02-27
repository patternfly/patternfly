import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import OptionsMenuSingleExampleRaw from '!raw!./options-menu-single-example.hbs';
import OptionsMenuMultipleExampleRaw from '!raw!./options-menu-multiple-example.hbs';
import OptionsMenuPlainExampleRaw from '!raw!./options-menu-plain-example.hbs';
import OptionsMenuTopExampleRaw from '!raw!./options-menu-top-example.hbs';
import OptionsMenuAlignRightExampleRaw from '!raw!./options-menu-align-right-example.hbs';
import OptionsMenuPlainTextExampleRaw from '!raw!./options-menu-plain-text-example.hbs';
import OptionsMenuSingleExample from './options-menu-single-example.hbs';
import OptionsMenuMultipleExample from './options-menu-multiple-example.hbs';
import OptionsMenuPlainExample from './options-menu-plain-example.hbs';
import OptionsMenuTopExample from './options-menu-top-example.hbs';
import OptionsMenuAlignRightExample from './options-menu-align-right-example.hbs';
import OptionsMenuPlainTextExample from './options-menu-plain-text-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default () => {
  const optionsMenuSingleExample = OptionsMenuSingleExample();
  const optionsMenuMultipleExample = OptionsMenuMultipleExample();
  const optionsMenuPlainExample = OptionsMenuPlainExample();
  const optionsMenuTopExample = OptionsMenuTopExample();
  const optionsMenuAlignRightExample = OptionsMenuAlignRightExample();
  const optionsMenuPlainTextExample = OptionsMenuPlainTextExample();
  const headingText = 'Options Menu';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example
        heading="Options Menu - Single option"
        className="is-expanded-dropdown"
        handlebars={OptionsMenuSingleExampleRaw}
      >
        {optionsMenuSingleExample}
      </Example>
      <Example heading="Options Menu - Multiple options" minHeight="20em" handlebars={OptionsMenuMultipleExampleRaw}>
        {optionsMenuMultipleExample}
      </Example>
      <Example heading="Options Menu - Plain" minHeight="20em" handlebars={OptionsMenuPlainExampleRaw}>
        {optionsMenuPlainExample}
      </Example>
      <Example heading="Options Menu - Top" className="is-expanded-top" handlebars={OptionsMenuTopExampleRaw}>
        {optionsMenuTopExample}
      </Example>
      <Example
        heading="Options Menu - Align Right"
        className="is-align-right is-expanded-dropdown"
        handlebars={OptionsMenuAlignRightExampleRaw}
      >
        {optionsMenuAlignRightExample}
      </Example>
      <Example
        heading="Options Menu - Plain with text"
        className="is-expanded-dropdown"
        handlebars={OptionsMenuPlainTextExampleRaw}
      >
        {optionsMenuPlainTextExample}
      </Example>
    </Documentation>
  );
};
