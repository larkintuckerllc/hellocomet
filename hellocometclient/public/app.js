var myApp = angular.module('myApp', [
	'ngRoute',
	'blockUI',
	'navigatorServices',
	'cometServices',
	'errorsControllers',
	'indexControllers'
])
.config(function(blockUIConfigProvider) {
	blockUIConfigProvider.autoBlock(false);
});
