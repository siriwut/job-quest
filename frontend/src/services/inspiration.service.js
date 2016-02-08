'use strict';
/** service for fetch TakeMeTour API data **/

var Inspiration = (function() {
	
	function Inpiration($http, $q) {
		var API = 'https://www.takemetour.com/api/home';

		function getInspiration() {
			var deferred = $q.defer();

			$http
			.get(API)
			.then(function(homeObj) {
				deferred
				.resolve(homeObj.data.inspiration_layouts);
			}, function(err) {
				deferred.reject(err);
			});

			return deferred.promise;
		}

		function get() {
			return getInspiration();
		};

		return {
			get: get
		};
	}

	Inpiration.$inject = ['$http', '$q'];

	return Inpiration;

})();

module.exports = Inspiration;