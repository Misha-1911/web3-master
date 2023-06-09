const {Schema, model} = require('mongoose');

const schema = new Schema({
theaterId:{type:Number},
location:{
    address:
    {
        street1:{type:String},
        city:{type:String},
        state:{type:String},
        zipcode:{type:String},
    },
    geo:
    {
        type:{type:String},
        coordinates:{type:[Number]},
    },
},
 })
 const Theater = new model('theater',schema);

 module.exports = {Theater};