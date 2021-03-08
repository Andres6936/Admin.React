import React from 'react';

/**
 * Wrapper around of Card component Bootstrap 5.
 *
 * @param {string} className (Optional) Extra class for this card.
 * @param {string} color (Optional) Set the background color for this Card.
 */
export class Card extends React.Component {

    /**
     * Avoid the pollution of className; Generally the use of default
     * properties that the user hasn't defined (nonexistent value) produce
     * 'undefined' string in the class property of DOM, producing a
     * pollution of className.
     *
     * @return {string} The value of background color for this card.
     *  Empty string if not is defined.
     */
    getBackgroundColor() {
        // The empty string avoid the added 'undefined' to component class.
        return this.props.color ? this.props.color : "";
    }

    /**
     * Avoid the pollution of className; Generally the use of default
     * properties that the user hasn't defined (nonexistent value) produce
     * 'undefined' string in the class property of DOM, producing a
     * pollution of className.
     *
     * @return {string} The value of background color for this card.
     *  Empty string if not is defined.
     */
    getExtraClass() {
        // The empty string avoid the added 'undefined' to component class.
        return this.props.className ? this.props.className : "";
    }

    render() {
        return <div className={"card rounded shadow-sm py-2 mb-4 " +
        this.getExtraClass() + " " + this.getBackgroundColor()}>
            {this.props.children}
        </div>
    }
}
