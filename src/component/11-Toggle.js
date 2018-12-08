import React from 'react';

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState, props) => {
            return {isToggleOn: !prevState.isToggleOn};
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.isToggleOn ? "On" : "Off"}</button>
            </div>
        );
    }

}