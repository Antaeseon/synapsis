const mongoose = require('mongoose')
const Schema = mongoose.Schema

const matchList = new Schema({
    myteam : { type : String },
    counterteam : { type: String},
    date:{type:String},
    sportstype: {type:String},
    isAdmit : {type:Boolean}
});



module.exports = mongoose.model('matchList', matchList)