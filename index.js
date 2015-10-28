console.log("Hello World!")
var express = require('express');
 var app = express(); //instantiating express

 app.get('/', function (req, res) {
   res.send('Hello World!');
 });
 
 app.get('/greet/:name', function(req, res) { //req store info
     res.send('Hello there, ' + req.params.name + '!')
 })

 var server = app.listen(process.env.PORT, function () {
   var host = server.address().address;
   var port = server.address().port;

   console.log('Example app listening at http://%s:%s', host, port);
 });