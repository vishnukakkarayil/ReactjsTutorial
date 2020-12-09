import React, { Component } from 'react';
import Counter from './Counter'
class OnClick extends Component {
    

    render() {
        const { count, addCount } = this.props
        return (
            <div>
                {/* <button onClick={addCount}>Clicked { count > 0 ? `${count} times` : `${count} time` } </button> */}
                <input type="text" ref={count}></input>
                <button onClick={addCount}>Click</button>
            </div>
        );
    }
}

export default Counter(OnClick);