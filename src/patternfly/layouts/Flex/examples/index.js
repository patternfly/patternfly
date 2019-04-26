import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

import flexBasicExampleRaw from '!raw!./flex-basic-example.hbs';
import flexSpacingExampleRaw from '!raw!./flex-spacing-example.hbs';
import flexLayoutExampleRaw from '!raw!./flex-layout-example.hbs';
import flexLayoutColumnExampleRaw from '!raw!./flex-layout-column-example.hbs';
import flexLayoutResponsiveExampleRaw from '!raw!./flex-layout-responsive-example.hbs';
import flexAlignmentExampleRaw from '!raw!./flex-alignment-example.hbs';
import flexJustificationExampleRaw from '!raw!./flex-justification-example.hbs';

import FlexBasicExample from './flex-basic-example.hbs';
import FlexSpacingExample from './flex-spacing-example.hbs';
import FlexLayoutExample from './flex-layout-example.hbs';
import FlexLayoutColumnExample from './flex-layout-column-example.hbs';
import FlexLayoutResponsiveExample from './flex-layout-responsive-example.hbs';
import FlexAlignmentExample from './flex-alignment-example.hbs';
import FlexJustificationExample from './flex-justification-example.hbs';

import flexIntroDoc from '../docs/flex-intro.md';
import flexBasicExampleDoc from '../docs/flex-basic.md';
import flexSpacingExampleDoc from '../docs/flex-spacing.md';
import flexLayoutExampleDoc from '../docs/flex-layout.md';
import flexLayoutColumnExampleDoc from '../docs/flex-layout-column.md';
import flexLayoutResponsiveExampleDoc from '../docs/flex-layout-responsive.md';
import flexAlignmentExampleDoc from '../docs/flex-alignment.md';
import flexJustificationExampleDoc from '../docs/flex-justification.md';

import docs from '../docs/code.md';

export const Docs = docs;

export default () => {
  const flexBasicExample = FlexBasicExample();
  const flexSpacingExample = FlexSpacingExample();
  const flexLayoutExample = FlexLayoutExample();
  const flexLayoutColumnExample = FlexLayoutColumnExample();
  const flexLayoutResponsiveExample = FlexLayoutResponsiveExample();
  const flexAlignmentExample = FlexAlignmentExample();
  const flexJustificationExample = FlexJustificationExample();
  const headingText = 'Flex layout system';
  const variablesRoot = 'pf-l-flex';

  return (
    <Documentation
      docs={Docs}
      heading={headingText}
      variablesRoot={variablesRoot}
      className="flex-documentation is-layout-page"
    >
      <Example intro={flexIntroDoc} heading="Flex Basics" handlebars={flexBasicExampleRaw} docs={flexBasicExampleDoc}>
        {flexBasicExample}
      </Example>
      <Example heading="Flex Spacing" handlebars={flexSpacingExampleRaw} docs={flexSpacingExampleDoc}>
        {flexSpacingExample}
      </Example>
      <Example heading="Flex Layout Modifiers" handlebars={flexLayoutExampleRaw} docs={flexLayoutExampleDoc}>
        {flexLayoutExample}
      </Example>
      <Example
        heading="Column Layout Modifiers"
        handlebars={flexLayoutColumnExampleRaw}
        docs={flexLayoutColumnExampleDoc}
      >
        {flexLayoutColumnExample}
      </Example>
      <Example
        heading="Responsive Layout Modifiers"
        handlebars={flexLayoutResponsiveExampleRaw}
        docs={flexLayoutResponsiveExampleDoc}
      >
        {flexLayoutResponsiveExample}
      </Example>
      <Example heading="Flex Alignment" handlebars={flexAlignmentExampleRaw} docs={flexAlignmentExampleDoc}>
        {flexAlignmentExample}
      </Example>
      <Example heading="Flex Justification" handlebars={flexJustificationExampleRaw} docs={flexJustificationExampleDoc}>
        {flexJustificationExample}
      </Example>
    </Documentation>
  );
};
