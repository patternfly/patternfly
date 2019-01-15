import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import AppLauncherCollapsedExampleRaw from '!raw!./app-launcher-collapsed-example.hbs';
import AppLauncherExpandedExampleRaw from '!raw!./app-launcher-expanded-example.hbs';
import ApplauncherCollapsedExample from './app-launcher-collapsed-example.hbs';
import ApplauncherExpandedExample from './app-launcher-expanded-example.hbs';
import docs from '../docs/code.md';
import '../app-launcher.scss';

export const Docs = docs;

export default () => {
  const AppLauncherCollapsedExample = ApplauncherCollapsedExample();
  const AppLauncherExpandedExample = ApplauncherExpandedExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Applauncher collapsed" handlebars={AppLauncherCollapsedExampleRaw}>
        {AppLauncherCollapsedExample}
      </Example>
      <Example heading="Applauncher expanded" handlebars={AppLauncherExpandedExampleRaw} minHeight="20em">
        {AppLauncherExpandedExample}
      </Example>
    </Documentation>
  );
};
