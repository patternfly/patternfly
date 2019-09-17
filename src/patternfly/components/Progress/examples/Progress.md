---
title: Progress
section: components
cssPrefix: pf-c-progress
---
```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import progressSimpleExampleRaw from '!raw!./progress-simple-example.hbs';
import progressSingleLineExampleRaw from '!raw!./progress-single-line-example.hbs';
import progressSmallExampleRaw from '!raw!./progress-small-example.hbs';
import progressLargeExampleRaw from '!raw!./progress-large-example.hbs';
import progressOutsideExampleRaw from '!raw!./progress-outside-example.hbs';
import progressInsideExampleRaw from '!raw!./progress-inside-example.hbs';
import progressSuccessExampleRaw from '!raw!./progress-success-example.hbs';
import progressFailureExampleRaw from '!raw!./progress-failure-example.hbs';
import progressInsideSuccessExampleRaw from '!raw!./progress-inside-success-example.hbs';
import progressOutsideFailureExampleRaw from '!raw!./progress-outside-failure-example.hbs';
import progressNoMeasureExampleRaw from '!raw!./progress-no-measure-example.hbs';
import progressNoMeasureFailureExampleRaw from '!raw!./progress-no-measure-failure-example.hbs';
import progressFiniteStepExampleRaw from '!raw!./progress-finite-step-example.hbs';
import progressStepInstructionExampleRaw from '!raw!./progress-step-instruction-example.hbs';
import ProgressSimpleExample from './progress-simple-example.hbs';
import ProgressSingleLineExample from './progress-single-line-example.hbs';
import ProgressSmallExample from './progress-small-example.hbs';
import ProgressLargeExample from './progress-large-example.hbs';
import ProgressOutsideExample from './progress-outside-example.hbs';
import ProgressInsideExample from './progress-inside-example.hbs';
import ProgressSuccessExample from './progress-success-example.hbs';
import ProgressFailureExample from './progress-failure-example.hbs';
import ProgressInsideSuccessExample from './progress-inside-success-example.hbs';
import ProgressOutsideFailureExample from './progress-outside-failure-example.hbs';
import ProgressNoMeasureExample from './progress-no-measure-example.hbs';
import ProgressNoMeasureFailureExample from './progress-no-measure-failure-example.hbs';
import ProgressFiniteStepExample from './progress-finite-step-example.hbs';
import ProgressStepInstructionExample from './progress-step-instruction-example.hbs';
import progressDynamicExampleDoc from '../docs/progress-dynamic.md';
import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const progressSimpleExample = ProgressSimpleExample();
  const progressSingleLineExample = ProgressSingleLineExample();
  const progressSmallExample = ProgressSmallExample();
  const progressLargeExample = ProgressLargeExample();
  const progressOutsideExample = ProgressOutsideExample();
  const progressInsideExample = ProgressInsideExample();
  const progressSuccessExample = ProgressSuccessExample();
  const progressFailureExample = ProgressFailureExample();
  const progressInsideSuccessExample = ProgressInsideSuccessExample();
  const progressOutsideFailureExample = ProgressOutsideFailureExample();
  const progressNoMeasureExample = ProgressNoMeasureExample();
  const progressNoMeasureFailureExample = ProgressNoMeasureFailureExample();
  const progressFiniteStepExample = ProgressFiniteStepExample();
  const progressStepInstructionExample = ProgressStepInstructionExample();
  const headingText = 'Progress';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Progress simple" handlebars={progressSimpleExampleRaw}>
        {progressSimpleExample}
      </Example>
      <Example heading="Progress small" handlebars={progressSmallExampleRaw}>
        {progressSmallExample}
      </Example>
      <Example heading="Progress large" handlebars={progressLargeExampleRaw}>
        {progressLargeExample}
      </Example>
      <Example heading="Progress outside" handlebars={progressOutsideExampleRaw}>
        {progressOutsideExample}
      </Example>
      <Example heading="Progress inside" handlebars={progressInsideExampleRaw}>
        {progressInsideExample}
      </Example>
      <Example heading="Progress success" handlebars={progressSuccessExampleRaw}>
        {progressSuccessExample}
      </Example>
      <Example heading="Progress failure" handlebars={progressFailureExampleRaw}>
        {progressFailureExample}
      </Example>
      <Example heading="Progress inside success" handlebars={progressInsideSuccessExampleRaw}>
        {progressInsideSuccessExample}
      </Example>
      <Example heading="Progress outside failure" handlebars={progressOutsideFailureExampleRaw}>
        {progressOutsideFailureExample}
      </Example>
      <Example heading="Progress on single line" handlebars={progressSingleLineExampleRaw}>
        {progressSingleLineExample}
      </Example>
      <Example heading="Progress without measure" handlebars={progressNoMeasureExampleRaw}>
        {progressNoMeasureExample}
      </Example>
      <Example heading="Progress failure without measure" handlebars={progressNoMeasureFailureExampleRaw}>
        {progressNoMeasureFailureExample}
      </Example>
      <Example
        heading="Progress finite step"
        handlebars={progressFiniteStepExampleRaw}
        docs={progressDynamicExampleDoc}
      >
        {progressFiniteStepExample}
      </Example>
      <Example
        heading="Progress step instruction"
        handlebars={progressStepInstructionExampleRaw}
        docs={progressDynamicExampleDoc}
      >
        {progressStepInstructionExample}
      </Example>
    </Documentation>
  );
};
```

