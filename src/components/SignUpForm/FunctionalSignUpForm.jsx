import { useEffect, useState } from "react"

const FunctionalSignUpForm = () => {

    const [ state, setState ] = useState({})

    // let disable

    // useEffect(() => {
       const disable = state.password !== state.confirm;
    // }, [state.password])


    const handleChange = ( evt ) => {
        setState({
            ...state,
            [evt.target.name] : evt.target.value,
            error: ""
        })
    }

    const handleSubmit = ( evt ) => {
        evt.preventDefault()
        alert( JSON.stringify(state) )
    }

  return (
            <div>
                <div className="form-container">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" value={state.name} onChange={handleChange} required />
                    <label>Email</label>
                    <input type="email" name="email" value={state.email} onChange={handleChange} required />
                    <label>Password</label>
                    <input type="password" name="password" value={state.password} onChange={handleChange} required />
                    <label>Confirm</label>
                    <input type="password" name="confirm" value={state.confirm} onChange={handleChange} required />
                    <button type="submit" disabled={disable}>SIGN UP</button>
                </form>
                </div>
            <p className="error-message">&nbsp;{state.error}</p>
          </div>
  )
}

export default FunctionalSignUpForm
