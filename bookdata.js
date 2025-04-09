const mongodb=require('mongoose');

mongodb.connect('mongodb://localhost:27017/bookdb');

let dataSchema=new mongodb.Schema({
    title:String,
    author:String,
    year:String
})

module.exports = mongodb.model('data',dataSchema);