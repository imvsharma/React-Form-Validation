import React from 'react';
import './input.css';

export default class Input extends React.Component {

    constructor (props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event) {
        let data = {
            name: event.target.name,
            value: event.target.value
        }
        
        
        if(this.props && this.props.onChangeHandler) {
            this.props.onChangeHandler(data);
        }
    }
    
    render () {
        return (
            <div className={this.props.classname}>
                <input name ={this.props.name} type={this.props.typename} placeholder={this.props.placeholdervalue} onBlur={this.handleOnChange} />
            </div>
        )
    }
}