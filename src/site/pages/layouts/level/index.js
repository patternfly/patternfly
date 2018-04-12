import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import Level, {LevelItem, LevelGroup, Docs} from '@layouts/Level'

export default () => {
  return (
    <Documentation docs={Docs} className="is-layout-page">
      <Example heading="Level Example" description="(with 2 children)">
        <Level>
          <LevelItem>content</LevelItem>
          <LevelItem>content</LevelItem>
        </Level>
      </Example>
      <Example heading="Level Example" description="(with 3 children)">
        <Level>
          <LevelItem>content</LevelItem>
          <LevelItem>content</LevelItem>
          <LevelItem>content</LevelItem>
        </Level>
      </Example>
      <Example heading="Level Example" description="(with groups)">
        <Level>
          <LevelGroup>
            <LevelItem>content</LevelItem>
            <LevelItem>content</LevelItem>
          </LevelGroup>
          <LevelGroup>
            <LevelItem>content</LevelItem>
            <LevelItem>content</LevelItem>
          </LevelGroup>
        </Level>
      </Example>
      <Example heading="Level Example" description="(with vertical children)">
        <Level className="pf-is-vertical">
          <LevelItem>content</LevelItem>
          <LevelItem>content</LevelItem>
        </Level>
      </Example>
    </Documentation>
  )
}
