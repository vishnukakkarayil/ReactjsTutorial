import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component{
    render(){
        return(
            <div style={headerStyle}>
                <h1>Todo App</h1>
                <Link to='/'>Home</Link> | <Link to='/greeting'>Greeting</Link> | <Link to="/children">Children</Link>
                | <Link to='/refs'>Refs</Link> | <Link to='/hoc'>HOC</Link>
            </div>
        )
        
    }     
}
const headerStyle = {
    background: '#000',
    color: '#fff',
    padding: '5px'
}

export default Header