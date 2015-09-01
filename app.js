var express = require('express');

var app = express();

// enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use( express.static( __dirname + '/' ) );
//app.use('/bower_components', express.static(__dirname + '/bower_components'));
//app.use('/asi-scroll-anchor', express.static(__dirname + '/asi-scroll-anchor'));

app.listen(3000, '0.0.0.0');
console.log("Server running at http://localhost:3000");