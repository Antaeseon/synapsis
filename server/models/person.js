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
  time: { type: String },
  date: { type: String },
  sportsCategory: { type: String },
  position: { type: String, default: "Allround" },
  region: { type: String },
  comment: { type: String },
  isChecked: { type: Boolean }
});

Person.plugin(autoIncrement.plugin, {
  model: "Person",
  field: "index",
  startAt: 1
});


module.exports = mongoose.model("Person", Person);
