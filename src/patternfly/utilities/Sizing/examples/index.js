import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

// Raw
import sizingExampleWidthRaw from '!raw!./sizing-width.hbs';
import sizingExampleHeightRaw from '!raw!./sizing-height.hbs';
import sizingExampleBreakpointRaw from '!raw!./sizing-breakpoint.hbs';
import sizingExampleButtonRaw from '!raw!./sizing-button.hbs';

// Width
import SizingExampleWidth from './sizing-width.hbs';
import sizingWidthDocs from '../docs/sizing-width.md';

// Height
import SizingExampleHeight from './sizing-height.hbs';
import sizingHeightDocs from '../docs/sizing-height.md';

// Breakpoint demo
import SizingExampleBreakpoint from './sizing-breakpoint.hbs';

// Button demo
import SizingExampleButton from './sizing-button.hbs';

import docs from '../docs/code.md';
import '../sizing.scss';

export const Docs = docs;
export const headingText = 'Sizing';

export default () => {
  const sizingExampleWidth = SizingExampleWidth();
  const sizingExampleHeight = SizingExampleHeight();
  const sizingExampleBreakpoint = SizingExampleBreakpoint();
  const sizingExampleButton = SizingExampleButton();

  return (
    <Documentation docs={Docs} heading={headingText} className="is-utility-page">
      <Example heading="Width" handlebars={sizingExampleWidthRaw} docs={sizingWidthDocs}>
        {sizingExampleWidth}
      </Example>
      <Example heading="Height" handlebars={sizingExampleHeightRaw} docs={sizingHeightDocs} className="is-tall-body">
        {sizingExampleHeight}
      </Example>
      <Example heading="Breakpoint demo" handlebars={sizingExampleBreakpointRaw}>
        {sizingExampleBreakpoint}
      </Example>
      <Example heading="Button demo" handlebars={sizingExampleButtonRaw}>
        {sizingExampleButton}
      </Example>
    </Documentation>
  );
};
