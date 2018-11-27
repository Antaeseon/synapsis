const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema({
    //id: {type :Number, required : true},
    user_id: {type :String, required: true},
    title: {type :String,default:null, required: true},
    context: {type :String, default: null, required: true},
    date: {type :Date},
    count: {type :Number, default: 0}
})

Post.statics.create = function(user_id, title, context) {
    const user = new this({
        user_id,
        title,
        context,
        date = '2018-11-27'
    })

    // return the Promise
    return user.save()
}

Post.statics.findOneById = function(user_id) {
    return this.findOne({
        user_id
    })
  }

// Post.statics.findOneByTeam = function(teamName){
//     return this.findOne({
//         teamName
//     }).exec()
// }

// // verify the password of the User documment
// Post.methods.verify = function(password) {
//     return this.password == password
//   }


// Post.methods.assignAdmin = function() {
//     this.admin = true
//     return this.save()
// }



module.exports = mongoose.model('Post', Post)