import React from 'react'
import './styles.scss'
import Level, {LevelGroup, LevelItem} from '@layouts/Level'
import Split, {SplitPrimary, SplitSecondary} from '@layouts/Split'
import Stack, {StackPrimary, StackSecondary} from '@layouts/Stack'

export default () => {
  return (
    <div className="pf-d-layout-combo-1">
      <Stack>
        <StackSecondary>
          <p>Secondary Stack Content</p>
        </StackSecondary>
        <StackPrimary>
          <p>Primary Stack Content</p>
          <Split>
            <SplitSecondary>
              <p>Secondary Split Content</p>
            </SplitSecondary>
            <SplitPrimary>
              <p>Primary Split Content</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati in rerum commodi, dolorem ratione quaerat eos accusantium modi nihil vel fugiat est atque quo voluptatem adipisci fuga laborum, perferendis molestias!</p>
            </SplitPrimary>
            <SplitSecondary>
              <p>Secondary Split Content</p>
            </SplitSecondary>
          </Split>
          <Split>
            <SplitSecondary>
              <p>Secondary Split Content</p>
            </SplitSecondary>
            <SplitPrimary>
              <p>Primary Split Content</p>
            </SplitPrimary>
          </Split>
          <Split>
            <SplitPrimary>
              <p>Primary Split Content</p>
            </SplitPrimary>
            <SplitSecondary>
              <p>Secondary Split Content</p>
            </SplitSecondary>
          </Split>
          <Level>
            <LevelItem>
              <p>Level Item Content</p>
            </LevelItem>
            <LevelItem>
              <p>Level Item Content</p>
            </LevelItem>
          </Level>
          <Level>
            <LevelItem>
              <p>Level Item Content</p>
            </LevelItem>
            <LevelItem>
              <p>Level Item Content</p>
            </LevelItem>
            <LevelItem>
              <p>Level Item Content</p>
            </LevelItem>
          </Level>
          <Level>
            <LevelGroup>
              <LevelItem>
                <p>Grouped Level Item Content</p>
              </LevelItem>
            </LevelGroup>
            <LevelGroup>
              <LevelItem>
                <p>Grouped Level Item Content</p>
              </LevelItem>
              <LevelItem>
                <p>Grouped Level Item Content</p>
              </LevelItem>
            </LevelGroup>
          </Level>
        </StackPrimary>
        <StackSecondary>
          <p>Secondary Stack Content</p>
        </StackSecondary>
      </Stack>
    </div>
  )
}
