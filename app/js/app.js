'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.main',
    'myApp.version',
    'leaflet-directive'
]).
factory('searchService', function () {

    var search = function () {

        console.log("search 2");

        return ;
    };

    return {
        search: search
    };
}).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/newRepublica', {
            templateUrl: 'republica/newRepublica.html',
            controller: 'RepublicaController'
        })
        .when('/login', {
            templateUrl: 'login/login.html',
            controller: 'LoginController'
        })
        .when('/main', {
            templateUrl: 'main/words.html',
            controller: 'MainController'
        }).
		when('/priview', {
            templateUrl: 'priview/priview.html',
            controller: 'VehicleController'
        }).
        when('/words', {
            templateUrl: 'words/words.html',
            controller: 'WordsController'
        }).
        otherwise({
            redirectTo: '/words'
        });
}]);
