import axios from "axios";

// This is the base path of the Express route we'll define
const BASE_URL = '/api/users';

export async function signUp( userData ) {
  // Fetch uses an options object as a second arg to make requests
  // other than basic GET requests, include data, headers, etc.
  // const res = await fetch( BASE_URL, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   // Fetch requires data payloads to be stringified
  //   // and assigned to a body property on the options object
  //   body: JSON.stringify( userData )
  // });

// REFACTORING TO AXIOS
    // const res = await axios( BASE_URL, {
    //     method: "POST",
    //     headers: { 'Content-Type' : 'applicaiton/json' },
    //     body: JSON.stringify( userData )
    // })

    // const res = await axios.post( BASE_URL, {
    //         // method: "POST",
    //         headers: { 'Content-Type' : 'applicaiton/json' },
    //         body: JSON.stringify( userData )
    // })

    // const res = await axios.post( BASE_URL, userData )
    const res = await axios.post( BASE_URL, userData, {
        headers: {
            'Content-Type' : 'application/json'
        }
    })

    console.log('FETCH RESPONSE FROM', BASE_URL ,res)

  // Check if request was successful
    if( res.status = 200 ) { // res.ok = status 200
    // res.json() will resolve to the JWT
    console.log('success')
    // return res.json(); // trickles its way back to the signUpForm ( goes to users-service? )
    // return res.data; axios does this automatically.. its data not json

    return (res.data) // sends token back
    } else {
        console.log('uh ohhh')
        throw new Error( 'Invalid Sign Up' );
    }
}

// fetch and axios return differently
// fetch has an ok property (and a status prop)
// axios does not have fetch property but it does have a status property

// fetch res :
// Response {type: 'basic', url: 'http://localhost:3000/api/users', redirected: false, status: 200, ok: true, …}
// body
// bodyUsed
// headers
// ok
// redirected
// status
// statusText
// type
// url

// axios res : 
// {data: {…}, status: 200, statusText: 'OK', headers: AxiosHeaders, config: {…}, …}
// config
// data
// headers
// request
// status
// statusText