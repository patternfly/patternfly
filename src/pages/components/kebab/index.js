import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import Kebab, {Docs} from '@components/Kebab'

export default () => {
  return (
    <Documentation docs={Docs}>
      <Example heading="Kebab Example">
        <Kebab className="is-open-bottom-left">
          <p>Lorem ipsum dolor sit amet.</p>
        </Kebab>
          <Kebab kebabId={"secondDemo"}>
              <p>Lorem ipsum dolor sit amet.</p>
          </Kebab>
      </Example>
    </Documentation>
  )
}
