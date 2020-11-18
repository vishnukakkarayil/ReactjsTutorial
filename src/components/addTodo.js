import React, { Component } from 'react'

class AddTodo extends Component{
    constructor(props){
    super(props)
    this.addValue = this.addValue.bind(this)
    this.state = {
        addTodo : '',
        fname : ''
    }
    }

    addValue(e){
        this.setState({[e.target.name]:e.target.value})
    }


    render(){
        return(
            <form style={{ display:'flex'}} onSubmit={this.props.addToTodo}>
                <input type = "text"
                name="addTodo"
                placeholder="Add Item"
                onChange = {this.addValue}
                value={ this.state.addTodo}
                style={{ flex:'2'}}
                />

                <input type='text'
                name='fname'
                placeholder='First name'
                value = {this.state.fname}
                onChange = {this.addValue}
                />

                <input style={{flex:'1'}} type="submit" value="Add Item" />
            </form>
        )
    }
}

export default AddTodo
// const addTodo = () =>{
//     state = {

//     }
//     return(
//         <form>
//             <input type='text'
//             name = 'todoitem'
//             value=''
//             placeholder='Add todo item'
//             />
//         </form>
//     )
// }