import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import Overlay, { Docs } from '@components/Overlay'

export default () => {
  return (
    <Documentation docs={Docs}>
      <Example heading="Example">
        <Overlay>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Overlay>
      </Example>
    </Documentation>
  )
}
