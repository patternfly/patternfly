import React from 'react'
import docs from './docs.md'
import './styles.scss'
import Accordion, {AccordionItem} from '@components/Accordion'
import Drawer from '@components/Drawer'
import MediaObject, {
  MediaObjectLeft,
  MediaObjectRight,
  MediaObjectContent
} from '@components/MediaObject'

export const Docs = docs

export default ({children, className = ''}) => {
  return (
    <div className={`pf-p-notification-drawer ${className}`}>
      <Drawer title="Notification Drawer">
        <Accordion>
          <AccordionItem title="Notification 1" className="pf-is-expanded">
            <MediaObject>
              <MediaObjectLeft>
                <i className="fas fa-info-circle"></i>
              </MediaObjectLeft>
              <MediaObjectContent>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </MediaObjectContent>
              <MediaObjectRight>
                <i className="fas fa-ellipsis-v"></i>
              </MediaObjectRight>
            </MediaObject>
          </AccordionItem>
          <AccordionItem title="Notification 2">
            <MediaObject>
              <MediaObjectLeft>
                <i className="fas fa-info-circle"></i>
              </MediaObjectLeft>
              <MediaObjectContent>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </MediaObjectContent>
              <MediaObjectRight>
                <i className="fas fa-ellipsis-v"></i>
              </MediaObjectRight>
            </MediaObject>
          </AccordionItem>
          <AccordionItem title="Notification 3">
            <MediaObject>
              <MediaObjectLeft>
                <i className="fas fa-info-circle"></i>
              </MediaObjectLeft>
              <MediaObjectContent>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </MediaObjectContent>
              <MediaObjectRight>
                <i className="fas fa-ellipsis-v"></i>
              </MediaObjectRight>
            </MediaObject>
          </AccordionItem>
        </Accordion>
      </Drawer>
    </div>
  )
}
