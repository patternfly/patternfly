import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import appLauncherSimpleExampleRaw from '!raw!./app-launcher-simple-example.hbs';
import appLauncherComplexExampleRaw from '!raw!./app-launcher-complex-example.hbs';
import ApplauncherSimpleExample from './app-launcher-simple-example.hbs';
import ApplauncherComplexExample from './app-launcher-complex-example.hbs';
import appLauncherComplexExampleDoc from '../docs/app-launcher-complex.md';
import docs from '../docs/code.md';
import '../app-launcher.scss';

export const Docs = docs;

export default () => {
  const appLauncherSimpleExample = ApplauncherSimpleExample();
  const appLauncherComplexExample = ApplauncherComplexExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Applauncher Simple" handlebars={appLauncherSimpleExampleRaw} minHeight="20em">
        {appLauncherSimpleExample}
      </Example>
      <Example
        heading="Applauncher Complex"
        handlebars={appLauncherComplexExampleRaw}
        docs={appLauncherComplexExampleDoc}
      >
        {appLauncherComplexExample}
      </Example>
    </Documentation>
  );
};
