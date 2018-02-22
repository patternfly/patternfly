import React from 'react'
import Example from '@siteComponents/Example'
import {{moduleName}} from '@patterns/{{moduleName}}'

export default () => {
  return (
    <div>
      <Example heading="Example">
        <{{moduleName}}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </{{moduleName}}>
      </Example>
    </div>
  )
}
