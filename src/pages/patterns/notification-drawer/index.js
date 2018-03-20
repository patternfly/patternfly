import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import NotificationDrawer, {Docs} from '@patterns/NotificationDrawer'

export default () => {
  return (
    <Documentation docs={Docs} className="is-notification-drawer-documentation">
      <Example heading="Notification Drawer">
        <NotificationDrawer />
      </Example>
    </Documentation>
  )
}
