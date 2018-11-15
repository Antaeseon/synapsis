const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    id: String,
    password: String,
})

User.statics.create = function(id, password) {
    const user = new this({
        id,
        password,
        admin: { type: Boolean, default: false }
    })

    // return the Promise
    return user.save()
}

User.statics.findOneById = function(id) {
    return this.findOne({
        id
    }).exec()
  }

// verify the password of the User documment
User.methods.verify = function(password) {
    return this.password == password
  }


User.methods.assignAdmin = function() {
    this.admin = true
    return this.save()
}



module.exports = mongoose.model('User', User)