angular.module("myApp").controller("WordsController", [
    '$scope', '$http',
    function ($scope, $rootScope, $http) {

        $scope.$on('searchEvent', function(event, args) {

            console.log("search");

        });

        $scope.words = [
            {
                id: 1,
                title: 'Nova republica',
                description: 'Lorem Ipsum'
            },
            {
                id: 2,
                title: 'Nova republica',
                description: 'Lorem Ipsum'
            }
        ];

        $scope.days = [
            {
                date:"06/01/2016",
                words: $scope.words
            },
            {
                date:"07/01/2016",
                words: $scope.words
            },
            {
                date:"08/01/2016",
                words: $scope.words
            },
        ];


        $scope.load = function () {

            return $scope.days;

            /*
            $http
                .get("http://www.omdbapi.com/?t=")
                .success(
                function(response){$scope.details = response;});
            */
        };


        $scope.getCurrentLanguage = function () {

            if(!$rootScope.currentLanguage){
                $rootScope.currentLanguage="English";
            }

            return $rootScope.currentLanguage;
        }

        $scope.changeLanguage = function (language) {

            $rootScope.currentLanguage="abc";
            switch(language) {
                case "EN":
                    $rootScope.currentLanguage="English";
                    break;
                case "PT":
                    $rootScope.currentLanguage="Português";
                    break;
                case "ES":
                    $rootScope.currentLanguage="Español";
                    break;
                case "DE":
                    $rootScope.currentLanguage="Deutsch";
                    break;
                case "FR":
                    $rootScope.currentLanguage="Français";
                    break;
            }
        };

    }
]);