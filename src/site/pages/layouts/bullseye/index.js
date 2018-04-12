import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import Bullseye, {BullseyeItem, Docs} from '@layouts/Bullseye'

export default () => {
  return (
    <Documentation docs={Docs} className="is-layout-page">
      <Example heading="Bullseye Example">
        <Bullseye>
          <BullseyeItem></BullseyeItem>
        </Bullseye>
      </Example>
    </Documentation>
  )
}
