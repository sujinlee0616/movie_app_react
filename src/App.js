import React from 'react';
import PropTypes from "prop-types";


// #3 State
class App extends React.Component{ // <== class Component 
    state = { // state에 바꾸고 싶은 데이터를 넣는다. 
        count: 0
    };
    render(){
    return <h1>The number is: {this.state.count}</h1>
    }
}

export default App;
