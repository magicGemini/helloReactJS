import React from 'react';

function DateFormatter(props){
    return <h2>time : {props.date.toLocaleDateString()} - {props.date.toLocaleTimeString()}</h2>
}

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date:new Date()};
    }

    componentDidMount(){
        this.timer = setInterval(()=>{this.setState({date:new Date()})},(Math.random() * 3) * 200);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render() {
        return (
            <div>
                <h1>08-Clock</h1>
                <DateFormatter date={this.state.date} />
            </div>
        );
    }
}