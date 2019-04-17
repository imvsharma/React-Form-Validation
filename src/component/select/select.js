import React from 'react';
import './select.css';

export default class Select extends React.Component {
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
                <select>
                    {options}
                </select>
            </div>
        )
    }
}