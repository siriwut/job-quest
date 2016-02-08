'use strict';
//controller for home module
var headerCtrl = (function() {
	var logo = require('../../assets/images/logo.png');

	function headerCtrl($scope) {
		$scope.logo = logo;
	};

	return headerCtrl;
	
})();


module.exports = headerCtrl;