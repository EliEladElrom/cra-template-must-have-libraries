/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/TemplateNameHelper/TemplateNameHelper.tsx

Created with;
$ npx generate-react-cli component TemplateName --type=d3WidgetComponent

Implement - pass metric:
const helper = new TemplateNameHelper(props.propertiesNames)

*/

import * as d3 from 'd3'
import { Types } from '../../widgets/TemplateNameWidget/types'

export default class TemplateNameHelper {

  private readonly metric: string[]

  constructor(metric: string[]) {
    this.metric = metric
  }

  // EE: if you need a date accessor;
  // static dateParser = d3.timeParse('%Y-%m-%d')
  // xAccessor = (d: Types.Data) => TemplateNameHelper.dateParser(d[this.metric[0]] as string)

  // @ts-ignore
  public xAccessor = (d: Types.Data) => d[this.metric[0]]

  // @ts-ignore
  public yAccessor = (d: Types.Data) => d[this.metric[1]]

  static getDimensions = (width: number, height: number, left: number, right: number, top: number, bottom: number) => {
    const dimensions = {
      width,
      height,
      margin: {
        left,
        right,
        top,
        bottom,
      },
      boundedWidth: 0,
      boundedHeight: 0,
    }
    dimensions.boundedWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right
    dimensions.boundedHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom

    return dimensions
  }

  static getScales = (data: Types.Data[], width: number, height: number, metric: string[]) => {
    const helper = new TemplateNameHelper(metric)
    return {
      xScale: d3
        .scaleLinear()
        .domain(d3.extent(data, helper.xAccessor) as unknown as [number, number])
        .range([0, width])
        .nice(),
      yScale: d3
        .scaleLinear()
        .domain(d3.extent(data, helper.yAccessor) as [number, number])
        .range([height, 0])
        .nice()
    }
  }
}
