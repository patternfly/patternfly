import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

// Raw
import sizingExampleWidthRaw from '!raw!./sizing-width.hbs';
import sizingExampleHeightRaw from '!raw!./sizing-height.hbs';

// Width
import SizingExampleWidth from './sizing-width.hbs';
import sizingWidthDocs from '../docs/sizing-width.md';

// Height
import SizingExampleHeight from './sizing-height.hbs';
import sizingHeightDocs from '../docs/sizing-height.md';

import docs from '../docs/code.md';

export const Docs = docs;
export const headingText = 'Sizing';

export default () => {
  const sizingExampleWidth = SizingExampleWidth();
  const sizingExampleHeight = SizingExampleHeight();

  return (
    <Documentation docs={Docs} heading={headingText} className="is-utility-page">
      <Example heading="Width" handlebars={sizingExampleWidthRaw} docs={sizingWidthDocs}>
        {sizingExampleWidth}
      </Example>
      <Example heading="Height" handlebars={sizingExampleHeightRaw} docs={sizingHeightDocs} className="is-tall-body">
        {sizingExampleHeight}
      </Example>
    </Documentation>
  );
};
