import React, { Component } from 'react';

class TodoItems extends Component {
    getStyle(){
        return(
            {
                display: 'flex',
                margin:'5px',
                backgroundColor: 'red',
                textDecoration: this.props.items.completed ? 'line-through' : 'none'
            }
        )
        
    }
    render() {
        return (
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={this.props.handleChange.bind(this, this.props.items.id)} />
                <p> { this.props.items.title } </p>
                <button onClick={this.props.deleteItem.bind(this, this.props.items.id)}>X</button>
            </div>
        );
    }
}

export default TodoItems;