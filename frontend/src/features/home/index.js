'use strict';
/** entry point of home module **/
var angular = require('angular'),
uirouter = require('angular-ui-router'),
routes = require('./home.routes'),
controller = require('./home.controller');

//register home module with angular
module.exports = angular.module('home', [uirouter])
.config(routes)
.controller('HomeCtrl', controller)
.name;