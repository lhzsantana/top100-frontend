'use strict';

angular.module('myApp.main', ['ngRoute'])
.controller("WordController", [
	'$scope','$location',
    function($scope, $location){

        $scope.login = function(){
           console.log("Usuário logado");
        }
    }
]);