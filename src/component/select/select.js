import React from 'react';
import './select.css';

export default class Select extends React.Component {
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
        const optionArray = [
            {
                key: 1,
                value: "Select your Suffix"
            },
            {
                key: 2,
                value: "Miss."
            },
            {
                key: 3,
                value: "Mr."
            },
            {
                key: 4,
                value: "Mrs."
            },
        ];

        const options = optionArray.map(optionElement => {
            return (<option key={optionElement.key}>{optionElement.value}</option>)
        })
        return (
            <div className={this.props.classname}>
                <select name ={this.props.name} onChange={this.handleOnChange}>
                    {options}
                </select>
            </div>
        )
    }
}