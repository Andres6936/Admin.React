import './App.css';

import {CalendarIcon} from "./Icon/Calendar";
import {ResumeCard} from "./Object/ResumeCard";
import {BellIcon} from "./Icon/Bell";
import {BookIcon} from "./Icon/Book";
import {ChatIcon} from "./Icon/Chat";
import {ResumeCardProgress} from "./Object/ResumeCardProgress";
import {EarningOverviewChart} from "./Chart/EarningOverviewChart";
import {RevenueSourcesChart} from "./Chart/RevenueSourcesChart";

function App() {
    return (
        <div className="container-fluid bg-light">
            <h1 className={"text-muted py-3"}>Dashboard</h1>

            <ResumeCard title={"EARNINGS (MONTHLY)"} text={"$40,000"} icon={<CalendarIcon/>} color={"text-primary"}/>
            <ResumeCard title={"EARNINGS (ANNUAL)"} text={"$215,000"} icon={<BellIcon/>} color={"text-success"}/>
            <ResumeCardProgress title={"TASKS"} percentage={50} icon={<BookIcon/>} colorTitle={"text-info"}
                                colorBar={"bg-info"}/>
            <ResumeCard title={"PENDING REQUESTS"} text={"18"} icon={<ChatIcon/>} color={"text-warning"}/>

            <div className={"card mb-4"}>
                <div className={"card-header text-primary bg-white fw-bold"}>
                    Earnings Overview

                    <div className={"dropdown float-end"}>
                        <a className="dropdown-toggle text-muted" type="button" data-bs-toggle="dropdown"
                           aria-expanded="false">
                        </a>
                        <ul className="dropdown-menu">
                            <li><h6 className="dropdown-header">Dropdown header</h6></li>
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>

                <div className={"card-body"}>
                    <EarningOverviewChart/>
                </div>
            </div>

            <div className={"card mb-4"}>
                <div className={"card-header text-primary bg-white fw-bold"}>
                    Revenue Sources

                    <div className={"dropdown float-end"}>
                        <a className="dropdown-toggle text-muted" type="button" data-bs-toggle="dropdown"
                           aria-expanded="false">
                        </a>
                        <ul className="dropdown-menu">
                            <li><h6 className="dropdown-header">Dropdown header</h6></li>
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>

                <div className={"card-body mt-3"}>
                    <div>
                        <RevenueSourcesChart/>
                    </div>

                    <div className={"row mt-4 text-center text-muted text-nowrap"}>
                        <span className={"col-4"}><span className={"text-primary"}>&#9679;</span> Direct</span>
                        <span className={"col-4"}><span className={"text-success"}>&#9679;</span> Social</span>
                        <span className={"col-4"}><span className={"text-info"}>&#9679;</span> Referral</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
