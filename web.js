var express = require("express");
var logfmt = require("logfmt");
var app = express();

var songs = [
	'4zzXnAXdU0ilshAdLgyYBT',
	'6BtHjUHuNYh7w5daOE6iBY',
	'4nQNNwnIUUmFzVOcVVJCk1',
	'0RabJGGnKLiiW6EeMAyh3p',
	'221mzU0izy6JdU1zRlIMAM',
	'0m8BLDLvxup9iB3XkId4Jz',
	'4i2TDkP0zm4CxYkmWW6EX4'
];

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

app.use(logfmt.requestLogger());
app.use(express.static(__dirname))

app.get('/', function(req, res) {
	//res.send('Hello World!');
	res.render('index', { 
		pageTitle: 'Shuffle it',
		hello: 'Lunch shuffle! (demo) v0.1',
		songId: songs[Math.floor( Math.random() * songs.length)]
	});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});