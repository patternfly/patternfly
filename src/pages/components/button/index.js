import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import Button, { Docs } from '@components/Button'

export default () => {
  return (
    <Documentation docs={Docs}>
      <Example heading="Button Types">
        <Button>Default</Button>
        <Button className="pf-is-primary">Primary</Button>
        <Button className="pf-is-secondary">Secondary</Button>
        <Button className="pf-is-tertiary">Tertiary</Button>
        <Button className="pf-is-destructive">Destructive</Button>
      </Example>
      <Example heading="Button Sizes">
        <Button className="pf-is-small">Small</Button>
        <Button className="pf-is-large">Large</Button>
      </Example>
      <Example heading="Button States">
        <Button className="pf-is-focus">Focused</Button>
        <Button className="pf-is-disabled">Disabled</Button>
      </Example>
    </Documentation>
  )
}
