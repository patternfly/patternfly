import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import ChipExampleRaw from '!raw!./chip-example.hbs';
import chipExample from './chip-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const ChipExample = chipExample();
  const headingText = 'Chip';
  const variablesRoot = 'pf-c-chip';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Chip" handlebars={ChipExampleRaw} className="is-light-preview">
        {ChipExample}
      </Example>
    </Documentation>
  );
};
