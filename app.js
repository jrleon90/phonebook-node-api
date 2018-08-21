require('dotenv').config();
const express = require('express');
const db = require('./database/db');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Load Routes
require('./route/route')(app);

//Root route
app.use('/',(req,res)=>{
    res.json({'Message': 'Welcome to the Phonebook API!'})
 });


 module.exports = app;