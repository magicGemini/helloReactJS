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
// import Clock from './component/04-Clock'
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
// import Hello from './component/06-Hello';
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
// import Clock from './component/07-Clock';
// ReactDOM.render(<Clock/>, document.getElementById("root"));

// <demo 8: 数据自顶向下流动>
// import Clock from './component/08-Clock';
// function App() {
//     return <div><Clock/><Clock/><Clock/></div>;
// }
// ReactDOM.render(<App/>, document.getElementById("root"));

// <demo 9: component.props>
// import Website from './component/09-WebSite';
// ReactDOM.render(<Website/>, document.getElementById("root"));

// <demo 11: 事件处理>
// import Toggle from './component/11-Toggle'
// ReactDOM.render(<Toggle/>, document.getElementById("root"));

// <demo 12: 为事件处理函数传参>
// import Popper from './component/12-Popper';
// ReactDOM.render(<Popper/>, document.getElementById("root"));

// <demo 13: React点击事件的bind(this) 如何传参>
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
import LoginControl from './component/15-LoginControl';
ReactDOM.render(<LoginControl/>, document.getElementById("root"));

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
// function WarningBar(props) {
//     if (!props.warn)
//         return null;
//     return (<div className="warning">Warning!!!</div>);
// }
//
// class Page extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {warn: false};
//         this.handleToggleClick = this.handleToggleClick.bind(this);
//     }
//
//     handleToggleClick() {
//         this.setState(prevState => ({warn: !prevState.warn}));
//     }
//
//     render() {
//         return (
//             <div>
//                 <WarningBar warn={this.state.warn}/>
//                 <button onClick={this.handleToggleClick}> {this.state.warn ? "hide" : "show"}</button>
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(<Page/>, document.getElementById("root"));

// <demo 18: 列表>
// function NumberList(props){
//     const numbers = props.number;
//     const itemList = numbers.map( (number) => <li>{number}</li>);
//     return <ul>{itemList}</ul>
// }
// const numbers = [1,2,3,4,5];
// ReactDOM.render(<NumberList number={numbers}/>, document.getElementById("root"));

// <demo 19: 元素的key在他的兄弟元素之间应该唯一>
// function Blog(props) {
//
//     const sidebar = (
//         <ul>
//             {props.posts.map((post) => <li key={post.id}>{post.title}</li>)}
//         </ul>
//     );
//
//     const content = props.posts.map((post)=><div key={post.id}>
//         <h3>{post.title}</h3>
//         <p>{post.content}</p>
//     </div>);
//
//     return (
//         <div>
//             {sidebar}
//             <hr/>
//             {content}
//         </div>
//     );
// }
// const posts = [
//     {id: 1, title: 'Hello world', content: 'welcome to learning react'},
//     {id: 2, title: 'Installation', content: 'You can install react from npm'}
// ];
// ReactDOM.render(<Blog posts={posts}/>, document.getElementById("root"));

// demo 20: setState
// class Counter extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {count:0};
//         this.handleClick = this.handleClick.bind(this);
//     }
//
//     handleClick(){
//         this.setState(function (state) {
//             return {count:state.count + 1}
//         })
//     }
//
//     render() {
//         return (
//             <div>
//                 <button onClick={this.handleClick}>click me!</button>
//                 <h2>count = {this.state.count}</h2>
//             </div>
//         );
//     }
// }
// ReactDOM.render(<Counter/>,document.getElementById("root"));

// <demo 21: componentDidMount>
// class Hello extends React.Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {opacity: 1.0}
//         this.descreOpacity = this.descreOpacity.bind(this);
//     }
//
//     descreOpacity(){
//         var opacity = this.state.opacity;
//         opacity -= 0.05;
//         if (opacity < 0)
//             opacity = 1.0;
//         this.setState({opacity:opacity});
//     }
//
//     componentDidMount() {
//         this.timer = setInterval(this.descreOpacity, 100);
//     }
//
//     componentWillUnmount(){
//         clearInterval(this.timer);
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1 style={{opacity: this.state.opacity}}> Hello {this.props.name}</h1>
//             </div>
//         );
//     }
//
//
// }
//
// ReactDOM.render(<Hello/>, document.getElementById("root"));

// <demo 22: ajax>





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
