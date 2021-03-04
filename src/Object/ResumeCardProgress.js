import React from 'react';

import {Row} from "../Component/Row";
import {Card} from "../Component/Card";
import {CardBody} from "../Component/CardBody";

export class ResumeCardProgress extends React.Component {
    render() {
        return <Card className={"border-0 border-start border-5 " + this.props.borderColor}>
            <CardBody>
                <Row>
                    <div className={"col-9"}>
                        <p className={"small fw-bold mb-0 " + this.props.colorTitle}>{this.props.title}</p>
                        <div className={"row"}>
                            <div className={"col-3"}>
                                <p className={"small fw-bold mb-0"}>{this.props.percentage}%</p>
                            </div>
                            <div className={"col-9"}>
                                <div className="progress">
                                    <div className={"progress-bar " + this.props.colorBar} role="progressbar"
                                         style={{width: this.props.percentage + '%'}}
                                         aria-valuenow="25"
                                         aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"col-3"}>
                        {this.props.icon}
                    </div>
                </Row>
            </CardBody>
        </Card>
    }
}
