angular.module('Flappy.game', [])

.controller('GameController', function($scope, http, $window) {
  $scope.gifArr = [];
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

    http.get()
      .then(function(result) {
        console.log(result)
        console.log(result[(Math.floor(Math.random()*result.length))].url) 
        var randomIndex = result[(Math.floor(Math.random()*result.length))].url
         $('.mouse').css({
          'background': randomIndex + "no-repeat",
          'background-size': '100px 100px'
          });
        $scope.gifArr = result
      })
      .catch(function(err) {
        console.log(err, "didnt get gifs")
      })
    
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