import React from 'react'
import './styles.scss'
import Stack, {StackPrimary, StackSecondary} from '@layouts/Stack'

export default () => {
  return (
    <div className="pf-d-layout-combo-2">
      <Stack>
        <StackSecondary>
          <p>Secondary Stack Content</p>
        </StackSecondary>
        <StackPrimary>
          <p>Primary Stack Content</p>
        </StackPrimary>
        <StackSecondary>
          <p>Secondary Stack Content</p>
        </StackSecondary>
      </Stack>
    </div>
  )
}
