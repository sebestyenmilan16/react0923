import React from "react";
import InputEmail from "../InputEmail";
import InputPassword from "../InputPassword";

export default class LoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault()

        // TODO
    }

    render() {


        return <div className="form-area">
            <form onSubmit={this.handleSubmit} noValidate>
                <InputEmail />
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