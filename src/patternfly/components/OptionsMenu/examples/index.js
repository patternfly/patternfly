import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import OptionsMenuSingleExampleRaw from '!raw!./options-menu-single-example.hbs';
import OptionsMenuDisabledExampleRaw from '!raw!./options-menu-disabled-example.hbs';
import OptionsMenuMultipleExampleRaw from '!raw!./options-menu-multiple-example.hbs';
import OptionsMenuPlainExampleRaw from '!raw!./options-menu-plain-example.hbs';
import OptionsMenuTopExampleRaw from '!raw!./options-menu-top-example.hbs';
import OptionsMenuAlignRightExampleRaw from '!raw!./options-menu-align-right-example.hbs';
import OptionsMenuPlainTextExampleRaw from '!raw!./options-menu-plain-text-example.hbs';
import OptionsMenuSingleExample from './options-menu-single-example.hbs';
import OptionsMenuDisabledExample from './options-menu-disabled-example.hbs';
import OptionsMenuMultipleExample from './options-menu-multiple-example.hbs';
import OptionsMenuPlainExample from './options-menu-plain-example.hbs';
import OptionsMenuTopExample from './options-menu-top-example.hbs';
import OptionsMenuAlignRightExample from './options-menu-align-right-example.hbs';
import OptionsMenuPlainTextExample from './options-menu-plain-text-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default props => {
  const optionsMenuSingleExample = OptionsMenuSingleExample();
  const optionsMenuDisabledExample = OptionsMenuDisabledExample();
  const optionsMenuMultipleExample = OptionsMenuMultipleExample();
  const optionsMenuPlainExample = OptionsMenuPlainExample();
  const optionsMenuTopExample = OptionsMenuTopExample();
  const optionsMenuAlignRightExample = OptionsMenuAlignRightExample();
  const optionsMenuPlainTextExample = OptionsMenuPlainTextExample();
  const headingText = 'Options menu';
  const variablesRoot = 'pf-c-options-menu';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example
        heading="Options menu - single option"
        className="is-expanded-dropdown"
        handlebars={OptionsMenuSingleExampleRaw}
      >
        {optionsMenuSingleExample}
      </Example>
      <Example heading="Options menu - disabled" handlebars={OptionsMenuDisabledExampleRaw}>
        {optionsMenuDisabledExample}
      </Example>
      <Example heading="Options menu - multiple options" minHeight="20em" handlebars={OptionsMenuMultipleExampleRaw}>
        {optionsMenuMultipleExample}
      </Example>
      <Example heading="Options menu - plain" minHeight="20em" handlebars={OptionsMenuPlainExampleRaw}>
        {optionsMenuPlainExample}
      </Example>
      <Example heading="Options menu - top" className="is-expanded-top" handlebars={OptionsMenuTopExampleRaw}>
        {optionsMenuTopExample}
      </Example>
      <Example
        heading="Options menu - align right"
        className="is-align-right is-expanded-dropdown"
        handlebars={OptionsMenuAlignRightExampleRaw}
      >
        {optionsMenuAlignRightExample}
      </Example>
      <Example
        heading="Options menu - plain with text"
        className="is-expanded-dropdown"
        handlebars={OptionsMenuPlainTextExampleRaw}
      >
        {optionsMenuPlainTextExample}
      </Example>
    </Documentation>
  );
};
