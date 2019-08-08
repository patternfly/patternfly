import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

import overflowMenuSimpleExampleRaw from '!raw!./overflow-menu-simple-example.hbs';
import overflowMenuGroupTypesExampleRaw from '!raw!./overflow-menu-group-types-example.hbs';
import overflowMenuSimpleAdditionalOptionsExampleRaw from '!raw!./overflow-menu-simple-additional-options-example.hbs';
import overflowMenuPersistentExampleRaw from '!raw!./overflow-menu-persistent-example.hbs';

import OverflowMenuSimpleExample from './overflow-menu-simple-example.hbs';
import OverflowMenuGroupTypesExample from './overflow-menu-group-types-example.hbs';
import OverflowMenuSimpleAdditionalOptionsExample from './overflow-menu-simple-additional-options-example.hbs';
import OverflowMenuPersistentExample from './overflow-menu-persistent-example.hbs';

import overflowMenuSimpleExampleDoc from '../docs/overflow-menu-simple.md';
import overflowMenuGroupTypesExampleDoc from '../docs/overflow-menu-group-types.md';
import overflowMenuSimpleAdditionalOptionsExampleDoc from '../docs/overflow-menu-simple-additional-options.md';
import overflowMenuPersistentExampleDoc from '../docs/overflow-menu-persistent.md';
import overflowMenuIntroDoc from '../docs/overflow-menu-intro.md';

// import overflowMenuSpacersExampleRaw from '!raw!./overflow-menu-spacers-example.hbs';
// import OverflowMenuSpacersExample from './overflow-menu-spacers-example.hbs';
// import overflowMenuSpacersExampleDoc from '../docs/overflow-menu-spacers.md';

import docs from '../docs/code.md';

export const Docs = docs;

export default props => {
  const overflowMenuSimpleExample = OverflowMenuSimpleExample();
  const overflowMenuGroupTypesExample = OverflowMenuGroupTypesExample();
  const overflowMenuSimpleAdditionalOptionsExample = OverflowMenuSimpleAdditionalOptionsExample();
  const overflowMenuPersistentExample = OverflowMenuPersistentExample();
  const headingText = 'Overflow Menu';
  const variablesRoot = 'pf-c-overflow-menu';

  // const overflowMenuSpacersExample = OverflowMenuSpacersExample();

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example
        intro={overflowMenuIntroDoc}
        heading="Overflow menu simple (responsive)"
        handlebars={overflowMenuSimpleExampleRaw}
        docs={overflowMenuSimpleExampleDoc}
        className="is-layout-page"
      >
        {overflowMenuSimpleExample}
      </Example>
      {/* <Example
        heading="Overflow menu spacers"
        handlebars={overflowMenuSpacersExampleRaw}
        docs={overflowMenuSpacersExampleDoc}
      >
        {overflowMenuSpacersExample}
      </Example> */}
      <Example
        heading="Overflow menu group types"
        handlebars={overflowMenuGroupTypesExampleRaw}
        docs={overflowMenuGroupTypesExampleDoc}
        className="is-layout-page"
      >
        {overflowMenuGroupTypesExample}
      </Example>
      <Example
        heading="Overflow menu, multiple groups - additional options"
        handlebars={overflowMenuSimpleAdditionalOptionsExampleRaw}
        docs={overflowMenuSimpleAdditionalOptionsExampleDoc}
      >
        {overflowMenuSimpleAdditionalOptionsExample}
      </Example>
      <Example
        heading="Overflow menu persistent- additional options"
        handlebars={overflowMenuPersistentExampleRaw}
        minHeight=""
        docs={overflowMenuPersistentExampleDoc}
        className="is-layout-page"
      >
        {overflowMenuPersistentExample}
      </Example>
    </Documentation>
  );
};
