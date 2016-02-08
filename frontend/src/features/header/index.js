'use strict';

var angular = require('angular'),
uirouter = require('angular-ui-router'),
controller = require('./header.controller');

module.exports = angular.module('header', [uirouter])
.controller('HeaderCtrl', controller)
.name;