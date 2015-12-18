angular.module('CrimeServices', []).factory('Crime', ['$resource', function($resource) {
    return $resource('https://data.seattle.gov/resource/pu5n-trf4.json?$where=within_circle(incident_location,%2047.593307,%20-122.332165,%201609)');
}]);