import './App.css';

import {Row} from './Component/Row';
import {Card} from './Component/Card';
import {CardBody} from "./Component/CardBody";
import {CalendarIcon} from "./Icon/Calendar";
import {ResumeCard} from "./Object/ResumeCard";
import {BellIcon} from "./Icon/Bell";
import {BookIcon} from "./Icon/Book";
import {ChatIcon} from "./Icon/Chat";

function App() {
    return (
        <div className="container-fluid bg-light">
            <h1 className={"text-muted py-3"}>Dashboard</h1>

            <ResumeCard title={"EARNINGS (MONTHLY)"} text={"$40,000"} icon={<CalendarIcon/>} color={"text-primary"}/>
            <ResumeCard title={"EARNINGS (ANNUAL)"} text={"$215,000"} icon={<BellIcon/>} color={"text-success"}/>

            <Card>
                <CardBody>
                    <div className={"row"}>
                        <div className={"col-9"}>
                            <p className={"small fw-bold text-info mb-0"}>TASKS</p>
                            <div className={"row"}>
                                <div className={"col-3"}>
                                    <p className={"small fw-bold mb-0"}>50%</p>
                                </div>
                                <div className={"col-9"}>
                                    <div className="progress">
                                        <div className="progress-bar bg-info" role="progressbar" style={{width: '50%'}}
                                             aria-valuenow="25"
                                             aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"col-3"}>
                            <BookIcon/>
                        </div>
                    </div>
                </CardBody>
            </Card>

            <Card>
                <CardBody>
                    <div className={"row"}>
                        <div className={"col-9"}>
                            <p className={"small fw-bold text-warning mb-0"}>PENDING REQUESTS</p>
                            <p className={"small fw-bold mb-0"}>18</p>
                        </div>
                        <div className={"col-3"}>
                            <ChatIcon/>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}

export default App;
