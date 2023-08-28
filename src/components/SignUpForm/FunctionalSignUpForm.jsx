import { useEffect, useState } from "react"
import { signUp } from '../../utilities/users-service'

const FunctionalSignUpForm = () => {

    const [ formData, setFormData ] = useState({})

    // let disable

    // useEffect(() => {
       const disable = formData.password !== formData.confirm;
    // }, [state.password])


    const handleChange = ( evt ) => {
        setFormData({
            ...formData,
            [evt.target.name] : evt.target.value,
            error: ""
        })
    }

    const handleSubmit = async ( evt ) => {
        evt.preventDefault() // prevent form from being submitted to the server. ( sleight of hand that is SPA... interrupting before server )
        // alert( JSON.stringify(state) )
            // alerts are a big no no. they are aggressive. dont use them

            try {
                // what dont we want to send to server? error and confirm
                // why? they're not necessary, wont be part of our models
                // so let's make a copy of the state object, then delete them
                const newFormData = {...formData};
                delete newFormData.error;
                delete newFormData.confirm;
                
                console.log( 'inside handlesubmit', newFormData )

                const user = await signUp( newFormData )

            } catch (error) {
                setFormData({ ...formData, error: "Sign Up Failed. Try Again"})
            }
        
    }

  return (
            <div>
                <div className="form-container">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    <label>Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                    <label>Confirm</label>
                    <input type="password" name="confirm" value={formData.confirm} onChange={handleChange} required />
                    <button type="submit" disabled={disable}>SIGN UP</button>
                </form>
                </div>
            <p className="error-message">&nbsp;{formData.error}</p>
          </div>
  )
}

export default FunctionalSignUpForm
