import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs

export const CardHeader = ({children}) => {
  return (
    <div className="pf-c-card__header">
      {children}
    </div>
  )
}
export const CardBody = ({children}) => {
  return (
    <div className="pf-c-card__body">
      {children}
    </div>
  )
}
export const CardFooter = ({children}) => {
  return (
    <div className="pf-c-card__footer">
      {children}
    </div>
  )
}
export default ({children, className = ''}) => {
  return (
    <div className={`pf-c-card ${className}`}>
      {children}
    </div>
  )
}
