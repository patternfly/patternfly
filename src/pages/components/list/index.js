import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import List, {ListItem, Docs} from '@components/List'

export default () => {
  const primary = 'Lorem ipsum';
  const secondary = 'secondary';

  return (
    <Documentation docs={Docs}>
      <Example heading="List with toggle">
        <List>
          <ListItem showToggle={true} isExpanded={true} primary={primary} secondary={secondary}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </ListItem>
          <ListItem showToggle={true} primary={primary} secondary={secondary}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </ListItem>
          <ListItem showToggle={true} primary={primary} secondary={secondary}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </ListItem>
        </List>
      </Example>

      <Example heading="List with toggle">
        <List>
          <ListItem showToggle={true} primary={primary} secondary={secondary}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </ListItem>
          <ListItem showToggle={true} isExpanded={true} primary={primary} secondary={secondary}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </ListItem>
          <ListItem showToggle={true} primary={primary} secondary={secondary}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </ListItem>
        </List>
      </Example>

      <Example heading="List with toggle">
        <List>
          <ListItem showToggle={true} primary={primary} secondary={secondary}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </ListItem>
          <ListItem showToggle={true} primary={primary} secondary={secondary}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </ListItem>
          <ListItem showToggle={true} isExpanded={true} primary={primary} secondary={secondary}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </ListItem>
        </List>
      </Example>

      <Example heading="List with toggle">
        <List>
          <ListItem showToggle={true} isExpanded={true} primary={primary} secondary={secondary}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </ListItem>
          <ListItem showToggle={true} isExpanded={true} primary={primary} secondary={secondary}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </ListItem>
          <ListItem showToggle={true} primary={primary} secondary={secondary}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </ListItem>
        </List>
      </Example>

      <Example heading="List without toggle">
        <List>
          <ListItem showToggle={false} primary={primary} secondary={secondary}/>
          <ListItem showToggle={false} primary={primary} secondary={secondary}/>
          <ListItem showToggle={false} primary={primary} secondary={secondary}/>
        </List>
      </Example>

      <Example heading="List without toggle">
        <List>
          <ListItem showToggle={false} primary={primary} secondary={secondary}/>
        </List>
      </Example>
    </Documentation>
  )
}
