import React, { Component } from 'react';

class Greeting extends Component {
    render() {
        const { text, match:{params}} = this.props
        const { name } = params
        return (
            
            <div>
                
                { console.log(text) }
                <p> abcjkgkjhkbhj </p>
            </div>
        );
    }
}

export default Greeting;