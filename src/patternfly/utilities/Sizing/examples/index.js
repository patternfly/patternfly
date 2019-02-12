import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

// Raw
import sizingExampleWidthPercentRaw from '!raw!./sizing-width-percent.hbs';
import sizingExampleWidthViewportRaw from '!raw!./sizing-width-viewport.hbs';
import sizingExampleHeightPercentRaw from '!raw!./sizing-height-percent.hbs';
import sizingExampleHeightViewportRaw from '!raw!./sizing-height-viewport.hbs';

// Width
import SizingExampleWidthPercent from './sizing-width-percent.hbs';
import SizingExampleWidthViewport from './sizing-width-viewport.hbs';
import sizingWidthPercentDocs from '../docs/sizing-width-percent.md';
import sizingWidthViewportDocs from '../docs/sizing-width-viewport.md';

// Height
import SizingExampleHeightPercent from './sizing-height-percent.hbs';
import SizingExampleHeightViewport from './sizing-height-viewport.hbs';
import sizingHeightPercentDocs from '../docs/sizing-height-percent.md';
import sizingHeightViewportDocs from '../docs/sizing-height-viewport.md';

import docs from '../docs/code.md';
import '../sizing.scss';

export const Docs = docs;
export const headingText = 'Sizing';

export default () => {
  const sizingExampleWidthPercent = SizingExampleWidthPercent();
  const sizingExampleWidthViewport = SizingExampleWidthViewport();
  const sizingExampleHeightPercent = SizingExampleHeightPercent();
  const sizingExampleHeightViewport = SizingExampleHeightViewport();

  return (
    <Documentation docs={Docs} heading={headingText} className="is-utility-page">
      <Example
        heading="Width -  base and percentage units"
        handlebars={sizingExampleWidthPercentRaw}
        docs={sizingWidthPercentDocs}
      >
        {sizingExampleWidthPercent}
      </Example>
      <Example
        heading="Width - viewport units"
        fullPageOnly="true"
        handlebars={sizingExampleWidthViewportRaw}
        docs={sizingWidthViewportDocs}
      >
        {sizingExampleWidthViewport}
      </Example>
      <Example
        heading="Height -  base and percentage units"
        handlebars={sizingExampleHeightPercentRaw}
        docs={sizingHeightPercentDocs}
        className="is-tall-body"
      >
        {sizingExampleHeightPercent}
      </Example>
      <Example
        heading="Height - viewport units"
        fullPageOnly="true"
        handlebars={sizingExampleHeightViewportRaw}
        docs={sizingHeightViewportDocs}
      >
        {sizingExampleHeightViewport}
      </Example>
    </Documentation>
  );
};
