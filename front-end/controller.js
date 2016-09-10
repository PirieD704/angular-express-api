var searchStudentApp = angular.module('searchStudentApp', []);
searchStudentApp.controller('searchStudentController', function($scope, $http){
	
	var apiUrl = "http://localhost:3000";
	$http({
		method: "GET",
		url: apiUrl + '/getStudents'
	}).then(
		function successCallback(response){
			$scope.myClass = response.data;
		}, function failureCallback(response){
			$scope.result = "ERROR!!!";
		}
	)


})