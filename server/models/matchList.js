const mongoose = require('mongoose')
const Schema = mongoose.Schema

const matchList = new Schema({
    myteam : { type : String,default:null},
    counterteam : { type: String,default:null},
    date:{type:String},
    location:{type:String},
    isAdmit : {type:Boolean,default:false}
});



module.exports = mongoose.model('matchList', matchList)