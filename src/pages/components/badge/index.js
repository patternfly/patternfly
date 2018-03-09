import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import Badge, {Docs} from '@components/Badge'

export default () => {
  return (
    <Documentation docs={Docs}>
      <Example heading="Badge">
        <Badge>example</Badge>
      </Example>
    </Documentation>
  )
}
