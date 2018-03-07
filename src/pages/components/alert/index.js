import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import Alert, { Docs } from '@components/Alert'

export default () => {
  return (
    <Documentation docs={Docs}>

      <Example heading="Success Alert">
        <Alert className="pf-is-success">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Alert>
      </Example>

      <Example heading="Danger Alert">
        <Alert className="pf-is-danger">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Alert>
      </Example>

      <Example heading="Warning Alert">
        <Alert className="pf-is-warning">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Alert>
      </Example>

      <Example heading="Info Alert">
        <Alert className="pf-is-info">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Alert>
      </Example>

    </Documentation>
  )
}
