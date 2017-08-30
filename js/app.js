var app = angular.module('myApp', [])


app.controller('myCtrl', function($scope){
	// shopping list already written presented in array
	$scope.products = ['Milk', 'Shampoo', 'Vegetables']


	// adding new items in the array using push method
	$scope.additems = function(){
		$scope.products.push($scope.addme)
	}

	
	// removing items once done using splice method
	$scope.removeItems = function(x){
		$scope.products.splice(x, 1)
	}
})