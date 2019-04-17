import React from 'react';
import './button.css';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmit(event) {
        //event.preventDefault();
        this.props.click(event);
    }


    render () {
        return (
            <div className={this.props.classname}>
                <button type={this.props.typename} onSubmit={this.onSubmit}>{this.props.buttonName}</button>
            </div>
        )
    }
}