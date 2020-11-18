import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TodoItems from './todoItems'

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