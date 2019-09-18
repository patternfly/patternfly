---
title: Nav
section: components
cssPrefix: pf-c-nav
---

```js
import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

// Raw files
import navSimpleListExampleRaw from '!!raw-loader!./nav-simple-list-example.hbs';
import navListGroupedExampleRaw from '!!raw-loader!./nav-list-grouped-example.hbs';
import navExampleRaw from '!!raw-loader!./nav-example.hbs';
import navExpandableExampleRaw from '!!raw-loader!./nav-expandable-example.hbs';
import navExpandableSubnavTitlesExampleRaw from '!!raw-loader!./nav-expandable-subnav-titles-example.hbs';
import navHorizontalListExampleRaw from '!!raw-loader!./nav-horizontal-list-example.hbs';
import navHorizontalListOverflowExampleRaw from '!!raw-loader!./nav-horizontal-list-overflow-example.hbs';
import navListTertiaryExampleRaw from '!!raw-loader!./nav-tertiary-list-example.hbs';
import navListTertiaryOverflowExampleRaw from '!!raw-loader!./nav-tertiary-list-overflow-example.hbs';
import navMixedExampleRaw from '!!raw-loader!./nav-mixed-example.hbs';

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

export default props => {
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
  const headingText = 'Nav';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Simple nav" handlebars={navSimpleListExampleRaw} className="is-dark-nav-preview pf-t-dark">
        {navSimpleListExample}
      </Example>
      <Example heading="Grouped nav" handlebars={navListGroupedExampleRaw} className="is-dark-nav-preview pf-t-dark">
        {navListGroupedExample}
      </Example>
      <Example heading="Default nav" handlebars={navExampleRaw} className="is-dark-nav-preview pf-t-dark">
        {navExample}
      </Example>
      <Example heading="Expandable nav" handlebars={navExpandableExampleRaw} className="is-dark-nav-preview pf-t-dark">
        {navExpandableExample}
      </Example>
      <Example
        heading="Expandable nav (w/subnav titles)"
        handlebars={navExpandableSubnavTitlesExampleRaw}
        className="is-dark-nav-preview pf-t-dark"
      >
        {navExpandableSubnavTitlesExample}
      </Example>
      <Example heading="Nav mixed" handlebars={navMixedExampleRaw} className="is-dark-nav-preview pf-t-dark">
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
```

## Overview

The navigation system relies on several different sub-components:

* `.pf-c-nav__list` - default navigation list. It is the basis for both default and expandable, vertical navigation.
* `.pf-c-nav__simple-list` - nav list simple is a shareable component this is used with grouped navigation and as secondary navigation.
* `.pf-c-nav__horizontal-list` - nav list horizontal is a shareable component that can be used within the page header, as primary navigation, or as tertiary navigation, when expandable, vertical navigation is implemented.
* `.pf-c-nav__tertiary-list` - nav list tertiary is a component that can be used within `<main>`, as third level navigation (tertiary navigation), when expandable, vertical navigation is implemented.

## Accessibility

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-label="[landmark description]"` | `.pf-c-nav` |  Describes `<nav>` landmark. |
| `aria-labelledby="[id value of link describing subnav]"` | `.pf-c-nav__subnav` |  Gives the subnav `<section>` landmark an accessible name by referring to the element that provides the subnav `<section>` landmark title. |
| `aria-expanded="false"` | `.pf-c-nav__link` |  Indicates that subnav section is hidden. |
| `aria-expanded="true"` | `.pf-c-nav__link` |  Indicates that subnav section is visible. |
| `hidden` | `.pf-c-nav__subnav` |  Indicates that the subnav section is hidden so that it isn't visible in the UI and isn't accessed by assistive technologies. |
| `aria-current="page"` | `.pf-c-nav__link` |  Indicates the current page link. Can only occur once on page. |
| `role="separator"` | `.pf-c-nav__separator` |  Indicates that the divider separates and distinguishes sections of links in the nav. |


## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-c-nav` | `<nav>` | Initiates a primary nav element. |
| `.pf-c-nav__list` | `<ul>` | Initiates default nav list. |
| `.pf-c-nav__simple-list` | `<ul>` | Initiates simple nav list. |
| `.pf-c-nav__item` | `<li>` | Initiates default nav list item. |
| `.pf-c-nav__separator` | `<li>` | Initiates list separator. |
| `.pf-c-nav__scroll-button` | `<button>` | Intitiates a nav scroll button. **Required for horizontal navs** |
| `.pf-c-nav__link` | `<a>` | Initiates default nav list link. |
| `.pf-c-nav__section` | `<section>` | Initiates a nav section element. |
| `.pf-c-nav__section-title` | `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>` | Initiates a nav section title. |
| `.pf-c-nav__toggle` | `<span>` | Initiates a chevron indicating expandability of a `pf-c-nav__list-link`. |
| `.pf-c-nav__toggle-icon` | `<i>` | Initiates a nav toggle icon. |
| `.pf-m-dark` | `.pf-c-nav` | Modifies the nav for the dark variation. **Note: only for use with vertical navs, and requires `.pf-m-dark` on the page component's sidebar element (`.pf-c-page__sidebar`)**. |
| `.pf-m-expandable` | `.pf-c-nav__item` | Modifies for the expandable state. |
| `.pf-m-expanded` | `.pf-c-nav__item` | Modifies for the expanded state. |
| `.pf-m-hover` | `.pf-c-nav__link` | Modifies to display the link as hovered. |
| `.pf-m-focus` | `.pf-c-nav__link` | Modifies to display the link as focussed. |
| `.pf-m-current` | `.pf-c-nav__link` | Modifies for the current state. |
| `.pf-m-active` | `.pf-c-nav__link` | Modifies to display the link as active. |
| `.pf-m-disabled` | `.pf-c-nav__link` | Modifies to display the link as disabled. |
| `.pf-m-start` | `.pf-c-nav` | Modifiers the nav to show the overflow at the start. |
| `.pf-m-end` | `.pf-c-nav` | Modifiers the nav to show the overflow at the end. |
