'use strict';
/** trip model **/

//load modules
const mongoose = require('mongoose'),
Schema = mongoose.Schema;

//create schema for trip
let TripSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: true,
		trim: true
	},
	price: {
		type: Number,
		default: 0
	},
	description: {
		type: String,
		default: '',
		trim: true
	}
});

// register trip schema to mongoose and export
module.exports = mongoose.model('Trip', TripSchema);

