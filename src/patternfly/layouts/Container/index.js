import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs

export const ContainerItem = ({children}) => {
  return (
    <div className="pf-l-container__item">
      {children}
    </div>
  )
}

export default ({children, className = ''}) => {
  return (
    <div className={`pf-l-container ${className}`}>
      {children}
    </div>
  )
}
