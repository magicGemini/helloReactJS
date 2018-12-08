import React from 'react';

export default class extends React.Component {

    constructor() {
        super();
        this.state = {date: new Date()};
    }

    // 当Clock组件第一次加载到DOM中的时候，生成定时器，这在React中被称为挂载
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({date: new Date()})
        }, 1000);
    }
    // 当Clock生成的这个DOM被移除的时候，想要清除定时器，这在React中被称为卸载
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div>
                <h1>Clock</h1>
                <h2>time: {this.state.date.toLocaleDateString()} - {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}