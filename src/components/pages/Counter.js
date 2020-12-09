import React, { Component } from 'react';

const Counter = (Originalcomponent) => {
    class Newcomponent extends Component{
        constructor(props){
            super()
            this.state = {
                count : 0
            }
            this.incRef = React.createRef()
        }
        addCount = () =>{
            this.incRef.current.value++
            // this.setState(prevState => {
            //     return{count: prevState.count+1}
            // })
        }
        render(){
            // return <Originalcomponent count = {this.state.count} addCount = {this.addCount} />
            return <Originalcomponent count = {this.incRef} addCount = {this.addCount} />

        }
    }
    return Newcomponent
};

export default Counter;