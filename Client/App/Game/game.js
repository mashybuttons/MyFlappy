angular.module('Flappy.game', [])

.controller('GameController', function($scope, http, $window) {
  $scope.gameData = [];
  $scope.user = {};
  $scope.updateUsername = function() {
    console.log($scope.user)
    http.post($scope.user)
    .then(function (result) {
      console.log("IM HERE", result.data)
      $scope.user.currentname = "Welcome back from the server " + result.data.username;
      $scope.user.username = "";
    })
    .catch(function(err) {
      console.log(err)
    })
  }

  $scope.randomMouse = function() {
      var gifArr = [
        'url("../styles/duck.gif")',
        'url("../styles/doge.gif")',
        'url("../styles/duck.gif")',
        'url("../styles/cat.gif")'
        ]

      var randomIndex = gifArr[(Math.floor(Math.random()*gifArr.length))]
     $('.mouse').css({
      'background': randomIndex + "no-repeat",
      'background-size': '100px 100px'
      });
  }


  $scope.loadScript = function (url, type, charset) {
    var head = document.querySelector('head');
    if(head) {
      script = document.createElement('script');
      script.setAttribute('src', url);
      script.setAttribute('type', type);
      if (charset) { 
        script.setAttribute('charset', charset);
      }
      head.appendChild(script);
    }
  }

  $scope.loadScript('/App/Game/flappybird.js', 'text/javascript', 'utf-8');

})