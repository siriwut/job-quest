'use strict';
/** config route for home module **/
var routes = (function(){
	routes.$inject = ['$stateProvider'];

	function routes($stateProvider) {
		$stateProvider.state('home', {
			url: '/',
			template: require('./home.html'),
			controller: 'HomeCtrl',
			controllerAs: 'home'
		});
	}

	return routes;
})();

module.exports = routes;