import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import AppLauncherCollapsedExampleRaw from '!raw!./app-launcher-collapsed-example.hbs';
import AppLauncherExpandedExampleRaw from '!raw!./app-launcher-expanded-example.hbs';
import AppLauncherSectionsIconsExampleRaw from '!raw!./app-launcher-sections-icons-example.hbs';
import ApplauncherCollapsedExample from './app-launcher-collapsed-example.hbs';
import ApplauncherExpandedExample from './app-launcher-expanded-example.hbs';
import ApplauncherSectionsIconsExample from './app-launcher-sections-icons-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default props => {
  const AppLauncherCollapsedExample = ApplauncherCollapsedExample();
  const AppLauncherExpandedExample = ApplauncherExpandedExample();
  const AppLauncherSectionsIconsExample = ApplauncherSectionsIconsExample();
  const headingText = 'App launcher';
  const variablesRoot = 'pf-c-app-launcher';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="App launcher collapsed" handlebars={AppLauncherCollapsedExampleRaw}>
        {AppLauncherCollapsedExample}
      </Example>
      <Example heading="App launcher expanded" handlebars={AppLauncherExpandedExampleRaw} minHeight="20em">
        {AppLauncherExpandedExample}
      </Example>
      <Example
        heading="App launcher w/ sections and icons"
        handlebars={AppLauncherSectionsIconsExampleRaw}
        minHeight="20em"
      >
        {AppLauncherSectionsIconsExample}
      </Example>
    </Documentation>
  );
};
