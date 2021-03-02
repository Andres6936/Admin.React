import './App.css';

import {CalendarIcon} from "./Icon/Calendar";
import {ResumeCard} from "./Object/ResumeCard";
import {BellIcon} from "./Icon/Bell";
import {BookIcon} from "./Icon/Book";
import {ChatIcon} from "./Icon/Chat";
import {ResumeCardProgress} from "./Object/ResumeCardProgress";
import {RevenueSources} from "./Object/RevenueSources";
import {EarningOverview} from "./Object/EarningOverview";
import {Card} from "./Component/Card";
import {CardHeader} from "./Component/CardHeader";
import {CardBody} from "./Component/CardBody";

function App() {
    return (
        <div className="container-fluid bg-light">
            <h1 className={"text-muted py-3"}>Dashboard</h1>

            <ResumeCard title={"EARNINGS (MONTHLY)"} text={"$40,000"} icon={<CalendarIcon/>} color={"text-primary"}/>
            <ResumeCard title={"EARNINGS (ANNUAL)"} text={"$215,000"} icon={<BellIcon/>} color={"text-success"}/>
            <ResumeCardProgress title={"TASKS"} percentage={50} icon={<BookIcon/>} colorTitle={"text-info"}
                                colorBar={"bg-info"}/>
            <ResumeCard title={"PENDING REQUESTS"} text={"18"} icon={<ChatIcon/>} color={"text-warning"}/>

            <EarningOverview/>
            <RevenueSources/>

            <Card>
                <CardHeader title={"Projects"}>

                </CardHeader>
                <CardBody>
                    <p className={"text-muted mb-1 small"}>Server Migration <span className={"float-end"}>13%</span></p>
                    <div className="progress mb-3">
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "13%"}}
                             aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">

                        </div>
                    </div>

                    <p className={"text-muted mb-1 small"}>Sales Tracking <span className={"float-end"}>25%</span></p>
                    <div className="progress mb-3">
                        <div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}}
                             aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">

                        </div>
                    </div>

                    <p className={"text-muted mb-1 small"}>Customer Database <span className={"float-end"}>50%</span>
                    </p>
                    <div className="progress mb-3">
                        <div className="progress-bar bg-info" role="progressbar" style={{width: "50%"}}
                             aria-valuenow="50"
                             aria-valuemin="0" aria-valuemax="100">

                        </div>
                    </div>

                    <p className={"text-muted mb-1 small"}>Payout Details <span className={"float-end"}>75%</span></p>
                    <div className="progress mb-3">
                        <div className="progress-bar bg-warning" role="progressbar" style={{width: "75%"}}
                             aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">

                        </div>
                    </div>

                    <p className={"text-muted mb-1 small"}>Account Setup <span className={"float-end"}>100%</span></p>
                    <div className="progress mb-3">
                        <div className="progress-bar bg-danger" role="progressbar" style={{width: "100%"}}
                             aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">

                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}

export default App;
