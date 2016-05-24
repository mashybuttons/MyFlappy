angular.module('Flappy.game', [])

.controller('GameController', function($scope, http, $window) {
  $scope.gifArr = [];
  $scope.user = {};
  $scope.message = "Enter username to play"
  $scope.updateUsername = function() {
    console.log($scope.user)
    http.post($scope.user)
    .then(function (result) {
      console.log("IM HERE", result.data)
      $scope.user.currentname = result.data.username;
      $scope.message= 'Welcome'
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
     //  var gifArr = [
     //    'url("../styles/duck.gif")',
     //    'url("../styles/doge.gif")',
     //    'url("../styles/flappy.gif")',
     //    'url("../styles/cat.gif")'
     //    ]

    
  }

  $scope.hideme = true;

  $scope.unHide = function(){
    $scope.hideme = false;
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