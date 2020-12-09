import React, { Component } from 'react';
import Refwithdidmount from './RefWithDidMount';

class Refs extends Component {
    constructor(props){
        super(props)
        this.inputRef = React.createRef()
        // console.log(this.inputRef)
        // this.inputRef1 = React.createRef()
    }
    addCount = () =>{
        this.inputRef.current.value++
    }
    componentDidMount(){
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}></input>
                <button onClick={ this.addCount }>+</button>
                <div>
                    <Refwithdidmount innerRef={this.inputRef}/>
                </div>
            </div>
        );
    }
}

export default Refs;