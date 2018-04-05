import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import Breadcrumb, {BreadcrumbItem, Docs} from '@components/Breadcrumb'

export default () => {
  return (
    <Documentation docs={Docs}>
      <Example heading="Breadcrumb">
        <Breadcrumb>
          <BreadcrumbItem path="/">home</BreadcrumbItem>
          <BreadcrumbItem path="/categories">categories</BreadcrumbItem>
          <BreadcrumbItem path="/categories/web">web</BreadcrumbItem>
          <BreadcrumbItem>css</BreadcrumbItem>
        </Breadcrumb>
      </Example>
    </Documentation>
  )
}
