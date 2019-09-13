---
title: Tooltip
section: components
---

```js
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

export const Docs = docs;

export default (props) => {
  const tooltipTopExample = TooltipTopExample();
  const tooltipRightExample = TooltipRightExample();
  const tooltipBottomExample = TooltipBottomExample();
  const tooltipLeftExample = TooltipLeftExample();
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
    </Documentation>
  );
};
```

## Overview

A tooltip is used to provide contextual information for another component on hover.  The tooltip itself is made up of two elements: arrow and content. One of the directional modifiers (`.pf-m-left`, `.pf-m-top`, etc.) is required on the tooltip component.

## Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role="tooltip"` | `.pf-c-tooltip` | Adds a tooltip role to the tooltip component. **Required**|
| `aria-describedby="[id of .pf-c-tooltip__content]"` or `aria-labelledby="[id of .pf-c-tooltip__content]"` |	`[element that triggers the tooltip]` | Makes the contents of the tooltip accessible to assistive technologies by associating the tooltip text with the element that triggers the tooltip. Use `aria-labelledby` if the tooltip provides a label for the element. Use `aria-describedby` if the element already has an accessible label that is different from the tooltip text. **Required**|


## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-tooltip` | `<div>` |  Creates a tooltip. Always use with a modifier class that positions the tooltip relative to the element it describes. **Required**|
| `.pf-c-tooltip__arrow` | `<div>` |  Creates an arrow pointing towards the element the tooltip describes. **Required** |
| `.pf-c-tooltip__content` | `<div>` |  Creates the body of the tooltip. **Required** |
| `.pf-m-left` | `.pf-c-tooltip` | Positions the tooltip to the left of the element. |
| `.pf-m-right` | `.pf-c-tooltip` | Positions the tooltip to the right of the element. |
| `.pf-m-top` | `.pf-c-tooltip` | Positions the tooltip to the top of the element. |
| `.pf-m-bottom` | `.pf-c-tooltip` | Positions the tooltip to the bottom of the element. |