import React from "react";
import InputEmail from "./InputEmail";
import InputPassword from "./InputPassword";

export default class LoginForm extends React.Component {

    state = {
        email: "",
        password: ""
    }

    setEmail = (email) =>{
        console.log("My InputEmail child sent me a new email: ", email);
        
        this.setState({email})
        
    }

    handleSubmit = (e) => {
        e.preventDefault()

        // TODO
    }

    render() {


        return <div className="form-area">
            <form onSubmit={this.handleSubmit} noValidate>
                <InputEmail onEmailChange={this.setEmail} />
                <InputPassword />
                <button className="submit-button" type="submit">
                    Sign in
                </button>
            </form>

                <p className="form-message success-message" role="status">
                    %Success message% Demo sign-in ready.
                </p>

        </div>
    }
}