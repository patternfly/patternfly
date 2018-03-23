import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import Container, {ContainerItem, Docs} from '@layouts/Container'

export default () => {
  return (
    <Documentation docs={Docs} className="is-layout-page">
      <Example heading="Container">
        <Container>
          <ContainerItem>content</ContainerItem>
          <ContainerItem>content</ContainerItem>
        </Container>
      </Example>
      <Example heading="Container With Full-Width">
        <Container className="pf-is-full-width">
          <ContainerItem>content</ContainerItem>
          <ContainerItem>content</ContainerItem>
        </Container>
      </Example>
    </Documentation>
  )
}
