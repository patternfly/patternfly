import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import ClipboardCopyNoExpansionExampleRaw from '!raw!./clipboard-copy-no-expansion-example.hbs';
import ClipboardCopyExpansionExampleRaw from '!raw!./clipboard-copy-expansion-example.hbs';
import ClipboardCopyNoExpansionExample from './clipboard-copy-no-expansion-example.hbs';
import ClipboardCopyExpansionExample from './clipboard-copy-expansion-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const clipboardCopyNoExpansionExample = ClipboardCopyNoExpansionExample();
  const clipboardCopyExpansionExample = ClipboardCopyExpansionExample();
  const headingText = 'Copy to clipboard';
  const variablesRoot = 'pf-c-clipboard-copy';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Copy to Clipboard No Expansion" handlebars={ClipboardCopyNoExpansionExampleRaw}>
        {clipboardCopyNoExpansionExample}
      </Example>
      <Example heading="Copy to Clipboard Expansion" handlebars={ClipboardCopyExpansionExampleRaw} minHeight="20em">
        {clipboardCopyExpansionExample}
      </Example>
    </Documentation>
  );
};
