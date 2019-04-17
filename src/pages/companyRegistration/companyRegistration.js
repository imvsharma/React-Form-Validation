import React from 'react';
import './companyRegistration.css';

export default class CompanyRegistration extends React.Component {

    constructor() {
        super()
    }

    render () {
        return (
            <div>
                <div className="form-heading">General Information</div>
                <form className="form-container">
                    <div className="input-container">
                        <input type="text" placeholder="Enter your company name" />
                    </div>
                    <div className="input-container">
                        <input type="text" placeholder="Enter your company website" />
                    </div>
                    <div className="input-container">
                        <select>
                            <option>Select your Suffix</option>
                            <option>Miss.</option>
                            <option>Mr.</option>
                            <option>Mrs.</option>
                        </select>
                    </div>
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
                    </div>
                </form>
            </div>
            

        )
    }
}