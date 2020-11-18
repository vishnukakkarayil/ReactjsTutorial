import React, { Component } from 'react'
import './App.css';
import Todos from './components/todos'
import AddTodo from './components/addTodo'

class App extends Component{
  state = {
    todos:[
      {
        id:1,
        title:'study react',
        completed: false
      },
      {
        id:2,
        title:'study php',
        completed: true
      },
      {
        id:3,
        title:'study js',
        completed: false
      }
    ],
    name:'vishnu'
  }

  makeChange(id){
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        // if(todo.completed === true){
        console.log(todo.id)
        todo.completed = !todo.completed
      }
      return todo
    })
  })
  
  }

  deleteData(id){
    this.setState({ todos: this.state.todos.filter(dItem => dItem.id !== id)}
      // console.log(id)
    )
  }

  addToTodo(data){
    console.log('data')
  }
  render(){
    const {todos} = this.state
    return(
      <div>
        <AddTodo addToTodo={this.addToTodo.bind(this)} />
        <Todos myTodo = { todos } handleChange={this.makeChange.bind(this)} deleteItem={this.deleteData.bind(this)} />
      </div>
    )
  }
}

export default App;
