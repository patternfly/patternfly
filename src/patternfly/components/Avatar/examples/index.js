import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import avatarSimpleExampleRaw from '!raw!./avatar-simple-example.hbs';
import AvatarSimpleExample from './avatar-simple-example.hbs';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const avatarSimpleExample = AvatarSimpleExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Avatar Simple" handlebars={avatarSimpleExampleRaw} minHeight="20em">
        {avatarSimpleExample}
      </Example>
    </Documentation>
  );
};
