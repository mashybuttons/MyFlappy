var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var app = express();

// var path = path.normalize(__dirname+'/../Client/index.html')
// console.log(path)
var bowerPath = path.normalize(__dirname + '/../bower_components');
app.use(express.static(path.normalize(__dirname + '/../Client')))
app.use('/bower_components', express.static(bowerPath))

app.get('/', function (req, res) {
 
  res.render('/index.html')
})
app.listen(3000)
