angular.module('StarWarsApp')
	.controller('filmController', ['$scope', '$http', 'filmFactory', '$routeParams', function($scope, $http, filmFactory, $routeParams){

        var id = $routeParams.id;

		filmFactory.getById(id, function(err, film) {
            if(err) {
                return console.log(err);
            }
            $scope.film = film;
            $scope.crumbsArray = [
            	{ url: '#/', name: 'Home' },
            	{ url: '#/films', name: 'Films' },
            	{ name: $scope.film.name }
            ];
        });  
	}]);