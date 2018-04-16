import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import LevelTemplateTwo from './level-template-two.hbs'
import LevelTemplateThree from './level-template-three.hbs'
import LevelTemplateGroup from './level-template-group.hbs'
import LevelTemplateVertical from './level-template-vertical.hbs'
import docs from '../docs/code.md'
import '../styles.scss'

export const Docs = docs

export default () => {
  const levelTemplateTwo = LevelTemplateTwo()
  const levelTemplateThree = LevelTemplateThree()
  const levelTemplateGroup = LevelTemplateGroup()
  const levelTemplateVertical = LevelTemplateVertical()

  return (
    <Documentation docs={Docs} className="is-layout-page">
      <Example heading="Level Example" description="(with 2 children)">
        {levelTemplateTwo}
      </Example>
      <Example heading="Level Example" description="(with 3 children)">
        {levelTemplateThree}
      </Example>
      <Example heading="Level Example" description="(with groups)">
        {levelTemplateGroup}
      </Example>
      <Example heading="Level Example" description="(with vertical children)">
        {levelTemplateVertical}
      </Example>
    </Documentation>
  )
}