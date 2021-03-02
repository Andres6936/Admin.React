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
import {Progress} from "./Component/Progress";

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
                    <Progress percentage={13} colorBar={"bg-primary"}/>

                    <p className={"text-muted mb-1 small"}>Sales Tracking <span className={"float-end"}>25%</span></p>
                    <Progress percentage={25} colorBar={"bg-success"}/>

                    <p className={"text-muted mb-1 small"}>Customer Database <span className={"float-end"}>50%</span>
                    </p>
                    <Progress percentage={50} colorBar={"bg-info"}/>

                    <p className={"text-muted mb-1 small"}>Payout Details <span className={"float-end"}>75%</span></p>
                    <Progress percentage={75} colorBar={"bg-warning"}/>

                    <p className={"text-muted mb-1 small"}>Account Setup <span className={"float-end"}>100%</span></p>
                    <Progress percentage={100} colorBar={"bg-danger"}/>
                </CardBody>
            </Card>
        </div>
    );
}

export default App;
