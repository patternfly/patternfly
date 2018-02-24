import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs

export default ({children, className = '', onClick}) => {
  function handleClick (e) {
    e.preventDefault()
    if (onClick) {
      onClick()
    }
  }
  return (
    <div className={`pf-c-overlay ${className}`} onClick={handleClick}>
      {children}
    </div>
  )
}
