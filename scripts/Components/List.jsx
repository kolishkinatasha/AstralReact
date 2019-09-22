import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            elementList: props
        }

    }

    render() {
    const {elementList} = this.state;
        return (
            <ul>
                { elementList.list.map((item,index) => {return (<li key={index}>{item.name}</li>)}) }
            </ul>
        )
    }
}


export default List;
