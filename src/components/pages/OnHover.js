import React, { Component } from 'react';
import Counter from './Counter'

class OnHover extends Component {

    render() {
        const { count, addCount } = this.props
        return (
            <div>
                <input type="text" ref={count}></input>
                {/* <p onMouseOver = {addCount} >hovered { count > 0 ? `${count} Times` : `${count} Time`} </p> */}
                <p onMouseOver = {addCount} >hovere here </p>
            </div>
        );
    }
}

export default Counter(OnHover);