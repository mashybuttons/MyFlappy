angular.module('Flappy.http', [])

  .factory('http', function($http) {
    var get = function () {
      return $http({
        method: 'GET',
        url: 'api/random'
      }).then(function success(res) {
        console.log("THIS IS FACTORY RES", res.data)
        return res.data
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
        console.log("POSTED", resp)
        return resp
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