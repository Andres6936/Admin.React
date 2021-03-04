import React from 'react';
import UnDrawProfile from "../UndrawProfile.svg";
import {HandleSidebar} from "./HandleSidebar";

/**
 * @see {HandleSidebar}
 *
 * @param setStatusSidebar {function(boolean)} Set the state of
 * sidebar, if the parameter send to method is true the state of sidebar is
 * hidden, if the parameter send to method is false the state of sidebar is
 * show, for default the state of sidebar is show.
 */
export class Navigation extends HandleSidebar {
    render() {
        return (
            <nav className={"navbar-expand navbar-light bg-white"}>
                <button className="nav-link float-start border-0" aria-current="page"
                        style={{backgroundColor: "inherit"}}
                        onClick={() => this.props.setStatusSidebar(this.toggleSidebar())}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-list text-muted" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                              d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </button>

                <ul className={"nav justify-content-end"}>
                    <li className="nav-item">
                        <button className="nav-link border-0" type={"button"} aria-current="page"
                                data-bs-toggle={"dropdown"}
                                id={"admin-search-dropdown"} style={{backgroundColor: "inherit"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-search text-muted" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </button>

                        <div className={"dropdown-menu dropdown-menu-start w-100 mt-3"}
                             aria-labelledby={"admin-search-dropdown"}>
                            <form className={"input-group p-2"}>
                                <input className={"form-control"} type={"search"} placeholder={"Search for ...."}
                                       aria-label="Search"/>
                                <button type={"send"} className={"btn btn-primary"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-search" viewBox="0 0 16 16">
                                        <path
                                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link border-0" type={"button"} data-bs-toggle={"dropdown"}
                                id={"admin-bell-dropdown"} style={{backgroundColor: "inherit"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-bell text-muted" viewBox="0 0 16 16">
                                <path
                                    d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                            </svg>
                        </button>

                        <div className={"dropdown-menu dropdown-menu-start w-100 pb-0 mt-3"}
                             aria-labelledby={"admin-bell-dropdown"}>
                            <h6 className={"dropdown-header border-bottom w-100"}>ALERTS CENTER</h6>

                            <a className={"dropdown-item border-bottom mt-2"}>
                                <div className={"row row-cols-2 d-flex align-items-center"}>
                                    <div className={"col-3 text-center"}>
                                        <div className={"rounded-circle bg-primary py-2 mx-1"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-file-earmark-text-fill text-white"
                                                 viewBox="0 0 16 16">
                                                <path
                                                    d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className={"col-9"}>
                                        <p className={"small text-black-50 mb-0"}>December 12, 2019</p>
                                        <p className={"small fw-bold text-muted text-wrap"}>A new monthly report is
                                            ready to
                                            download!</p>
                                    </div>
                                </div>
                            </a>
                            <a className={"dropdown-item border-bottom mt-2"}>
                                <div className={"row row-cols-2 d-flex align-items-center"}>
                                    <div className={"col-3 text-center"}>
                                        <div className={"rounded-circle bg-success py-2 mx-1"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor"
                                                 className="bi bi-credit-card-2-back-fill text-white"
                                                 viewBox="0 0 16 16">
                                                <path
                                                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5H0V4zm11.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zM0 11v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1H0z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className={"col-9"}>
                                        <p className={"small text-black-50 mb-0"}>December 7, 2019</p>
                                        <p className={"small fw-bold text-muted text-wrap"}>$290.29 has been deposited
                                            into your
                                            account!</p>
                                    </div>
                                </div>
                            </a>
                            <a className={"dropdown-item border-bottom mt-2"}>
                                <div className={"row row-cols-2 d-flex align-items-center"}>
                                    <div className={"col-3 text-center"}>
                                        <div className={"rounded-circle bg-warning py-2 mx-1"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor"
                                                 className="bi bi-exclamation-triangle-fill text-white"
                                                 viewBox="0 0 16 16">
                                                <path
                                                    d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className={"col-9"}>
                                        <p className={"small text-black-50 mb-0"}>December 2, 2019</p>
                                        <p className={"small fw-bold text-muted text-wrap"}>Spending Alert: We've
                                            noticed unusually high spending for your account.</p>
                                    </div>
                                </div>
                            </a>
                            <a className={"dropdown-item text-center mb-0"}>
                                <span className={"small text-muted"}>Show All Alerts</span>
                            </a>
                        </div>
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
        );
    }
}
