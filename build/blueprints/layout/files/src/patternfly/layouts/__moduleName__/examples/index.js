import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import docs from '../docs/code.md'
import Example1 from './example1.hbs';
import Example2 from './example2.hbs';

export const Docs = docs

export default () => {
  const example1 = {__html: Example1()}
  const example2 = {__html: Example2()}
  return (
    <Documentation docs={Docs}>
      <Example heading="{{moduleName}} Example 1">
        <div dangerouslySetInnerHTML={example1}></div>
      </Example>
      <Example heading="{{moduleName}} Example 2">
        <div dangerouslySetInnerHTML={example2}></div>
      </Example>
    </Documentation>
  )
}
