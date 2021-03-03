import React from 'react';

/**
 * Store the state of sidebar, if this state is hidden the variable
 * hiddenSidebar is true, if the state of sidebar is show the variable
 * hiddenSidebar is false.
 */
export class HandleSidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // @type {boolean} The state for default of sidebar is hidden.
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
        // @type {boolean} Get the current status of sidebar
        const currentStateSidebar = this.state.hiddenSidebar;
        this.setState({hiddenSidebar: !currentStateSidebar})
        return this.state.hiddenSidebar;
    }
}
