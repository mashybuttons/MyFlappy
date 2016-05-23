angular.module('Flappy', [
  'ngRoute',
  'Flappy.http',
  'Flappy.game'
  ])

.config(function ($routeProvider) {
  $routeProvider
    .when('/play', {
      templateUrl: '/Game/game.html',
      controller: 'GameController'
    })
})