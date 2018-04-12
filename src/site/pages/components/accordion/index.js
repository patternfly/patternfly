import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import Accordion, {Docs} from '@components/Accordion'

export default () => {
  return (
    <Documentation docs={Docs}>
      <Example heading="Accordion - Expanded">
        <Accordion className="pf-is-expanded" heading="Example" subtitle="A subtitle for the example">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias delectus at laboriosam esse quis quaerat, possimus libero totam. Aut quasi ex nesciunt cumque eveniet dolorum saepe vitae ullam neque esse.</p>
        </Accordion>
      </Example>
      <Example heading="Accordion - Collapsed">
        <Accordion heading="Example" subtitle="A subtitle for the example">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias delectus at laboriosam esse quis quaerat, possimus libero totam. Aut quasi ex nesciunt cumque eveniet dolorum saepe vitae ullam neque esse.</p>
        </Accordion>
      </Example>
    </Documentation>
  )
}
