import React from 'react';

/**
 * @function setStatusSidebar {function(boolean) -> void} Set the state of
 * sidebar, if the parameter send to method is true the state of sidebar is
 * hidden, if the parameter send to method is false the state of sidebar is
 * show, for default the state of sidebar is show.
 */
export class HandleSidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // The state for default of sidebar is hidden.
            hiddenSidebar: true
        }

        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    /**
     * Change the state of sidebar. hidden to show <-> show to hidden.
     *
     * @return {boolean} The state of sidebar, if is true the state of sidebar
     * is hidden, if is false the state of sidebar is show.
     */
    toggleSidebar() {
        let currentStateSidebar = this.state.hiddenSidebar;
        this.setState({hiddenSidebar: !currentStateSidebar})
        return this.state.hiddenSidebar;
    }
}
