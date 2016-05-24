angular.module('Flappy', [
  'ngRoute',
  'Flappy.http',
  'Flappy.game'
  ])

.config(function ($routeProvider) {
  $routeProvider
    .when('/play', {
      templateUrl: '/App/Game/game.html',
      controller: 'GameController'
    })
})

.controller('AppController', function($scope) {
  $scope.hideme = false;

  $scope.hideIt = function(){
    $scope.hideme = true;
  }

})