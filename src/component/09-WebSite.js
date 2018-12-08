import React from 'react';

function Name(props) {
    return <h2>name : {props.name}</h2>;
}

function Link(props) {
    return <h2>
        Link: <a href={props.link}>{props.link}</a>
    </h2>;
}

export default class WebSite extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name: '百度', url: 'http://www.baidu.com'};
    }

    render() {
        return (
            <div>
                <Name name={this.state.name}/>
                <Link link={this.state.url}/>
            </div>
        );
    }


}