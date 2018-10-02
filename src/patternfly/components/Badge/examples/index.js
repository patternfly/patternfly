import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import BadgeReadExampleRaw from '!raw!./badge-read-example.hbs';
import BadgeUnreadExampleRaw from '!raw!./badge-unread-example.hbs';
import BadgeReadExample from './badge-read-example.hbs';
import BadgeUnreadExample from './badge-unread-example.hbs';
import docs from '../docs/code.md';
import '../badge.scss';

export const Docs = docs;

export default () => {
  const badgeReadExample = BadgeReadExample();
  const badgeUnreadExample = BadgeUnreadExample();
  const headingText = 'Badge';

  return (
    <Documentation docs={Docs} heading={headingText}>
      <Example heading="Read Badge" handlebars={BadgeReadExampleRaw}>
        {badgeReadExample}
      </Example>
      <Example heading="Unread Badge" handlebars={BadgeUnreadExampleRaw}>
        {badgeUnreadExample}
      </Example>
    </Documentation>
  );
};
