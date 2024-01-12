const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userschema = new schema ({
    name:String,
    lastname:{type:String},
    phone:{type:Number, required:[true]},
    createdAt:{type:Date, default:Date.now},
    status:{type:Boolean, required:[true], enum:[true,false]}
});

module.exports= mongoose.model("contactDetail",userschema);

