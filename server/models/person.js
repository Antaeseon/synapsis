const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Auto Increment 플러그인
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection)

const Person = new Schema({
    index:{
        type: Number,
        unique: true
    },
    user_id:{type:String},
    region:{type:String},
    category:{type:String},
    position:{type:String},
    date:{type: Date},
    time:{type:String},
    selected:{type:boolean}
})

//인덱스 자동으로 1씩 증가되도록
Person.plugin(autoIncrement.plugin,{
    model: "Person",
    field: "index",
    startAt: 1
});

Person.statics.create = function(user_id, region, category, position, date, time, selected) {
    const user = new this({
        user_id,
        region,
        category,
        position,
        date,
        time,
        selected
    })

    // return the Promise
    return user.save()
}

Person.statics.findOneById = function(user_id) {
    return this.findOne({
        user_id
    })
  }
  

//해당 id의 용병체크를 변경하는 함수
Person.methods.personselected = function(user_id){
    this.isChecked = true
}



module.exports = mongoose.model('Person', Person)