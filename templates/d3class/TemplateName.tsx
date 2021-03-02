/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/TemplateName/TemplateName.tsx
*/

import React, { RefObject } from 'react'
import './TemplateName.scss'
import * as d3 from 'd3' // yarn add d3 @types/d3

export default class TemplateName extends React.PureComponent<ITemplateNameProps, ITemplateNameState> {
  ref: RefObject<HTMLDivElement>

  constructor(props: ITemplateNameProps) {
    super(props)
    this.state = {
      // TODO
    }
    this.ref = React.createRef()
  }

  componentDidMount() {
    d3.select(this.ref.current).append('p').text('Hello World')

    // const svg = d3.select(this.myRef.current).append('svg').attr('width', 500).attr('height', 500)
    d3.select('svg')
      .append('g')
      .attr('transform', 'translate(250, 0)')
      .append('rect').attr('width', 500)
      .attr('height', 500)
      .attr('fill', 'tomato')
  }

  render() {
    return (
      <div className="TemplateName" ref={this.ref}>
        <svg width="500" height="500">
          <g transform="translate(0, 0)">
            <rect width="500" height="500" fill="green" />
          </g>
        </svg>
      </div>
    )
  }
}

interface ITemplateNameProps {
  // TODO
}

interface ITemplateNameState {
  // TODO
}