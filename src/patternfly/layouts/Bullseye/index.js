import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs

export const BullseyeItem = ({children}) => {
  return (
    <div className="pf-l-bullseye__item">
      {children}
    </div>
  )
}

export default ({children, className = ''}) => {
  return (
    <div className={`pf-l-bullseye ${className}`}>
      {children}
    </div>
  )
}
