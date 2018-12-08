import React from 'react';

// <demo 15: 元素变量>
function Greeting(props) {
    if (props.isLogin)
        return (<h1>Welcome</h1>);
    return (<h1>please login</h1>);
}

export default class LoginControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isLogin: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState, props) => {
            return {isLogin: !prevState.isLogin}
        });
    }

    render() {

        const isLogged = this.state.isLoggedIn;
        let button = null;
        if (isLogged)
            button = <button onClick={this.handleClick}>Logout</button>;
        else
            button = <button onClick={this.handleClick}>Login</button>;
        return (
            <div>
                <Greeting isLogin={this.state.isLogin}/>
                {button}
            </div>
        );
    }
}

