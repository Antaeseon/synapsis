const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Team = new Schema({
  team_name: {
    type: String,
    required: true
  },
  team_member: [String],
  win: {
    type: Number,
    default: 0
  },
  lose: {
    type: Number,
    default: 0
  },
  point: {
    type: Number,
    default: 1000
  },
  personList: [String] // 용병 리스트
});

Team.statics.create = function(team_name, id) {
  const team = new this({
    team_name
  });
  team.team_member.push(id);
  // return the Promise
  return team.save();
};

Team.statics.findOneByTeamName = function(team_name) {
  return this.findOne({
    team_name
  }).exec();
};

//   Team.statics.findOneByTeam = function(teamName){
//     return this.findOne({
//         teamName
//     }).exec()
// }

// // verify the password of the User documment
// Team.methods.verify = function(password) {
//     return this.password == password
//   }

//   Team.methods.assignAdmin = function() {
//     this.admin = true
//     return this.save()
// }

module.exports = mongoose.model("Team", Team);
