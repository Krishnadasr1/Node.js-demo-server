const express = require('express')
require('dotenv').config();
const app = express();


app.use('/api/v1',require('./router/route'));

module.exports = app;

