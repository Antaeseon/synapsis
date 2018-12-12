const mongoose = require('mongoose')
const Schema = mongoose.Schema

const checkScore = new Schema({
    team1: {type :String, required : true},
    team2: {type :String, required : true},
    team1_score:{type :Number,required:true},
    team2_score:{type :Number, required : true},
    date:{type:Date},
    isAdmit:{type : Number,default:0},
})

checkScore.statics.findByTeamName = function(teamName) {
    console.log('들어옴',teamName)
    return this.find({
        team2:teamName
    }).exec()
  }


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