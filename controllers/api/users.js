const create = ( req, res ) => {
    // req from front end sign up form
    res.json({
        user: {
            name: req.body.name,
            email: req.body.email
        }
    })

}

module.exports = {
    create
}