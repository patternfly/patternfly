import React from 'react'
import Dialog from '@components/Dialog'
import Accordion from '@components/Accordion'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs

export default ({children, className = ''}) => {
  return (
    <div className={`pf-p-notification-drawer ${className}`}>
      <Dialog heading="Notification Drawer">
        <Accordion heading="First Notification" className="pf-is-expanded">
          <p>test</p>
        </Accordion>
        <Accordion heading="Second Notification">
          <p>test</p>
        </Accordion>
        <Accordion heading="Third Notification">
          <p>test</p>
        </Accordion>
      </Dialog>
    </div>
  )
}
