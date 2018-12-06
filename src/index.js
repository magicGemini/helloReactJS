import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// <demo 1>
// import App from './App';
// ReactDOM.render(<App />, document.getElementById('root'));

// <demo 2>
// const element = <h1>Hello, world!</h1>;
// ReactDOM.render(element,document.getElementById("root"));
// ReactDOM.unmountComponentAtNode(document.getElementById("root"));

// <demo 3: jsx>
// const element = <div>
//     <h1> 1 + 1 = {1 + 1}</h1>
//     <h2> {1 === 1 ? "True" : "False"}</h2>
//     {/* comment in jsx */}
// </div>;
// ReactDOM.render(element, document.getElementById("root"));

// <demo 4: react.component>
// class Clock extends React.Component{
//     render() {
//         return (
//             <div>
//                 <h1>Hello world</h1>
//                 <h2>Time: {this.props.date.toLocaleTimeString()}</h2>
//             </div>
//         );
//     }
// };
// const myElement = <Clock date={new Date()}/>;
// function tick(){
//     ReactDOM.render(myElement, document.getElementById("root"));
// }
// setInterval(tick,1000);

// <demo 5: component-function-nonstatus>
// function Hello(props) {
//     return <h1>Hello {props.name}~~~</h1>
// }
// const element = <Hello name="John" />;
// ReactDOM.render(element, document.getElementById("root"));

// <demo 6: es6 React.Component>
// class Hello extends React.Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: props.name || 'John'
//         };
//         this.handleChange = this.handleChange.bind(this);
//     }
//
//     handleChange() {
//         if (this.state.name === 'John')
//             this.setState({name: 'Jane'});
//         if (this.state.name === 'Jane')
//             this.setState({name: 'John'});
//     }
//
//     render() {
//         return <div>
//             <button onClick={this.handleChange}>change</button>
//             <h1>Hello {this.state.name}</h1>
//         </div>;
//     }
// };
// ReactDOM.render(<Hello/>, document.getElementById("root"));

function Name(props) {
    return <h1>name : {props.name}</h1>
}
function Nickname(props) {
    return <h1>nickname : {props.nickname}</h1>
}
function Title(props){
    return <div>
        <Name name="Jim Green"/>
        <Nickname nickname="jim"/>
    </div>
}
ReactDOM.render(<Title/>, document.getElementById("root"));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
