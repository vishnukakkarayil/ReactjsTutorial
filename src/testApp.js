import React, { Component } from 'react'
import { v4 as uuid } from 'uuid'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Todos from './components/todos'
import AddTodo from './components/addTodo'
import Greeting from './components/Greeting'

class App extends Component{
  state = {
    todos:[
      {
        id:uuid(),
        title:'study react',
        completed: false
      },
      {
        id:uuid(),
        title:'study php',
        completed: true
      },
      {
        id:uuid(),
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

  addToTodo(title){
    const newItem = {
      id:uuid(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newItem]
    })
  }
  render(){
    const {todos} = this.state
    return(
      <Router>
        <div>
          <Header />
          <Route exact path='/' render={props=>(
            <>
            <AddTodo addToTodo={this.addToTodo.bind(this)} />
            <Todos myTodo = { todos } handleChange={this.makeChange.bind(this)} deleteItem={this.deleteData.bind(this)} />
            </>
          )}>
          </Route>
          <Route exact path='/greeting/name' render={ props => <Greeting text='Hello' {...props} />} />

        </div>
      </Router>
    )
  }
}

export default App;
