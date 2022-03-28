import React from 'react';
import ReactDOM from 'react-dom';
import { MultilineComponents } from './multiline-jsx'
import { Owl } from './variable-atributeIn-jsx'

class MyComponentClass extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello world</h1>
                <MultilineComponents/>
                <Owl/>
            </div>
        )
    }
}

ReactDOM.render(
    <MyComponentClass />,
    document.getElementById('app')
);