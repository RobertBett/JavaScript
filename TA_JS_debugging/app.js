var app = angular.module('app', []);

app.controller('MainController', function($scope) {
	$scope.list = {
		"N.America": ["Canada", "United States"],
		'Africa': ["Egypt", "South Arica"],
		'Asia': ["China", "India"],
		'S.America': ["Argentina", "Brazil"],
		'Europe': ["France", "United Kindom"]
	}
	$scope.selected = null;
	$scope.bullets = "none";
})

.directive('country', function(){
	return {
		restrict: 'A',
		scope: {
			countries: '@'
		},
		template: '<ul ng-show="selected === $index" style="list-style-type: {{bullets}}">'+
					 '<li ng-repeat="country in countries">country</li>'+
				  '</ul>'
	};
});


