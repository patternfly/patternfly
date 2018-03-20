import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs

export const MediaObjectLeft = ({children, className = ''}) => {
  return (
    <div className={`pf-c-media-object__left ${className}`}>
      {children}
    </div>
  )
}

export const MediaObjectRight = ({children, className = ''}) => {
  return (
    <div className={`pf-c-media-object__right ${className}`}>
      {children}
    </div>
  )
}

export const MediaObjectContent = ({children, className = ''}) => {
  return (
    <div className={`pf-c-media-object__content ${className}`}>
      {children}
    </div>
  )
}

export default ({children, className = ''}) => {
  return (
    <div className={`pf-c-media-object ${className}`}>
      {children}
    </div>
  )
}
