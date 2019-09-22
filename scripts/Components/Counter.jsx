import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: props.count
        };

        this.onIncrease = this.onIncrease.bind(this);
        this.onDecrease = this.onDecrease.bind(this);
        this.onReset = this.onReset.bind(this);
    }

    onIncrease() {
        this.setState( {
            count: this.state.count + 1
        })
    }

    onDecrease() {
        this.setState({
            count: this.state.count - 1
        })
    }

    onReset() {
        this.setState({
            count: 0
        })
    }

    render() {
        const  {msg}  = this.props;
        const onIncrease = this.onIncrease;
        const onDecrease = this.onDecrease;
        const onReset = this.onReset;
        return (
            <>
                <h4>{ msg }</h4>
                <h2>{this.state.count}</h2>
                <button onClick={ onIncrease }>increase</button>
                <button onClick={ onDecrease }>decrease</button>
                <button onClick={ onReset }>reset</button>
            </>
        )
    }
}

export default Counter;