var myApp = angular.module('myApp', []);
myApp.controller('myController', function($scope){
	$scope.images = [
		'image1', 'image2', 'image3', 'image4', 'image5'
	];

	$scope.displayImage = function(image) {
		var previewPane = document.getElementById('preview');
		previewPane.src = "images/" + $scope.images[image] + ".jpg";
	}

})