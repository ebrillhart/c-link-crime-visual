angular.module('CrimeServices', []).factory('Crime', ['$resource', function($resource) {
	// pulls data from Socrata API
    return $resource('https://data.seattle.gov/resource/pu5n-trf4.json?$where=within_circle(incident_location,47.593307,-122.332165,1609)');
}]);