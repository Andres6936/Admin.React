import React from 'react';

import {Card} from "../Component/Card";
import {CardBody} from "../Component/CardBody";
import {CardHeader} from "../Component/CardHeader";
import {EarningOverviewChart} from "../Chart/EarningOverviewChart";

export class EarningOverview extends React.Component {
    render() {
        return (
            <Card>
                <CardHeader title={"Earnings Overview"}>
                    <div className={"dropdown float-end"}>
                        <a className="dropdown-toggle text-muted" type="button" data-bs-toggle="dropdown"
                           aria-expanded="false" href={"/404"}>
                        </a>
                        <ul className="dropdown-menu">
                            <li><h6 className="dropdown-header">Dropdown header</h6></li>
                            <li><a className="dropdown-item" href={"/404"}>Action</a></li>
                            <li><a className="dropdown-item" href={"/404"}>Another action</a></li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li><a className="dropdown-item" href={"/404"}>Something else here</a></li>
                        </ul>
                    </div>
                </CardHeader>

                <CardBody>
                    <EarningOverviewChart/>
                </CardBody>
            </Card>
        );
    }
}
