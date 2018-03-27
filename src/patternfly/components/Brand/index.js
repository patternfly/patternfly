import React from 'react'
import docs from './docs.md'
import './styles.scss'

export const Docs = docs

var __html = require('./component.html');
var template = { __html: __html };

export default () => {
    return (
        <div dangerouslySetInnerHTML={template} ></div>
    )
}
