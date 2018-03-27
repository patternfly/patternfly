import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import Demo, {Docs} from '@components/Demo'

export default () => {
  return (
    <Documentation docs={Docs}>
      <Example heading="Demo Example">
        <Demo>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Demo>
      </Example>
    </Documentation>
  )
}
