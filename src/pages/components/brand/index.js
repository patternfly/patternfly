import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import Brand, {Docs} from '@components/Brand'

export default () => {
  return (
    <Documentation docs={Docs}>
      <Example heading="Brand Example">
        <Brand>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Brand>
      </Example>
    </Documentation>
  )
}
