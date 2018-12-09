const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Person = new Schema({
    index:{
        type: Number,
        unique: true
    },
    user_name:{type:String},
    region:{type:String},
    
})

Person.statics.create = function(id, sportsCategory, position, region) {
    const user = new this({
        id,
        sportsCategory,
        position,
        region
    })

    // return the Promise
    return user.save()
}

Person.statics.findOneById = function(id) {
    return this.findOne({
        id
    }).exec()
  }
  

//해당 id의 용병체크를 변경하는 함수
Person.methods.personselected = function(id){
    this.isChecked = true
}



module.exports = mongoose.model('Person', Person)