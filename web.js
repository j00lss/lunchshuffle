var express = require("express");
var logfmt = require("logfmt");
var SpotifyWebApi = require('spotify-web-api-node');

var spotifyScopes = ['user-read-private'],
	spotifyState = 'some-state-of-my-choice';
	spotifyClientId = '580224fcb345437ebea001635c15a587',
	spotifyClientSecret = '7f94649fd6a142a190482081fdc158b6',
	spotifyRedirectUri = 'http://localhost:5000/cb';

var spotifyApi = new SpotifyWebApi({
	clientId : spotifyClientId,
  	clientSecret : spotifyClientSecret,
  	redirectUri: spotifyRedirectUri
});

var authorizeURL = spotifyApi.createAuthorizeURL(spotifyScopes, spotifyState);

/*spotifyApi.getPlaylist('joolss', '3mBXQXXuEkx3PE2Zwm7vBd')
  .then(function(data) {
    console.log('Some information about this playlist', data);
  }, function(err) {
    console.log('Something went wrong!', err);
  });*/

var app = express();

app.set('views', __dirname + '/views')
app.set('view engine', 'vash')

app.use(logfmt.requestLogger());
app.use(express.static(__dirname))

app
	.get('/', function(req, res) {
	//res.send('Hello World!');
	res.render('index', { 
		pageTitle: 'Lez shuffle it',
		hello: 'Lunch shuffle! (demo) v0.2',
		//songId: songs[Math.floor( Math.random() * songs.length)]
	});
	}).get('/cb', function(req, res) {
		res.render('cb', { 
			pageTitle: 'Callback page',
		});
	});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});