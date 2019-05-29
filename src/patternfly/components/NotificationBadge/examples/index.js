import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import notificationBadgeSimpleExampleRaw from '!raw!./notification-badge-simple-example.hbs';
import NotificationbadgeSimpleExample from './notification-badge-simple-example.hbs';
import docs from '../docs/code.md';

export const Docs = docs;

export default props => {
  const notificationBadgeSimpleExample = NotificationbadgeSimpleExample();
  const headingText = 'Notification badge';
  const variablesRoot = 'pf-c-notification-badge';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Notification badge" handlebars={notificationBadgeSimpleExampleRaw}>
        {notificationBadgeSimpleExample}
      </Example>
    </Documentation>
  );
};
