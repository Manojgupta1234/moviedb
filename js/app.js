var app = angular.module('movieApp', ['ngRoute']);

app.controller('movieController', function($scope, $http){
	$scope.searchMovie = function(){
		$http.get("https://api.themoviedb.org/3/search/movie?api_key=40e8b08d2f05d6371eae6c02ebd097bd&query="+$scope.movieSearchText)
				.then(function(response){
					$scope.movieData = response.data.results;
				},function(error){
					alert("No result");
				});
	}
	$scope.clickMovie = function(id){
		$http.get("https://api.themoviedb.org/3/movie/"+id+"?api_key=40e8b08d2f05d6371eae6c02ebd097bd")
			.then(function(response){
				$scope.movieDesc = response.data;
			})
		}
});
app.directive('movieList', function($http){
    return {
        scope: { 
        	movie : '=',
        	go : '&'
         }, 
        controller: function($scope, $element, $attrs, $transclude) {
        },
        require: '?ngModel', 
        restrict: 'E',
        templateUrl: '../movieList.html',
        replace: true,
        link:{
        	post: function(scope, element, attr, controller) {
        	  
    		}
    	}
    }
});