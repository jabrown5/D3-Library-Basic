// ********************
// WDI7 server practice
var express = require("express");
var path 	= require("path");
// app is the object we return everytime we invoke express
var app		= express();
// http (below) is already a part of node
var server = require('http').createServer(app);


// telling express that our views are in ./views
app.set('views', path.join(__dirname, 'views'));
// telling epxress that we are using handlebars
// app.set('view engine', 'hbs');

// app.use(express.static(path.join(__dirname + '/public')));
app.use(express.static(__dirname + '/public'));


// app.get('/', function(request, response) {
// 	response.render('home',{name:"Jen", loggedIn: true, friends:['kirby','benny','lewis']});
// })

// 1st argument is the port #
server.listen(3000, function() {
	console.log('server is listening on port 3000')
})