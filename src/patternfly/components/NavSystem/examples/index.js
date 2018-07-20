import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import navSystemSimpleExampleRaw from '!raw!./nav-system-simple-example.hbs';
import navSystemComplexExampleRaw from '!raw!./nav-system-complex-example.hbs';
import NavsystemSimpleExample from './nav-system-simple-example.hbs';
import NavsystemComplexExample from './nav-system-complex-example.hbs';
import navSystemComplexExampleDoc from '../docs/nav-system-complex.md';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const navSystemSimpleExample = NavsystemSimpleExample();
  const navSystemComplexExample = NavsystemComplexExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Navsystem Simple" handlebars={navSystemSimpleExampleRaw}>
        {navSystemSimpleExample}
      </Example>
      <Example heading="Navsystem Complex" handlebars={navSystemComplexExampleRaw} docs={navSystemComplexExampleDoc}>
        {navSystemComplexExample}
      </Example>
    </Documentation>
  );
};
