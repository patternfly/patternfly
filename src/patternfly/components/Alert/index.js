import React from 'react'
import './styles.scss'

export default ({children, className = ''}) => {
  return (
    <div className={`pf-c-alert ${className}`} role='alert'>
      {children}
    </div>
  )
}
