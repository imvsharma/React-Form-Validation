import React from 'react';
import './input.css';

export default class Input extends React.Component {

    constructor (props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.state = {
            inputValid: true,
            errorMessage: ""
        }
    }

    handleOnChange(event) {
        let data = {
            name: event.target.name,
            value: event.target.value
        }

        if(this.props && this.props.typename=== 'text') {
            console.log('require');
            if(data.value.length<1) {
                this.setState({
                    inputValid: false,
                    errorMessage: `${data.name} is required.`
                })
            } else {
                this.setState({
                    inputValid: true
                })
            } 
        } else if(this.props && this.props.typename === 'url') {
            console.log('url');
            var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
            var regex = new RegExp(expression);
            console.log(regex.test(data.value))
            if(data.value.length<1) {
                this.setState({
                    inputValid: false,
                    errorMessage: `${data.name} is required.`
                })
            } else if(data.value.length> 1 && regex.test(data.value)){
                console.log('regex')
                this.setState({
                    inputValid: false,
                    errorMessage: `${data.name} must be valid url.`
                })
            } else {
                this.setState({
                    inputValid: true
                })
            }
        }

        
        if(this.props && this.props.onChangeHandler) {
            this.props.onChangeHandler(data);
        }
    }
    
    render () {
        return (
            <React.Fragment>
                <div className={this.state.inputValid?this.props.classname:'error-input-container' }>
                    <input 
                        name ={this.props.name} 
                        type={this.props.typename} 
                        placeholder={this.props.placeholdervalue} 
                        onBlur={this.handleOnChange}
                        required={this.props.required}
                        minLength={this.props && this.props.minlength}
                         />
                </div>
                {(!this.state.inputValid)&& <div className="error-message">{this.state.errorMessage}</div>}
                
            </React.Fragment>
        )
    }
}