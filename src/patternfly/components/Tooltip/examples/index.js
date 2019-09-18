import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

import TooltipTopExampleRaw from '!raw!./tooltip-top-example.hbs';
import TooltipRightExampleRaw from '!raw!./tooltip-right-example.hbs';
import TooltipBottomExampleRaw from '!raw!./tooltip-bottom-example.hbs';
import TooltipLeftExampleRaw from '!raw!./tooltip-left-example.hbs';
import TooltipTextAlignLeftExampleRaw from '!raw!./tooltip-text-align-left-example.hbs';

import TooltipTopExample from './tooltip-top-example.hbs';
import TooltipRightExample from './tooltip-right-example.hbs';
import TooltipBottomExample from './tooltip-bottom-example.hbs';
import TooltipLeftExample from './tooltip-left-example.hbs';
import TooltipTextAlignLeftExample from './tooltip-text-align-left-example.hbs';

import docs from '../docs/code.md';

export const Docs = docs;

export default props => {
  const tooltipTopExample = TooltipTopExample();
  const tooltipRightExample = TooltipRightExample();
  const tooltipBottomExample = TooltipBottomExample();
  const tooltipLeftExample = TooltipLeftExample();
  const tooltipTextAlignLeftExample = TooltipTextAlignLeftExample();
  const headingText = 'Tooltip';
  const variablesRoot = 'pf-c-tooltip';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example className="is-tooltip" heading="Tooltip top" handlebars={TooltipTopExampleRaw}>
        {tooltipTopExample}
      </Example>
      <Example className="is-tooltip" heading="Tooltip right" handlebars={TooltipRightExampleRaw}>
        {tooltipRightExample}
      </Example>
      <Example className="is-tooltip" heading="Tooltip bottom" handlebars={TooltipBottomExampleRaw}>
        {tooltipBottomExample}
      </Example>
      <Example className="is-tooltip" heading="Tooltip left" handlebars={TooltipLeftExampleRaw}>
        {tooltipLeftExample}
      </Example>
      <Example className="is-tooltip" heading="Tooltip left align text" handlebars={TooltipTextAlignLeftExampleRaw}>
        {tooltipTextAlignLeftExample}
      </Example>
    </Documentation>
  );
};
