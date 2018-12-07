import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// <demo 1: react项目构造>
// import App from './App';
// ReactDOM.render(<App />, document.getElementById('root'));

// <demo 2：react的render渲染方法>
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

// <demo 4: react.component组件>
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

// <demo 6: Component的嵌套>
// function Name(props) {
//     return <h1>name : {props.name}</h1>
// }
// function Nickname(props) {
//     return <h1>nickname : {props.nickname}</h1>
// }
// function Title(props){
//     return <div>
//         <Name name="Jim Green"/>
//         <Nickname nickname="jim"/>
//     </div>
// }
// ReactDOM.render(<Title/>, document.getElementById("root"));

// <demo 7: component的state和生命周期函数>
// class Clock extends React.Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             date: new Date()
//         };
//     }
//     // 当Clock组件第一次加载到DOM中的时候，生成定时器，这在React中被称为挂载
//     componentDidMount() {
//         this.timerId = setInterval(() => this.tick(), 1000);
//     }
//     // 当Clock生成的这个DOM被移除的时候，想要清除定时器，这在React中被称为卸载
//     componentWillUnmount() {
//         clearInterval(this.timerId);
//     }
//
//     tick() {
//         this.setState({date: new Date()});
//     }
//
//     render() {
//         return <div>
//             <h1>Clock</h1>
//             <h2>Time: {this.state.date.toLocaleDateString()} - {this.state.date.toLocaleTimeString()}</h2>
//         </div>;
//     }
// }
// ReactDOM.render(<Clock/>, document.getElementById("root"));

// <demo 8: 数据自顶向下流动>
// function FormattedDate(props) {
//     return <h2>datetime is {props.date.toLocaleDateString()} - {props.date.toLocaleTimeString()}.</h2>;
// }
//
// class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             date: new Date()
//         };
//     }
//     componentDidMount() {
//         this.timerId = setInterval(() => {
//             this.setState({date: new Date()});
//         }, parseInt(Math.random() * 3) * 1000);
//     }
//     componentWillUnmount() {
//         clearInterval(this.timerId);
//     }
//     render() {
//         return <div>
//             <h1>Hello</h1>
//             <FormattedDate date={this.state.date}/>
//         </div>;
//     }
// }
// function App() {
//     return <div><Clock/><Clock/><Clock/></div>;
// }
// ReactDOM.render(<App/>, document.getElementById("root"));

// <demo 9: component.props>
// class Name extends React.Component {
//     render() {
//         return <h1>Hello {this.props.name}</h1>
//     }
// }
//
// class Link extends React.Component {
//     render() {
//         return (
//             <a href={this.props.site}>{this.props.site}</a>
//         );
//     }
// }
//
// class Website extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: 'John',
//             site: 'www.demo.com'
//         }
//     }
//
//     render() {
//         return (
//             <div>
//                 <Name name={this.state.name}/>
//                 <Link site={this.state.site}/>
//             </div>
//         );
//     }
// }
// ReactDOM.render(<Website/>, document.getElementById("root"));


// demo10: propType验证
// TODO
// class Title extends React.Component{
//     render(){
//         return <h1>Hello {this.props.title}</h1>;
//     }
// }
// Title.propTypes = {
//     title: React.PropTypes.string.isRequired,
// }
// ReactDOM.render(<Title title="123123123"/>,document.getElementById("root"));

// <demo 11: 事件处理>
// class Toggle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {isToggleOn: true};
//         this.handleClick = this.handleClick.bind(this);
//     }
//
//     handleClick() {
//         this.setState((prevState => ({
//             isToggleOn: !prevState.isToggleOn
//         })));
//     }
//
//     render() {
//         return (
//             <div onClick={this.handleClick}>
//                 <button>{this.state.isToggleOn ? "ON" : 'OFF'}</button>
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(<Toggle/>, document.getElementById("root"));


// <demo 12: 为事件处理函数传参>
// class Popper extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {name: 'Hello world'};
//     }
//
//     preventPop(name, e) {
//         e.preventDefault();
//         alert(name);
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>Hello</h1>
//                 {/*1. 通过箭头函数的方式，事件对象必须显式的进行传递*/}
//                 <a href="www.baidu.com" onClick={(e) => {
//                     this.preventPop(this.state.name, e)
//                 }}>Click</a>
//                 {/*2. 通过 bind 的方式，事件对象以及更多的参数将会被隐式的进行传递,在类组件中定义的监听函数，事件对象e要排在所传递参数的后面*/}
//                 {/*<a href="www.baidu.com" onClick={this.preventPop.bind(this,this.state.name)}>Click</a>*/}
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(<Popper/>, document.getElementById("root"));

// <demo 13: React点击事件的 bind(this) 如何传参>
// class Ex extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             name:'Stupid Dog'
//         }
//     }
//
//     one(para){
//         alert('parameter: '+ para);
//     }
//
//     render() {
//         return (
//             <div>
//                 <button onClick={this.one.bind(this,'AABB')}>mm</button>
//                 <button onClick={this.one.bind(this,this.state.name)}>name</button>
//             </div>
//         );
//     }
// }
// ReactDOM.render(<Ex/>,document.getElementById("root"));

// <demo 14: 条件渲染>
// function Greeting(props){
//     const isLoggedIn = props.isLoggedIn;
//
//     if (isLoggedIn){
//         return <h1>Welcome</h1>;
//     }
//     return <h1>Register</h1>;
// }
// ReactDOM.render(<Greeting isLoggedIn={true}/>, document.getElementById("root"));

// <demo 15: 元素变量>
// function Greeting(props) {
//     if (props.isLoggedIn)
//         return <h1>Welcome</h1>;
//     return <h1>Please Loggin</h1>;
// }
//
// class LoginControl extends React.Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {isLoggedIn: false}
//         this.handleLoginClick = this.handleLoginClick.bind(this);
//         this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     }
//
//     handleLoginClick() {
//         this.setState({isLoggedIn: true});
//     }
//
//     handleLogoutClick() {
//         this.setState({isLoggedIn: false});
//     }
//
//     render() {
//         const isLogged = this.state.isLoggedIn;
//         let button = null;
//         if (isLogged)
//             button = <button onClick={this.handleLogoutClick}>Logout</button>;
//         else
//             button = <button onClick={this.handleLoginClick}>Login</button>;
//         return (
//             <div>
//                 <Greeting isLoggedIn={this.state.isLoggedIn}/>
//                 {button}
//             </div>
//         );
//     }
//
// }
//
// ReactDOM.render(<LoginControl/>, document.getElementById("root"));

// <demo 16: 与运算符 &&>
// function MailBox(props) {
//     return (
//         <div>
//             <h1>Hello~~~</h1>
//             {
//                 props.unReadMessages.length > 0 &&
//                 <h2>
//                    you have {props.unReadMessages.length} messages not been read.
//                 </h2>
//             }
//         </div>
//     );
// }
// const messages = ["React", "Re:React", "Re: Re: React"];
// ReactDOM.render(<MailBox unReadMessages={messages}/>, document.getElementById("root"));

// <demo 17: 阻止组件渲染>
function WarningBar(props) {
    if (!props.warn)
        return null;
    return (<div className="warning">Warning!!!</div>);
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {warn: false};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(prevState => ({warn: !prevState.warn}));
    }

    render() {
        return (
            <div>
                <WarningBar warn={this.state.warn}/>
                <button onClick={this.handleToggleClick}> {this.state.warn ? "hide" : "show"}</button>
            </div>
        );
    }
}

ReactDOM.render(<Page/>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
