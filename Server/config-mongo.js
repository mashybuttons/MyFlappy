var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/flappy')
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we in!!")
});



var UserSchema = new mongoose.Schema({
  username:  {
    type: String,
    required: true,
    unique: true
  }
})

var gifSchema = new mongoose.Schema({
  url:  {
    type: String,
    required: true,
    unique: true
  }
})


var User = mongoose.model('users', UserSchema)
var Gif = mongoose.model('gifs', gifSchema)


  var gifArr = [
        {url: 'url("../styles/duck.gif")'},
        {url: 'url("../styles/doge.gif")'},
        {url: 'url("../styles/flappy.gif")'},
        {url: 'url("../styles/cat.gif")'},
        {url: 'url("../styles/bmo.gif")'},
        {url: 'url("../styles/corgi.gif")'},
        {url: 'url("../styles/pikachu.gif")'},
        {url: 'url("../styles/kirby.gif")'},
        {url: 'url("../styles/pony.gif")'},
        {url: 'url("../styles/donut.gif")'}

      ]

Gif.collection.insert(gifArr, function(err, docs) {
  if(err) {
    console.log(err);
  } else {
    console.log("gifs were inserted");
  }
})

module.exports = {
  User: User,
  Gif: Gif
}
