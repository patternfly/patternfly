import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import Card, {Docs, CardHeader, CardBody, CardFooter} from '@components/Card'

export default () => {
  return (
    <Documentation docs={Docs}>
      <Example heading="Card">
        <Card>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quae odio sed veniam. Fugit perspiciatis quaerat laborum corrupti quo repudiandae, fugiat placeat sapiente blanditiis totam incidunt eum, quis excepturi voluptas?</p>
        </Card>
      </Example>
      <Example heading="Card with Sections">
        <Card>
          <CardHeader>
            <h3>Header Content</h3>
          </CardHeader>
          <CardBody>
            <p>Body Content</p>
          </CardBody>
          <CardFooter>
            <p>Footer Content</p>
          </CardFooter>
        </Card>
      </Example>
    </Documentation>
  )
}
