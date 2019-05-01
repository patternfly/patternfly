import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

// Raw files
import navSimpleListExampleRaw from '!raw!./nav-simple-list-example.hbs';
import navListGroupedExampleRaw from '!raw!./nav-list-grouped-example.hbs';
import navExampleRaw from '!raw!./nav-example.hbs';
import navExpandableExampleRaw from '!raw!./nav-expandable-example.hbs';
import navExpandableSubnavTitlesExampleRaw from '!raw!./nav-expandable-subnav-titles-example.hbs';
import navHorizontalListExampleRaw from '!raw!./nav-horizontal-list-example.hbs';
import navHorizontalListOverflowExampleRaw from '!raw!./nav-horizontal-list-overflow-example.hbs';
import navListTertiaryExampleRaw from '!raw!./nav-tertiary-list-example.hbs';
import navListTertiaryOverflowExampleRaw from '!raw!./nav-tertiary-list-overflow-example.hbs';
import navMixedExampleRaw from '!raw!./nav-mixed-example.hbs';

// Example files
import NavSimpleListExample from './nav-simple-list-example.hbs';
import NavListGroupedExample from './nav-list-grouped-example.hbs';
import NavExample from './nav-example.hbs';
import NavExpandableExample from './nav-expandable-example.hbs';
import NavExpandableSubnavTitlesExample from './nav-expandable-subnav-titles-example.hbs';
import NavHorizontalListExample from './nav-horizontal-list-example.hbs';
import NavHorizontalListOverflowExample from './nav-horizontal-list-overflow-example.hbs';
import NavListTertiaryExample from './nav-tertiary-list-example.hbs';
import NavListTertiaryOverflowExample from './nav-tertiary-list-overflow-example.hbs';
import NavMixedExample from './nav-mixed-example.hbs';

import docs from '../docs/code.md';

export const Docs = docs;

export default (props) => {
  const navSimpleListExample = NavSimpleListExample();
  const navListGroupedExample = NavListGroupedExample();
  const navExample = NavExample();
  const navExpandableExample = NavExpandableExample();
  const navExpandableSubnavTitlesExample = NavExpandableSubnavTitlesExample();
  const navHorizontalListExample = NavHorizontalListExample();
  const navHorizontalListOverflowExample = NavHorizontalListOverflowExample();
  const navListTertiaryExample = NavListTertiaryExample();
  const navListTertiaryOverflowExample = NavListTertiaryOverflowExample();
  const navMixedExample = NavMixedExample();
  const headingText = 'Navigation';
  const variablesRoot = 'pf-c-nav';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Simple nav" handlebars={navSimpleListExampleRaw}>
        {navSimpleListExample}
      </Example>
      <Example heading="Grouped nav" handlebars={navListGroupedExampleRaw}>
        {navListGroupedExample}
      </Example>
      <Example heading="Default nav" handlebars={navExampleRaw}>
        {navExample}
      </Example>
      <Example heading="Expandable nav" handlebars={navExpandableExampleRaw}>
        {navExpandableExample}
      </Example>
      <Example heading="Expandable nav (w/subnav titles)" handlebars={navExpandableSubnavTitlesExampleRaw}>
        {navExpandableSubnavTitlesExample}
      </Example>
      <Example heading="Nav mixed" handlebars={navMixedExampleRaw}>
        {navMixedExample}
      </Example>
      <Example
        heading="Horizontal nav (only in masthead)"
        handlebars={navHorizontalListExampleRaw}
        className="is-dark-preview pf-t-dark"
      >
        {navHorizontalListExample}
      </Example>
      <Example
        heading="Horizontal nav overflow (only in masthead)"
        handlebars={navHorizontalListOverflowExampleRaw}
        className="is-dark-preview pf-t-dark"
      >
        {navHorizontalListOverflowExample}
      </Example>
      <Example heading="Tertiary nav" handlebars={navListTertiaryExampleRaw}>
        {navListTertiaryExample}
      </Example>
      <Example heading="Tertiary nav overflow" handlebars={navListTertiaryOverflowExampleRaw}>
        {navListTertiaryOverflowExample}
      </Example>
    </Documentation>
  );
};
