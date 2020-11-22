import React, { Component } from 'react'
import { v4 as uuid } from 'uuid'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'

import './App.css';
import Header from './components/Header'
import Todos from './components/todos'
import AddTodo from './components/addTodo'
import Greeting from './components/Greeting'

class App extends Component{
  state = {
    todos:[],
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

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(resp => this.setState({todos: resp.data}))
    .catch(err=>{
      alert(err)
      console.log(err)
    })
  }

  deleteData(id){
    this.setState({ todos: this.state.todos.filter(dItem => dItem.id !== id)}
      // console.log(id)
    )
  }

  addToTodo(title){
    axios.post('https://jsonplaceholder.typicode.com/todos?_limit=10',{
      title,
      completed: false
    }).then(res => this.setState({todos: [...this.state.todos,res.data]}))
    // const newItem = {
    //   id:uuid(),
    //   title,
    //   completed: false
    // }
    // this.setState({ todos: [...this.state.todos, newItem]
    // })
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
