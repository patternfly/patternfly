import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs

export const LevelItem = ({children}) => {
  return (
    <div className="pf-l-level__item">
      {children}
    </div>
  )
}

export const LevelGroup = ({children}) => {
  return (
    <div className="pf-l-level__group">
      {children}
    </div>
  )
}

export default ({children, className = ''}) => {
  return (
    <div className={`pf-l-level ${className}`}>
      {children}
    </div>
  )
}
