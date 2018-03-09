import React from 'react'
import docs from './docs.md'
import './styles.scss'
import Accordion, {AccordionItem} from '@components/Accordion'
import Drawer from '@components/Drawer'
import Split from '@layouts/Split'

export const Docs = docs

export default ({children, className = ''}) => {
  return (
    <div className={`pf-p-notification-drawer ${className}`}>
      <Drawer title="Notification Drawer">
        <Accordion>
          <AccordionItem title="Notification 1" className="pf-is-expanded">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quod id delectus odio assumenda dolorem sunt, distinctio expedita commodi aliquam eaque ex minima cumque, nulla explicabo, repellendus autem, facilis iste.</p>
          </AccordionItem>
          <AccordionItem title="Notification 2"></AccordionItem>
          <AccordionItem title="Notification 3"></AccordionItem>
        </Accordion>
      </Drawer>
    </div>
  )
}
