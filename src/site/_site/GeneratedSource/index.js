import React from 'react'
import Prism from 'prismjs'
import PrismCode from 'react-prism'
import pretty from 'pretty'
import CodepenButton from '@siteComponents/CodepenButton'

import './styles.scss'
import 'prismjs/themes/prism-coy.css'

export default ({children}) => {
  const output = children.replace(/ "/g, '"')
  const indentedOutput = pretty(output, { ocd: true })

  return (
    <div className="GeneratedSource">
      <div className="GeneratedSource__header">
      <h4 className="GeneratedSource_title">HTML</h4>
        <CodepenButton html={indentedOutput} />
      </div>
      <div className="GeneratedSource__body">
        <pre className="GeneratedSource__pre">
          <PrismCode className="language-html">
            {indentedOutput}
          </PrismCode>
        </pre>
      </div>
    </div>
  )
}
