import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import ToolbarBasicExampleRaw from '!raw!./toolbar-basic-example.hbs';
import ToolbarGroupAlignmentExampleRaw from '!raw!./toolbar-group-alignment-example.hbs';
import ToolbarBlockExampleRaw from '!raw!./toolbar-block-example.hbs';
import ToolbarResponsiveExampleRaw from '!raw!./toolbar-responsive-example.hbs';
import ToolbarNestedExampleRaw from '!raw!./toolbar-nested-example.hbs';
import docs from '../docs/code.md';
import ToolbarBasicExample from './toolbar-basic-example.hbs';
import ToolbarGroupAlignmentExample from './toolbar-group-alignment-example.hbs';
import ToolbarBlockExample from './toolbar-block-example.hbs';
import ToolbarResponsiveExample from './toolbar-responsive-example.hbs';
import ToolbarNestedExample from './toolbar-nested-example.hbs';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const toolbarBasicExample = ToolbarBasicExample();
  const toolbarGroupAlignmentExample = ToolbarGroupAlignmentExample();
  const toolbarBlockExample = ToolbarBlockExample();
  const toolbarResponsiveExample = ToolbarResponsiveExample();
  const toolbarNestedExample = ToolbarNestedExample();

  return (
    <Documentation docs={Docs}>
      <Example
        heading="Toolbar Basic Example"
        handlebars={ToolbarBasicExampleRaw}
      >
        {toolbarBasicExample}
      </Example>
      <Example
        heading="Toolbar Group Alignment Example"
        handlebars={ToolbarGroupAlignmentExampleRaw}
      >
        {toolbarGroupAlignmentExample}
      </Example>
      <Example
        heading="Toolbar Block Example"
        handlebars={ToolbarBlockExampleRaw}
      >
        {toolbarBlockExample}
      </Example>
      <Example
        heading="Toolbar Responsive Example"
        handlebars={ToolbarResponsiveExampleRaw}
      >
        {toolbarResponsiveExample}
      </Example>
      <Example
        heading="Toolbar Nested Example"
        handlebars={ToolbarNestedExampleRaw}
      >
        {toolbarNestedExample}
      </Example>
      <Example
        heading="Toolbar Block Example"
        handlebars={ToolbarBlockExampleRaw}
      >
        {toolbarBlockExample}
      </Example>
    </Documentation>
  );
};
