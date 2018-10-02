import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import srOnlyExampleRaw from '!raw!./accessibility-sr-only-example.hbs';
import visibleExampleRaw from '!raw!./accessibility-visible-example.hbs';
import hiddenExampleRaw from '!raw!./accessibility-hidden-example.hbs';
import SrOnlyExample from './accessibility-sr-only-example.hbs';
import VisibleExample from './accessibility-visible-example.hbs';
import HiddenExample from './accessibility-hidden-example.hbs';
import docs from '../docs/code.md';
import '../accessibility.scss';

export const Docs = docs;

export default () => {
  const srOnlyExample = SrOnlyExample();
  const visibleExample = VisibleExample();
  const hiddenExample = HiddenExample();
  const headingText = 'Accessibility';

  return (
    <Documentation docs={Docs} heading={headingText} className="is-utility-page">
      <Example heading="Screen reader only" handlebars={srOnlyExampleRaw}>
        {srOnlyExample}
      </Example>
      <Example heading="Visible" handlebars={visibleExampleRaw}>
        {visibleExample}
      </Example>
      <Example heading="Hidden" handlebars={hiddenExampleRaw}>
        {hiddenExample}
      </Example>
    </Documentation>
  );
};
