'use strict';

angular.module('myApp.main', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main', {
    templateUrl: 'main/main.html',
    controller: 'MainController'
  });
}])

.controller("MainController", [
	'$scope','$location',
    function($scope, $location){

        $scope.login = function(){
           console.log("Usuário logado");
        }
    }
]);