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
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());


app.get('/', function (req, res) {
  res.render('/index.html')
})

app.post('/api/username', function(req, res) {
  console.log("REQ.BODY", req.body)
  res.send(req.body);

})
app.listen(3000)
