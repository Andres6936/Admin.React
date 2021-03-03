import React from 'react';

import {CardBody} from "../Component/CardBody";
import {Card} from "../Component/Card";

/**
 * @param title {string} (Require) The principal text for this component.
 * @param subtitle {string} (Require) The secondary text for this component.
 * @param backgroundColor {string} (Require) The background color for the card component.
 * @param foregroundColor {string} (Optional) The foreground color for the text.
 */
export class ColorCard extends React.Component {

    /**
     * @return {string} The value for the foreground color of text.
     */
    getForegroundColor() {
        // If the property is set for the user return it, if not return the value for default.
        return this.props.foregroundColor ? this.props.foregroundColor : "text-white";
    }

    render() {
        return (
            <Card color={this.props.backgroundColor}>
                <CardBody>
                    <p className={this.getForegroundColor() + " mb-0"}>{this.props.title}</p>
                    <p className={this.getForegroundColor() + " mb-0 small"}>{this.props.subtitle}</p>
                </CardBody>
            </Card>
        );
    }
}
