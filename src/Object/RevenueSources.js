import React from 'react';

import {Card} from "../Component/Card";
import {CardBody} from "../Component/CardBody";
import {CardHeader} from "../Component/CardHeader";
import {RevenueSourcesChart} from "../Chart/RevenueSourcesChart";

export class RevenueSources extends React.Component {
    render() {
        return (
            <Card>
                <CardHeader title={"Revenue Sources"}>
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
                    <div>
                        <RevenueSourcesChart/>
                    </div>

                    <div className={"row mt-4 text-center text-muted text-nowrap"}>
                        <span className={"col-4"}><span className={"text-primary"}>&#9679;</span> Direct</span>
                        <span className={"col-4"}><span className={"text-success"}>&#9679;</span> Social</span>
                        <span className={"col-4"}><span className={"text-info"}>&#9679;</span> Referral</span>
                    </div>
                </CardBody>
            </Card>
        );
    }
}
