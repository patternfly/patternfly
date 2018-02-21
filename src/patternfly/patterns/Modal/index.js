import React from 'react'
import Overlay from '@components/Overlay'
import Dialog from '@components/Dialog'
import styles from './styles.scss'

export default ({children, className = '', title}) => {
  return (
    <div className={`pf-p-modal ${className}`}>
      <Overlay>
        <Dialog title={title}>
          {children}
        </Dialog>
      </Overlay>
    </div>
  )
}
