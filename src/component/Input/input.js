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

        if(this.props) {
            if(data.value.length<1) {
                this.setState({
                    inputValid: false,
                    errorMessage: `${data.name} is required.`
                })
            } else if(this.props.typename === 'url') {
                const expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
                const regex = new RegExp(expression);
                if(data.value.length> 1 && !regex.test(data.value)){
                    this.setState({
                        inputValid: false,
                        errorMessage: `${data.name} must be valid url.`
                    })
                } else {
                    this.setState({
                        inputValid: true
                    });
                    if(this.props && this.props.onChangeHandler) {
                        this.props.onChangeHandler(data);
                    }
                }
            } else if ( this.props.typename === 'email' ) {
                const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                const regex = new RegExp(expression);
                if(data.value.length> 1 && !regex.test(data.value)) {
                    console.log('regex')
                    this.setState({
                        inputValid: false,
                        errorMessage: `${data.name} must be valid url.`
                    })
                } else {
                    this.setState({
                        inputValid: true
                    });
                    if(this.props && this.props.onChangeHandler) {
                        this.props.onChangeHandler(data);
                    }
                }
            } else if(this.props.typename === 'password') {
                if(data.value.length> 1 && data.value.length< 4) {
                    console.log('minlength')
                    this.setState({
                        inputValid: false,
                        errorMessage: `Minimum length of ${data.name} is 4 character.`
                    })
                }else {
                    this.setState({
                        inputValid: true
                    });
                    if(this.props && this.props.onChangeHandler) {
                        this.props.onChangeHandler(data);
                    }
                }
            }

            else {
                this.setState({
                    inputValid: true
                });
                if(this.props && this.props.onChangeHandler) {
                    this.props.onChangeHandler(data);
                }
            } 
        
        }
        
        
    }
    
    render () {
        return (
            <React.Fragment>
                <div className={this.state.inputValid?this.props.classname:'error-input-container' }>
                    <input 
                        autoComplete= 'false'
                        name ={this.props.name} 
                        type={this.props.typename} 
                        placeholder={this.props.placeholdervalue} 
                        onBlur={this.handleOnChange}
                        required={this.props.required}
                        minLength={this.props && this.props.minlength}
                        maxLength={this.props && this.props.maxlength}
                         />
                </div>
                {(!this.state.inputValid)&& <div className="error-message">{this.state.errorMessage}</div>}
                
            </React.Fragment>
        )
    }
}