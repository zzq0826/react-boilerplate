import React, {Component} from 'react';
import {connect} from 'react-redux';
import {increment, decrement, reset, add} from "actions";

class Test extends Component {
    constructor(props){
        super(props)
    }
    
    componentDidMount(){
    }

    handlerIncrement = () => {
        this.props.increment()
    }

    handlerdDecrement = () => {
        this.props.decrement()
    }

    handlerReset = () => {
        this.props.reset()
    }

    handlerAdd = () => {
        const num = Math.floor(Math.random()*10);
        this.props.add(num)
    }
    
    render() {
        const { test } = this.props;
        return (
            <div>
                this is test~!
                <p>number: { test.number }</p>
                <p>time: { test.time }</p>
                <button onClick={this.handlerIncrement}>increment</button>
                <button onClick={this.handlerdDecrement}>decrement</button>
                <button onClick={this.handlerReset}>reset</button>
                <button onClick={this.handlerAdd}>add</button>
            </div>
        )
    }
}

export default connect((state) => ({test: state.test}), {increment, decrement, reset, add})(Test);
