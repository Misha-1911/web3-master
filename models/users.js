const { Schema, model } = require('mongoose');

const schema = new Schema({
name:{type:String},
email:{type:String,require:true},
password:{type:String,require:true},
});

const Users = new model('users',schema);

module.exports = {Users};z