angular.module('Flappy.http', [])

  .factory('http', function($http) {
    var get = function () {
      return $http({
        method: 'GET',
        url: 'api/"SOMETHING"'
      }).then(function success(resp) {
        console.log(resp)
      }, function err(err) {
        console.log(err)
      });
    };

    var post = function (data) {
      return $http({
        method: 'POST',
        url: 'api/username',
        data: data
      }).then(function success(resp) {
        console.log("post success", resp)
      })
      .catch(function(err) {
        console.log("did not post", err)
      });
    };

    return {
      get: get,
      post: post
    }


  })