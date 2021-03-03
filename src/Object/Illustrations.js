import React from 'react';

import {CardBody} from "../Component/CardBody";
import {Card} from "../Component/Card";
import {CardHeader} from "../Component/CardHeader";

import UnDraw from "../Undraw.svg";

export class Illustrations extends React.Component {
    render() {
        return (
            <Card>
                <CardHeader title={"Illustrations"}/>
                <CardBody>
                    <img className={"img-fluid my-4"} src={UnDraw} alt={"Illustrations"}/>
                    <p className={"text-muted"}>Add some quality, svg illustrations to your project courtesy of
                        <a href={"https://undraw.co/"} className={"text-decoration-none"}> unDraw</a>, a
                        constantly updated collection of beautiful svg images that you can use
                        completely free and without attribution!</p>
                    <a href={"https://undraw.co/"} className={"text-decoration-none"}>Browse Illustrations on
                        unDraw</a>
                </CardBody>
            </Card>
        );
    }
}
