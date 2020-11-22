import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component{
    render(){
        return(
            <div>
                <h1>Todo App</h1>
                <Link to='/'>Home</Link> | <Link to='/greeting'>Greeting</Link>
            </div>
        )
        
    }     
}
// const headerStyle = {
//     color: '#fff',
//     padding: '5px'
// }

export default Header