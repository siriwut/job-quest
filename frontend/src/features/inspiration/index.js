'use strict';
/** entry point of inspiration module **/
var angular = require('angular'),
uirouter = require('angular-ui-router'),
controller = require('./inspiration.controller'),
service = require('../../services/inspiration.service.js');

//register inspiration module with angular
module.exports = angular.module('inspiration', [uirouter])
.controller('InspirationCtrl', controller)
.factory('Inspiration', service)
.name;