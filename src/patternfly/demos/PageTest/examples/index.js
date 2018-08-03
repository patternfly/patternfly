import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import PagetestExample1Raw from '!raw!./page-test-example1.hbs';
import PagetestExample2Raw from '!raw!./page-test-example2.hbs';
import PagetestExample3Raw from '!raw!./page-test-example3.hbs';
import PagetestExample1 from './page-test-example1.hbs';
import PagetestExample2 from './page-test-example2.hbs';
import PagetestExample3 from './page-test-example3.hbs';
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

setTimeout(() => {
  if (document.getElementById('nav-toggle') !== null) {
    document.getElementById('nav-toggle').addEventListener('click', classToggle);
  }

  if (document.getElementById('primary-nav') !== null) {
    document.getElementById('primary-nav').addEventListener('click', expandNav);
  }
}, 3000);

export default () => {
  const pageTestExample1 = PagetestExample1();
  const pageTestExample2 = PagetestExample2();
  const pageTestExample3 = PagetestExample3();

  return (
    <Documentation docs={Docs}>
      <Example heading="Pagetest Example 1" fullPageOnly="true" handlebars={PagetestExample1Raw}>
        {pageTestExample1}
      </Example>
      <Example heading="Pagetest Example 2" fullPageOnly="true" handlebars={PagetestExample2Raw}>
        {pageTestExample2}
      </Example>
      <Example heading="Pagetest Example 3" fullPageOnly="true" handlebars={PagetestExample3Raw}>
        {pageTestExample3}
      </Example>
    </Documentation>
  );
};
