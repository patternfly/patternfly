import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

import TooltipExampleRaw from '!raw!./tooltip-example.hbs';

import TooltipExample from './tooltip-example.hbs';

import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const tooltipExample = TooltipExample();
  const headingText = 'Tooltip';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example className="is-tooltip" heading="Tooltip" handlebars={TooltipExampleRaw}>
        {tooltipExample}
      </Example>
    </Documentation>
  );
};
