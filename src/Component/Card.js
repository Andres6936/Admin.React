import React from 'react';

export class Card extends React.Component {

    /**
     * Avoid the pollution of className, for the general the use of default
     * properties set the nonexistent value to 'undefined', producing a
     * pollution of className.
     *
     * @return {string} The value of background color for this card.
     */
    getBackgroundColor() {
        // The empty string avoid the added 'undefined' to component class.
        return this.props.color ? this.props.color : "";
    }

    render() {
        return <div className={"card rounded shadow-sm py-2 mb-4 " + this.getBackgroundColor()}>
            {this.props.children}
        </div>
    }
}
