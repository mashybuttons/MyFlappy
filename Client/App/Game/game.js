angular.module('Flappy.game', [])

.controller('GameController', function($scope, http, $window) {
  $scope.gameData = [];
  $scope.user = '';
  $scope.updateUsername = http.post($scope.user)
    .then(function (result) {
      $scope.user = "Welcome back from the server " + result;
    })
    .catch(function(err) {
      console.log(err)
    })
})