import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import notificationBadgeSimpleExampleRaw from '!raw!./notification-badge-simple-example.hbs';
import notificationBadgeComplexExampleRaw from '!raw!./notification-badge-complex-example.hbs';
import NotificationbadgeSimpleExample from './notification-badge-simple-example.hbs';
import NotificationbadgeComplexExample from './notification-badge-complex-example.hbs';
import notificationBadgeComplexExampleDoc from '../docs/notification-badge-complex.md';
import docs from '../docs/code.md';

export const Docs = docs;

export default props => {
  const notificationBadgeSimpleExample = NotificationbadgeSimpleExample();
  const notificationBadgeComplexExample = NotificationbadgeComplexExample();
  const headingText = 'Notification Badge';
  const variablesRoot = 'pf-c-notification-badge';

  return (
    <Documentation data={props} docs={Docs} heading={headingText} variablesRoot={variablesRoot}>
      <Example heading="Notification Badge simple" handlebars={notificationBadgeSimpleExampleRaw} minHeight="20em">
        {notificationBadgeSimpleExample}
      </Example>
      <Example
        heading="Notification Badge complex"
        handlebars={notificationBadgeComplexExampleRaw}
        docs={notificationBadgeComplexExampleDoc}
      >
        {notificationBadgeComplexExample}
      </Example>
    </Documentation>
  );
};
