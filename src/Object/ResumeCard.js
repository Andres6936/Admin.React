import React from 'react';

import {Row} from "../Component/Row";
import {Card} from "../Component/Card";
import {CardBody} from "../Component/CardBody";

/**
 * @param {number} borderWidth (Optional) The border width of this component.
 */
export class ResumeCard extends React.Component {

    /**
     * @return {string} The border width of this component, the possible
     * values are: 'border-1', 'border-2', 'border-3', 'border-4', 'border-5';
     */
    getBorderWidth() {
        return `border-${this.props.borderWidth || 5}`;
    }

    render() {
        return <Card className={"border-0 border-start " + this.getBorderWidth() + " " + this.props.borderColor}>
            <CardBody>
                <Row>
                    <div className={"col-9"}>
                        <p className={"small fw-bold mb-0 " + this.props.color}>{this.props.title}</p>
                        <p className={"small fw-bold mb-0"}>{this.props.text}</p>
                    </div>
                    <div className={"col-3"}>
                        {this.props.icon}
                    </div>
                </Row>
            </CardBody>
        </Card>
    }
}
