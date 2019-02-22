import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';

import PopoverTopExampleRaw from '!raw!./popover-top-example.hbs';
import PopoverRightExampleRaw from '!raw!./popover-right-example.hbs';
import PopoverBottomExampleRaw from '!raw!./popover-bottom-example.hbs';
import PopoverLeftExampleRaw from '!raw!./popover-left-example.hbs';
import PopoverNoHeaderExampleRaw from '!raw!./popover-no-header-example.hbs';
import PopoverSmallExampleRaw from '!raw!./popover-small-example.hbs';
import PopoverLargeExampleRaw from '!raw!./popover-large-example.hbs';

import PopoverTopExample from './popover-top-example.hbs';
import PopoverRightExample from './popover-right-example.hbs';
import PopoverBottomExample from './popover-bottom-example.hbs';
import PopoverLeftExample from './popover-left-example.hbs';
import PopoverNoHeaderExample from './popover-no-header-example.hbs';
import PopoverSmallExample from './popover-small-example.hbs';
import PopoverLargeExample from './popover-large-example.hbs';

import docs from '../docs/code.md';

export const Docs = docs;

export default () => {
  const popoverTopExample = PopoverTopExample();
  const popoverRightExample = PopoverRightExample();
  const popoverBottomExample = PopoverBottomExample();
  const popoverLeftExample = PopoverLeftExample();
  const popoverNoHeaderExample = PopoverNoHeaderExample();
  const popoverSmallExample = PopoverSmallExample();
  const popoverLargeExample = PopoverLargeExample();
  const headingText = 'Popover';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading="Popover Top" handlebars={PopoverTopExampleRaw}>
        {popoverTopExample}
      </Example>
      <Example heading="Popover Right" handlebars={PopoverRightExampleRaw}>
        {popoverRightExample}
      </Example>
      <Example heading="Popover Bottom" handlebars={PopoverBottomExampleRaw}>
        {popoverBottomExample}
      </Example>
      <Example heading="Popover Left" handlebars={PopoverLeftExampleRaw}>
        {popoverLeftExample}
      </Example>
      <Example heading="Popover No Header/Footer" handlebars={PopoverNoHeaderExampleRaw}>
        {popoverNoHeaderExample}
      </Example>
      <Example heading="Popover Small" handlebars={PopoverSmallExampleRaw}>
        {popoverSmallExample}
      </Example>
      <Example heading="Popover Large" handlebars={PopoverLargeExampleRaw}>
        {popoverLargeExample}
      </Example>
    </Documentation>
  );
};
