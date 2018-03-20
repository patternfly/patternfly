import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import Grid, {GridItem, Docs} from '@layouts/Grid'

export default () => {
  return (
    <Documentation docs={Docs} className="is-grid-layout-page">



      <Example heading="Grid">
        <Grid className="pf-has-gutters">
          <GridItem className="pf-is-12-col">12 col</GridItem>
          <GridItem className="pf-is-11-col">11 col</GridItem>
          <GridItem className="pf-is-1-col">1 col</GridItem>
          <GridItem className="pf-is-10-col">10 col</GridItem>
          <GridItem className="pf-is-2-col">2 col</GridItem>
          <GridItem className="pf-is-9-col">9 col</GridItem>
          <GridItem className="pf-is-3-col">3 col</GridItem>
          <GridItem className="pf-is-8-col">8 col</GridItem>
          <GridItem className="pf-is-4-col">4 col</GridItem>
          <GridItem className="pf-is-7-col">7 col</GridItem>
          <GridItem className="pf-is-5-col">5 col</GridItem>
          <GridItem className="pf-is-6-col">6 col</GridItem>
          <GridItem className="pf-is-6-col">6 col</GridItem>
        </Grid>
      </Example>

      <Example heading="Offsets">
        <Grid className="pf-has-gutters">
          <GridItem className="pf-is-12-col">12 col</GridItem>
          <GridItem className="pf-is-11-col pf-is-offset-2-col">11 col, starting at 2</GridItem>
          <GridItem className="pf-is-10-col pf-is-offset-3-col">10 col, starting at 3</GridItem>
          <GridItem className="pf-is-9-col pf-is-offset-4-col">9 col, starting at 4</GridItem>
          <GridItem className="pf-is-8-col pf-is-offset-5-col">8 col, starting at 5</GridItem>
          <GridItem className="pf-is-7-col pf-is-offset-6-col">7 col, starting at 6</GridItem>
          <GridItem className="pf-is-6-col pf-is-offset-7-col">6 col, starting at 7</GridItem>
          <GridItem className="pf-is-5-col pf-is-offset-8-col">5 col, starting at 8</GridItem>
          <GridItem className="pf-is-4-col pf-is-offset-9-col">4 col, starting at 9</GridItem>
          <GridItem className="pf-is-3-col pf-is-offset-10-col">3 col, starting at 10</GridItem>
          <GridItem className="pf-is-2-col pf-is-offset-11-col">10 col, starting at 11</GridItem>
          <GridItem className="pf-is-1-col pf-is-offset-12-col">11 col, starting at 12</GridItem>
        </Grid>
      </Example>

      <Example heading="Row Span">
        <Grid className="pf-has-gutters">
          <GridItem className="pf-is-8-col">8 col</GridItem>
          <GridItem className="pf-is-4-col pf-is-2-row">4 col, 2 row</GridItem>
          <GridItem className="pf-is-2-col pf-is-3-row">2 col, 3 row</GridItem>
          <GridItem className="pf-is-2-col">2 col</GridItem>
          <GridItem className="pf-is-4-col">4 col</GridItem>
          <GridItem className="pf-is-2-col">2 col</GridItem>
          <GridItem className="pf-is-2-col">2 col</GridItem>
          <GridItem className="pf-is-2-col">2 col</GridItem>
          <GridItem className="pf-is-4-col">4 col</GridItem>
          <GridItem className="pf-is-2-col">2 col</GridItem>
          <GridItem className="pf-is-4-col">4 col</GridItem>
          <GridItem className="pf-is-4-col">4 col</GridItem>
        </Grid>
      </Example>

      <Example heading="Nested Grid">
        <Grid className="pf-has-gutters">
          <GridItem className="pf-is-6-col">
            <p>6 Col</p>
            <Grid className="pf-has-gutters">
              <GridItem className="pf-is-8-col">8 col</GridItem>
              <GridItem className="pf-is-4-col">4 col</GridItem>
            </Grid>
          </GridItem>
          <GridItem className="pf-is-6-col">
            <p>6 Col</p>
          </GridItem>
        </Grid>
      </Example>

      <Example heading="Responsive Grid">
        <Grid className="pf-has-gutters">
          <GridItem className="pf-is-10-col pf-is-12-col-on-xs pf-is-9-col-on-sm pf-is-6-col-on-md pf-is-3-col-on-lg pf-is-1-col-on-xl">column</GridItem>
          <GridItem className="pf-is-12-col">column</GridItem>
          <GridItem className="pf-is-1-col">1</GridItem>
          <GridItem className="pf-is-1-col">2</GridItem>
          <GridItem className="pf-is-1-col">3</GridItem>
          <GridItem className="pf-is-1-col">4</GridItem>
          <GridItem className="pf-is-1-col">5</GridItem>
          <GridItem className="pf-is-1-col">6</GridItem>
          <GridItem className="pf-is-1-col">7</GridItem>
          <GridItem className="pf-is-1-col">8</GridItem>
          <GridItem className="pf-is-1-col">9</GridItem>
          <GridItem className="pf-is-1-col">10</GridItem>
          <GridItem className="pf-is-1-col">11</GridItem>
          <GridItem className="pf-is-1-col">12</GridItem>
        </Grid>
      </Example>
    </Documentation>
  )
}
