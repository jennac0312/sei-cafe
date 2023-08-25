import { Component } from "react";
import { signUp } from '../../utilities/users-service'


export default class SignUpForm extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        confirm: "",
        error: ""
    }

    // disable = this.state.password !== this.state.confirm;
    // cant const/let here... variables here are global scoped..
        // if we dont let or const js auto assumes "var"

    // handleChange(e){
    //     // class component  bind
    //     this.setState({}) // js will refer to the document. not this object.. grandfather DOM
    //     // if we dont bind, this will refer to document object.
    //     // have to bind to this parent component (  )
    //     // thank you es6 for giving us let/const/arrowfunctions
    // }

    // in summary, in class components, use arrow functions for automatic binding
    
    handleChange = ( evt ) => {
        // setState function inherited from component - sola flames thanks
        this.setState({
            [evt.target.name] : evt.target.value,
            // dynamic way of updating our state depending on the event object that we're currently on
            // we are dynamically using name
            // array brackets bc cant have special symbols in keys of objects ( periods ) (3:00 ish)
            // name attribute : value attribute (which refrences the this.state.**attribute**)
            error: ""
        })
    }

    handleSubmit = async ( evt ) => {
        evt.preventDefault()
        // alert( JSON.stringify(this.state) )

        try {
            // We don't want to send the 'error' or 'confirm' property,
            // so let's make a copy of the state object, then delete them
            const newFormData = { ...this.state };
            delete newFormData.error;
            delete newFormData.confirm;
            // or
            // const {name, email, password} = formData
        
            const user = await signUp(this.state)
            console.log(user)
          } catch(error) {
            // An error occurred
            this.setState({error: 'Sign Up Failed - Try Again'})
          }
    }

    render(){
        // need render method in class components
        const disable = this.state.password !== this.state.confirm;
            // for disable attribute on sign up button

        // in class components there is popular memory leakage error... this can be caused when variables are outside of render..

        // keep variables inside render for encapsulation purposes
        return (
            <div>
                <div className="form-container">
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                    {/* onChange is automatically passing the event to handleChange... */}
                    <label>Email</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                    <label>Password</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                    <label>Confirm</label>
                    <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                    <button type="submit" disabled={disable}>SIGN UP</button>
                </form>
                </div>
            <p className="error-message">&nbsp;{this.state.error}</p>
          </div>
        )
    }

}