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
import {ProgressBar} from "./Object/ProgressBar";

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
                    <ProgressBar title={"Server Migration"} percentage={13} colorBar={"bg-primary"}/>
                    <ProgressBar title={"Sales Tracking"} percentage={25} colorBar={"bg-success"}/>
                    <ProgressBar title={"Customer Database"} percentage={50} colorBar={"bg-info"}/>
                    <ProgressBar title={"Payout Details"} percentage={75} colorBar={"bg-warning"}/>
                    <ProgressBar title={"Account Setup"} percentage={100} colorBar={"bg-danger"}/>
                </CardBody>
            </Card>
        </div>
    );
}

export default App;
