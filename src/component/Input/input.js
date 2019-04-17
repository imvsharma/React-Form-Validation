import React from 'react';
import './input.css';

export default class Input extends React.Component {
    
    render () {
        console.log(this.props)
        return (
            
            <div className={this.props.classname}>
                <input  type={this.props.typename} placeholder={this.props.placeholdervalue} />
            </div>
        )
    }
}