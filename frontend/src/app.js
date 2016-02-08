'use strict';
//entry point for load all modules
var angular = require('angular'),
uirouter = require('angular-ui-router'),
router = require('./app.config'),
home = require('./features/home/'),
header = require('./features/header/'),
inspiration = require('./features/inspiration/');

require('./assets/sass/style.scss');

//point for kickstart angular application
angular
.module('TripApp', [uirouter, home, header, inspiration])
.config(router);