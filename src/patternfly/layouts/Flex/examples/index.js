import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

import flexBasicExampleRaw from '!raw!./flex-basic-example.hbs';
import flexIndividuallySpacedExampleRaw from '!raw!./flex-individually-spaced-example.hbs';
import flexNestedExampleRaw from '!raw!./flex-nested-example.hbs';
import flexAlignmentExampleRaw from '!raw!./flex-alignment-example.hbs';
import flexJustificationExampleRaw from '!raw!./flex-justification-example.hbs';
import flexColumnsExampleRaw from '!raw!./flex-columns-example.hbs';

import FlexBasicExample from './flex-basic-example.hbs';
import FlexIndividuallySpacedExample from './flex-individually-spaced-example.hbs';
import FlexNestedExample from './flex-nested-example.hbs';
import FlexAlignmentExample from './flex-alignment-example.hbs';
import FlexJustificationExample from './flex-justification-example.hbs';
import FlexColumnsExample from './flex-columns-example.hbs';

import flexIntroDoc from '../docs/flex-intro.md';
import flexBasicExampleDoc from '../docs/flex-basic.md';
import flexIndividuallySpacedExampleDoc from '../docs/flex-individually-spaced.md';
import flexNestedExampleDoc from '../docs/flex-nested.md';
import flexAlignmentExampleDoc from '../docs/flex-alignment.md';
import flexJustificationExampleDoc from '../docs/flex-justification.md';
import flexColumnsExampleDoc from '../docs/flex-columns.md';

import docs from '../docs/code.md';

export const Docs = docs;

export default () => {
  const flexBasicExample = FlexBasicExample();
  const flexIndividuallySpacedExample = FlexIndividuallySpacedExample();
  const flexNestedExample = FlexNestedExample();
  const flexAlignmentExample = FlexAlignmentExample();
  const flexJustificationExample = FlexJustificationExample();
  const flexColumnsExample = FlexColumnsExample();
  const headingText = 'Flex';

  return (
    <Documentation docs={Docs} heading={headingText} className="flex-documentation">
      <Example intro={flexIntroDoc} heading="Basic Usage" handlebars={flexBasicExampleRaw} docs={flexBasicExampleDoc}>
        {flexBasicExample}
      </Example>
      <Example
        heading="Individual Spacing Usage"
        handlebars={flexIndividuallySpacedExampleRaw}
        docs={flexIndividuallySpacedExampleDoc}
      >
        {flexIndividuallySpacedExample}
      </Example>
      <Example heading="Nested Usage" handlebars={flexNestedExampleRaw} docs={flexNestedExampleDoc}>
        {flexNestedExample}
      </Example>
      <Example heading="Alignment" handlebars={flexAlignmentExampleRaw} docs={flexAlignmentExampleDoc}>
        {flexAlignmentExample}
      </Example>
      <Example heading="Justification" handlebars={flexJustificationExampleRaw} docs={flexJustificationExampleDoc}>
        {flexJustificationExample}
      </Example>
      <Example heading="Columns" handlebars={flexColumnsExampleRaw} docs={flexColumnsExampleDoc}>
        {flexColumnsExample}
      </Example>
    </Documentation>
  );
};
