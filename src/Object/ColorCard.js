import React from 'react';

import {CardBody} from "../Component/CardBody";
import {Card} from "../Component/Card";

export class ColorCard extends React.Component {
    render() {
        return (
            <Card color={this.props.backgroundColor}>
                <CardBody>
                    <p className={"text-white mb-0"}>{this.props.title}</p>
                    <p className={"text-white-50 mb-0 small"}>{this.props.subtitle}</p>
                </CardBody>
            </Card>
        );
    }
}
