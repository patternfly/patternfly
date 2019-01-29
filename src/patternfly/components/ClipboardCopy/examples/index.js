import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import ClipboardCopyExampleRaw from '!raw!./clipboard-copy-example.hbs';
import ClipboardCopyExample from './clipboard-copy-example.hbs';
import docs from '../docs/code.md';
import '../clipboard-copy.scss';

export const Docs = docs;

export default () => {
  const clipboardCopyExample = ClipboardCopyExample();
  const headingText = 'Copy to Clipboard';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading="Copy to Clipboard Examples" handlebars={ClipboardCopyExampleRaw} minHeight="20em">
        {clipboardCopyExample}
      </Example>
    </Documentation>
  );
};
