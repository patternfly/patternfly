import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import avatarSimpleExampleRaw from '!raw!./avatar-simple-example.hbs';
import AvatarSimpleExample from './avatar-simple-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default () => {
  const avatarSimpleExample = AvatarSimpleExample();
  const headingText = 'Avatar';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading="Avatar Simple" handlebars={avatarSimpleExampleRaw}>
        {avatarSimpleExample}
      </Example>
    </Documentation>
  );
};
