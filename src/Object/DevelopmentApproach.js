import React from 'react';

import {CardBody} from "../Component/CardBody";
import {Card} from "../Component/Card";
import {CardHeader} from "../Component/CardHeader";

export class DevelopmentApproach extends React.Component {
    render() {
        return (
            <Card>
                <CardHeader title={"Development Approach"}/>
                <CardBody>
                    <p className={"text-muted"}>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in
                        order
                        to reduce CSS bloat and
                        poor page performance. Custom CSS classes are used to create custom components and custom
                        utility classes.</p>
                    <p className={"text-muted"}>Before working with this theme, you should become familiar with the
                        Bootstrap framework, especially the utility classes.</p>
                </CardBody>
            </Card>
        );
    }
}
