import React from 'react'
import styles from './styles.scss'

export default ({children, className = ''}) => {
  return (
    <button className={`pf-c-button ${className}`}>
      {children}
    </button>
  )
}
