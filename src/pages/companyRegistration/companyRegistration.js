import React from 'react';
import './companyRegistration.css';
import Input from './../../component/Input/input';
import Select from './../../component/select/select';
import Button from './../../component/Button/button';


export default class CompanyRegistration extends React.Component {
    render () {
        const inputArray = [
            {
                key: 1,
                type:"input",
                typename: "text",
                classname: "input-container",
                placeholdervalue: "Enter your company name"
            },
            {
                key: 2,
                type:"input",
                typename: "url",
                classname: "input-container",
                placeholdervalue: "Enter your company website"
            },
            {
                key: 3,
                type: "select",
                classname: "input-container"
            },
            {
                key: 4,
                type:"input",
                typename: "text",
                classname: "input-container",
                placeholdervalue: "Enter your firstname"
            },
            {
                key: 5,
                type:"input",
                typename: "text",
                classname: "input-container",
                placeholdervalue: "Enter your lastname"
            },
            {
                key: 6,
                type:"input",
                typename: "email",
                classname: "input-container",
                placeholdervalue: "Enter your email id"
            },
            {
                key: 7,
                type:"input",
                typename: "password",
                classname: "input-container",
                placeholdervalue: "Enter your password"
            },
            {
                key: 8,
                type:"input",
                typename: "password",
                classname: "input-container",
                placeholdervalue: "Enter your confirm password"
            },
            {
                key: 9,
                type: "button",
                typename: "submit",
                classname: "button-container",
                buttonName: "Submit"
            }

        ];

        const FormElementElements = inputArray.map(FormElement => {
            if(FormElement.key === 3) {
                return (<Select key={FormElement.key} classname= {FormElement.classname} />)
            } else if(FormElement.key === 9) {
                return (<Button key={FormElement.key} typename={FormElement.typename} buttonName={FormElement.buttonName}  classname= {FormElement.classname} />)
            } else {
                return (<Input key={FormElement.key} typename={FormElement.typename} classname= {FormElement.classname} placeholdervalue={FormElement.placeholdervalue} />)
            }
        })
        return (
            <div>
                <div className="form-heading">General Information</div>
                <form className="form-container">
                    {FormElementElements}
                    
                
                    {/* 
                    
                    <div className="input-container">
                        <input type="text" placeholder="Enter your firstname" />
                    </div>
                    <div className="input-container">
                        <input type="text" placeholder="Enter your lastname" />
                    </div>
                    <div className="input-container">
                        <input type="text" placeholder="Enter your email" />
                    </div>
                    <div className="input-container">
                        <input type="text" placeholder="Enter your password" />
                    </div>
                    <div className="input-container">
                        <input type="text" placeholder="Enter your confirm password" />
                    </div>

                    <div className="button-container">
                        <button type="submit">Submit</button>
                    </div> */}
                </form>
            </div>
            

        )
    }
}