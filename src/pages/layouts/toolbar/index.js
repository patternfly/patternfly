import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import Toolbar, { ToolbarGroup, Docs } from '@layouts/Toolbar';
import Button from '@components/Button';
import Kebab from '@components/Kebab';

export default () => {
  return (
    <Documentation docs={Docs}>
      <Example heading="Toolbar Example">
        <Toolbar>
          <ToolbarGroup>
            <span>First child</span>
            <span>Second child</span>
          </ToolbarGroup>
          <ToolbarGroup>
            <Button className="pf-is-primary">Button</Button>
            <Button className="pf-is-tertiary">Button</Button>
          </ToolbarGroup>
          <ToolbarGroup>
              <Kebab><div>Example text in a kebab menu</div></Kebab>
          </ToolbarGroup>
        </Toolbar>
      </Example>
    </Documentation>
  );
};
