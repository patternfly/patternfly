import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import Dialog, { Docs } from '@components/Dialog'

export default () => {
  return (
    <Documentation docs={Docs}>
      <Example heading="Example">
        <Dialog>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Dialog>
      </Example>
    </Documentation>
  )
}
