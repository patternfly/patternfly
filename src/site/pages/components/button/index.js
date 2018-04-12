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
        <Button className="pf-is-danger">Danger</Button>
      </Example>
      <Example heading="Button Sizes">
        <Button className="pf-is-primary pf-is-small">Small</Button>
        <Button className="pf-is-primary pf-is-large">Large</Button>
      </Example>
      <Example heading="Button States">
        <Button className="pf-is-primary pf-has-focus">Focused</Button>
        <Button className="pf-is-primary pf-is-active" ariaPressed="true">Active</Button>
        <Button className="pf-is-primary pf-is-disabled" tabIndex="-1" aria-disabled="true">Disabled</Button>
      </Example>
    </Documentation>
  )
}
