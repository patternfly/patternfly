import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import Kebab, {Docs} from '@components/Kebab'

export default () => {
  return (
    <Documentation docs={Docs}>
      <Example heading="Kebab Example">
        <Kebab>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Kebab>
      </Example>
    </Documentation>
  )
}
