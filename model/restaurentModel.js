const mongoose = require('mongoose')
const itemSchema = require('./itemModel')

const restaurentModel = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    items:{
        type:[itemSchema],
        default:[]
    }
},
{timestamps:true}
)

module.exports = mongoose.model('Restaurent',restaurentModel)

module.exports = restaurentModel;