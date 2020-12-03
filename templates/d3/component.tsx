/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/TemplateName/TemplateName.tsx
*/

import React, { RefObject } from 'react'
import './TemplateName.scss'
import * as d3 from 'd3' // yarn add d3 @types/d3

export default class Component extends React.PureComponent<ITemplateNameProps, ITemplateNameState> {

  myRef: RefObject<HTMLDivElement>

  constructor(props: ITemplateNameProps) {
    super(props)
    this.state = {
      // TODO
    }
    this.myRef = React.createRef()
  }

  componentDidMount(){
    d3.select(this.myRef.current)
      .append('p')
      .text('Hello World')
  }

  render() {
    return <div className="TemplateName" ref={this.myRef} />
  }
}

interface ITemplateNameProps {
  // TODO
}

interface ITemplateNameState {
  // TODO
}
