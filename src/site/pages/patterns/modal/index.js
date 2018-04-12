import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import Modal, {Docs} from '@patterns/Modal'

export default () => {
  return (
    <Documentation docs={Docs}>
      <Example heading="Example">
        <Modal>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Modal>
      </Example>
    </Documentation>
  )
}
