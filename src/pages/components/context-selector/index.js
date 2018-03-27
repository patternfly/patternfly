import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import ContextSelector, {Docs} from '@components/ContextSelector'

export default () => {
  return (
    <Documentation docs={Docs}>
      <Example heading="ContextSelector Example">
        <ContextSelector>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </ContextSelector>
      </Example>
    </Documentation>
  )
}
