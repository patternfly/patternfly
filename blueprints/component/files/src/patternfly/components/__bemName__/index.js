import React from 'react'
import styles from './styles'

export default ({children}) => {
  return (
    <div className="{{bemName}}">
      {children}
    </div>
  )
}
