var app = angular.module('app', ['ui.router'])


app.controller('myController', function($scope, $http){



  $scope.sendData = function() {

    var data = { userName: $scope.userName };
    console.log($scope.userName);
    $http.post('/postUsername', data)
    .success(function (data, status, headers, config) {
      $scope.PostDataResponse = data;
    })
    .error(function (data, status, header, config) {
      $scope.PostDataResponse = "Data: " + status;
    });
  };
});
