import React from 'react'
import './styles.scss'
import Template from './template.hbs'

export default () => {
  const template = {__html: Template()}
  return (
    <div className="pf-d-dashboard" dangerouslySetInnerHTML={template}>

    </div>
  )
}
