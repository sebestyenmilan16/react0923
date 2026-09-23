import React from "react";

export default class InputEmail extends React.Component {


    handleEmailEdit = (e) => {

    }

    render() {


        return <div className="field-group">
            <label htmlFor="email">Email address</label>
            <input
                id="email"
                type="email"
                name="email"

                required

            />
            <p className="field-error" id="email-error">%error message%</p>
        </div>
    }
}