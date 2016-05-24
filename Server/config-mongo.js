var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shortly')
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
  }
})



var User = mongoose.model('users', UserSchema)
var Gif = mongoose.model('gifs', gifSchema)

module.exports = {
  User: User,
  Gif: Gif
}
