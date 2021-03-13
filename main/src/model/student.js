const mongoose = require('mongoose')

const schema = mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
    },
    batch_year:{
        type:Number
    },
    college_id:{
        type:Number,
        required:true
    },
    skills:[String]
},{
    timestamps:true
})

const model =   mongoose.model('student',schema);
module.exports = model;