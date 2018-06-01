import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import docs from '../docs/code.md';
import BadgeReadExample from './badge-read-example.hbs';
import BadgeUnreadExample from './badge-unread-example.hbs';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const badgeReadExample = BadgeReadExample();
  const badgeUnreadExample = BadgeUnreadExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Read Badge">{badgeReadExample}</Example>
      <Example heading="Unread Badge">{badgeUnreadExample}</Example>
    </Documentation>
  );
};
