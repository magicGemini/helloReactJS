import React from 'react';

export default class Hello extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name: 'John'};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        if (this.state.name === 'John')
            this.setState({name: 'Jane'});
        if (this.state.name === 'Jane')
            this.setState({name: 'John'});
    }

    render() {
        return (
            <div>
                <button onClick={this.handleChange}>change</button>
                <h1>hello {this.state.name}</h1>
            </div>
        );
    }
}