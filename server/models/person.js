const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Auto Increment 플러그인
const autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(mongoose.connection);

const Person = new Schema({
  index: {
    type: Number,
    unique: true
  },
  user_id: { type: String },
  teamName: { type: String },
  sportsCategory: { type: String },
  position: { type: String, default: "Allround" },
  region: { type: String },
  isChecked: { type: Boolean }
});

Person.plugin(autoIncrement.plugin, {
  model: "Person",
  field: "index",
  startAt: 1
});

Person.statics.create = function(
  user_id,
  teamName,
  sportsCategory,
  position,
  region,
  isChecked
) {
  const user = new this({
    user_id,
    teamName,
    sportsCategory,
    position,
    region,
    isChecked
  });
  return user.save();
};

// Person.statics.create = function(id, sportsCategory, position, region) {
//   const person = new this({
//     user_id,
//     teamName,
//     sportsCategory,
//     position,
//     region,
//     isChecked
//   });

//   // return the Promise
//   return person.save();
// };

//해당 id의 용병체크를 변경하는 함수
// Person.methods.personselected = function(id) {
//   this.isChecked = true;
// };

module.exports = mongoose.model("Person", Person);
