import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import ToolbarGroup, {Docs} from '@layouts/ToolbarGroup'

export default () => {
  return (
    <Documentation docs={Docs}>
      <Example heading="ToolbarGroup Example">
        <ToolbarGroup>
            <span>First child</span>
            <span>Second child</span>
        </ToolbarGroup>
      </Example>
    </Documentation>
  )
}
