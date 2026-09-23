import React from "react";

export default class InputPassword extends React.Component {


    handlePasswordEdit = (e) => {

    }

    render() {


        return <div className="field-group">
            <div className="label-row">
                <label htmlFor="password">Password</label>
                <span className="field-hint">8+ characters</span>
            </div>
            <input
                id="password"
                type="password"
                name="password"

                required
                minLength="8"

            />
            <p className="field-error" id="password-error">%error message%</p>
        </div>
    }
}