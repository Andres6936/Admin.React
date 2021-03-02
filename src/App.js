import './App.css';

import React from 'react';

import UnDraw from './Undraw.svg';
import UnDrawProfile from './UndrawProfile.svg';

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
    return <React.Fragment>
        <nav className={"navbar-expand navbar-light bg-white shadow"}>
            <a className="nav-link float-start" aria-current="page" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-list text-muted" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                          d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </a>

            <ul className={"nav my-3 justify-content-end"}>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-search text-muted" viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-bell text-muted" viewBox="0 0 16 16">
                            <path
                                d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                        </svg>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-envelope text-muted" viewBox="0 0 16 16">
                            <path
                                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                        </svg>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <img src={UnDrawProfile} height={"32px"} width={"32px"} alt={"Profile"}/>
                    </a>
                </li>
            </ul>
        </nav>

        <div className="container-fluid bg-light pb-4">
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
        </div>

        <footer className={"text-center text-muted py-4 bg-white small"}>
            Copyright © Your Website 2020
        </footer>

        <div className={"fixed-bottom mb-4 me-4 text-end d-none"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                 className="bi bi-arrow-up-circle text-muted" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
            </svg>
        </div>
    </React.Fragment>
}

export default App;
