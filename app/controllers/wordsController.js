angular.module("myApp").controller("WordsController", [
    '$scope', '$http',
    function ($scope, $http) {
		
			$http.get("http://localhost:8080/vehicle/list")
			.then(function(response) {$scope.names = response.data;});

    }
]);