const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  id: { type: String, required: true },
  password: { type: String, required: true },
  teamName: { type: String, default: null },
  sportsCategory: { type: String, required: true },
  position: { type: String, default: "Allround" },
  isTeamLeader: { type: Boolean, required: true },
  score: { type: Number, default: 1000 },
  tempTeam: { type: String },
  admin: { type: Boolean, default: false }
});

User.statics.create = function(
  id,
  password,
  teamName,
  sportsCategory,
  position,
  isTeamLeader
) {
  const user = new this({
    id,
    password,
    teamName,
    sportsCategory,
    position,
    isTeamLeader
  });

  // return the Promise
  return user.save();
};

User.statics.findOneById = function(id) {
  return this.findOne({
    id
  }).exec();
};

User.statics.findOneByTeam = function(teamName) {
  return this.findOne({
    teamName
  }).exec();
};

// verify the password of the User documment
User.methods.verify = function(password) {
  return this.password == password;
};

User.methods.assignAdmin = function() {
  this.admin = true;
  return this.save();
};

module.exports = mongoose.model("User", User);
