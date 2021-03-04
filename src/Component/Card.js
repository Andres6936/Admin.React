import React from 'react';

/**
 * Wrapper around of Card component Bootstrap 5.
 *
 * @param {string} className (Optional) Extra class for this card.
 * @param {string} color (Optional) Set the background color for this Card.
 */
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
        return <div className={"card rounded shadow-sm py-2 mb-4 " +
        this.props.className + " " + this.getBackgroundColor()}>
            {this.props.children}
        </div>
    }
}
