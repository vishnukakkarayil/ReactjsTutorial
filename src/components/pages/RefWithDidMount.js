import React, { Component } from 'react';

class refWithDidMount extends Component {
    focusInput = () =>{
        this.props.innerRef.current.focus()
    }
    render() {
        return (
            <div>
                <p onClick={this.focusInput}>Click Here</p>
                <p>Click Here1</p>
                <p>Click Here2</p>
            </div>
        );
    }
}

export default refWithDidMount;