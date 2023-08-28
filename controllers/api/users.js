const User = require('../../models/User') // bring in model
const jwt = require("jsonwebtoken")

const create = async ( req, res ) => {
    // req from front end sign up form
    // res.send( req.body )
    // res.json({
    //     user: {
    //         name: req.body.name,
    //         email: req.body.email
    //     }
    // })

    // create jwt ( with user prop inside payload containing user  )
    
    try {
        // add user to db
        // using mongo method to act upon model
        const user = await User.create( req.body )
        //  address the variable that's sent with user 

        // token is a string
        const token = createJWT( user )

        res.json( token )
    } catch (error) {
        // Client will check for non-2xx status code
        // 400 = Bad Request
        res.status(400).json(error)
    }
}

/*-- Helper Functions --*/

function createJWT(user) {
    // sign method in the jsonwebtoken library is used to create JWTs
    return jwt.sign(
      // data payload
      { user },
      process.env.SECRET, // secret passcode .. signature
      { expiresIn: '24h' } //sign out after this
    );
  }

module.exports = {
    create
}