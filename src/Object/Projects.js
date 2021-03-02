import React from 'react';

import {CardHeader} from "../Component/CardHeader";
import {CardBody} from "../Component/CardBody";
import {ProgressBar} from "../Component/ProgressBar";
import {Card} from "../Component/Card";

export class Projects extends React.Component {
    render() {
        return (
            <Card>
                <CardHeader title={"Projects"}>

                </CardHeader>
                <CardBody>
                    <ProgressBar title={"Server Migration"} percentage={13} colorBar={"bg-primary"}/>
                    <ProgressBar title={"Sales Tracking"} percentage={25} colorBar={"bg-success"}/>
                    <ProgressBar title={"Customer Database"} percentage={50} colorBar={"bg-info"}/>
                    <ProgressBar title={"Payout Details"} percentage={75} colorBar={"bg-warning"}/>
                    <ProgressBar title={"Account Setup"} percentage={100} colorBar={"bg-danger"}/>
                </CardBody>
            </Card>
        );
    }
}
