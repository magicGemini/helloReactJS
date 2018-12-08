import React from 'react';

// <demo 12: 为事件处理函数传参>
export default class Popper extends React.Component{

    constructor(props) {
        super(props);
        this.state = {name:"Hello~~~~"};
        // this.pop = this.pop.bind(this);
    }

    pop(name, e){
        e.preventDefault();
        alert(name);
    }

    render() {
        return (
            <div>
                {/*1. 通过箭头函数的方式，事件对象必须显式的进行传递*/}
                <a href="www.baidu.com" onClick={(e)=>{this.pop(this.state.name,e)}}>Click me</a>
                <hr />
                {/*2. 通过 bind 的方式，事件对象以及更多的参数将会被隐式的进行传递,在类组件中定义的监听函数，事件对象e要排在所传递参数的后面*/}
                <a href="aaaa" onClick={this.pop.bind(this, this.state.name)}>Click me~~</a>
            </div>
        );
    }
}