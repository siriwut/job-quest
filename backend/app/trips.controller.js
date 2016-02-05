'use strict'

/** trips controller **/

//load modules
const _ = require('lodash'), 
Trip = require('./trip.model');

//list all trips 
exports.list = function(req, res) {
	Trip
	.findAsync(null, { name: 1 })
	.then((trips) => {
		res.jsonp(trips);
	}, (e) => {
		res.jsonp({ 
			message: e.message
		});
	});
};

//create new trip
exports.add = function(req, res) {
	let trip = new Trip(req.body);

	trip
	.saveAsync()
	.then((trip) => {
		res.jsonp(trip);
	}, (e) => {
		res.jsonp({ 
			message: e.message
		});
	});
};

//get trip detail
exports.read = function(req, res) {
	res.jsonp(req.trip);
};

//update trip
exports.edit = function(req, res) {
	let trip = _.assignIn(req.trip, req.body);

	trip
	.saveAsync()
	.then((trip) => {
		res.jsonp(trip);
	}, (e) => {
		res.jsonp({ 
			message: e.message 
		});
	});
};

//delete trip
exports.remove = function(req, res) {
	let trip = req.trip;

	trip
	.removeAsync()
	.then((trip) => {
		res.jsonp(trip);
	}, (e) => {
		res.jsonp({ 
			message: e.message 
		});
	})
};

//find trip by id param
exports.findById = function(req, res, next, id) {
	Trip
	.findByIdAsync(id)
	.then((trip) => {
		//if trip not empty assign assign trip and send req to next middleware
		if(trip) {
			req.trip = trip;
			return next();
		}

		//if trip empty send error message
		res.jsonp({ 
			message: 'trip not found' 
		});	
	}, (e) => {
		res.jsonp({ 
			message: 'failed to load trip' 
		});
	});
};