import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import docs from '../docs/code.md';
import ReadBadge from './read-badge.hbs';
import UnreadBadge from './unread-badge.hbs';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const readBadge = ReadBadge();
  const unreadBadge = UnreadBadge();

  return (
    <Documentation docs={Docs}>
      <Example heading="Read Badge">{readBadge}</Example>
      <Example heading="Unread Badge">{unreadBadge}</Example>
    </Documentation>
  );
};
