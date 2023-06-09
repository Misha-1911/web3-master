const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const sessions = require('./api/sessions.api');
const theaters = require('./api/theaters.api');
const users = require('./api/users.api');

console.log(`MONGO_DB_URI:${process.env.MONGO_DB_URI}`);

const Mongo = require('./setup/mongoose');

const app = express();
app.use(bodyParser.json());

const setup = async () => {
 await Mongo.setupDb(process.env.MONGO_DB_URI);

 app.use(theaters.router);
app.use(sessions.router);
app.use(users.router);


 
 app.listen(process.env.PORT, () => {
  console.log(`Server was started on ${process.env.PORT}`);
 });

};

setup();