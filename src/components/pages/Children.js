import React, { Component } from 'react';
import Cards from './Cards'

class Children extends Component {
    constructor(props){
        super(props)
        this.state = {
            myname: "vishnu"
        }
    }
    render() {
        const {content, match:{params}} = this.props
        const {data} = params
        return (
            <Cards>
                <div>
                    {this.state.myname}
                    {content} {data}
                </div>
                <div>
                    <p>sdgsdfvgdfg</p>
                </div>
                <div>
                    {this.state.myname}
                    {content} {data}
                </div>
            </Cards>            
        );
    }
}

export default Children;