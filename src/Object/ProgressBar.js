import React from 'react';

import {Progress} from "../Component/Progress";

export class ProgressBar extends React.Component {
    render() {
        return <React.Fragment>
            <p className={"text-muted mb-1 small"}>{this.props.title}
                <span className={"float-end"}>{this.props.percentage + '%'}</span></p>
            <Progress percentage={this.props.percentage} colorBar={this.props.colorBar}/>
        </React.Fragment>
    }
}
