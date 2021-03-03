import React from 'react';

import {EmojiWinkFillIcon} from "../Icon/EmojiWinkFill";
import {SpeedometerIcon} from "../Icon/Speedometer";
import {GearFillIcon} from "../Icon/GearFill";
import {HammerIcon} from "../Icon/Hammer";
import {FolderFillIcon} from "../Icon/FolderFill";
import {GraphUpIcon} from "../Icon/GraphUp";
import {TableIcon} from "../Icon/Table";
import {ArrowLeftCircleFillIcon} from "../Icon/ArrowLeftCircleFill";

export class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hidden: this.props.hidden
        }
    }

    isHidden() {
        return this.state.hidden;
    }

    hiddenSidebar() {
        return this.isHidden() ? "d-none" : "";
    }

    render() {
        return <section className={this.hiddenSidebar() + " col-3 bg-primary p-0 m-0"}>
            <ul className={"list-group text-center pt-3 sticky-top"}>
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
                    <FolderFillIcon/>
                    <p className={"text-white fw-bold mt-2 mb-0"} style={{fontSize: "10px"}}>Pages</p>
                </a>

                <a className={"list-group-item"} style={{backgroundColor: "inherit", border: "none"}}>
                    <GraphUpIcon/>
                    <p className={"text-white fw-bold mt-2 mb-0"} style={{fontSize: "10px"}}>Charts</p>
                </a>

                <a className={"list-group-item"} style={{backgroundColor: "inherit", border: "none"}}>
                    <TableIcon/>
                    <p className={"text-white fw-bold mt-2 mb-0"} style={{fontSize: "10px"}}>Tables</p>
                </a>

                <hr className={"text-white mx-3 my-1"}/>

                <a className={"list-group-item"} style={{backgroundColor: "inherit", border: "none"}}>
                    <ArrowLeftCircleFillIcon/>
                </a>
            </ul>
        </section>
    }
}
