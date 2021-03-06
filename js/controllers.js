angular.module('CrimeCtrls', ['CrimeServices', 'nvd3', 'ngMap']).controller('PieChartCtrl', ['$scope', 'Crime', function($scope, Crime) {
    // this controller manages the pie chart visualization for crime categorization
    // creating category arrays
    $scope.resultCrimes = [];
    $scope.pettyTheft = [];
    $scope.robberyAssaultInjury = [];
    $scope.trafficViolationsAccidents = [];
    $scope.property = [];
    $scope.generalDisturbances = [];
    $scope.falseAlarms = [];
    $scope.behavioralMentalHealth = [];
    $scope.autoThefts = [];
    $scope.weaponsCalls = [];
    $scope.miscMisdmeanors = [];
    $scope.threatsHarassment = [];
    $scope.liquorNarcotics = [];
    $scope.otherCrimes = [];
    // getting the data set
    Crime.query(function success(data) {
        $scope.resultCrimes = data;
        // sorting the meals into separate display arrays depending on type of meal
        $scope.resultCrimes.forEach(function(incident) {
            if (incident.event_clearance_group == "SHOPLIFTING" || incident.event_clearance_group == "BURGLARY" || incident.event_clearance_group == "OTHER PROPERTY") {
                // filtering into petty theft
                $scope.pettyTheft.push(incident);
            } else if (incident.event_clearance_group == "ROBBERY" || incident.event_clearance_group == "ASSAULTS" || incident.event_clearance_group == "PERSON DOWN/INJURY") {
                // filtering into robbery
                $scope.robberyAssaultInjury.push(incident);
            } else if (incident.event_clearance_group == "TRAFFIC RELATED CALLS" || incident.event_clearance_group == "ACCIDENT INVESTIGATION" || incident.event_clearance_group == "MOTOR VEHICLE COLLISION INVESTIGATION") {
                // filtering into traffic violations and accidents
                $scope.trafficViolationsAccidents.push(incident);
            } else if (incident.event_clearance_group == "PROPERTY DAMAGE" || incident.event_clearance_group == "BIKE" || incident.event_clearance_group == "TRESPASS" || incident.event_clearance_group == "PROPERTY - MISSING, FOUND" || incident.event_clearance_group == "CAR PROWL") {
                // filtering into property crimes
                $scope.property.push(incident);
            } else if (incident.event_clearance_group == "NUISANCE, MISCHIEF" || incident.event_clearance_group == "SUSPICIOUS CIRCUMSTANCES" || incident.event_clearance_group == "DISTURBANCES" || incident.event_clearance_group == "HAZARDS" || incident.event_clearance_group == "PROWLER") {
                // filtering into general disturbance crimes
                $scope.generalDisturbances.push(incident);
            } else if (incident.event_clearance_group == "FALSE ALARMS" || incident.event_clearance_group == "NULL" || incident.event_clearance_group == "FALSE ALACAD") {
                // filtering into false alarms
                $scope.falseAlarms.push(incident);
            } else if (incident.event_clearance_group == "LEWD CONDUCT" || incident.event_clearance_group == "MENTAL HEALTH" || incident.event_clearance_group == "BEHAVIORAL HEALTH") {
                // filtering into behavioral/mental
                $scope.behavioralMentalHealth.push(incident);
            } else if (incident.event_clearance_group == "AUTO THEFTS") {
                // filtering into auto thefts
                $scope.autoThefts.push(incident);
            } else if (incident.event_clearance_group == "WEAPONS CALLS") {
                // filtering into weapons calls
                $scope.weaponsCalls.push(incident);
            } else if (incident.event_clearance_group == "MISCELLANEOUS MISDEMEANORS") {
                // filtering into miscellaneous misdemeanors
                $scope.miscMisdmeanors.push(incident);
            } else if (incident.event_clearance_group == "THREATS, HARASSMENT") {
                // filtering into threats and harassment
                $scope.threatsHarassment.push(incident);
            } else if (incident.event_clearance_group == "LIQUOR VIOLATIONS" || incident.event_clearance_group == "NARCOTICS VIOLATIONS") {
                // filtering into to liquor or narcotics
                $scope.liquorNarcotics.push(incident);
            } else {
                $scope.otherCrimes.push(incident);
                console.log($scope.otherCrimes);
            }
            // data for pie chart
            $scope.data = [{
                key: "Petty Theft",
                // converting count into percentage
                y: ($scope.pettyTheft.length / 5000) * 100
            }, {
                key: "Violent (Robbery/Mugging/Assault/Injury)",
                y: ($scope.robberyAssaultInjury.length / 5000) * 100
            }, {
                key: "Traffic Violations & Accidents",
                y: ($scope.trafficViolationsAccidents.length / 5000) * 100
            }, {
                key: "Property Crimes",
                y: ($scope.property.length / 5000) * 100
            }, {
                key: "General Disturbances",
                y: ($scope.generalDisturbances.length / 5000) * 100
            }, {
                key: "False Alarms",
                y: ($scope.falseAlarms.length / 5000) * 100
            }, {
                key: "Behavioral & Mental Health",
                y: ($scope.behavioralMentalHealth.length / 5000) * 100
            }, {
                key: "Auto Thefts",
                y: ($scope.autoThefts.length / 5000) * 100
            }, {
                key: "Weapons Calls",
                y: ($scope.weaponsCalls.length / 5000) * 100
            }, {
                key: "Miscellaneous Misdemeanors",
                y: ($scope.miscMisdmeanors.length / 5000) * 100
            }, {
                key: "Threats & Harassment",
                y: ($scope.threatsHarassment.length / 5000) * 100
            }, {
                key: "Alcohol or Drug Related",
                y: ($scope.liquorNarcotics.length / 5000) * 100
            }, {
                key: "Other",
                y: ($scope.otherCrimes.length / 5000) * 100
            }];
        });
    }, function error(data) {
        console.log(data);
    });
    // options for pie chart styling
    $scope.options = {
        chart: {
            type: 'pieChart',
            height: 500,
            x: function(d) {
                return d.key;
            },
            y: function(d) {
                return d.y;
            },
            showLabels: false,
            duration: 500,
            labelThreshold: 0.01,
            labelSunbeamLayout: true,
            legend: {
                margin: {
                    top: 5,
                    right: 35,
                    bottom: 5,
                    left: 0
                }
            }
        }
    };
}]).controller('LocationCtrl', ['$scope', 'Crime', 'NgMap', function($scope, Crime, NgMap) {
    // initializing map for location visual
    NgMap.getMap().then(function(map) {
    	console.log(map);
    });
}]);