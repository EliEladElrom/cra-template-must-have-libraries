/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: TemplateName.tsx
*/

import React from 'react'
import './TemplateName.scss'
import { RouteComponentProps } from 'react-router-dom'

export default class TemplateName extends React.Component<ITemplateNameProps, ITemplateNameState> {
  constructor(props: ITemplateNameProps) {
    super(props);
    this.state = {
      name: this.props.history.location.pathname.substring(1, this.props.history.location.pathname.length)
    }
  }

  render() {
    return (
      <>
        <h1 className="ReactQuestions">
          {this.state.name.replace(/([a-z])([A-Z])/g, '$1 $2')}
        </h1>
      </>
    )
  }
}

interface ITemplateNameProps extends RouteComponentProps<{ name: string }> {
  // TODO
}

interface ITemplateNameState {
  name: string
}
