import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

import PageLayoutDefaultNavExampleRaw from '!raw!./page-layout-default-nav-example.hbs';
import PageLayoutExpandableNavExampleRaw from '!raw!./page-layout-expandable-nav-example.hbs';
import PageLayoutHorizontalNavExampleRaw from '!raw!./page-layout-horizontal-nav-example.hbs';
import PageLayoutSimpleNavExampleRaw from '!raw!./page-layout-simple-nav-example.hbs';
import PageLayoutGroupedNavExampleRaw from '!raw!./page-layout-grouped-nav-example.hbs';

import PageLayoutDefaultNavExample from './page-layout-default-nav-example.hbs';
import PageLayoutExpandableNavExample from './page-layout-expandable-nav-example.hbs';
import PageLayoutHorizontalNavExample from './page-layout-horizontal-nav-example.hbs';
import PageLayoutSimpleNavExample from './page-layout-simple-nav-example.hbs';
import PageLayoutGroupedNavExample from './page-layout-grouped-nav-example.hbs';

import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

function classToggle() {
  const mq = window.matchMedia('(min-width: 768px)');
  const page = document.getElementById('page');

  if (mq.matches) {
    page.classList.remove('pf-m-expanded');
    page.classList.toggle('pf-m-collapsed');
  } else {
    page.classList.remove('pf-m-collapsed');
    page.classList.toggle('pf-m-expanded');
  }
}

function expandNav(e) {
  // const target = e.target;
  const parent = e.target.parentNode;
  const child = parent.children[1];

  if (e.target.classList.contains('pf-c-nav__list-link')) {
    if (parent.classList.contains('pf-m-expanded')) {
      parent.classList.remove('pf-m-expanded');
      setTimeout(() => {
        child.setAttribute('aria-expanded', 'false');
        child.setAttribute('hidden', '');
      }, 500);
    } else {
      child.removeAttribute('hidden');
      setTimeout(() => {
        parent.classList.add('pf-m-expanded');
        child.setAttribute('aria-expanded', 'true');
      }, 50);
    }
  }
}

if (document.getElementById('nav-toggle') !== null) {
  document.getElementById('nav-toggle').addEventListener('click', classToggle);
}

if (document.getElementById('primary-nav') !== null) {
  document.getElementById('primary-nav').addEventListener('click', expandNav);
}

// setTimeout(() => {
//   if (document.getElementById('nav-toggle') !== null) {
//     document.getElementById('nav-toggle').addEventListener('click', classToggle);
//   }

//   if (document.getElementById('primary-nav') !== null) {
//     document.getElementById('primary-nav').addEventListener('click', expandNav);
//   }
// }, 1000);

export default () => {
  const pageLayoutDefaultNavExample = PageLayoutDefaultNavExample();
  const pageLayoutExpandableNavExample = PageLayoutExpandableNavExample();
  const pageLayoutHorizontalNavExample = PageLayoutHorizontalNavExample();
  const pageLayoutSimpleNavExample = PageLayoutSimpleNavExample();
  const pageLayoutGroupedNavExample = PageLayoutGroupedNavExample();

  return (
    <Documentation docs={Docs}>
      <Example
        heading="Page Layout Default Nav Example"
        fullPageOnly="true"
        handlebars={PageLayoutDefaultNavExampleRaw}
      >
        {pageLayoutDefaultNavExample}
      </Example>
      <Example
        heading="Page Layout Expandable Nav Example"
        fullPageOnly="true"
        handlebars={PageLayoutExpandableNavExampleRaw}
      >
        {pageLayoutExpandableNavExample}
      </Example>
      <Example
        heading="Page Layout Horizontal Nav Example"
        fullPageOnly="true"
        handlebars={PageLayoutHorizontalNavExampleRaw}
      >
        {pageLayoutHorizontalNavExample}
      </Example>
      <Example heading="Page Layout Simple Nav Example" fullPageOnly="true" handlebars={PageLayoutSimpleNavExampleRaw}>
        {pageLayoutSimpleNavExample}
      </Example>
      <Example
        heading="Page Layout Grouped Nav Example"
        fullPageOnly="true"
        handlebars={PageLayoutGroupedNavExampleRaw}
      >
        {pageLayoutGroupedNavExample}
      </Example>
    </Documentation>
  );
};
