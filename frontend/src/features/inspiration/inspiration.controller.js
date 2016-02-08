'use strict';
/** controller for inspiration section **/

var inspirationCtrl = (function() {

	function inspirationCtrl($scope, $q, Inspiration) {

		$scope.getInspiration = getInspiration;
		$scope.isSpecialColumnSize = isSpecialColumnSize;

		function getInspiration() {
			return Inspiration
			.get()
			.then(function(inspirations) {
				$scope.inspirations = inspirations;
			}, function(err) {
				$scope.error = 'loading failed...';
			});
		}

		function isSpecialColumnSize(row, col) {
			return (row === 0 && col === 1) || (row === 2 && col === 0);
		}

	};

	inspirationCtrl.$inject = ['$scope', '$q', 'Inspiration'];

	return inspirationCtrl;
})();



module.exports = inspirationCtrl;