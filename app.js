var WebSocket = require('ws'),
	Yo = require("yo-api"),
	finalhandler = require('finalhandler'),
	http = require('http'),
	serveStatic = require('serve-static');

var yo = new Yo(process.env.YO),
	ws = new WebSocket('wss://wss.redditmedia.com/thebutton?h=1efa165a3c60db15546696c4a043aaecfd2b84e7&e=1432057125');

ws.on('open', function () {
	yo.yo('dmjgilbert', function (e, f) {});
});

yo.yo('dmjgilbert', function (e, f) {});

ws.on('message', function (message) {
	var message = JSON.parse(message);
	if (message.payload) {
		var payload = message.payload;
		if (message.payload) {
			var secondsLeft = payload.seconds_left;

			if (secondsLeft < 3) {
				yo.yo('dmjgilbert', function (e, f) {});
			}

			if (secondsLeft <= 0) {
				yo.yo_all(function (e, f) {})
			}
		}
	}

});

ws.on('close', function close() {
	yo.yo('dmjgilbert', function (e, f) {});
});

var serve = serveStatic('site', {
	'index': ['index.html', 'index.htm']
})

var server = http.createServer(function (req, res) {
	var done = finalhandler(req, res)
	serve(req, res, done)
})

server.listen(process.env.PORT || 3000);
