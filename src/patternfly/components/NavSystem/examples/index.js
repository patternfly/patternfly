import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

// Raw files
import navListSimpleExampleRaw from '!raw!./nav-list-simple-example.hbs';
import navListGroupedExampleRaw from '!raw!./nav-list-grouped-example.hbs';
import navExampleRaw from '!raw!./nav-example.hbs';
import navExpandableExampleRaw from '!raw!./nav-expandable-example.hbs';
import navExpandableSubnavTitlesExampleRaw from '!raw!./nav-expandable-subnav-titles-example.hbs';
import navListHorizontalExampleRaw from '!raw!./nav-list-horizontal-example.hbs';
import navListTertiaryExampleRaw from '!raw!./nav-list-tertiary-example.hbs';
import navMixedExampleRaw from '!raw!./nav-mixed-example.hbs';

// Example files
import NavListSimpleExample from './nav-list-simple-example.hbs';
import NavListGroupedExample from './nav-list-grouped-example.hbs';
import NavExample from './nav-example.hbs';
import NavExpandableExample from './nav-expandable-example.hbs';
import NavExpandableSubnavTitlesExample from './nav-expandable-subnav-titles-example.hbs';
import NavListHorizontalExample from './nav-list-horizontal-example.hbs';
import NavListTertiaryExample from './nav-list-tertiary-example.hbs';
import NavMixedExample from './nav-mixed-example.hbs';

import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const navListSimpleExample = NavListSimpleExample();
  const navListGroupedExample = NavListGroupedExample();
  const navExample = NavExample();
  const navExpandableExample = NavExpandableExample();
  const navExpandableSubnavTitlesExample = NavExpandableSubnavTitlesExample();
  const navListHorizontalExample = NavListHorizontalExample();
  const navListTertiaryExample = NavListTertiaryExample();
  const navMixedExample = NavMixedExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Nav List Simple" handlebars={navListSimpleExampleRaw}>
        {navListSimpleExample}
      </Example>
      <Example heading="Nav List Grouped" handlebars={navListGroupedExampleRaw}>
        {navListGroupedExample}
      </Example>
      <Example heading="Nav Default" handlebars={navExampleRaw}>
        {navExample}
      </Example>
      <Example heading="Nav Expandable" handlebars={navExpandableExampleRaw}>
        {navExpandableExample}
      </Example>
      <Example heading="Nav Expandable (w/subnav titles)" handlebars={navExpandableSubnavTitlesExampleRaw}>
        {navExpandableSubnavTitlesExample}
      </Example>
      <Example heading="Nav Mixed" handlebars={navMixedExampleRaw}>
        {navMixedExample}
      </Example>
      <Example
        heading="Nav List Horizontal (only in masthead)"
        handlebars={navListHorizontalExampleRaw}
        className="is-dark-preview"
      >
        {navListHorizontalExample}
      </Example>
      <Example heading="Nav List Tertiary" handlebars={navListTertiaryExampleRaw}>
        {navListTertiaryExample}
      </Example>
    </Documentation>
  );
};
