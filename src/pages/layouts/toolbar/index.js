import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import Toolbar, {Docs} from '@layouts/Toolbar'
import ToolbarGroup from "../../../patternfly/layouts/ToolbarGroup";

export default () => {
  return (
    <Documentation docs={Docs}>
      <Example heading="Toolbar Example">
        <Toolbar>
            <ToolbarGroup>
                <span>First child</span>
                <span>Second child</span>
            </ToolbarGroup>
            <ToolbarGroup>
                <span>First child</span>
                <span>Second child</span>
            </ToolbarGroup>
            <ToolbarGroup>
                <span>First child</span>
                <span>Second child</span>
            </ToolbarGroup>
        </Toolbar>
      </Example>
    </Documentation>
  )
}
