const {Schema, model} = require('mongoose');

const schema = new Schema({
user_id:{type: String},
jwt:{type : String},
});

const Sessions=new model('sessions',schema);

module.exports = {Sessions};