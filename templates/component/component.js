/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: TemplateName.tsx
*/

import React from 'react';
import './TemplateName.scss';
import { RouteComponentProps } from 'react-router-dom'

export default class TemplateName extends React.Component<ITemplateNameProps, ITemplateNameState> {

    constructor(props: ITemplateNameProps) {
        super(props);
        this.state = {
            name: this.props.history.location.pathname.substring(1, this.props.history.location.pathname.length)
        }
    }
    componentWillMount() {
        // TODO
    }
    componentDidUpdate() {
        // TODO
    }
    componentWillUpdate() {
        // TODO
    }
    render() {
        return (
            <div className="TemplateName">
                {this.state.name} Component
            </div>);
    }
}

interface ITemplateNameProps extends RouteComponentProps<{ name: string }> {
    // TODO
}

interface ITemplateNameState {
    name: string
}