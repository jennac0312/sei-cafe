import axios from "axios";

// This is the base path of the Express route we'll define
const BASE_URL = '/api/users';

export async function signUp( userData ) {
  // Fetch uses an options object as a second arg to make requests
  // other than basic GET requests, include data, headers, etc.
//   const res = await fetch( BASE_URL, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     // Fetch requires data payloads to be stringified
//     // and assigned to a body property on the options object
//     body: JSON.stringify( userData )
//   });

// REFACTORING TO AXIOS
    // const res = await axios( BASE_URL, {
    //     method: "POST",
    //     headers: { 'Content-Type' : 'applicaiton/json' },
    //     body: JSON.stringify( userData )
    // })
    const res = await axios.post( BASE_URL, {
        // method: "POST",
        headers: { 'Content-Type' : 'applicaiton/json' },
        body: JSON.stringify( userData )
    })

  // Check if request was successful
  if( res.ok ) { // res.ok = status 200
    // res.json() will resolve to the JWT
    return res.json(); // trickles its way back to the signUpForm ( goes to users-service? )
  } else {
    throw new Error( 'Invalid Sign Up' );
  }
}