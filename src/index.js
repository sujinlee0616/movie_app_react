import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 
// import App_old from './App_old';  // #2 JSX & Props 필기 및 실습

 ReactDOM.render(<App />, document.getElementById('root'));  
// react application은 하나의 component만을 렌더링해야 한다.
// ==> ex) ReactDOM.render(<App /><Potato />, document.getElementById('root'));  // Error.

// #2 JSX & Props 필기 및 실습
// ReactDOM.render(<App_old />, document.getElementById('root'));  

// <App/>: 컴포넌트. 

// <컴포넌트>: HTML을 반환하는 함수. ex) App.js의 function App(){...}
// react는 컴포넌트를 사용해서 HTML처럼 작성할 수 있게 해준다. 

// <JSX>: javascript + HTML. 
// ex) const element = <h1>Hello, world!</h1>;

