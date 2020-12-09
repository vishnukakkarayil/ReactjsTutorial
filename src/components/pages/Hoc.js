import React, { Component } from 'react';
import OnClick from './OnClick'
import OnHover from './OnHover'

class Hoc extends Component {
    render() {
        return (
            <div>
                <OnClick />
                <OnHover />
            </div>
        );
    }
}

export default Hoc;