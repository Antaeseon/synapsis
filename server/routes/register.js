const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Team = require('../models/team')
router.post('/', function (req, res, next) {

    let {
        id,
        password,
        teamName,
        sportsCategory,
        position,
        isTeamLeader
    } = req.body
    let newUser = null

    // create a new user if does not exist
    const create = async (user) => {
        console.log('팀 존재 유무', isTeamLeader)

        var team = await Team.findOneByTeamName(teamName)
        console.log(team)
        if (teamName == "") {
            teamName = null
        }


        if (user) { //유저가 이미 존재
            return Promise.reject('id exists')
        } else if (isTeamLeader && teamName == null) { //팀 리더인데 팀 이름을 입력하지 않은 경우
            return Promise.reject('please enter team name')
        } else if (!isTeamLeader && teamName == null) { //팀 리더가 아니고 팀입력 안한경우
            console.log('팀리더 아니고 ㅍ팀입력 안한경우')
            return User.create(id, password, teamName, sportsCategory, position, isTeamLeader)
        } else if (!isTeamLeader && !team) { // 팀리더가 아니고 팀을 입력했지만 존재하지 않는경우
            return Promise.reject('team not exist')
        } else if (isTeamLeader && team) { // 팀 리더이고 팀을 만들라고 했지만 팀이 이미 존재할경우
            return Promise.reject('teamName already exist')
        } else if (isTeamLeader && !team) {
            console.log(teamName, isTeamLeader)
            await Team.create(teamName,id)
            return User.create(id, password, teamName, sportsCategory, position, isTeamLeader)
        } else if (!isTeamLeader&&team){
            console.log('팀리더 아니고 팀이 존재할경우')
            team.team_member.push(id)
            await team.save()
            return User.create(id, password, teamName, sportsCategory, position, isTeamLeader)
        }else{
            return Promise.reject('Fail to access database')
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
        if (count === 1) {
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