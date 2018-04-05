import React from 'react'
import './styles.scss'
import Bullseye, {BullseyeItem} from '@layouts/Bullseye'

export default () => {
  return (
    <div className="pf-d-layout-combo-4">
      <Bullseye>
        <BullseyeItem>
          <p>Bullseye Item Content</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </BullseyeItem>
      </Bullseye>
    </div>
  )
}
