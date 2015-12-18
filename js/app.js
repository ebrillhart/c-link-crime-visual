var app = angular.module('CrimeApp', ['CrimeServices', 'CrimeCtrls', 'ngResource']);

// dougnut factory recipe
app.factory("Doughnut", ['$resource', function($resource) {
	return $resource('http://api.doughnuts.ga/doughnuts/:id');
}]);

app.controller('DoughnutCtrl', ['$scope', "Doughnut", function($scope, Doughnut) {
	console.log(Doughnut);

	$scope.doughnuts = [];
	$scope.loaded = false;

	Doughnut.query(function success(data) {
		$scope.loaded= true;
		$scope.doughnuts = data;
		console.log(data);
	}, function error(data) {
		console.log(data);
	});

	$scope.doughnut = {};
	Doughnut.get({id: 3}, function success(data) {
		$scope.doughnut = data;
	});
}]);