import React, { Component } from 'react';

class Greeting extends Component {
    render() {
        const { text, match:{params}} = this.props
        const { name } = params
        return (
            
            <div>
                { console.log(text) }
                <p> {text} {name} </p>
            </div>
        );
    }
}

export default Greeting;