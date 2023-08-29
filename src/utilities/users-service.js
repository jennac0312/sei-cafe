// Import all named exports attached to a usersAPI object
// This syntax can be helpful documenting where the methods come from
import * as usersAPI from './users-api'

export async function signUp( userData ) {
     // Delegate the network request code to the users-api.js API module
    // which will ultimately return a JSON Web Token (JWT)
    console.log('1')
    const token = await usersAPI.signUp( userData )
    console.log('2')

    //  save token to local storage with a key of token
    localStorage.setItem( 'token', token ) // persist data and save to local storage
    //  Local Storage only stores and retrieves strings
    console.log( 'TOKEN', token )

    return token // to signUpForm where function is being called

    //  We have not used a try/catch block because any error will propagate up to the "consumer" of the service - in this case the consumer is the handleSubmitmethod in the <FunctionalSignUpForm> component
}

export function getToken(){
    // getItem from local storage.. if no string = null
    const token = localStorage.getItem('token')

    if( !token ) return null // no user to set into state. function ends everything else is an else statment


    const payload = JSON.parse( atob( token.split('.')[1] ) ) // atob is decoder - shoutout hu
    // split on period, grab 1st index. which is payload data

    // A JWT's exp is expressed in seconds, not milliseconds, so convert
    if( payload.exp < Date.now() / 1000 ) {
        // Token has expired - remove it from localStorage
        localStorage.removeItem('token');
        return null;
    }

    return token // we want to pull payload out from token so return token to front end
}

export function getUser() {
    const token = getToken();
    // If there's a token, return the user in the payload, otherwise return null
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}


export const logOut = () => {
    localStorage.removeItem('token')
}

export const login = async ( credentials ) => {
    const token = await usersAPI.login( credentials ) //credentials from form

    // save token to local storage
    localStorage.setItem( 'token', token )

    return getUser()
}
// const token = await usersAPI.signUp(userData )