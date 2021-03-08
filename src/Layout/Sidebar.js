import React from 'react';

import {EmojiWinkFillIcon} from "../Icon/EmojiWinkFill";
import {SpeedometerIcon} from "../Icon/Speedometer";
import {GearFillIcon} from "../Icon/GearFill";
import {HammerIcon} from "../Icon/Hammer";
import {FolderFillIcon} from "../Icon/FolderFill";
import {GraphUpIcon} from "../Icon/GraphUp";
import {TableIcon} from "../Icon/Table";
import {ArrowLeftCircleFillIcon} from "../Icon/ArrowLeftCircleFill";
import {HandleSidebar} from "./HandleSidebar";

/**
 * @see {HandleSidebar}
 *
 * @param setStatusSidebar {function(boolean)} Set the state of
 * sidebar, if the parameter send to method is true the state of sidebar is
 * hidden, if the parameter send to method is false the state of sidebar is
 * show, for default the state of sidebar is show.
 */
export class Sidebar extends HandleSidebar {
    render() {
        return <ul className={"list-group text-center pt-3 sticky-top"}>
            <a className={"list-group-item"} style={{backgroundColor: "inherit", border: "none"}} href={"/404"}>
                <EmojiWinkFillIcon/>
            </a>

            <hr className={"text-white mx-3 my-1"}/>

            <a className={"list-group-item"} style={{backgroundColor: "inherit", border: "none"}} href={"/404"}>
                <SpeedometerIcon/>
                <p className={"text-white fw-bold mt-2 mb-0"} style={{fontSize: "10px"}}>Dashboard</p>
            </a>

            <hr className={"text-white mx-3 my-1"}/>

            <p className={"text-white-50 fw-bold mt-2 mb-0 small"} style={{fontSize: "11px"}}>INTERFACE</p>

            <a className={"list-group-item"} style={{backgroundColor: "inherit", border: "none"}} href={"/404"}>
                <GearFillIcon/>
                <p className={"text-white fw-bold mt-2 mb-0"} style={{fontSize: "10px"}}>Components</p>
            </a>

            <a className={"list-group-item"} style={{backgroundColor: "inherit", border: "none"}} href={"/404"}>
                <HammerIcon/>
                <p className={"text-white fw-bold mt-2 mb-0"} style={{fontSize: "10px"}}>Utilities</p>
            </a>

            <hr className={"text-white mx-3 my-1"}/>

            <p className={"text-white-50 fw-bold mt-2 mb-0 small"} style={{fontSize: "11px"}}>ADDONS</p>

            <a className={"list-group-item"} style={{backgroundColor: "inherit", border: "none"}} href={"/404"}>
                <FolderFillIcon/>
                <p className={"text-white fw-bold mt-2 mb-0"} style={{fontSize: "10px"}}>Pages</p>
            </a>

            <a className={"list-group-item"} style={{backgroundColor: "inherit", border: "none"}} href={"/404"}>
                <GraphUpIcon/>
                <p className={"text-white fw-bold mt-2 mb-0"} style={{fontSize: "10px"}}>Charts</p>
            </a>

            <a className={"list-group-item"} style={{backgroundColor: "inherit", border: "none"}} href={"/404"}>
                <TableIcon/>
                <p className={"text-white fw-bold mt-2 mb-0"} style={{fontSize: "10px"}}>Tables</p>
            </a>

            <hr className={"text-white mx-3 my-1"}/>

            <button className={"list-group-item"} style={{backgroundColor: "inherit", border: "none"}}
                    onClick={() => this.props.setStatusSidebar(this.toggleSidebar())}>
                <ArrowLeftCircleFillIcon/>
            </button>
        </ul>
    }
}
