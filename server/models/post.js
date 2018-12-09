const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Auto Increment 플러그인
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection)


const Post = new Schema({
    //id: {type :Number, required : true},
    index: {
         type: Number,
         unique: true
    },
    user_id: {type :String },
    title: {type :String },
    context: {type :String},
    date: {type :Date},
    count: {type :Number, default: 0}
})

// 인덱스 자동으로 1씩 증가되도록..
Post.plugin(autoIncrement.plugin, {
    model: "Post",
    field: "index",
    startAt: 1
});

Post.statics.create = function(user_id, title, context) {
    const user = new this({
        user_id,
        title,
        context,
        date
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