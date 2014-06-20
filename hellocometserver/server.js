var express = require('express');
var app = express();

// CONTRIBUTED MIDDLEWARE
var bodyParser = require('body-parser');
app.use(bodyParser());

// ROUTES
app.use('/messages', require('./server/routes/messages'));

app.listen(3001);
