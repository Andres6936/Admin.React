import './App.css';

import {Card} from './Component/Card';
import {CardBody} from "./Component/CardBody";

function App() {
    return (
        <div className="container-fluid bg-light">
            <h1 className={"text-muted py-3"}>Dashboard</h1>

            <Card>
                <CardBody>
                    <div className={"row"}>
                        <div className={"col-9"}>
                            <p className={"small fw-bold text-primary mb-0"}>EARNINGS (MONTHLY)</p>
                            <p className={"small fw-bold mb-0"}>$40,000</p>
                        </div>
                        <div className={"col-3"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                 className="bi bi-calendar text-muted" viewBox="0 0 16 16">
                                <path
                                    d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                            </svg>
                        </div>
                    </div>
                </CardBody>
            </Card>

            <Card>
                <CardBody>
                    <div className={"row"}>
                        <div className={"col-9"}>
                            <p className={"small fw-bold text-success mb-0"}>EARNINGS (ANNUAL)</p>
                            <p className={"small fw-bold mb-0"}>$215,000</p>
                        </div>
                        <div className={"col-3"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                 className="bi bi-bell text-muted" viewBox="0 0 16 16">
                                <path
                                    d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                            </svg>
                        </div>
                    </div>
                </CardBody>
            </Card>

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
                                        <div className="progress-bar bg-info" role="progressbar" style={progressStyle}
                                             aria-valuenow="25"
                                             aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"col-3"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                 className="bi bi-book text-muted" viewBox="0 0 16 16">
                                <path
                                    d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                            </svg>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}

const progressStyle = {
    width: "25%"
}

export default App;
