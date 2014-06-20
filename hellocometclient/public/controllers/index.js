var indexControllers = angular.module('indexControllers', []);

indexControllers.controller('IndexHomeCtrl', ['$scope', 'navigator', 'comet', function ($scope, navigator, comet) {
	$scope.menuOpen = false;
	$scope.navigate = navigator.navigate;
	$scope.toggleMenu = function() {
		$scope.menuOpen = ! $scope.menuOpen;
	}
	$scope.pings = [];
	$scope.post = function() {
		comet.post(
			function() {
				// SUCCESS
			},
			function() {
				// ERROR
				navigator.navigate('/network-error');
			}
		);
	};
	comet.watch( 
		function() {
			// SUCCESS
			$scope.pings.push({});
		},
		function() {
			// ERROR
			navigator.navigate('/network-error');
		}
	);
}]);
