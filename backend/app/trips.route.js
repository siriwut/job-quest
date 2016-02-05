'use strict';
/** trips router **/

//load modules
const express = require('express'),
router = express.Router(),
trip = require('./trips.controller'); 

router.route('/api/trips')
.get(trip.list) //bind http method GET for list all trips callback
.post(trip.add); //bind http method POST for create new trip callback

router.route('/api/trips/:id')
.get(trip.read) //bind http method GET with id param for get trip detail callback
.put(trip.edit) //bind http method PUT with id param for update trip detail callback
.delete(trip.remove); //bind http method DELETE with id param for delete trip callback

router.param('id', trip.findById); //bind id param to find trip by id

module.exports = router;

