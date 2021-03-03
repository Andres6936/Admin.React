import React from 'react';

export class Footer extends React.Component {
    render() {
        return (
            <footer className={"text-center text-muted py-4 bg-white small"}>
                Copyright © Your Website {new Date().getFullYear()}
            </footer>
        );
    }
}
