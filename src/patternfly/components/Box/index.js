import React from 'react'
import styles from './styles.scss'

export default ({children, className = ''}) => {
  return (
    <div className={`pf-c-box ${className}`}>
      {children}
    </div>
  )
}
