import './App.css';

import React from 'react';

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
import {Navigation} from "./Layout/Navigation";

function App() {
    return <div className={"row"}>
        <section className={"col-3 bg-primary p-0 m-0"}>
            <ul className={"list-group text-center my-3"}>
                <a className={"list-group-item"} style={{backgroundColor: "inherit", border: "none"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                         className="bi bi-emoji-wink-fill text-white" viewBox="0 0 16 16">
                        <path
                            d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM7 6.5C7 5.672 6.552 5 6 5s-1 .672-1 1.5S5.448 8 6 8s1-.672 1-1.5zM4.285 9.567a.5.5 0 0 0-.183.683A4.498 4.498 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.498 3.498 0 0 1 8 11.5a3.498 3.498 0 0 1-3.032-1.75.5.5 0 0 0-.683-.183zm5.152-3.31a.5.5 0 0 0-.874.486c.33.595.958 1.007 1.687 1.007.73 0 1.356-.412 1.687-1.007a.5.5 0 0 0-.874-.486.934.934 0 0 1-.813.493.934.934 0 0 1-.813-.493z"/>
                    </svg>
                </a>

                <hr className={"text-white mx-3 my-1"}/>

                <a className={"list-group-item"} style={{backgroundColor: "inherit", border: "none"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                         className="bi bi-speedometer2 text-white" viewBox="0 0 16 16">
                        <path
                            d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
                        <path fillRule="evenodd"
                              d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"/>
                    </svg>
                    <p className={"text-white fw-bold mt-2 mb-0"} style={{fontSize: "10px"}}>Dashboard</p>
                </a>

                <hr className={"text-white mx-3 my-1"}/>

                <a className={"list-group-item"} style={{backgroundColor: "inherit", border: "none"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                         className="bi bi-gear-fill text-white" viewBox="0 0 16 16">
                        <path
                            d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                    </svg>
                    <p className={"text-white fw-bold mt-2 mb-0"} style={{fontSize: "10px"}}>Components</p>
                </a>

                <hr className={"text-white mx-3 my-1"}/>

                <a className={"list-group-item"} style={{backgroundColor: "inherit", border: "none"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                         className="bi bi-hammer text-white" viewBox="0 0 16 16">
                        <path
                            d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5.009 5.009 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334z"/>
                    </svg>
                    <p className={"text-white fw-bold mt-2 mb-0"} style={{fontSize: "10px"}}>Utilities</p>
                </a>

                <hr className={"text-white mx-3 my-1"}/>
            </ul>
        </section>

        <div className={"col-9 p-0 m-0"}>
            <Navigation/>

            <div className="container-fluid bg-light pb-4">
                <h1 className={"text-muted py-3"}>Dashboard</h1>

                <ResumeCard title={"EARNINGS (MONTHLY)"} text={"$40,000"} icon={<CalendarIcon/>}
                            color={"text-primary"}/>
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
                        <a href={"https://undraw.co/"} className={"text-decoration-none"}>Browse Illustrations on
                            unDraw</a>
                    </CardBody>
                </Card>

                <Card>
                    <CardHeader title={"Development Approach"}/>
                    <CardBody>
                        <p className={"text-muted"}>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in
                            order
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
                    <path fillRule="evenodd"
                          d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                </svg>
            </div>
        </div>
    </div>
}

export default App;
