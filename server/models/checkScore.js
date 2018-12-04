const mongoose = require('mongoose')
const Schema = mongoose.Schema

const checkScore = new Schema({
    team1: {type :String, required : true},
    team2: {type :String, required : true},
    team1_score:{type :Number,required:true},
    team2_score:{type :Number, required : true},
    date:{type:Date},
    isAdmit:{type : Boolean,default:false},
})

// User.statics.create = function(id, password,teamName,sportsCategory,position,isTeamLeader) {
//     const user = new this({
//         id,
//         password,
//         teamName,
//         sportsCategory,
//         position,
//         isTeamLeader
//     })

//     // return the Promise
//     return user.save()
// }

// User.statics.findOneById = function(id) {
//     return this.findOne({
//         id
//     }).exec()
//   }

// User.statics.findOneByTeam = function(teamName){
//     return this.findOne({
//         teamName
//     }).exec()
// }

// // verify the password of the User documment
// User.methods.verify = function(password) {
//     return this.password == password
//   }


// User.methods.assignAdmin = function() {
//     this.admin = true
//     return this.save()
// }



module.exports = mongoose.model('checkScore', checkScore)