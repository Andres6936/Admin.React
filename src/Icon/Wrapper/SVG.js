import React from 'react';

/**
 * Wrapper around of SVG tag.
 */
export class SVG extends React.Component {
    render() {
        return <svg xmlns="http://www.w3.org/2000/svg" width={this.props.size || 16} height={this.props.size || 16}
                    fill="currentColor" className={this.props.className || " "} viewBox="0 0 16 16">
            {this.props.children}
        </svg>
    }
}