## Overview

## Accessibility

Note: If this component is describing the loading progress of a particular region of a page, the author should use `aria-describedby` to point to the status, and set the `aria-busy` attribute to `true` on the region until it is finished loading. 

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `role="progressbar"` | `.pf-c-progress__bar` |  This role is used for an element that displays the progress status for a task that takes a long time or consists of several steps. |
| `aria-valuenow=""` | `.pf-c-progress__bar` |  This value needs to be updated as progress continues. |
| `aria-valuemin="0"` | `.pf-c-progress__bar` |  The minimum value for the progress bar. |
| `aria-valuemax="100"` | `.pf-c-progress__bar` |  The maximum value for the progress bar. If the progress is only defined using `aria-valuenow` (e.g a percentage), the value should be set to "100". If the progress is defined using `aria-valuetext`, then this value can be a number other than 100. For example, if `aria-valuetext` is "2 of 5 units", then `aria-valuemax` can be "5" and `aria-valuenow` can be "2". |
| `aria-describedby="[id of .pf-c-progress__description]"` | `.pf-c-progress__bar` |  The description of what progress is being shown. |
| `aria-valuetext="[loading state]"` | `.pf-c-progress__bar` |  Provide a text string that communicates current status. Only use if the important information about status is included in the text string. Do not use if percentage is the most important value to communicate. Some screen readers will ignore the percentage value determined from `aria-valuenow` when `aria-valuetext` is used. |
| `aria-hidden="true"` | `.pf-c-progress__status` |  Hides the visible progress bar status from screen readers. This information is communicated by the aria attributes defined on the `.pf-c-progress__bar` element. |

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-progress` | `<div>` |  Initiates a progress component. |
| `.pf-c-progress__description` | `<div>` |  The description for a progress bar. |
| `.pf-c-progress__status` | `<div>` |  Displays the % of progress and status icons. |
| `.pf-c-progress__measure` | `<span>` |  Displays the % complete. |
| `.pf-c-progress__status-icon` | `<span>` |  Displays the status icon. (optional) |
| `.pf-c-progress__bar` | `<div>` |  Displays across the entire width and represents the completed state. |
| `.pf-c-progress__indicator` | `<div>` |  Displays with the `.pf-c-progress__bar` to indicate the progress so far. |
| `.pf-m-lg` | `.pf-c-progress` |  Modifies the progress bar to be larger. |
| `.pf-m-sm` | `.pf-c-progress` |  Modifies the progress bar to be smaller. |
| `.pf-m-inside` | `.pf-c-progress` |  Shows the measure within the progress indicator. NOTE: This option requires `.pf-m-lg`.|
| `.pf-m-outside` | `.pf-c-progress` |  Shows the measure and status icon to the right of the progress bar. |
| `.pf-m-singleline` | `.pf-c-progress` | Modifies the progress component to exist on one row. If a measure is needed, use with `.pf-m-inside` or `.pf-m-outside`|
| `.pf-m-success` | `.pf-c-progress` |  Changes the appearance of the progess component to indicate a success state. |
| `.pf-m-danger` | `.pf-c-progress` |  Changes the appearance of the progess component to indicate a danger (failure) state. |


If the status that displays with the bar is not a percentage, then the ARIA tag `aria-valuetext` should be used to provide this status to screen reader users. This is the only case when setting the `aria-valuemax` to a value other than "100" is recommended, given how different screen readers handle these attributes.
