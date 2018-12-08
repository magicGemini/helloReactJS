import React from 'react';

export default class Clock extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello~~~</h1>
                <h2>date : {this.props.date.toLocaleDateString()}</h2>
            </div>
        );
    }
}