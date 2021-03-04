import React from 'react';

import {Row} from "../Component/Row";
import {Card} from "../Component/Card";
import {CardBody} from "../Component/CardBody";

export class ResumeCard extends React.Component {
    render() {
        return <Card className={"border-0 border-start border-5 " + this.props.borderColor}>
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
