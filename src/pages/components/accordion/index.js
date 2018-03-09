import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import Accordion, {AccordionItem, Docs} from '@components/Accordion'

export default () => {
  return (
    <Documentation docs={Docs}>
      <Example heading="Accordion - Expanded">
        <Accordion>
          <AccordionItem className="pf-is-expanded" title="Example" subtitle="A subtitle for the example">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias delectus at laboriosam esse quis quaerat, possimus libero totam. Aut quasi ex nesciunt cumque eveniet dolorum saepe vitae ullam neque esse.</p>
          </AccordionItem>
        </Accordion>
      </Example>
      <Example heading="AccordionItem - Collapsed">
        <Accordion>
          <AccordionItem title="Example" subtitle="A subtitle for the example">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias delectus at laboriosam esse quis quaerat, possimus libero totam. Aut quasi ex nesciunt cumque eveniet dolorum saepe vitae ullam neque esse.</p>
          </AccordionItem>
        </Accordion>
      </Example>
    </Documentation>
  )
}
