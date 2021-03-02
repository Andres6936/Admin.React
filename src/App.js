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

            <Card>
                <CardHeader title={"Development Approach"}/>
                <CardBody>
                    <p className={"text-muted"}>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order
                        to reduce CSS bloat and
                        poor page performance. Custom CSS classes are used to create custom components and custom
                        utility classes.</p>
                    <p className={"text-muted"}>Before working with this theme, you should become familiar with the
                        Bootstrap framework, especially the utility classes.</p>
                </CardBody>
            </Card>

            <footer className={"text-center text-muted py-5 bg-white"}>
                Copyright © Your Website 2020
            </footer>

            <div className={"fixed-bottom mb-4 me-4 text-end d-none"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                     className="bi bi-arrow-up-circle text-muted" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                          d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                </svg>
            </div>
        </div>
    );
}

export default App;
