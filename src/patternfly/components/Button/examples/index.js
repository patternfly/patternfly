import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import ButtonTypesTemplate from './buttonTypes.hbs'
import ButtonSizesTemplate from './buttonSizes.hbs'
import ButtonStatesTemplate from './buttonStates.hbs'
import docs from '../docs/code.md'
import '../styles.scss'

export const Docs = docs

export default () => {
  const buttonTypesTemplate = {__html: ButtonTypesTemplate()}
  const buttonSizesTemplate = {__html: ButtonSizesTemplate()}
  const buttonStatesTemplate = {__html: ButtonStatesTemplate()}
  return (
    <Documentation docs={Docs}>
      <Example heading="Button Types">
        <div dangerouslySetInnerHTML={buttonTypesTemplate}></div>
      </Example>
      <Example heading="Button Sizes">
        <div dangerouslySetInnerHTML={buttonSizesTemplate}></div>
      </Example>
      <Example heading="Button States">
        <div dangerouslySetInnerHTML={buttonStatesTemplate}></div>
      </Example>
    </Documentation>
  )
}