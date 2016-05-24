var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var User = require('./config-mongo.js').User;
var Gif = require('./config-mongo.js').Gif;
var app = express();


// var path = path.normalize(__dirname+'/../Client/index.html')
// console.log(path)
var bowerPath = path.normalize(__dirname + '/../bower_components');
app.use(express.static(path.normalize(__dirname + '/../Client')))
app.use('/bower_components', express.static(bowerPath))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());


app.get('/', function (req, res) {
  res.render('/index.html')
})

app.get('/api/random', function (req, res) {
  Gif.find()
    .then(function(gifs) {
      if(!gifs) {
        console.log("NO GIFS")
        res.send(gifs)
      } else {
        res.send(gifs)
      }
    })
    .catch(function(err) {
      res.status(404).send('BAD REQUEST')
    })

})

app.post('/api/username', function(req, res) {
  var username = req.body.username
  User.findOne({username: username})
    .then(function(user) {
      if(!user) {
        User.create({username: username})
          .then(function(created) {
            console.log(created, " user created")
            res.send(created)
          })
      } else {
        console.log(user)
        res.send(user)
      }
    })
    .catch(function(err) {
      res.status(404).send('BAD REQUEST')
    })

})
app.listen(3000)

module.exports = app;