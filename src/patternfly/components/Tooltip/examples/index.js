import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

import TooltipTopExampleRaw from '!raw!./tooltip-top-example.hbs';
import TooltipRightExampleRaw from '!raw!./tooltip-right-example.hbs';
import TooltipBottomExampleRaw from '!raw!./tooltip-bottom-example.hbs';
import TooltipLeftExampleRaw from '!raw!./tooltip-left-example.hbs';

import TooltipTopExample from './tooltip-top-example.hbs';
import TooltipRightExample from './tooltip-right-example.hbs';
import TooltipBottomExample from './tooltip-bottom-example.hbs';
import TooltipLeftExample from './tooltip-left-example.hbs';

import docs from '../docs/code.md';
import '../tooltip.scss';

export const Docs = docs;

export default () => {
  const tooltipTopExample = TooltipTopExample();
  const tooltipRightExample = TooltipRightExample();
  const tooltipBottomExample = TooltipBottomExample();
  const tooltipLeftExample = TooltipLeftExample();
  const headingText = 'Tooltip';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example className="is-tooltip" heading="Tooltip Top" handlebars={TooltipTopExampleRaw}>
        {tooltipTopExample}
      </Example>
      <Example className="is-tooltip" heading="Tooltip Right" handlebars={TooltipRightExampleRaw}>
        {tooltipRightExample}
      </Example>
      <Example className="is-tooltip" heading="Tooltip Bottom" handlebars={TooltipBottomExampleRaw}>
        {tooltipBottomExample}
      </Example>
      <Example className="is-tooltip" heading="Tooltip Left" handlebars={TooltipLeftExampleRaw}>
        {tooltipLeftExample}
      </Example>
    </Documentation>
  );
};
