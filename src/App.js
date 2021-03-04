import React from 'react';

import {CalendarIcon} from "./Icon/Calendar";
import {ResumeCard} from "./Object/ResumeCard";
import {BellIcon} from "./Icon/Bell";
import {BookIcon} from "./Icon/Book";
import {ChatIcon} from "./Icon/Chat";
import {ResumeCardProgress} from "./Object/ResumeCardProgress";
import {RevenueSources} from "./Object/RevenueSources";
import {EarningOverview} from "./Object/EarningOverview";
import {Projects} from "./Object/Projects";
import {Navigation} from "./Layout/Navigation";
import {Sidebar} from "./Layout/Sidebar";
import {ColorCard} from "./Object/ColorCard";
import {Illustrations} from "./Object/Illustrations";
import {DevelopmentApproach} from "./Object/DevelopmentApproach";
import {Footer} from "./Layout/Footer";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // @type {boolean} The state for default of sidebar is hidden.
            hiddenSidebar: true
        }

        this.hiddenSidebar = this.hiddenSidebar.bind(this);
    }

    /**
     * Change the status of sidebar. Hidden to show <-> Show to hidden.
     *
     * @param hidden If is true the state of sidebar change to hidden, if is
     * false the state of sidebar change to show.
     */
    hiddenSidebar(hidden) {
        this.setState({hiddenSidebar: hidden})
    }

    /**
     * @return {boolean} True if the state of statusbar is hidden, false otherwise.
     */
    isHiddenSidebar() {
        return this.state.hiddenSidebar;
    }

    /**
     * @return {string} The class that hidden the sidebar in the DOM if is need.
     */
    expandSidebar() {
        return this.isHiddenSidebar() ? "d-none" : "";
    }

    /**
     * @return {string} The class that expand the main content in the DOM if is need.
     */
    expandMainContent() {
        return this.isHiddenSidebar() ? "col-12" : "col-9";
    }

    render() {
        return <div className={"row m-0 p-0"}>
            <div className={this.expandSidebar() + " col-3 bg-primary p-0 m-0"}>
                <Sidebar setStatusSidebar={this.hiddenSidebar}/>
            </div>

            <div className={this.expandMainContent() + " p-0 m-0"}>
                <Navigation setStatusSidebar={this.hiddenSidebar}/>

                <div className="container-fluid bg-light pb-4">
                    <h1 className={"text-muted py-3"}>Dashboard</h1>

                    <ResumeCard title={"EARNINGS (MONTHLY)"} text={"$40,000"} icon={<CalendarIcon/>}
                                color={"text-primary"} borderColor={"border-primary"}/>
                    <ResumeCard title={"EARNINGS (ANNUAL)"} text={"$215,000"} icon={<BellIcon/>}
                                color={"text-success"} borderColor={"border-success"}/>
                    <ResumeCardProgress title={"TASKS"} percentage={50} icon={<BookIcon/>} colorTitle={"text-info"}
                                        colorBar={"bg-info"} borderColor={"border-info"}/>
                    <ResumeCard title={"PENDING REQUESTS"} text={"18"} icon={<ChatIcon/>} color={"text-warning"}
                                borderColor={"border-warning"}/>

                    <EarningOverview/>
                    <RevenueSources/>
                    <Projects/>

                    <ColorCard title={"Primary"} subtitle={"#4e73df"} backgroundColor={"bg-primary"}/>
                    <ColorCard title={"Success"} subtitle={"#4e73df"} backgroundColor={"bg-success"}/>
                    <ColorCard title={"Info"} subtitle={"#4e73df"} backgroundColor={"bg-info"}/>
                    <ColorCard title={"Warning"} subtitle={"#4e73df"} backgroundColor={"bg-warning"}/>
                    <ColorCard title={"Danger"} subtitle={"#4e73df"} backgroundColor={"bg-danger"}/>
                    <ColorCard title={"Secondary"} subtitle={"#4e73df"} backgroundColor={"bg-secondary"}/>
                    <ColorCard title={"Dark"} subtitle={"#4e73df"} backgroundColor={"bg-dark"}/>
                    <ColorCard title={"Light"} subtitle={"#4e73df"} backgroundColor={"bg-light"}
                               foregroundColor={"text-muted"}/>

                    <Illustrations/>
                    <DevelopmentApproach/>
                </div>

                <Footer/>

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
}

