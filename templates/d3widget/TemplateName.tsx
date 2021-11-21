/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/widgets/TemplateName/TemplateName.tsx

Created with;
$ npx generate-react-cli component TemplateName --type=d3Widget

*/

import React, { useEffect, useRef, useState } from 'react'
import './TemplateName.scss'
import * as d3 from 'd3'
import { Types } from './types'
import useWindowDimensions from '../../hooks/WindowDimensions'

// TODO EE: Update Chart, ChartHelper to actual component name & helper
import Chart from '../../components/Chart/Chart'
import ChartHelper from '../../components/Chart/ChartHelper'

const TemplateName = (props: ITemplateNameProps) => {

  const [data, setData] = useState<Types.Data[]>([{}])

  const [propertiesNames] = useState(['name', 'value'])

  const { width, height } = useWindowDimensions()

  const dimensions = useRef() as { current: Types.Dimensions }
  dimensions.current = ChartHelper.getDimensions(width * 0.9, height * 0.9, 30, 50, 10, 50)

  // resize
  useEffect(() => {
    (dimensions as unknown as { current: Types.Dimensions }).current = ChartHelper.getDimensions(width * 0.9, height * 0.9, 30, 50, 10, 50)
    // console.log(dimensions.current)
  }, [width, height, dimensions])

  const loadData = () => {
    d3.dsv(',', '/data/data.csv', (d) => {
      return (d as unknown) as Types.Data[]
    }).then((d) => {
      setData((d as unknown) as Types.Data[])
    })
  }

  /*
  // EE: Load JSON
  const loadData = () => {
    d3.json('/data/data.json').then((d) => {
      return d as unknown as Types.Data[]
    }).then(function results(d) {
      setData((d as unknown) as Types.Data[])
    })
  } */

  useEffect(() => {
    if (data.length <= 1)
      loadData()
  })

  return (
    <>
      {data.length > 1 ? (
        <>
          <h3>Title</h3>
          <ChartName dimensions={dimensions.current} data={data} propertiesNames={propertiesNames} />
        </>
      ) : (
        <>Loading</>
      )}
    </>
  )
}
export default TemplateName

interface ITemplateNameProps {
  // TODO
}
