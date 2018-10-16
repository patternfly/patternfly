import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

import widthExampleRaw from '!raw!./width-example.hbs';

import WidthExample from './width-example.hbs';

import docs from '../docs/code.md';
import '../width.scss';

export const Docs = docs;

export default () => {
  const widthExample = WidthExample();
  const headingText = 'Width';

  return (
    <Documentation docs={Docs} heading={headingText} className="is-utility-page">
      <Example heading="Width" handlebars={widthExampleRaw}>
        {widthExample}
      </Example>
    </Documentation>
  );
};
