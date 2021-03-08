import React from 'react';

/**
 * @param {string} colorBar (Required) The color of bar element.
 * @param {number} percentage (Required) The percentage of this Progress bar. (Range: 0 to 100)
 */
export class Progress extends React.Component {
    render() {
        return (
            <div className="progress mb-3">
                <div className={"progress-bar " + this.props.colorBar} role="progressbar"
                     style={{width: this.props.percentage + '%'}}
                     aria-valuenow={this.props.percentage} aria-valuemin="0" aria-valuemax="100">

                </div>
            </div>
        );
    }
}
