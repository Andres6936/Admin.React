import './App.css';
import UnDraw from './Undraw.svg';

import {CalendarIcon} from "./Icon/Calendar";
import {ResumeCard} from "./Object/ResumeCard";
import {BellIcon} from "./Icon/Bell";
import {BookIcon} from "./Icon/Book";
import {ChatIcon} from "./Icon/Chat";
import {ResumeCardProgress} from "./Object/ResumeCardProgress";
import {RevenueSources} from "./Object/RevenueSources";
import {EarningOverview} from "./Object/EarningOverview";
import {Projects} from "./Object/Projects";
import {Card} from "./Component/Card";
import {CardBody} from "./Component/CardBody";
import {CardHeader} from "./Component/CardHeader";

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

            <Projects/>

            <Card color={"bg-primary"}>
                <CardBody>
                    <p className={"text-white mb-0"}>Primary</p>
                    <p className={"text-white-50 mb-0 small"}>#4e73df</p>
                </CardBody>
            </Card>

            <Card color={"bg-success"}>
                <CardBody>
                    <p className={"text-white mb-0"}>Success</p>
                    <p className={"text-white-50 mb-0 small"}>#4e73df</p>
                </CardBody>
            </Card>

            <Card color={"bg-info"}>
                <CardBody>
                    <p className={"text-white mb-0"}>Info</p>
                    <p className={"text-white-50 mb-0 small"}>#4e73df</p>
                </CardBody>
            </Card>

            <Card color={"bg-warning"}>
                <CardBody>
                    <p className={"text-white mb-0"}>Warning</p>
                    <p className={"text-white-50 mb-0 small"}>#4e73df</p>
                </CardBody>
            </Card>

            <Card color={"bg-danger"}>
                <CardBody>
                    <p className={"text-white mb-0"}>Danger</p>
                    <p className={"text-white-50 mb-0 small"}>#4e73df</p>
                </CardBody>
            </Card>

            <Card color={"bg-secondary"}>
                <CardBody>
                    <p className={"text-white mb-0"}>Secondary</p>
                    <p className={"text-white-50 mb-0 small"}>#4e73df</p>
                </CardBody>
            </Card>

            <Card color={"bg-light"}>
                <CardBody>
                    <p className={"text-muted mb-0"}>Secondary</p>
                    <p className={"text-muted mb-0 small"}>#4e73df</p>
                </CardBody>
            </Card>

            <Card color={"bg-dark"}>
                <CardBody>
                    <p className={"text-white mb-0"}>Secondary</p>
                    <p className={"text-white-50 mb-0 small"}>#4e73df</p>
                </CardBody>
            </Card>

            <Card>
                <CardHeader title={"Illustrations"}/>
                <CardBody>
                    <img className={"img-fluid my-4"} src={UnDraw} alt={"Illustrations"}/>
                    <p className={"text-muted"}>Add some quality, svg illustrations to your project courtesy of
                        <a href={"https://undraw.co/"} className={"text-decoration-none"}> unDraw</a>, a
                        constantly updated collection of beautiful svg images that you can use
                        completely free and without attribution!</p>
                    <a href={"https://undraw.co/"} className={"text-decoration-none"}>Browse Illustrations on unDraw</a>
                </CardBody>
            </Card>
        </div>
    );
}

export default App;
