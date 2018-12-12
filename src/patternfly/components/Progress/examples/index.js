import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import progressSimpleExampleRaw from '!raw!./progress-simple-example.hbs';
import progressNoDescriptionExampleRaw from '!raw!./progress-no-description-example.hbs';
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
import progressDynamicExampleRaw from '!raw!./progress-dynamic-example.hbs';
import ProgressSimpleExample from './progress-simple-example.hbs';
import ProgressNoDescriptionExample from './progress-no-description-example.hbs';
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
import ProgressDynamicExample from './progress-dynamic-example.hbs';
import progressDynamicExampleDoc from '../docs/progress-dynamic.md';
import docs from '../docs/code.md';
import '../progress.scss';

export const Docs = docs;

export default () => {
  const progressSimpleExample = ProgressSimpleExample();
  const progressNoDescriptionExample = ProgressNoDescriptionExample();
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
  const progressDynamicExample = ProgressDynamicExample();
  const headingText = 'Progress';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading="Progress Simple" handlebars={progressSimpleExampleRaw}>
        {progressSimpleExample}
      </Example>
      <Example heading="Progress Small" handlebars={progressSmallExampleRaw}>
        {progressSmallExample}
      </Example>
      <Example heading="Progress Large" handlebars={progressLargeExampleRaw}>
        {progressLargeExample}
      </Example>
      <Example heading="Progress Outside" handlebars={progressOutsideExampleRaw}>
        {progressOutsideExample}
      </Example>
      <Example heading="Progress Inside" handlebars={progressInsideExampleRaw}>
        {progressInsideExample}
      </Example>
      <Example heading="Progress Success" handlebars={progressSuccessExampleRaw}>
        {progressSuccessExample}
      </Example>
      <Example heading="Progress Failure" handlebars={progressFailureExampleRaw}>
        {progressFailureExample}
      </Example>
      <Example heading="Progress Inside Success" handlebars={progressInsideSuccessExampleRaw}>
        {progressInsideSuccessExample}
      </Example>
      <Example heading="Progress Outside Failure" handlebars={progressOutsideFailureExampleRaw}>
        {progressOutsideFailureExample}
      </Example>
      <Example heading="Progress Without Description" handlebars={progressNoDescriptionExampleRaw}>
        {progressNoDescriptionExample}
      </Example>
      <Example heading="Progress Without Measure" handlebars={progressNoMeasureExampleRaw}>
        {progressNoMeasureExample}
      </Example>
      <Example heading="Progress Failure Without Measure" handlebars={progressNoMeasureFailureExampleRaw}>
        {progressNoMeasureFailureExample}
      </Example>
      <Example
        heading="Progress with Dynamic Description"
        handlebars={progressDynamicExampleRaw}
        docs={progressDynamicExampleDoc}
      >
        {progressDynamicExample}
      </Example>
    </Documentation>
  );
};
