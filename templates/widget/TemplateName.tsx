/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/widgets/TemplateName/TemplateName.tsx

Created with;
$ npx generate-react-cli component TemplateName --type=widget

*/

import React, { useEffect } from 'react'
import './TemplateName.scss'
// import { useRecoilValue } from 'recoil'
import Grid from '@material-ui/core/Grid'

const TemplateName = (props: ITemplateNameProps) => {
  const data: [] = [] /* useRecoilValue(getData) as [] */
  useEffect(() => {
    // TODO
  })
  return (
    <>
      {data ? (
        <>
          {props.smallBreakPoint ? (
            <div />
          ) : (
            <>
              <Grid container spacing={5}>
                <Grid item xs={8}>
                  <div />
                </Grid>
              </Grid>
            </>
          )}
        </>
      ) : (
        <>Loading</>
      )}
    </>
  )
}
export default TemplateName

interface ITemplateNameProps {
  smallBreakPoint: boolean
}
