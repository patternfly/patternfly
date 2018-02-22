import React from 'react'
import Example from '@siteComponents/Example'
import Overlay from '@components/Overlay'

export default () => {
  return (
    <div>
      <Example heading="Example">
        <Overlay>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Overlay>
      </Example>
    </div>
  )
}
