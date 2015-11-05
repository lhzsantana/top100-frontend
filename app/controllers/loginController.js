
angular.module("myApp").controller("LoginController", [
	'$scope','$location',
    function($scope, $location){

        $scope.login = function(){
           console.log("Usuário logado");
        }
    }
]);