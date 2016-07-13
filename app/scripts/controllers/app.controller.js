'use strict';

angular.module('MapApp')
	.controller('AppController', ['$rootScope', '$scope', 'modelsFactory',
		function($rootScope, $scope, modelsFactory) {

			$scope.initAppController = function() {
				$rootScope.appControl = modelsFactory.appControl();
			};
		}
	]);
