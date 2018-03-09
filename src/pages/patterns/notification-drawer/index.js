import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import NotificationDrawer, {Docs} from '@patterns/NotificationDrawer'

export default () => {
  return (
    <Documentation docs={Docs}>
      <Example heading="Notification Drawer">
        <NotificationDrawer>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </NotificationDrawer>
      </Example>
    </Documentation>
  )
}
