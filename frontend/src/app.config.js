'use strict';

/** config for main application route **/

router.$inject = ['$urlRouterProvider', '$locationProvider'];

function router($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);//expose !# of angular
  $urlRouterProvider.otherwise('/');
}

module.exports = router;