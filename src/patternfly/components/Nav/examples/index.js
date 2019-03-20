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

export default () => {
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
    <Documentation docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Simple Nav" handlebars={navSimpleListExampleRaw}>
        {navSimpleListExample}
      </Example>
      <Example heading="Grouped Nav" handlebars={navListGroupedExampleRaw}>
        {navListGroupedExample}
      </Example>
      <Example heading="Default Nav" handlebars={navExampleRaw}>
        {navExample}
      </Example>
      <Example heading="Expandable Nav" handlebars={navExpandableExampleRaw}>
        {navExpandableExample}
      </Example>
      <Example heading="Expandable Nav (w/subnav titles)" handlebars={navExpandableSubnavTitlesExampleRaw}>
        {navExpandableSubnavTitlesExample}
      </Example>
      <Example heading="Nav Mixed" handlebars={navMixedExampleRaw}>
        {navMixedExample}
      </Example>
      <Example
        heading="Horizontal Nav (only in masthead)"
        handlebars={navHorizontalListExampleRaw}
        className="is-dark-preview"
      >
        {navHorizontalListExample}
      </Example>
      <Example
        heading="Horizontal Nav Overflow (only in masthead)"
        handlebars={navHorizontalListOverflowExampleRaw}
        className="is-dark-preview"
      >
        {navHorizontalListOverflowExample}
      </Example>
      <Example heading="Tertiary Nav" handlebars={navListTertiaryExampleRaw}>
        {navListTertiaryExample}
      </Example>
      <Example heading="Tertiary Nav Overflow" handlebars={navListTertiaryOverflowExampleRaw}>
        {navListTertiaryOverflowExample}
      </Example>
    </Documentation>
  );
};
