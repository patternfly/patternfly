import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import {{moduleName}}, {Docs} from '@layouts/{{moduleName}}'

export default () => {
  return (
    <Documentation docs={Docs}>
      <Example heading="{{moduleName}} Example">
        <{{moduleName}}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </{{moduleName}}>
      </Example>
    </Documentation>
  )
}
