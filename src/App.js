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
                                 className="bi bi-calendar text-muted" viewBox="0 0 16 16">
                                <path
                                    d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                            </svg>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
  );
}

export default App;
