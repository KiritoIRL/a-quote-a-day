

var express = require('express');	// requiring the 'express' module.
var app = express();

app.get('/', function(request, response) {	// We'll serve the index.html file when
											//	user accesses localhost:3000
	response.sendFile(__dirname + '/index.html');
});					// __dirname variable references to current directory in which app.js is located.

// Port number where server listens.
//var port = 3000;
var port = process.env.PORT || 8080;	// We've just changed the port number from 3000 to 8080 in app.js

var server = app.listen(port, function(req, res) {
	console.log("Catch the action at: http://localhost:" + port);
});