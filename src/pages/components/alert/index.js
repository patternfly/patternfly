import React from 'react'
import Example from '@siteComponents/Example'
import Alert from '@components/Alert'

export default () => {
  return (
    <div>
      <Example heading="Default Alert">
        <Alert>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ducimus praesentium debitis optio. Fugit adipisci quam, velit praesentium. Voluptas fuga ipsum soluta debitis facilis! Necessitatibus, molestias? Pariatur incidunt ex accusamus.</p>
        </Alert>
      </Example>

      <Example heading="Primary Alert">
        <Alert className="pf-is-primary">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ducimus praesentium debitis optio. Fugit adipisci quam, velit praesentium. Voluptas fuga ipsum soluta debitis facilis! Necessitatibus, molestias? Pariatur incidunt ex accusamus.</p>
        </Alert>
      </Example>

      <Example heading="Secondary Alert">
        <Alert className="pf-is-secondary">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ducimus praesentium debitis optio. Fugit adipisci quam, velit praesentium. Voluptas fuga ipsum soluta debitis facilis! Necessitatibus, molestias? Pariatur incidunt ex accusamus.</p>
        </Alert>
      </Example>

      <Example heading="Success Alert">
        <Alert className="pf-is-success">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ducimus praesentium debitis optio. Fugit adipisci quam, velit praesentium. Voluptas fuga ipsum soluta debitis facilis! Necessitatibus, molestias? Pariatur incidunt ex accusamus.</p>
        </Alert>
      </Example>

      <Example heading="Danger Alert">
        <Alert className="pf-is-danger">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ducimus praesentium debitis optio. Fugit adipisci quam, velit praesentium. Voluptas fuga ipsum soluta debitis facilis! Necessitatibus, molestias? Pariatur incidunt ex accusamus.</p>
        </Alert>
      </Example>

      <Example heading="Warning Alert">
        <Alert className="pf-is-warning">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ducimus praesentium debitis optio. Fugit adipisci quam, velit praesentium. Voluptas fuga ipsum soluta debitis facilis! Necessitatibus, molestias? Pariatur incidunt ex accusamus.</p>
        </Alert>
      </Example>

      <Example heading="Info Alert">
        <Alert className="pf-is-info">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ducimus praesentium debitis optio. Fugit adipisci quam, velit praesentium. Voluptas fuga ipsum soluta debitis facilis! Necessitatibus, molestias? Pariatur incidunt ex accusamus.</p>
        </Alert>
      </Example>

      <Example heading="Light Alert">
        <Alert className="pf-is-light">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ducimus praesentium debitis optio. Fugit adipisci quam, velit praesentium. Voluptas fuga ipsum soluta debitis facilis! Necessitatibus, molestias? Pariatur incidunt ex accusamus.</p>
        </Alert>
      </Example>

      <Example heading="Dark Alert">
        <Alert className="pf-is-dark">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ducimus praesentium debitis optio. Fugit adipisci quam, velit praesentium. Voluptas fuga ipsum soluta debitis facilis! Necessitatibus, molestias? Pariatur incidunt ex accusamus.</p>
        </Alert>
      </Example>

    </div>
  )
}
