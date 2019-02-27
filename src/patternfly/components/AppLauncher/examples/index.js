import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import AppLauncherCollapsedExampleRaw from '!raw!./app-launcher-collapsed-example.hbs';
import AppLauncherExpandedExampleRaw from '!raw!./app-launcher-expanded-example.hbs';
import ApplauncherCollapsedExample from './app-launcher-collapsed-example.hbs';
import ApplauncherExpandedExample from './app-launcher-expanded-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default () => {
  const AppLauncherCollapsedExample = ApplauncherCollapsedExample();
  const AppLauncherExpandedExample = ApplauncherExpandedExample();
  const headingText = 'App Launcher';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading="Applauncher collapsed" handlebars={AppLauncherCollapsedExampleRaw}>
        {AppLauncherCollapsedExample}
      </Example>
      <Example heading="Applauncher expanded" handlebars={AppLauncherExpandedExampleRaw} minHeight="20em">
        {AppLauncherExpandedExample}
      </Example>
    </Documentation>
  );
};
