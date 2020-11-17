import React, { Component } from 'react'
import TodoItems from './todoItems'
import PropTypes from 'prop-types'

class Todos extends Component{
    render(){
        const { myTodo } = this.props
        // return ( <div> 
        //     { console.log(myTodo) }
        // </div>
        // );
        return myTodo.map(todo => 
        <TodoItems items={ todo } key = {todo.id} handleChange={ this.props.handleChange } deleteItem={this.props.deleteItem} />
        
        )
    }
}

Todos.propTypes ={
    myTodo: PropTypes.array.isRequired
} 
export default Todos