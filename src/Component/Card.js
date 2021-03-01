import React from 'react';

export class Card extends React.Component {
    render() {
        return <div className={"card rounded shadow-sm py-2 mb-4"}>
            {this.props.children}
        </div>
    }
}
