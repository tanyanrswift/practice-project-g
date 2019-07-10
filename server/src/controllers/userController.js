const User = require('../db/models').User;

module.exports = {
    signUp(req, res){
        const {email, password} = req.body;
        User.create({email, password})
        .then(data => {
            res.status(201).json(data);
            console.log('User successfully created')
            console.log(User)
        })
    }
}