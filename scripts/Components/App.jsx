import React, { Component } from 'react';

import Counter from "./Counter.jsx";
import List from "./List.jsx";

class App extends Component {
    constructor() {
        super();

        this.state = {
            msg: 'amount of click',
            list: [{name:'task 1'}, {name:'task 2'}, {name:'task 3'}],
            count: 0
        }
    }

    render() {
        const {msg} = this.state;
        const {list} = this.state;
        const {count} = this.state;
        return (
            <>
                <h1>Counter</h1>
                <Counter msg={msg} count={count}/>
                <List list={list}/>
            </>
        )
    }
}

export default App;