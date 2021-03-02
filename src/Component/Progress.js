import React from 'react';

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
