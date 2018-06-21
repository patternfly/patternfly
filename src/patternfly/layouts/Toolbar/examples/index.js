import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import ToolbarBasicExampleRaw from '!raw!./toolbar-basic-example.hbs';
import ToolbarGroupAlignmentExampleRaw from '!raw!./toolbar-group-alignment-example.hbs';
import ToolbarItemAlignmentExampleRaw from '!raw!./toolbar-item-alignment-example.hbs';
import ToolbarSectionExampleRaw from '!raw!./toolbar-section-example.hbs';
import docs from '../docs/code.md';
import ToolbarBasicExample from './toolbar-basic-example.hbs';
import ToolbarGroupAlignmentExample from './toolbar-group-alignment-example.hbs';
import ToolbarItemAlignmentExample from './toolbar-item-alignment-example.hbs';
import ToolbarSectionExample from './toolbar-section-example.hbs';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const toolbarBasicExample = ToolbarBasicExample();
  const toolbarGroupAlignmentExample = ToolbarGroupAlignmentExample();
  const toolbarItemAlignmentExample = ToolbarItemAlignmentExample();
  const toolbarSectionExample = ToolbarSectionExample();

  return (
    <Documentation docs={Docs}>
      <Example
        heading="Toolbar Basic Example - layout will respond naturally, no additional fitting is applied"
        handlebars={ToolbarBasicExampleRaw}
      >
        {toolbarBasicExample}
      </Example>
      <Example
        heading="Toolbar Group Alignment Example (no group item wrapping)"
        handlebars={ToolbarGroupAlignmentExampleRaw}
      >
        {toolbarGroupAlignmentExample}
      </Example>
      <Example
        heading="Toolbar Item Alignment Example (responsive modifiers included)"
        handlebars={ToolbarItemAlignmentExampleRaw}
      >
        {toolbarItemAlignmentExample}
      </Example>
      <Example
        heading="Toolbar Section Example (responsive modifiers included)"
        handlebars={ToolbarSectionExampleRaw}
      >
        {toolbarSectionExample}
      </Example>
    </Documentation>
  );
};
