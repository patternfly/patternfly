import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import AppLauncherCollapsedExampleRaw from '!raw!./app-launcher-collapsed-example.hbs';
import AppLauncherDisabledExampleRaw from '!raw!./app-launcher-disabled-example.hbs';
import AppLauncherExpandedExampleRaw from '!raw!./app-launcher-expanded-example.hbs';
import AppLauncherAlignRightExampleRaw from '!raw!./app-launcher-align-right-example.hbs';
import AppLauncherTopExampleRaw from '!raw!./app-launcher-top-example.hbs';
import AppLauncherSectionsIconsExampleRaw from '!raw!./app-launcher-sections-icons-example.hbs';
import ApplauncherCollapsedExample from './app-launcher-collapsed-example.hbs';
import ApplauncherDisabledExample from './app-launcher-disabled-example.hbs';
import ApplauncherExpandedExample from './app-launcher-expanded-example.hbs';
import ApplauncherAlignRightExample from './app-launcher-align-right-example.hbs';
import ApplauncherTopExample from './app-launcher-top-example.hbs';
import ApplauncherSectionsIconsExample from './app-launcher-sections-icons-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default props => {
  const AppLauncherCollapsedExample = ApplauncherCollapsedExample();
  const AppLauncherDisabledExample = ApplauncherDisabledExample();
  const AppLauncherExpandedExample = ApplauncherExpandedExample();
  const AppLauncherAlignRightExample = ApplauncherAlignRightExample();
  const AppLauncherTopExample = ApplauncherTopExample();
  const AppLauncherSectionsIconsExample = ApplauncherSectionsIconsExample();
  const headingText = 'App launcher';
  const variablesRoot = 'pf-c-app-launcher';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="App launcher collapsed" handlebars={AppLauncherCollapsedExampleRaw}>
        {AppLauncherCollapsedExample}
      </Example>
      <Example heading="App launcher disabled" handlebars={AppLauncherDisabledExampleRaw}>
        {AppLauncherDisabledExample}
      </Example>
      <Example heading="App launcher expanded" handlebars={AppLauncherExpandedExampleRaw} minHeight="15em">
        {AppLauncherExpandedExample}
      </Example>
      <Example
        className="is-align-right"
        heading="App launcher align right"
        handlebars={AppLauncherAlignRightExampleRaw}
        minHeight="15em"
      >
        {AppLauncherAlignRightExample}
      </Example>
      <Example className="is-expanded-top" heading="App launcher top" handlebars={AppLauncherTopExampleRaw}>
        {AppLauncherTopExample}
      </Example>
      <Example
        heading="App launcher w/ sections and icons"
        handlebars={AppLauncherSectionsIconsExampleRaw}
        minHeight="30em"
      >
        {AppLauncherSectionsIconsExample}
      </Example>
    </Documentation>
  );
};
