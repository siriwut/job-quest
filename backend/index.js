'use strict'
/** main module **/

//load modules
const express = require('express'),
app = express(),
mongoose = require('mongoose'),
bodyParser = require('body-parser'),
router = require('./app/trips.route');

//create bodyParser middleware to parse json or x-www-form-urlencoded request
app.use(bodyParser.urlencoded({	extended: true }));
app.use(bodyParser.json());

//create index route
app.get('/', (req, res) => {
	res.send('Hello Take Me Tour');
});

//create router middleware to route api
app.use(router);

//start mongodb database
mongoose.connect('mongodb://localhost/trip', () => {
	console.log('mongodb connected on mongodb://localhost/trip!');
});

//start server
app.listen(3000, () => {
	console.log('Server listening on port 3000!');
});