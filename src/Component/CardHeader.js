import React from 'react';

export class CardHeader extends React.Component {
    render() {
        return (
            <div className={"card-header text-primary bg-white fw-bold"}>
                {this.props.title}
                {this.props.children}
            </div>
        );
    }
}
