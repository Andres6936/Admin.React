import React from 'react';

import {EmojiWinkFillIcon} from "../Icon/EmojiWinkFill";
import {SpeedometerIcon} from "../Icon/Speedometer";
import {GearFillIcon} from "../Icon/GearFill";
import {HammerIcon} from "../Icon/Hammer";

export class Sidebar extends React.Component {
    render() {
        return <section className={"col-3 bg-primary p-0 m-0"}>
            <ul className={"list-group text-center my-3"}>
                <a className={"list-group-item"} style={{backgroundColor: "inherit", border: "none"}}>
                    <EmojiWinkFillIcon/>
                </a>

                <hr className={"text-white mx-3 my-1"}/>

                <a className={"list-group-item"} style={{backgroundColor: "inherit", border: "none"}}>
                    <SpeedometerIcon/>
                    <p className={"text-white fw-bold mt-2 mb-0"} style={{fontSize: "10px"}}>Dashboard</p>
                </a>

                <hr className={"text-white mx-3 my-1"}/>

                <p className={"text-white-50 fw-bold mt-2 mb-0 small"} style={{fontSize: "11px"}}>INTERFACE</p>

                <a className={"list-group-item"} style={{backgroundColor: "inherit", border: "none"}}>
                    <GearFillIcon/>
                    <p className={"text-white fw-bold mt-2 mb-0"} style={{fontSize: "10px"}}>Components</p>
                </a>

                <a className={"list-group-item"} style={{backgroundColor: "inherit", border: "none"}}>
                    <HammerIcon/>
                    <p className={"text-white fw-bold mt-2 mb-0"} style={{fontSize: "10px"}}>Utilities</p>
                </a>

                <hr className={"text-white mx-3 my-1"}/>

                <p className={"text-white-50 fw-bold mt-2 mb-0 small"} style={{fontSize: "11px"}}>ADDONS</p>

                <a className={"list-group-item"} style={{backgroundColor: "inherit", border: "none"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                         className="bi bi-folder-fill text-white" viewBox="0 0 16 16">
                        <path
                            d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"/>
                    </svg>
                    <p className={"text-white fw-bold mt-2 mb-0"} style={{fontSize: "10px"}}>Pages</p>
                </a>

                <a className={"list-group-item"} style={{backgroundColor: "inherit", border: "none"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                         className="bi bi-graph-up text-white" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                              d="M0 0h1v15h15v1H0V0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                    <p className={"text-white fw-bold mt-2 mb-0"} style={{fontSize: "10px"}}>Charts</p>
                </a>

                <a className={"list-group-item"} style={{backgroundColor: "inherit", border: "none"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                         className="bi bi-table text-white" viewBox="0 0 16 16">
                        <path
                            d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z"/>
                    </svg>
                    <p className={"text-white fw-bold mt-2 mb-0"} style={{fontSize: "10px"}}>Tables</p>
                </a>

                <hr className={"text-white mx-3 my-1"}/>
            </ul>
        </section>
    }
}
