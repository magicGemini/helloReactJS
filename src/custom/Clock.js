import React from 'react';

class Clock extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        };
    }

    render() {
        return <div>
            <h1>Clock</h1>
            <h2>Time: {this.state.date.toLocaleDateString()} - {this.state.date.toLocaleTimeString()}</h2>
        </div>;
    }
}
