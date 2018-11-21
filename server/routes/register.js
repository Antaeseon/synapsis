const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/', function(req, res, next) {

    const {id,
        password,
        teamName,
        sportsCategory,
        position,
        isTeamLeader } = req.body
    let newUser = null

    // create a new user if does not exist
    const create = (user) => {
        if(user) {
            console.log(teamName)
            return Promise.reject('id exists')
        }else if(!isTeamLeader&&User.findOneByTeam(teamName)){
            return Promise.reject('team not exist')
        }
         else {
            return User.create(id, password,teamName,sportsCategory,position,isTeamLeader)
        }
    }

    // count the number of the user
    const count = (user) => {
        newUser = user
        return User.count({}).exec()
    }

    // assign admin if count is 1
    const assign = (count) => {
        console.log('assign')
        if(count === 1) {
            return newUser.assignAdmin()
        } else {
            // if not, return a promise that returns false
            return Promise.resolve(false)
        }
    }

    // respond to the client
    const respond = (isAdmin) => {
        console.log('respond!!')
        res.json({
            message: 'registered successfully',
            admin: isAdmin ? true : false
        })
    }

    // run when there is an error (id exists)
    const onError = (error) => {
        console.log(error)
        res.status(405).json({
            message: error
        })
    }

    // check id duplication
    User.findOneById(id)
    .then(create)
    .then(count)
    .then(assign)
    .then(respond)
    .catch(onError)
})

    module.exports = router;
