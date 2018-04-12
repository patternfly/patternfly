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
  const buttonTypesTemplate = ButtonTypesTemplate()
  const buttonSizesTemplate = ButtonSizesTemplate()
  const buttonStatesTemplate = ButtonStatesTemplate()
  return (
    <Documentation docs={Docs}>
      <Example heading="Button Types">
        {buttonTypesTemplate}
      </Example>
      <Example heading="Button Sizes">
        {buttonSizesTemplate}
      </Example>
      <Example heading="Button States">
        {buttonStatesTemplate}
      </Example>
    </Documentation>
  )
}
