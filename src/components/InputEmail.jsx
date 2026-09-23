import React from "react";

export default class InputEmail extends React.Component {

    state = {
        email: ""
    }

    handleEmailEdit = (e) => {
        console.log("handleEmailEdit e", e.nativeEvent.data) // utolsó karakter
        console.log("handleEmailEdit e.target.value", e.target?.value) //teljes e-mail
        console.log("InputEmail props", this.props)
        const email = e.target?.value // e.nativeEvent?.data helyett 
        this.setState({email})
        this.props.onEmailChange(email)

    }

    render() {


        return <div className="field-group">
            <label htmlFor="email">Email address</label>
            <input
                id="email"
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleEmailEdit}
                required

            />
            <p className="field-error" id="email-error">%error message%</p>
        </div>
    }
}