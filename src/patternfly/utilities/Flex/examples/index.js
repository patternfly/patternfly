import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import flexEnableExampleRaw from '!raw!./flex-enable-example.hbs';
import flexDirectionExampleRaw from '!raw!./flex-direction-example.hbs';
import flexJustifyContentExampleRaw from '!raw!./flex-justify-content-example.hbs';
import flexAlignItemsExampleRaw from '!raw!./flex-align-items-example.hbs';
import flexAlignSelfExampleRaw from '!raw!./flex-align-self-example.hbs';
import flexAlignContentExampleRaw from '!raw!./flex-align-content-example.hbs';
import flexShrinkExampleRaw from '!raw!./flex-shrink-example.hbs';
import flexGrowExampleRaw from '!raw!./flex-grow-example.hbs';
import flexBasisNoneExampleRaw from '!raw!./flex-basis-none-example.hbs';
import flexFillExampleRaw from '!raw!./flex-fill-example.hbs';
import flexWrapExampleRaw from '!raw!./flex-wrap-example.hbs';

import FlexEnableExample from './flex-enable-example.hbs';
import FlexDirectionExample from './flex-direction-example.hbs';
import FlexJustifyContentExample from './flex-justify-content-example.hbs';
import FlexAlignItemsExample from './flex-align-items-example.hbs';
import FlexAlignSelfExample from './flex-align-self-example.hbs';
import FlexAlignContentExample from './flex-align-content-example.hbs';
import FlexShrinkExample from './flex-shrink-example.hbs';
import FlexGrowExample from './flex-grow-example.hbs';
import FlexBasisNoneExample from './flex-basis-none-example.hbs';
import FlexFillExample from './flex-fill-example.hbs';
import FlexWrapExample from './flex-wrap-example.hbs';

import docs from '../docs/code.md';

export const Docs = docs;

export default () => {
  const flexEnableExample = FlexEnableExample();
  const flexDirectionExample = FlexDirectionExample();
  const flexJustifyContentExample = FlexJustifyContentExample();
  const flexAlignItemsExample = FlexAlignItemsExample();
  const flexAlignSelfExample = FlexAlignSelfExample();
  const flexAlignContentExample = FlexAlignContentExample();
  const flexShrinkExample = FlexShrinkExample();
  const flexGrowExample = FlexGrowExample();
  const flexBasisNoneExample = FlexBasisNoneExample();
  const flexFillExample = FlexFillExample();
  const flexWrapExample = FlexWrapExample();
  const headingText = 'Flex';

  return (
    <Documentation docs={Docs} heading={headingText} className="flex-examples is-utility-page">
      <Example heading="Enable flex" handlebars={flexEnableExampleRaw}>
        {flexEnableExample}
      </Example>
      <Example heading="Flex direction" handlebars={flexDirectionExampleRaw}>
        {flexDirectionExample}
      </Example>
      <Example heading="Flex justify content" handlebars={flexJustifyContentExampleRaw}>
        {flexJustifyContentExample}
      </Example>
      <Example heading="Flex align items" handlebars={flexAlignItemsExampleRaw}>
        {flexAlignItemsExample}
      </Example>
      <Example heading="Flex align self" handlebars={flexAlignSelfExampleRaw}>
        {flexAlignSelfExample}
      </Example>
      <Example heading="Flex align content" handlebars={flexAlignContentExampleRaw}>
        {flexAlignContentExample}
      </Example>
      <Example heading="Flex shrink" handlebars={flexShrinkExampleRaw}>
        {flexShrinkExample}
      </Example>
      <Example heading="Flex grow" handlebars={flexGrowExampleRaw}>
        {flexGrowExample}
      </Example>
      <Example heading="Flex basis and flex none" handlebars={flexBasisNoneExampleRaw}>
        {flexBasisNoneExample}
      </Example>
      <Example heading="Flex fill" handlebars={flexFillExampleRaw}>
        {flexFillExample}
      </Example>
      <Example heading="Flex wrap" handlebars={flexWrapExampleRaw}>
        {flexWrapExample}
      </Example>
    </Documentation>
  );
};
