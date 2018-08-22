import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

import PopoverExampleRaw from '!raw!./popover-example.hbs';

import PopoverExample from './popover-example.hbs';

import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const popoverExample = PopoverExample();
  const headingText = 'Popover';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example className="is-popover" heading="Popover" handlebars={PopoverExampleRaw}>
        {popoverExample}
      </Example>
    </Documentation>
  );
};
