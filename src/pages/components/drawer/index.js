import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import Drawer, {Docs} from '@components/Drawer'

export default () => {
  return (
    <Documentation docs={Docs} className="is-drawer-documentation">
      <Example heading="Drawer">
        <Drawer title="Example Drawer Title">
        </Drawer>
      </Example>
    </Documentation>
  )
}
