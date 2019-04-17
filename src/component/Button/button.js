import React from 'react';
import './button.css';

export default class Button extends React.Component {
    render () {
        return (
            <div className={this.props.classname}>
                <button type={this.props.typename}>{this.props.buttonName}</button>
            </div>
        )
    }
}