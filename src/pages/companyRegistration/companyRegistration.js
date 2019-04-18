import React from 'react';
import './companyRegistration.css';
import Input from './../../component/Input/input';
import Select from './../../component/select/select';
import Button from './../../component/Button/button';


export default class CompanyRegistration extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            companyname:"",
            companywebsite: "",
            suffix: "",
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmpassword: "",
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleOnChange (data) {
        switch(data.name) {
            case "companyname" :
            this.setStateFunc({companyname: data.value});
            break;

            case "companywebsite" :
            this.setStateFunc({companywebsite: data.value});
            break;

            case "suffix" :
            this.setStateFunc({suffix: data.value});
            break;

            case "firstname" :
            this.setStateFunc({firstname: data.value});
            break;

            case "lastname" :
            this.setStateFunc({lastname: data.value});
            break;

            case "email" :
            this.setStateFunc({email: data.value});
            break;

            case "password" :
            this.setStateFunc({password: data.value});
            break;

            case "confirmpassword" :
            this.setStateFunc({confirmpassword: data.value});
            break;
        }
        
    }

    setStateFunc = (data) => {
        this.setState(data);
    }

    handleSubmit = (event) => {
        
        console.log(this.state);
        event.preventDefault();
    }

    render () {
        const inputArray = [
            {
                key: 1,
                type:"input",
                name: "companyname",
                typename: "text",
                classname: "input-container",
                placeholdervalue: "Enter your company name",
                required: true,
                isValid: true
            },
            {
                key: 2,
                type:"input",
                name: "companywebsite",
                typename: "url",
                classname: "input-container",
                placeholdervalue: "Enter your company website",
                required: true,
                url: true,
                isValid: true
            },
            {
                key: 3,
                type: "select",
                name: "suffix",
                classname: "input-container"
            },
            {
                key: 4,
                type:"input",
                name: "firstname",
                typename: "text",
                classname: "input-container",
                placeholdervalue: "Enter your firstname"
            },
            {
                key: 5,
                type:"input",
                name: "lastname",
                typename: "text",
                classname: "input-container",
                placeholdervalue: "Enter your lastname"
            },
            {
                key: 6,
                type:"input",
                name: "email",
                typename: "email",
                classname: "input-container",
                placeholdervalue: "Enter your email id"
            },
            {
                key: 7,
                type:"input",
                name: "password",
                typename: "password",
                classname: "input-container",
                placeholdervalue: "Enter your password"
            },
            {
                key: 8,
                type:"input",
                name: "confirmpassword",
                typename: "password",
                classname: "input-container",
                placeholdervalue: "Enter your confirm password"
            },
            {
                key: 9,
                type: "button",
                typename: "submit",
                classname: "button-container",
                buttonName: "Submit",
                event: "this.handleSubmit",
                isValid: false
            }

        ];

        const FormElementElements = inputArray.map(FormElement => {
            if(FormElement.key === 3) {
                return (<Select key={FormElement.key} name={FormElement.name} classname= {FormElement.classname} onChangeHandler={this.handleOnChange} />)
            } else if(FormElement.key === 9) {
                return (<Button key={FormElement.key} typename={FormElement.typename} buttonName={FormElement.buttonName}  classname= {FormElement.classname} valid={FormElement.isValid} />)
            } else {
                return (<Input key={FormElement.key} name={FormElement.name} typename={FormElement.typename} classname= {FormElement.classname} placeholdervalue={FormElement.placeholdervalue} onChangeHandler={this.handleOnChange} required={FormElement.required} minlength={FormElement.minlength} url={FormElement.url} />)
            }
        })
        return (
            <div>
                <div className="form-heading">General Information</div>
                <form className="form-container" onSubmit={this.handleSubmit} noValidate>
                    {FormElementElements}
                </form>
            </div>
            

        )
    }
}